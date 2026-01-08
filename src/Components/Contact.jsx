import React, { useRef, useState } from "react";
import { FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { sendMailWithForm } from "../utils/sendmail.js";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    try {
      const result = await sendMailWithForm(formRef.current);

      if (result && result.success) {
        setIsSuccess(true);
        setMessage("Message sent successfully!");
        formRef.current?.reset();
        setTimeout(() => setMessage(""), 3000);
      } else {
        console.error("EmailJS unexpected response:", result);
        setIsSuccess(false);
        const errMsg = typeof result?.error === "string" ? result.error : (result?.error?.message || "Failed to send message. Try again later.");
        setMessage(errMsg);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSuccess(false);
      setMessage(error?.message || String(error) || "Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

              <input type="text" name="user_name" placeholder="Your name" required className="w-full bg-gray-800 px-4 py-2 rounded border border-gray-700 focus:border-green-500 outline-none" />

              <input type="email" name="user_email" placeholder="your@email.com" required className="w-full bg-gray-800 px-4 py-2 rounded border border-gray-700 focus:border-green-500 outline-none" />

              <input type="text" name="subject" placeholder="Subject" required className="w-full bg-gray-800 px-4 py-2 rounded border border-gray-700 focus:border-green-500 outline-none" />

              <textarea name="message" rows="5" placeholder="Your message..." required className="w-full bg-gray-800 px-4 py-2 rounded border border-gray-700 focus:border-green-500 outline-none resize-none" />

              {message && (
                <div className={`p-3 rounded text-sm ${isSuccess ? "bg-green-900 text-green-200" : "bg-red-900 text-red-200"}`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-2 rounded font-bold hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Connect with me</h3>

            <div className="flex gap-6 mb-12">
              <a href="https://www.instagram.com/just_kunlay" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-4xl hover:scale-125 transition"><FaInstagram /></a>
              <a href="https://x.com/KUNLAY_1" target="_blank" rel="noopener noreferrer" className="text-white text-4xl hover:scale-125 transition"><FaXTwitter /></a>
              <a href="https://www.linkedin.com/in/jeremiah-olugbade-22736a384/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"><FaLinkedin className="text-xl" /></a>
              <a href="mailto:kunleolugbade146@gmail.com" className="text-red-500 text-4xl hover:scale-125 transition"><FaEnvelope /></a>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">Or reach out directly:</p>
              <a href="mailto:kunleolugbade146@gmail.com" className="text-green-400 font-semibold hover:text-green-300 transition">
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
