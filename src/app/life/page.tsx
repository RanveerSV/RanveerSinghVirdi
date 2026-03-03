"use client";

import React, { useState, useEffect } from 'react';
import { Zap, Music, Trophy, Target, Mountain, Activity, Theater, Drum, Wind, ListMusic } from 'lucide-react';

export default function Life() {
  const [bootSequence, setBootSequence] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] text-zinc-300 font-sans selection:bg-green-500/30 relative overflow-x-hidden bg-[linear-gradient(#ffffff0a_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]">
      
      <style jsx global>{`
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
          <div className="text-[10px] font-mono text-green-500/40 border-l border-green-500/20 pl-2">
            <p>EXTERNAL_INTERRUPTS</p>
            <p className="mt-1 text-zinc-600 tracking-tighter uppercase font-bold text-[8px]">Module_03 // Vibe_Parameters</p>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        
        {/* --- HEADER --- */}
        <header className="mb-20">
          {bootSequence && (
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-sm border border-green-500/20 bg-green-500/5 text-green-500 text-[10px] font-mono mb-8 tracking-[0.2em] uppercase fade-in-sequence">
              <Zap size={10} className="animate-pulse" />
              Human_Interface_Initialized
            </div>
          )}
          <h1 className="text-5xl md:text-9xl font-bold text-white tracking-tighter uppercase font-mono mb-6">
            Life
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-mono max-w-3xl leading-relaxed">
            Beyond the soldering iron and the terminal. 
            A log of physical training, sonic preferences, and the parameters that define my downtime.
          </p>
        </header>

        {/* --- ACHIEVEMENTS // SYSTEM MILESTONES --- */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '200ms' }}>
            <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_#eab308]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">System_Milestones // Achievements</span>
          </div>

          <div className={`p-10 bg-zinc-900/10 border border-yellow-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div className="absolute top-0 right-0 p-6 flex gap-2">
              <span className="text-[10px] font-mono bg-yellow-500/10 text-yellow-400 px-3 py-1 border border-yellow-500/20 uppercase tracking-widest">Peak_Performance</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Tennis Freshers GC 2025</h3>
            <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
              I managed to secure the <span className="text-yellow-500 font-bold">Gold</span> in the <span className="text-yellow-500 font-bold">Tennis Freshers General Championship 2025</span> here at <span className="text-white font-bold">IIT Delhi</span>. It was a massive win for me early on in my first year, and it definitely sets the bar high for whatever competitive stuff I take on next.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Win_Log:</span>
              <div className="flex flex-wrap gap-3">
                {['Tennis Freshers Gold', 'IIT Delhi GC 2025', 'Competitive Mastery'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- ATHLETICS // SQUASH & BOXING --- */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '400ms' }}>
            <div className="w-2 h-2 rounded-full bg-green-600 shadow-[0_0_8px_#16a34a]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Physical_Engine // Athletics</span>
          </div>

          <div className={`p-10 bg-zinc-900/10 border border-green-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Sports</h3>

            <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
              My main sport right now is <span className="text-green-500 font-bold">Squash</span>. I spend a lot of my evenings at the IIT Delhi courts—it's a game of split-second decisions and constant movement. It’s basically chess at 100mph; you have to read the angles and your opponent’s positioning before the ball even hits the wall. When I need to blow off some steam after a long day in the lab, I lean into <span className="text-green-500 font-bold">Boxing</span> or head out for an <span className="text-green-500 font-bold">occasional 5K run</span>. My current 5K personal best is <span className="text-green-500 font-bold">27 minutes 33 seconds</span>, and I'm always looking to shave a few seconds off that time.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Physical_Activity:</span>
              <div className="flex flex-wrap gap-3">
                {['Squash', 'Boxing', '5K Run: 27-min PB', 'High-Intensity'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- DIGITAL ENVIRONMENTS // GAMING --- */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '600ms' }}>
            <div className="w-2 h-2 rounded-full bg-green-600/50" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Digital_Environments // Gaming</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-10 bg-zinc-900/10 border border-green-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-green-500" size={20} />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Competitive_Combat</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 font-mono uppercase">Call of Duty</h4>
              <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-6">
                My current rank is <span className="text-green-500 font-bold">Grandmaster II</span>. It’s all about precision and that rapid tactical awareness when things get heated in ranked matches.
              </p>
            </div>

            <div className={`p-10 bg-zinc-900/10 border border-green-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <Mountain className="text-green-500" size={20} />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Zero_Error_Survival</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 font-mono uppercase">Minecraft Hardcore</h4>
              <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-6">
                I’ve got a <span className="text-green-500 font-bold">200-day old Hardcore world</span> running right now. It’s basically engineering in a zero-error environment—one slip-up and the whole world is gone.
              </p>
            </div>
          </div>
        </section>

        {/* --- AUDIO LOG // SONICS --- */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '900ms' }}>
            <div className="w-2 h-2 rounded-full bg-green-600/50" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Audio_Log // Sonics</span>
          </div>
          <div className={`p-10 bg-zinc-900/10 border border-green-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Drum className="text-green-500" size={24} />
              <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-tight">Rhythm & Lyrical Memory</h3>
            </div>
            <p className="text-zinc-400 font-mono text-base mb-6 leading-relaxed">
              Music is the main background process for my workflow, mostly leaning into <span className="text-green-500 font-bold">English pop, rock, and metal</span>. I used to <span className="text-green-500 font-bold">drum</span> quite a bit in my school days, which gave me a deep appreciation for rhythm. For some reason, I’ve ended up memorizing the lyrics to <span className="text-green-500 font-bold">over 600 songs</span>—it’s like a massive background database that’s just always there.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Acoustic_Tags:</span>
              <div className="flex flex-wrap gap-2">
                {['Drums', 'Lyrical Memory: 600+', 'Pop', 'Rock', 'Metal'].map(tag => (
                  <span key={tag} className="text-[9px] font-mono border border-zinc-800 px-2 py-0.5 text-zinc-600 uppercase">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PERFORMANCE ART // DRAMA --- */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '1100ms' }}>
            <div className="w-2 h-2 rounded-full bg-green-600/50" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Performance_Art // Drama</span>
          </div>

          <div className={`p-10 bg-zinc-900/10 border border-green-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Theater className="text-green-500" size={24} />
              <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-tight">Shivalik Mime Team</h3>
            </div>
            <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
              I stepped into the world of theater by joining the <span className="text-green-500 font-bold">Shivalik Mime team</span>. Telling stories and expressing emotions entirely through movement and silence was a completely different challenge. I really enjoyed the team energy and the whole process of performing without saying a single word.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Stage_Log:</span>
              <div className="flex flex-wrap gap-3">
                {['Shivalik Hostel', 'Mime Performance', 'Theatrical Expression'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-32 pt-8 border-t border-zinc-900/50 flex justify-between items-center opacity-40">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
            Module_Life // IIT_DELHI_EE
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>
        </footer>

      </main>
    </div>
  );
}