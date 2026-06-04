import React, { useEffect } from 'react';

export default function BackgroundGrid() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-cyberPurple/8 blur-[130px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyberCyan/6 blur-[130px] animate-pulse-slow" />
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-cyberBlue/4 blur-[150px] animate-float" />

      {/* Cursor dynamic radial glow */}
      <div className="cursor-glow" />

      {/* Futuristic grid mesh */}
      <div className="absolute inset-0 cyber-grid opacity-80" />
    </div>
  );
}
