import React from 'react';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Jobs from './pages/Join';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Apply from './pages/Apply';
import Resource from './pages/Resource'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path='/dashboard' 
            element={
                <Dashboard />
            } 
          />
          <Route path="/apply/*" element={<Apply />} />
          <Route path="/resources" element={<Resource />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
