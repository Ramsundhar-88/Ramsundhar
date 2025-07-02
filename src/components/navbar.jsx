import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Handle resize and desktop detection
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-white">Ramsundhar</h1>

        {/* Desktop Menu - always render but conditionally display */}
        <div className={`${isDesktop ? "block" : "hidden"} md:block`}>
          <ul className="flex space-x-8 text-base font-semibold text-gray-200">
            <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className={`${!isDesktop ? "block" : "hidden"} md:hidden text-white text-3xl cursor-pointer`} 
             onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {!isDesktop && menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0f172a] text-white gap-6 py-6 text-base font-semibold">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;