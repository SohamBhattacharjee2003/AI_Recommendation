from flask import Blueprint, jsonify, request
import pandas as pd
import os

job_bp = Blueprint('jobs', __name__)

# CSV directory path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, '../data')

@job_bp.route('/api/jobs', methods=['GET'])
def get_jobs():
    try:
        # Load all CSV files in the data directory except 'interscip.csv'
        csv_files = [f for f in os.listdir(DATA_DIR) if f.endswith('.csv') and f != 'interscip.csv']
        if not csv_files:
            return jsonify({'error': 'No CSV files found in the data directory.'}), 404

        # Combine all CSV files into a single DataFrame
        dataframes = []
        for file in csv_files:
            file_path = os.path.join(DATA_DIR, file)
            df = pd.read_csv(file_path)
            df['source_file'] = file  # Add a column to track the source file
            dataframes.append(df)
        jobs_df = pd.concat(dataframes, ignore_index=True)

        # Replace NaN values with None (JSON null)
        jobs_df = jobs_df.where(pd.notnull(jobs_df), None)

        # Convert the DataFrame to a list of dictionaries
        jobs = jobs_df.to_dict(orient='records')

        # Get pagination parameters from the request
        page = int(request.args.get('page', 1))  # Default to page 1
        limit = int(request.args.get('limit', 10))  # Default to 10 jobs per page

        # Calculate start and end indices
        start = (page - 1) * limit
        end = start + limit

        # Paginate the jobs
        paginated_jobs = jobs[start:end]

        # Return the paginated jobs in JSON format
        return jsonify({'jobs': paginated_jobs, 'total': len(jobs), 'page': page, 'limit': limit})
    except FileNotFoundError:
        return jsonify({'error': 'Data directory not found.'}), 404
    except pd.errors.EmptyDataError:
        return jsonify({'error': 'One or more CSV files are empty.'}), 400
    except Exception as e:
        return jsonify({'error': f'An unexpected error occurred: {str(e)}'}), 500