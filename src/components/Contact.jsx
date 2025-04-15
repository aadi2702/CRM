// import React from "react";

// const Contact = () => { 
//   return (
//     <section
//       id="contact"
//       className="py-24 bg-[#FBFBFB] relative overflow-hidden"
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-40 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
//       <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#E8F9FF] rounded-full opacity-30 blur-3xl"></div>

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
//             Get in <span className="text-teal-500">Touch</span>
//           </h2>
//           <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
//             Have questions or ready to elevate your customer experience? Our
//             team is here to support your business growth journey.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 border border-slate-100 h-fit">
//             <h3 className="text-2xl font-bold text-slate-800 mb-6">
//               Contact Information
//             </h3>

//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="bg-teal-50 p-3 rounded-lg mr-4">
//                   <svg
//                     className="w-6 h-6 text-teal-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-slate-800 mb-1">
//                     Office Address
//                   </h4>
//                   <p className="text-slate-600">
//                     First Floor, 6/397,
//                     <br />
//                     opposite north western railway headquarters, Sector 6,
//                     <br />
//                     Malviya Nagar, Jaipur, Rajasthan 302017
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-teal-50 p-3 rounded-lg mr-4">
//                   <svg
//                     className="w-6 h-6 text-teal-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-slate-800 mb-1">
//                     Phone Number
//                   </h4>
//                   <p className="text-slate-600">+91-9352220187</p>
//                   <p className="text-slate-500 text-sm mt-1">
//                     Mon-Fri from 10am to 7pm
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-teal-50 p-3 rounded-lg mr-4">
//                   <svg
//                     className="w-6 h-6 text-teal-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-slate-800 mb-1">
//                     Email Address
//                   </h4>
//                   <p className="text-slate-600">info@requinsolutions.com</p>
//                   <p className="text-slate-500 text-sm mt-1">
//                     We'll respond as soon as possible
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="mt-10">
//               <h4 className="font-medium text-slate-800 mb-4">
//                 Connect With Us
//               </h4>
//               <div className="flex space-x-3">
                
//                 <a
//                   href="https://www.facebook.com/requin_solutions/"
//                   className="bg-slate-100 p-3 rounded-lg hover:bg-teal-50 hover:text-teal-500 transition-all"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/requin-solutions-pvt-ltdd/"
//                   className="bg-slate-100 p-3 rounded-lg hover:bg-teal-50 hover:text-teal-500 transition-all"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/requin_solutions/"
//                   className="bg-slate-100 p-3 rounded-lg hover:bg-teal-50 hover:text-teal-500 transition-all"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8 border border-slate-100">
//             <h3 className="text-2xl font-bold text-slate-800 mb-6">
//               Send us a message
//             </h3>

//             <form>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label
//                     htmlFor="fullName"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-slate-700 mb-2"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-slate-700 mb-2"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                   placeholder="How can we help?"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-slate-700 mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="5"
//                   className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
//                   placeholder="Tell us more about your needs..."
//                 ></textarea>
//               </div>

              

//               <button
//                 type="submit"
//                 className="w-full bg-slate-800 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-slate-700 transition-colors text-lg font-medium flex justify-center items-center"
//               >
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Map or Additional Info Section */}
//         <div className="mt-16 max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
//           <div className="grid grid-cols-1 md:grid-cols-3">
//             <div className="md:col-span-1 bg-slate-800 text-white p-8">
//               <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
//               <ul className="space-y-3">
//                 <li className="flex justify-between items-center pb-2 border-b border-slate-700">
//                   <span>Monday - Saturday</span>
//                   <span className="font-medium">10:00 AM - 7:00 PM</span>
//                 </li>
//                   {/* <li className="flex justify-between items-center pb-2 border-b border-slate-700">
//                     <span>Saturday</span>
//                     <span className="font-medium">10:00 AM - 4:00 PM</span>
//                   </li> */}
//                 <li className="flex justify-between items-center">
//                   <span>Sunday</span>
//                   <span className="font-medium">Closed</span>
//                 </li>
//               </ul>

//               <div className="mt-8">
//                 <h4 className="text-lg font-medium mb-2">
//                   Need immediate assistance?
//                 </h4>
//                 <a
//                   href="tel:+919352220187"
//                   className="flex items-center bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg mt-2 font-medium transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                   Call us now
//                 </a>
//               </div>
//             </div>
//             <div className="md:col-span-2 min-h-64 bg-slate-100 flex items-center justify-center p-6">
//               {/* Embed Google Maps */}
//               <div className="w-full h-64 bg-slate-200 rounded-lg flex items-center justify-center">
//                 <div className="w-full h-full">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.921530995783!2d75.8135947!3d26.842447999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66c82889ff3%3A0x84819a30be0867b1!2sRequin%20solutions%20pvt.%20ltd!5e0!3m2!1sen!2sin!4v1744185383499!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: "0", borderRadius: "8px" }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      // Load the EmailJS SDK
      const emailjs = await import("@emailjs/browser");

      // Initialize EmailJS with your user ID
      // Replace "YOUR_USER_ID" with your actual EmailJS user ID
      emailjs.init("SQS7FE5enX2qVNYzl");

      // Create template parameters based on form data
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Send the email
      // Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with your actual EmailJS service and template IDs
      await emailjs.send("service_jv1yiog", "template_jqacgcc", templateParams);

      // Update status after successful submission
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });

      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      }, 5000);

    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." },
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-8 bg-[#FBFBFB] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#E8F9FF] rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Get in <span className="text-teal-500">Touch</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions or ready to elevate your customer experience? Our
            team is here to support your business growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 border border-slate-100 h-fit">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-4">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">
                    Office Address
                  </h4>
                  <p className="text-slate-600">
                    First Floor, 6/397,
                    <br />
                    opposite north western railway headquarters, Sector 6,
                    <br />
                    Malviya Nagar, Jaipur, Rajasthan 302017
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-4">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">
                    Phone Number
                  </h4>
                  <p className="text-slate-600">+91-9352220187</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Mon-Fri from 10am to 7pm
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-4">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">
                    Email Address
                  </h4>
                  <p className="text-slate-600">info@requinsolutions.com</p>
                  <p className="text-slate-500 text-sm mt-1">
                    We'll respond as soon as possible
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-medium text-slate-800 mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/requin_solutions/"
                  className="bg-slate-100 p-3 rounded-lg hover:bg-teal-50 hover:text-teal-500 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/requin-solutions-pvt-ltdd/"
                  className="bg-slate-100 p-3 rounded-lg hover:bg-teal-50 hover:text-teal-500 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/requin_solutions/"
                  className="bg-slate-100 p-3 rounded-lg hover:bg-teal-50 hover:text-teal-500 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Send us a message
            </h3>

            {/* Status messages */}
            {status.info.msg && (
              <div
                className={`p-4 mb-6 rounded-lg ${
                  status.info.error
                    ? "bg-red-50 text-red-500 border border-red-100"
                    : "bg-green-50 text-green-500 border border-green-100"
                }`}
              >
                {status.info.msg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Tell us more about your needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-slate-700 transition-colors text-lg font-medium flex justify-center items-center"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="mt-16 max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-slate-800 text-white p-8">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-2">
                  Need immediate assistance?
                </h4>
                <a
                  href="tel:+919352220187"
                  className="flex items-center bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg mt-2 font-medium transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call us now
                </a>
              </div>
            </div>
            <div className="md:col-span-2 min-h-64 bg-slate-100 flex items-center justify-center p-6">
              {/* Embed Google Maps */}
              <div className="w-full h-64 bg-slate-200 rounded-lg flex items-center justify-center">
                <div className="w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.921530995783!2d75.8135947!3d26.842447999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66c82889ff3%3A0x84819a30be0867b1!2sRequin%20solutions%20pvt.%20ltd!5e0!3m2!1sen!2sin!4v1744185383499!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: "0", borderRadius: "8px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;