import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Form() {
  const [resume, setResume] = useState(null);
  const [location, setLocation] = useState({ country: "", state: "", city: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const navigate = useNavigate(); // Hook to handle navigation

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { resume, location });

    // Show alert message
    alert("Your form has been submitted successfully!");

    // Reset the form
    setResume(null);
    setLocation({ country: "", state: "", city: "" });

    // Redirect to the Jobs page
    navigate("/jobs"); // Replace "/jobs" with your actual route path
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Extended Form</h1>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
            Your form has been submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Resume Submission */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CV/Resume Submission <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Remark: Submit your resume in doc, docx, pdf
            </p>
            <div className="border border-dashed border-gray-300 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept=".doc,.docx,.pdf"
                  onChange={handleResumeUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer bg-blue-50 text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-100"
                >
                  <i className="fas fa-cloud-upload-alt mr-2"></i> Upload Resume
                </label>
                {resume && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-file-alt text-blue-600"></i>
                    <span className="text-blue-600 underline">{resume.name}</span>
                    <span>({(resume.size / 1024).toFixed(2)} KB)</span>
                    <button
                      type="button"
                      onClick={() => setResume(null)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Location <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-2">Remark: Enter Your Location</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={location.country}
                onChange={handleLocationChange}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={location.state}
                onChange={handleLocationChange}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={location.city}
                onChange={handleLocationChange}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;