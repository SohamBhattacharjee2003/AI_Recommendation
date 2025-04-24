// src/components/ApplyAbout.jsx
import React, { useState } from "react";

function ApplyAbout({ formData, updateFormData }) {
  const [selectedCategory, setSelectedCategory] = useState(formData?.selectedCategory || null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    updateFormData({ selectedCategory: category });
  };

  const categories = [
    {
      id: "work",
      title: "Work Experience",
      description: "Share your professional journey and expertise",
      icon: "fas fa-briefcase",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: "education",
      title: "Education",
      description: "Highlight your academic achievements",
      icon: "fas fa-graduation-cap",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: "skills",
      title: "Skills & Certifications",
      description: "Showcase your technical and soft skills",
      icon: "fas fa-certificate",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: "projects",
      title: "Projects",
      description: "Highlight your accomplishments and initiatives",
      icon: "fas fa-project-diagram",
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      id: "interests",
      title: "Career Interests",
      description: "Tell us what fields excite you the most",
      icon: "fas fa-star",
      color: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      id: "global",
      title: "Global Mobility",
      description: "Share your preferences for working abroad",
      icon: "fas fa-globe",
      color: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-6">Tell us about yourself</h2>
      <p className="text-center text-gray-600 mb-8">
        Our AI will analyze your profile to find opportunities that match your career aspirations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div 
            key={category.id}
            className={`${category.color} p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
              selectedCategory === category.id ? 'ring-2 ring-blue-600' : ''
            }`}
            onClick={() => handleCategorySelect(category.id)}
          >
            <div className="flex items-center mb-3">
              <i className={`${category.icon} ${category.iconColor} text-xl mr-2`}></i>
              <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Why this matters</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
          <p className="text-gray-700">
            Our AI-powered platform uses your profile data to match you with relevant opportunities worldwide. 
            We analyze thousands of job listings, internships, and educational programs to find the perfect match 
            for your skills and career goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplyAbout;