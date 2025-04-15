// import React from 'react';

// const WhyChooseUs = () => {
//   // Reasons data array for easy modification
//   const reasons = [
//     {
//       icon: (
//         <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Proven Results",
//       description: "Our customers report an average 40% increase in sales conversion and 35% improvement in customer retention rates."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       title: "Lightning Fast Implementation",
//       description: "Get up and running in days, not months. Our streamlined onboarding process ensures quick time-to-value."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//         </svg>
//       ),
//       title: "Enterprise-Grade Security",
//       description: "Rest easy with industry-leading data protection, compliance certifications, and role-based access controls."
//     }
//   ];

//   // Testimonial data
//   const testimonial = {
//     quote: "This CRM platform transformed how we interact with customers. Our sales team can now focus on relationships instead of paperwork.",
//     author: "Sarah Johnson",
//     position: "VP of Sales, TechCorp Inc."
//   };

//   return (
//     <section id="why-choose-us" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Why Choose Our CRM Solution?</h2>
//           <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
//             Backed by experience and driven by innovation, we deliver results that matter
//           </p>
//         </div>

//         {/* Reasons Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
//           {reasons.map((reason, index) => (
//             <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
//               <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
//                 {reason.icon}
//               </div>
//               <h3 className="text-xl font-bold text-indigo-900 mb-3">{reason.title}</h3>
//               <p className="text-indigo-700">{reason.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="bg-white rounded-xl shadow-lg p-10 mb-16">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="p-6">
//               <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">97%</div>
//               <p className="text-indigo-700 font-medium">Customer Satisfaction</p>
//             </div>
//             <div className="p-6 border-t md:border-t-0 md:border-l md:border-r border-indigo-100">
//               <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">24/7</div>
//               <p className="text-indigo-700 font-medium">Dedicated Support</p>
//             </div>
//             <div className="p-6 border-t md:border-t-0 border-indigo-100">
//               <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">10k+</div>
//               <p className="text-indigo-700 font-medium">Active Users</p>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial */}
//         {/* <div className="bg-indigo-800 rounded-xl shadow-lg p-10 text-center relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400 rounded-full opacity-20 -mr-20 -mt-20"></div>
//           <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400 rounded-full opacity-20 -ml-20 -mb-20"></div>
//           <div className="relative z-10">
//             <svg className="w-12 h-12 text-teal-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//             </svg>
//             <p className="text-xl text-white italic mb-8 max-w-3xl mx-auto">{testimonial.quote}</p>
//             <p className="text-teal-300 font-medium">{testimonial.author}</p>
//             <p className="text-indigo-200 text-sm">{testimonial.position}</p>
//           </div>
//         </div> */}

//         {/* CTA */}
//         <div className="mt-16 text-center">
//           <button className="bg-teal-400 text-indigo-900 px-8 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition-colors font-medium">
//             Start Your Free Trial
//           </button>
//           <p className="mt-4 text-indigo-700">No credit card required. 14-day free trial.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React from "react";
import RequinOps from "../assets/CRM/RequinOps.png"; // Placeholder image for the CRM dashboard

const WhyChooseUs = () => {
  // Reasons data array for easy modification
  const reasons = [
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Proven Results",
      description:
        "Our customers report an average 40% increase in sales conversion and 35% improvement in customer retention rates.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Lightning Fast Implementation",
      description:
        "Get up and running in days, not months. Our streamlined onboarding process ensures quick time-to-value.",
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
      title: "Enterprise-Grade Security",
      description:
        "Rest easy with industry-leading data protection, compliance certifications, and role-based access controls.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#FBFBFB]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why <span className="text-teal-500">Choose</span> RequinOps
          </h2>
          <p className="text-lg text-slate-600">
            Backed by experience and driven by innovation, we deliver results
            that matter
          </p>
        </div>
        {/* Main Feature with Image */}
        <div className="flex flex-col lg:flex-row items-center mb-24 bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Designed for businesses that demand excellence
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              RequinOps CRM was built from the ground up with your business
              growth in mind. Our platform combines powerful features with
              intuitive design to create a solution that adapts to your
              workflow—not the other way around.
            </p>
            <div className="space-y-4">
              {[
                "Seamless integration with your existing tools",
                "Customizable to match your unique processes",
                "Scalable from startups to enterprise",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                    <svg
                      className="h-4 w-4 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-slate-500/5"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-100 opacity-70 blur-2xl"></div>
            <img
              src={RequinOps}
              alt="CRM Dashboard"
              className="absolute inset-0 w-full h-full object-cover rounded-4xl"
            />
          </div>
        </div>
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
            >
              <div className="bg-slate-50 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
        {/* Stats Section */}
        {/* <div className="bg-white rounded-xl shadow-md overflow-hidden mb-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 text-center">
            <h3 className="text-2xl font-bold text-white">The Numbers Speak For Themselves</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">97%</div>
              <p className="text-slate-600 font-medium">Customer Satisfaction</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">24/7</div>
              <p className="text-slate-600 font-medium">Dedicated Support</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">10k+</div>
              <p className="text-slate-600 font-medium">Active Users</p>
            </div>
          </div>
        </div> */}
        {/* Featured Testimonial
        <div className="bg-gradient-to-r from-slate-50 to-teal-50 rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-200 rounded-full opacity-20 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-slate-200 rounded-full opacity-20 -ml-20 -mb-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center">
            <div className="mb-8 md:mb-0 md:mr-10 flex-shrink-0 flex justify-center">
              <img
                src="/api/placeholder/80/80"
                alt="Sarah Johnson"
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div>
              <svg
                className="w-10 h-10 text-teal-500 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl text-slate-700 italic mb-6">
                "This CRM platform transformed how we interact with customers.
                Our sales team can now focus on relationships instead of
                paperwork."
              </p>
              <div>
                <p className="font-bold text-slate-800">Sarah Johnson</p>
                <p className="text-slate-600">VP of Sales, TechCorp Inc.</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Ready to transform your business?
          </h3>
          <a href="#contact">
            <button className="bg-slate-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-slate-700 transition-colors font-medium">
              Start Your Free Trial
            </button>
          </a>
          <p className="mt-4 text-slate-600">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
