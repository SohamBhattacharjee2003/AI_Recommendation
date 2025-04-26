from flask import Blueprint, jsonify, request
import pandas as pd
import os
from werkzeug.utils import secure_filename
from ml.recommender import JobRecommender
from model.gemini_resume_parser import extract_resume_insights
from google import genai
from dotenv import load_dotenv
import requests  # For API calls

# Load environment variables from .env file
load_dotenv()

job_bp = Blueprint('jobs', __name__)

# CSV directory path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, '../data')
UPLOAD_DIR = os.path.join(BASE_DIR, '../uploads')

# Initialize the recommender
RECOMMENDER = JobRecommender(os.path.join(DATA_DIR, 'sample_internship_job_dataset.csv'))

# Ensure upload directory exists
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Initialize the GenAI client
GENAI_API_KEY = os.getenv("GENAI_API_KEY")  # Load API key from .env
if not GENAI_API_KEY:
    raise ValueError("GENAI_API_KEY is not set in the .env file")

client = genai.Client(api_key=GENAI_API_KEY)

# Exchange Rate API Key
EXCHANGE_RATE_API_KEY = os.getenv("EXCHANGE_RATE_API_KEY")  # Load API key for exchange rates
if not EXCHANGE_RATE_API_KEY:
    raise ValueError("EXCHANGE_RATE_API_KEY is not set in the .env file")

# Function to fetch exchange rates
def get_exchange_rate(base_currency, target_currency='INR'):
    url = f'https://v6.exchangerate-api.com/v6/{EXCHANGE_RATE_API_KEY}/latest/{base_currency}'
    try:
        response = requests.get(url)
        data = response.json()
        if response.status_code == 200 and 'conversion_rates' in data:
            return data['conversion_rates'].get(target_currency, None)
        else:
            print(f"Error fetching exchange rate: {data.get('error-type', 'Unknown error')}")
            return None
    except Exception as e:
        print(f"Error: {str(e)}")
        return None

def extract_resume_insights(file_path):
    try:
        if file_path.endswith('.pdf'):
            from PyPDF2 import PdfReader
            reader = PdfReader(file_path)
            text = " ".join(page.extract_text() for page in reader.pages if page.extract_text())
            if not text.strip():
                raise ValueError("No text found in the PDF file.")
            return text
        elif file_path.endswith('.docx'):
            from docx import Document
            doc = Document(file_path)
            text = " ".join(paragraph.text for paragraph in doc.paragraphs if paragraph.text.strip())
            if not text.strip():
                raise ValueError("No text found in the DOCX file.")
            return text
        elif file_path.endswith('.txt'):
            with open(file_path, 'r', encoding='utf-8') as file:
                text = file.read()
            if not text.strip():
                raise ValueError("No text found in the TXT file.")
            return text
        else:
            raise ValueError("Unsupported file format. Please upload a PDF, DOCX, or TXT file.")
    except Exception as e:
        print(f"Error extracting resume insights: {str(e)}")  # Debug log
        return ""

@job_bp.route('/api/jobs', methods=['GET'])
def get_jobs():
    try:
        # Load the dataset
        file_path = os.path.join(DATA_DIR, 'sample_internship_job_dataset.csv')
        if not os.path.exists(file_path):
            return jsonify({'error': f'File {file_path} not found.'}), 404

        # Read the CSV file
        jobs_df = pd.read_csv(file_path)

        # Rename columns to match frontend expectations
        jobs_df.rename(columns={
            'Job Title': 'title',
            'Company': 'company',
            'Location': 'location',
            'Job Type': 'type',
            'Stipend/Salary': 'type_salary',
            'Experience Level': 'experience_level',
            'Industry': 'industry'
        }, inplace=True)

        # Fill missing values
        jobs_df.fillna("Not Available", inplace=True)

        # Convert the DataFrame to a list of dictionaries
        jobs = jobs_df.to_dict(orient='records')

        # Return all jobs
        return jsonify({'jobs': jobs, 'total': len(jobs)})
    except Exception as e:
        print(f"Error: {str(e)}")  # Debug log
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500


@job_bp.route('/api/recommend', methods=['POST'])
def recommend_jobs():
    try:
        if 'resume' not in request.files:
            return jsonify({'error': 'No resume file uploaded.'}), 400

        resume = request.files['resume']
        if resume.filename == '':
            return jsonify({'error': 'No selected file.'}), 400

        filename = secure_filename(resume.filename)
        file_path = os.path.join(UPLOAD_DIR, filename)
        resume.save(file_path)

        # Extract text from the resume
        resume_text = extract_resume_insights(file_path)
        if not resume_text:
            return jsonify({'error': 'Failed to extract text from the resume. Please upload a valid file.'}), 400

        print(f"Extracted Resume Text (first 500 chars): {resume_text[:500]}")  # Debug log

        # Get job recommendations
        recommendations = RECOMMENDER.recommend(resume_text, top_n=5)
        print(f"Recommendations: {recommendations}")  # Debug log

        # Rename keys to match frontend expectations
        formatted_recommendations = [
            {
                "title": job["Job Title"],
                "company": job["Company"],
                "location": job["Location"],
                "type": job["Job Type"],
                "salary": job["Salary"],
                "more_info": job["More Info"],
                "eligibility": job["Eligibility"],
                "description": job["Job Description"],
                "registration_dates": job["Registration Dates"]
            }
            for job in recommendations
        ]

        return jsonify({'recommendations': formatted_recommendations})
    except Exception as e:
        print(f"Error: {str(e)}")  # Debug log
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500


@job_bp.route('/api/verify-resume', methods=['POST'])
def verify_resume():
    try:
        # Check if the file is in the request
        if 'resume' not in request.files:
            print("No resume file uploaded.")  # Debug log
            return jsonify({'is_valid': False, 'message': 'No resume file uploaded.'}), 400

        resume = request.files['resume']
        if resume.filename == '':
            print("No selected file.")  # Debug log
            return jsonify({'is_valid': False, 'message': 'No selected file.'}), 400

        # Save the uploaded file
        filename = secure_filename(resume.filename)
        file_path = os.path.join(UPLOAD_DIR, filename)
        resume.save(file_path)
        print(f"Resume saved at: {file_path}")  # Debug log

        # Extract text from the resume
        resume_text = extract_resume_insights(file_path)
        if not resume_text:
            print("Failed to extract text from the resume.")  # Debug log
            return jsonify({'is_valid': False, 'message': 'Failed to extract text from the resume.'}), 400

        print(f"Extracted Resume Text (first 500 chars): {resume_text[:500]}")  # Debug log

        # Check if the extracted text contains key resume sections
        required_sections = ['skills', 'experience', 'education', 'projects']
        found_sections = [section for section in required_sections if section in resume_text.lower()]
        print(f"Found Sections: {found_sections}")  # Debug log

        if len(found_sections) < 2:  # Require at least 2 key sections to consider it a valid resume
            return jsonify({'is_valid': False, 'message': 'The uploaded file does not appear to be a valid resume.'}), 400

        # Send the extracted text to Gemini for further verification
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=f"""
            The following text is extracted from a document. Determine if it is a valid resume based on the presence of key sections like skills, experience, education, and projects. Respond with "valid resume" or "invalid resume".

            Text: {resume_text}
            """
        )

        # Log the full response from Gemini
        print(f"GenAI Full Response: {response}")  # Debug log

        # Parse the response from Gemini
        try:
            verification_result = response.candidates[0].content.parts[0].text.strip().lower()
            print(f"GenAI Parsed Response: {verification_result}")  # Debug log
        except (IndexError, AttributeError) as e:
            print(f"Error parsing Gemini response: {str(e)}")  # Debug log
            return jsonify({'is_valid': False, 'message': 'Failed to verify the resume due to an unexpected response.'}), 500

        # Determine the result based on Gemini's response
        if "valid resume" in verification_result:
            return jsonify({'is_valid': True, 'message': 'Resume verified successfully.'})
        elif "invalid resume" in verification_result:
            return jsonify({'is_valid': False, 'message': 'The uploaded file is not a valid resume.'})
        else:
            print("GenAI response is ambiguous.")  # Debug log
            return jsonify({'is_valid': False, 'message': 'The uploaded file could not be verified as a valid resume.'})
    except Exception as e:
        print(f"Error: {str(e)}")  # Debug log
        return jsonify({'is_valid': False, 'message': f'An error occurred: {str(e)}'}), 500
