import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Home() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('user'); // Check if user data exists

  return (
    <div className="bg-[#eef0ff] min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-[#f8f9ff] border-b border-gray-200">
        <nav
          aria-label="Primary Navigation"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16"
        >
          <a className="flex items-center space-x-2" href="#">
            <i className="fas fa-graduation-cap text-[#6c63ff] text-lg"></i>
            <span className="font-extrabold text-black text-lg select-none">
              CareerCompass
            </span>
          </a>
          <ul className="hidden md:flex items-center space-x-8 text-gray-500 text-sm font-medium select-none">
            <li>
              <a
                href="/"
                className={`hover:text-gray-900 cursor-pointer ${location.pathname === '/' ? 'text-black font-bold' : ''
                  }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className={`hover:text-gray-900 cursor-pointer ${location.pathname === '/dashboard' ? 'text-black font-bold' : ''
                  }`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:text-gray-900 cursor-pointer">
                Jobs
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Link to="/dashboard">
                <button className="text-black text-sm font-semibold px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  Dashboard
                </button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-black text-sm font-semibold px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-[#6c63ff] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#574fd6]">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <section className="max-w-xl text-left">
          <h1
            className="text-5xl font-extrabold leading-tight text-black max-w-xl"
            style={{ lineHeight: 1.1 }}
          >
            Find Your
            <span className="text-[#6c63ff]"> Perfect Career </span>
            With AI-Powered Guidance
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-md">
            Discover global opportunities tailored to your skills and aspirations with our AI-powered career platform designed for graduates.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#6c63ff] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#574fd6] transition">
              Get Started
            </button>
            <button className="bg-[#f8f9ff] text-black font-semibold px-6 py-3 rounded-md border border-gray-200 hover:bg-gray-100 transition">
              Browse Opportunities
            </button>
          </div>
        </section>
        <section className="max-w-lg w-full">
          <img
            alt="Close-up photo of a laptop keyboard and screen showing colorful code with syntax highlighting in a dark-themed code editor"
            className="rounded-lg shadow-lg w-full object-cover"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/db5f81ad-e692-4197-a2cd-cdaaf6705759.jpg"
            width="600"
          />
        </section>
      </main>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold text-center text-black">
            Why Choose CareerCompass?
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Our platform uses artificial intelligence to connect you with the perfect opportunities and resources to launch your career.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-robot text-[#6c63ff] text-4xl mb-4"></i>
              <h3 className="text-lg font-bold">AI-Powered Matching</h3>
              <p className="text-gray-600 mt-2">
                Get personalized job recommendations based on your skills and preferences.
              </p>
            </div>
            <div className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-globe text-[#6c63ff] text-4xl mb-4"></i>
              <h3 className="text-lg font-bold">Global Opportunities</h3>
              <p className="text-gray-600 mt-2">
                Access job openings and internships from around the world.
              </p>
            </div>
            <div className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-book text-[#6c63ff] text-4xl mb-4"></i>
              <h3 className="text-lg font-bold">Learning Resources</h3>
              <p className="text-gray-600 mt-2">
                Upskill with curated courses and tutorials tailored to your career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-400 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold">Our Mission</h2>
          <p className="mt-4 text-lg">
            To empower graduates worldwide by connecting them with meaningful career opportunities through innovative AI technology.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* FAQs Section */}
      <FAQSection />

      {/* Blog Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold text-center text-black">
            Latest From Our Blog
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Stay updated with the latest trends and insights in the career world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Blog Post 1 */}
            <div className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg">
              <img
                src="/images/ace-interview.jpeg"
                alt="Blog Post Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">How to Ace Your Next Interview</h3>
              <p className="text-gray-600 mt-2">
                Learn expert tips and tricks to confidently tackle any interview.
              </p>
              <a href="#" className="text-[#6c63ff] font-semibold mt-4 inline-block hover:underline">
                Read More
              </a>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg">
              <img
                src="/images/skills.jpeg"
                alt="Blog Post Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">Top 10 Skills Employers Look For</h3>
              <p className="text-gray-600 mt-2">
                Discover the most in-demand skills to boost your employability.
              </p>
              <a href="#" className="text-[#6c63ff] font-semibold mt-4 inline-block hover:underline">
                Read More
              </a>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg">
              <img
                src="/images/remote_work.jpeg"
                alt="Blog Post Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">The Future of Remote Work</h3>
              <p className="text-gray-600 mt-2">
                Explore how remote work is shaping the global job market.
              </p>
              <a href="#" className="text-[#6c63ff] font-semibold mt-4 inline-block hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Career Insights & Trends Section */}
      <section className="bg-[#eef0ff] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold text-center text-black">
            Career Insights & Trends
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Stay informed about the latest job market trends and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-2xl font-bold text-black">Tech Jobs on the Rise</h3>
              <p className="text-gray-600 mt-2">
                50% increase in demand for AI engineers.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-2xl font-bold text-black">Remote Work Growth</h3>
              <p className="text-gray-600 mt-2">
                70% of companies now offer remote roles.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-2xl font-bold text-black">Top Industries</h3>
              <p className="text-gray-600 mt-2">
                Technology, Healthcare, Finance leading the way.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-purple-700">
              View More Insights
            </button>
          </div>
        </div>
      </section>

      {/* Global Opportunities Map */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-400 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold">Explore Global Opportunities</h2>
          <p className="mt-4 text-lg">
            Find your dream job anywhere in the world with our interactive map.
          </p>
          <div className="mt-8">
            <img
              src="/images/global.jpeg"
              alt="Global Opportunities Map"
              className="w-full max-h-60 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold text-center text-black">
            Trusted By Top Companies
          </h2>
          <p className="text-center text-gray-600 mt-4">
            We partner with leading organizations to bring you the best opportunities.
          </p>

          {/* Partner Logos Flexbox */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <motion.img
              src="/images/Google.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 1"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.img
              src="/images/Microsoft.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 2"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.img
              src="/images/Adobe.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 3"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.img
              src="/images/Amazon.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 4"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.img
              src="/images/EY.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 5"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.img
              src="/images/zoho.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 6"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.img
              src="/images/zomato.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 7"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.img
              src="/images/Deutsch bank.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 8"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.img
              src="/images/hsbc.jpeg"
              height="100"
              width="100"
              alt="Partner Logo 9"
              className="w-28 h-14 object-contain"
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />

          </div>
        </div>
      </section>

      {/* Ready to Launch Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-400 text-white py-16 text-center">
        <h2 className="text-3xl font-extrabold">Ready to Launch Your Career?</h2>
        <p className="mt-4 text-lg">
          Join thousands of graduates who have found their dream careers through our platform.
        </p>
        <button className="mt-6 bg-white text-purple-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>

      {/* Footer Section */}
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the AI matching work?",
      answer: "Our AI analyzes your skills, experience, and preferences to recommend jobs that align with your profile.",
    },
    {
      question: "Is CareerCompass free to use?",
      answer: "Yes, basic features are free. Premium plans offer additional benefits like advanced analytics and priority support.",
    },
    {
      question: "Can I access global opportunities?",
      answer: "Absolutely! Our platform connects you with job openings worldwide.",
    },
    {
      question: "How do I create a profile on CareerCompass?",
      answer: "Simply sign up with your email, fill in your details, and upload your resume to get started.",
    },
    {
      question: "What types of jobs are available on the platform?",
      answer: "We offer a wide range of opportunities, including full-time jobs, internships, and freelance projects across various industries.",
    },
    {
      question: "Can I save jobs to apply later?",
      answer: "Yes, you can save jobs to your favorites and apply at your convenience.",
    },
    {
      question: "How do I track my job applications?",
      answer: "You can track your applications in the 'My Applications' section of your dashboard.",
    },
    {
      question: "Are there resources to help me prepare for interviews?",
      answer: "Yes, we provide interview tips, resume-building guides, and other resources to help you succeed.",
    },
    {
      question: "Can I get notifications for new job postings?",
      answer: "Yes, you can enable notifications to receive updates about new job postings that match your preferences.",
    },
    {
      question: "How secure is my data on CareerCompass?",
      answer: "We prioritize your privacy and use advanced security measures to protect your data.",
    },
  ];

  return (
    <section className="bg-[#eef0ff] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-center text-black">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-black">{faq.question}</h3>
                <button className="text-2xl font-bold text-gray-500">
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 font-medium">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
    {
      name: "Jason Doe",
      role: "Software Engineer",
      feedback: "The AI job matching was incredibly accurate. I found a software engineering position that perfectly aligned with my skills and interests.",
    },
    {
      name: "Emily Smith",
      role: "Data Scientist",
      feedback: "CareerCompass helped me land my dream job in data science. The resources and recommendations were spot on!",
    },
    {
      name: "Michael Brown",
      role: "Product Manager",
      feedback: "The platform's AI-powered guidance made my job search so much easier. Highly recommend it!",
    },
    {
      name: "Sophia Johnson",
      role: "UX Designer",
      feedback: "I loved the personalized job recommendations. They matched my skills and career goals perfectly.",
    },
    {
      name: "Daniel Lee",
      role: "Marketing Specialist",
      feedback: "CareerCompass connected me with amazing global opportunities. I couldn't be happier with the results.",
    },
    {
      name: "Olivia Davis",
      role: "HR Manager",
      feedback: "The platform's resources helped me prepare for interviews and land a great position in HR.",
    },
    {
      name: "James Wilson",
      role: "Full-Stack Developer",
      feedback: "The job tracking feature was incredibly helpful. I could easily manage my applications and follow-ups.",
    },
    {
      name: "Ava Martinez",
      role: "Business Analyst",
      feedback: "CareerCompass provided me with the tools and opportunities I needed to kickstart my career in business analysis.",
    },
    {
      name: "Liam Garcia",
      role: "Cybersecurity Specialist",
      feedback: "The platform's AI recommendations were spot on. I found a cybersecurity role that perfectly matched my expertise.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= stories.length ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? stories.length - 3 : prevIndex - 3
    );
  };

  const visibleStories = stories.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-[#eef0ff] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-center text-black">
          Success Stories
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Hear from graduates who have launched their careers with CareerCompass.
        </p>
        <div className="relative mt-12 flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white p-4 rounded-full shadow-lg hover:bg-[#574fd6] transition z-10"
            aria-label="Previous"
            style={{ left: "-20px" }}

          >
            &#8592;
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white p-4 rounded-full shadow-lg hover:bg-[#574fd6] transition z-10"
            aria-label="Next"
            style={{ right: "-20px" }}
          >
            &#8594;
          </button>

          {/* Stories */}
          <div className="flex justify-center gap-6 w-full">
            {visibleStories.map((story, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg w-1/3"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d6d8ff] text-[#6c63ff] font-bold rounded-full w-12 h-12 flex items-center justify-center">
                    {story.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{story.name}</h3>
                    <p className="text-sm text-gray-500">{story.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{story.feedback}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Michael Moore",
      role: "Developer",
      feedback: "This platform transformed my job search process. Highly recommend it!",
    },
    {
      name: "Sophia Johnson",
      role: "UX Designer",
      feedback: "CareerCompass helped me find my dream job in UX design. Amazing experience!",
    },
    {
      name: "Daniel Lee",
      role: "Marketing Specialist",
      feedback: "The AI-powered recommendations were spot on. I landed a great marketing role!",
    },
    {
      name: "Emily Smith",
      role: "Data Scientist",
      feedback: "The resources and guidance provided were invaluable. Thank you, CareerCompass!",
    },
    {
      name: "Jason Doe",
      role: "Software Engineer",
      feedback: "I found a software engineering position that perfectly matched my skills.",
    },
    {
      name: "Olivia Davis",
      role: "HR Manager",
      feedback: "The platform's tools helped me prepare for interviews and land a great HR role.",
    },
    {
      name: "James Wilson",
      role: "Full-Stack Developer",
      feedback: "The job tracking feature was incredibly helpful for managing my applications.",
    },
    {
      name: "Ava Martinez",
      role: "Business Analyst",
      feedback: "CareerCompass provided me with the tools I needed to kickstart my career.",
    },
    {
      name: "Liam Garcia",
      role: "Cybersecurity Specialist",
      feedback: "The AI recommendations were spot on. I found a cybersecurity role that matched my expertise.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-center text-black">
          What Our Users Say
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Real feedback from real users who trust CareerCompass.
        </p>
        <div className="relative mt-12 flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white p-4 rounded-full shadow-lg hover:bg-[#574fd6] transition z-10"
            aria-label="Previous"
            style={{ left: "-20px" }}

          >
            &#8592;
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white p-4 rounded-full shadow-lg hover:bg-[#574fd6] transition z-10"
            aria-label="Next"
            style={{ right: "-20px" }}
          >
            &#8594;
          </button>


          {/* Testimonials */}
          <div className="flex justify-center gap-6 w-full">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg w-1/3"
              >
                <p className="text-gray-600">{testimonial.feedback}</p>
                <div className="flex items-center justify-start mt-4">
                  <div className="bg-[#d6d8ff] text-[#6c63ff] font-bold rounded-full w-10 h-10 flex items-center justify-center mr-2">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}

export default Home;

<nav className="bg-gray-100 p-4">
  <ul className="flex space-x-4">
    <li>
      <Link to="/" className="text-blue-500 hover:underline">Home</Link>
    </li>
    <li>
      <Link to="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
    </li>
    <li>
      <Link to="/jobs" className="text-blue-500 hover:underline">Jobs</Link>
    </li>
    <li>
      <Link to="/account" className="text-blue-500 hover:underline">Account</Link>
    </li>
    <li>
      <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
    </li>
    <li>
      <Link to="/login" className="text-blue-500 hover:underline">Log In</Link>
    </li>
  </ul>
</nav>