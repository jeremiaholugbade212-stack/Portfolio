import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "A cafe website",
    description: "A coffee and snack website built with React and Tailwind CSS.",
    link: "https://cafee-7n7f.vercel.app/",
    github: "https://github.com/jeremiaholugbade212-stack/cafee",
    
  },
  {
    title: "medical Website",
    description: "A Medical website built with React, Vite, and Tailwind CSS.",
    link: "https://medical-wupl.vercel.app/",
    github: "https://github.com/jeremiaholugbade212-stack/medical",
  },
  {
    title: "A Gym website",
    description: "A fitness website built with React and Tailwind CSS.",
    link: "https://fitness-app-phi-flax.vercel.app/",
    github: "https://github.com/jeremiaholugbade212-stack/Fitness-app",
    
  },
  {
    title: "A Real-Estate website",
    description: "A Real-estate website built with React and Tailwind CSS.",
    link: "https://realestate-rose-nine.vercel.app/",
    github: "https://github.com/jeremiaholugbade212-stack/realestate",
 
  },
];

export default function Projects() {
  return (
    <section className="p-10 bg-gray-50" id="projects">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <div className="flex space-x-4">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
              >
                Live <FaExternalLinkAlt size={14} />
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
              >
                Code <FaGithub size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
