import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 }, // Increased y for more noticeable effect
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15 // Slightly faster stagger
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

// Specific variant for staggered logo items
const logoItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
// --- End Animation Variants ---

function Home() {
  const location = useLocation();
  // const isLoggedIn = localStorage.getItem('user'); // Check if user data exists - Not used in animation logic

  return (
    // Added motion.div as the main container if needed, but animating sections is often better.
    // Kept original div for layout structure.
    <div className="bg-[#eef0ff] min-h-screen flex flex-col overflow-x-hidden"> {/* Added overflow-x-hidden */}

      {/* Header Section - Animate on Load */}
      <motion.header
        variants={fadeIn} // Simple fade-in for header
        initial="hidden"
        animate="visible"
        className="bg-[#f8f9ff] border-b border-gray-200 sticky top-0 z-50" // Added sticky and z-index
      >
        <nav
          aria-label="Primary Navigation"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16"
        >
          <a className="flex items-center space-x-2" href="#">
            <i className="fas fa-graduation-cap text-[#6c63ff] text-lg"></i>
            <span className="font-extrabold text-black text-lg select-none">
              CareerCompass AI
            </span>
          </a>
          <ul className="hidden md:flex items-center space-x-8 text-gray-500 text-sm font-medium select-none">
            {/* Nav items - could add individual hover effects if desired */}
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
              <a href="/docs" className={`hover:text-gray-900 cursor-pointer ${location.pathname === '/docs' ? 'text-black font-bold' : ''
                  }`}>
                Docs {/* Updated path/condition */}
              </a>
            </li>

            <li>
              <a
                href="/blog" // Example path
                className={`hover:text-gray-900 cursor-pointer ${location.pathname === '/blog' ? 'text-black font-bold' : ''
                  }`}
              >
                Blog
              </a>
            </li>

            <li>
              <a href="/jobs" className={`hover:text-gray-900 cursor-pointer ${location.pathname === '/jobs' ? 'text-black font-bold' : ''
                  }`}>

                Jobs
              </a>
            </li>
            <li>
              <a
                href="/about" // Example path
                className={`hover:text-gray-900 cursor-pointer ${location.pathname === '/about' ? 'text-black font-bold' : ''
                  }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact" // Example path
                className={`hover:text-gray-900 cursor-pointer ${location.pathname === '/contact' ? 'text-black font-bold' : ''
                  }`}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
             {/* No specific animation added to login/signup buttons, but could add hover effects */}
            <>
              <Link to="/login">
                <button className="text-black text-sm font-semibold px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-[#6c63ff] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#574fd6] transition-colors duration-200">
                  Sign up
                </button>
              </Link>
            </>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section - Animate on Load with Stagger */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content Side */}
        <motion.section
          className="max-w-xl text-left"
          variants={stagger} // Apply stagger to the container
          initial="hidden"
          animate="visible" // Animate immediately on load
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-extrabold leading-tight text-black max-w-xl"
            style={{ lineHeight: 1.1 }}
          >
            Find Your
            <span className="text-[#6c63ff]"> Perfect Career </span>
            With AI-Powered Guidance
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-gray-600 text-lg max-w-md"
          >
            Discover global opportunities tailored to your skills and aspirations with our AI-powered career platform designed for graduates.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6c63ff] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#574fd6] transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f8f9ff] text-black font-semibold px-6 py-3 rounded-md border border-gray-200 hover:bg-gray-100 transition"
            >
              Browse Opportunities
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Image Side */}
        <motion.section
          className="max-w-lg w-full"
          variants={fadeInUp} // Simple fade in up for the image section
          initial="hidden"
          animate="visible" // Animate immediately on load
        >
          <motion.img
            alt="Close-up photo of a laptop keyboard and screen showing colorful code with syntax highlighting in a dark-themed code editor"
            className="rounded-lg shadow-lg w-full object-cover"
            height="400"
            src="/images/computer.jpeg"
            width="600"
            // Adding hover effect to image as well
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.section>
      </main>

      {/* Why Choose Us Section - Animate on Scroll */}
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible, only once
        variants={stagger} // Use stagger on the section to affect direct children if needed, or on the grid below
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-center text-black">
            Why Choose CareerCompass?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-600 mt-4 max-w-2xl mx-auto"> {/* Added max-width */}
            Our platform uses artificial intelligence to connect you with the perfect opportunities and resources to launch your career.
          </motion.p>

          {/* Stagger animation applied to the grid container */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={stagger} // Stagger the children (cards)
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-robot text-[#6c63ff] text-4xl mb-4"></i>
              <h3 className="text-lg font-bold">AI-Powered Matching</h3>
              <p className="text-gray-600 mt-2">
                Get personalized job recommendations based on your skills and preferences.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-globe text-[#6c63ff] text-4xl mb-4"></i>
              <h3 className="text-lg font-bold">Global Opportunities</h3>
              <p className="text-gray-600 mt-2">
                Access job openings and internships from around the world.
              </p>
            </motion.div>
            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-book text-[#6c63ff] text-4xl mb-4"></i>
              <h3 className="text-lg font-bold">Learning Resources</h3>
              <p className="text-gray-600 mt-2">
                Upskill with curated courses and tutorials tailored to your career goals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mission Section - Animate on Scroll */}
      <motion.section
        className="bg-gradient-to-r from-[#6c63ff] to-[#574fd6] text-white py-16 text-center" // Adjusted gradient
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp} // Simple fade in up for the whole section
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold">Our Mission</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto"> {/* Added max-width */}
            To empower graduates worldwide by connecting them with meaningful career opportunities through innovative AI technology.
          </p>
        </div>
      </motion.section>

      {/* Testimonials Section - Component Wrapper Animate on Scroll */}
       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.1 }} // Lower amount for potentially tall component
         variants={fadeIn} // Just fade the section in, let internal component handle its animations
       >
         <Testimonials />
       </motion.div>

      {/* Success Stories Section - Component Wrapper Animate on Scroll */}
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.1 }}
         variants={fadeIn}
      >
        <SuccessStories />
      </motion.div>

      {/* FAQs Section - Component Wrapper Animate on Scroll */}
       <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.1 }}
         variants={fadeIn}
       >
          <FAQSection />
       </motion.div>

      {/* Blog Section - Animate on Scroll */}
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Adjust amount if needed
        variants={stagger} // Stagger children if h2/p are direct children, otherwise apply to grid below
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-center text-black">
            Latest From Our Blog
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in the career world.
          </motion.p>

          {/* Stagger animation applied to the grid container */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={stagger}
          >
            {/* Blog Post 1 */}
            <motion.div variants={fadeInUp} className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"> {/* Added flex */}
              <img
                src="/images/ace-interview.jpeg"
                alt="Person smiling during an interview" // More descriptive alt text
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">How to Ace Your Next Interview</h3>
              <p className="text-gray-600 mt-2 flex-grow"> {/* Added flex-grow */}
                Learn expert tips and tricks to confidently tackle any interview.
              </p>
              <a href="#" className="text-[#6c63ff] font-semibold mt-4 inline-block hover:underline self-start"> {/* Added self-start */}
                Read More
              </a>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div variants={fadeInUp} className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img
                src="/images/skills.jpeg"
                alt="Collage of icons representing different skills" // More descriptive alt text
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">Top 10 Skills Employers Look For</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Discover the most in-demand skills to boost your employability.
              </p>
              <a href="#" className="text-[#6c63ff] font-semibold mt-4 inline-block hover:underline self-start">
                Read More
              </a>
            </motion.div>

            {/* Blog Post 3 */}
            <motion.div variants={fadeInUp} className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img
                src="/images/remote_work.jpeg"
                alt="Person working comfortably on a laptop at home" // More descriptive alt text
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">The Future of Remote Work</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Explore how remote work is shaping the global job market.
              </p>
              <a href="#" className="text-[#6c63ff] font-semibold mt-4 inline-block hover:underline self-start">
                Read More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Career Insights & Trends Section - Animate on Scroll */}
      <motion.section
        className="bg-[#eef0ff] py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-center text-black">
            Career Insights & Trends
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay informed about the latest job market trends and opportunities.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-12" // Adjusted gap
            variants={stagger}
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-black">Tech Jobs on the Rise</h3>
              <p className="text-gray-600 mt-2">
                50% increase in demand for AI engineers.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-black">Remote Work Growth</h3>
              <p className="text-gray-600 mt-2">
                70% of companies now offer remote roles.
              </p>
            </motion.div>
            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-black">Top Industries</h3>
              <p className="text-gray-600 mt-2">
                Technology, Healthcare, Finance leading the way.
              </p>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center mt-12"> {/* Increased margin top */}
             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-[#6c63ff] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#574fd6] transition-colors duration-200" // Changed color to match theme
             >
              View More Insights
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Global Opportunities Map - Animate on Scroll */}
      <motion.section
        className="bg-gradient-to-r from-[#6c63ff] to-[#574fd6] text-white py-16 text-center" // Adjusted gradient
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp} // Fade in the whole section
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold">Explore Global Opportunities</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Find your dream job anywhere in the world with our interactive map.
          </p>
          <motion.div
             className="mt-8"
             variants={fadeInUp} // Can animate map separately if desired
             initial="hidden" // Needs own initial/whileInView if animated separately
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/images/global.jpeg"
              alt="Stylized world map with connection points" // More descriptive alt text
              className="w-full max-h-60 object-contain rounded-lg shadow-lg" // Kept max-h-60, adjust if needed
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Partnerships Section - Animate on Scroll */}
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-center text-black">
            Trusted By Top Companies
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            We partner with leading organizations to bring you the best opportunities.
          </motion.p>

          {/* Partner Logos Flexbox - Stagger children */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12" // Added items-center, adjusted gap
            variants={stagger} // Stagger the logos
          >
            {/* Use logoItem variant for each logo */}
            {[
              { src: "/images/Google.jpeg", alt: "Google Logo" },
              { src: "/images/Microsoft.jpeg", alt: "Microsoft Logo" },
              { src: "/images/Adobe.jpeg", alt: "Adobe Logo" },
              { src: "/images/Amazon.jpeg", alt: "Amazon Logo" },
              { src: "/images/EY.jpeg", alt: "EY Logo" },
              { src: "/images/zoho.jpeg", alt: "Zoho Logo" },
              { src: "/images/zomato.jpeg", alt: "Zomato Logo" },
              { src: "/images/Deutsch bank.jpeg", alt: "Deutsche Bank Logo" },
              { src: "/images/hsbc.jpeg", alt: "HSBC Logo" },
            ].map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                height="40" // Adjusted height for better consistency
                width="100" // Adjusted width
                alt={logo.alt}
                className="h-10 object-contain" // Use tailwind height, control via height/width props if needed
                variants={logoItem} // Use the specific item variant for entry animation
                whileHover={{ scale: 1.15, filter: 'brightness(1.1)' }} // Enhanced hover effect
                transition={{ duration: 0.2 }} // Transition for hover
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Ready to Launch Section - Animate on Scroll */}
       <motion.section
         className="bg-gradient-to-r from-[#6c63ff] to-[#574fd6] text-white py-16 text-center" // Adjusted gradient
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
         variants={fadeInUp}
       >
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> {/* Added container div */}
           <h2 className="text-3xl font-extrabold">Ready to Launch Your Career?</h2>
           <p className="mt-4 text-lg max-w-2xl mx-auto">
             Join thousands of graduates who have found their dream careers through our platform.
           </p>
           <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#6c63ff" }} // Enhanced hover
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-[#6c63ff] font-semibold px-8 py-3 rounded-md transition duration-300 ease-in-out" // Increased padding, adjusted colors
           >
             Get Started Today
           </motion.button>
         </div>
       </motion.section>

      {/* Footer Section - Animate on Scroll */}
      <motion.footer
        className="bg-white py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn} // Simple fade in for footer
      >
        {/* Could apply stagger to the grid container if desired */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-black">CareerCompass</h3>
            <p className="text-gray-600 mt-2 text-sm"> {/* Smaller text */}
              Your AI-powered career companion for global opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">Platform</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Jobs & Internships</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Learning Hub</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Global Opportunities</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Career Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black">Connect</h3>
             {/* Add actual links and icons later */}
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"> {/* Added top border */}
          © {new Date().getFullYear()} CareerCompass. All rights reserved. {/* Dynamic Year */}
        </div>
      </motion.footer>
    </div>
  );
}

// --- Sub Components with Animations ---

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "How does the AI matching work?", answer: "Our AI analyzes your skills, experience, and preferences to recommend jobs that align with your profile." },
    { question: "Is CareerCompass free to use?", answer: "Yes, basic features are free. Premium plans offer additional benefits like advanced analytics and priority support." },
    { question: "Can I access global opportunities?", answer: "Absolutely! Our platform connects you with job openings worldwide." },
    { question: "How do I create a profile on CareerCompass?", answer: "Simply sign up with your email, fill in your details, and upload your resume to get started." },
    { question: "What types of jobs are available?", answer: "We offer a wide range of opportunities, including full-time jobs, internships, and freelance projects across various industries." }, // Simplified question
    { question: "Can I save jobs to apply later?", answer: "Yes, you can save jobs to your favorites and apply at your convenience." },
    { question: "How do I track my job applications?", answer: "You can track your applications in the 'My Applications' section of your dashboard." },
    { question: "Are there resources for interview prep?", answer: "Yes, we provide interview tips, resume-building guides, and other resources to help you succeed." }, // Simplified question
    { question: "Can I get notifications for new jobs?", answer: "Yes, you can enable notifications to receive updates about new job postings that match your preferences." }, // Simplified question
    { question: "How secure is my data?", answer: "We prioritize your privacy and use advanced security measures to protect your data." }, // Simplified question
  ];

  return (
    // This parent section is already animated by the motion.div wrapper in Home
    <section className="bg-[#eef0ff] py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12"> {/* Reduced max-width for better readability */}
        <motion.h2
           variants={fadeInUp} // Animate title within the section
           className="text-3xl font-extrabold text-center text-black mb-12" // Added margin bottom
        >
          Frequently Asked Questions
        </motion.h2>
        {/* Stagger the FAQ items */}
        <motion.div
          className="space-y-4" // Reduced space
          variants={stagger}
          initial="hidden" // Initial state for the container stagger
          whileInView="visible" // Trigger when container is in view
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp} // Each item fades up as part of the stagger
              className="bg-white p-5 rounded-lg shadow-md cursor-pointer overflow-hidden" // Added overflow-hidden, adjusted padding/shadow
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold text-black pr-4">{faq.question}</h3> {/* Adjusted size/weight */}
                <motion.button
                   className="text-xl font-bold text-[#6c63ff] flex-shrink-0" // Adjusted color/size
                   animate={{ rotate: openIndex === index ? 45 : 0 }} // Rotate plus/minus icon
                   transition={{ duration: 0.3 }}
                >
                   +
                </motion.button>
              </div>
              {/* AnimatePresence for smooth expand/collapse */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }} // Added marginTop here
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-gray-600 text-sm font-medium" // Adjusted size
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = [
     { name: "Jason Doe", role: "Software Engineer", feedback: "The AI job matching was incredibly accurate. I found a software engineering position that perfectly aligned with my skills and interests." },
     { name: "Emily Smith", role: "Data Scientist", feedback: "CareerCompass helped me land my dream job in data science. The resources and recommendations were spot on!" },
     { name: "Michael Brown", role: "Product Manager", feedback: "The platform's AI-powered guidance made my job search so much easier. Highly recommend it!" },
     { name: "Sophia Johnson", role: "UX Designer", feedback: "I loved the personalized job recommendations. They matched my skills and career goals perfectly." },
     { name: "Daniel Lee", role: "Marketing Specialist", feedback: "CareerCompass connected me with amazing global opportunities. I couldn't be happier with the results." },
     { name: "Olivia Davis", role: "HR Manager", feedback: "The platform's resources helped me prepare for interviews and land a great position in HR." },
     { name: "James Wilson", role: "Full-Stack Dev", feedback: "The job tracking feature was incredibly helpful. I could easily manage my applications and follow-ups." }, // Shortened role
     { name: "Ava Martinez", role: "Business Analyst", feedback: "CareerCompass provided me with the tools and opportunities I needed to kickstart my career in business analysis." },
     { name: "Liam Garcia", role: "Cybersecurity Spec.", feedback: "The platform's AI recommendations were spot on. I found a cybersecurity role that perfectly matched my expertise." }, // Shortened role
  ];

  const storiesPerPage = 3; // Define how many stories per view

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      // Loop back to 0 if at the end
      (prevIndex + storiesPerPage) % stories.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      // Loop back to the end if at the beginning
      (prevIndex - storiesPerPage + stories.length) % stories.length
    );
  };

  // Calculate visible stories based on current index and looping
  const visibleStories = [];
  for (let i = 0; i < storiesPerPage; i++) {
      visibleStories.push(stories[(currentIndex + i) % stories.length]);
  }


  return (
     // This parent section is already animated by the motion.div wrapper in Home
    <section className="bg-[#eef0ff] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-center text-black">
          Success Stories
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Hear from graduates who have launched their careers with CareerCompass.
        </motion.p>
        <div className="relative mt-12"> {/* Removed flex items-center */}
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-8 top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white p-3 rounded-full shadow-lg hover:bg-[#574fd6] transition z-10 disabled:opacity-50" // Adjusted position/padding
            aria-label="Previous Success Stories"
             // disabled={currentIndex === 0} // Basic disable logic (might need adjustment for looping)
          >
            &#8592;
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-8 top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white p-3 rounded-full shadow-lg hover:bg-[#574fd6] transition z-10 disabled:opacity-50" // Adjusted position/padding
            aria-label="Next Success Stories"
            // disabled={currentIndex + storiesPerPage >= stories.length} // Basic disable logic
          >
            &#8594;
          </button>

          {/* Stories container with AnimatePresence for transitions */}
           <div className="overflow-hidden"> {/* Added overflow hidden */}
               <AnimatePresence mode="wait"> {/* Use mode='wait' or 'popLayout' */}
                   <motion.div
                       key={currentIndex} // Key change triggers animation
                       initial={{ opacity: 0, x: 50 }} // Start off-screen right
                       animate={{ opacity: 1, x: 0 }} // Animate to center
                       exit={{ opacity: 0, x: -50 }} // Exit off-screen left
                       transition={{ duration: 0.4, ease: "easeInOut" }}
                       className="flex justify-center gap-6 w-full" // Flex layout for cards
                   >
                       {visibleStories.map((story, index) => (
                           <div
                               key={index} // Use a unique key if story objects have IDs
                               className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col" // Added flex-col
                           >
                               <div className="flex items-center space-x-4 mb-4"> {/* Added mb-4 */}
                                   <div className="bg-[#d6d8ff] text-[#6c63ff] font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0"> {/* Added flex-shrink-0 */}
                                       {story.name.split(" ").map((n) => n[0]).join("")}
                                   </div>
                                   <div>
                                       <h3 className="text-lg font-bold">{story.name}</h3>
                                       <p className="text-sm text-gray-500">{story.role}</p>
                                   </div>
                               </div>
                               <p className="text-gray-600 text-sm flex-grow">{story.feedback}</p> {/* Adjusted text size, added flex-grow */}
                           </div>
                       ))}
                   </motion.div>
               </AnimatePresence>
           </div>
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        { name: "Michael Moore", role: "Developer", feedback: "This platform transformed my job search process. Highly recommend it!" },
        { name: "Sophia Johnson", role: "UX Designer", feedback: "CareerCompass helped me find my dream job in UX design. Amazing experience!" },
        { name: "Daniel Lee", role: "Marketing Specialist", feedback: "The AI-powered recommendations were spot on. I landed a great marketing role!" },
        { name: "Emily Smith", role: "Data Scientist", feedback: "The resources and guidance provided were invaluable. Thank you, CareerCompass!" },
        { name: "Jason Doe", role: "Software Engineer", feedback: "I found a software engineering position that perfectly matched my skills." },
        { name: "Olivia Davis", role: "HR Manager", feedback: "The platform's tools helped me prepare for interviews and land a great HR role." },
        { name: "James Wilson", role: "Full-Stack Dev", feedback: "The job tracking feature was incredibly helpful for managing my applications." }, // Shortened role
        { name: "Ava Martinez", role: "Business Analyst", feedback: "CareerCompass provided me with the tools I needed to kickstart my career." },
        { name: "Liam Garcia", role: "Cybersecurity Spec.", feedback: "The AI recommendations were spot on. I found a cybersecurity role that matched my expertise." }, // Shortened role
    ];

    const testimonialsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + testimonialsPerPage) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - testimonialsPerPage + testimonials.length) % testimonials.length);
    };

    // Calculate visible testimonials
    const visibleTestimonials = [];
    for (let i = 0; i < testimonialsPerPage; i++) {
        visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
    }

    return (
        // This parent section is already animated by the motion.div wrapper in Home
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-center text-black">
                    What Our Users Say
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                    Real feedback from real users who trust CareerCompass.
                </motion.p>
                <div className="relative mt-12">
                     {/* Left Arrow */}
                     <button
                         onClick={handlePrev}
                         className="absolute left-0 md:-left-8 top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white p-3 rounded-full shadow-lg hover:bg-[#574fd6] transition z-10"
                         aria-label="Previous Testimonials"
                     >
                         &#8592;
                     </button>

                     {/* Right Arrow */}
                     <button
                         onClick={handleNext}
                         className="absolute right-0 md:-right-8 top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white p-3 rounded-full shadow-lg hover:bg-[#574fd6] transition z-10"
                         aria-label="Next Testimonials"
                     >
                         &#8594;
                     </button>

                    {/* Testimonials container with AnimatePresence */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex} // Key change triggers animation
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="flex justify-center gap-6 w-full"
                            >
                                {visibleTestimonials.map((testimonial, index) => (
                                    <div
                                        key={index} // Use unique ID if available
                                        className="bg-[#f8f9ff] p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col" // Added flex flex-col
                                    >
                                        <p className="text-gray-700 italic text-sm mb-4 flex-grow">"{testimonial.feedback}"</p> {/* Adjusted text style */}
                                        <div className="flex items-center justify-start mt-auto pt-4 border-t border-gray-200"> {/* Added mt-auto, border */}
                                            <div className="bg-[#d6d8ff] text-[#6c63ff] font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0"> {/* Adjusted margin */}
                                                {testimonial.name.split(" ").map((n) => n[0]).join("")}
                                            </div>
                                            <div>
                                                <h3 className="text-md font-bold">{testimonial.name}</h3> {/* Adjusted size */}
                                                <p className="text-xs text-gray-500">{testimonial.role}</p> {/* Adjusted size */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Home;