import React from "react";
import { FaWhatsapp, FaInstagram, FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-xl mx-auto mb-12 text-lg">
          Want to work with me? Reach out on any of my socials below.  
          I respond fast. ✅
        </p>

        {/* Icon Links */}
        <div className="flex justify-center gap-8 text-4xl">


          {/* Instagram */}
          <a 
            href="https://www.instagram.com/just_kunlay?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-125 transition-transform duration-300"
          >
            <FaInstagram />
          </a>

          {/* Twitter / X */}
          <a 
            href="https://x.com/KUNLAY_1?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-125 transition-transform duration-300"
          >
            <FaXTwitter />
          </a>

          {/* GitHub */}
          <a 
            href="https://www.linkedin.com/in/jeremiah-olugbade-22736a384/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-125 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>

          {/* Gmail */}
          <a 
            href="mailto:kunleolugbade146@gmail.com"
            className="text-red-500 hover:scale-125 transition-transform duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Footer text */}
        <p className="text-gray-500 mt-8">
          Or email me at:  
          <span className="text-green-400">kunleolugbade146@gmail.com</span>
        </p>

      </div>
    </div>
  );
};

export default Contact;
