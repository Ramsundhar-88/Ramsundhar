import React from 'react';
import { Mail, MapPin, Download, ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Profile Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-8 gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Profile Image */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0 mx-auto sm:mx-0">
              <img 
                src="/ramsundhar.jpg" 
                alt="Ramsundhar" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">Ramsundhar</h1>
              <p className="text-gray-400 text-base sm:text-lg mb-2">Full Stack developer</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-400 mb-3">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-300">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-400 mb-12 pb-6 border-b border-gray-800">
          <a href="mailto:ramsundhar.sades@gmail.com" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <span className="truncate">ramsundhar.sades@gmail.com</span>
          </a>
          <a href="https://github.com/Ramsundhar-88" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors">
            <Github className='w-4 h-4'/>
            <span>Github</span>
          </a>
          <a href="https://www.linkedin.com/m/in/ramsundhar-sadeswaran-588949156/r" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* About Me Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">About me</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
            <p>
              Hello, I'm Ramsundhar, a Full Stack Developer passionate about building clean, modern, and efficient web applications.
            </p>
            <p>
              I began my journey with a deep curiosity for how websites and apps work behind the scenes. Since then, I've been learning and building projects that combine strong front-end interfaces with solid back-end logic. I enjoy turning ideas into functional, user-focused digital experiences using modern web technologies.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Some of my projects</h2>
            <a href="https://github.com/Ramsundhar-88" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Project 1 */}
            <a
              href="https://welthy.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-zinc-700/40 cursor-pointer flex flex-col"
            >
              <div className="relative group">
                <img
                  src="/Welthy.png"
                  alt="Welthy Project"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold">Welthy</h3>
                <p className="text-xs sm:text-sm text-gray-400">Finance tracker built using React & Firebase.</p>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="https://civiconnect-pink.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-lg hover:shadow-zinc-700/40 cursor-pointer flex flex-col"
            >
              <div className="relative group">
                <img
                  src="/CivicConnect.png"
                  alt="Civic Connect Project"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold">Civic Connect</h3>
                <p className="text-xs sm:text-sm text-gray-400">Citizen service platform using MERN Stack.</p>
              </div>
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Education</h2>
          
          <div className="space-y-8">
            <div className="border-l-2 border-zinc-800 pl-4 sm:pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Chennai, India</span>
                </div>
                <span className="text-sm text-gray-400">2024 – 2028</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">Vels Institute of Science, Technology & Advanced Studies</p>
              <p className="text-gray-300 text-sm sm:text-base">
                Specialized in computer science fundamentals, software development, and full stack web technologies including front-end, back-end, databases, and deployment workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Certifications</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 border-b border-zinc-800 gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">IBM Data Science</h3>
                <p className="text-sm text-gray-400">IBM</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/LCCNNGFH4RYR" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                View
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Stack</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* React */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">⚛️</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">React.js</h3>
                <p className="text-xs sm:text-sm text-gray-400">Frontend library for building UI.</p>
              </div>
            </div>

            {/* Next.js */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">▲</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Next.js</h3>
                <p className="text-xs sm:text-sm text-gray-400">React framework for full-stack apps.</p>
              </div>
            </div>

            {/* Tailwind */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">🌬️</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Tailwind CSS</h3>
                <p className="text-xs sm:text-sm text-gray-400">Utility-first CSS framework.</p>
              </div>
            </div>

            {/* Node.js */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">🟢</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Node.js</h3>
                <p className="text-xs sm:text-sm text-gray-400">JavaScript backend runtime.</p>
              </div>
            </div>

            {/* Express */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Express.js</h3>
                <p className="text-xs sm:text-sm text-gray-400">Backend framework for APIs.</p>
              </div>
            </div>

            {/* MongoDB */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">🍃</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">MongoDB</h3>
                <p className="text-xs sm:text-sm text-gray-400">NoSQL database for scalable apps.</p>
              </div>
            </div>

            {/* SQL / MySQL */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">🛢️</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">SQL / MySQL</h3>
                <p className="text-xs sm:text-sm text-gray-400">Relational database & queries.</p>
              </div>
            </div>

            {/* Firebase */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">🔥</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Firebase</h3>
                <p className="text-xs sm:text-sm text-gray-400">Auth, DB, hosting & cloud tools.</p>
              </div>
            </div>

            {/* Git & GitHub */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">🐙</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Git & GitHub</h3>
                <p className="text-xs sm:text-sm text-gray-400">Version control & collaboration.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-12 sm:mt-20 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6">
          {/* Top */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">Ramsundhar</h2>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-400 text-sm">
            <a
              href="mailto:ramsundhar.sades@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/Ramsundhar-88"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ramsundhar-sadeswaran-588949156/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Bottom */}
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Ramsundhar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}