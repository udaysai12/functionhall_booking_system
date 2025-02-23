// import React, { useEffect, useState } from "react";
// import Card from "../components/Card";
// import { useNavigate } from 'react-router-dom';
// import * as XLSX from 'xlsx';

// function Dashboard() {
//   const [userData, setUserData] = useState(null);
//   const [excelData, setExcelData] = useState(null);
//   const navigate = useNavigate();

//   const fetchExcelData = async () => {
//     const excelUrl =
//       'https://docs.google.com/spreadsheets/d/1C11P7YQFUoyYaNQdE5zR6mtUygDuSs8YD4LhN_WJz94/export?format=xlsx';

//     try {
//       const response = await fetch(excelUrl);
//       if (!response.ok) throw new Error('Failed to fetch the file.');

//       const arrayBuffer = await response.arrayBuffer();
//       const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });

//       const sheetName = workbook.SheetNames[0];
//       const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//       const userData = data.map((row) => ({
//         Name: row['Name']?.trim() || '',
//         Email: row['Email']?.trim() || '',
//         Contact: typeof row['Contact'] === 'string' ? row['Contact'].trim() : String(row['Contact'] || ''),
//         Password: row['Password'] ? String(row['Password']).trim() : '',
//       }));

//       setExcelData(userData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
    
//     fetchExcelData();

//     const user = JSON.parse(localStorage.getItem('user'));

//     if (!user) {
//       navigate('/');
//       return;
//     }
//     setUserData(user);
//   }, [navigate]);

//   if (!userData || !excelData) {
//     return <div>Loading...</div>;
//   }

//   const matchedUser = excelData.find((row) => row.Email === userData.email);

//   return (
//     <div>
//       <div className="flex justify-center w-full cursor-pointer">
//         <div className="group mb-5 bg-white relative w-full h-[336px] hover:bg-[#FAEDE4] border-b-2 border-b-[#F04E29] flex flex-col items-center p-4 transition-[filter] hover:saturate-100 saturate-0">
//           <img
//             className="w-52 h-52 rounded-full group-hover:rounded-br-[100px] transition-[border-radius]"
//             src="https://avatars.githubusercontent.com/u/116033543?s=400&u=c9703ce3867733025afed6466f2f452be43103ea&v"
//             alt={`${userData.name}'s profile`}
//           />
//           {matchedUser && (
//   <>
//     <p className="mt-4 text-[#262626] text-base">{matchedUser.Name  }</p>
//     <p className="text-[#777674] text-xs">{matchedUser.Contact}</p>
//   </>
// )}

//             </div>
//       </div>

//       <div className="flex justify-center mb-6">
//         <button
//           onClick={() => (window.location.href = "/profile")}
//           className="bg-red-500 text-white py-2 px-4 rounded text-sm hover:bg-red-600 focus:outline-none"
//         >
//           Edit
//         </button>
//       </div>

//       <div className="p-4 font-jost">
//         <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           <Card
//             title="Function Halls"
//             description="Book venues for events"
//             img="https://www.eternalweddingz.in/storage/venue_images/2SD9IgZgcBbudi7OOomN2P4Gg1Nw4EOF34IJCOCn.webp"
//             link="/function-halls"
//           />
//           <Card
//             title="Sports Facilities"
//             description="Reserve courts for sports"
//             img="https://sportsfacilities.com/wp-content/uploads/2018/02/shutterstock_538382059-1024x683.jpg"
//             link="/sports-facilities"
//           />
//           <Card
//             title="Wellness Services"
//             description="Book wellness services"
//             img="https://content.jdmagicbox.com/comp/vijayawada/v8/0866px866.x866.200106190326.h3v8/catalogue/nova-wellness-gayatri-nagar-vijayawada-body-massage-centres-vwk3b16cpa.jpg"
//             link="/wellness-services"
//           />
//         </div>
//       </div>

//       {/* {matchedUser && (
//         <div className="p-4 font-jost mt-6">
//           <h2 className="text-xl font-bold mb-4">User Data from Excel:</h2>
//           <div>
//             <p><strong>Name:</strong> {matchedUser.Name}</p>
//             <p><strong>Email:</strong> {matchedUser.Email}</p>
//             <p><strong>Contact:</strong> {matchedUser.Contact}</p>
//             <p><strong>Password:</strong> {matchedUser.Password}</p>
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const navigate = useNavigate();
  const fetchExcelData = async () => {
    const excelUrl =
      "https://docs.google.com/spreadsheets/d/1C11P7YQFUoyYaNQdE5zR6mtUygDuSs8YD4LhN_WJz94/export?format=xlsx";

    try {
      const response = await fetch(excelUrl);
      if (!response.ok) throw new Error("Failed to fetch Excel file.");

      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const formattedData = data.map((row) => ({
        Name: row["Name"]?.trim() || "",
        Email: row["Email"]?.trim() || "",
        Contact: String(row["Contact"] || "").trim(),
        Password: String(row["Password"] || "").trim(),
      }));

      setExcelData(formattedData);
    } catch (error) {
      console.error("Error fetching Excel Data:", error);
    }
  };

  useEffect(() => {
    fetchExcelData();

    const googleUser = JSON.parse(localStorage.getItem("user")); 
    console.log(" localStorage:", googleUser);

    if (!googleUser) {
      navigate("/");
      return;
    }

    setUserData(googleUser); 
  }, [navigate]);

  if (!excelData) return <div>Loading...</div>;


  const matchedUser = excelData.find((row) => row.Email === userData?.email);

  return (
    <div>
      <div className="flex justify-center w-full cursor-pointer">
        <div className="group mb-5 bg-white relative w-full h-[336px] hover:bg-[#FAEDE4] border-b-2 border-b-[#F04E29] flex flex-col items-center p-4 transition-[filter] hover:saturate-100 saturate-0">
          <img
            className="w-52 h-52 rounded-full group-hover:rounded-br-[100px] transition"
            src={
              userData?.picture ||
              "https://avatars.githubusercontent.com/u/116033543?s=400&u=c9703ce3867733025afed6466f2f452be43103ea&v"
            }
            alt={`${userData?.name || matchedUser?.Name || "User"}'s profile`}
          />

          <p className="mt-4 text-[#262626] text-base">
            {userData?.name || matchedUser?.Name || "Unknown User"}
          </p>
          <p className="text-[#777674] text-xs">{userData?.email || "N/A"}</p>
        </div>
      </div>

      <div className="p-4 font-jost">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 fade-out-down">
          <Card
            title="Function Halls"
            description="Book venues for events"
            img="https://www.eternalweddingz.in/storage/venue_images/2SD9IgZgcBbudi7OOomN2P4Gg1Nw4EOF34IJCOCn.webp"
            link="/function-halls"
          />
          <Card
            title="Sports Facilities"
            description="Reserve courts for sports"
            img="https://sportsfacilities.com/wp-content/uploads/2018/02/shutterstock_538382059-1024x683.jpg"
            link="/sports-facilities"
          />
          <Card
            title="Wellness Services"
            description="Book wellness services"
            img="https://content.jdmagicbox.com/comp/vijayawada/v8/0866px866.x866.200106190326.h3v8/catalogue/nova-wellness-gayatri-nagar-vijayawada-body-massage-centres-vwk3b16cpa.jpg"
            link="/wellness-services"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
