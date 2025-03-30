import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   // State for counters
   const [customerCount, setCustomerCount] = useState(0);
   const [projectCount, setProjectCount] = useState(0);
   const [yearsCount, setYearsCount] = useState(0);
   const [satisfactionCount, setSatisfactionCount] = useState(0);
   
   // State for hero image slider
   const [currentSlide, setCurrentSlide] = useState(0);
   const heroImages = [
     "servi.jpg",
     "serv.jpg",
     "service.jpg"
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
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-blue-600 focus:outline-none"
        >
          {mobileMenuOpen ? (
            // X icon when menu is open
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="space-x-6">
          <a href="/" className="text-blue-600 font-semibold hover:text-blue-800 transition">Home</a>
          <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition ">About Us</a>
          <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">Services</a>
          <a href="Project" className="text-blue-600 font-semibold hover:text-blue-800 transition">Projects</a>
          <a href="faqs" className="text-blue-600 font-semibold hover:text-blue-800 transition">FAQs</a>
        </div>
      </div>
      
      {/* Contact Us Button - Hidden on mobile */}
      <button 
        className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
        onClick={() => window.location.href = '/contact'}
      >
        Contact Us
      </button>
    </nav>

    {/* Mobile Menu - Shown when toggle is clicked */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-white py-4 px-6 shadow-md">
        <div className="flex flex-col space-y-4">
          <a href="/" className="text-blue-600 font-semibold hover:text-blue-800 transition">Home</a>
          <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition ">About Us</a>
          <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">Services</a>
          <a href="Project" className="text-blue-600 font-semibold hover:text-blue-800 transition">Projects</a>
          <a href="faqs" className="text-blue-600 font-semibold hover:text-blue-800 transition">FAQs</a>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-md w-full mt-2"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </button>
        </div>
      </div>
    )}

      {/* Hero Section with Full-Page Background Image Slider */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
          <motion.div
            className="relative z-10 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Innovative solutions to power your business growth and digital transformation
          </p>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors text-lg">
            Explore Our Services
          </button>
          </motion.div>
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

      {/* Core Services Section */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Core Technology Services</h2>
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

      {/* Software Development Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Software Development</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Custom software solutions designed to address your specific business challenges and drive innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Custom Software Development",
                description: "Tailored solutions built from the ground up to meet your unique business requirements and challenges."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Enterprise Solutions",
                description: "Robust, scalable software for large organizations with complex workflows and integration needs."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: "Legacy System Modernization",
                description: "Transform outdated systems into modern, efficient applications without disrupting your operations."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "SaaS Development",
                description: "Build cloud-based software-as-a-service solutions with subscription models and multi-tenant architecture."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* App Development Services */}
<div className="py-16">
  <div className="max-w-6xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">App Development</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Cutting-edge mobile and web applications that engage users and deliver exceptional experiences across all devices
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: "iOS App Development",
          description: "Native iOS applications built with Swift for iPhones and iPads, delivering smooth performance and intuitive user experiences.",
          features: ["Swift & SwiftUI", "Apple Design Guidelines", "App Store Optimization", "Push Notifications"],
          image: "ios.jpg"
        },
        {
          title: "Android App Development",
          description: "Feature-rich Android applications developed with Kotlin or Java, designed to reach the vast Android user base worldwide.",
          features: ["Kotlin & Java", "Material Design", "Google Play Store Support", "Background Services"],
          image: "android.jpg"
        },
        {
          title: "Cross-Platform Development",
          description: "Cost-effective solutions using React Native or Flutter to build apps that work seamlessly across multiple platforms.",
          features: ["React Native", "Flutter", "Code Reusability", "Consistent UI/UX"],
          image: "cross.jpg"
        },
        {
          title: "Progressive Web Apps",
          description: "Web applications that offer app-like experiences with offline capabilities, push notifications, and home screen installation.",
          features: ["Offline Support", "Push Notifications", "Responsive Design", "Fast Loading"],
          image: "web.jpg"
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
        >
          <div className="md:w-2/5 h-64 md:h-auto">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "placeholder.jpg";
              }}
            />
          </div>
          <div className="md:w-3/5 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <h4 className="font-semibold text-gray-800 mb-2">Key Technologies:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

{/* Database Management Services */}
<div className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">Database Management</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Robust database solutions that ensure data integrity, security, and optimal performance for your applications
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
          title: "Database Design & Architecture",
          description: "Expert design of relational and NoSQL database structures optimized for your specific application needs and data requirements.",
          technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          ),
          title: "Database Migration & Optimization",
          description: "Seamless migration between database systems with minimal downtime, along with performance tuning and query optimization.",
          technologies: ["Data Migration", "Performance Tuning", "Query Optimization", "Indexing Strategies"]
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          title: "Database Security & Compliance",
          description: "Implementation of robust security measures to protect your data from unauthorized access and ensure regulatory compliance.",
          technologies: ["Encryption", "Access Control", "Audit Trails", "GDPR Compliance"]
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          title: "Database Maintenance & Support",
          description: "Ongoing monitoring, backup solutions, and troubleshooting to ensure your databases remain healthy and operational at all times.",
          technologies: ["Automated Backups", "Monitoring", "Disaster Recovery", "24/7 Support"]
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          title: "Data Warehousing & Analytics",
          description: "Design and implementation of data warehouses and analytics solutions to transform your raw data into actionable business insights.",
          technologies: ["ETL Processes", "Data Lakes", "Business Intelligence", "Reporting Tools"]
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          ),
          title: "Cloud Database Solutions",
          description: "Implementation and management of cloud-based database services that offer scalability, high availability, and reduced maintenance.",
          technologies: ["AWS RDS", "Azure SQL", "Google Cloud SQL", "DynamoDB"]
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-center mb-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4 text-center">{service.description}</p>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 mb-2 text-center">Technologies:</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {service.technologies.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

{/* AI Model Building Services */}
<div className="py-16">
  <div className="max-w-6xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">AI Model Development</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Harness the power of artificial intelligence with custom models that solve complex problems and drive innovation
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img 
          src="aii.jpg" 
          alt="AI Development" 
          className="w-full h-full object-cover rounded-lg shadow-xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "placeholder.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Custom AI Solutions</h3>
            <p>Tailored artificial intelligence models designed to address your specific business challenges</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-6"
      >
        {[
          {
            title: "Machine Learning Models",
            description: "Custom ML models for classification, regression, clustering, and anomaly detection to extract insights from your data.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            )
          },
          {
            title: "Natural Language Processing",
            description: "NLP solutions for text analysis, sentiment analysis, chatbots, and automated content generation.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )
          },
          {
            title: "Computer Vision",
            description: "Image and video analysis systems for object detection, facial recognition, and visual inspection automation.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )
          },
          {
            title: "Predictive Analytics",
            description: "Forecasting models that analyze historical data to predict future trends and outcomes for informed decision-making.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            )
          },
          {
            title: "Deep Learning",
            description: "Neural network architectures for complex pattern recognition and solving problems that traditional algorithms cannot.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          {
            title: "Reinforcement Learning",
            description: "AI systems that learn optimal behaviors through trial-and-error interactions with dynamic environments.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start"
          >
            <div className="mr-4 bg-blue-50 p-3 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 bg-blue-50 p-8 rounded-xl shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">AI Implementation Process</h3>
          <p className="text-gray-700 mb-6">
            Our structured approach ensures we deliver AI solutions that align perfectly with your business objectives and provide measurable value.
          </p>
          
          <div className="space-y-4">
            {[
              {
                step: "1. Discovery & Requirements",
                description: "We analyze your business needs and identify opportunities where AI can create the most impact."
              },
              {
                step: "2. Data Assessment",
                description: "We evaluate your existing data sources, quality, and structure to determine what's needed for model training."
              },
              {
                step: "3. Model Development",
                description: "Our data scientists build and train custom AI models using the latest techniques and frameworks."
              },
              {
                step: "4. Testing & Validation",
                description: "Rigorous testing ensures the model performs accurately and reliably across various scenarios."
              },
              {
                step: "5. Deployment & Integration",
                description: "We seamlessly integrate the AI solution into your existing systems and workflows."
              }
            ].map((process, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-blue-700">{process.step}</h4>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-center mb-4">Technologies We Use</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "TensorFlow", "PyTorch", "Scikit-learn", "Keras",
                "OpenCV", "NLTK", "Pandas", "NumPy"
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded text-center text-sm font-medium text-gray-700">
                  {tech}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Request AI Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
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
            className="h-20 mr-2"
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
