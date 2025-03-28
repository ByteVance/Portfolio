import React from "react";

const AboutUs = () => {
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
          <a href="AboutUs" className="text-blue-600 font-semibold hover:text-blue-800 transition border-b-2 border-blue-600 pb-1">About Us</a>
          <a href="Services" className="text-blue-600 font-semibold hover:text-blue-800 transition">Services</a>
          <a href="Project"  className="text-blue-600 font-semibold hover:text-blue-800 transition">Projects</a>
        </div>
        <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
            onClick={() => window.location.href = '/contact'}
            >
            Contact Us
        </button>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="relative h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="about-hero.jpg"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
       
        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            We are a team of passionate innovators dedicated to transforming businesses through technology.
          </p>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Background</h2>
         
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="history.jpg"
                alt="ByteVance History"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
           
            <div className="md:w-1/2">
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
            </div>
          </div>
         
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-center mb-4">Key Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold">2015</p>
                <p className="text-gray-600">Founded in San Francisco</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold">2018</p>
                <p className="text-gray-600">Expanded to Europe & Asia</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold">2021</p>
                <p className="text-gray-600">Reached 200+ employees globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="text-gray-600 mt-2">
          To empower individuals and organizations through innovative technology solutions that enhance productivity, collaboration, and data-driven decision-making.
        </p>
        <h2 className="text-2xl font-bold mt-6">Our Vision</h2>
        <p className="text-gray-600 mt-2">
          To be a global leader in providing cutting-edge tools and platforms that transform the way people work and interact with information.
        </p>
      </div>

      {/* Team Section - Smaller cards */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
       
        {/* CEO Card - Smaller and centered */}
        <div className="flex justify-center mb-10">
          <div className="text-center p-4 rounded-lg shadow-md bg-white border border-gray-100 max-w-xs">
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src="liam.jpg"
                alt="Luganzi Mathias Joseph"
                className="w-full h-auto max-h-60 object-cover"
              />
            </div>
            <div className="w-16 h-1 bg-purple-600 mx-auto my-2"></div>
            <h3 className="font-bold text-lg">Luganzi Mathias Joseph</h3>
            <p className="text-gray-500 text-sm mb-2">CEO & Founder</p>
            <p className="text-gray-600 text-sm mb-4">
              Visionary leader with over 15 years of experience in technology innovation and business strategy.
            </p>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition-colors">
              View Profile
            </button>
          </div>
        </div>
       
        {/* Other 4 team members - 2 per row, smaller cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
            <div key={index} className="text-center p-3 rounded-lg shadow-md bg-white border border-gray-100">
              <div className="rounded-lg overflow-hidden mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto max-h-48 object-cover"
                />
              </div>
              <div className="w-12 h-0.5 bg-purple-600 mx-auto my-2"></div>
              <h3 className="font-bold text-base">{member.name}</h3>
              <p className="text-gray-500 text-xs mb-1">{member.role}</p>
              <p className="text-gray-600 text-xs mb-3">{member.bio}</p>
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs hover:bg-blue-700 transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {["Integrity", "Customer Focus", "Excellence", "Innovation"].map((value, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-green-600">{value}</h3>
                <div className="w-8 h-1 bg-green-600 mx-auto my-3"></div>
                <p className="text-sm text-gray-600">
                  {[
                    "We conduct our business with the highest level of integrity and transparency.",
                    "We prioritize our customers' needs and strive to exceed expectations.",
                    "We are committed to delivering high-quality solutions.",
                    "We embrace creativity and innovation to provide cutting-edge solutions."
                  ][index]}
                </p>
              </div>
            ))}
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

export default AboutUs;
