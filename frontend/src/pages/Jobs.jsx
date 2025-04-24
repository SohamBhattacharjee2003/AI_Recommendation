import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Jobs() {
  
  const navigate = useNavigate();

 

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
          <Link className="flex items-center space-x-2" href="#">
            <i className="fas fa-graduation-cap text-[#6c63ff] text-lg"></i>
            <span className="font-extrabold text-black text-lg select-none">
              CareerCompass
            </span>
          </Link>
          <ul className="hidden md:flex items-center space-x-8 text-gray-500 text-sm font-medium select-none">
            <li><Link to="/" className="hover:text-gray-900 cursor-pointer">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-900 cursor-pointer">Dashboard</Link></li>
            <li><Link to="/jobs" className="hover:text-gray-900 cursor-pointer">Jobs</Link></li>
            <li><Link to="/account" className="hover:text-gray-900 cursor-pointer">Account</Link></li>
            </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <h1 className="text-3xl font-extrabold text-black mb-4">Find Your Perfect Job</h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover opportunities tailored to your skills and preferences
        </p>

        {/* Search Flexbox */}
        <div className="flex items-center bg-white shadow rounded-lg p-4 mb-8">
          <input
            type="text"
            placeholder="Search job title, keywords..."
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm mx-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold">
            Find Jobs
          </button>
        </div>

        {/* Opportunities Navigation */}
        <div className="flex items-center space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
            All Opportunities
          </button>
          <button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium">
            Internships
          </button>
          <button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium">
            Jobs
          </button>
        </div>

        <div className="flex items-start gap-8">
          {/* Filters Sidebar */}
          <aside className="bg-white p-6 rounded-lg shadow" style={{ width: '300px',height: '125vh' }}>
            <h2 className="text-lg font-bold text-gray-800 mb-4">Filters</h2>

            {/* Experience Level */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-800">Experience Level</h3>
              <ul className="mt-2 space-y-2">
                {['Entry Level', 'Internship', 'Associate', 'Mid-Senior', 'Director', 'Executive'].map(
                  (level, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-purple-600" />
                        <span className="text-sm text-gray-600">{level}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Job Type */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-800">Job Type</h3>
              <ul className="mt-2 space-y-2">
                {['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship', 'Remote'].map(
                  (type, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-purple-600" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Salary Range */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-800">Salary Range</h3>
              <div className="mt-4">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹0</span>
                  <span>₹100000+</span>
                </div>
              </div>
            </div>

            {/* Industry */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-800">Industry</h3>
              <ul className="mt-2 space-y-2">
                {['Technology', 'Healthcare', 'Finance', 'Education', 'Marketing', 'Manufacturing'].map(
                  (industry, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-purple-600" />
                        <span className="text-sm text-gray-600">{industry}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Apply Filters Button */}
            <button className="w-full bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center justify-center">
              <i className="fas fa-filter mr-2"></i> Apply Filters
            </button>
          </aside>

          {/* Featured Opportunities Section */}
          <section className="flex-1">
            <h2 className="text-xl font-bold text-black mb-4">Featured Opportunities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Job Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                    TS
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Senior Frontend Developer</h3>
                    <p className="text-sm text-gray-600">TechSolutions Inc.</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li><i className="fas fa-map-marker-alt mr-2"></i>Remote</li>
                  <li><i className="fas fa-briefcase mr-2"></i>Full-time</li>
                  <li><i className="fas fa-dollar-sign mr-2"></i>₹15L - ₹25L</li>
                </ul>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>2 days ago</span>
                  <button
                    onClick={() => navigate("/form")} // Redirect to the form
                    className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                    GU
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Product Marketing Intern</h3>
                    <p className="text-sm text-gray-600">GrowthUP</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li><i className="fas fa-map-marker-alt mr-2"></i>Bangalore</li>
                  <li><i className="fas fa-briefcase mr-2"></i>Internship</li>
                  <li><i className="fas fa-dollar-sign mr-2"></i>₹25K - ₹30K</li>
                </ul>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>1 day ago</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                    AP
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Data Scientist</h3>
                    <p className="text-sm text-gray-600">AnalyticsPro</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li><i className="fas fa-map-marker-alt mr-2"></i>Hybrid - Delhi</li>
                  <li><i className="fas fa-briefcase mr-2"></i>Full-time</li>
                  <li><i className="fas fa-dollar-sign mr-2"></i>₹18L - ₹22L</li>
                </ul>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>3 days ago</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Latest Opportunities Section */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-black mb-4">Latest Opportunities</h2>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Salary
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Posted
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Apply</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Job Row 1 */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">UX/UI Designer</div>
                        <div className="text-sm text-gray-500">DesignHub</div>
                        <div className="mt-2 flex space-x-2">
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Design</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Figma</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Adobe XD</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <i className="fas fa-map-marker-alt mr-2"></i>Mumbai
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹10L - ₹15L
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        5 hours ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Apply</button>
                      </td>
                    </tr>

                    {/* Job Row 2 */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Marketing Intern</div>
                        <div className="text-sm text-gray-500">GrowthAgency</div>
                        <div className="mt-2 flex space-x-2">
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Marketing</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Social Media</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Content</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <i className="fas fa-map-marker-alt mr-2"></i>Remote
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹15K - ₹25K
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1 day ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Apply</button>
                      </td>
                    </tr>

                    {/* Job Row 3 */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Backend Developer</div>
                        <div className="text-sm text-gray-500">CodeCraft</div>
                        <div className="mt-2 flex space-x-2">
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Node.js</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">MongoDB</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Express</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <i className="fas fa-map-marker-alt mr-2"></i>Bangalore
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹18L - ₹24L
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2 days ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Apply</button>
                      </td>
                    </tr>

                    {/* Job Row 4 */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Data Analytics Intern</div>
                        <div className="text-sm text-gray-500">DataWiz</div>
                        <div class="mt-2 flex space-x-2">
                          <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Python</span>
                          <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">SQL</span>
                          <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Tableau</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <i className="fas fa-map-marker-alt mr-2"></i>Delhi
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹20K - ₹30K
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3 days ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Apply</button>
                      </td>
                    </tr>

                    {/* Job Row 5 */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Product Manager</div>
                        <div className="text-sm text-gray-500">InnovateTech</div>
                        <div className="mt-2 flex space-x-2">
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Product</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Agile</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Leadership</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <i className="fas fa-map-marker-alt mr-2"></i>Hybrid - Pune
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹20L - ₹30L
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1 week ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Apply</button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                        <span className="font-medium">5</span> opportunities
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span>Previous</span>
                        </button>
                        <button className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                          1
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          2
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          3
                        </button>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span>Next</span>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Global Opportunities Section */}
            <section className="bg-gradient-to-r from-purple-500 to-blue-400 text-white py-16 text-center rounded-lg shadow-lg">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h2 className="text-3xl font-extrabold">Global Opportunities Await</h2>
                <p className="mt-4 text-lg">
                  Explore jobs, internships, and projects across the globe!
                </p>
                <div className="mt-8 flex justify-center gap-12">
                  <div>
                    <h3 className="text-4xl font-bold">500,000+</h3>
                    <p className="text-lg">Jobs Worldwide</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">120+</h3>
                    <p className="text-lg">Countries</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">27+</h3>
                    <p className="text-lg">Industries</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Explore Opportunities by Category Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-black text-center mb-4">Explore Opportunities by Category</h2>
              <p className="text-gray-600 text-center mb-8">
                Browse thousands of jobs and internships across popular industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Technology Card */}
                <div className="bg-white p-6 rounded-lg shadow border text-center">
                  <div className="text-purple-600 text-3xl mb-4">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Technology</h3>
                  <p className="text-sm text-gray-600">834 Jobs</p>
                  <p className="text-sm text-gray-600">156 companies</p>
                </div>

                {/* Business Card */}
                <div className="bg-white p-6 rounded-lg shadow border text-center">
                  <div className="text-purple-600 text-3xl mb-4">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Business</h3>
                  <p className="text-sm text-gray-600">623 Jobs</p>
                  <p className="text-sm text-gray-600">98 companies</p>
                </div>

                {/* Education Card */}
                <div className="bg-white p-6 rounded-lg shadow border text-center">
                  <div className="text-purple-600 text-3xl mb-4">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                  <p className="text-sm text-gray-600">412 Jobs</p>
                  <p className="text-sm text-gray-600">73 companies</p>
                </div>

                {/* Marketing Card */}
                <div className="bg-white p-6 rounded-lg shadow border text-center">
                  <div className="text-purple-600 text-3xl mb-4">
                    <i className="fas fa-bullhorn"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Marketing</h3>
                  <p className="text-sm text-gray-600">547 Jobs</p>
                  <p className="text-sm text-gray-600">89 companies</p>
                </div>

                {/* Design Card */}
                <div className="bg-white p-6 rounded-lg shadow border text-center">
                  <div className="text-purple-600 text-3xl mb-4">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Design</h3>
                  <p className="text-sm text-gray-600">328 Jobs</p>
                  <p className="text-sm text-gray-600">62 companies</p>
                </div>

                {/* Science Card */}
                <div className="bg-white p-6 rounded-lg shadow border text-center">
                  <div className="text-purple-600 text-3xl mb-4">
                    <i className="fas fa-flask"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Science</h3>
                  <p className="text-sm text-gray-600">276 Jobs</p>
                  <p className="text-sm text-gray-600">48 companies</p>
                </div>

                {/* Healthcare Card */}
                <div className="bg-white p-6 rounded-lg shadow border text-center">
                  <div className="text-purple-600 text-3xl mb-4">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Healthcare</h3>
                  <p className="text-sm text-gray-600">389 Jobs</p>
                  <p className="text-sm text-gray-600">72 companies</p>
                </div>

                {/* All Categories Card */}
                <div className="bg-white p-6 rounded-lg shadow border text-center">
                  <div className="text-purple-600 text-3xl mb-4">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">All Categories</h3>
                  <p className="text-sm text-gray-600">3500 Jobs</p>
                  <p className="text-sm text-gray-600">598 companies</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-purple-700">
                  View All Opportunities
                </button>
              </div>
            </section>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-black">CareerCompass</h3>
            <p className="text-gray-600 mt-2">
              Your AI-powered career companion for global opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">Platform</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Jobs & Internships</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Learning Hub</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Global Opportunities</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Career Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">Connect</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2025 CareerCompass. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Jobs;