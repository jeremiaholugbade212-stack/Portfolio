import React from 'react'
import aboutimage from '../assets/image2.jpg';

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
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
  I’m a frontend developer with a strong passion for crafting smooth, modern, and 
  meaningful digital experiences. Over time, I’ve developed solid skills in HTML, CSS, 
  JavaScript, React, Vite, and Tailwind CSS — tools I use to bring ideas to life with clean 
  code and thoughtful design.
  <br /><br />
  I enjoy building interfaces that feel natural, responsive, and visually appealing, 
  ensuring every user has a seamless experience across all devices. Whether it's turning 
  a simple concept into a polished layout or refining micro-interactions that make a page 
  feel alive, I love the entire process of creating.
  <br /><br />
  My goal is to build websites and applications that don’t just work, but stand out — 
  fast, accessible, and enjoyable for users. I’m always exploring new technologies, 
  improving my workflow, and pushing myself to create digital products that leave a strong 
  and lasting impression.
</p>


        </div>
      </div>
    </div>
  )
}

export default About
