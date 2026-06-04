import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand Left */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-cyberCyan">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono text-slate-500">
            ADITYA ANNEPU // COPYRIGHT © {new Date().getFullYear()}
          </span>
        </div>

        {/* Tech stack summary middle */}
        <div className="text-[10px] font-mono text-slate-600">
          STACK: VITE + REACT + TAILWIND + FRAMER MOTION
        </div>

        {/* Actions Right (Back to top / Socials) */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/annepuaditya2-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-white/5 border border-white/5 text-slate-500 hover:text-white transition-colors"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/adityaannepu2305a41184/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-white/5 border border-white/5 text-slate-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-white/5 border border-white/5 text-slate-500 hover:text-cyberCyan hover:border-cyberCyan/30 transition-colors flex items-center gap-1.5 text-xs font-mono group cursor-pointer"
            title="Scroll to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
