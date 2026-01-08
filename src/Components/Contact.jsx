import React, { useRef, useState } from "react";
import { FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// read EmailJS config from Vite env vars
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";

// Initialize EmailJS once (safe if PUBLIC_KEY is empty it will be a no-op)
if (EMAILJS_PUBLIC_KEY) {
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  } catch (e) {
    // initialization failure is non-fatal here; we'll catch on send
  }
}

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setMessage("Email service not configured. Please set up EmailJS keys.");
      setLoading(false);
      return;
    }

    try {
      // collect form values explicitly so template variable names are clear
      const fd = new FormData(formRef.current);
      const templateParams = {
        user_name: fd.get("user_name") || "",
        user_email: fd.get("user_email") || "",
        subject: fd.get("subject") || "",
        message: fd.get("message") || "",
      };

      // send using explicit params (easier to debug than sendForm)
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result && result.status === 200) {
        setMessage("Message sent successfully! 🎉");
        formRef.current.reset();
        setTimeout(() => setMessage(""), 3000);
      } else {
        throw new Error("EmailJS returned unexpected response");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Failed to send message. Check console for details.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-green-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-green-500 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-green-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-green-500 transition resize-none"
                ></textarea>
              </div>

              {/* Status Message */}
              {message && (
                <div className={`p-3 rounded text-sm ${message.includes("successfully") ? "bg-green-900 text-green-200" : "bg-red-900 text-red-200"}`}>
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Connect with me</h3>
            
            {/* Icon Links */}
            <div className="flex gap-6 mb-12">
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/just_kunlay?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-125 transition-transform duration-300 text-4xl"
              >
                <FaInstagram />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/KUNLAY_1?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-transform duration-300 text-4xl"
              >
                <FaXTwitter />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jeremiah-olugbade-22736a384/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>

              {/* Gmail */}
              <a
                href="mailto:kunleolugbade146@gmail.com"
                className="text-red-500 hover:scale-125 transition-transform duration-300 text-4xl"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                Or reach out directly:
              </p>
              <a 
                href="mailto:kunleolugbade146@gmail.com"
                className="text-green-400 hover:text-green-300 text-lg font-semibold transition"
              >
                kunleolugbade146@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
