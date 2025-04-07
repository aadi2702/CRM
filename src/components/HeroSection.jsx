import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight">
              Elevate Your <span className="text-teal-500">Customer Experience</span>
            </h1>
            <p className="mt-6 text-lg text-indigo-700 max-w-lg">
              A powerful CRM platform that helps businesses of all sizes manage relationships, 
              automate processes, and drive revenue growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-800 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors text-lg font-medium">
                Get Started Free
              </button>
              <button className="bg-white text-indigo-800 border border-indigo-200 px-8 py-4 rounded-lg shadow-md hover:bg-indigo-50 transition-colors text-lg font-medium flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                See How It Works
              </button>
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex items-center">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm text-indigo-700">
                  <span className="font-medium">4.9/5</span> from over <span className="font-medium">2,000+</span> reviews
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-70 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full opacity-70 blur-2xl"></div>
              <img 
                src="https://i.ibb.co/PGYzXsjD/dashboard.png"
                alt="CRM Dashboard Preview" 
                className="relative z-10 rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;