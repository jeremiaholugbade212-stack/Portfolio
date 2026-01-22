import React, { useRef, useState } from "react";
import { FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import keys from "../utils/sendmail";

const Contact = () => {
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);
    setError(false);

    emailjs
      .sendForm(
        keys.service_id,
        keys.template_id,
        form.current,
        keys.public_key
      )
      .then(() => {
        setIsSent(true);
        setIsSending(false);
        form.current.reset();
      })
      .catch(() => {
        setError(true);
        setIsSending(false);
      });
  };

  return (
    <section className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="w-full bg-gray-800 px-4 py-2 rounded border border-gray-700 focus:border-green-500 outline-none"
              />

              <input
                type="email"
                name="from_email"
                placeholder="your email.com"
                required
                className="w-full bg-gray-800 px-4 py-2 rounded border border-gray-700 focus:border-green-500 outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your message..."
                required
                className="w-full bg-gray-800 px-4 py-2 rounded border border-gray-700 focus:border-green-500 outline-none resize-none"
              />

              {isSent && (
                <p className="text-green-400">Message sent successfully!</p>
              )}
              {error && (
                <p className="text-red-400">
                  Failed to send message. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-2 rounded font-bold hover:opacity-90 disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Connect with me</h3>

            <div className="flex gap-6 mb-12">
              <a
                href="https://www.instagram.com/just_kunlay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-4xl hover:scale-125 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/KUNLAY_1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-125 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.linkedin.com/in/jeremiah-olugbade-22736a384/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="mailto:kunleolugbade146@gmail.com"
                className="text-red-500 text-4xl hover:scale-125 transition"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">Or reach out directly:</p>
              <a
                href="mailto:kunleolugbade146@gmail.com"
                className="text-green-400 font-semibold hover:text-green-300 transition"
              >
                kunleolugbade146@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;