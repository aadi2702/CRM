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
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
            Find answers to common questions about our CRM platform
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-indigo-100 rounded-xl overflow-hidden bg-indigo-50 hover:shadow-md transition-all"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-indigo-900">{item.question}</h3>
                <svg 
                  className={`w-5 h-5 text-indigo-700 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0 text-indigo-700">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-indigo-700 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-teal-400 text-indigo-900 px-6 py-3 rounded-lg shadow-md hover:bg-teal-500 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;