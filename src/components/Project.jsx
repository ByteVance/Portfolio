import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Tech Startup HQ",
    description: "A sleek office space designed to inspire innovation and collaboration. Features open workspaces, meeting pods, and recreational areas.",
    image: "https://via.placeholder.com/600x400?text=Tech+Startup+HQ",
    category: "Office",
  },
  {
    title: "Urban Bistro",
    description: "A cozy dining experience with a modern aesthetic. Combines industrial elements with warm lighting and natural materials.",
    image: "https://via.placeholder.com/600x400?text=Urban+Bistro",
    category: "Restaurant",
  },
  {
    title: "Co-Work Haven",
    description: "Designed for collaboration and productivity. Flexible spaces that adapt to different work styles and team sizes.",
    image: "https://via.placeholder.com/600x400?text=Co-Work+Haven",
    category: "Office",
  },
  {
    title: "Boutique Retreat",
    description: "A luxurious lobby that redefines comfort. Elegant furnishings and thoughtful details create an unforgettable first impression.",
    image: "https://via.placeholder.com/600x400?text=Boutique+Retreat",
    category: "Hospitality",
  },
  {
    title: "Green Residences",
    description: "Sustainable living in harmony with nature. Energy-efficient design with integrated green spaces and natural ventilation.",
    image: "https://via.placeholder.com/600x400?text=Green+Residences",
    category: "Residential",
  },
  {
    title: "Art Space",
    description: "A creative hub for modern art exhibitions. Versatile gallery spaces with optimal lighting and acoustic properties.",
    image: "https://via.placeholder.com/600x400?text=Art+Space",
    category: "Cultural",
  },
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
        <div className="space-x-6 hidden md:block">
          <a href="/" className="text-blue-600 font-semibold hover:text-blue-800 transition">Home</a>
          <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition">About Us</a>
          <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition">Services</a>
          <a href="Project" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">Projects</a>
        </div>
        <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
            onClick={() => window.location.href = '/contact'}
            >
            Contact Us
        </button>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="about.jpg" // Update with a relevant project showcase image
            alt="Projects Showcase"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
       
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Explore our portfolio of innovative designs that transform spaces and elevate experiences.
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto mt-12 mb-8 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1.0)'
                  }}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-white border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition font-medium">
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-200"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Have a project in mind?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life. Our team of experts is ready to transform your ideas into reality.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition shadow-md font-medium">
            Start a Project
          </button>
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

export default ProjectsShowcase;
