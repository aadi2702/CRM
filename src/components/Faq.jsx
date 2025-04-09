import React, { useState } from 'react';

const FAQ = () => { 
  // FAQ data array for easy modification
  const faqItems = [
    {
      question: "How long does it take to get started with the CRM?",
      answer: "Our onboarding process is designed to be fast and efficient. Most customers can set up their account, import contacts, and start using core features within 24 hours. Our Professional and Enterprise plans include personalized onboarding assistance to ensure a smooth transition."
    },
    {
      question: "Can I migrate data from my existing CRM?",
      answer: "Yes! We provide easy migration tools for popular CRM platforms. Our system supports importing data from CSV files, Salesforce, HubSpot, Zoho, and many other solutions. Enterprise customers receive dedicated migration support from our technical team."
    },
    {
      question: "Is there a limit to how many contacts I can store?",
      answer: "The Starter plan includes up to 5,000 contacts, Professional supports up to 50,000 contacts, and Enterprise has unlimited contacts. If you need a custom solution for your specific needs, please contact our sales team."
    },
    {
      question: "Do you offer integrations with other business tools?",
      answer: "Absolutely! Our CRM integrates seamlessly with popular business tools including Gmail, Outlook, Slack, Zoom, Microsoft Teams, QuickBooks, Zapier, and many more. Professional and Enterprise plans also support custom API integrations."
    },
    {
      question: "Is my data secure with your platform?",
      answer: "Security is our top priority. We employ industry-leading encryption standards, regular security audits, and comprehensive data protection measures. Our platform is GDPR compliant and SOC 2 certified. Enterprise plans include additional security features like SSO and custom data retention policies."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Starter plans include email support during business hours. Professional plans include 24/7 email and chat support with priority response times. Enterprise customers receive VIP support with a dedicated account manager and phone support options. All customers have access to our extensive knowledge base and video tutorials."
    }
  ];

  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function for opening/closing FAQs
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FBFBFB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Frequently Asked <span className="text-teal-500">Questions</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about how RequinOps can transform your customer relationship management
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-16 w-40 h-40 bg-teal-100 rounded-full opacity-50 blur-2xl hidden md:block"></div>
          <div className="absolute -bottom-10 -right-16 w-40 h-40 bg-[#E8F9FF] rounded-full opacity-50 blur-2xl hidden md:block"></div>
          
          {/* FAQ Items */}
          <div className="relative z-10">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="mb-5 bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-slate-800">{item.question}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 transition-all duration-300 ${openIndex === index ? 'bg-teal-500 border-teal-500' : 'bg-white'}`}>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-white' : 'text-slate-600'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center relative z-10">
          <p className="text-slate-600 mb-6 text-lg">Still have questions? We're here to help.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-slate-800 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-slate-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;