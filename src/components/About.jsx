import React from 'react';
import ScrollReveal from './ScrollReveal';
import { User, Cpu, ShieldAlert, BarChart3, Clock, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'LLM Response TTFT', value: '< 150ms', icon: Clock, desc: 'Low-latency agent pipelines' },
    { label: 'Vector Stores Indexed', value: '100k+', icon: Cpu, desc: 'Optimized RAG retrievals' },
    { label: 'Automated Workflows', value: '15+', icon: Zap, desc: 'Efficiency & cron scripts' },
    { label: 'API Integrations', value: '25+', icon: BarChart3, desc: 'Robust backend systems' },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/5">
      {/* Decorative background lights */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-cyberCyan/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-cyberPurple/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyberCyan uppercase mb-2">01 // About Me</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white font-sans">
              Professional focus on system-level AI, backend engineering, and embedded-aware software.
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyberCyan to-cyberPurple rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <h4 className="text-xl md:text-2xl font-bold font-sans text-white">
                B.Tech Electronics & Communication Engineering student (Class of 2027) building professional AI workflows, backend services, and embedded-aware system integrations.
              </h4>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed space-y-4">
                I deliver structured engineering solutions with a focus on Python, data structures, scalable APIs, and agentic AI. My work is shaped by production-readiness, low-latency inference, and clean architecture.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                I combine backend systems, vector retrieval, and hardware-aware design to create practical applications that meet hiring manager expectations for reliability, performance, and maintainability.
              </p>
            </ScrollReveal>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <ScrollReveal key={stat.label} delay={0.1 * index + 0.3}>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-cyberCyan" />
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{stat.label}</span>
                      </div>
                      <div className="text-xl md:text-2xl font-bold font-mono text-white text-glow-cyan">{stat.value}</div>
                      <div className="text-xs text-slate-400 mt-1">{stat.desc}</div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Terminal Profile Block */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.3}>
              <div className="w-full rounded-2xl glass-card border border-white/10 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/5 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <span className="ml-2 text-slate-500 text-[10px]">aditya_profile.yaml</span>
                  </div>
                  <span className="text-[10px] text-cyberCyan opacity-80">YAML 1.2</span>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-left text-slate-300 select-none bg-black/30">
                  <div>
                    <span className="text-cyberPurple">developer:</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyberPurple">name:</span> <span className="text-cyberCyan">Aditya Annepu</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyberPurple">academic:</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-cyberPurple">degree:</span> <span className="text-slate-400">B.Tech ECE</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-cyberPurple">timeline:</span> <span className="text-slate-400">2023 - 2027</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyberPurple">specialties:</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-500">-</span> <span className="text-slate-400">Scalable Backend Systems</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-500">-</span> <span className="text-slate-400">Autonomous AI Workflows</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-500">-</span> <span className="text-slate-400">Retrieval-Augmented Generation</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyberPurple">core_stack:</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-cyberPurple">languages:</span> <span className="text-slate-400">[Python, JS, SQL]</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-cyberPurple">frameworks:</span> <span className="text-slate-400">[LangChain, FastAPI, Next.js]</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-cyberPurple">vector_db:</span> <span className="text-slate-400">[Pinecone]</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyberPurple">status:</span> <span className="text-emerald-400 font-bold">Building_Agents</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
