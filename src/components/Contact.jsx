import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Mail, Send, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate server ingestion latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Auto clear success status
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-white/5">
      <div className="absolute top-[30%] left-[-10%] w-[320px] h-[320px] bg-cyberCyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[350px] h-[350px] bg-cyberPurple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-xs font-mono tracking-widest text-cyberCyan uppercase mb-2">07 // Connection</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white font-sans">
              Get In Touch
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyberCyan to-cyberPurple rounded-full mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left Column: Direct details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl glass-card border border-white/8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyberCyan/10 flex items-center justify-center text-cyberCyan">
                  <MessageSquare className="w-5 h-5 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold font-sans text-white">Let's build together</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed text-left">
                I am actively seeking backend developer and AI systems internship roles. Whether you have an API project to scale, vector databases to index, or want to discuss system architectures, feel free to reach out!
              </p>
            </div>

            {/* Quick contact list */}
            <div className="space-y-4 my-8 text-left">
              <a 
                href="mailto:annepuaditya2@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyberCyan/30 hover:bg-white/10 transition-all duration-200 group"
              >
                <Mail className="w-5 h-5 text-cyberCyan group-hover:scale-110 transition-transform" />
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none mb-1">Direct Mail</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-mono truncate">annepuaditya2@gmai.com</span>
                </div>
              </a>

              <a 
                href="https://github.com/annepuaditya2-droid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyberCyan/30 hover:bg-white/10 transition-all duration-200 group"
              >
                <Github className="w-5 h-5 text-cyberPurple group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none mb-1">GitHub</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-mono">github.com/annepuaditya2-droid</span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/adityaannepu2305a41184/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyberCyan/30 hover:bg-white/10 transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-cyberBlue group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none mb-1">LinkedIn</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-mono">linkedin.com/in/adityaannepu2305a41184</span>
                </div>
              </a>
            </div>

            {/* Direct status footer badge */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>TLS SECURE CHANNEL ENABLED</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl glass-card border border-white/8 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/8 text-white placeholder-slate-600 focus:outline-none focus:border-cyberCyan focus:ring-1 focus:ring-cyberCyan transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/8 text-white placeholder-slate-600 focus:outline-none focus:border-cyberCyan focus:ring-1 focus:ring-cyberCyan transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Hi Aditya, let's talk about building an AI agent..."
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/8 text-white placeholder-slate-600 focus:outline-none focus:border-cyberCyan focus:ring-1 focus:ring-cyberCyan transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyberPurple to-cyberBlue text-white font-medium hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Routing package...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Message Received!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
