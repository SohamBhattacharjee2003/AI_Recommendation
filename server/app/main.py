from flask import Flask
from flask_cors import CORS
from routes.job_routes import job_bp

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(job_bp)

if __name__ == "__main__":
    app.run(debug=True,port=8001)
