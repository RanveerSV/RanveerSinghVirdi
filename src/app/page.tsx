"use client";

import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, ChevronRight, Bot, Code, ZapIcon, Terminal, Box, Layers, Search } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [text, setText] = useState("");
  const [bootSequence, setBootSequence] = useState(false);
  const fullText = "RANVEER SINGH VIRDI";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
        setTimeout(() => setBootSequence(true), 200);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] text-zinc-300 font-sans selection:bg-blue-500/30 relative overflow-x-hidden bg-[linear-gradient(#ffffff0a_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]">
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        .fade-in-sequence {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* --- HUD DECORATIONS --- */}
      {bootSequence && (
        <div className="fixed top-24 left-6 z-50 pointer-events-none hidden md:block fade-in-sequence">
          <div className="text-[10px] font-mono text-blue-500/40 border-l border-blue-500/20 pl-2">
            <p>IIT_DELHI_CAMPUS</p>
            <p className="mt-1 text-zinc-600 tracking-tighter uppercase font-bold text-[8px]">Electrical_Engineering</p>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <header className="mb-20">
          {bootSequence && (
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-sm border border-blue-500/20 bg-blue-500/5 text-blue-500 text-[10px] font-mono mb-8 tracking-[0.2em] uppercase fade-in-sequence">
              <Activity size={10} className="animate-pulse" />
              AUTHENTICATION COMPLETE
            </div>
          )}
          
          <h1 className="text-5xl md:text-9xl font-bold text-white tracking-tighter leading-none mb-4 font-mono">
            {text}
            {!bootSequence && (
              <span className="inline-block w-2 h-10 md:h-20 bg-blue-600 ml-2 animate-pulse align-middle" />
            )}
          </h1>

          {bootSequence && (
            <h2 className="text-xl md:text-3xl text-zinc-500 font-mono tracking-tight uppercase fade-in-sequence">
              Electrical Engineer <span className="text-zinc-700 mx-2">||</span> Robotics Enthusiast
            </h2>
          )}
        </header>

        {/* --- CONTENT SECTION --- */}
        {bootSequence && (
          <div className="space-y-16">
            
            {/* System Overview (Restored Wording) */}
            <section className="fade-in-sequence" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 ">SYSTEM_OVERVIEW</span>
              </div>
              <p className="text-xl md:text-3xl text-zinc-400 leading-tight font-mono ">
                Currently a first-year undergraduate pursuing a B.Tech in Electrical Engineering at <span className="text-white">IIT Delhi</span>. 
                I have been a robotics enthusiast—loving the field and every intricate detail that comes with it—ever since my childhood.
              </p>
            </section>

            {/* Practical Intro */}
            <section className="fade-in-sequence" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 font-bold">EXECUTION_LOGIC</span>
              </div>
              <div className="space-y-8 text-zinc-400 font-mono text-lg leading-relaxed">
                <p>
                  I enjoy the practical side of engineering—getting prototypes to work and learning from the friction of the build. 
                  Whether it’s tinkering with PCB design, exploring digital logic with Verilog, or writing scripts in Python and C++, I rely on a mix of technical documentation and AI tools to bridge the gaps in my knowledge and keep moving forward.
                </p>
                <p className="text-zinc-500 italic">
                  Here’s a bit more on how that's looked in practice so far:
                </p>
              </div>
            </section>

            {/* Detailed Experience Modules */}
            <section className="space-y-16 fade-in-sequence" style={{ animationDelay: '600ms' }}>
              
              <div className="space-y-4">
                <h3 className="text-blue-500 text-[15px] font-mono uppercase tracking-widest border-b border-blue-500/20 pb-2 flex items-center gap-2 font-bold">
                  <Box size={12} /> BUILDING_SYSTEMS_FROM_SCRATCH
                </h3>
                <p className="text-base text-zinc-400 font-mono leading-relaxed">
                  I’ve been into robotics since middle school, and that "builder" mindset has led to some cool results. I’ve put together everything from a <span className="text-blue-300 font-bold">Hand Gesture Based Car</span> for fun, <span className="text-blue-300 font-bold">Autonomous Gardener</span> cause "why not" and a <span className="text-blue-300 font-bold">Smart Dustbin</span> as a ATL project to an <span className="text-blue-300 font-bold">IoT-based home security system</span> for my inner spy. 
                  More recently, I designed a power management PCB in EasyEDA for future projects and am building a <span className="text-blue-300 font-bold">Motorized Winch Lift Mechanism</span> for a mechanical project. These are some of the projects I've built from scratch that i didn't just design on a screen; I made sure the hardware actually works.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-purple-500 text-[15px] font-mono uppercase tracking-widest border-b border-purple-500/20 pb-2 flex items-center gap-2 font-bold">
                  <Zap size={12} /> APPLYING_AI_to_REAL_PROBLEMS
                </h3>
                <p className="text-base text-zinc-400 font-mono leading-relaxed">
                  I like taking complex tech like ML or TinyML and finding a use for it. I’ve built an <span className="text-purple-300 font-bold">Automatic Driver Drowsiness Detection System</span> and a <span className="text-purple-300 font-bold">WhatsApp chat analyzer</span> that uses NLP to figure out group dynamics. 
                  I have also built a new <span className="text-purple-300 font-bold">Audio Deepfake Detection Model</span> being way lighter and faster having a very comparable accuracy to the sota model used in modern day forensics. I’m also exploring how to optimize models to make hardware smarter without needing a massive server behind it.
                  I am also woring closely with ARIES(IIT Delhi's AI-ML club) to build a specialised version of ChatGPT fine-tuned for solving competitive programming problems and providing detailed explanations, which I hope will be a game-changer for students preparing for coding interviews and contests.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-yellow-500 text-[15px] font-mono uppercase tracking-widest border-b border-yellow-500/20 pb-2 flex items-center gap-2 font-bold">
                  <Activity size={12} /> COMPETING_AND_DELIVERING
                </h3>
                <p className="text-base text-zinc-400 font-mono leading-relaxed">
                  I’m not afraid of a deadline. I’ve won several competitions and hackathons over the years, including building <span className="text-yellow-200 font-bold">Edge Kavach</span> in a span of 3-hours and more recently working on a <span className="text-yellow-200 font-bold">PID Smart Line-Following Robot</span> for a hackathon being organised by Arduino. 
                  Whether it's fine-tuning a PID controller for a bot or deepfake detection in a dev sprint, I’m used to the pressure of making things work when it counts.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-green-500 text-[15px] font-mono uppercase tracking-widest border-b border-green-500/20 pb-2 flex items-center gap-2 font-bold">
                  <Layers size={12} /> THE_TECHNICAL_TOOLKIT
                </h3>
                <p className="text-base text-zinc-400 font-mono leading-relaxed">
                  I'm comfortable moving between languages and tools depending on what the project needs. I use <span className="text-green-300 font-bold">C++</span> for coding robots, competitive programming and optimising performance,
                   <span className="text-green-300 font-bold">Python</span> for machine learning, data handling and task automation, <span className="text-green-300 font-bold">Coppelia-Sim</span> for robotics simulation, and <span className="text-green-300 font-bold">EasyEDA</span> for PCB design. I’m also work using <span className="text-green-300 font-bold">Verilog</span> for digital logic design and have dabbled in web development with <span className="text-green-300 font-bold">React and Next.js</span> to build this very portfolio. 
                   I’m always on the lookout for new tools to add to my arsenal, and I’m not afraid to dive into documentation or experiment until I figure out how to make something work.
                </p>
              </div>
            </section>

            {/* Closing Generalist Statement */}
            <section className="fade-in-sequence" style={{ animationDelay: '800ms' }}>
              <div className="p-10 border border-zinc-800/50 bg-zinc-900/10 rounded-sm">
                <p className="text-lg text-zinc-400 font-mono leading-relaxed">
                  "I’m essentially a generalist who loves the "zero-to-one" phase of a project. I might not have thirty years of experience, but I have the persistence to troubleshoot a circuit at 3:00 AM until it works, and the curiosity to keep adding new tools to my belt." - <span className="text-zinc-100 font-bold">Ranveer Singh Virdi</span> <span className="text-zinc-600">(obviously)</span>
                </p>
              </div>
            </section>

            {/* Wide Navigation Matrix */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-sequence" style={{ animationDelay: '1000ms' }}>
              <Link href="/robotics" className="group p-10 bg-blue-900/20 border border-zinc-800/50 hover:border-blue-400/100 transition-all rounded-sm">
                <Bot className="text-blue-500/50 group-hover:text-blue-400 mb-6 transition-colors" size={32} />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold tracking-widest uppercase">Robotics</span>
                  <ChevronRight size={18} className="text-zinc-700 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-zinc-600 mt-2 font-mono uppercase tracking-tighter">PROJECT_CHASSIS</p>
              </Link>

              <Link href="/code" className="group p-10 bg-purple-900/20 border border-zinc-800/50 hover:border-purple-400/100 transition-all rounded-sm">
                <Code className="text-purple-500/50 group-hover:text-purple-400 mb-6 transition-colors" size={32} />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold tracking-widest uppercase">Code</span>
                  <ChevronRight size={18} className="text-zinc-700 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-zinc-600 mt-2 font-mono uppercase tracking-tighter">SCRIPTS_&_LOGIC</p>
              </Link>

              <Link href="/life" className="group p-10 bg-green-900/20 border border-zinc-800/50 hover:border-green-400/100 transition-all rounded-sm">
                <ZapIcon className="text-green-500/50 group-hover:text-green-400 mb-6 transition-colors" size={32} />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold tracking-widest uppercase">Life</span>
                  <ChevronRight size={18} className="text-zinc-700 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-zinc-600 mt-2 font-mono uppercase tracking-tighter">EXTERNAL_INTERRUPTS</p>
              </Link>
            </section>

          </div>
        )}

        {/* --- SYSTEM LOG FOOTER --- */}
        {bootSequence && (
          <footer className="mt-32 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 fade-in-sequence" style={{ animationDelay: '1200ms' }}>
            <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase">
              <span>© 2026 RANVEER SINGH VIRDI</span>
              <span className="hidden md:block">//</span>
              <span>IIT_DELHI_EE</span>
            </div>
            <div className="flex gap-6">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow shadow-[0_0_8px_#3b82f6]" />
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
          </footer>
        )}
      </main>
    </div>
  );
}