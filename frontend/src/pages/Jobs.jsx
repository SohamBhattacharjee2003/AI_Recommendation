import React from 'react'; // Removed useState as it wasn't used
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1 // Faster stagger for lists
    }
  }
};

const staggerSlow = {
    visible: {
      transition: {
        staggerChildren: 0.15 // Slightly slower for cards maybe
      }
    }
  };


const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardHover = {
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Enhanced shadow on hover
    transition: { duration: 0.2 }
};

// --- End Animation Variants ---


function Jobs() {
  const navigate = useNavigate();

  // Mock data for map functions - replace with actual data fetching
  const featuredJobs = [
    { id: 1, title: "Senior Frontend Developer", company: "TechSolutions Inc.", logo: "TS", location: "Remote", type: "Full-time", salary: "₹15L - ₹25L", posted: "2 days ago" },
    { id: 2, title: "Product Marketing Intern", company: "GrowthUP", logo: "GU", location: "Bangalore", type: "Internship", salary: "₹25K - ₹30K", posted: "1 day ago" },
    { id: 3, title: "Data Scientist", company: "AnalyticsPro", logo: "AP", location: "Hybrid - Delhi", type: "Full-time", salary: "₹18L - ₹22L", posted: "3 days ago" },
  ];

  const latestJobs = [
    { id: 4, title: "UX/UI Designer", company: "DesignHub", location: "Mumbai", salary: "₹10L - ₹15L", posted: "5 hours ago", tags: ['Design', 'Figma', 'Adobe XD'] },
    { id: 5, title: "Marketing Intern", company: "GrowthAgency", location: "Remote", salary: "₹15K - ₹25K", posted: "1 day ago", tags: ['Marketing', 'Social Media', 'Content'] },
    { id: 6, title: "Backend Developer", company: "CodeCraft", location: "Bangalore", salary: "₹18L - ₹24L", posted: "2 days ago", tags: ['Node.js', 'MongoDB', 'Express'] },
    { id: 7, title: "Data Analytics Intern", company: "DataWiz", location: "Delhi", salary: "₹20K - ₹30K", posted: "3 days ago", tags: ['Python', 'SQL', 'Tableau'] },
    { id: 8, title: "Product Manager", company: "InnovateTech", location: "Hybrid - Pune", salary: "₹20L - ₹30L", posted: "1 week ago", tags: ['Product', 'Agile', 'Leadership'] },
  ];

  const categories = [
      { icon: "fas fa-code", name: "Technology", jobs: 834, companies: 156 },
      { icon: "fas fa-chart-line", name: "Business", jobs: 623, companies: 98 },
      { icon: "fas fa-graduation-cap", name: "Education", jobs: 412, companies: 73 },
      { icon: "fas fa-bullhorn", name: "Marketing", jobs: 547, companies: 89 },
      { icon: "fas fa-paint-brush", name: "Design", jobs: 328, companies: 62 },
      { icon: "fas fa-flask", name: "Science", jobs: 276, companies: 48 },
      { icon: "fas fa-heartbeat", name: "Healthcare", jobs: 389, companies: 72 },
      { icon: "fas fa-briefcase", name: "All Categories", jobs: 3500, companies: 598 },
  ];

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      {/* Header - Fade In */}
      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-white border-b border-gray-200 sticky top-0 z-30" // Added z-index
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
          <Link className="flex items-center space-x-2" to="/"> {/* Use 'to' for Link */}
            <i className="fas fa-graduation-cap text-[#6c63ff] text-lg"></i>
            <span className="font-extrabold text-black text-lg select-none">
              CareerCompass
            </span>
          </Link>
          <ul className="hidden md:flex items-center space-x-8 text-gray-500 text-sm font-medium select-none">
             {/* Added transitions for smoother hover */}
            <li><Link to="/" className="hover:text-[#6c63ff] transition-colors duration-200">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-[#6c63ff] transition-colors duration-200">Dashboard</Link></li>
            <li><Link to="/jobs" className="text-[#6c63ff] font-semibold cursor-default">Jobs</Link></li> {/* Indicate current page */}
            <li><Link to="/account" className="hover:text-[#6c63ff] transition-colors duration-200">Account</Link></li>
          </ul>
           {/* Add User Menu/Logout if logged in */}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Title and Search Bar - Fade In Up */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.h1 variants={fadeInUp} className="text-3xl font-extrabold text-black mb-4">Find Your Perfect Job</motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8">
            Discover opportunities tailored to your skills and preferences
          </motion.p>

          {/* Search Flexbox */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center bg-white shadow rounded-lg p-4 mb-8 gap-4"> {/* Added flex-wrap & gap */}
            <input
              type="text"
              placeholder="Search job title, keywords..."
              className="flex-grow basis-full md:basis-2/5 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:border-[#6c63ff] transition" // Adjusted basis
            />
            <input
              type="text"
              placeholder="Location (e.g., Bangalore, Remote)"
              className="flex-grow basis-full md:basis-2/5 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:border-[#6c63ff] transition" // Adjusted basis
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-grow basis-full md:basis-auto bg-[#6c63ff] text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#574fd6] transition" // Changed color
            >
              Find Jobs
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Opportunities Navigation - Optional subtle fade-in */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }} // Delay slightly after search bar
           className="flex items-center space-x-4 mb-6"
         >
             {/* Add hover/active states */}
           <button className="bg-[#6c63ff] text-white px-4 py-2 rounded-md text-sm font-semibold">
             All Opportunities
           </button>
           <button className="text-gray-600 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition">
             Internships
           </button>
           <button className="text-gray-600 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition">
             Jobs
           </button>
         </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Filters Sidebar - Slide In Left */}
          <motion.aside
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="bg-white p-6 rounded-lg shadow w-full lg:w-[300px] lg:sticky lg:top-24" // Made sticky on larger screens
            style={{ height: 'fit-content' }} // Adjusted height
          >
            <h2 className="text-lg font-bold text-gray-800 mb-4">Filters</h2>

             {/* Filter sections can have subtle stagger if needed, but keeping it simple */}
            {/* Experience Level */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Experience Level</h3>
              <ul className="space-y-2">
                {['Entry Level', 'Internship', 'Associate', 'Mid-Senior', 'Director', 'Executive'].map(
                  (level, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2 cursor-pointer group">
                        <input type="checkbox" className="form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                        <span className="text-sm text-gray-600 group-hover:text-black transition">{level}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Job Type */}
            <div className="mb-6">
               <h3 className="text-sm font-semibold text-gray-800 mb-2">Job Type</h3>
               <ul className="space-y-2">
                 {['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship', 'Remote'].map(
                   (type, index) => (
                     <li key={index}>
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input type="checkbox" className="form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                         <span className="text-sm text-gray-600 group-hover:text-black transition">{type}</span>
                       </label>
                     </li>
                   )
                 )}
               </ul>
             </div>

            {/* Salary Range */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Salary Range</h3>
              <div className="mt-4">
                <input
                  type="range"
                  min="0"
                  max="100000" // Example Max Value
                  step="5000" // Example Step
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-purple" // Custom class for thumb potentially
                />
                 {/* Add state to display selected range */}
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹0</span>
                  <span>₹100k+</span>
                </div>
              </div>
            </div>

            {/* Industry */}
             <div className="mb-6">
               <h3 className="text-sm font-semibold text-gray-800 mb-2">Industry</h3>
               <ul className="space-y-2">
                 {['Technology', 'Healthcare', 'Finance', 'Education', 'Marketing', 'Manufacturing'].map(
                   (industry, index) => (
                     <li key={index}>
                       <label className="flex items-center space-x-2 cursor-pointer group">
                         <input type="checkbox" className="form-checkbox text-[#6c63ff] rounded focus:ring-[#6c63ff]" />
                         <span className="text-sm text-gray-600 group-hover:text-black transition">{industry}</span>
                       </label>
                     </li>
                   )
                 )}
               </ul>
             </div>

            {/* Apply Filters Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#6c63ff] text-white text-sm font-semibold px-4 py-2.5 rounded-md flex items-center justify-center hover:bg-[#574fd6] transition" // Adjusted padding
            >
              <i className="fas fa-filter mr-2"></i> Apply Filters
            </motion.button>
          </motion.aside>

          {/* Main Content Section (Job listings etc.) - Slide In Right */}
          <motion.section
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
             {/* Featured Opportunities Section */}
             <h2 className="text-xl font-bold text-black mb-4">Featured Opportunities</h2>
             {/* Stagger children for job cards */}
             <motion.div
                 className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                 variants={staggerSlow}
                 initial="hidden" // Initial for stagger container
                 animate="visible" // Animate when parent section is visible
              >
               {featuredJobs.map(job => (
                 <motion.div
                   key={job.id}
                   variants={fadeInUp} // Each card animates up
                   whileHover={cardHover}
                   className="bg-white p-5 rounded-lg shadow border hover:border-[#6c63ff] transition-colors duration-200" // Adjusted padding
                 >
                   <div className="flex items-center mb-4">
                     <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 flex-shrink-0">
                       {job.logo}
                     </div>
                     <div className="ml-4 overflow-hidden"> {/* Added overflow hidden */}
                       <h3 className="text-md font-semibold text-gray-800 truncate" title={job.title}>{job.title}</h3> {/* Added truncate & title */}
                       <p className="text-sm text-gray-600">{job.company}</p>
                     </div>
                   </div>
                   <ul className="text-xs text-gray-600 space-y-1.5 mb-4"> {/* Adjusted size/spacing */}
                     <li><i className="fas fa-map-marker-alt mr-2 text-gray-400 w-3 text-center"></i>{job.location}</li>
                     <li><i className="fas fa-briefcase mr-2 text-gray-400 w-3 text-center"></i>{job.type}</li>
                     <li><i className="fas fa-dollar-sign mr-2 text-gray-400 w-3 text-center"></i>{job.salary}</li>
                   </ul>
                   <div className="flex justify-between items-center text-xs text-gray-500"> {/* Adjusted size */}
                     <span>{job.posted}</span>
                     <motion.button
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         onClick={() => navigate("/apply-form")} // Example navigation
                         className="bg-[#6c63ff] text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-[#574fd6] transition" // Adjusted size
                      >
                       Apply Now
                     </motion.button>
                   </div>
                 </motion.div>
               ))}
             </motion.div>


            {/* Latest Opportunities Section */}
             <section className="mt-12">
               <h2 className="text-xl font-bold text-black mb-4">Latest Opportunities</h2>
               <div className="bg-white rounded-lg shadow overflow-hidden">
                 <table className="min-w-full divide-y divide-gray-200">
                   <thead className="bg-gray-50">
                     <tr>
                       {/* Table headers */}
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Location</th> {/* Hide on small screens */}
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Salary</th> {/* Hide on medium screens */}
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Posted</th> {/* Hide on small screens */}
                        <th scope="col" className="relative px-6 py-3"><span className="sr-only">Apply</span></th>
                     </tr>
                   </thead>
                   {/* Stagger table rows */}
                   <motion.tbody
                       className="bg-white divide-y divide-gray-200"
                       variants={stagger}
                       initial="hidden"
                       animate="visible" // Or use whileInView if table appears later
                    >
                     {latestJobs.map(job => (
                       <motion.tr key={job.id} variants={fadeInUp} whileHover={{ backgroundColor: "#f9fafb" }}> {/* Subtle row hover */}
                         <td className="px-6 py-4 whitespace-nowrap">
                           <div className="text-sm font-medium text-gray-900">{job.title}</div>
                           <div className="text-sm text-gray-500">{job.company}</div>
                           {job.tags && (
                               <div className="mt-2 flex flex-wrap gap-1">
                                   {job.tags.map(tag => (
                                       <span key={tag} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                                   ))}
                               </div>
                           )}
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                           <i className="fas fa-map-marker-alt mr-1.5 text-gray-400"></i>{job.location}
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">{job.salary}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{job.posted}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                           <motion.button
                               whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.95 }}
                               className="bg-[#6c63ff] text-white px-3 py-1.5 rounded-md text-xs hover:bg-[#574fd6] transition" // Changed color, adjusted size
                           >
                             Apply
                           </motion.button>
                         </td>
                       </motion.tr>
                     ))}
                   </motion.tbody>
                 </table>

                 {/* Pagination */}
                 <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t">
                   {/* ... Pagination elements ... (No complex animation needed here) */}
                    <div className="flex-1 flex justify-between sm:hidden">
                         <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Previous</button>
                         <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</button>
                     </div>
                     <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                         <div>
                             <p className="text-sm text-gray-700">
                                 Showing <span className="font-medium">1</span> to <span className="font-medium">{latestJobs.length}</span> of <span className="font-medium">{latestJobs.length}</span> results
                             </p>
                         </div>
                         <div>
                             <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                 <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
                                 {/* Pagination Numbers */}
                                 <button aria-current="page" className="z-10 bg-indigo-50 border-[#6c63ff] text-[#574fd6] relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</button>
                                 {/* <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</button> */}
                                 <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
                             </nav>
                         </div>
                     </div>
                 </div>
               </div>
             </section>

              {/* Global Opportunities Section - Animate on Scroll */}
             <motion.section
               className="bg-gradient-to-r from-[#6c63ff] to-[#574fd6] text-white py-12 my-12 text-center rounded-lg shadow-lg overflow-hidden" // Added margin, overflow
               variants={fadeInUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
             >
               <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                 <h2 className="text-3xl font-extrabold">Global Opportunities Await</h2>
                 <p className="mt-3 text-lg opacity-90"> {/* Adjusted margin/opacity */}
                   Explore jobs, internships, and projects across the globe!
                 </p>
                  {/* Can stagger the stats if desired */}
                 <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8"
                 >
                   <motion.div variants={fadeInUp}>
                     <h3 className="text-4xl font-bold">500,000+</h3>
                     <p className="text-md opacity-80">Jobs Worldwide</p> {/* Adjusted size */}
                   </motion.div>
                   <motion.div variants={fadeInUp}>
                     <h3 className="text-4xl font-bold">120+</h3>
                     <p className="text-md opacity-80">Countries</p>
                   </motion.div>
                   <motion.div variants={fadeInUp}>
                     <h3 className="text-4xl font-bold">27+</h3>
                     <p className="text-md opacity-80">Industries</p>
                   </motion.div>
                 </motion.div>
               </div>
             </motion.section>

             {/* Explore Opportunities by Category Section - Animate on Scroll */}
              <motion.section
                  className="mt-16" // Increased margin
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
              >
                  <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-black text-center mb-4">Explore Opportunities by Category</motion.h2>
                  <motion.p variants={fadeInUp} className="text-gray-600 text-center mb-10 max-w-xl mx-auto"> {/* Increased margin */}
                    Browse thousands of jobs and internships across popular industries.
                  </motion.p>
                  <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                      variants={staggerSlow} // Stagger the cards
                  >
                      {categories.map(category => (
                          <motion.div
                              key={category.name}
                              variants={fadeInUp}
                              whileHover={cardHover}
                              className="bg-white p-6 rounded-lg shadow border text-center cursor-pointer hover:border-[#6c63ff] transition-colors"
                          >
                              <div className="text-[#6c63ff] text-3xl mb-4">
                                  <i className={category.icon}></i>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                              <p className="text-sm text-gray-500 mt-1">{category.jobs.toLocaleString()} Jobs</p>
                              <p className="text-xs text-gray-400">{category.companies} companies</p>
                          </motion.div>
                      ))}
                  </motion.div>
                  <motion.div variants={fadeInUp} className="text-center mt-10"> {/* Increased margin */}
                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#6c63ff] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#574fd6] transition"
                      >
                          View All Opportunities
                      </motion.button>
                  </motion.div>
              </motion.section>
          </motion.section>
        </div>
      </main>

      {/* Footer - Simple Fade In on Scroll */}
      <motion.footer
        className="bg-white py-12 mt-16 border-t" // Added margin-top and border
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Footer content (same as before) */}
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
         <div className="mt-10 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
           © {new Date().getFullYear()} CareerCompass. All rights reserved.
         </div>
      </motion.footer>
    </div>
  );
}

export default Jobs;