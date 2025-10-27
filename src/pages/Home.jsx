"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Code,
  Server,
  Database,
  Rocket,
  Wrench,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const colorMap = {
    "bg-teal-600": "text-teal-600",
    "bg-yellow-400": "text-yellow-400",
    "bg-red-500": "text-red-500",
    "bg-purple-500": "text-purple-500",
    "bg-blue-500": "text-blue-500",
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={20} />,
      color: "bg-teal-600",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Next.js"],
    },
    {
      title: "Backend",
      icon: <Server size={20} />,
      color: "bg-yellow-400",
      skills: ["Node.js", "Express", "JWT", "Python"],
    },
    {
      title: "Database",
      icon: <Database size={20} />,
      color: "bg-red-500",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Other",
      icon: <Rocket size={20} />,
      color: "bg-purple-500",
      skills: ["Git", "REST APIs", "Docker Basics"],
    },
    {
      title: "Tools",
      icon: <Wrench size={20} />,
      color: "bg-blue-500",
      skills: ["Postman", "VS Code", "Figma"],
    },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <nav className="bg-yellow-400 px-6 py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold italic text-gray-800">
            Ramsundhar
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#skills"
              className="text-gray-800 font-medium hover:underline underline-offset-4 decoration-2"
            >
              SKILLS
            </a>
            <a
              href="#projects"
              className="text-gray-800 font-medium hover:underline underline-offset-4 decoration-2"
            >
              PROJECTS
            </a>
            <a
              href="#goals"
              className="text-gray-800 font-medium hover:underline underline-offset-4 decoration-2"
            >
              GOALS
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border-2 border-gray-800 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-3"
          >
            <a href="#skills" className="text-gray-800 font-medium">
              SKILLS
            </a>
            <a href="#projects" className="text-gray-800 font-medium">
              PROJECTS
            </a>
            <a href="#goals" className="text-gray-800 font-medium">
              GOALS
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border-2 border-gray-800 rounded-full text-sm font-medium"
            >
              CONTACT
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-300 to-yellow-400 px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Hey There,<br />I'm Ramsundhar
            </h1>
            <p className="text-lg text-gray-700">
              Aspiring Full Stack Developer passionate about building innovative and user-friendly web applications.
            </p>
            <div className="mt-8">
              <div className="text-5xl font-bold text-gray-800">Fresher</div>
              <div className="text-sm text-gray-600 uppercase">
                Ready to Learn & Grow
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-white rounded-lg p-8 flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <img
                  src="/ramsundhar.jpg"
                  alt="Ramsundhar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-sm text-gray-700">
                  FULL STACK DEVELOPER
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">My Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-4 p-6 ${category.color} ${
                  category.color === "bg-yellow-400"
                    ? "text-gray-800"
                    : "text-white"
                } rounded-lg transform hover:scale-[1.02] hover:shadow-lg transition`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`w-12 h-12 ${
                    category.color === "bg-yellow-400"
                      ? "bg-gray-800 text-yellow-400"
                      : "bg-white"
                  } rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  {React.cloneElement(category.icon, {
                    className: colorMap[category.color] || "text-gray-800",
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded ${
                          category.color === "bg-yellow-400"
                            ? "bg-gray-800 text-yellow-400"
                            : "bg-white/20"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            My Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Welthy",
                desc: "AI-powered finance tracker that helps users manage expenses smartly.",
                visit: "https://welthy.netlify.app/",
                code: "https://github.com/Ramsundhar-88/ai-finance.git",
                bg: "bg-yellow-300",
              },
              {
                title: "CivicConnect",
                desc: "A community platform for citizens to report and track public issues.",
                visit: "https://civiconnect-pink.vercel.app/",
                code: "https://github.com/Ramsundhar-88/Civiconnect.git",
                bg: "bg-teal-600 text-white",
              },
              {
                title: "AI Dream Analyzer",
                desc: "Fun AI-based app that analyzes your dreams and gives creative insights.",
                code: "https://github.com/Ramsundhar-88/Dream-analyzer.git",
                bg: "bg-gray-200",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                className={`${p.bg} rounded-lg p-8 flex flex-col justify-between hover:shadow-lg transition`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm mb-6 opacity-90">{p.desc}</p>
                </div>
                <div className="flex gap-3">
                  {p.visit && (
                    <a
                      href={p.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
                    >
                      <ExternalLink size={16} />
                      Visit
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border-2 border-gray-800 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            My Career Goals
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            As a fresher, my goal is to continuously improve my technical and problem-solving skills.
            I’m looking to collaborate with teams that build meaningful, user-focused digital solutions.
            I’m excited to learn, adapt, and grow in the world of full-stack development.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Let’s Connect!
          </h2>
          <p className="text-gray-700 mb-8">
            Feel free to reach out — I’d love to collaborate or discuss opportunities.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/ramsundhar-sadeswaran-588949156/r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/Ramsundhar-88"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.instagram.com/ich_bin_ram/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <div className="text-xl font-bold italic">Ramsundhar</div>
          <div className="text-sm text-gray-400">
            © 2025 All Rights Reserved
          </div>
          <div className="text-sm">Built with React & Tailwind CSS</div>
        </div>
      </footer>
    </div>
  );
}
