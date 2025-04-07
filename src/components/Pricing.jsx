import React from 'react';

const Pricing = () => {
  // Pricing plans data array for easy modification
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
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
      ctaColor: "bg-white text-indigo-800 border border-indigo-200 hover:bg-indigo-50",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
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
      ctaColor: "bg-indigo-800 text-white hover:bg-indigo-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
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
      ctaColor: "bg-white text-indigo-800 border border-indigo-200 hover:bg-indigo-50",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
            Choose the perfect plan that scales with your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative ${plan.popular ? 'ring-2 ring-teal-400' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-teal-400 text-indigo-900 py-1 px-4 rounded-bl-lg font-medium text-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-indigo-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-indigo-900">{plan.price}</span>
                  <span className="ml-2 text-indigo-700">{plan.billing}</span>
                </div>
                <p className="mt-4 text-indigo-700 min-h-[60px]">{plan.description}</p>
                
                <hr className="my-6 border-indigo-100" />
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-indigo-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-8 pb-8">
                <button 
                  className={`w-full py-3 rounded-lg shadow-lg transition-colors font-medium ${plan.ctaColor}`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-indigo-700 mb-4">Need a custom solution for your enterprise?</p>
          <button className="bg-teal-400 text-indigo-900 px-8 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition-colors font-medium inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;