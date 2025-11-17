import React from "react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiGithub, SiVite, SiFigma 
} from "react-icons/si";

export default function Tools() {
  const tools = [
    { name: "HTML5", icon: <SiHtml5 size={40} /> },
    { name: "CSS3", icon: <SiCss3 size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React", icon: <SiReact size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Vite", icon: <SiVite size={40} /> },
    { name: "GitHub", icon: <SiGithub size={40} /> },
    
  ];

  return (
    <section className="py-20 bg-gray-100 text-black" id="tools">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-10">Tools I Use</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="flex flex-col items-center bg-white shadow-lg p-6 rounded-2xl hover:scale-105 transition"
            >
              <div className="text-blue-500 mb-3">
                {tool.icon}
              </div>
              <p className="font-semibold">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
