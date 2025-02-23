import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function Dashboard() {
    const categories = [
        { title: 'Function Halls', description: 'View and manage function halls.', image: 'https://www.eternalweddingz.in/storage/venue_images/2SD9IgZgcBbudi7OOomN2P4Gg1Nw4EOF34IJCOCn.webp', link: '/function-halls' },
        { title: 'Sports Facilities', description: 'Explore sports facilities available.', image: 'https://sportsfacilities.com/wp-content/uploads/2018/02/shutterstock_538382059-1024x683.jpg', link: '/sports-facilities' },
        { title: 'Wellness Services', description: 'Check out wellness services offered.', image: 'https://content.jdmagicbox.com/comp/vijayawada/v8/0866px866.x866.200106190326.h3v8/catalogue/nova-wellness-gayatri-nagar-vijayawada-body-massage-centres-vwk3b16cpa.jpg', link: '/wellness-services' },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <header className="w-full bg-blue-600 text-white py-4 text-center">
                <h1 className="text-2xl font-bold font-jost">Welcome to the Dashboard</h1>
                <div className="flex justify-end p-4">
                    <a href="/profile">
                        <img
                            src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?semt=ais_hybrid"
                            alt="Profile"
                            className="w-10 h-10 rounded-full hover:opacity-75 transition duration-300"
                        />
                    </a>
                    <button className="ml-4 bg-transparent-500 border-none px-4 py-2 rounded text-red-500 text-2xl flex items-center ">
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />


                    </button>
                </div>
            </header>

            <main className="flex flex-wrap justify-center p-8 space-x-4">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-md rounded-lg p-6 w-60 h-[50%] m-4 hover:shadow-lg transform transition-shadow duration-300"
                    >
                        <img src={category.image} alt={category.title} className="w-full h-32 object-cover rounded hover:scale-[1.1] cursor-pointer transition-transform duration-300" />
                        <h2 className="text-xl font-semibold font-jost mt-4">{category.title}</h2>
                        <p className="mt-5 font-jost text-center text-gray-600">{category.description}</p>
                        <div key={index} className="mb-5">
                            <a
                                onClick={() => (window.location.href = './Functionhalls.jsx')}
                                className="text-red-300 justify-center text-center hover:text-red-500 cursor-pointer"
                            >
                                Go to {category.title}
                            </a>

                        </div>
                    </motion.div>
                ))}
            </main>
        </div>
    );
}

export default Dashboard;
// import React from "react";
// import Card from "../components/Card";
// import {jwtDecode} from 'jwt-decode'
// const Dashboard = () => {
//   const user = {
//     name: "Uday Sai",
//     title: "Web Developer",
//     profilePic:
//       "https://avatars.githubusercontent.com/u/116033543?s=400&u=c9703ce3867733025afed6466f2f452be43103ea&v",
//   };
// // console.log(credentialResponse);
//   return (
//     <div>
//       <div className="flex justify-center w-full cursor-pointer">
//         <div className="group mb-5 bg-white relative w-full h-[336px] hover:bg-[#FAEDE4] border-b-2 border-b-[#F04E29] flex flex-col items-center p-4 transition-[filter] hover:saturate-100 saturate-0">
//           <img
//             className="w-52 h-52 rounded-full group-hover:rounded-br-[100px] transition-[border-radius]"
//             src={user.profilePic}
//             alt={`${user.name}'s profile`}
//           />
//           <p className="mt-4 text-[#262626] text-base">{user.name}</p>
//           <p className="text-[#777674] text-xs">{user.title}</p>
//         </div>
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
//     </div>
//   );
// };
 
// export default Dashboard;

