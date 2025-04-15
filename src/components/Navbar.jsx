// import React from 'react';
// import { FaInfoCircle, FaShoppingCart } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="w-full px-8 py-4 flex items-center justify-between bg-white shadow">
//       {/* Left: Logo */}
//       <div className="flex items-center space-x-2">
//         <img src="/logo.png" alt="Logo" className="h-8 w-8" />
//         <h1 className="text-2xl font-bold text-[#0C1E3A]">
//           Requin Solutions
//         </h1>
//       </div>

//       {/* Center: Nav links */}
//       <ul className="hidden md:flex space-x-8 font-medium text-[#0C1E3A]">
//         <li className="hover:text-orange-500 cursor-pointer">Home</li>
//         <li className="hover:text-orange-500 cursor-pointer">Demos</li>
//         <li className="hover:text-orange-500 cursor-pointer">Modules</li>
//         <li className="hover:text-orange-500 cursor-pointer">Features</li>
//         <li className="hover:text-orange-500 cursor-pointer">Pricing</li>
//       </ul>

//       {/* Right: Buttons */}
//       <div className="flex space-x-3">
//         <button className="flex items-center gap-2 bg-[#0A0A23] text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
//           <FaInfoCircle size={14} />
//           Change Log
//         </button>
//         <button className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
//           <FaShoppingCart size={14} />
//           Buy Template
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-primary text-white p-4 fixed top-0 w-full z-10 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <img src="logo.png" alt="CRM Logo" className="h-10" />
//         <ul className="flex space-x-6">
//           <li><a href="#home" className="hover:text-accent">Home</a></li>
//           <li><a href="#features" className="hover:text-accent">Features</a></li>
//           <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
//           <li><a href="#contact" className="hover:text-accent">Contact</a></li>
//           <li><a href="#login" className="hover:text-accent">Login</a></li>
//           <li><a href="#signup" className="bg-accent px-4 py-2 rounded hover:bg-green-700">Sign Up</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <svg className="w-10 h-10 text-coral-500" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//             <span className={`ml-3 font-bold text-xl ${isScrolled ? 'text-white' : 'text-slate-900'}`}>NexusCRM</span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             <a href="#features" className={`${isScrolled ? 'text-slate-200' : 'text-slate-800'} hover:text-coral-500 transition-colors`}>Features</a>
//             <a href="#solutions" className={`${isScrolled ? 'text-slate-200' : 'text-slate-800'} hover:text-coral-500 transition-colors`}>Solutions</a>
//             <a href="#pricing" className={`${isScrolled ? 'text-slate-200' : 'text-slate-800'} hover:text-coral-500 transition-colors`}>Pricing</a>
//             <a href="#testimonials" className={`${isScrolled ? 'text-slate-200' : 'text-slate-800'} hover:text-coral-500 transition-colors`}>Testimonials</a>
//           </div>

//           <div className="flex items-center space-x-4">
//             <button className={`hidden md:block px-4 py-2 rounded-md ${isScrolled ? 'text-white border border-white' : 'text-slate-900 border border-slate-900'} hover:bg-coral-500 hover:text-white hover:border-coral-500 transition-all`}>Login</button>
//             <button className="bg-coral-500 text-black px-6 py-2 rounded-md shadow-lg hover:bg-coral-600 transition-colors">Get Started</button>
//           </div>

//           <button className="md:hidden text-slate-900">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-indigo-900 py-3 shadow-lg" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             {/* <svg className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//             </svg> */}
//             {/* <a href="/" className="flex items-center gap-2">
//               <img
//                 src="https://i.ibb.co/hRzkkDJV/Logo-white.png"
//                 // src="https://i.ibb.co/b5G6QhwM/Logo-white-big.png"
//                 alt="Logo"
//                 className="w-auto h-17"
//               />
//             </a> */}
//             <span
//               className={`ml-3 font-bold text-xl ${
//                 isScrolled ? "text-white" : "text-indigo-900"
//               }`}
//             >
//               RequinOps
//             </span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             <a
//               href="#features"
//               className={`${
//                 isScrolled ? "text-indigo-100" : "text-indigo-800"
//               } hover:text-teal-400 transition-colors`}
//             >
//               Features
//             </a>
//             {/* <a
//               href="#solutions"
//               className={`${
//                 isScrolled ? "text-indigo-100" : "text-indigo-800"
//               } hover:text-teal-400 transition-colors`}
//             >
//               Solutions
//             </a> */}
//             <a
//               href="#pricing"
//               className={`${
//                 isScrolled ? "text-indigo-100" : "text-indigo-800"
//               } hover:text-teal-400 transition-colors`}
//             >
//               Pricing
//             </a>
//             <a
//               href="#testimonials"
//               className={`${
//                 isScrolled ? "text-indigo-100" : "text-indigo-800"
//               } hover:text-teal-400 transition-colors`}
//             >
//               Testimonials
//             </a>
//           </div>

//           <div className="flex items-center space-x-4">
//             <button
//               className={`hidden md:block px-4 py-2 rounded-md ${
//                 isScrolled
//                   ? "text-white border border-white"
//                   : "text-indigo-900 border border-indigo-900"
//               } hover:bg-teal-400 hover:text-indigo-900 hover:border-teal-400 transition-all`}
//             >
//               Login
//             </button>
//             <button className="bg-teal-400 text-indigo-900 px-6 py-2 rounded-md shadow-lg hover:bg-teal-500 transition-colors font-medium">
//               Get Started
//             </button>
//           </div>

//           <button className="md:hidden text-indigo-900">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FBFBFB] py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="ml-3 font-bold text-xl text-slate-700">
              RequinOps
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-teal-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-teal-500 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-slate-600 hover:text-teal-500 transition-colors"
            >
              Testimonials
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* <button className="hidden md:block px-4 py-2 rounded-md text-slate-600 border border-slate-300 hover:bg-teal-400 hover:text-white hover:border-teal-400 transition-all">
              Login
            </button> */}
            <a href="#contact">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-md shadow hover:bg-teal-600 transition-colors font-medium">
                Get Started
              </button>
            </a>
          </div>

          <button className="md:hidden text-slate-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
