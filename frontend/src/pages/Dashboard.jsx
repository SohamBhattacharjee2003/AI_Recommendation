import React, { useState } from "react";

function Dashboard() {
  const [profileCompletion, setProfileCompletion] = useState(85);
  const [jobApplications, setJobApplications] = useState(12);
  const [learningCourses, setLearningCourses] = useState(3);
  const [alerts, setAlerts] = useState(5);
  const [competitiveScore] = useState(78);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-50 shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600">CareerCompass</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                <i className="fas fa-home mr-3"></i> Home
              </a>
            </li>
            <li>
              <a href="/dashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="/jobs" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                <i className="fas fa-briefcase mr-3"></i> Jobs
              </a>
            </li>
            <li>
              <a href="/account" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                <i className="fas fa-user mr-3"></i> Account
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back, User!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your career today.</p>
        </header>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800">{jobApplications}</h2>
            <p className="text-sm text-gray-500">Job Applications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800">{learningCourses}</h2>
            <p className="text-sm text-gray-500">Courses In Progress</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800">{alerts}</h2>
            <p className="text-sm text-gray-500">New Job Alerts</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800">{competitiveScore}</h2>
            <p className="text-sm text-gray-500">Competitive Score</p>
          </div>
        </section>

        {/* Profile Completion */}
        <section className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-bold text-gray-800">AI Profile Builder</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${profileCompletion}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{profileCompletion}% Complete</p>
        </section>

        {/* Career Goals */}
        <section className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-bold text-gray-800">Career Goals</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              Complete AI Profile
            </li>
            <li className="flex items-center">
              <i className="fas fa-hourglass-half text-yellow-500 mr-2"></i>
              Apply to 5 Jobs
            </li>
            <li className="flex items-center">
              <i className="fas fa-times-circle text-red-500 mr-2"></i>
              Attend Networking Event
            </li>
          </ul>
        </section>

        {/* Notifications */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-gray-800">Notifications</h2>
          <ul className="mt-4 space-y-2">
            <li>You have 3 new job alerts</li>
            <li>Your application was viewed by TechCorp</li>
            <li>New course recommendation: "Mastering React"</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;