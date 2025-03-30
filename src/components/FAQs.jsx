import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQs = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does ByteVance offer?",
      answer: "ByteVance offers a comprehensive range of software development and IT services including web development, mobile app development, custom software solutions, UI/UX design, cloud solutions, and IT consulting. We specialize in creating tailored digital solutions to help businesses transform and grow in the digital landscape."
    },
    {
      question: "How do I request a quote for my project?",
      answer: "You can request a quote by filling out the contact form on our Contact Us page, sending an email to info@bytevance.com, or calling our office at +256 (759) 452-215. Please provide as much detail about your project as possible so we can give you an accurate estimate."
    },
    {
      question: "What is your development process?",
      answer: "Our development process follows an agile methodology with six key phases: Discovery & Planning, Design, Development, Testing & QA, Deployment, and Maintenance & Support. We emphasize collaboration, regular communication, and iterative development to ensure your project meets your expectations."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on the scope, complexity, and requirements. A simple website might take 4-6 weeks, while a complex custom software solution could take several months. During our initial consultation, we'll provide you with a detailed timeline based on your specific project needs."
    },
    {
      question: "Do you provide maintenance and support after project completion?",
      answer: "Yes, we offer ongoing maintenance and support services for all our projects. We provide different support packages to suit your needs, from basic maintenance to comprehensive 24/7 support. Our team is committed to ensuring your digital solutions continue to perform optimally."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including but not limited to: React, Angular, Vue.js, Node.js, Python, PHP, .NET, Java, Swift, Kotlin, AWS, Azure, Google Cloud, MongoDB, MySQL, PostgreSQL, and more. Our team stays up-to-date with the latest technologies to provide cutting-edge solutions."
    },
    {
      question: "Can you help with an existing project that needs improvements?",
      answer: "Absolutely! We offer code review, refactoring, and enhancement services for existing projects. Our team can analyze your current solution, identify areas for improvement, and implement changes to optimize performance, security, and user experience."
    },
    {
      question: "How do you ensure the security of the applications you develop?",
      answer: "Security is a top priority in all our development projects. We implement industry best practices for secure coding, conduct regular security audits and testing, use encryption for sensitive data, implement authentication and authorization protocols, and stay updated on the latest security threats and solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
        <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition">Services</a>
        <a href="Project" className="text-blue-600 font-semibold hover:text-blue-800 transition">Projects</a>
        <a href="faqs" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">FAQs</a>
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
      <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition">About Us</a>
      <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition">Services</a>
      <a href="Project" className="text-blue-600 font-semibold hover:text-blue-800 transition">Projects</a>
      <a href="faqs" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">FAQs</a>
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-md w-full mt-2"
        onClick={() => window.location.href = '/contact'}
      >
        Contact Us
      </button>
    </div>
  </div>
)}  
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="question.jpg" // Replace with an appropriate FAQ page image
            alt="Frequently Asked Questions"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 , delay: 0.2}}
        >
          <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-16 px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Have Questions? We've Got Answers</h2>
            <p className="text-gray-600">
              Browse through our most frequently asked questions. If you can't find what you're looking for, 
              please don't hesitate to <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96 p-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Still Have Questions Section */}
        <motion.div
          className="mt-16 bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Contact us for personalized assistance with your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition shadow-md font-medium"
            >
              Contact Us
            </a>
            <a
              href="tel:+256759452215"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition shadow-md font-medium"
            >
              Call Us
            </a>
          </div>
        </motion.div>
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

export default FAQs;
