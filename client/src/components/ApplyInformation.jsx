// src/components/ApplyInformation.jsx
import React, { useState } from "react";

function ApplyInformation({ formData, updateFormData }) {
  const [role, setRole] = useState(formData?.role || null);
  const [skills, setSkills] = useState(formData?.skills || []);
  const [skillInput, setSkillInput] = useState("");
  const [location, setLocation] = useState(formData?.location || "");
  const [experience, setExperience] = useState(formData?.experience || "");

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    updateFormData({ 
      ...formData,
      role: selectedRole 
    });
  };

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      const updatedSkills = [...skills, skillInput];
      setSkills(updatedSkills);
      setSkillInput("");
      updateFormData({
        ...formData,
        skills: updatedSkills
      });
    }
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = skills.filter(s => s !== skill);
    setSkills(updatedSkills);
    updateFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    updateFormData({
      ...formData,
      location: e.target.value
    });
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
    updateFormData({
      ...formData,
      experience: e.target.value
    });
  };

  const roles = [
    { id: "student", name: "Student" },
    { id: "recent_graduate", name: "Recent Graduate" },
    { id: "professional", name: "Professional" },
    { id: "career_changer", name: "Career Changer" },
    { id: "returning_workforce", name: "Returning to Workforce" },
    { id: "entrepreneur", name: "Entrepreneur" }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-6">Professional Information</h2>
      <p className="text-center text-gray-600 mb-8">
        Help us understand your professional background to find the best opportunities.
      </p>

      {/* Career Stage Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">I am currently a...</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {roles.map((roleOption) => (
            <div
              key={roleOption.id}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                role === roleOption.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white border border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleRoleSelect(roleOption.id)}
            >
              <p className="font-medium text-center">{roleOption.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Skills & Expertise</h3>
        <p className="text-gray-600 mb-4">
          Add skills that showcase your strengths (our AI will use these to match you with opportunities)
        </p>
        
        <div className="flex mb-2">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a skill (e.g., Python, Project Management)"
            onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
          />
          <button
            onClick={handleAddSkill}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
            >
              <span>{skill}</span>
              <button 
                onClick={() => handleRemoveSkill(skill)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Location Preferences */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Location Preferences</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Preferred work location</label>
          <select
            value={location}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a preference</option>
            <option value="remote">Remote only</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site</option>
            <option value="flexible">Flexible</option>
            <option value="global">Open to relocation globally</option>
          </select>
        </div>
      </div>

      {/* Experience Level */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-4">Experience Level</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Years of professional experience</label>
          <select
            value={experience}
            onChange={handleExperienceChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select experience level</option>
            <option value="student">Student</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ApplyInformation;