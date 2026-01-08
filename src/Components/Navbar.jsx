import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold">JEREMIAH OLUGBADEy</div>

        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact Me</a>
        </div>

        {/* Desktop Hire Me */}
        <a 
          href="#contact"
          className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Hire Me
        </a>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col space-y-6 pb-6">

          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact Me</a>

          {/* Mobile Hire Me */}
          <a 
            href="#contact"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full w-fit"
          >
            Hire Me
          </a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
