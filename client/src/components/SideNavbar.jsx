import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Book, 
  Users, 
  Settings, 
  MessageCircle,
  LogOut 
} from 'lucide-react';

const SideNavbar = () => {
  const location = useLocation();

  return (
    <nav className="h-full py-6 px-4">
      <div className="flex flex-col h-full">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-blue-600">CareerCompass AI</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 space-y-2">
          <NavItem icon={<Home size={20} />} label="Dashboard" to="/dashboard" isActive={location.pathname === '/dashboard'} />
          <NavItem icon={<Briefcase size={20} />} label="Jobs" to="/jobs" isActive={location.pathname === '/jobs'} />
          <NavItem icon={<Book size={20} />} label="Resources" to="/resources" isActive={location.pathname === '/resources'} />
          <NavItem icon={<Users size={20} />} label="Network" to="/network" isActive={location.pathname === '/network'} />
          <NavItem icon={<MessageCircle size={20} />} label="Messages" to="/messages" isActive={location.pathname === '/messages'} />
        </div>

        {/* Bottom Links */}
        <div className="space-y-2">
          <NavItem icon={<Settings size={20} />} label="Settings" to="/settings" isActive={location.pathname === '/settings'} />
          <NavItem icon={<LogOut size={20} />} label="Logout" to="/logout" isActive={location.pathname === '/logout'} />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, to, isActive }) => {
  return (
    <Link
      to={to}
      className={`group flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      {icon}
      <span className={`font-medium ${
        isActive 
          ? '' 
          : 'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 after:ease-out group-hover:after:origin-left group-hover:after:scale-x-100'
      }`}>{label}</span>
    </Link>
  );
};

export default SideNavbar;
