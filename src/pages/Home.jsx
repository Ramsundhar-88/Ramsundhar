import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  Wrench,
  Menu, 
  X, 
  ChevronUp 
} from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HamsterToggle from '../components/HamsterToggle';

const calculateDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  
  let months = (now.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += now.getMonth();
  
  months += 1;
  if (months < 1) months = 1;

  if (months >= 12) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return `${years} yr${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}` : ''}`;
  }
  return `${months} mo${months > 1 ? 's' : ''}`;
};

// Reusable Lottie hover popover (hidden on mobile/touch screens to prevent accidental viewport overflow)
const LottieHoverBubble = ({ isVisible, positionClass = "-top-24 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28" }) => (
  <div 
    className={`absolute ${positionClass} pointer-events-none transition-all duration-300 ease-out z-40 hidden sm:block ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
    }`}
    aria-hidden="true"
  >
    <DotLottieReact
      src="https://lottie.host/ac41c0dc-4708-473b-a86a-5551d7b93c45/ernRODulmr.lottie"
      loop
      autoplay
    />
  </div>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dark Mode state with localStorage and prefers-color-scheme persistence
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.classList.add('dark');
      body.classList.remove('cloud-canvas-bg');
      body.classList.add('dark-canvas-bg');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark-canvas-bg');
      body.classList.add('cloud-canvas-bg');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Hover states for Lottie animations near contact links
  const [collabHovered, setCollabHovered] = useState(false);
  const [socialsHovered, setSocialsHovered] = useState(false);
  const [contactBoxHovered, setContactBoxHovered] = useState(false);
  const [bottomSocialsHovered, setBottomSocialsHovered] = useState(false);
  const [headerTalkHovered, setHeaderTalkHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ramsundhar.work@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-2 sm:py-6 md:py-10 lg:py-12 px-2 sm:px-4 md:px-8 lg:px-12 transition-colors duration-300">
      {/* Main Card Container with WhatsApp Doodle Wallpaper */}
      <main className="relative max-w-[1360px] mx-auto bg-white dark:bg-[#12141a] rounded-2xl sm:rounded-[36px] md:rounded-[44px] shadow-[0_25px_70px_rgba(0,0,0,0.07)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.5)] border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden transition-all duration-300">
        
        {/* WhatsApp-Style Minimal Doodle Wallpaper Background Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.055] dark:opacity-[0.065] whatsapp-doodle-bg z-0" 
          aria-hidden="true" 
        />

        {/* Content Container (z-10 relative) */}
        <div className="relative z-10">

          {/* ========================================================= */}
          {/* TOP NAVIGATION BAR                                        */}
          {/* ========================================================= */}
          <header className="px-3.5 sm:px-8 md:px-12 pt-3.5 sm:pt-8 pb-3 sm:pb-4 border-b border-neutral-100/90 dark:border-neutral-800/80 flex items-center justify-between relative z-30">
            
            {/* Left: Available Status Pill Badge & Animated Mascot */}
            <div className="inline-flex items-center gap-1.5 sm:gap-3 shrink min-w-0">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/90 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 shrink-0">
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500"></span>
                </span>
                <span className="tracking-tight whitespace-nowrap">
                  <span className="sm:hidden">Available</span>
                  <span className="hidden sm:inline">Available for New Project</span>
                </span>
              </div>

              {/* Working animation near Available for Work - made bigger and more prominent */}
              <div className="w-14 h-10 min-[380px]:w-16 min-[380px]:h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-18 shrink-0 flex items-center justify-center pointer-events-none -my-1.5 sm:-my-2.5" aria-label="Available for work animation">
                <DotLottieReact
                  src="https://lottie.host/b68776b5-7bd5-444c-aab1-f0e6394552f4/xO9WEmrZSF.lottie"
                  loop
                  autoplay
                  speed={0.85}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 group">
                <span>Experience</span>
                <span className="text-neutral-400 dark:text-neutral-500 text-xs font-normal group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">[1y+]</span>
              </a>
              <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            {/* Right Action Button, Hamster Toggle & Mobile Menu Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-3.5 shrink-0">
              {/* Hamster Toggle: Forward for Dark, Backward for Light */}
              <HamsterToggle isDark={isDark} onToggle={toggleTheme} />

              <div 
                className="relative hidden sm:inline-block"
                onMouseEnter={() => setHeaderTalkHovered(true)}
                onMouseLeave={() => setHeaderTalkHovered(false)}
              >
                <LottieHoverBubble 
                  isVisible={headerTalkHovered} 
                  positionClass="top-12 right-0 w-20 h-20 sm:w-24 sm:h-24" 
                />
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </header>

          {/* Mobile Dropdown Nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden px-4 sm:px-6 py-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 flex flex-col gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 animate-fadeIn">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                About
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <span>Experience</span>
                <span className="text-neutral-400 dark:text-neutral-500 text-xs font-semibold">[1y+]</span>
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors"
              >
                Contact
              </a>

              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 py-3 rounded-full text-sm font-semibold transition-all shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* ========================================================= */}
          {/* HERO SECTION                                              */}
          {/* ========================================================= */}
          <section className="relative px-4 sm:px-8 md:px-12 pt-6 sm:pt-10 md:pt-12 pb-8 sm:pb-14 lg:pb-16 overflow-hidden">
            
            {/* Giant Typography: RAM (outlined) SUNDHAR (solid black/white) without gap as one unified first name */}
            <div className="w-full text-center select-none pt-2 pb-5 sm:pb-8 md:pb-10 z-0 overflow-hidden">
              <h1 className="text-3xl min-[360px]:text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[112px] font-black uppercase tracking-tight leading-none inline-flex justify-center items-center">
                <span 
                  className="text-stroke-title select-none"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  RAM
                </span>
                <span className="text-neutral-950 dark:text-white transition-colors duration-200">SUNDHAR</span>
              </h1>
            </div>

            {/* Hero Content Grid: Left Info | Center Portrait | Right Social Pills */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              
              {/* LEFT COLUMN: Role, Description, Collaborate CTA */}
              <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-2 sm:mb-3">
                  Software Engineer
                </h2>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-sm sm:max-w-md lg:max-w-xs mb-6 leading-relaxed">
                  Designing and building digital products that are clear, performant, and scalable across web, mobile, and backend systems.
                </p>
                
                {/* Collaborate CTA with Lottie Hover on the right-hand side */}
                <div 
                  className="relative inline-flex items-center"
                  onMouseEnter={() => setCollabHovered(true)}
                  onMouseLeave={() => setCollabHovered(false)}
                >
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group shrink-0"
                  >
                    <span>Let's collaborate</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Lottie Animation Popover to the right-hand side */}
                  <LottieHoverBubble 
                    isVisible={collabHovered} 
                    positionClass="left-full ml-3 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20" 
                  />
                </div>
              </div>

              {/* CENTER COLUMN: Clean Portrait */}
              <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center">
                <div className="relative w-56 min-[380px]:w-64 sm:w-72 md:w-80 lg:w-[320px] xl:w-[350px]">
                  <div className="w-full aspect-[3.7/4.7] rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.09)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] border-4 border-white dark:border-neutral-800 ring-1 ring-neutral-200/80 dark:ring-neutral-700/60 bg-neutral-100 dark:bg-neutral-800 group">
                    <img 
                      src="/Ramsundhar.jpeg" 
                      alt="Ramsundhar" 
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  {/* Location indicator badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border border-neutral-200/90 dark:border-neutral-800 rounded-full px-3.5 py-1 shadow-md flex items-center gap-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                    <span>Chennai, India</span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Vertical Stack of Rounded Social Link Pills */}
              <div 
                className="relative order-3 lg:order-3 lg:col-span-4 flex flex-wrap lg:flex-col items-center lg:items-end justify-center lg:justify-end gap-2 sm:gap-3"
                onMouseEnter={() => setSocialsHovered(true)}
                onMouseLeave={() => setSocialsHovered(false)}
              >
                {/* Lottie Animation Popover on Hovering Social Links */}
                <LottieHoverBubble 
                  isVisible={socialsHovered} 
                  positionClass="-top-24 sm:-top-28 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4" 
                />
                
                <a 
                  href="https://github.com/Ramsundhar-88" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
                >
                  <SiGithub className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://www.linkedin.com/m/in/ramsundhar-sadeswaran-588949156/r" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
                >
                  <SiLinkedin className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="mailto:ramsundhar.work@gmail.com" 
                  className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Mail className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                  <span>Email</span>
                </a>

                <button 
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />}
                  <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
                </button>

              </div>

            </div>
          </section>

          {/* ========================================================= */}
          {/* EXPERIENCE SECTION                                        */}
          {/* ========================================================= */}
          <section id="experience" className="px-4 sm:px-8 md:px-12 py-10 sm:py-16 md:py-20 border-t border-neutral-100/90 dark:border-neutral-800/80">
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2">
                <Briefcase className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
                <span>Career Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                Work Experience
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
                Professional history building production mobile applications, backend services, and scalable architecture.
              </p>
            </div>

            {/* Company Card */}
            <div className="bg-white dark:bg-neutral-900/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
              
              {/* Header: Company Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 sm:pb-8 border-b border-neutral-100 dark:border-neutral-800 gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-1.5 sm:p-2 shadow-sm shrink-0 flex items-center justify-center">
                    <img src="/drring_health_logo.jpeg" alt="DrRing Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-3xl font-bold text-neutral-950 dark:text-white">DrRing</h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-[11px] sm:text-xs font-semibold">Active</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 dark:text-neutral-500 shrink-0" />
                      <span>South Delhi, Delhi · Remote</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                    HealthTech & IoT
                  </span>
                </div>
              </div>

              {/* Timeline Roles */}
              <div className="pt-6 sm:pt-8 space-y-8 sm:space-y-10 pl-4 sm:pl-6 border-l-2 border-neutral-200 dark:border-neutral-800 ml-2.5 sm:ml-6 relative">
                
                {/* Role 1: Full-time */}
                <div className="relative">
                  <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-2 border-white dark:border-neutral-900 rounded-full -left-[1.45rem] sm:-left-[2.05rem] top-1.5 shadow-sm" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-white">Software Engineer</h4>
                      <span className="px-2 py-0.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-[10px] sm:text-[11px] font-semibold">Full-time</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      May 2026 – Present · {calculateDuration('2026-05-01')}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-base text-neutral-600 dark:text-neutral-400 mt-2.5 sm:mt-3 pl-0.5">
                    <li className="flex items-start gap-2 sm:gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-1.5 sm:mt-2 shrink-0"></span>
                      <span>Developing and maintaining cross-platform mobile applications using Flutter with clean architecture.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-1.5 sm:mt-2 shrink-0"></span>
                      <span>Building and integrating backend services and REST APIs powering critical user and health workflows.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-1.5 sm:mt-2 shrink-0"></span>
                      <span>Optimizing app startup times, rendering frame rates, and network caching across mobile platforms.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-1.5 sm:mt-2 shrink-0"></span>
                      <span>Collaborating closely with product owners and UX designers to ship production releases smoothly.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">Flutter</span>
                    <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">Systems Design</span>
                    <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">RESTful APIs</span>
                    <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">Mobile Architecture</span>
                  </div>
                </div>

                {/* Role 2: Internship */}
                <div className="relative">
                  <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 bg-neutral-300 dark:bg-neutral-600 border-2 border-white dark:border-neutral-900 rounded-full -left-[1.45rem] sm:-left-[2.05rem] top-1.5 shadow-sm" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-white">Software Engineer Intern</h4>
                      <span className="px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px] sm:text-[11px] font-semibold">Internship</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      Mar 2026 – Apr 2026 · 2 mos
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-base text-neutral-600 dark:text-neutral-400 mt-2.5 sm:mt-3 pl-0.5">
                    <li className="flex items-start gap-2 sm:gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-1.5 sm:mt-2 shrink-0"></span>
                      <span>Led development of the initial MVP using Flutter, driving core features from blank repo to deploy.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-1.5 sm:mt-2 shrink-0"></span>
                      <span>Designed responsive UI for key user onboarding, dashboard, and settings screens.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-1.5 sm:mt-2 shrink-0"></span>
                      <span>Integrated backend endpoints and managed state seamlessly across asynchronous streams.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">Flutter</span>
                    <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">MVP Development</span>
                    <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">UI Implementation</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SKILLS SECTION                                            */}
          {/* ========================================================= */}
          <section id="skills" className="px-4 sm:px-8 md:px-12 py-10 sm:py-16 md:py-20 border-t border-neutral-100/90 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-neutral-950/20">
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2">
                <Code2 className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
                <span>Technical Skills</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                Skills & Technologies
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
                Tools and technologies I use daily to build robust, scalable systems and responsive interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Frontend Card */}
              <div className="bg-white dark:bg-neutral-900/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-md dark:hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 text-neutral-900 dark:text-neutral-100">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-1">Frontend</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">Building responsive, accessible web interfaces</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">React.js</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Next.js</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Tailwind CSS</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">JavaScript (ES6+)</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">HTML5 / CSS3</span>
                </div>
              </div>

              {/* Mobile Card */}
              <div className="bg-white dark:bg-neutral-900/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-md dark:hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 text-neutral-900 dark:text-neutral-100">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-1">Mobile Development</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">Cross-platform & native mobile apps</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Flutter</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Dart</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Swift</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">iOS / Android</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">State Management</span>
                </div>
              </div>

              {/* Backend Card */}
              <div className="bg-white dark:bg-neutral-900/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-md dark:hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 text-neutral-900 dark:text-neutral-100">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-1">Backend & APIs</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">Scalable server architecture & data flows</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Node.js</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Express.js</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">REST APIs</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">System Architecture</span>
                </div>
              </div>

              {/* Database Card */}
              <div className="bg-white dark:bg-neutral-900/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-md dark:hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 text-neutral-900 dark:text-neutral-100">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-1">Database & Storage</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">Relational and document persistence</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">MongoDB</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">MySQL / SQL</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Firebase Firestore</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Data Modeling</span>
                </div>
              </div>

              {/* Tools Card */}
              <div className="bg-white dark:bg-neutral-900/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-md dark:hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-2">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4 text-neutral-900 dark:text-neutral-100">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-1">Tools & Workflow</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">DevOps, version control, and collaboration tooling</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Git & GitHub</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Vite</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Postman</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">VS Code</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">CI / CD Basics</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] sm:text-xs font-medium rounded-full border border-transparent dark:border-neutral-700/60">Figma to Code</span>
                </div>
              </div>

            </div>
          </section>

          {/* ========================================================= */}
          {/* EDUCATION & CERTIFICATIONS                                */}
          {/* ========================================================= */}
          <section className="px-4 sm:px-8 md:px-12 py-10 sm:py-16 md:py-20 border-t border-neutral-100/90 dark:border-neutral-800/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
              
              {/* Education */}
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2 self-start">
                  <GraduationCap className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
                  <span>Academics</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-4 sm:mb-6">
                  Education
                </h2>

                <div className="bg-white dark:bg-neutral-900/80 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_2px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_15px_rgba(0,0,0,0.25)] flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-3">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                        <span>Chennai, India</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold text-[11px] sm:text-xs">2024 – 2028</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 dark:text-white mb-1">
                      Bachelor of Technology in Computer Science & Engineering
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                      Vels Institute of Science, Technology & Advanced Studies
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Specializing in computer science fundamentals, software engineering methodologies, database design, and end-to-end full-stack development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2 self-start">
                  <Award className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
                  <span>Credentials</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-4 sm:mb-6">
                  Certifications
                </h2>

                <div className="bg-white dark:bg-neutral-900/80 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_2px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_15px_rgba(0,0,0,0.25)] flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] sm:text-xs font-semibold">IBM / Coursera</span>
                      <a 
                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/LCCNNGFH4RYR" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-neutral-900 dark:text-white hover:text-black dark:hover:text-white border-b border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white transition-colors"
                      >
                        <span>Verify Credential</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-neutral-950 dark:text-white mb-1">
                      IBM Data Science Professional Certificate
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
                      In-depth specialization covering Python for data analysis, SQL databases, data visualization, statistical analysis, and machine learning models.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="text-[11px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-400 truncate">Credential ID: LCCNNGFH4RYR</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ========================================================= */}
          {/* ABOUT ME SECTION                                          */}
          {/* ========================================================= */}
          <section id="about" className="px-4 sm:px-8 md:px-12 py-10 sm:py-16 md:py-20 border-t border-neutral-100/90 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-neutral-950/20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-4">
                <span>About Me</span>
              </div>
              
              <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-4 sm:mb-6">
                "I like owning problems end-to-end — from a blank repository to a scalable MVP in production."
              </h2>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
                <p>
                  I'm Ramsundhar, a software engineer building across web and mobile ecosystems — from React and Node.js on the full-stack side to Flutter for high-performance cross-platform applications. Currently at DrRing, I work on Flutter apps and the backend APIs powering them, with a growing focus on system design and scalable infrastructure.
                </p>
                <p>
                  I care just as much about how a system is structured under the hood as how clear and pleasant it feels on screen. Outside work, I stay energized through sports, reading, outdoor trails, and creative pursuits.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 shadow-sm">
                  💻 Web & Mobile Development
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 shadow-sm">
                  ⚙️ REST APIs & Systems Design
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 shadow-sm">
                  🚀 Fast MVP Execution
                </span>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* CONTACT / CALL TO ACTION                                  */}
          {/* ========================================================= */}
          <section id="contact" className="px-4 sm:px-8 md:px-12 py-12 sm:py-20 md:py-24 border-t border-neutral-100/90 dark:border-neutral-800/80 relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Get in Touch</span>
              </span>

              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight mb-3 sm:mb-4">
                Have a project in mind? Let's talk.
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
                Whether you're looking for a software engineer for your team, have an app idea to bring to life, or just want to chat tech — I'd love to connect.
              </p>

              {/* Email Action Pill Box with Lottie Hover on the right side */}
              <div 
                className="relative inline-flex items-center justify-center max-w-full w-full sm:w-auto"
                onMouseEnter={() => setContactBoxHovered(true)}
                onMouseLeave={() => setContactBoxHovered(false)}
              >
                {/* Lottie Animation Popover: positioned on the RIGHT SIDE on desktop, hidden on touch screens */}
                <LottieHoverBubble 
                  isVisible={contactBoxHovered || bottomSocialsHovered} 
                  positionClass="left-full ml-3 sm:ml-4 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" 
                />

                <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 p-2.5 sm:p-2 bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl sm:rounded-full border border-neutral-200/90 dark:border-neutral-800 shadow-sm max-w-full w-full sm:w-auto">
                  <a 
                    href="mailto:ramsundhar.work@gmail.com" 
                    className="px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs min-[360px]:text-sm sm:text-base font-semibold text-neutral-900 dark:text-white hover:text-black dark:hover:text-neutral-200 transition-colors break-all text-center"
                  >
                    ramsundhar.work@gmail.com
                  </a>

                  <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={handleCopyEmail}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>

                    <a 
                      href="mailto:ramsundhar.work@gmail.com"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold transition-all shadow-sm hover:scale-[1.02] active:scale-95"
                    >
                      <span>Send Email</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Social pills (hovering triggers illustration above the email box) */}
              <div 
                className="relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10"
                onMouseEnter={() => setBottomSocialsHovered(true)}
                onMouseLeave={() => setBottomSocialsHovered(false)}
              >
                <a 
                  href="https://github.com/Ramsundhar-88" 
                  target="_blank" 
                  rel="noreferrer"
                  onMouseEnter={() => setBottomSocialsHovered(true)}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all shadow-sm hover:scale-[1.02] active:scale-95"
                >
                  <SiGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://www.linkedin.com/m/in/ramsundhar-sadeswaran-588949156/r" 
                  target="_blank" 
                  rel="noreferrer"
                  onMouseEnter={() => setBottomSocialsHovered(true)}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all shadow-sm hover:scale-[1.02] active:scale-95"
                >
                  <SiLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="mailto:ramsundhar.work@gmail.com" 
                  onMouseEnter={() => setBottomSocialsHovered(true)}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 transition-all shadow-sm hover:scale-[1.02] active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>

            </div>
          </section>

          {/* ========================================================= */}
          {/* FOOTER                                                    */}
          {/* ========================================================= */}
          <footer className="px-4 sm:px-8 md:px-12 py-6 sm:py-8 border-t border-neutral-100/90 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
            <div className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Ramsundhar · Software Engineer</span>
            </div>

            <p>© {new Date().getFullYear()} Ramsundhar. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
              <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
            </div>
          </footer>

        </div>
      </main>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:left-6 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200/90 dark:border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          title="Back to top"
          aria-label="Back to top"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

    </div>
  );
}
