import React from "react";

// ✅ Import your images
import cafeImg from "../assets/cafe.png";
import realImg from "../assets/real-estate.png";
import fitnessImg from "../assets/fitness.png";
import medicalImg from "../assets/medical.png";

const projects = [
  {
    title: "Cafe Website",
    description: "A cafe website built with React, Tailwind CSS, and Vite.",
    link: "https://cafee-7n7f.vercel.app/",
    image: cafeImg,
  },
  {
    title: "Real Estate Website",
    description: "A Real estate website built with React and Tailwind, and vite.",
    link: "https://realestate-rose-nine.vercel.app/",
    image: realImg,
  },
  {
    title: "Fitness App",
    description: "A clean appointment booking UI built using React and Tailwind.",
    link: "https://fitness-app-phi-flax.vercel.app/",
    image: fitnessImg,
  },
  {
    title: "Medical Booking App",
    description: "A responsive healthcare platform built with React and Tailwind CSS.",
    link: "https://medical-wupl.vercel.app/",
    image: medicalImg,
  },
 
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* ✅ Project Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* View Project Button */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-r from-green-400 to-blue-500 px-4 py-2 rounded-full text-white hover:scale-105 transform duration-300"
              >
                View Project
              </a>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Projects;
