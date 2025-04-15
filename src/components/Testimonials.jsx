import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  // Testimonials data array
  const testimonials = [
    {
      quote: "This CRM platform transformed how we interact with customers. Our sales team can now focus on relationships instead of paperwork.",
      author: "Sarah Johnson",
      position: "VP of Sales, TechCorp Inc.",
      rating: 5,
      avatar: "https://i.ibb.co/4wH4YJWy/Sarah-Johnson.jpg"
    },
    {
      quote: "The automation features saved us countless hours every week. We've seen a 45% increase in customer engagement since implementation.",
      author: "Michael Chen",
      position: "Customer Success Manager, GrowthWave",
      rating: 5,
      avatar: "https://i.ibb.co/s99WGjVq/Michael-Chen.jpg"
    },
    {
      quote: "Intuitive interface with powerful analytics. Our team was able to identify new opportunities that we were previously missing.",
      author: "Jessica Rodriguez",
      position: "Director of Marketing, Elevate Solutions",
      rating: 4,
      avatar: "https://i.ibb.co/DfP4pQhz/Jessica-Rodriguez.jpg"
    },
    {
      quote: "The onboarding process was smooth and the support team answered all our questions. Impressed with how quickly we were able to customize it for our needs.",
      author: "David Wilson",
      position: "Operations Lead, Nexus Enterprises",
      rating: 5,
      avatar: "https://i.ibb.co/SwQWgQb5/davidd.jpg"
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

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return (
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="w-4 h-4" 
            fill={i < rating ? "currentColor" : "none"} 
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-8 bg-[#FBFBFB]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our <span className="text-teal-500">Customers</span> Say</h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it — hear from businesses like yours
          </p>
        </div>
        
        {/* Featured Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-50 rounded-full opacity-80 -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <svg className="w-8 h-8 text-teal-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-lg text-slate-700 italic mb-8">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full border-2 border-teal-100"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-800">{testimonial.author}</h4>
                    <p className="text-slate-600 text-sm">{testimonial.position}</p>
                    <div className="mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Left Navigation Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white p-2 rounded-full shadow-md hover:bg-slate-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-10 md:p-12 rounded-xl shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400 rounded-full opacity-10 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-400 rounded-full opacity-10 -ml-20 -mb-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author} 
                  className="w-24 h-24 rounded-full border-4 border-slate-600 shadow-lg"
                />
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <svg className="w-10 h-10 text-teal-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-xl md:text-2xl text-white italic mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-slate-300">{testimonials[currentIndex].position}</p>
                  <div className="mt-2">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Navigation Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white p-2 rounded-full shadow-md hover:bg-slate-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-teal-500 w-8' : 'bg-slate-300 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Additional Social Proof */}
        {/* <div className="mt-24">
          <h3 className="text-xl font-semibold text-slate-800 text-center mb-10">Trusted by innovative companies worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="bg-white h-24 rounded-lg shadow-sm border border-slate-100 flex items-center justify-center p-6 filter grayscale hover:grayscale-0 hover:shadow-md transition-all">
                <div className="w-full h-full bg-slate-50 rounded flex items-center justify-center">
                  <span className="text-slate-400 font-medium">Logo {num}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* CTA */}
        {/* <div className="mt-20 bg-white rounded-xl p-10 shadow-sm border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Join thousands of satisfied customers</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Experience how RequinOps can transform your customer relationships and boost your business growth
          </p>
          <button className="bg-teal-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition-colors font-medium">
            Start Free Trial Today
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;