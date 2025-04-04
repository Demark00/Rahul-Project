import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Creative & Digital Strategy",
      detail:
        "Popat's brand got a vibrant new voice, courtesy of Click Aarambh. We dove deep into creative and digital strategy, and the results? Let's just say, Popat is now singing a whole new tune. See the magic we crafted!",
    },
    {
      id: 2,
      title: "Branding And Marketing",
      detail:
        "Stallion Hardware? We didn't just market them, we forged their brand. Click Aarambh took their vision and hammered it into a powerhouse identity. See how we built their brand from the ground up.",
    },
    {
      id: 3,
      title: "Mobile and Website UI/UX",
      detail:
        "Embroidery Rooms got a digital makeover, courtesy of Click Aarambh! We didn't just redesign; we re-imagined. See the stunning transformation we crafted for them – proof that we turn online visions into vibrant realities.",
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <div
          className="hero min-h-screen bg-transparent mt-16"
          key={project.id}
        >
          <div
            className={`hero-content flex-col ${
              project.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Right Section */}
            <div className="right w-full lg:w-[55%]">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="w-full rounded-lg shadow-2xl max-h-[500px] object-cover"
                alt="Hero"
              />
            </div>
            {/* Left Section */}
            <div className="left w-full lg:w-[45%] ml-4">
              <div className="flex flex-col items-start gap-1">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold poppins-medium mb-2 ml-4 relative before:content-['—'] before:mr-1 before:text-emerald-500">
                  Project {project.id}
                </p>
                <h1 className="mb-2 poppins-regular text-5xl">
                  {project.title}
                </h1>
                <p className="font-poppins mb-5 poppins-light text-[16px]">
                  {project.detail}
                </p>
                <Link
                  to="/portfolio"
                  className="text-yellow-400 hover:scale-105 
                   transition-all duration-300 ease-in-out text-xl poppins-regular relative before:content-['—>'] before:mr-1 before:text-yellow-400"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;