import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage (or backend API if applicable)
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  return (
    <div className="grid grid-cols-6 w-full min-h-screen bg-gray-100">
      {/* Left Sidebar - Navbar */}
      <div className=" col-span-1 bg-white shadow-md border-r border-gray-200">
        <div className="p-6 ">
          <div className="text-lg font-bold text-gray-800 mb-4">CareerCompass</div>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-home mr-3 text-gray-500"></i> Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-briefcase mr-3 text-gray-500"></i> Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-tachometer-alt mr-3 text-gray-500"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-sign-in-alt mr-3 text-gray-500"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="col-span-5 p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-black mb-4">Account Page</h1>
        {user ? (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-black mb-4">Personal Information</h2>
            <p className="text-gray-600 mb-2">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Skills:</strong> {user.skills}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Experience:</strong> {user.experience} years
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Career Goals:</strong> {user.careerGoals}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Preferred Location:</strong> {user.location}
            </p>
            <div className="mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Edit Profile
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Loading user information...</p>
        )}
      </main>
    </div>
  );
}

export default Account;