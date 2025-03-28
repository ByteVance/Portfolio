import React, { useState, useEffect } from "react";

const Services = () => {
   // State for counters
   const [customerCount, setCustomerCount] = useState(0);
   const [projectCount, setProjectCount] = useState(0);
   const [yearsCount, setYearsCount] = useState(0);
   const [satisfactionCount, setSatisfactionCount] = useState(0);
   
   // State for hero image slider
   const [currentSlide, setCurrentSlide] = useState(0);
   const heroImages = [
     "service.jpg",
     "servi.jpg",
     "serv.jpg"
   ];

   // Counter animation effect
   useEffect(() => {
     const customerTarget = 500;
     const projectTarget = 1200;
     const yearsTarget = 15;
     const satisfactionTarget = 98;
     
     const duration = 8000; // 8 seconds for the animation
     const steps = 50;
     const customerStep = customerTarget / steps;
     const projectStep = projectTarget / steps;
     const yearsStep = yearsTarget / steps;
     const satisfactionStep = satisfactionTarget / steps;
     
     let currentStep = 0;
     
     const interval = setInterval(() => {
       currentStep++;
       
       setCustomerCount(Math.min(Math.round(customerStep * currentStep), customerTarget));
       setProjectCount(Math.min(Math.round(projectStep * currentStep), projectTarget));
       setYearsCount(Math.min(Math.round(yearsStep * currentStep), yearsTarget));
       setSatisfactionCount(Math.min(Math.round(satisfactionStep * currentStep), satisfactionTarget));
       
       if (currentStep >= steps) {
         clearInterval(interval);
       }
     }, duration / steps);
     
     return () => clearInterval(interval);
   }, []);
   
   // Hero image slider effect
   useEffect(() => {
     const sliderInterval = setInterval(() => {
       setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
     }, 5000); // Change slide every 5 seconds
     
     return () => clearInterval(sliderInterval);
   }, [heroImages.length]);

  return (
    <div className="bg-white text-black font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 shadow-md sticky top-0 bg-white z-40">
        <div className="flex items-center">
          <img
            src="bytevance.png"
            alt="ByteVance Logo"
            className="h-14 mr-2"
          />
          <span className="text-xl font-bold">ByteVance</span>
        </div>
        <div className="space-x-6 hidden md:block">
          <a href="/" className="text-blue-600 font-semibold hover:text-blue-800 transition">Home</a>
          <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition">About Us</a>
          <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">Services</a>
          <a href="Project" className="text-blue-600 font-semibold hover:text-blue-800 transition">Projects</a>
        </div>
        <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
            onClick={() => window.location.href = '/contact'}
            >
            Contact Us
        </button>
      </nav>

      {/* Hero Section with Full-Page Background Image Slider */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Services Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
         
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
       
        {/* Hero Content */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Innovative solutions to power your business growth and digital transformation
          </p>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors text-lg">
            Explore Our Services
          </button>
        </div>
       
        {/* Slider Navigation Dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full mx-2 focus:outline-none transition-all ${
                index === currentSlide ? "bg-white scale-125" : "bg-gray-400 opacity-70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center z-20 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Cloud Hosting",
              description: "Reliable cloud solutions that scale with your business needs. Our infrastructure ensures 99.9% uptime and seamless performance.",
              image: "cloud-hosting.jpg"
            },
            {
              name: "Cybersecurity",
              description: "Advanced threat protection to safeguard your valuable data and systems from evolving cyber threats and vulnerabilities.",
              image: "cybersecurity.jpg"
            },
            {
              name: "AI Analytics",
              description: "Data-driven insights powered by artificial intelligence to optimize operations and make informed business decisions.",
              image: "ai-analytics.jpg"
            }
          ].map((service, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentNode.className = "w-full h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-4";
                    e.target.parentNode.innerHTML = `<div class="text-blue-500 font-bold text-lg">${service.name}</div>`;
                  }}
                />
              </div>
              <h3 className="mt-4 font-semibold text-xl text-blue-700">{service.name}</h3>
              <p className="text-gray-600 my-4">
                {service.description}
              </p>
              <button className="mt-2 text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Custom Software Development",
                description: "Tailored software solutions designed to address your specific business challenges and requirements."
              },
              {
                name: "IT Consulting",
                description: "Expert guidance to help you navigate technology decisions and implement effective IT strategies."
              },
              {
                name: "Digital Transformation",
                description: "Comprehensive services to modernize your business processes and leverage digital technologies."
              },
              {
                name: "24/7 Technical Support",
                description: "Round-the-clock assistance to ensure your systems run smoothly and issues are resolved promptly."
              }
            ].map((service, index) => (
              <div key={index} className="flex p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-700">{service.name}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact By The Numbers</h2>
         
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Customer Counter */}
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{customerCount}+</div>
              <div className="text-xl">Happy Customers</div>
              <div className="mt-4 h-1 w-16 bg-white mx-auto"></div>
              <p className="mt-4 text-blue-100">Trusted by businesses worldwide</p>
            </div>
           
            {/* Projects Counter */}
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{projectCount}+</div>
              <div className="text-xl">Projects Completed</div>
              <div className="mt-4 h-1 w-16 bg-white mx-auto"></div>
              <p className="mt-4 text-blue-100">Delivering excellence consistently</p>
            </div>
           
            {/* Years Counter */}
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{yearsCount}</div>
              <div className="text-xl">Years Experience</div>
              <div className="mt-4 h-1 w-16 bg-white mx-auto"></div>
              <p className="mt-4 text-blue-100">Industry expertise you can trust</p>
            </div>
           
            {/* Satisfaction Counter */}
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{satisfactionCount}%</div>
              <div className="text-xl">Client Satisfaction</div>
              <div className="mt-4 h-1 w-16 bg-white mx-auto"></div>
              <p className="mt-4 text-blue-100">Committed to your success</p>
            </div>
          </div>
         
          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-xl mb-6">Ready to join our growing list of satisfied clients?</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-800 text-white">
        <div className="flex items-center justify-center mb-6">
          <img
            src="gray.png"
            alt="ByteVance Logo"
            className="h-14 mr-2"
          />
          <h2 className="text-xl font-bold">ByteVance</h2>
        </div>
        <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
        <div className="mt-2 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded-l-md w-64 text-black"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
            Subscribe
          </button>
        </div>
       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8 text-gray-300">
          <div>
            <h4 className="font-semibold text-white">Product</h4>
            <p>Features</p>
            <p>Pricing</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Resources</h4>
            <p>Blog</p>
            <p>User guides</p>
            <p>Webinars</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Plans & Pricing</h4>
            <p>Personal</p>
            <p>Start up</p>
            <p>Organization</p>
          </div>
        </div>
        <p className="mt-6 text-gray-400">&copy; 2024 ByteVance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
