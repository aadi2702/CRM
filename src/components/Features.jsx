// import React from "react";
// import {
//   FaCashRegister,
//   FaBarcode,
//   FaChartBar,
//   FaMoneyBillAlt,
//   FaBoxes,
//   FaFileInvoice,
//   FaChartLine,
//   FaCogs,
// } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaCashRegister className="text-xl" />,
//     title: "Point of Sale",
//     desc: "It is the point at which a customer makes a payment to a merchant in exchange for goods or services.",
//   },
//   {
//     icon: <FaBarcode className="text-xl" />,
//     title: "Print Barcode",
//     desc: "In DreamsPOS we have a built-in features for generating and printing barcodes.",
//   },
//   {
//     icon: <FaChartBar className="text-xl" />,
//     title: "Import Products & Reports",
//     desc: "Importing products & generating reports are crucial tasks for businesses, but we made easy for you.",
//   },
//   {
//     icon: <FaMoneyBillAlt className="text-xl" />,
//     title: "Accounts & Finance",
//     desc: "POS systems track every transaction made, from the sale of a product or service to the payment method.",
//   },
//   {
//     icon: <FaBoxes className="text-xl" />,
//     title: "Product List",
//     desc: "A product list is a comprehensive record of all the items or services a business offers for sale.",
//   },
//   {
//     icon: <FaFileInvoice className="text-xl" />,
//     title: "Invoices & Quotations List",
//     desc: "By creating a clear and comprehensive quotation list, you provide potential customers with necessary info.",
//   },
//   {
//     icon: <FaChartLine className="text-xl" />,
//     title: "Reports",
//     desc: (
//       <>
//         Provides detailed transaction reports that can be used to create
//         financial statements.{" "}
//         <span className="bg-green-500 text-xs text-white px-2 py-0.5 ml-2 rounded">
//           UPDATED
//         </span>
//       </>
//     ),
//   },
//   {
//     icon: <FaCogs className="text-xl" />,
//     title: "Unlimited Settings Options",
//     desc: "It's important to consider the user interface, documentation, and support mechanisms.",
//   },
// ];

// const CoreFeatures = () => {
//   return (
//     <section className="bg-[#141432] text-white py-20 px-4">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
//         {/* Left Content */}
//         <div>
//           <div className="inline-block border border-[#FF6B00] text-sm px-4 py-1 rounded-full text-white mb-4">
//             Best In Class
//           </div>
//           <h2 className="text-4xl font-bold mb-2">
//             Core Features{" "}
//             <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//               DreamsPOS
//             </span>
//           </h2>
//           <p className="text-gray-300 mb-8">
//             With beautifully designed and carefully crafted modern admin
//             template.
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-[#0F0F28] px-5 py-2 rounded-md font-semibold shadow hover:bg-[#1a1a40] transition">
//               ▶ View Demo
//             </button>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold transition">
//               🛒 Buy Template
//             </button>
//           </div>
//         </div>

//         {/* Right Features */}
//         <div className="grid sm:grid-cols-2 gap-8">
//           {features.map((feature, idx) => (
//             <div key={idx} className="flex items-start gap-4">
//               <div className="p-3 border border-red-500 rounded-full text-red-500">
//                 {feature.icon}
//               </div>
//               <div>
//                 <h4 className="font-bold mb-1">{feature.title}</h4>
//                 <p className="text-sm text-gray-400">{feature.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreFeatures;

// import React from 'react';

// const Features = () => {
//   return (
//     <section id="features" className="py-16 bg-secondary">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">Key Features of Our CRM</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <img src="contact-icon.png" alt="Contact Management" className="h-16 mx-auto" />
//             <h3 className="text-xl font-semibold mt-4">Contact Management</h3>
//             <p className="mt-2 text-gray-600">Organize all your contacts effortlessly.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <img src="sales-icon.png" alt="Sales Tracking" className="h-16 mx-auto" />
//             <h3 className="text-xl font-semibold mt-4">Sales Tracking</h3>
//             <p className="mt-2 text-gray-600">Monitor your sales pipeline in real-time.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <img src="report-icon.png" alt="Reporting" className="h-16 mx-auto" />
//             <h3 className="text-xl font-semibold mt-4">Advanced Reporting</h3>
//             <p className="mt-2 text-gray-600">Gain insights with detailed analytics.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

// import React from 'react';

// const Features = () => {
//   // Updated feature data array with your new CRM capabilities
//   const features = [
//     {
//       icon: (
//         <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       ),
//       title: "All-in-One Management",
//       description: "Manage clients, tasks, employees, and leads through one seamless solution to stay organized and in-charge."
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
//         </svg>
//       ),
//       title: "Custom Role-Based Dashboards",
//       description: "Dedicated dashboards for HR, managers, BDAs, and other roles with tailored views for maximum productivity."
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//         </svg>
//       ),
//       title: "Top-Tier Security",
//       description: "Enterprise-grade security keeping your sensitive business data protected and compliant at all times."
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//         </svg>
//       ),
//       title: "SaaS-Based Architecture",
//       description: "Cloud-based solution with no installation required, accessible from anywhere with internet connection."
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       ),
//       title: "Permission-Based Access",
//       description: "Granular access control based on user roles, ensuring employees only see what they need to see."
//     },
//     {
//       icon: (
//         <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//         </svg>
//       ),
//       title: "Scalable Infrastructure",
//       description: "Grow your business without outgrowing your CRM - our solution scales alongside your organization's needs."
//     }
//   ];

//   return (
//     <section id="features" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Features Designed for Organization</h2>
//           <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
//             One seamless solution to stay organized and in-charge of your entire business
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-indigo-50 p-8 rounded-xl hover:shadow-lg transition-all group">
//               <div className="bg-teal-100 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-bold text-indigo-900 mb-3">{feature.title}</h3>
//               <p className="text-indigo-700">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <button className="bg-teal-400 text-indigo-900 px-8 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition-colors font-medium">
//             Explore CRM Solutions
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

// import React from 'react';

// const Features = () => {
//   // Updated feature data array with CRM capabilities
//   const features = [
//     {
//       icon: (
//         <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       ),
//       title: "All-in-One Management",
//       description: "Manage clients, tasks, employees, and leads through one seamless solution to stay organized and in-charge."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
//         </svg>
//       ),
//       title: "Custom Role-Based Dashboards",
//       description: "Dedicated dashboards for HR, managers, BDAs, and other roles with tailored views for maximum productivity."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//         </svg>
//       ),
//       title: "Top-Tier Security",
//       description: "Enterprise-grade security keeping your sensitive business data protected and compliant at all times."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//         </svg>
//       ),
//       title: "SaaS-Based Architecture",
//       description: "Cloud-based solution with no installation required, accessible from anywhere with internet connection."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       ),
//       title: "Permission-Based Access",
//       description: "Granular access control based on user roles, ensuring employees only see what they need to see."
//     },
//     {
//       icon: (
//         <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//         </svg>
//       ),
//       title: "Scalable Infrastructure",
//       description: "Grow your business without outgrowing your CRM - our solution scales alongside your organization's needs."
//     }
//   ];

//   return (
//     <section id="features" className="py-24 bg-[#FBFBFB]">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Features Designed for <span className="text-teal-500">Growth</span></h2>
//           <p className="text-lg text-slate-600">
//             One seamless solution to streamline operations and accelerate your business success
//           </p>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group"
//             >
//               <div className="bg-slate-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
//               <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Feature Highlight */}
//         <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl overflow-hidden shadow-xl">
//           <div className="flex flex-col lg:flex-row">
//             <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 Ready to transform your customer experience?
//               </h3>
//               <p className="text-slate-300 text-lg mb-8">
//                 Join thousands of companies already leveraging RequinOps to drive growth and customer satisfaction.
//               </p>
//               <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
//                 <button className="bg-teal-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition-colors font-medium">
//                   Start Free Trial
//                 </button>
//                 <button className="bg-transparent text-white border border-slate-500 px-8 py-3 rounded-lg hover:bg-slate-600 transition-colors font-medium flex items-center justify-center">
//                   <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                   Watch Demo
//                 </button>
//               </div>
//             </div>
//             <div className="lg:w-1/2 relative">
//               <div className="absolute"></div>
//               <img
//                 src="https://i.ibb.co/PGYzXsjD/dashboard.png"
//                 alt="CRM in action"
//                 className="w-full h-full object-right-top object-cover rounded-2xl shadow-lg"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
//             <h4 className="text-4xl font-bold text-teal-500 mb-2">98%</h4>
//             <p className="text-slate-600">Customer Satisfaction</p>
//           </div>
//           <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
//             <h4 className="text-4xl font-bold text-teal-500 mb-2">35%</h4>
//             <p className="text-slate-600">Increase in Sales</p>
//           </div>
//           <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
//             <h4 className="text-4xl font-bold text-teal-500 mb-2">50+</h4>
//             <p className="text-slate-600">Integrations</p>
//           </div>
//           <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
//             <h4 className="text-4xl font-bold text-teal-500 mb-2">24/7</h4>
//             <p className="text-slate-600">Customer Support</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React, { useState } from "react";
import CRM from "../assets/CRM/CRM.webm";
import CRMImage from "../assets/CRM/CRM.png";

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Updated feature data array with CRM capabilities
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "All-in-One Management",
      description:
        "Manage clients, tasks, employees, and leads through one seamless solution to stay organized and in-charge.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "Custom Role-Based Dashboards",
      description:
        "Dedicated dashboards for HR, managers, BDAs, and other roles with tailored views for maximum productivity.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Top-Tier Security",
      description:
        "Enterprise-grade security keeping your sensitive business data protected and compliant at all times.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: "SaaS-Based Architecture",
      description:
        "Cloud-based solution with no installation required, accessible from anywhere with internet connection.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Permission-Based Access",
      description:
        "Granular access control based on user roles, ensuring employees only see what they need to see.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      title: "Scalable Infrastructure",
      description:
        "Grow your business without outgrowing your CRM - our solution scales alongside your organization's needs.",
    },
  ];

  return (
    <section id="features" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Features Designed for <span className="text-teal-500">Growth</span>
          </h2>
          <p className="text-lg text-slate-600">
            One seamless solution to streamline operations and accelerate your
            business success
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group"
            >
              <div className="bg-slate-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to transform your customer experience?
              </h3>
              <p className="text-slate-300 text-lg mb-8">
                Join thousands of companies already leveraging RequinOps to
                drive growth and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="#contact">
                  <button className="bg-teal-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition-colors font-medium">
                    Start Free Trial
                  </button>
                </a>
                <button
                  onClick={openModal}
                  className="bg-transparent text-white border border-slate-500 px-8 py-3 rounded-lg hover:bg-slate-600 transition-colors font-medium flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="absolute bottom-0"></div>
              <img
                src={CRMImage}
                alt="CRM in action"
                className="object-cover rounded-br-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
            <h4 className="text-4xl font-bold text-teal-500 mb-2">98%</h4>
            <p className="text-slate-600">Customer Satisfaction</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
            <h4 className="text-4xl font-bold text-teal-500 mb-2">35%</h4>
            <p className="text-slate-600">Increase in Sales</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
            <h4 className="text-4xl font-bold text-teal-500 mb-2">50+</h4>
            <p className="text-slate-600">Integrations</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
            <h4 className="text-4xl font-bold text-teal-500 mb-2">24/7</h4>
            <p className="text-slate-600">Customer Support</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                How It Works
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable Video Content */}
            <div className="p-6 overflow-y-auto flex-grow">
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full max-h-[60vh] object-cover"
                  controls
                  autoPlay
                >
                  <source src={CRM} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
