import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Detect scroll for adding background density
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);

    // Active Section tracking via IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger near middle of screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel py-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)] border-b border-white/5' 
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyberPurple to-cyberCyan flex items-center justify-center relative overflow-hidden">
              <Cpu className="w-5 h-5 text-white animate-pulse" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider font-mono text-white group-hover:text-cyberCyan transition-colors">
                ADITYA ANNEPU
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-tight leading-none mt-0.5">
                [AI & SYSTEMS ENGINEER]
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide font-mono transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id ? 'text-cyberCyan' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-lg bg-white/5 border border-white/10 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Socials & Menu toggler */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="https://github.com/annepuaditya2-droid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/adityaannepu2305a41184/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden flex flex-col justify-center items-center bg-darkBg/95 backdrop-blur-xl"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Dynamic decorative backdrop grids */}
            <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-cyberPurple/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-cyberCyan/10 blur-[100px] rounded-full" />

            <div className="flex flex-col items-center gap-6 font-mono text-lg">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xl font-semibold hover:text-cyberCyan transition-colors cursor-pointer ${
                    activeSection === item.id ? 'text-cyberCyan' : 'text-slate-300'
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  &lt; {item.label} /&gt;
                </motion.button>
              ))}
            </div>

            {/* Mobile Socials Link */}
            <motion.div 
              className="flex items-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://github.com/annepuaditya2-droid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/adityaannepu2305a41184/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
