import React, { useState } from 'react';

const Pricing = () => {
  // State for billing toggle
  const [isAnnual, setIsAnnual] = useState(true);
  
  // Pricing plans data array for easy modification
  const pricingPlans = [ 
    {
      name: "Starter",
      monthlyPrice: "$39",
      annualPrice: "$29",
      billing: "per month",
      description: "Perfect for small businesses getting started with CRM",
      features: [
        "Up to 5 team members",
        "Contact management",
        "Basic lead tracking",
        "Email integration",
        "Mobile app access",
        "8/5 email support"
      ],
      ctaText: "Start Free Trial",
      ctaColor: "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
      popular: false
    },
    {
      name: "Professional",
      monthlyPrice: "$89",
      annualPrice: "$79",
      billing: "per month",
      description: "For growing teams needing more advanced features",
      features: [
        "Up to 25 team members",
        "All Starter features",
        "Marketing automation",
        "AI-powered insights",
        "Custom dashboards",
        "Advanced reporting",
        "Workflow automation",
        "24/7 priority support"
      ],
      ctaText: "Get Started",
      ctaColor: "bg-slate-800 text-white hover:bg-slate-700",
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: "$229",
      annualPrice: "$199",
      billing: "per month",
      description: "For larger organizations with complex requirements",
      features: [
        "Unlimited team members",
        "All Professional features",
        "Dedicated account manager",
        "Custom API integrations",
        "Advanced security controls",
        "White-labeling options",
        "Multi-language support",
        "24/7 VIP support"
      ],
      ctaText: "Contact Sales",
      ctaColor: "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FBFBFB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Simple, Transparent <span className="text-teal-500">Pricing</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan that scales with your business needs. Save up to 20% with annual billing.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center bg-slate-100 p-1.5 rounded-lg">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                isAnnual ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual Billing
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </button>
          </div>
          
          {/* Discount badge */}
          {isAnnual && (
            <div className="mt-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                Save up to 20% with annual billing
              </span>
            </div>  
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-100 relative ${
                plan.popular ? 'md:scale-105 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-teal-500 text-white py-1.5 px-4 rounded-bl-lg font-medium text-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-800">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-2 text-slate-600">{plan.billing}</span>
                </div>
                <p className="mt-4 text-slate-600 min-h-[60px]">{plan.description}</p>
                
                <hr className="my-6 border-slate-200" />
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-8 pb-8">
                <button 
                  className={`w-full py-4 rounded-lg shadow-lg transition-colors font-medium ${plan.ctaColor}`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">Need a custom enterprise solution?</h3>
              <p className="mt-2 text-slate-600">
                Let our experts design a custom plan for your organization's specific needs
              </p>
            </div>
            <button className="bg-teal-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-teal-600 transition-colors font-medium inline-flex items-center whitespace-nowrap">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Schedule a Consultation
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-600">
            All plans include a <span className="font-medium">14-day free trial</span>. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;