// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Get In Touch</h2>
//           <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
//             Have questions or ready to elevate your customer experience? We're here to help.
//           </p>
//         </div>
        
//         <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
//           {/* Contact Form */}
//           <div className="lg:w-2/3 bg-white p-8 rounded-l-xl shadow-lg">
//             <h3 className="text-2xl font-bold text-indigo-900 mb-6">Send Us a Message</h3>
//             <form>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label htmlFor="fullName" className="block text-sm font-medium text-indigo-700 mb-1">Full Name</label>
//                   <input 
//                     type="text" 
//                     id="fullName" 
//                     className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                     placeholder="Your name" 
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-indigo-700 mb-1">Email Address</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                     placeholder="your@email.com" 
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium text-indigo-700 mb-1">Company</label>
//                   <input 
//                     type="text" 
//                     id="company" 
//                     className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                     placeholder="Your company" 
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-indigo-700 mb-1">Phone (Optional)</label>
//                   <input 
//                     type="tel" 
//                     id="phone" 
//                     className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                     placeholder="(123) 456-7890" 
//                   />
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="subject" className="block text-sm font-medium text-indigo-700 mb-1">Subject</label>
//                 <input 
//                   type="text" 
//                   id="subject" 
//                   className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                   placeholder="How can we help?" 
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-sm font-medium text-indigo-700 mb-1">Message</label>
//                 <textarea 
//                   id="message" 
//                   rows="5" 
//                   className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
//                   placeholder="Tell us more about your needs..."
//                 ></textarea>
//               </div>
//               <button 
//                 type="submit" 
//                 className="bg-indigo-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors text-lg font-medium w-full md:w-auto"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
          
//           {/* Contact Information */}
//           <div className="lg:w-1/3 bg-indigo-800 p-8 rounded-r-xl shadow-lg text-white flex flex-col">
//             <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
//             <div className="flex items-start mb-6">
//               <svg className="w-6 h-6 mr-3 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               <div>
//                 <h4 className="font-medium text-teal-400">Phone</h4>
//                 <p className="mt-1">(123) 456-7890</p>
//                 <p>Mon-Fri, 9am-6pm EST</p>
//               </div>
//             </div>
            
//             <div className="flex items-start mb-6">
//               <svg className="w-6 h-6 mr-3 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               <div>
//                 <h4 className="font-medium text-teal-400">Email</h4>
//                 <p className="mt-1">support@yourcrm.com</p>
//                 <p>sales@yourcrm.com</p>
//               </div>
//             </div>
            
//             <div className="flex items-start mb-10">
//               <svg className="w-6 h-6 mr-3 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               <div>
//                 <h4 className="font-medium text-teal-400">Office</h4>
//                 <p className="mt-1">
//                   123 Business Avenue<br />
//                   Suite 500<br />
//                   New York, NY 10001<br />
//                   United States
//                 </p>
//               </div>
//             </div>
            
//             <div className="mt-auto">
//               <h4 className="font-medium text-teal-400 mb-3">Connect With Us</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="bg-indigo-700 p-2 rounded-full hover:bg-indigo-600 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="bg-indigo-700 p-2 rounded-full hover:bg-indigo-600 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="bg-indigo-700 p-2 rounded-full hover:bg-indigo-600 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="bg-indigo-700 p-2 rounded-full hover:bg-indigo-600 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Get In Touch</h2>
          <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
            Have questions or ready to elevate your customer experience? We're here to help.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
          {/* Decorative elements */}
          {/* <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-100 rounded-full opacity-70 blur-xl"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-200 rounded-full opacity-70 blur-xl"></div> */}
          
          {/* Contact Form */}
          <div className="relative z-10">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-indigo-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-indigo-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    placeholder="your@email.com" 
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-indigo-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                  placeholder="How can we help?" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-indigo-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="bg-indigo-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-indigo-700">Need immediate assistance? Call us at <span className="font-semibold">+91-9352220187</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;