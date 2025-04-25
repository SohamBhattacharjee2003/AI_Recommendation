import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; // Import motion

// --- Animation Variants (Reusing/Adapting from previous examples) ---
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 }, // Slightly more y offset
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15 // Stagger speed for cards
    }
  }
};

const cardHover = {
  scale: 1.04, // Slightly increased scale
  boxShadow: "0px 12px 24px rgba(108, 99, 255, 0.15)", // Themed shadow on hover
  borderColor: "#6c63ff",
  transition: { duration: 0.25 }
};

const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
};

const buttonTap = {
    scale: 0.95
};

// --- End Animation Variants ---

// Mock data for resource cards
const resourcesData = [
    { id: 1, title: "Ultimate Resume Guide", description: "Learn how to craft a resume that stands out to recruiters.", image: "/images/resume-guide.jpeg", category: "Career Development", type: "download" },
    { id: 2, title: "Interview Success Strategies", description: "Master the art of interviewing with confidence.", image: "/images/Interview-Strategies.jpeg", category: "Interview Prep", type: "view" },
    { id: 3, title: "LinkedIn Profile Optimization", description: "Get noticed by recruiters with an optimized profile.", image: "/images/Linkedin-Profile-Optimization.jpeg", category: "Job Search", type: "download" },
    { id: 4, title: "Networking in the Digital Age", description: "Strategies for building professional relationships online.", image: "/images/Networking.jpeg", category: "Career Development", type: "download" },
    { id: 5, title: "Salary Negotiation Tactics", description: "Learn how to confidently negotiate your compensation.", image: "/images/Salary.jpeg", category: "Career Development", type: "download" },
    { id: 6, title: "Technical Interview Preparation", description: "Prepare for coding challenges and technical questions.", image: "/images/Technical.jpeg", category: "Interview Prep", type: "view" },
];


function Resources() {
  const [searchInput, setSearchInput] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('All Resources'); // Not used in current structure

  const handleSearchChange = (e) => setSearchInput(e.target.value);
  // const handleCategoryChange = (category) => setSelectedCategory(category); // Placeholder

  // Filter resources based on search input (simple example)
  const filteredResources = resourcesData.filter(resource =>
    resource.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchInput.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Separate featured (e.g., first 3) from all (or apply filtering logic)
  const featuredResources = filteredResources.slice(0, 3);
  const allResources = filteredResources; // Display all filtered results here


  return (
    <div className="bg-[#f9fafb] min-h-screen">
      {/* Header - Fade In */}
      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-white border-b border-gray-200 sticky top-0 z-30"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
          <Link className="flex items-center space-x-2" to="/">
            <i className="fas fa-graduation-cap text-[#6c63ff] text-lg"></i>
            <span className="font-extrabold text-black text-lg select-none">
              CareerCompass
            </span>
          </Link>
          <ul className="hidden md:flex items-center space-x-8 text-gray-500 text-sm font-medium select-none">
             {/* Update links and add active state based on actual routing */}
            <li><Link to="/" className="hover:text-[#6c63ff] transition-colors duration-200">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-[#6c63ff] transition-colors duration-200">Dashboard</Link></li>
            <li><Link to="/jobs" className="hover:text-[#6c63ff] transition-colors duration-200">Jobs</Link></li>
             {/* Assuming Learning links to Resources for now */}
            <li><Link to="/resources" className="text-[#6c63ff] font-semibold cursor-default">Resources</Link></li>
             {/* Add other links as needed */}
          </ul>
          <div className="flex items-center space-x-4">
              {/* Add conditional rendering based on login state */}
            <motion.button
                whileHover={buttonHover} whileTap={buttonTap}
                className="text-black text-sm font-semibold px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Log in
            </motion.button>
            <motion.button
                whileHover={buttonHover} whileTap={buttonTap}
                className="bg-[#6c63ff] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#574fd6] transition-colors"
            >
              Sign up
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
         {/* Title Section - Fade In Up */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold text-black mb-4">Career Resources</motion.h1> {/* Larger Title */}
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-10"> {/* Increased margin */}
              Expert guides, templates, and tools to help you succeed
            </motion.p>
        </motion.div>

         {/* Top Section: Search & Checklist */}
        <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" // Added margin bottom
            variants={stagger} initial="hidden" animate="visible"
        >
           {/* Search Resources Card */}
           <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md"> {/* Slightly softer shadow */}
             <h2 className="text-xl font-bold text-black mb-4">Search Resources</h2>
             <p className="text-gray-600 text-sm mb-5"> {/* Increased margin */}
               Find guides, templates, and videos to help with your career journey
             </p>
             <input
               type="text"
               placeholder="Search for resume templates, interview guides, etc."
               value={searchInput}
               onChange={handleSearchChange}
               className="w-full px-4 py-2.5 border border-gray-300 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:border-[#6c63ff] transition" // Adjusted padding
             />
             {/* Search Resources Buttons */}
             <div className="flex flex-wrap gap-2">
                {['Resume', 'Interview', 'Cover Letter', 'Networking', 'Job Search'].map(tag => (
                   <motion.button
                     key={tag}
                     whileHover={{ scale: 1.05, backgroundColor: "#e0dfff", color: "#6c63ff" }}
                     whileTap={{ scale: 0.98 }}
                     onClick={() => setSearchInput(tag)} // Basic search on click
                     className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm w-full sm:w-auto transition-colors" // Adjusted padding
                   >
                     {tag}
                   </motion.button>
                ))}
             </div>
           </motion.div>

           {/* Career Preparation Checklist Card */}
           <motion.div variants={fadeInUp} className="bg-[#eef0ff] p-6 rounded-lg shadow-md">
             <h2 className="text-xl font-bold text-black mb-4">Prep Checklist</h2> {/* Shortened Title */}
             <ul className="space-y-3 text-sm text-gray-700"> {/* Increased spacing */}
                {/* Add state management for checkboxes in a real app */}
               <li>
                  <label className='flex items-center cursor-pointer group'>
                      <input type="checkbox" defaultChecked className="mr-2 form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                      <span className="line-through opacity-70 group-hover:opacity-100 transition">LinkedIn Profile</span>
                  </label>
               </li>
               <li>
                 <label className='flex items-center cursor-pointer group'>
                     <input type="checkbox" className="mr-2 form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                     <span className="group-hover:text-black transition">Update Resume</span>
                 </label>
               </li>
               <li>
                  <label className='flex items-center cursor-pointer group'>
                      <input type="checkbox" className="mr-2 form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                      <span className="group-hover:text-black transition">Research Companies</span>
                  </label>
               </li>
               <li>
                   <label className='flex items-center cursor-pointer group'>
                       <input type="checkbox" className="mr-2 form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                       <span className="group-hover:text-black transition">Elevator Pitch</span>
                   </label>
               </li>
               <li>
                   <label className='flex items-center cursor-pointer group'>
                       <input type="checkbox" className="mr-2 form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                       <span className="group-hover:text-black transition">Practice Interviews</span>
                   </label>
               </li>
               <li>
                   <label className='flex items-center cursor-pointer group'>
                       <input type="checkbox" defaultChecked className="mr-2 form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                       <span className="line-through opacity-70 group-hover:opacity-100 transition">Job Alerts</span>
                   </label>
               </li>
             </ul>
             <motion.a
                 href="#"
                 whileHover={{ x: 5 }} // Subtle move right on hover
                 className="text-sm font-semibold text-[#6c63ff] hover:underline mt-5 inline-block"
             >
               View full checklist →
             </motion.a>
           </motion.div>
        </motion.div>

        {/* Featured Resources - Animate on Scroll */}
         <motion.section
             className="mt-16" // Increased margin
             variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
         >
           <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-black mb-6">Featured Resources</motion.h2> {/* Increased margin */}
           <motion.div
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" // Increased gap
               variants={stagger} // Stagger the cards within
           >
             {featuredResources.map(resource => (
               <motion.div
                 key={resource.id + "-featured"}
                 variants={fadeInUp}
                 whileHover={cardHover}
                 className="bg-white rounded-lg shadow-md overflow-hidden border border-transparent transition-all duration-250" // Added border
               >
                 <img
                   src={resource.image}
                   alt={resource.title}
                   className="w-full h-48 object-cover"
                 />
                 <div className="p-6">
                    <span className="text-xs font-semibold text-gray-500 mb-2 inline-block tracking-wide uppercase">{resource.category}</span>
                    <h3 className="text-lg font-bold text-black mb-2 leading-snug">{resource.title}</h3> {/* Adjusted line height */}
                    <p className="text-sm text-gray-600 mb-5 h-10 overflow-hidden"> {/* Set fixed height */}
                         {resource.description}
                     </p>
                     <motion.button
                         whileHover={buttonHover} whileTap={buttonTap}
                         className="bg-[#6c63ff] text-white px-5 py-2 rounded-md text-sm font-medium flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6] transition-colors" // Adjusted padding
                      >
                       {resource.type === 'download' ? (
                         <><i className="fas fa-download mr-2"></i> Download</>
                       ) : (
                         <><i className="fas fa-external-link-alt mr-2"></i> View</> // Shortened text
                       )}
                     </motion.button>
                 </div>
               </motion.div>
             ))}
           </motion.div>
         </motion.section>

         {/* All Resources - Animate on Scroll */}
          <motion.section
              className="mt-16"
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-black mb-6">All Resources</motion.h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={stagger}
            >
             {/* Display all filtered resources, or implement pagination */}
             {allResources.length > 0 ? (
                 allResources.map(resource => (
                     <motion.div
                         key={resource.id + "-all"}
                         variants={fadeInUp}
                         whileHover={cardHover}
                         className="bg-white rounded-lg shadow-md overflow-hidden border border-transparent transition-all duration-250"
                     >
                         <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
                         <div className="p-6">
                             <span className="text-xs font-semibold text-gray-500 mb-2 inline-block tracking-wide uppercase">{resource.category}</span>
                             <h3 className="text-lg font-bold text-black mb-2 leading-snug">{resource.title}</h3>
                             <p className="text-sm text-gray-600 mb-5 h-10 overflow-hidden">{resource.description}</p>
                             <motion.button
                                 whileHover={buttonHover} whileTap={buttonTap}
                                 className="bg-[#6c63ff] text-white px-5 py-2 rounded-md text-sm font-medium flex items-center justify-center w-full sm:w-auto hover:bg-[#574fd6] transition-colors"
                             >
                                 {resource.type === 'download' ? (<><i className="fas fa-download mr-2"></i> Download</>) : (<><i className="fas fa-external-link-alt mr-2"></i> View</>)}
                             </motion.button>
                         </div>
                     </motion.div>
                 ))
             ) : (
                 <motion.p variants={fadeInUp} className="text-gray-500 sm:col-span-2 lg:col-span-3 text-center py-8">
                     No resources found matching your search criteria.
                 </motion.p>
             )}
            </motion.div>
            {/* Add Pagination if needed */}
          </motion.section>

         {/* Unlock Premium Resources - Animate on Scroll */}
          <motion.section
              className="mt-20 bg-gradient-to-r from-[#6c63ff] to-[#574fd6] text-white rounded-lg p-12 text-center shadow-xl" // Adjusted gradient, added shadow
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Unlock Premium Resources</h2> {/* Larger Title */}
            <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto"> {/* Increased margin, max-width */}
              Get access to our full library of premium resources, templates, and tools with a Pro account.
            </p>
            <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#6c63ff" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#6c63ff] font-semibold px-8 py-3 rounded-md w-full sm:w-auto transition-colors duration-300" // Adjusted padding
            >
              Upgrade to Pro
            </motion.button>
          </motion.section>

      </main>

       {/* Footer - Animate on Scroll */}
       <motion.footer
           className="bg-white py-12 mt-20 border-t" // Increased margin
           variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
       >
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Footer content (same as before) */}
              <div>
                  <h3 className="text-lg font-bold text-black">CareerCompass</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Your AI-powered career companion for global opportunities.
                  </p>
              </div>
              <div>
                  <h3 className="text-lg font-bold text-black">Platform</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                      <li><a href="/jobs" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Jobs & Internships</a></li>
                      <li><a href="/learning" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Learning Hub</a></li>
                      <li><a href="/global-map" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Global Opportunities</a></li>
                      <li><a href="/resources" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Career Resources</a></li>
                  </ul>
              </div>
              <div>
                  <h3 className="text-lg font-bold text-black">Company</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                      <li><a href="/about" className="text-gray-600 hover:text-[#6c63ff] transition-colors">About Us</a></li>
                      <li><a href="/contact" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Contact</a></li>
                      <li><a href="/privacy" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Privacy Policy</a></li>
                      <li><a href="/terms" className="text-gray-600 hover:text-[#6c63ff] transition-colors">Terms of Service</a></li>
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
         <div className="mt-10 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
           © {new Date().getFullYear()} CareerCompass. All rights reserved. {/* Dynamic Year */}
         </div>
       </motion.footer>
    </div>
  );
}

export default Resources;