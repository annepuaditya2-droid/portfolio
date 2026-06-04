import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  
  const loadingTexts = [
    "INITIALIZING WORKSPACE...",
    "ESTABLISHING SECURE PIPELINES...",
    "LOADING VECTOR SYSTEM DEPLOYMENTS...",
    "MOUNTING LANGCHAIN INTERFACES...",
    "OPTIMIZING LOW-LATENCY RETRIEVAL...",
    "BOOTING SYSTEM INTERFACES..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 280);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darkBg text-white px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96, filter: "blur(10px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Absolute floating light particles */}
      <div className="absolute w-[300px] h-[300px] bg-cyberPurple/10 blur-[80px] rounded-full animate-pulse-slow" />
      
      <div className="max-w-md w-full glass-card p-6 md:p-8 border border-white/10 relative overflow-hidden rounded-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs font-mono text-slate-500">annepu_core_system.sh</span>
        </div>

        {/* Terminal Screen log */}
        <div className="font-mono text-sm min-h-[90px] flex flex-col justify-end space-y-2 mb-8">
          <div className="text-slate-500">$ sh boot_portfolio.sh --prod</div>
          <div className="text-cyberCyan text-glow-cyan flex items-center gap-2">
            <span className="w-2 h-4 bg-cyberCyan animate-ping flex-shrink-0" />
            <span>&gt; {loadingTexts[textIndex]}</span>
          </div>
          <div className="text-xs text-slate-500 mt-2">
            System status: {progress === 100 ? "Ready" : "Deploying serverless edge nodes..."}
          </div>
        </div>

        {/* Progress Track */}
        <div className="relative">
          <div className="h-[4px] w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyberPurple via-cyberBlue to-cyberCyan"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          <div className="flex justify-between items-center mt-3 font-mono text-xs text-slate-400">
            <span className="text-xs">ASSET_LOAD</span>
            <span className="text-cyberCyan font-bold text-glow-cyan">{progress}%</span>
          </div>
        </div>

        {/* Corner Cyber Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyberCyan/5 blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyberPurple/5 blur-xl pointer-events-none" />
      </div>
    </motion.div>
  );
}
