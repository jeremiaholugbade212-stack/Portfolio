import React from 'react'
import aboutimage from '../assets/image.jpg';

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>

        {/* Heading */}
        <h2 className='text-4xl font-bold text-center mb-12'>
          About Me
        </h2>

        {/* Content */}
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>

          {/* Image */}
          <img 
            src={aboutimage} 
            alt="About" 
            className='w-72 h-80 rounded-lg object-cover shadow-lg mb-8 md:mb-0 transform transition-transform duration-300 hover:scale-105'
          />

          {/* Text */}
          <p className='text-lg text-gray-300 leading-relaxed max-w-2xl'>
            I’m a frontend developer skilled in HTML, CSS, JavaScript, React, Vite, 
            and Tailwind CSS. I enjoy building responsive, visually appealing, and 
            user-friendly web applications. I love exploring new technologies and 
            turning ideas into clean, functional digital experiences.  
            <br /><br />
            My goal is to create websites that are not just beautiful, but also 
            fast, accessible, and enjoyable for users.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About
