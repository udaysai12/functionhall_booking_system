import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); 

  const fetchExcelData = async () => {
    const excelUrl =
      'https://docs.google.com/spreadsheets/d/1C11P7YQFUoyYaNQdE5zR6mtUygDuSs8YD4LhN_WJz94/export?format=xlsx';

    try {
      const response = await fetch(excelUrl);
      if (!response.ok) throw new Error('Failed to fetch the file.');

      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const userData = data.map((row) => ({
        Name: row['Name']?.trim() || '',
        Email: row['Email']?.trim() || '',
        Contact: typeof row['Contact'] === 'string' ? row['Contact'].trim() : String(row['Contact'] || ''),
        Password: row['Password'] ? String(row['Password']).trim() : '',
      }));

      setExcelData(userData);
      setIsLoading(false); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExcelData();

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/');
      return;
    }
    setUserData(user);
  }, [navigate]);

  if (isLoading || !userData || !excelData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 animate-fade-in">
        <div className="text-3xl font-bold text-indigo-600 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  const matchedUser = excelData.find((row) => row.Email === userData.email);

  return (
    <div className="bg-white items-center justify-center w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] animate-fade-in">
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg transition-all duration-500 ease-in-out">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl animate-fade-down animate-fade-up">
              {matchedUser?.Name}'s Profile
            </h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 transition-transform duration-300 hover:scale-105"
                  src={userData?.profilePicture || "https://avatars.githubusercontent.com/u/116033543?s=400"}
                  alt="User Profile"
                />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    Change picture
                  </button>
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-900 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    Delete picture
                  </button>
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-y-2 sm:flex-row sm:space-x-4 sm:mb-6">
                  <div className="w-full animate-fade-up">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition-shadow duration-300 focus:shadow-lg"
                      placeholder="Your first name"
                      defaultValue={matchedUser?.Name || "First Name"}
                    />
                  </div>

                  <div className="w-full animate-fade-up">
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900">
                      Password
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition-shadow duration-300 focus:shadow-lg"
                      placeholder="Your password"
                      defaultValue={matchedUser?.Password || "password"}
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6 animate-fade-up">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition-shadow duration-300 focus:shadow-lg"
                    defaultValue={matchedUser?.Email || "dump@gmail.com"}
                    required
                  />
                </div>
                <div className="mb-2 sm:mb-6 animate-fade-up">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900">
                    Your Contact
                  </label>
                  <input
                    type="number"
                    id="Contact"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition-shadow duration-300 focus:shadow-lg"
                    defaultValue={matchedUser?.Contact || "* * * * * "}
                    required
                  />
                </div>

                <div className="flex justify-end animate-fade-up">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 transition-all duration-300 hover:scale-105"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
