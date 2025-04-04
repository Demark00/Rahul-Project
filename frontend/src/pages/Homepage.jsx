import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Projects from '../components/Projects';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-transparent mb-40 mt-16" style={{ backgroundColor: '#25262A' }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="right w-full lg:w-[55%]">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="w-full rounded-lg shadow-2xl max-h-[500px] object-cover"
              alt="Hero"
            />
          </div>
          <div className="left w-full lg:w-[45%]">
            <div className="flex flex-col items-start">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold poppins-medium mb-2 ml-4 relative before:content-['—'] before:mr-1 before:text-emerald-500">
                Introducing
              </p>
              <h1 className="text-7xl poppins-semibold mb-2">Attract.</h1>
              <h1 className="mb-2 poppins-regular text-7xl">Convert. Grow</h1>
              <p className="font-poppins mb-5 poppins-light text-lg">
                Click Aarambh, Digital marketing agency near me. We partner with B2B, B2C, D2C, and startup businesses, for brand design, user experience, and digital product design.
              </p>
              <Link to="/contact" className="btn py-8 px-12 bg-gradient-to-r from-yellow-400 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out text-gray-950 text-lg rounded-xl font-medium poppins-regular shadow-[0_5px_20px_rgba(255,235,59,0.5)]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section mt-12">
        <div className="hero min-h-screen bg-transparent">
          <div className="hero-content flex-col lg:flex-row">
            <div className="right w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card />
              <div className="mt-9">
                <Card />
              </div>
              <Card />
              <div className="mt-9">
                <Card />
              </div>
            </div>
            <div className="left w-full lg:w-[40%]">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold poppins-medium mb-2 ml-4 relative before:content-['—'] before:mr-1 before:text-emerald-500">
                Our Skills
              </p>
              <h1 className="text-7xl poppins-semibold mb-2">Attract.</h1>
              <h1 className="mb-2 poppins-regular text-7xl">Convert. Grow</h1>
              <p className="font-poppins mb-5 poppins-light text-lg">
                Click Aarambh, Digital marketing agency near me. We partner with B2B, B2C, D2C, and startup businesses, for brand design, user experience, and digital product design.
              </p>
              <Link to="/contact" className="btn py-8 px-12 bg-gradient-to-r from-yellow-400 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out text-gray-950 text-lg rounded-xl font-medium poppins-regular">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mt-14 mx-auto flex flex-col">
        <Projects />
        <div className="text-center mt-4">
          <Link to="/portfolio" className="btn py-8 px-12 bg-gradient-to-r from-neutral-400 to-neutral-100 hover:from-neutral-400 hover:to-neutral-500 hover:scale-105 transition-all duration-300 ease-in-out text-gray-950 text-lg rounded-xl font-medium poppins-regular">
            View All
          </Link>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section container mx-auto mt-32 px-6 mb-56">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Box 1 */}
          <div className="flex flex-col items-center justify-center p-6 text-white min-h-80 gap-3 rounded-l-4xl" style={{ backgroundColor: "#25262A" }}>
            <h3 className="text-6xl font-mono font-medium text-[#64F4AB]">65</h3>
            <p className="text-2xl poppins-light font-extrabold">Happy Clients</p>
          </div>
          {/* Box 2 */}
          <div className="flex flex-col items-center justify-center p-6 text-white  min-h-72 gap-3" style={{ backgroundColor: "#25262A" }}>
            <h3 className="text-6xl font-mono font-medium text-[#64F4AB]">87</h3>
            <p className="text-2xl poppins-light">Projects Done</p>
          </div>
          {/* Box 3 */}
          <div className="flex flex-col items-center justify-center p-6 text-white  min-h-72 gap-3" style={{ backgroundColor: "#25262A" }}>
            <h3 className="text-6xl font-mono font-medium text-[#64F4AB]">28</h3>
            <p className="text-2xl poppins-light">International Clients</p>
          </div>
          {/* Box 4 */}
          <div className="flex flex-col items-center justify-center p-6 text-white  min-h-72 gap-3 rounded-r-4xl" style={{ backgroundColor: "#25262A" }}>
            <h3 className="text-6xl font-mono font-medium text-[#64F4AB]">5</h3>
            <p className="text-2xl poppins-light">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section bg-[#25262A] w-[90%] max-w-5xl h-auto md:h-96 rounded-3xl mx-auto px-4 py-10 md:py-16 flex flex-col items-center text-center mt-28">
        <div className="w-full md:w-[80%] lg:w-[70%]">
          <h1 className="poppins-medium text-4xl md:text-5xl mt-5 text-white">Let’s Chat 👋 Consultation Is Free!</h1>
          <p className="poppins-extralight text-gray-300 mt-4 text-lg">
            Just shoot us a quick message with any doubts or questions you have. We’d be thrilled to discuss your business targets and show you how our digital marketing services can help you reach them.
          </p>
          <Link to="/contact" className="btn mt-6 py-4 px-8 bg-gradient-to-r from-yellow-400 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out text-gray-950 text-lg rounded-xl font-medium poppins-regular">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
