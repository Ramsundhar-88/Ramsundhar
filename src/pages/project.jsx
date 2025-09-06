import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-[#1e293b] text-center text-white">
    <h2 className="text-3xl font-semibold mb-10">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 shadow text-left">
          <h3 className="text-xl font-bold mb-2">CivicConnect</h3>
          <p className="text-gray-400 mb-4">Community grievance reporting platform using React + Express + MongoDB.</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://civiconnect-pink.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
            >
              Visit
            </a>
            <a
              href="https://github.com/Ramsundhar-88/Civiconnect.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 border border-indigo-500 px-4 py-2 rounded hover:bg-indigo-500 hover:text-white text-sm"
            >
              <FaGithub /> GitHub
            </a>
        </div>
      </div>

      <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 shadow text-left">
        <h3 className="text-xl font-bold mb-2">Ai-Dream-analyzer</h3>
        <p className="text-gray-400 mb-4">DreamRoast is a fun yet insightful AI app that lets users share their dreams and receive their rost or psychological-style analysis</p>
        <a
          href="https://github.com/Ramsundhar-88/Dream-analyzer.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-400 border border-indigo-500 px-4 py-2 rounded hover:bg-indigo-500 hover:text-white text-sm"
        >
          <FaGithub /> GitHub
        </a>
      </div>

      <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 shadow text-left">
          <h3 className="text-xl font-bold mb-2">Ping-Pong</h3>
          <p className="text-gray-400 mb-4">A two-player dice game built with HTML, CSS & JavaScript. First to reach 100 points wins.</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://ping-game-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
            >
              Visit
            </a>
            <a
              href="https://github.com/Ramsundhar-88/Ping-game.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 border border-indigo-500 px-4 py-2 rounded hover:bg-indigo-500 hover:text-white text-sm"
            >
              <FaGithub /> GitHub
            </a>
        </div>
      </div>

      

      


    </div>
  </section>
);

export default Projects;