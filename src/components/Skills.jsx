import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Code, Server, Brain, Layout, Database, Terminal, ShieldAlert } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "from-cyberCyan to-cyberBlue",
      glowColor: "group-hover:border-cyberCyan/40",
      skills: ["Python", "JavaScript", "SQL"]
    },
    {
      title: "Backend & Systems",
      icon: Server,
      color: "from-cyberBlue to-cyberPurple",
      glowColor: "group-hover:border-cyberBlue/40",
      skills: ["REST APIs", "Node.js", "System Design", "Backend Architecture"]
    },
    {
      title: "AI & ML",
      icon: Brain,
      color: "from-cyberPurple to-neonPink",
      glowColor: "group-hover:border-cyberPurple/40",
      skills: ["LangChain", "Pinecone", "RAG", "Agentic Workflows", "ANN", "PCA", "Google Gemini"]
    },
    {
      title: "Frontend",
      icon: Layout,
      color: "from-neonGreen to-cyberCyan",
      glowColor: "group-hover:border-neonGreen/40",
      skills: ["Streamlit", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Core CS",
      icon: Database,
      color: "from-neonPink to-cyberPurple",
      glowColor: "group-hover:border-neonPink/40",
      skills: ["DSA", "OOP", "DBMS"]
    }
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-white/5">
      <div className="absolute top-[40%] left-[10%] w-[300px] h-[300px] bg-cyberCyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[10%] right-[5%] w-[250px] h-[250px] bg-neonGreen/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyberCyan uppercase mb-2">02 // Skills</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white font-sans">
              Core Skills & Technologies
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyberCyan to-cyberPurple rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.title} delay={catIndex * 0.1}>
                <div className={`group p-6 rounded-2xl glass-card border border-white/8 h-full flex flex-col justify-between transition-all duration-300 ${category.glowColor} hover:scale-[1.02]`}>
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold font-sans text-white group-hover:text-cyberCyan transition-colors">
                        {category.title}
                      </h4>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-slate-300 hover:bg-white/10 hover:border-white/10 hover:text-white transition-colors duration-200"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Aesthetic detail bottom accent */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>STATUS: OK</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
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
