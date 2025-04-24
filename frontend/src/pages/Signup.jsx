import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    skills: '',
    experience: '',
    careerGoals: '',
    location: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage (or send it to a backend API)
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Signup successful! Please log in to continue.');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Create a password"
            required
          />
        </div>

        {/* Skills Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g., JavaScript, Python, Data Analysis"
            required
          />
        </div>

        {/* Experience Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Experience (in years)</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your years of experience"
            required
          />
        </div>

        {/* Career Goals Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Career Goals</label>
          <textarea
            name="careerGoals"
            value={formData.careerGoals}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Describe your career aspirations"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Location Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Preferred Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g., New York, Remote"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;