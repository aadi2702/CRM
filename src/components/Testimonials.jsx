import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  // Testimonials data array
  const testimonials = [
    {
      quote: "This CRM platform transformed how we interact with customers. Our sales team can now focus on relationships instead of paperwork.",
      author: "Sarah Johnson",
      position: "VP of Sales, TechCorp Inc.",
      rating: 5,
      avatar: "/api/placeholder/64/64" // Using placeholder for demo
    },
    {
      quote: "The automation features saved us countless hours every week. We've seen a 45% increase in customer engagement since implementation.",
      author: "Michael Chen",
      position: "Customer Success Manager, GrowthWave",
      rating: 5,
      avatar: "/api/placeholder/64/64" // Using placeholder for demo
    },
    {
      quote: "Intuitive interface with powerful analytics. Our team was able to identify new opportunities that we were previously missing.",
      author: "Jessica Rodriguez",
      position: "Director of Marketing, Elevate Solutions",
      rating: 4,
      avatar: "/api/placeholder/64/64" // Using placeholder for demo
    },
    {
      quote: "The onboarding process was smooth and the support team answered all our questions. Impressed with how quickly we were able to customize it for our needs.",
      author: "David Wilson",
      position: "Operations Lead, Nexus Enterprises",
      rating: 5,
      avatar: "/api/placeholder/64/64" // Using placeholder for demo
    },
  ];

  // State for current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">What Our Customers Say</h2>
          <p className="mt-4 text-xl text-indigo-700 max-w-3xl mx-auto">
            Don't just take our word for it — hear from businesses like yours
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Left Navigation Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white p-2 rounded-full shadow-md hover:bg-indigo-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-indigo-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-12 rounded-xl shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-200 rounded-full opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-200 rounded-full opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-teal-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <div className="text-lg md:text-xl lg:text-2xl text-indigo-800 italic mb-8 max-w-3xl">
                "{testimonials[currentIndex].quote}"
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author} 
                  className="w-14 h-14 rounded-full border-4 border-teal-100"
                />
                <div className="ml-4 text-left">
                  <h4 className="font-bold text-indigo-900">{testimonials[currentIndex].author}</h4>
                  <p className="text-indigo-700 text-sm">{testimonials[currentIndex].position}</p>
                  <div className="flex mt-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-4 h-4" 
                        fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"} 
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Navigation Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white p-2 rounded-full shadow-md hover:bg-indigo-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-indigo-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-teal-500 w-6' : 'bg-indigo-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Additional Social Proof */}
        <div className="mt-20 text-center">
          <p className="text-lg text-indigo-700 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {/* Example company logos - using placeholders for demo */}
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="w-32 h-12 bg-indigo-100 rounded flex items-center justify-center">
                <span className="text-indigo-400 font-medium">Company {num}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;