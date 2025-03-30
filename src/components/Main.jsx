import React, {useState, useEffect }from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ByteVance = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  // Animation controls for scroll-triggered animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "testimonial1.jpg",
      quote: "ByteVance transformed our digital presence completely. Their team's expertise and dedication to our project exceeded all expectations."
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GlobalReach",
      image: "testimonial2.jpg",
      quote: "The SEO optimization services provided by ByteVance increased our organic traffic by 200% in just three months. Incredible results!"
    },
    {
      name: "Emily Rodriguez",
      position: "CTO, InnovateNow",
      image: "testimonial3.jpg",
      quote: "Working with ByteVance on our custom software solution was seamless. Their developers are top-notch and delivered exactly what we needed."
    }
  ];

  // Stats data
  const stats = [
    { value: "200+", label: "Clients Worldwide" },
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Industry Awards" }
  ];

  return (
    <div className="font-sans">
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
          <a href="/" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">Home</a>
          <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition ">About Us</a>
          <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition">Services</a>
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
      <a href="/" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">Home</a>
      <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition ">About Us</a>
      <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition">Services</a>
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

      {/* Hero Section with Full-Screen Background Slider */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Slider - Positioned absolutely to fill the entire viewport */}
        <div className="absolute inset-0 w-full h-full">
          <Slider {...sliderSettings} className="h-full">
            {[
              { src: "networking.jpg", alt: "Partnership" },
              { src: "coding.jpg", alt: "Networking" },
              { src: "customer.jpg", alt: "Coding" },
              { src: "partnership.jpg", alt: "Customer" }
            ].map((slide, index) => (
              <div key={index} className="h-screen w-full">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        
        {/* Hero Content - Centered using flex */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
          <motion.div
            className="text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Innovating Your Future
            </motion.h1>
            
            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Empowering businesses with cutting-edge tech solutions that drive growth,
              enhance efficiency, and create exceptional digital experiences.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg shadow-lg">
                Join us now
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Request demo
              </button>
            </motion.div>
            
            <motion.div
              className="mt-12 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      

        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ByteVance delivers innovative digital solutions that help businesses thrive in today's competitive landscape. 
              Our expertise spans across multiple domains to provide comprehensive technology services.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                ),
                title: "Web Development",
                description: "We create responsive, user-friendly websites and web applications that deliver exceptional digital experiences and drive business growth."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                ),
                title: "Mobile App Development",
                description: "Our team builds native and cross-platform mobile applications that provide seamless experiences across all devices and platforms."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                ),
                title: "Digital Marketing",
                description: "We help businesses increase their online visibility and reach their target audience through comprehensive digital marketing strategies."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <a href="/services" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flagship solutions designed to elevate your business to new heights
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "optimizer.jpg",
                title: "ByteVance Optimizer",
                description: "A comprehensive SEO solution that enhances your online presence, improves search rankings, and drives organic traffic to your website.",
                features: ["Keyword optimization", "Technical SEO audit", "Content strategy", "Performance tracking"]
              },
              {
                image: "boost.jpg",
                title: "ByteVance Boost",
                description: "An advanced digital marketing platform that increases your online visibility and helps you reach your target audience effectively.",
                features: ["Social media management", "PPC campaigns", "Email marketing", "Analytics dashboard"]
              },
              {
                image: "enhance.jpg",
                title: "ByteVance Enhance",
                description: "Custom performance solutions tailored to your specific business needs, focusing on optimization and scalability.",
                features: ["System architecture", "Performance tuning", "Load balancing", "Scalability planning"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="/services" 
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Current Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest work and see how we're helping businesses transform digitally
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                image: "logitrust.jpg",
                title: "LogiTrust Logistics Platform",
                description: "A comprehensive logistics management system with real-time tracking, route optimization, and inventory management.",
                client: "LogiTrust Inc.",
                technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
                status: "In Development"
              },
              {
                image: "ecom.jpg",
                title: "FashionFusion E-Commerce",
                description: "A fully responsive e-commerce platform with advanced product filtering, secure payment processing, and customer analytics.",
                client: "FashionFusion Retail",
                technologies: ["Vue.js", "Laravel", "MySQL", "Stripe API"],
                status: "Beta Testing"
              },
              {
                image: "inventory.jpg",
                title: "SmartStock Inventory System",
                description: "An intelligent inventory management solution with predictive analytics, barcode scanning, and automated reordering.",
                client: "Global Distribution Co.",
                technologies: ["Angular", "Python", "PostgreSQL", "TensorFlow"],
                status: "Recently Launched"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Client: <span className="font-medium text-gray-700">{project.client}</span></p>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <a 
                      href={`/project?id=${index}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-gray-700 flex items-center"
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      Live Preview
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="/project" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-md"
            >
              View All Projects
            </a>
          </motion.div>
        </div>
      </section>


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

export default ByteVance;
