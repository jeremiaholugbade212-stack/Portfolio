import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons for open/close menu

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // ✅ Your resume PDF (place it inside "src/assets" folder)
  const resume = "/assets/Jeremiah_Olugbade_Resume.pdf";

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>

          {/* ✅ Resume Button */}
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-5 text-center text-gray-700 font-medium">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            
            {/* ✅ Mobile Resume Button */}
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
