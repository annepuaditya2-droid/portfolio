import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Calendar, Briefcase, ChevronRight, Cpu, BookOpen } from 'lucide-react';

const timeline = [
  {
    title: 'B.Tech Electronics & Communication Engineering',
    subtitle: 'SR University, India',
    period: '2023 – 2027',
    type: 'Education',
    highlights: [
      'Relevant coursework: Data Structures, Embedded Systems, Digital Communications, AI Systems.',
      'Maintained a 9.2 CGPA while leading campus tech projects.',
    ],
    tags: ['ECE', 'Embedded Systems', 'DSA', 'AI Fundamentals'],
  },
  {
    title: 'Software Engineering Intern',
    subtitle: 'Tech Startups & Systems Group',
    period: 'April 2025 – May 2025',
    type: 'Internship',
    highlights: [
      'Built modular backend APIs with Python and Node.js for high-throughput services.',
      'Created automated workflows and validation systems that reduced manual effort by 40%.',
    ],
    tags: ['FastAPI', 'REST APIs', 'Automation', 'Agile'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-t border-white/5">
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-cyberPurple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-cyberCyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyberCyan uppercase mb-2">05 // Experience</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white font-sans">
              Experience & Education
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyberCyan to-cyberPurple rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {timeline.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.12}>
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-darkBg border-2 border-cyberCyan flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.4)]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyberCyan" />
              </div>

              <div className="group glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-cyberCyan/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-slate-400 text-sm font-mono">{item.subtitle}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-mono text-slate-300">
                    {index === 0 ? <BookOpen className="w-4 h-4 text-cyberCyan" /> : <Briefcase className="w-4 h-4 text-cyberCyan" />}
                    {item.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-slate-400 text-sm leading-7">
                  {item.highlights.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-cyberPurple mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
