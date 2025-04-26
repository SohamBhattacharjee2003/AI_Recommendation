// src/components/ApplyWizard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ApplyAbout from "./ApplyAbout";
import ApplyInformation from "./ApplyInformation";
import ApplyResume from "./ApplyResume";

function ApplyWizard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    about: {
      selectedCategory: null,
    },
    information: {
      role: null,
    },
    resume: {
      file: null,
    },
  });
  
  // Determine current step based on URL
  useEffect(() => {
    if (location.pathname.includes("/apply/about")) {
      setCurrentStep(1);
    } else if (location.pathname.includes("/apply/information")) {
      setCurrentStep(2);
    } else if (location.pathname.includes("/apply/resume")) {
      setCurrentStep(3);
    }
  }, [location.pathname]);

  // Handle form data updates from child components
  const updateFormData = (step, data) => {
    setFormData(prev => ({
      ...prev,
      [step]: data
    }));
  };

  // Navigate to next step
  const handleNext = () => {
    if (currentStep === 1) {
      navigate("/apply/information");
    } else if (currentStep === 2) {
      navigate("/apply/resume");
    } else if (currentStep === 3) {
      // Submit the form data and redirect to jobs page
      console.log("Form submitted:", formData);
      navigate("/jobs");
    }
  };

  // Navigate to previous step
  const handlePrevious = () => {
    if (currentStep === 2) {
      navigate("/apply/about");
    } else if (currentStep === 3) {
      navigate("/apply/information");
    }
  };

  // Render appropriate form step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ApplyAbout 
            formData={formData.about} 
            updateFormData={(data) => updateFormData("about", data)}
          />
        );
      case 2:
        return (
          <ApplyInformation 
            formData={formData.information}
            updateFormData={(data) => updateFormData("information", data)}
          />
        );
      case 3:
        return (
          <ApplyResume 
            formData={formData.resume}
            updateFormData={(data) => updateFormData("resume", data)}
          />
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      {/* Progress Tracker */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex flex-col items-center ${currentStep >= 1 ? "text-blue-600" : "text-gray-400"}`}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
              currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
            }`}>
              1
            </div>
            <span className="text-sm font-medium">About</span>
          </div>
          
          <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
          
          <div className={`flex flex-col items-center ${currentStep >= 2 ? "text-blue-600" : "text-gray-400"}`}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
              currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
            }`}>
              2
            </div>
            <span className="text-sm font-medium">Information</span>
          </div>
          
          <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
          
          <div className={`flex flex-col items-center ${currentStep >= 3 ? "text-blue-600" : "text-gray-400"}`}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
              currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
            }`}>
              3
            </div>
            <span className="text-sm font-medium">Resume</span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="mb-8">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-md font-medium ${
            currentStep === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
        >
          {currentStep === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default ApplyWizard;