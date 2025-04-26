from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

def extract_resume_insights(resume_text):
    """
    Verify if the provided text is a valid resume and extract insights.
    This implementation uses local logic instead of an external API.
    """
    # Check if the resume text contains key indicators of a resume
    required_keywords = ["experience", "skills", "education", "projects"]
    is_valid = all(keyword in resume_text.lower() for keyword in required_keywords)

    if not is_valid:
        return {
            "is_valid": False,
            "error": "The provided text does not appear to be a valid resume."
        }

    # Extract basic insights (mock implementation)
    skills = ["Python", "Machine Learning", "Data Science"] if "python" in resume_text.lower() else []
    domains = ["AI", "ML"] if "machine learning" in resume_text.lower() else []
    work_preference = "Remote" if "remote" in resume_text.lower() else "In-Office"
    job_type = "Full-Time" if "full-time" in resume_text.lower() else "Internship"
    experience_level = "Experienced" if "experience" in resume_text.lower() else "Fresher"

    return {
        "is_valid": True,
        "skills": skills,
        "domains": domains,
        "work_preference": work_preference,
        "job_type": job_type,
        "experience_level": experience_level
    }
