import React from 'react';
import heroimage from '../assets/kunle2.jpg'; // ✅ make sure this path is correct

const Hero = () => {
  return (
    <div id="home" className="bg-black text-white text-center py-16 px-4">

      <img 
        src={heroimage}
        alt="Hero Image"
        className="mx-auto mb-8 w-48 h-48 rounded-b-full object-cover transform transition-transform duration-300 hover:scale-105" 
      />

      <h1 className="text-4xl font-bold leading-tight">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Jeremiah Olugbade
        </span>
        , A Frontend Developer
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        I specialize in crafting responsive and user-friendly web applications using 
        HTML, CSS, React, Tailwind CSS, and JavaScript. Let's build something amazing together!
      </p>

      <div className="mt-8 flex justify-center flex-wrap gap-4">

        {/* ✅ ADD YOUR CV PDF HERE */}
        {/* Example: /Jeremiah-Olugbade-CV.pdf (place inside public folder) */}
        <a
          href="/JEREMIAH-RESUME.pdf"   // ✅ Replace this with your CV PDF file
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full"
        >
          Download CV
        </a>

      </div>

    </div>
  );
};

export default Hero;
