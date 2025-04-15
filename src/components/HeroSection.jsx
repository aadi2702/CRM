// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight">
//               Elevate Your <span className="text-teal-500">Customer Experience</span>
//             </h1>
//             <p className="mt-6 text-lg text-indigo-700 max-w-lg">
//               A powerful CRM platform that helps businesses of all sizes manage relationships,
//               automate processes, and drive revenue growth.
//             </p>
//             <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="bg-indigo-800 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors text-lg font-medium">
//                 Get Started Free
//               </button>
//               <button className="bg-white text-indigo-800 border border-indigo-200 px-8 py-4 rounded-lg shadow-md hover:bg-indigo-50 transition-colors text-lg font-medium flex items-center justify-center">
//                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                 </svg>
//                 See How It Works
//               </button>
//             </div>
//             <div className="mt-10 flex items-center">
//               <div className="flex items-center">
//                 <div className="flex text-amber-400">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="ml-2 text-sm text-indigo-700">
//                   <span className="font-medium">4.9/5</span> from over <span className="font-medium">2,000+</span> reviews
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <div className="relative">
//               <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-70 blur-2xl"></div>
//               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full opacity-70 blur-2xl"></div>
//               <img
//                 src="https://i.ibb.co/PGYzXsjD/dashboard.png"
//                 alt="CRM Dashboard Preview"
//                 className="relative z-10 rounded-xl shadow-2xl w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-[#FBFBFB]">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
//               Elevate Your <span className="text-teal-500">Customer Experience</span>
//             </h1>
//             <p className="mt-6 text-lg text-slate-600 max-w-lg">
//               A powerful CRM platform that helps businesses of all sizes manage relationships,
//               automate processes, and drive revenue growth.
//             </p>
//             <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="bg-slate-800 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-slate-700 transition-colors text-lg font-medium">
//                 Get Started Free
//               </button>
//               <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg shadow-md hover:bg-slate-50 transition-colors text-lg font-medium flex items-center justify-center">
//                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                 </svg>
//                 See How It Works
//               </button>
//             </div>
//             <div className="mt-10 flex items-center">
//               <div className="flex items-center">
//                 <div className="flex text-amber-400">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="ml-2 text-sm text-slate-600">
//                   <span className="font-medium">4.9/5</span> from over <span className="font-medium">2,000+</span> reviews
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <div className="relative">
//               <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E8F9FF] rounded-full opacity-70 blur-2xl"></div>
//               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100 rounded-full opacity-70 blur-2xl"></div>
//               <img
//                 src="https://i.ibb.co/PGYzXsjD/dashboard.png"
//                 alt="CRM Dashboard Preview"
//                 className="relative z-10 rounded-xl shadow-xl w-full border border-slate-200"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState } from "react";
import CRM from "../assets/CRM/CRM.webm";
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50 to-white opacity-70"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 hidden lg:block">
        <div className="h-64 w-64 rounded-full bg-teal-50 opacity-70"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 hidden lg:block">
        <div className="h-16 w-16 rounded-full bg-teal-100 opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 lg:pr-8">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 mb-5">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
              Next-Gen Hospital Management
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Transform Your <span className="text-teal-600">Healthcare</span> Operations
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Our intelligent hospital management system streamlines your workflows, 
              enhances patient care, and brings unparalleled efficiency to your healthcare facility.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started 
              </a>
              <a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all duration-300">
                See how it works <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
                    <Activity className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Real-time Analytics</p>
                  <p className="mt-1 text-sm text-gray-500">Make data-driven decisions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">HIPAA Compliant</p>
                  <p className="mt-1 text-sm text-gray-500">Secure and protected data</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
                    <BarChart2 className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">Performance Tracking</p>
                  <p className="mt-1 text-sm text-gray-500">Optimize your operations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-100 text-teal-600">
                    <Check className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">24/7 Support</p>
                  <p className="mt-1 text-sm text-gray-500">Always available for you</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100 rounded-full opacity-70 blur-xl"></div>
              <img
                src="https://i.ibb.co/PGYzXsjD/dashboard.png"
                alt="CRM Dashboard Preview"
                className="relative z-10 rounded-xl shadow-xl w-full border border-slate-200"
              />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
