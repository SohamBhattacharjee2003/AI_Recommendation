// src/pages/Apply.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ApplyWizard from "../components/ApplyWizard";

function Apply() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          <span className="text-blue-600">AI-Powered</span> Career Profile Setup
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Complete your profile to unlock personalized job recommendations, AI-matched internships, and global career opportunities tailored to your skills and aspirations.
        </p>
        
        <Routes>
          <Route path="/" element={<Navigate to="/apply/about" replace />} />
          <Route path="/about" element={<ApplyWizard />} />
          <Route path="/information" element={<ApplyWizard />} />
          <Route path="/resume" element={<ApplyWizard />} />
        </Routes>
      </div>
    </div>
  );
}

export default Apply;