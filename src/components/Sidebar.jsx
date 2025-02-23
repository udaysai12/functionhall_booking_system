import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faSignOutAlt,
  faTachometerAlt,
  faBuilding,
  faDumbbell,
  faSpa,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar({ isOpen, toggleSidebar, handleLogout }) {
  return (
<div
    className={`transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-200 w-64 p-4 font-bold border shadow-lg z-50 fixed lg:relative lg:block h-full`}
  >
    <button
      onClick={toggleSidebar}
      className="lg:hidden absolute top-4 right-4 text-gray-600 text-2xl"
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
    <h3 className="text-lg font-jost font-bold mb-4">UDAY SAI</h3>
    <Link
      to="/dashboard"
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
  );
}

export default Sidebar;
