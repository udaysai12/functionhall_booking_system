// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as XLSX from 'xlsx';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Email validation function
//   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   // Fetch Excel Data Function
//   const fetchExcelData = async () => {
//     const excelUrl =
//       'https://docs.google.com/spreadsheets/d/1C11P7YQFUoyYaNQdE5zR6mtUygDuSs8YD4LhN_WJz94/export?format=xlsx';

//     try {
//       setLoading(true);
//       const response = await fetch(excelUrl);
//       if (!response.ok) throw new Error('Failed to fetch the file.');

//       const arrayBuffer = await response.arrayBuffer();
//       const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });

//       const sheetName = workbook.SheetNames[0];
//       const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//       console.log('Fetched Excel Data:', data);
//       return data;
//     } catch (error) {
//       console.error('Error fetching Excel data:', error);
//       setError('Failed to load data. Try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Email validation
//     if (!validateEmail(email)) {
//       alert('Invalid email format.');
//       return;
//     }


//     const excelData = await fetchExcelData();

//     const data = {
//       Name: name,
//       Email: email,
//       Contact: contact,
//       Password: password,
//     };

//     console.log('User Data:', data);
//     console.log('Excel Data:', excelData);

//     alert('Signup successful!');
//     setName('');
//     setEmail('');
//     setContact('');
//     setPassword('');
//     navigate('/'); // Redirect to login page
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-400">
//       <div className="w-3/4 rounded overflow-hidden shadow-lg bg-white px-6 py-4 lg:px-4 lg:w-[30%]">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-500">
//             SIGN UP
//           </h2>
//         </div>

//         <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 required
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//               />
//             </div>

//             {/* Contact Field */}
//             <div>
//               <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
//                 Contact
//               </label>
//               <input
//                 id="contact"
//                 type="number"
//                 required
//                 onChange={(e) => setContact(e.target.value)}
//                 value={contact}
//                 className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline focus:ring-2 focus:ring-indigo-600"
//                 disabled={loading}
//               >
//                 {loading ? 'Signing Up...' : 'Sign up'}
//               </button>
//             </div>
//           </form>

//           <p className="mt-5 text-center text-sm text-gray-500">
//             Already have an account?{' '}
//             <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
//               Sign in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Added showPassword state
  const [error, setError] = useState(''); // Added error state for form validation
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError('');

    // Email validation
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!name || !contact || !password) {
      setError('All fields are required.');
      return;
    }

    const data = {
      Name: name,
      Email: email,
      Contact: contact,
      Password: password,
    };

    try {
      const response = await axios.post(
        'https://sheetdb.io/api/v1/0doayyo1lsil9', 
        data
      );
      console.log(data);
      if (response.status === 201 || response.status === 200) {
        alert('Signup successful!');
        // Clear the form fields
        setName('');
        setEmail('');
        setContact('');
        setPassword('');
        navigate('/'); // Redirect to login page
      }
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
      alert('Failed to submit. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <div className="w-3/4 rounded overflow-hidden shadow-lg bg-white px-6 py-4 lg:px-4 lg:w-[30%]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-500">
            SIGN UP
          </h2>
        </div>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>} {/* Error message */}

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            {/* Contact Field */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                Contact
              </label>
              <input
                id="contact"
                name="contact"
                type="number"
                required
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full mb-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
