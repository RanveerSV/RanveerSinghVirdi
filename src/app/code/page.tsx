"use client";

import React, { useState, useEffect } from 'react';
import { 
  Terminal, Cpu, Database, Github, Activity, Layers, 
  MessageSquare, ShieldCheck, BrainCircuit, Code2, 
  Lock, FastForward, Zap, Globe, AlertTriangle, Cloud,
  Binary, Command, Trophy, TrendingUp, ExternalLink
} from 'lucide-react';

export default function Code() {
  const [bootSequence, setBootSequence] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] text-zinc-300 font-sans selection:bg-purple-500/30 relative overflow-x-hidden bg-[linear-gradient(#ffffff0a_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]">
      
      <style jsx global>{`
        .fade-in-sequence {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover-effect:hover {
          border-color: rgba(168, 85, 247, 0.6);
          background-color: rgba(168, 85, 247, 0.03);
          transform: translateY(-2px);
        }
      `}</style>

      {/* --- HUD DECORATIONS --- */}
      {bootSequence && (
        <div className="fixed top-24 left-6 z-50 pointer-events-none hidden md:block fade-in-sequence">
          <div className="text-[10px] font-mono text-purple-500/40 border-l border-purple-500/20 pl-2">
            <p>LOGIC_KERNEL</p>
            <p className="mt-1 text-zinc-600 tracking-tighter uppercase font-bold text-[8px]">Module_02 // Software_Architecture</p>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        
        {/* --- HEADER --- */}
        <header className="mb-20">
          {bootSequence && (
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-sm border border-purple-500/20 bg-purple-500/5 text-purple-500 text-[10px] font-mono mb-8 tracking-[0.2em] uppercase fade-in-sequence">
              <Terminal size={10} className="animate-pulse" />
              Compiler_Uplink_Active
            </div>
          )}
          <h1 className="text-5xl md:text-9xl font-bold text-white tracking-tighter uppercase font-mono mb-6">
            Code
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-mono max-w-3xl leading-relaxed">
            Architecting systems that think and learn. 
            A collection of deep learning models, automation scripts, and full-stack logic built at <span className="text-purple-500 font-bold">IIT Delhi</span>.
          </p>
        </header>

        {/* --- LOGIC_KERNEL // ACHIEVEMENTS (Gold Theme) --- */}
        <section className="mb-24 space-y-12">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '200ms' }}>
            <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_#eab308]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Logic_Kernel // Achievements</span>
          </div>

          <div className="grid grid-cols-1 gap-12">
            
            {/* WIN: ARIES LEVEL UP CHALLENGE */}
            <div className={`p-10 bg-zinc-900/10 border border-yellow-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                <span className="text-[10px] font-mono bg-yellow-500/10 text-yellow-500 px-3 py-1 border border-yellow-500/20 uppercase tracking-widest whitespace-nowrap">Winner // Aries Challenge</span>
              </div>

              <div className="flex items-center gap-4 mb-8 pr-48">
                <TrendingUp className="text-yellow-500" size={32} />
                <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-tight">
                  Aries Level Up: Beating SOTA
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-400 font-mono text-base leading-relaxed max-w-4xl">
                  I secured first place in the <span className="text-yellow-500 font-bold">Level Up Challenge</span> organized by <span className="text-white font-bold">Aries</span>. The core objective was to surpass the current State-of-the-Art (SOTA) score for the <span className="text-white font-bold">Mercedes-Benz Greener Manufacturing</span> competition. 
                </p>

                <p className="text-zinc-400 font-mono text-base leading-relaxed max-w-4xl">
                  My winning strategy involved <span className="text-yellow-500 font-bold">blending three distinct models</span>, each independently optimized to handle different facets of the high-dimensional feature set. I observed that the initial ensemble results were consistently a little below the expected baseline. By implementing a custom <span className="text-yellow-500 font-bold">output scaling logic</span> to normalize these predictions, I was able to successfully beat the SOTA score.
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-zinc-900/50">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Techniques_Deployed:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Model Blending', 'Output Scaling', 'Feature Optimization', 'Kaggle SOTA'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WIN: EDGE KAVACH (Clickable Card) */}
            <a 
              href="https://github.com/RanveerSV/edge-kavach" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block p-10 bg-zinc-900/10 border border-yellow-500/30 rounded-sm relative overflow-hidden card-hover-effect group ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} 
              style={{ animationDelay: '400ms' }}
            >
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <Github className="text-yellow-500/50 group-hover:text-yellow-500 transition-colors" size={18} />
                  <span className="text-[10px] font-mono bg-yellow-500/10 text-yellow-500 px-3 py-1 border border-yellow-500/20 uppercase tracking-widest whitespace-nowrap">3rd_Place // Hackathon</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8 pr-48">
                <ShieldCheck className="text-yellow-500" size={32} />
                <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-tight group-hover:text-yellow-500 transition-colors">
                  Edge Kavach: Multilingual Protection
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-400 font-mono text-base leading-relaxed max-w-4xl">
                  Awarded <span className="text-yellow-500 font-bold">3rd place</span> for a real-time scam detection system built for the Indian linguistic landscape. Developed on the <span className="text-white font-bold">Cloudflare platform</span> using <span className="text-white font-bold">AI4Bharat</span> open-source models, the prototype supports all <span className="text-yellow-500 font-bold">22 official Indian languages</span>.
                </p>

                <div className="bg-yellow-500/5 border-l-2 border-yellow-500/30 p-6 my-6">
                  <h4 className="text-yellow-400 text-xs font-mono uppercase mb-4 tracking-widest flex items-center gap-2">
                    <Zap size={12} /> 5-Stage_Logic_Flow
                  </h4>
                  <ul className="grid grid-cols-1 gap-3 text-sm font-mono text-zinc-400">
                    <li className="flex gap-3"><span className="text-yellow-500/50">01</span> <span><span className="text-white font-bold">Ingestion:</span> Capture of native Indian Audio.</span></li>
                    <li className="flex gap-3"><span className="text-yellow-500/50">02</span> <span><span className="text-white font-bold">Transcription:</span> Audio to Indian Text conversion via AI4Bharat layers.</span></li>
                    <li className="flex gap-3"><span className="text-yellow-500/50">03</span> <span><span className="text-white font-bold">Semantic Pivot:</span> Conversion to English Text for LLM reasoning.</span></li>
                    <li className="flex gap-3"><span className="text-yellow-500/50">04</span> <span><span className="text-white font-bold">Threat Analysis:</span> LLM-driven scam pattern identification.</span></li>
                    <li className="flex gap-3"><span className="text-yellow-500/50">05</span> <span><span className="text-white font-bold">Native Feedback:</span> Result back-translation into user&apos;s native tongue.</span></li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-8 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-2">
                  {['Multilingual NLP', 'Cloudflare Workers', 'AI4Bharat STT', 'Scam Deterrence'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 right-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest">View_Source_Code</span>
                <ExternalLink size={12} className="text-yellow-500" />
              </div>
            </a>
          </div>
        </section>

        {/* --- DEPLOYED_LOGIC // AI & MODELS (Purple Theme) --- */}
        <section className="mb-24 space-y-12">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '500ms' }}>
            <div className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_8px_#9333ea]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Deployed_Logic // AI & Models</span>
          </div>

          <div className="grid grid-cols-1 gap-12">

            {/* PROJECT: PROMPT-BASED WHATSAPP ORACLE (Clickable Card) */}
            <a 
              href="https://github.com/RanveerSV/MostLikely" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block p-10 bg-zinc-900/10 border border-purple-500/30 rounded-sm relative overflow-hidden card-hover-effect group ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} 
              style={{ animationDelay: '600ms' }}
            >
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <Github className="text-purple-500/50 group-hover:text-purple-500 transition-colors" size={18} />
                  <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-3 py-1 border border-purple-500/20 uppercase tracking-widest whitespace-nowrap">System_Deployed</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8 pr-48">
                <MessageSquare className="text-purple-500" size={32} />
                <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-tight group-hover:text-purple-500 transition-colors">
                  WhatsApp Oracle: Personality Ranking
                </h3>
              </div>

              <p className="text-zinc-400 font-mono text-base mb-4 leading-relaxed max-w-4xl">
                This is a <span className="text-purple-500 font-bold">prompt-based ranking system</span> designed to decode group chat dynamics through 3 distinct processing modules. Each module generates a detailed <span className="text-white font-bold">Character Card</span> for every participant, scoring them against the <span className="text-purple-500 font-bold">BIG 5 Personality Scheme</span> (OCEAN). <br /><br />
                The system functions as a queryable oracle: when given a prompt such as <span className="italic">&quot;Who is most likely to...&quot;</span>, the engine uses <span className="text-purple-500 font-bold">cosine similarity</span> to rank individuals based on their personality traits. It transforms thousands of unstructured messages into a highly accurate predictive model of individual social archetypes.
              </p>

              <p className="text-zinc-600 font-mono text-xs mb-8 italic">
                Built for use on your own chats, with the consent of everyone in them.
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Logic_Kernel:</span>
                <div className="flex flex-wrap gap-2">
                  {['BIG 5 Schema', 'Cosine Similarity', 'Character Card Synthesis', 'Oracle Ranking'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 right-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-purple-500 uppercase tracking-widest">View_Source_Code</span>
                <ExternalLink size={12} className="text-purple-500" />
              </div>
            </a>
          </div>
        </section>

        <footer className="mt-32 pt-8 border-t border-zinc-900/50 flex justify-between items-center opacity-40">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
            Module_Code // IIT_DELHI_EE
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_#a855f7]" />
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>
        </footer>

      </main>
    </div>
  );
}
