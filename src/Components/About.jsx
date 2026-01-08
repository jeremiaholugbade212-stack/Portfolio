import React from 'react'
import aboutimage from '../assets/image2.jpg';

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>

        {/* Heading */}
        <h2 className='text-4xl font-bold text-center mb-12'>
          About Mee
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
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
  I’m a frontend developer with a strong passion for crafting smooth, modern, and 
  meaningful digital experiences. I work with HTML, CSS, JavaScript, React, Vite, and 
  Tailwind CSS, tools I use to turn ideas into clean, functional, and visually appealing 
  interfaces.
  <br /><br />
  I enjoy building layouts that feel natural, responsive, and engaging across all devices. 
  From translating simple concepts into polished UI to refining small interactions that 
  bring a page to life, I love every step of the creation process.
  <br /><br />
  Beyond coding, I have a deep zeal for learning, improving, and growing especially 
  within a collaborative team environment. I enjoy sharing ideas, exploring new 
  technologies, and contributing to solutions that deliver real value.
  <br /><br />
  My goal is to build projects that stand out not just for their beauty, but for their speed, 
  accessibility, and overall user experience. I’m always evolving, always curious, and 
  always ready to take on new challenges with a team that shares the same vision.
</p>



        </div>
      </div>
    </div>
  )
}

export default About
