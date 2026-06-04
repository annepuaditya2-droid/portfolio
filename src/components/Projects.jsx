import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Github } from './Icons';

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'AI Travel Planner',
      category: 'AI / Agent',
      desc: 'Designed an end-to-end travel planning assistant using LangChain, Google Gemini, and Folium to generate optimized itineraries, maps, and PDF exports.',
      tech: ['LangChain', 'Gemini API', 'Python', 'React', 'Folium'],
      github: 'https://github.com/annepuaditya2-droid/plan-my-trip.git',
    },
    {
      id: 2,
      title: 'DocuMind Enterprise',
      category: 'RAG Assistant',
      desc: 'Built a retrieval-augmented generation solution with Pinecone and FastAPI to deliver context-aware document search and AI-assisted responses.',
      tech: ['Next.js', 'LangChain', 'Pinecone', 'FastAPI', 'Tailwind CSS'],
      github: 'https://github.com/annepuaditya2-droid/Advanced-RAG-SOP-Assistant-.git',
    },
    {
      id: 3,
      title: 'StatBot Pro',
      category: 'Fullstack Analytics',
      desc: 'Created an AI-driven CSV analytics platform with FastAPI and LangChain for natural language insights, automated chart generation, and data validation.',
      tech: ['FastAPI', 'Next.js', 'LangChain', 'Chart.js', 'Google Gemini'],
      github: 'https://github.com/annepuaditya2-droid/Auto-CSV-Data-Analysta',
    },
  ];

  return (
    <section id="projects" className="relative py-24 border-t border-white/5">
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-cyberCyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-cyberPurple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-xs font-mono tracking-widest text-cyberCyan uppercase mb-2">04 // Projects</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white font-sans">
              Featured Projects
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyberCyan to-cyberPurple rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-6 rounded-3xl border border-white/10 hover:border-cyberCyan/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500">
                  {project.category}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-white mb-3">{project.title}</h4>
              <p className="text-slate-400 text-sm leading-6 mb-6 min-h-[80px]">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-3 border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-100 text-sm font-medium hover:bg-slate-800 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
