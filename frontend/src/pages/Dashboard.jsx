import React, { useState, useEffect, useRef } from "react";
import { Calendar, ChevronRight, Clock, Lightbulb, Book, Search, Users, Award, TrendingUp, Briefcase, Network, MessageCircle, Settings } from "lucide-react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [profileCompletion, setProfileCompletion] = useState(85);
  const [skillsAssessment, setSkillsAssessment] = useState(70);
  const [careerGoals, setCareerGoals] = useState(90);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState("events");
  // Animation states
  const [animateCards, setAnimateCards] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const [animateFeatures, setAnimateFeatures] = useState(false);

  // Scroll animation states
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Visibility states for scroll animations
  const [progressVisible, setProgressVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [quickActionsVisible, setQuickActionsVisible] = useState(false);

  // Refs for scroll animations
  const progressSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const calendarSectionRef = useRef(null);
  const suggestionsSectionRef = useRef(null);
  const quickActionsSectionRef = useRef(null);

  useEffect(() => {
    // Trigger initial animations after component mounts
    setTimeout(() => setAnimateCards(true), 300);
    setTimeout(() => setAnimateProgress(true), 600);
    setTimeout(() => setAnimateFeatures(true), 900);

    // Add scroll event listener
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      // Hide scroll indicator after scrolling down
      if (position > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }

      // Check if elements are in viewport for scroll animations
      checkElementInView(progressSectionRef.current, setProgressVisible);
      checkElementInView(featuresSectionRef.current, setFeaturesVisible);
      checkElementInView(calendarSectionRef.current, setCalendarVisible);
      checkElementInView(suggestionsSectionRef.current, setSuggestionsVisible);
      checkElementInView(quickActionsSectionRef.current, setQuickActionsVisible);
    };

    // Improved helper function to check if element is in viewport
    const checkElementInView = (element, setVisibleFunction) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      // Consider an element in view when its top is within 80% of viewport height
      const isInViewport = rect.top <= window.innerHeight * 0.8;

      if (isInViewport) {
        setVisibleFunction(true);
      }
    };

    // Initial check on mount
    setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calendar data
  const upcomingEvents = [
    { id: 1, title: "Mock Interview", date: "Apr 28, 2025", time: "10:00 AM", type: "interview" },
    { id: 2, title: "Resume Workshop", date: "Apr 30, 2025", time: "2:00 PM", type: "workshop" },
    { id: 3, title: "Tech Career Fair", date: "May 5, 2025", time: "9:00 AM", type: "event" },
  ];
  const scheduledTasks = [
    { id: 1, title: "Update LinkedIn Profile", deadline: "Apr 26, 2025", priority: "High" },
    { id: 2, title: "Complete Skills Assessment", deadline: "Apr 29, 2025", priority: "Medium" },
    { id: 3, title: "Research Target Companies", deadline: "May 2, 2025", priority: "Medium" },
  ];

  // AI Recommendations
  const recommendations = [
    {
      id: 1,
      type: "job",
      title: "Frontend Developer at Airbnb",
      reason: "Matches your React skills and salary expectations",
      confidence: 94
    },
    {
      id: 2,
      type: "course",
      title: "Advanced React Patterns",
      reason: "Based on your recent project work",
      confidence: 88
    },
    {
      id: 3,
      type: "action",
      title: "Update your GitHub profile",
      reason: "Improve visibility to recruiters",
      confidence: 92
    },
  ];

  const renderCalendarContent = () => {
    switch (activeTab) {
      case "events":
        return (
          <div className="space-y-3 transition-all duration-300">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-all duration-300"
                style={{
                  animation: calendarVisible ? `fadeInRight 0.5s ease forwards ${index * 0.1}s` : 'none',
                  opacity: calendarVisible ? 1 : 0
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${event.type === 'interview' ? 'bg-purple-100 text-purple-600' : 
                    event.type === 'workshop' ? 'bg-green-100 text-green-600' : 
                    'bg-blue-100 text-blue-600'}`}>
                    {event.type === 'interview' ? <Users size={18} /> :
                     event.type === 'workshop' ? <Book size={18} /> :
                     <Briefcase size={18} />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-700 transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        );
      case "tasks":
        return (
          <div className="space-y-3 transition-all duration-300">
            {scheduledTasks.map((task, index) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border-l-4 border-yellow-400 hover:shadow-md transition-all duration-300"
                style={{
                  animation: calendarVisible ? `fadeInRight 0.5s ease forwards ${index * 0.1}s` : 'none',
                  opacity: calendarVisible ? 1 : 0
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${task.priority === 'High' ? 'bg-red-100 text-red-600' : 
                    task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 
                    'bg-green-100 text-green-600'}`}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{task.title}</p>
                    <p className="text-xs text-gray-500">Due: {task.deadline} • {task.priority} Priority</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      case "planner":
        return (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-7 gap-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const dayNum = i - 2; // Adjust for month starting position
                return (
                  <div
                    key={i}
                    className={`text-center p-1 rounded-full h-8 w-8 flex items-center justify-center mx-auto
                      ${dayNum === 26 ? 'bg-blue-500 text-white' : 
                      dayNum === 28 || dayNum === 30 ? 'bg-blue-100 text-blue-800' : 
                      dayNum === 5 ? 'bg-green-500 text-white' : 
                      dayNum > 0 && dayNum <= 30 ? 'hover:bg-gray-100 cursor-pointer' : 'text-gray-300'}`}
                    style={{
                      animation: calendarVisible ? `zoomIn 0.3s ease forwards ${i * 0.01}s` : 'none',
                      opacity: calendarVisible ? 1 : 0
                    }}
                  >
                    {dayNum > 0 && dayNum <= 30 ? dayNum : ''}
                  </div>
                );
              })}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Chart Data for Progress Section
  const progressChartData = {
    labels: ['Profile Completion', 'Skills Assessment', 'Career Goals'],
    datasets: [
      {
        label: 'Percentage',
        data: [profileCompletion, skillsAssessment, careerGoals],
        backgroundColor: ['#6366f1', '#3b82f6', '#10b981'],
        borderColor: ['#6366f1', '#3b82f6', '#10b981'],
        borderWidth: 1,
      },
    ],
  };

  const progressChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.parsed.y}%`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-50 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600">CareerCompass</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded transition-all duration-300">
                <i className="fas fa-home mr-3"></i> Home
              </a>
            </li>
            <li>
              <a href="/dashboard" className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded transition-all duration-300">
                <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="/jobs" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded transition-all duration-300">
                <i className="fas fa-briefcase mr-3"></i> Jobs
              </a>
            </li>
            <li>
              <a href="/account" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded transition-all duration-300">
                <i className="fas fa-user mr-3"></i> Account
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto relative">
        {/* Scroll Indicator */}
        <div
          className={`fixed bottom-10 right-10 z-50 transition-all duration-500 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="animate-bounce bg-blue-500 p-2 w-10 h-10 ring-1 ring-blue-300 shadow-lg rounded-full flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Header with slide in animation */}
        <header className="mb-8" style={{ animation: "slideInDown 0.8s ease-out" }}>
          <h1 className="text-3xl font-bold text-purple-600">Welcome to CareerCompass AI</h1>
          <p className="text-gray-600 mt-2">Your AI-powered platform for discovering global career opportunities and internships.</p>
        </header>

        {/* Statistics Cards */}
        <section className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-700 ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 p-2 rounded-full">
                <Users size={20} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Users</p>
                <h2 className="text-xl font-bold text-purple-600">2,834</h2>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <Briefcase size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Available Jobs</p>
                <h2 className="text-xl font-bold text-blue-600">1,483</h2>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 p-2 rounded-full">
                <Award size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Internships</p>
                <h2 className="text-xl font-bold text-green-600">492</h2>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-2">
              <div className="bg-pink-100 p-2 rounded-full">
                <TrendingUp size={20} className="text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Success Rate</p>
                <h2 className="text-xl font-bold text-pink-600">89%</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Section */}
        <div
          ref={progressSectionRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 transition-all duration-700 ease-out ${progressVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Your Progress</h2>
            <div className="max-w-full">
              <Bar data={progressChartData} options={progressChartOptions} />
            </div>
          </div>
          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {/* Google SWE Internship */}
              <div className={`flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 ${progressVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}>
                <div>
                  <p className="text-sm font-medium text-purple-600">Google SWE Internship</p>
                  <p className="text-xs text-gray-500">Application Due</p>
                </div>
                <div className="bg-red-100 text-red-600 rounded-full px-3 py-1 text-xs font-medium">
                  2 days left
                </div>
              </div>
              {/* Resume Review Session */}
              <div className={`flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 ${progressVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}>
                <div>
                  <p className="text-sm font-medium text-blue-600">Resume Review Session</p>
                  <p className="text-xs text-gray-500">Virtual Meeting</p>
                </div>
                <div className="bg-orange-100 text-orange-600 rounded-full px-3 py-1 text-xs font-medium">
                  Tomorrow
                </div>
              </div>
              {/* Career Fair */}
              <div className={`flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 ${progressVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}>
                <div>
                  <p className="text-sm font-medium text-green-600">Career Fair</p>
                  <p className="text-xs text-gray-500">Campus Event</p>
                </div>
                <div className="bg-green-100 text-green-600 rounded-full px-3 py-1 text-xs font-medium">
                  Next Week
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section
          ref={featuresSectionRef}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 transition-all duration-700 ease-out ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Smart Job Matching */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Search size={24} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Job Matching</h3>
            <p className="text-gray-600 mb-4">
              AI-powered algorithms match your skills and preferences with the perfect job opportunities.
            </p>
            <button
              className="bg-white border border-purple-300 text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
            >
              Learn More
            </button>
          </div>
          {/* Career Resources */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Book size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Resources</h3>
            <p className="text-gray-600 mb-4">
              Access comprehensive guides, tutorials, and expert advice to advance your career.
            </p>
            <button
              className="bg-white border border-blue-300 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
            >
              Explore Resources
            </button>
          </div>
          {/* Career Analytics */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Analytics</h3>
            <p className="text-gray-600 mb-4">
              Track your progress and get insights into your professional growth journey.
            </p>
            <button
              className="bg-white border border-pink-300 text-pink-600 hover:bg-pink-100 px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
            >
              View Analytics
            </button>
          </div>
        </section>

        {/* Calendar & Reminders Section */}
        <section
          ref={calendarSectionRef}
          className={`bg-white p-6 rounded-lg shadow mb-8 transition-all duration-700 ease-out ${calendarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Calendar size={24} className="text-blue-600 mr-2" />
              <h2 className="text-lg font-bold text-gray-800">Calendar & Reminders</h2>
            </div>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              {showCalendar ? 'Hide Calendar' : 'Show Full Calendar'}
            </button>
          </div>

          {/* Calendar View */}
          {showCalendar && (
            <div className="mb-6 transition-all duration-300 ease-in-out">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-blue-800">April 2025</h3>
                  <div className="flex space-x-2">
                    <button className="p-1 rounded hover:bg-blue-100 transition-colors">
                      <i className="fas fa-chevron-left text-blue-600"></i>
                    </button>
                    <button className="p-1 rounded hover:bg-blue-100 transition-colors">
                      <i className="fas fa-chevron-right text-blue-600"></i>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const dayNum = i - 2; // Adjust for month starting position
                    return (
                      <div key={i} className={`text-center p-1 rounded-full h-8 w-8 flex items-center justify-center mx-auto
                        ${dayNum === 26 ? 'bg-blue-500 text-white' : 
                        dayNum === 28 || dayNum === 30 ? 'bg-blue-100 text-blue-800' : 
                        dayNum === 5 ? 'bg-green-500 text-white' : 
                        dayNum > 0 && dayNum <= 30 ? 'hover:bg-gray-100 cursor-pointer transition-colors' : 'text-gray-300'}`}
                        style={{
                          animation: calendarVisible ? `zoomIn 0.3s ease forwards ${i * 0.01}s` : 'none',
                          opacity: calendarVisible ? 1 : 0
                        }}>
                        {dayNum > 0 && dayNum <= 30 ? dayNum : ''}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Calendar Tab Navigation */}
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${activeTab === 'events'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'}`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${activeTab === 'tasks'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'}`}
            >
              Scheduled Tasks
            </button>
            <button
              onClick={() => setActiveTab('planner')}
              className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${activeTab === 'planner'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'}`}
            >
              Weekly Planner
            </button>
          </div>

          {/* Calendar Content */}
          {renderCalendarContent()}
        </section>

        {/* Smart Suggestions / AI Recommendations */}
        <section
          ref={suggestionsSectionRef}
          className={`bg-white p-6 rounded-lg shadow mb-8 transition-all duration-700 ease-out ${suggestionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Lightbulb size={24} className="text-yellow-600 mr-2" />
              <h2 className="text-lg font-bold text-gray-800">AI Career Recommendations</h2>
            </div>
            <span className="text-sm text-gray-500">Updated 2h ago</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((rec, index) => (
              <div
                key={rec.id}
                className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                style={{
                  animation: suggestionsVisible ? `fadeInUp 0.5s ease forwards ${index * 0.1}s` : 'none',
                  opacity: suggestionsVisible ? 1 : 0
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${
                    rec.type === 'job' ? 'bg-blue-100' :
                    rec.type === 'course' ? 'bg-purple-100' : 'bg-green-100'
                  }`}>
                    {rec.type === 'job' ? <Briefcase size={18} className="text-blue-600" /> :
                     rec.type === 'course' ? <Book size={18} className="text-purple-600" /> :
                     <Lightbulb size={18} className="text-green-600" />}
                  </div>
                  <span className={`text-xs font-semibold ${
                    rec.confidence >= 90 ? 'text-green-600' :
                    rec.confidence >= 80 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {rec.confidence}% Match
                  </span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">{rec.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{rec.reason}</p>
                <button className="w-full flex items-center justify-between px-3 py-2 bg-white border border-gray-200 rounded-md hover:border-blue-400 transition-all duration-300">
                  <span className="text-sm">View Details</span>
                  <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions Section */}
        <section
          ref={quickActionsSectionRef}
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 transition-all duration-700 ease-out ${quickActionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 flex flex-col items-center">
            <MessageCircle size={24} className="text-blue-600 mb-2" />
            <span className="text-sm font-medium">Mock Interview</span>
          </button>
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 flex flex-col items-center">
            <Network size={24} className="text-purple-600 mb-2" />
            <span className="text-sm font-medium">Networking</span>
          </button>
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 flex flex-col items-center">
            <Settings size={24} className="text-green-600 mb-2" />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 flex flex-col items-center">
            <Award size={24} className="text-pink-600 mb-2" />
            <span className="text-sm font-medium">Achievements</span>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;