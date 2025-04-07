import React from 'react';

const WhyChooseUs = () => {
  // Reasons data array for easy modification
  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Proven Results",
      description: "Our customers report an average 40% increase in sales conversion and 35% improvement in customer retention rates."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Implementation",
      description: "Get up and running in days, not months. Our streamlined onboarding process ensures quick time-to-value."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise-Grade Security",
      description: "Rest easy with industry-leading data protection, compliance certifications, and role-based access controls."
    }
  ];

  // Testimonial data
  const testimonial = {
    quote: "This CRM platform transformed how we interact with customers. Our sales team can now focus on relationships instead of paperwork.",
    author: "Sarah Johnson",
    position: "VP of Sales, TechCorp Inc."
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Why Choose Our CRM Solution?</h2>
          <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
            Backed by experience and driven by innovation, we deliver results that matter
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">{reason.title}</h3>
              <p className="text-indigo-700">{reason.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">97%</div>
              <p className="text-indigo-700 font-medium">Customer Satisfaction</p>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l md:border-r border-indigo-100">
              <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">24/7</div>
              <p className="text-indigo-700 font-medium">Dedicated Support</p>
            </div>
            <div className="p-6 border-t md:border-t-0 border-indigo-100">
              <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">10k+</div>
              <p className="text-indigo-700 font-medium">Active Users</p>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        {/* <div className="bg-indigo-800 rounded-xl shadow-lg p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400 rounded-full opacity-20 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400 rounded-full opacity-20 -ml-20 -mb-20"></div>
          <div className="relative z-10">
            <svg className="w-12 h-12 text-teal-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-white italic mb-8 max-w-3xl mx-auto">{testimonial.quote}</p>
            <p className="text-teal-300 font-medium">{testimonial.author}</p>
            <p className="text-indigo-200 text-sm">{testimonial.position}</p>
          </div>
        </div> */}
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-teal-400 text-indigo-900 px-8 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition-colors font-medium">
            Start Your Free Trial
          </button>
          <p className="mt-4 text-indigo-700">No credit card required. 14-day free trial.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;