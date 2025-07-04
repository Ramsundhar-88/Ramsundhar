import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-700 py-6 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Ramsundhar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
