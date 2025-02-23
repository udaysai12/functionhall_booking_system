import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSignOutAlt, faTachometerAlt, faBuilding, faDumbbell, faSpa, faUser } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './pages/Dashboard';
import FunctionHalls from './pages/FunctionHalls';
import Login from './components/Login/Login';
import Signup from "./components/Signup/Signup";
import SportsFacilities from './pages/SportsFacilities';
import WellnessServices from './pages/WellnessServices';
import Profile from './pages/Profile';
import Details from './pages/Details'; 
import HallCard from './components/HallCard';
import Navbar from './components/Navbar';
import './index.css';
import Logout from './pages/Logout';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative`}
  >
    {/* Overlay */}
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={toggleSidebar}
    ></div>

    {/* Sidebar */}
    <div className="bg-gray-200 w-64 p-4 font-bold shadow-lg h-screen relative z-10">
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-gray-600 text-2xl lg:hidden"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h3 className="text-lg font-jost font-bold mb-4">UDAY SAI</h3>
      <Link
        to="/Dashboard"
        className="flex items-center mb-6 font-jost text-gray-800 hover:text-red-500 hover:bg-gray-300 transition duration-300 ease-in-out p-3 rounded"
      >
        <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
        Dashboard
      </Link>
      <Link
        to="/function-halls"
        className="flex items-center mb-6 font-jost text-gray-800 hover:text-red-500 hover:bg-gray-300 transition duration-300 ease-in-out p-3 rounded"
      >
        <FontAwesomeIcon icon={faBuilding} className="mr-2" />
        Function Halls
      </Link>
      <Link
        to="/sports-facilities"
        className="flex items-center mb-6 font-jost text-gray-800 hover:text-red-500 hover:bg-gray-300 transition duration-300 ease-in-out p-3 rounded"
      >
        <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
        Sports Facilities
      </Link>
      <Link
        to="/wellness-services"
        className="flex items-center mb-6 font-jost text-gray-800 hover:text-red-500 hover:bg-gray-300 transition duration-300 ease-in-out p-3 rounded"
      >
        <FontAwesomeIcon icon={faSpa} className="mr-2" />
        Wellness Services
      </Link>
      <Link
        to="/profile"
        className="flex items-center mb-6 font-jost text-gray-800 hover:text-red-500 hover:bg-gray-300 transition duration-300 ease-in-out p-3 rounded"
      >
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        Profile
      </Link>
      <Link
        to="/logout"
        className="flex items-center font-jost text-gray-800 hover:text-red-500 hover:bg-gray-300 transition duration-300 ease-in-out p-3 rounded"
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Logout
      </Link>
    </div>
  </div>
);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === '/' || location.pathname === '/signup';

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Conditionally render Sidebar */}
      {!isAuthPage && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}

      <div className={`flex-1 flex flex-col ${isOpen ? 'lg:ml-64' : ''}`}>
        {!isAuthPage && ( // Conditionally render Navbar
          <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <button onClick={toggleSidebar} className="text-2xl lg:hidden">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            <h2 className="text-lg font-bold">Dashboard</h2>
            <div className="flex items-center">
              <Link to="/profile">
                <img
                  src="https://avatars.githubusercontent.com/u/116033543?s=400&u=c9703ce3867733025afed6466f2f452be43103ea&v"
                  alt="Profile"
                  className="w-10 h-10 rounded-full hover:opacity-75 transition duration-300"
                />
              </Link>
              <button className="ml-4 bg-transparent border-none px-4 py-2 rounded text-red-500 text-2xl flex items-center">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              </button>
            </div>
          </nav>
        )}

        <div className="overflow-y-auto flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/function-halls" element={<FunctionHalls />} />
            <Route path="/sports-facilities" element={<SportsFacilities />} />
            <Route path="/wellness-services" element={<WellnessServices />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<HallCard />} />
            <Route path="/details/:category/:id" element={<Details />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
