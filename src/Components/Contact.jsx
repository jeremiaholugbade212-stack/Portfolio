import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center bg-white">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-4">
        Let’s work together or just say hello!
      </p>

      {/* Email Button */}
      <a
        href="mailto:kunleolugbade146@gmail.com"
        className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300 inline-block"
      >
        Send Email
      </a>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a
          href="https://github.com/jeremiaholugbade212-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jeremiah-olugbade-22736a384"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/KUNLAY_1?s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/just_kunlay?igsh=YzljYTk1ODg3Zg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
