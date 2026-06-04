import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Trophy, Award, Target, Activity } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "SR University Hackathon 2026",
      subtitle: "Innovator & Developer",
      desc: "Developed an autonomous agentic solution addressing real-world API challenges, recognized for system design excellence and low-latency implementation.",
      icon: Trophy,
      color: "from-amber-500/20 to-yellow-500/10 border-yellow-500/30 text-yellow-400",
    },
    {
      title: "HackWithInfy 2026",
      subtitle: "National Coding Competitor",
      desc: "Ranked among top performers nationally in advanced algorithmic problem solving, graph theory applications, and structural system optimization.",
      icon: Award,
      color: "from-cyberCyan/20 to-cyberBlue/10 border-cyberCyan/30 text-cyberCyan",
    },
    {
      title: "Technical Coding Assessments",
      subtitle: "Top 1% Rank",
      desc: "Consistently ranked in the top percentiles in data structures, algorithms, and SQL backend engineering query optimizations across standard industry benchmarks.",
      icon: Target,
      color: "from-cyberPurple/20 to-neonPink/10 border-cyberPurple/30 text-cyberPurple",
    }
  ];

  return (
    <section id="achievements" className="relative py-24 border-t border-white/5">
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-cyberCyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[250px] h-[250px] bg-cyberPurple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyberCyan uppercase mb-2">05 // Milestones</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white font-sans">
              Awards & Achievements
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyberCyan to-cyberPurple rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <ScrollReveal key={ach.title} delay={idx * 0.1}>
                <div className={`group p-6 rounded-2xl glass-card border flex flex-col justify-between h-full hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br ${ach.color}`}>
                  <div>
                    {/* Icon badge */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold font-sans text-white mb-1 group-hover:text-white/90 transition-colors">
                      {ach.title}
                    </h4>
                    <p className="text-xs font-mono mb-4 text-slate-300 opacity-90">{ach.subtitle}</p>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500">
                    <span>RECORD_VERIFIED</span>
                    <Activity className="w-3.5 h-3.5 opacity-60 animate-pulse" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
