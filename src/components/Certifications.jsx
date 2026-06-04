import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Award, CheckCircle, ExternalLink, Calendar } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Artificial Intelligence Internship",
      issuer: "AI Research & Learning Center",
      period: "Winter 2025",
      skills: ["Neural Networks", "Google Gemini API", "LLM Fine-tuning", "Retrieval pipelines"],
      desc: "Completed rigorous hands-on practical curriculum focusing on deploying Deep Learning models, prompt engineering, and building agent architectures."
    },
    {
      title: "Graph Theory Camp",
      issuer: "Advanced Mathematics Association",
      period: "Summer 2024",
      skills: ["Graph Algorithms", "Network Flow", "Combinatorics", "Path Optimization"],
      desc: "Studied complex data graph representations, pathfinding algorithm optimization, routing math, and structural node analysis."
    }
  ];

  return (
    <section id="certifications" className="relative py-24 border-t border-white/5">
      <div className="absolute top-[30%] right-[-10%] w-[280px] h-[280px] bg-cyberCyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-cyberPurple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyberCyan uppercase mb-2">06 // Credentials</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white font-sans">
              Certifications & Training
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyberCyan to-cyberPurple rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <ScrollReveal key={cert.title} delay={idx * 0.15}>
              <div className="group p-6 rounded-2xl glass-card border border-white/8 hover:border-cyberCyan/25 transition-all duration-300 relative flex flex-col justify-between h-full">
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyberCyan/10 border border-cyberCyan/20 flex items-center justify-center text-cyberCyan">
                        <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold font-sans text-white group-hover:text-cyberCyan transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-mono text-slate-400 mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 text-left">
                    {cert.desc}
                  </p>
                </div>

                <div>
                  {/* Skill tags learned */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded bg-white/5 border border-white/5 font-mono text-[9px] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Verification footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
                    <div className="flex items-center gap-1.5 text-emerald-400/80">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>CREDENTIAL ACTIVE</span>
                    </div>
                    <span className="opacity-60 cursor-not-allowed flex items-center gap-1">
                      Verify <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
