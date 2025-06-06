// src/components/ApplyResume.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplyResume({ formData, updateFormData }) {
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState(formData?.file || null);
  const [linkedinUrl, setLinkedinUrl] = useState(formData?.linkedin || "");
  const [portfolioUrl, setPortfolioUrl] = useState(formData?.portfolio || "");
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiInsights, setAiInsights] = useState(null);
  const [verificationError, setVerificationError] = useState(null);

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setResumeFile(file);
    setIsProcessing(true);
    setVerificationError(null);

    try {
      // First verify the resume
      const formData = new FormData();
      formData.append('resume', file);

      const verifyResponse = await fetch('http://127.0.0.1:8001/api/verify-resume', {
        method: 'POST',
        body: formData
      });

      const verifyData = await verifyResponse.json();

      if (!verifyResponse.ok) {
        throw new Error(verifyData.message || 'Failed to verify resume');
      }

      if (!verifyData.is_valid) {
        setVerificationError(verifyData.message);
        setIsProcessing(false);
        return;
      }

      // If resume is valid, get recommendations
      const recommendResponse = await fetch('http://127.0.0.1:8001/api/recommend', {
        method: 'POST',
        body: formData
      });

      const recommendData = await recommendResponse.json();

      if (!recommendResponse.ok) {
        throw new Error(recommendData.error || 'Failed to get recommendations');
      }

      // Update form data
      updateFormData({
        ...formData,
        file: file
      });

      setIsProcessing(false);
      setAiInsights({
        skills: recommendData.skills || [],
        roles: recommendData.roles || [],
        industries: recommendData.industries || [],
        strengths: recommendData.strengths || []
      });

      // Store recommendations to pass to the jobs page
      localStorage.setItem('recommendedJobs', JSON.stringify(recommendData.recommendations));

    } catch (error) {
      console.error('Error processing resume:', error);
      setVerificationError(error.message);
      setIsProcessing(false);
    }
  };

  const handleLinkedinChange = (e) => {
    setLinkedinUrl(e.target.value);
    updateFormData({
      ...formData,
      linkedin: e.target.value
    });
  };

  const handlePortfolioChange = (e) => {
    setPortfolioUrl(e.target.value);
    updateFormData({
      ...formData,
      portfolio: e.target.value
    });
  };

  const handleFormSubmit = async () => {
    if (!resumeFile) {
      setVerificationError('Please upload a resume first');
      return;
    }

    try {
      // Get recommendations from localStorage
      const recommendations = JSON.parse(localStorage.getItem('recommendedJobs') || '[]');
      
      // Navigate to jobs page with recommendations
      navigate('/jobs', { 
        state: { 
          recommendedJobs: recommendations
        },
        replace: true 
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setVerificationError('Failed to process your application. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-6">Resume & Portfolio</h2>
      <p className="text-center text-gray-600 mb-8">
        Upload your resume for AI-powered career insights and opportunity matching
      </p>

      {/* Error Message Display */}
      {verificationError && (
        <div className="mb-8 p-4 bg-red-50 rounded-md text-red-600">
          {verificationError}
        </div>
      )}

      {/* Resume Upload Section */}
      <div className="mb-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
          <div className="flex flex-col items-center">
            <i className="fas fa-file-upload text-blue-500 text-4xl mb-4"></i>
            <h3 className="text-lg font-medium mb-2">Upload Your Resume</h3>
            <p className="text-sm text-gray-500 mb-4">
              PDF, DOC, or DOCX (Max 5MB)
            </p>
            <input
              type="file"
              id="resume-upload"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="hidden"
            />
            <label
              htmlFor="resume-upload"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              {resumeFile ? "Replace File" : "Select File"}
            </label>
          </div>
        </div>

        {resumeFile && (
          <div className="mt-4 bg-blue-50 p-4 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <i className="fas fa-file-pdf text-blue-500 text-xl mr-3"></i>
              <span className="font-medium">{resumeFile.name}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setResumeFile(null);
                setAiInsights(null);
                updateFormData({
                  ...formData,
                  file: null
                });
              }}
              className="text-red-500 hover:text-red-700"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        )}
      </div>

      {/* AI Processing Indicator */}
      {isProcessing && (
        <div className="mb-8 p-4 bg-blue-50 rounded-md flex items-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
          <span className="text-blue-800">
            Our AI is analyzing your resume for skills and opportunities...
          </span>
        </div>
      )}

      {/* AI Insights */}
      {aiInsights && (
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <i className="fas fa-robot text-blue-600 mr-2"></i>
            AI-Powered Insights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Detected Skills</h4>
              <div className="flex flex-wrap gap-2">
                {aiInsights.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Recommended Roles</h4>
              <div className="flex flex-wrap gap-2">
                {aiInsights.roles.map((role, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Matching Industries</h4>
              <div className="flex flex-wrap gap-2">
                {aiInsights.industries.map((industry, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Your Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {aiInsights.strengths.map((strength, index) => (
                  <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Links */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Professional Links</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">LinkedIn Profile URL</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-100 text-gray-500 border border-r-0 border-gray-300 rounded-l-md">
              <i className="fab fa-linkedin"></i>
            </span>
            <input
              type="url"
              value={linkedinUrl}
              onChange={handleLinkedinChange}
              placeholder="https://linkedin.com/in/your-username"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Portfolio/Website URL</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-100 text-gray-500 border border-r-0 border-gray-300 rounded-l-md">
              <i className="fas fa-globe"></i>
            </span>
            <input
              type="url"
              value={portfolioUrl}
              onChange={handlePortfolioChange}
              placeholder="https://your-portfolio.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Completion Message */}
      <div className="bg-green-50 border border-green-100 p-4 rounded-md">
        <h3 className="flex items-center text-green-800 font-medium">
          <i className="fas fa-check-circle text-green-500 mr-2"></i>
          Almost there!
        </h3>
        <p className="text-green-700 text-sm mt-1">
          {resumeFile 
            ? "Your resume has been processed. Click Submit to view your personalized job matches."
            : "Upload your resume to get personalized job recommendations."}
        </p>
        <button
          onClick={handleFormSubmit}
          disabled={!resumeFile || isProcessing}
          className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium
            ${(!resumeFile || isProcessing) 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isProcessing ? 'Processing...' : 'Submit and View Matches'}
        </button>
      </div>
    </div>
  );
}

export default ApplyResume;