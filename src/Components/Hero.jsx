import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-32"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Hi, I’m <span className="text-blue-600">Jeremiah Olugbade</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A passionate Frontend Developer creating beautiful and functional web
          experiences using React, Tailwind CSS, and modern tools.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300"
        >
          View My Projects
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="./assets/whatsapp.jpg" // 👈 Add your image path here later, e.g. "./assets/myphoto.jpg"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-blue-500"
        />
      </div>
    </section>
  );
};

export default Hero;
