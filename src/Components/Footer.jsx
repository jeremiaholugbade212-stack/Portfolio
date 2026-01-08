import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-8 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">

        {/* Name or Logo */}
        <h3 className="text-xl font-semibold text-white mb-2">
          Kunlay's Code
        </h3>

        {/* Short Line */}
        <p className="max-w-md mx-auto text-sm mb-4">
          Frontend Developer • Creating responsive and beautiful digital experiences.
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-600 mt-4">
          © {new Date().getFullYear()} Kunlay’s Code. All Rights Reservedd.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
