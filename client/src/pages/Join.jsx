import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SideNavbar from '../components/SideNavbar';
import axios from 'axios';
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
      staggerChildren: 0.075
    }
  }
};

const staggerSlow = {
  visible: {
    transition: {
      staggerChildren: 0.125
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
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
  transition: { duration: 0.2 }
};

// --- End Animation Variants ---

const formatSalary = (salary) => {
  return salary?.replace("₹", "<i class='fas fa-rupee-sign mr-1'></i>");
};

const Jobs = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
    salary: '',
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalJobs, setTotalJobs] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

useEffect(() => {
  setLoading(true);
  const fetchjobs = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8001/api/jobs?page=${pageNumber}&limit=${limit}`);
      console.log(response.data);
      setJobs(response.data.jobs);
      setTotalJobs(response.data.total);
      setSelectedJob(response.data.jobs.slice(0,10));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchJobRecommendations = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8001/api/job-recommendations`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchjobs();
  fetchJobRecommendations();
},[]);

const handleNextPage = () => {
  if (pageNumber < totalJobs/10 && pageNumber * limit < totalJobs) {
    const pageNo = pageNumber + 1;  
    setPageNumber(pageNumber + 1);
    setSelectedJob(jobs.slice(pageNo * limit, (pageNo + 1) * limit));
  }
};
const handlePrevPage = () => {
  if (pageNumber > 1) {
    const pageNo = pageNumber - 1;
    setPageNumber(pageNumber - 1);
    setSelectedJob(jobs.slice(pageNo * limit, (pageNo + 1) * limit));
  }
};

  const featuredJobs = [
    { id: 1, title: "Senior Frontend Wizard", company: "PixelCraft Studios", logo: "/images/pixelcraft.png", location: "Remote", type: "Full-time", salary: "₹20L - ₹30L", posted: "2 days ago", color: "#a78bfa" },
    { id: 2, title: "Creative Marketing Sorcerer", company: "GrowthLeap Agency", logo: "/images/growthleap.png", location: "Bangalore", type: "Internship", salary: "₹30K - ₹40K", posted: "1 day ago", color: "#facc15" },
    { id: 3, title: "Data Alchemist", company: "InsightForge Labs", logo: "/images/insightforge.png", location: "Hybrid - Delhi", type: "Full-time", salary: "₹22L - ₹28L", posted: "3 days ago", color: "#6ee7b7" },
  ];

  const latestJobs = [
    { id: 4, title: "UX/UI Visionary", company: "DesignFlow Inc.", location: "Mumbai", salary: "₹12L - ₹18L", posted: "5 hours ago", tags: ['Design', 'Figma', 'Motion'], logo: "/images/designflow.png", color: "#f97316" },
    { id: 5, title: "Social Media Maestro", company: "ViralSpark", location: "Remote", salary: "₹20K - ₹35K", posted: "1 day ago", tags: ['Marketing', 'Social Media', 'Analytics'], logo: "/images/viralspark.png", color: "#3b82f6" },
    { id: 6, title: "Backend Ninja", company: "CodeNinjas HQ", location: "Bangalore", salary: "₹20L - ₹26L", posted: "2 days ago", tags: ['Node.js', 'GraphQL', 'AWS'], logo: "/images/codeninjas.png", color: "#eab308" },
    { id: 7, title: "Data Whisperer", company: "DataWise Analytics", location: "Delhi", salary: "₹25K - ₹35K", posted: "3 days ago", tags: ['Python', 'SQL', 'Machine Learning'], logo: "/images/datawise.png", color: "#8b5cf6" },
    { id: 8, title: "Product Evangelist", company: "InnovateSphere", location: "Hybrid - Pune", salary: "₹25L - ₹35L", posted: "1 week ago", tags: ['Product', 'Strategy', 'Leadership'], logo: "/images/innovatesphere.png", color: "#10b981" },
  ];

  const categories = [
    { icon: "fas fa-rocket", name: "Technology", jobs: 834, companies: 156, color: "#a78bfa" },
    { icon: "fas fa-briefcase", name: "Business", jobs: 623, companies: 98, color: "#facc15" },
    { icon: "fas fa-lightbulb", name: "Innovation", jobs: 547, companies: 89, color: "#3b82f6" },
    { icon: "fas fa-palette", name: "Design", jobs: 328, companies: 62, color: "#f97316" },
    { icon: "fas fa-heartbeat", name: "Healthcare", jobs: 389, companies: 72, color: "#6ee7b7" },
    { icon: "fas fa-flask", name: "Science", jobs: 276, companies: 48, color: "#eab308" },
    { icon: "fas fa-graduation-cap", name: "Education", jobs: 412, companies: 73, color: "#8b5cf6" },
    { icon: "fas fa-globe", name: "All Sectors", jobs: 3500, companies: 598, color: "#10b981" },
  ];

  // Apply filters to the latestJobs
  const filteredJobs = latestJobs.filter(job => {
    return (
      (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.jobType || job.type === filters.jobType) &&
      (!filters.experience || job.experience === filters.experience) &&
      (!filters.salary || job.salary === filters.salary)
    );
  });

  return (
    <div className="bg-[#f4f6f8] min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-blue-50 shrink-0"> {/* Added shrink-0 to prevent shrinking */}
          <SideNavbar />
        </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 flex lg:flex-row gap-8">
        {/* Job Listings and Main Content */}
        <div className="flex-grow">
          {/* Hero Section */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 rounded-lg shadow-md mb-8"
          >
            <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12">
              <motion.h1
                variants={fadeInUp}
                className="text-3xl font-extrabold text-indigo-700 mb-4"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}
              >
                Discover Your Ideal Job
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 mb-8"
                style={{ maxWidth: '700px', margin: '0 auto' }}
              >
                Explore a wide range of job opportunities and internships tailored to your skills and career aspirations.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <input
                  type="text"
                  placeholder="Search job title, keywords..."
                  className="flex-grow basis-full md:basis-2/5 border border-gray-300 rounded-md px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Location (e.g., Remote, Bangalore)"
                  className="flex-grow basis-full md:basis-2/5 border border-gray-300 rounded-md px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition shadow-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-grow md:basis-auto bg-indigo-600 text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition shadow-md"
                >
                  <i className="fas fa-search mr-2"></i> Find Jobs
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
           {/* Latest Opportunities Section */}
           <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Latest Opportunities</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Location</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Salary</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Posted</th>
                    <th scope="col" className="relative px-6 py-3"><span className="sr-only">Apply</span></th>
                  </tr>
                </thead>
                <motion.tbody
                  className="bg-white divide-y divide-gray-200"
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  {selectedJob && selectedJob.map((job,ind) => (
                    <motion.tr key={ind} variants={fadeInUp} whileHover={{ backgroundColor: "#f9fafb" }}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full flex-shrink-0 mr-3 flex items-center justify-center text-sm font-semibold text-white" style={{ backgroundColor: job.color }}>
                            {job.logo ? <img src={job.logo} alt={job.company} className="w-full h-full object-contain rounded-full" /> : job.company.substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{job.title}</div>
                            <div className="text-sm text-gray-500">{job.company}</div>
                            {job.tags && (
                              <div className="mt-2 flex flex-wrap gap-1">
                                {job.tags.map(tag => (
                                  <span key={tag} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                        <i className="fas fa-map-marker-alt mr-1.5 text-gray-400"></i>{job.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell"><span dangerouslySetInnerHTML={{ __html: formatSalary(job.salary) }} /></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell"><i className="far fa-calendar-alt mr-1"></i> {job.posted}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-indigo-600 text-white px-3 py-2 rounded-md text-xs font-semibold hover:bg-indigo-700 transition shadow-sm"
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
                <div className="flex-1 flex justify-between sm:hidden">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Previous</button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{pageNumber}</span> to <span className="font-medium">{totalJobs/10}</span> of <span className="font-medium">{totalJobs}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button onClick={() => handlePrevPage()} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50" >Prev</button>
                      <button aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">{pageNumber}</button>
                      <button onClick={() => handleNextPage()} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50">Next</button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Opportunities Section */}
          <h2 className="text-xl font-bold text-gray-800 mb-6">Featured Opportunities</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            variants={staggerSlow}
            initial="hidden"
            animate="visible"
          >
            {featuredJobs.map(job => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:border-indigo-500 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white flex-shrink-0" style={{ backgroundColor: job.color }}>
                    {job.logo ? <img src={job.logo} alt={job.company} className="w-full h-full object-contain rounded-full" /> : job.company.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="ml-4 overflow-hidden">
                    <h3 className="text-md font-semibold text-gray-900 truncate" title={job.title}>{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                </div>
                <ul className="text-xs text-gray-600 space-y-2 mb-4">
                  <li><i className="fas fa-map-marker-alt mr-2 text-gray-400 w-3 text-center"></i>{job.location}</li>
                  <li><i className="fas fa-briefcase mr-2 text-gray-400 w-3 text-center"></i>{job.type}</li>
                  <li><span dangerouslySetInnerHTML={{ __html: formatSalary(job.salary) }} /></li>
                </ul>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span><i className="far fa-clock mr-1"></i> {job.posted}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/apply-form")}
                    className="bg-indigo-600 text-white px-3 py-2 rounded-md text-xs font-semibold hover:bg-indigo-700 transition shadow-sm"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

    

          {/* Global Opportunities Section */}
          <motion.section
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-24 mt-16 text-center rounded-lg shadow-xl overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <h2 className="text-3xl font-extrabold mb-6">Explore Global Career Horizons</h2>
              <p className="mt-3 text-lg opacity-90">
                Discover exciting opportunities and expand your career across borders.
              </p>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8"
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-4xl font-bold">800,000+</h3>
                  <p className="text-md opacity-80">Global Job Listings</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-4xl font-bold">150+</h3>
                  <p className="text-md opacity-80">Countries & Regions</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-4xl font-bold">30+</h3>
                  <p className="text-md opacity-80">Diverse Industries</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Explore Opportunities by Category Section */}
          <motion.section
            className="mt-16"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-800 text-center mb-8">Explore Jobs by Category</motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerSlow}
            >
              {categories.map(category => (
                <motion.div
                  key={category.name}
                  variants={fadeInUp}
                  whileHover={cardHover}
                  className="bg-white p-6 rounded-lg shadow border border-gray-200 text-center cursor-pointer hover:border-indigo-500 transition-colors"
                >
                  <div className={`text-3xl mb-4 text-${category.color}-500`}>
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{category.jobs.toLocaleString()} Openings</p>
                  <p className="text-xs text-gray-400">{category.companies} Companies Hiring</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition shadow-md"
              >
                Browse All Categories
              </motion.button>
            </motion.div>
          </motion.section>
        </div>

        {/* Filters Sidebar (Right Side) */}
        {/* Experience Level */}
        <div className='bg-white h-260'>
          <motion.aside
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className=" w-80 flex-shrink-0 h-screen sticky top-0 p-6 "
          >
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Refine Your Search</h2>
            {/* Experience Level */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Experience Level</h3>
              <ul className="space-y-3">
                {['Entry Level', 'Internship', 'Associate', 'Mid-Senior', 'Director', 'Executive'].map(
                  (level, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2 cursor-pointer group hover:text-indigo-600 transition duration-200">
                        <input
                          type="checkbox"
                          className="form-checkbox text-indigo-600 rounded focus:ring-indigo-600 transition-all duration-200"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-indigo-600 transition">{level}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Job Type */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Job Type</h3>
              <ul className="space-y-3">
                {['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship', 'Remote'].map(
                  (type, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2 cursor-pointer group hover:text-indigo-600 transition duration-200">
                        <input
                          type="checkbox"
                          className="form-checkbox text-indigo-600 rounded focus:ring-indigo-600 transition-all duration-200"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-indigo-600 transition">{type}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Salary Range */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Salary Range</h3>
              <div className="mt-4 relative">
                <input
                  type="range"
                  min="0"
                  max="100000" // Example Max Value
                  step="5000" // Example Step
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-thumb-purple"
                />
                {/* Add state to display selected range */}
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹0</span>
                  <span>₹100k+</span>
                </div>
              </div>
            </div>
            {/* Industry */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Industry</h3>
              <ul className="space-y-3">
                {['Technology', 'Healthcare', 'Finance', 'Education', 'Marketing', 'Manufacturing'].map(
                  (industry, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2 cursor-pointer group hover:text-indigo-600 transition duration-200">
                        <input
                          type="checkbox"
                          className="form-checkbox text-indigo-600 rounded focus:ring-indigo-600 transition-all duration-200"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-indigo-600 transition">{industry}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Apply Filters Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-3 rounded-md flex items-center justify-center hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
            >
              <i className="fas fa-filter mr-2"></i> Apply Filters
            </motion.button>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default Jobs;