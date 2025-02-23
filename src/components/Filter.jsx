import React from 'react';
import { FaUsers, FaMicrophone, FaSearch, FaCalculator } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { BsTranslate, BsBell } from 'react-icons/bs';

const Filter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 bg-white shadow-lg rounded-lg space-y-4 sm:space-y-0 sm:space-x-3 w-full">
      <div className="flex items-center border border-gray-300 rounded-lg p-2 space-x-2 w-full sm:w-auto">
       
        <input
          type="text"
          placeholder="Guest Capacity"
          className="outline-none flex-grow"
        />
         <FaUsers className="text-gray-500" />
      </div>
      
      <div className="flex items-center border border-gray-300 rounded-lg p-2 space-x-2 w-full sm:flex-1">
        <input
          type="text"
          placeholder="Budget or Place or Name  "
          className="outline-none flex-grow"
        />
        <button className="bg-orange-500 text-white p-1.5 rounded-md">
          <FaSearch />
        </button>
      </div>

      <div className="flex items-center border border-gray-300 rounded-lg p-2 space-x-2 w-full sm:w-auto">
        <input
          type="date"
          placeholder="Date"
          className="outline-none text-gray-500 placeholder-gray-300 w-full"
        />
      </div>

      <div className="flex items-center w-full sm:w-auto">
        <button className="bg-blue-500 text-white w-full sm:w-auto px-4 py-2 rounded-lg font-semibold">
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
