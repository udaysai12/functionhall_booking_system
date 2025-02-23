import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const dump = () => (
  <div className="hidden lg:block font-bold border bg-gray-200 w-64 p-4">
    <h3 className="text-lg font-jost font-bold mb-4">UDAY SAI</h3>
    <Link
      to="/"
      className="block mb-10 mt-10 font-jost text-center text-gray-800 hover:text-red-500 hover:bg-gray-300 transition duration-300 ease-in-out p-3 rounded"
    >
      <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
      Dashboard
    </Link>
  </div>
);

export default dump;
