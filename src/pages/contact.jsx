import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-20 px-4 bg-[#0f172a] text-center text-white">
    <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
    <p className="text-gray-400 mb-8">Let’s connect on social media or drop a message!</p>
    <div className="flex justify-center gap-6 text-3xl text-gray-300">
      <a href="https://github.com/ramsundhar-88" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/ramsundhar-sadeswaran-588949156" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaLinkedin /></a>
      <a href="https://www.instagram.com/ich_bin_ram/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
    </div>
  </section>
);

export default Contact;
