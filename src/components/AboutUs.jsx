import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">About Us</a>
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
      <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b border-blue-600 pb-1 inline-block">About Us</a>
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

      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="about-hero.jpg"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
       
        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            We are a team of passionate innovators dedicated to transforming businesses through technology.
          </p>
        </motion.div>
      </div>

      {/* Background Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Background
          </motion.h2>
         
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="history.jpg"
                alt="ByteVance History"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
           
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Journey</h3>
              <p className="text-gray-700 mb-4">
                Founded in 2015, ByteVance began as a small startup with a big vision. Our founders,
                John Doe and Jane Smith, recognized the need for innovative technology solutions that
                could help businesses navigate the increasingly complex digital landscape.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a team of five passionate technologists has grown into a global
                company with offices in three continents and over 200 employees. Throughout our
                growth, we've maintained our commitment to innovation, quality, and customer satisfaction.
              </p>
              <p className="text-gray-700">
                Today, ByteVance is recognized as an industry leader, having helped transform
                hundreds of businesses through our cutting-edge solutions and dedicated support.
              </p>
            </motion.div>
          </div>
         
          <motion.div 
            className="mt-12 bg-white p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-center mb-4">Key Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { year: "2015", event: "Founded in San Francisco" },
                { year: "2018", event: "Expanded to Europe & Asia" },
                { year: "2021", event: "Reached 200+ employees globally" },
                { year: "2022", event: "Launched AI-powered solutions" },
                { year: "2023", event: "Opened new headquarters in Kampala" },
                { year: "2024", event: "Achieved carbon-neutral operations" }
              ].map((milestone, index) => (
                <motion.div 
                  key={index}
                  className="border-l-4 border-blue-500 pl-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="font-bold">{milestone.year}</p>
                  <p className="text-gray-600">{milestone.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To empower individuals and organizations through innovative technology solutions that enhance productivity, collaboration, and data-driven decision-making.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be a global leader in providing cutting-edge tools and platforms that transform the way people work and interact with information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section - Smaller cards */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
         
          {/* CEO Card - Centered */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center p-6 rounded-lg shadow-lg bg-white border border-gray-100 max-w-sm hover:shadow-xl transition-shadow">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src="liaam.jpeg"
                  alt="Luganzi Mathias Joseph"
                  className="w-full h-auto max-h-64 object-cover"
                />
              </div>
              <div className="w-16 h-1 bg-blue-600 mx-auto my-3"></div>
              <h3 className="font-bold text-xl">Luganzi Mathias Joseph</h3>
              <p className="text-gray-500 text-sm mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm mb-4">
                Visionary leader with over 15 years of experience in technology innovation and business strategy.
              </p>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                View Profile
              </button>
            </div>
          </motion.div>
         
          {/* Other team members - 4 per row on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Katende Ronnie Magala",
                role: "CTO",
                image: "ronnie (1).jpeg",
                bio: "Tech expert specializing in AI and cloud architecture."
              },
              {
                name: "Kabogere Salimu",
                role: "Head of Marketing",
                image: "salimu.jpeg",
                bio: "Creative strategist with a passion for brand storytelling."
              },
              {
                name: "Nassali Catherine Laura",
                role: "HR Manager",
                image: "catherine.jpeg",
                bio: "People-focused professional building our exceptional team."
              },
              {
                name: "Kashara Alvin Ssali",
                role: "Lead Developer",
                image: "kash.jpg",
                bio: "Coding wizard who turns complex problems into elegant solutions."
              }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 rounded-lg shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="rounded-lg overflow-hidden mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="w-12 h-0.5 bg-blue-600 mx-auto my-2"></div>
                <h3 className="font-bold text-base">{member.name}</h3>
                <p className="text-gray-500 text-xs mb-1">{member.role}</p>
                <p className="text-gray-600 text-xs mb-3">{member.bio}</p>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs hover:bg-blue-700 transition-colors">
                  View Profile
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
<div className="py-16">
  <div className="max-w-5xl mx-auto text-center px-4">
    <motion.h2 
      className="text-3xl font-bold mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Our Core Values
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {[
        {
          value: "Integrity",
          description: "We conduct our business with the highest level of integrity and transparency.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          value: "Customer Focus",
          description: "We prioritize our customers' needs and strive to exceed expectations.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          value: "Excellence",
          description: "We are committed to delivering high-quality solutions.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          )
        },
        {
          value: "Innovation",
          description: "We embrace creativity and innovation to provide cutting-edge solutions.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )
        }
      ].map((item, index) => (
        <motion.div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-blue-50 p-3 rounded-full">
              {item.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.value}</h3>
          <div className="w-12 h-1 bg-blue-600 mx-auto my-3"></div>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

{/* Testimonials Section */}
<div className="bg-blue-50 py-16">
  <div className="max-w-5xl mx-auto px-4">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Don't just take our word for it. Here's what some of our clients have to say about working with ByteVance.
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          quote: "ByteVance transformed our business with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations.",
          author: "Masagazi Ruth",
          position: "CTO, TechGlobal",
          image: "testimonial1.jpg"
        },
        {
          quote: "Working with ByteVance has been a game-changer for our company. Their expertise in AI and app development helped us stay ahead of the competition.",
          author: "Nantongo Joselyn",
          position: "CEO, InnovateCorp",
          image: "testimonial2.jpg"
        },
        {
          quote: "The team at ByteVance understood our needs perfectly and delivered a solution that not only met but exceeded our requirements. Highly recommended!",
          author: "Nahereza Alvin",
          position: "Product Manager, NextGen Solutions",
          image: "testimonial3.jpg"
        }
      ].map((testimonial, index) => (
        <motion.div 
          key={index}
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="mb-4">
            <svg className="h-8 w-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
            <div className="flex items-center">
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "placeholder-avatar.jpg";
                }}
              />
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

{/* Partners Section
<div className="py-16">
  <div className="max-w-5xl mx-auto px-4">
    <motion.h2 
      className="text-3xl font-bold text-center mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Our Partners
    </motion.h2>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        "partner1.png", "partner2.png", "partner3.png", "partner4.png",
        "partner5.png", "partner6.png", "partner7.png", "partner8.png"
      ].map((partner, index) => (
        <motion.div 
          key={index}
          className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <img 
            src={partner} 
            alt={`Partner ${index + 1}`} 
            className="max-h-16"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "placeholder-logo.png";
            }}
          />
        </motion.div>
      ))}
    </div>
  </div>
</div> */}

{/* CTA Section */}
<div className="bg-blue-600 text-white py-16">
  <div className="max-w-4xl mx-auto text-center px-4">
    <motion.h2 
      className="text-3xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Ready to Transform Your Business?
    </motion.h2>
    <motion.p 
      className="text-blue-100 mb-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      Join hundreds of satisfied clients who have partnered with ByteVance to drive innovation and growth. Let's build something amazing together.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <button 
        className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors shadow-md"
        onClick={() => window.location.href = '/contact'}
      >
        Contact Us Today
      </button>
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

export default AboutUs;
