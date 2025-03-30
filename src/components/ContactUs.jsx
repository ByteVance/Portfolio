import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: "Thank you! Your message has been sent successfully." });
   
    // In a real application, you would send the form data to your backend
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setFormStatus({
    //     submitted: true,
    //     success: data.success,
    //     message: data.message
    //   });
    // })
    // .catch(error => {
    //   setFormStatus({
    //     submitted: true,
    //     success: false,
    //     message: "There was an error sending your message. Please try again."
    //   });
    // });
   
    // Reset form after successful submission
    if (formStatus.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
     
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: "" });
      }, 5000);
    }
  };

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


      {/* Hero Section */}
      <div className="relative h-[70vh] w-full flex items-center justify-center">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src="contact.jpg" // Replace with an appropriate contact page image
      alt="Contact Us"
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
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
    <p className="text-xl text-white max-w-2xl mx-auto">
      We'd love to hear from you. Reach out to us with any questions or inquiries.
    </p>
  </motion.div>
</div>

      {/* Contact Information Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600 mb-2">Main Office</p>
            <p className="text-blue-600 font-semibold">+256 (759) 452-215</p>
            <p className="text-gray-600 mt-4 mb-2">Support</p>
            <p className="text-blue-600 font-semibold">+256 (764) 380-358</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600 mb-2">General Inquiries</p>
            <p className="text-blue-600 font-semibold">info@bytevance.com</p>
            <p className="text-gray-600 mt-4 mb-2">Support</p>
            <p className="text-blue-600 font-semibold">support@bytevance.com</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600 mb-2">Headquarters</p>
            <p className="text-blue-600 font-semibold">Makerere Kampala</p>
            <p className="text-blue-600 font-semibold">Kikoni, Makerere </p>
            <p className="text-gray-600 mt-4 mb-2">Office Hours</p>
            <p className="text-blue-600 font-semibold">Monday - Friday: 9AM - 6PM</p>
          </motion.div>
        </div>

        {/* Map and Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold p-6 border-b">Our Location</h2>
            <div className="h-[400px] w-full">
              {/* Replace with your actual Google Maps or other map provider embed code */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573969501947!2d32.56681491475496!3d0.3244088997517752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8080541c63%3A0x1b599f57f1b7c0a!2sMakerere%20University!5e0!3m2!1sen!2sus!4v1626384420777!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ByteVance Office Location"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Getting Here</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800">Public Transit</h4>
                  <p className="text-gray-600">Rubis Petrol Station (0.4 miles)</p>
                  <p className="text-gray-600">Bus Lines: 14, 30, 45</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Parking</h4>
                  <p className="text-gray-600">Public parking available at 5th & Mission Garage</p>
                  <p className="text-gray-600">Limited street parking</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold p-6 border-b">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="p-6">
              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Bivox Future"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(+256) 7123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please provide details about your inquiry..."
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                </label>
              </div>
              
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition shadow-md font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
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

export default ContactUs;