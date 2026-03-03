"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, Activity, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [bootSequence, setBootSequence] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] text-zinc-300 font-sans selection:bg-blue-500/30 relative overflow-hidden bg-[linear-gradient(#ffffff0a_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]">
      
      {/* Matches the max-w-5xl and padding of your Home page */}
      <main className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <header className="mb-20">
          {bootSequence && (
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-sm border border-blue-500/20 bg-blue-500/5 text-blue-500 text-[10px] font-mono mb-8 tracking-[0.2em] uppercase animate-in fade-in duration-700">
              <Activity size={10} className="animate-pulse" />
              SIGNAL_UPLINK_READY
            </div>
          )}
          <h1 className="text-5xl md:text-9xl font-bold text-white tracking-tighter uppercase font-mono mb-6">
            Contact info
          </h1>
          <p className="text-xl text-zinc-500 font-mono max-w-2xl leading-relaxed">
            Direct channels for collaboration or technical inquiries.
          </p>
        </header>

        {/* --- CONNECTION NODES (Left Aligned Wide Layout) --- */}
        <div className={`space-y-6 max-w-3xl ${bootSequence ? 'animate-in fade-in slide-in-from-bottom-4 duration-1000' : 'opacity-0'}`}>
          
          {/* Email Node - Wrap in <a> to make it clickable */}
          <a 
            href="mailto:ranveervirdi.mails@gmail.com" 
            className="group flex items-center justify-between p-8 bg-zinc-900/20 border border-zinc-800 rounded-sm hover:border-blue-500/40 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-sm group-hover:bg-blue-500/10 transition-colors">
                <Mail className="text-blue-500" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Email_Protocol</p>
                <p className="text-lg text-zinc-300 font-mono">ranveervirdi.mails@gmail.com</p>
              </div>
            </div>
            <ExternalLink size={18} className="text-zinc-700 group-hover:text-blue-500 transition-colors" />
          </a>

          {/* Location Node */}
          <div className="flex items-center justify-between p-8 bg-zinc-900/20 border border-zinc-800 rounded-sm">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-sm">
                <MapPin className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Base_Location</p>
                <p className="text-lg text-zinc-300 font-mono">Shivalik Hostel, IIT Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Social Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub - Replace '#' with your actual URL */}
            <a 
              href="https://github.com/RanveerSV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-8 bg-zinc-900/20 border border-zinc-800 rounded-sm hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4">
                <Github size={24} className="text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white">Github</span>
              </div>
              <ExternalLink size={14} className="text-zinc-800 group-hover:text-zinc-400" />
            </a>

            {/* LinkedIn - Replace '#' with your actual URL */}
            <a 
              href="https://linkedin.com/in/ranveersvirdi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-8 bg-zinc-900/20 border border-zinc-800 rounded-sm hover:border-blue-500/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <Linkedin size={24} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-blue-400">LinkedIn</span>
              </div>
              <ExternalLink size={14} className="text-zinc-800 group-hover:text-blue-900" />
            </a>
          </div>

        </div>

        {/* --- SYSTEM LOG FOOTER --- */}
        <footer className="mt-32 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
            Node_Status: Passive_Listener // Port_8080_Open
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>
        </footer>

      </main>
    </div>
  );
}