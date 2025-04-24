import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Resources() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Resources');

  const handleSearchChange = (e) => setSearchInput(e.target.value);
  const handleCategoryChange = (category) => setSelectedCategory(category);

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
          <a className="flex items-center space-x-2" href="#">
            <i className="fas fa-graduation-cap text-[#6c63ff] text-lg"></i>
            <span className="font-extrabold text-black text-lg select-none">
              CareerCompass
            </span>
          </a>
          <ul className="hidden md:flex items-center space-x-8 text-gray-500 text-sm font-medium select-none">
            <li><Link to="/" className="hover:text-gray-900 cursor-pointer">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-900 cursor-pointer">About</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-900 cursor-pointer">Dashboard</Link></li>
            <li><Link to="/global-map" className="hover:text-gray-900 cursor-pointer">Global Map</Link></li>
            <li><Link to="/jobs" className="hover:text-gray-900 cursor-pointer">Jobs</Link></li>
            <li><Link to="/learning" className="hover:text-gray-900 cursor-pointer">Learning</Link></li>
            <li><Link to="/resources" className="hover:text-gray-900 cursor-pointer">Resources</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-black text-sm font-semibold px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
              Log in
            </button>
            <button className="bg-[#6c63ff] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#574fd6]">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <h1 className="text-3xl font-extrabold text-black mb-4">Career Resources</h1>
        <p className="text-gray-600 text-lg mb-8">
          Expert guides, templates, and tools to help you succeed
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Resources */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-black mb-4">Search Resources</h2>
            <p className="text-gray-600 text-sm mb-4">
              Find guides, templates, and videos to help with your career journey
            </p>
            <input
              type="text"
              placeholder="Search for resume templates, interview guides, etc."
              value={searchInput}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            {/* Search Resources Buttons */}
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm w-full sm:w-auto hover:bg-purple-100 hover:text-purple-600">
                Resume
              </button>
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm w-full sm:w-auto hover:bg-purple-100 hover:text-purple-600">
                Interview
              </button>
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm w-full sm:w-auto hover:bg-purple-100 hover:text-purple-600">
                Cover Letter
              </button>
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm w-full sm:w-auto hover:bg-purple-100 hover:text-purple-600">
                Networking
              </button>
              <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm w-full sm:w-auto hover:bg-purple-100 hover:text-purple-600">
                Job Search
              </button>
            </div>
          </div>

          {/* Career Preparation Checklist */}
          <div className="bg-[#eef0ff] p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-black mb-4">Career Preparation Checklist</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <input type="checkbox" checked className="mr-2" />
                <span className="line-through">Create a compelling LinkedIn profile</span>
              </li>
              <li>
                <input type="checkbox" className="mr-2" />
                Update your resume with latest experience
              </li>
              <li>
                <input type="checkbox" className="mr-2" />
                Research target companies
              </li>
              <li>
                <input type="checkbox" className="mr-2" />
                Prepare your elevator pitch
              </li>
              <li>
                <input type="checkbox" className="mr-2" />
                Practice common interview questions
              </li>
              <li>
                <input type="checkbox" checked className="mr-2" />
                <span className="line-through">Set up job alerts on CareerCompass</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-sm font-semibold text-[#6c63ff] hover:underline mt-4 inline-block"
            >
              View full checklist →
            </a>
          </div>
        </div>

        {/* Featured Resources */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-black mb-4">Featured Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/resume-guide.jpeg"
                alt="Ultimate Resume Guide"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">Ultimate Resume Guide</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Learn how to craft a resume that stands out to recruiters.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-download mr-2"></i> Download
                </button>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/Interview-Strategies.jpeg"
                alt="Interview Success Strategies"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">Interview Success Strategies</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Master the art of interviewing with confidence.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-external-link-alt mr-2"></i> View Resource
                </button>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/Linkedin-Profile-Optimization.jpeg"
                alt="LinkedIn Profile Optimization"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">LinkedIn Profile Optimization</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Get noticed by recruiters with an optimized profile.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-download mr-2"></i> Download
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-black mb-4">All Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/resume-guide.jpeg"
                alt="Ultimate Resume Guide"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-gray-500 mb-2 inline-block">
                  Career Development
                </span>
                <h3 className="text-lg font-bold text-black mb-2">Ultimate Resume Guide</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Learn how to craft a resume that stands out to recruiters.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-download mr-2"></i> Download
                </button>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/Interview-Strategies.jpeg"
                alt="Interview Success Strategies"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-gray-500 mb-2 inline-block">
                  Interview Prep
                </span>
                <h3 className="text-lg font-bold text-black mb-2">Interview Success Strategies</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Master the art of interviewing with confidence.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-external-link-alt mr-2"></i> View Resource
                </button>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/Networking.jpeg"
                alt="Networking in the Digital Age"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-gray-500 mb-2 inline-block">
                  Career Development
                </span>
                <h3 className="text-lg font-bold text-black mb-2">Networking in the Digital Age</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Strategies for building professional relationships online.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-download mr-2"></i> Download
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-black mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource 4 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/Salary.jpeg"
                alt="Salary Negotiation Tactics"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-gray-500 mb-2 inline-block">
                  Career Development
                </span>
                <h3 className="text-lg font-bold text-black mb-2">Salary Negotiation Tactics</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Learn how to confidently negotiate your compensation.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-download mr-2"></i> Download
                </button>
              </div>
            </div>

            {/* Resource 5 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/Linkedin-Profile-Optimization.jpeg"
                alt="LinkedIn Profile Optimization"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-gray-500 mb-2 inline-block">
                  Job Search
                </span>
                <h3 className="text-lg font-bold text-black mb-2">LinkedIn Profile Optimization</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Get noticed by recruiters with an optimized profile.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-download mr-2"></i> Download
                </button>
              </div>
            </div>

            {/* Resource 6 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/images/Technical.jpeg"
                alt="Technical Interview Preparation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-gray-500 mb-2 inline-block">
                  Interview Prep
                </span>
                <h3 className="text-lg font-bold text-black mb-2">Technical Interview Preparation</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Prepare for coding challenges and technical questions.
                </p>
                <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6]">
                  <i className="fas fa-external-link-alt mr-2"></i> View Resource
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Unlock Premium Resources */}
        <section className="mt-12 bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Unlock Premium Resources</h2>
          <p className="text-lg mb-6">
            Get access to our full library of premium resources, templates, and tools with a Pro account.
          </p>
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-md w-full sm:w-auto hover:bg-gray-100">
            Upgrade to Pro
          </button>
        </section>

        {/* Navigation Links to Other Pages */}
       
      </main>

      <footer className="bg-white py-12 mt-12">
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

export default Resources;