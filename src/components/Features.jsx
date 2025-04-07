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


import React from 'react';

const Features = () => {
  // Feature data array for easy modification
  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "360° Customer View",
      description: "Get a complete picture of your customers with unified data across all touchpoints and interactions."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Smart Scheduling",
      description: "Never miss an opportunity with automated follow-ups, tasks, and meeting scheduling."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "AI-Powered Insights",
      description: "Leverage AI to predict customer needs, identify opportunities, and optimize your sales strategy."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Marketing Automation",
      description: "Create personalized marketing campaigns that nurture leads and drive conversions automatically."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Advanced Reporting",
      description: "Generate insightful reports and visualizations to measure performance and identify growth opportunities."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Workflow Automation",
      description: "Streamline processes with customizable workflows that trigger actions based on specific conditions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Features Designed for Growth</h2>
          <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you build lasting customer relationships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-indigo-50 p-8 rounded-xl hover:shadow-lg transition-all group">
              <div className="bg-teal-100 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">{feature.title}</h3>
              <p className="text-indigo-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-teal-400 text-indigo-900 px-8 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition-colors font-medium">
            Discover All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;