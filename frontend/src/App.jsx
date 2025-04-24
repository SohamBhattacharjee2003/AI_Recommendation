import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Resources from "./pages/Resources"; // Correct Import
import Form from "./pages/Form";


function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <div className="relative">
        {/* Profile Logo */}
        {user && (
          <div className="absolute top-4 right-4">
            <Link to="/account">
              <div
                className="w-10 h-10 rounded-full border border-gray-300 hover:shadow-lg flex items-center justify-center text-xl font-bold"
                style={{ backgroundColor: "#6c63ff", color: "white" }}
              >
                {user.name ? user.name[0] : "?"}
              </div>
            </Link>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resources" element={<Resources />} /> {/* Correct Route */}
          <Route path="/form" element={<Form />} /> {/* New Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;