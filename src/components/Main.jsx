import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ByteVance = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

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
        <div className="space-x-6 hidden md:block">
          <a href="/" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">Home</a>
          <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition">About Us</a>
          <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition">Services</a>
          <a href="Project" className="text-blue-600 font-semibold hover:text-blue-800 transition">Projects</a>
        </div>
        <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
            onClick={() => window.location.href = '/contact'}
            >
            Contact Us
        </button>
      </nav>

      {/* Hero Section with Full-Screen Background Slider */}
      <section className="relative h-screen w-full">
        {/* Background Slider - Positioned absolutely to fill the entire viewport */}
        <div className="absolute inset-0 w-full h-full">
          <Slider {...sliderSettings} className="h-full">
            <div className="h-screen w-full">
              <img 
                src="networking.jpg" 
                alt="Partnership" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-screen w-full">
              <img 
                src="coding.jpg" 
                alt="Networking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-screen w-full">
              <img 
                src="customer.jpg" 
                alt="Coding" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-screen w-full">
              <img 
                src="partnership.jpg" 
                alt="Customer" 
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Hero Content - Centered in the viewport */}
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white">Innovating Your Future</h1>
            <p className="mt-4 text-xl text-gray-200">
              Empowering businesses with cutting-edge tech solutions
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md mr-4 hover:bg-blue-700 transition-colors text-lg">
                Join us now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Request demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold">Featured Services</h2>
        <div className="flex justify-center mt-6 space-x-8">
          <div>
            <img src="/images/optimizer.jpg" alt="Optimizer" className="w-32 h-32 mx-auto" />
            <h3 className="font-semibold">ByteVance Optimizer</h3>
            <p className="text-gray-600">Enhancing your online presence.</p>
          </div>
          <div>
            <img src="/images/boost.jpg" alt="Boost" className="w-32 h-32 mx-auto" />
            <h3 className="font-semibold">ByteVance Boost</h3>
            <p className="text-gray-600">Increasing online visibility.</p>
          </div>
          <div>
            <img src="/images/enhance.jpg" alt="Enhance" className="w-32 h-32 mx-auto" />
            <h3 className="font-semibold">ByteVance Enhance</h3>
            <p className="text-gray-600">Custom performance solutions.</p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold">Current Projects</h2>
        <div className="flex justify-center mt-6 space-x-8">
          <div>
            <img src="logitrust.jpg" alt="Web App UI" className="w-48 h-32 mx-auto" />
            <h3 className="font-semibold">Logistic Application</h3>
            <p className="text-gray-600">Design for a productivity app.</p>
          </div>
          <div>
            <img src="ecom.jpg" alt="E-Commerce Site" className="w-48 h-32 mx-auto" />
            <h3 className="font-semibold">E-Commerce Site</h3>
            <p className="text-gray-600">Responsive design for online sales.</p>
          </div>
          <div>
            <img src="inventory.jpg" alt="Travel Blog" className="w-48 h-32 mx-auto" />
            <h3 className="font-semibold">Inventory System</h3>
            <p className="text-gray-600">Design for wanderlust lovers.</p>
          </div>
        </div>
      </section>

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

export default ByteVance;
