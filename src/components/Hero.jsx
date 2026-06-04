import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Database, Network, Code2, Sparkles, FileText, Send } from 'lucide-react';

export default function Hero() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Interactive floating tech icons in background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-[20%] left-[10%] opacity-20 text-cyberCyan"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="w-8 h-8 md:w-10 md:h-10" />
        </motion.div>

        <motion.div 
          className="absolute bottom-[25%] left-[15%] opacity-25 text-cyberPurple"
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Database className="w-8 h-8 md:w-9 md:h-9" />
        </motion.div>

        <motion.div 
          className="absolute top-[30%] right-[12%] opacity-20 text-cyberBlue"
          animate={{ y: [0, -20, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Network className="w-8 h-8 md:w-10 md:h-10" />
        </motion.div>

        <motion.div 
          className="absolute bottom-[20%] right-[18%] opacity-25 text-neonGreen"
          animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Code2 className="w-7 h-7 md:w-8 md:h-8" />
        </motion.div>

        <motion.div 
          className="absolute top-[65%] left-[45%] opacity-15 text-cyberPurple"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Terminal className="w-6 h-6" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyberCyan w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-glow-cyan animate-pulse" />
            <span>OPEN FOR INTERNSHIPS & SYSTEM PROJECTS</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1 
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Electronics & Communication Engineering Student & Software Developer
            </motion.h1>

            <motion.div 
              className="text-2xl sm:text-3xl font-mono text-slate-300 font-bold min-h-[40px] flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>Building high-performance AI systems and scalable backend services.</span>
            </motion.div>
          </div>

          <motion.p 
            className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building scalable AI-powered systems and intelligent software experiences. B.Tech ECE (SR University, 2027) engineering student with hands-on expertise in backend flows, RAG models, and autonomous workflows.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyberPurple to-cyberBlue text-white font-medium hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] flex items-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-200 hover:text-white font-medium flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-4 h-4 text-cyberCyan" />
              <span>Contact Me</span>
            </button>

            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered (simulated template pdf). Place your resume.pdf in 'public/' to make this live!");
              }}
              className="px-6 py-3 rounded-xl bg-slate-900 border border-white/5 hover:border-cyberCyan/30 text-slate-300 hover:text-white font-medium flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-cyberCyan" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* Right Animated Diagram Column */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Cyber glow background behind the visualizer */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-cyberCyan/10 blur-[80px] -z-10 animate-pulse-slow" />
          
          <div className="w-full max-w-[420px] aspect-square rounded-2xl glass-card border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">
            {/* SVG Visualizer representing AI System Architecture */}
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Connection Lines with animation */}
              <line x1="200" y1="200" x2="80" y2="120" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="200" y1="200" x2="320" y2="120" stroke="rgba(138, 43, 226, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="200" y1="200" x2="80" y2="280" stroke="rgba(79, 172, 254, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="200" y1="200" x2="320" y2="280" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" strokeDasharray="5,5" />

              {/* Pulsing signal dots traveling on lines */}
              <circle r="4" fill="#00f2fe">
                <animateMotion 
                  dur="4s" 
                  repeatCount="indefinite" 
                  path="M 200 200 L 80 120" 
                />
              </circle>
              <circle r="4" fill="#8a2be2">
                <animateMotion 
                  dur="3s" 
                  repeatCount="indefinite" 
                  path="M 200 200 L 320 120" 
                />
              </circle>
              <circle r="4" fill="#4facfe">
                <animateMotion 
                  dur="5s" 
                  repeatCount="indefinite" 
                  path="M 200 200 L 80 280" 
                />
              </circle>
              <circle r="4" fill="#10b981">
                <animateMotion 
                  dur="4.5s" 
                  repeatCount="indefinite" 
                  path="M 200 200 L 320 280" 
                />
              </circle>

              {/* Central Node: AI Engine Agent */}
              <g className="cursor-pointer">
                <circle cx="200" cy="200" r="32" fill="url(#agentGlow)" stroke="rgba(138, 43, 226, 0.6)" strokeWidth="3" />
                <text x="200" y="204" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">AGENT</text>
                <circle cx="200" cy="200" r="38" stroke="#8a2be2" strokeWidth="1" strokeDasharray="6,6" fill="none">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="10s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Node 1: Google Gemini (Top-Left) */}
              <g>
                <circle cx="80" cy="120" r="22" fill="#0c0721" stroke="#00f2fe" strokeWidth="2" />
                <text x="80" y="124" textAnchor="middle" fill="#00f2fe" fontSize="10" fontWeight="bold" fontFamily="monospace">LLM</text>
                <circle cx="80" cy="120" r="26" stroke="#00f2fe" strokeWidth="1" strokeDasharray="4,4" fill="none" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="360 80 120" to="0 80 120" dur="6s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Node 2: Pinecone Vector DB (Top-Right) */}
              <g>
                <circle cx="320" cy="120" r="22" fill="#0c0721" stroke="#8a2be2" strokeWidth="2" />
                <text x="320" y="124" textAnchor="middle" fill="#8a2be2" fontSize="9" fontWeight="bold" fontFamily="monospace">VECTOR</text>
              </g>

              {/* Node 3: REST API Node (Bottom-Left) */}
              <g>
                <circle cx="80" cy="280" r="22" fill="#0c0721" stroke="#4facfe" strokeWidth="2" />
                <text x="80" y="284" textAnchor="middle" fill="#4facfe" fontSize="10" fontWeight="bold" fontFamily="monospace">API</text>
              </g>

              {/* Node 4: SQL Database Node (Bottom-Right) */}
              <g>
                <circle cx="320" cy="280" r="22" fill="#0c0721" stroke="#10b981" strokeWidth="2" />
                <text x="320" y="284" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">DB</text>
              </g>

              {/* Define Gradients */}
              <defs>
                <radialGradient id="agentGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0c0721" stopOpacity="0.9" />
                </radialGradient>
              </defs>
            </svg>

            {/* Simulated Live System Metrics inside card overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 rounded-lg bg-black/40 border border-white/5 font-mono text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Gemini API: OK</span>
              </div>
              <div>TTFT: 120ms</div>
              <div className="text-cyberCyan">Agent: ACTIVE</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down arrow scroll indicator */}
      <div 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 text-slate-500 hover:text-cyberCyan transition-colors animate-bounce hidden md:block"
      >
        <div className="flex flex-col items-center gap-1 font-mono text-[10px]">
          <span>SCROLL DOWN</span>
          <div className="w-5 h-8 rounded-full border border-slate-500 flex justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-slate-500 animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}
