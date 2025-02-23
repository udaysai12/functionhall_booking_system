import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar, isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    navigate('/'); 
  };

  return (
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
        <button
          onClick={handleLogout}
          className="ml-4 bg-transparent border-none px-4 py-2 rounded text-red-500 text-2xl flex items-center"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
