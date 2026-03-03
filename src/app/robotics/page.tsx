"use client";

import React, { useState, useEffect } from 'react';
import { Bot, Cpu, Zap, Activity, Box, Terminal, Layers, Trophy, Target, ShieldCheck, Camera, Eye, Home, Wrench } from 'lucide-react';

export default function Robotics() {
  const [bootSequence, setBootSequence] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] text-zinc-300 font-sans selection:bg-blue-500/30 relative overflow-x-hidden bg-[linear-gradient(#ffffff0a_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]">
      
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

      {bootSequence && (
        <div className="fixed top-24 left-6 z-50 pointer-events-none hidden md:block fade-in-sequence">
          <div className="text-[10px] font-mono text-blue-500/40 border-l border-blue-500/20 pl-2">
            <p>ROBOTICS_CHASSIS</p>
            <p className="mt-1 text-zinc-600 tracking-tighter uppercase font-bold text-[8px]">Module_01 // Hardware_Logic</p>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        
        <header className="mb-20">
          {bootSequence && (
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-sm border border-blue-500/20 bg-blue-500/5 text-blue-500 text-[10px] font-mono mb-8 tracking-[0.2em] uppercase fade-in-sequence">
              <Activity size={10} className="animate-pulse" />
              Autonomous_Systems_Initialized
            </div>
          )}
          <h1 className="text-5xl md:text-9xl font-bold text-white tracking-tighter uppercase font-mono mb-6">
            Robotics
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-mono max-w-3xl leading-relaxed">
            From childhood curiosity to building <span className="text-blue-500 font-bold">IIT Delhi</span> prototypes. 
            This is a log of hardware that actually moves—designed, soldered, and debugged from scratch.
          </p>
        </header>

        {/* --- SECTION 1: CURRENT FOCUS // IN DEVELOPMENT --- */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '200ms' }}>
            <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Current_Focus // In_Development</span>
          </div>

          <div className="grid grid-cols-1 gap-12">
            
            <div className={`p-10 bg-zinc-900/10 border border-blue-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <div className="absolute top-0 right-0 p-6">
                <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-3 py-1 border border-blue-500/20 uppercase tracking-widest">WIP_STATUS // PDI_COURSE</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Motorized Winch Lift Mechanism</h3>
              <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
                As part of my <span className="text-blue-400 font-bold">Product Design and Innovation (PDI)</span> course in the second semester, my team was tasked with building a functional prototype of a motorized winch. However, we didn't want to build a standard model—we were asked to innovate. <br /><br />
                The project focuses on two core technical shifts. First, we are redesigning the powertrain by adding a secondary pair of gears to rotate the winding shaft by $90^\circ$, making it <span className="text-blue-400 font-bold">antiparallel to the motor shaft</span>. This effectively slashes the machine's footprint, making it viable for tight industrial spaces. Second, we are augmenting the system with <span className="text-blue-400 font-bold">rotary encoders and an ESP32</span>. This allows the winch to transition from a "dumb" machine to a precision tool capable of millimeter-accurate height control, significantly elevating its value for automated logistics.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-3">
                  {['Antiparallel Gearing', 'ESP32 Control', 'Rotary Encoders', 'Precision Mechatronics'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`p-10 bg-zinc-900/10 border border-blue-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <div className="absolute top-0 right-0 p-6">
                <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-3 py-1 border border-blue-500/20 uppercase tracking-widest">WIP_STATUS</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">PID Smart Line-Following Robot</h3>
              <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
                This isn't your standard hobbyist line-follower; it's a high-velocity autonomous system built for an <span className="text-blue-400 font-bold">Arduino-organized hackathon</span>. I'm utilizing a specialized <span className="text-blue-400 font-bold">5-sensor array</span> to feed real-time positional data into a high-speed control loop. <br /><br />
                The real work lies in fine-tuning the <span className="text-blue-400 font-bold">PID control algorithms</span>. By carefully balancing the $K_p, K_i,$ and $K_d$ constants, I’m optimizing for maximum throughput—ensuring the robot can navigate sharp intersections and high-speed straights with minimal oscillation. Every microsecond of latency counts when you're aiming for a first-place finish.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-3">
                  {['PID Tuning', 'Sensor Fusion', 'Interrupt-driven IO', 'Embedded C++'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: ROBOTICS_MILESTONES // ACHIEVEMENTS --- */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '500ms' }}>
            <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_#eab308]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Robotics_Milestones // Achievements</span>
          </div>

          <div className="grid grid-cols-1 gap-12">
            
            <div className={`p-10 bg-zinc-900/10 border border-yellow-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              <div className="absolute top-0 right-0 p-6 flex gap-2">
                <span className="text-[10px] font-mono bg-yellow-500/10 text-yellow-400 px-3 py-1 border border-yellow-500/20 uppercase tracking-widest">Competition_Winner</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Inter-Hostel Robotics Victory</h3>
              <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
                One of my proudest early wins at IIT Delhi was the <span className="text-yellow-500 font-bold">Inter-Hostel Robotics Competition</span>. My team and I were tasked with simulating a robot in <span className="text-yellow-500 font-bold">CoppeliaSim</span> that could navigate an arena and perform complex sorting tasks. <br /><br />
                We engineered a bot combining an omnidirectional <span className="text-yellow-500 font-bold">Mechanum drive</span> with a sophisticated <span className="text-yellow-500 font-bold">7-DoF robotic arm</span>. The challenge was intense: grab blocks placed at random and sort them by color within a strict 2-minute window. Our system performed flawlessly, sorting <span className="text-yellow-500 font-bold">12 out of the 15</span> blocks provided. This victory wasn't just about speed; it was a proof of concept for our path-planning efficiency and inverse kinematics implementation under high-pressure constraints.
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-3">
                  {['CoppeliaSim Simulation', 'Inverse Kinematics', 'Sorting Automation', 'Mechanum Kinematics'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`p-10 bg-zinc-900/10 border border-yellow-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
              <div className="absolute top-0 right-0 p-6 flex gap-2">
                <span className="text-[10px] font-mono bg-yellow-500/10 text-yellow-400 px-3 py-1 border border-yellow-500/20 uppercase tracking-widest">Honourable_Mention</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Smart Public Sanitation Bin</h3>
              <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
                I built this for the <span className="text-yellow-500 font-bold">ATL Summer Camp</span>, and I’ll admit I wasn’t happy initially. My school had already picked the problem statement for me, and after searching online, I felt like "auto-opening lids" were overdone and uninteresting. So, I decided to flip the script on what "smart" actually meant. <br /><br />
                I designed an open bin system specifically for high-traffic areas like Indian railway stations. Instead of focusing on the bin itself, I focused on the people. I integrated a <span className="text-yellow-500 font-bold">7-camera surveillance array</span>—4 bottom-up and 3 angled high on a pole—to monitor the *surrounding* floor. Using a detection model built with <span className="text-yellow-500 font-bold">Teachable Machine</span>, the bin identifies litterers in real-time, displays their face on station monitors as a deterrent, and flags its status as "Red" for localized cleaning. This shift from automation to deterrence earned me an <span className="text-yellow-500 font-bold">Honorable Mention</span>.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-3">
                  {['Computer Vision', 'Teachable Machine', 'Multi-Camera Array', 'Deterrence Strategy'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: SYSTEM_HISTORY // DEPLOYED --- */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-3 mb-4 fade-in-sequence" style={{ animationDelay: '800ms' }}>
            <div className="w-2 h-2 rounded-full bg-zinc-700" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">System_History // Deployed</span>
          </div>

          <div className="grid grid-cols-1 gap-12">
            
            {/* Hand Gesture Based Car */}
            <div className={`p-10 bg-zinc-900/10 border border-blue-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '900ms' }}>
              <div className="absolute top-0 right-0 p-6 flex gap-2">
                <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-3 py-1 border border-zinc-700 uppercase tracking-widest">System_Deployed</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Hand Gesture Based Mechanum Car</h3>
              <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
                This remains one of my most satisfying end-to-end builds. I integrated an <span className="text-blue-400 font-bold">accelerometer and Bluetooth modules</span> to create a wireless control system that felt natural. Orientation data from an <span className="text-blue-400 font-bold">Arduino Nano</span> glued to a glove is transmitted in real-time to an <span className="text-blue-400 font-bold">Arduino Uno</span> on a 4WD chassis. <br /><br />
                This project was my first exposure to <span className="text-blue-400 font-bold">Mechanum drive kinematics</span>. I found the math behind omnidirectional movement incredibly interesting—how varying the individual wheel speeds and directions allows the car to slide sideways or rotate on a dime. It was my first major step into complex locomotion.
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-3">
                  {['IMU Data Processing', 'HC-05 Bluetooth', 'Wireless Interfacing', 'Omnidirectional Kinematics'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Home Security System */}
            <div className={`p-10 bg-zinc-900/10 border border-blue-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
              <div className="absolute top-0 right-0 p-6 flex gap-2">
                <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-3 py-1 border border-zinc-700 uppercase tracking-widest">System_Deployed</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Home Security System</h3>
              <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
                Like many tech-minded kids, <span className="text-blue-400 font-bold">Home Alone</span> was a massive inspiration. During the COVID lockdown, I spent over three months perfecting this system. Since I couldn't tear apart my actual house, I built a meticulous <span className="text-blue-400 font-bold">3D top-view replica out of cardboard</span> for testing. <br /><br />
                The system included a front door camera feed synced to a mobile app and <span className="text-blue-400 font-bold">laser-based intrusion detection</span>. Triggering the night alarm initiated a full lockdown of cupboards, accompanied by loud sirens and flashing room lights. I even built a floor segment that performed a <span className="text-blue-400 font-bold">$180^\circ$ rotation</span> to expose a sticky pad to trap intruders. While real-world scaling would be difficult, I kept iterating on this until it felt technically perfect.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-3">
                  {['Laser Tripwire Logic', 'Lockdown Automation', 'Mechanical Trap Design', 'Cardboard Prototyping'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Driver Drowsiness Detector */}
            <div className={`p-10 bg-zinc-900/10 border border-blue-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '1100ms' }}>
              <div className="absolute top-0 right-0 p-6 flex gap-2">
                <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-3 py-1 border border-zinc-700 uppercase tracking-widest">System_Deployed</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Driver Drowsiness Detector</h3>
              <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
                Built for the <span className="text-blue-400 font-bold">CBSE Science Exhibition</span> in 10th grade, this was my first major foray into life-safety tech. I developed a special pair of glasses equipped with <span className="text-blue-400 font-bold">eye-safe IR sensors</span> to monitor the driver's blink patterns. <br /><br />
                I studied eye movement patterns to determine the exact state of sleepiness. If the code detected exhaustion, the system issued a voice prompt asking if the driver felt sleepy. If they responded "yes" or failed to respond, the system would automatically bring the car to a <span className="text-blue-400 font-bold">controlled slow stop</span>, while flashing the lights and sounding the horn to alert other drivers. I wanted to upgrade this to Computer Vision, but JEE preparation took over—still, I'm proud of what I achieved with limited school resources.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-3">
                  {['IR Eye Pattern Study', 'Real-time Safety Logic', 'Voice Synthesis Interface', 'Emergency Protocols'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Autonomous Gardener */}
            <div className={`p-10 bg-zinc-900/10 border border-blue-500/30 rounded-sm relative overflow-hidden ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
              <div className="absolute top-0 right-0 p-6 flex gap-2">
                <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-3 py-1 border border-zinc-700 uppercase tracking-widest">System_Deployed</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-tight">Autonomous Gardener</h3>
              <p className="text-zinc-400 font-mono text-base mb-8 leading-relaxed max-w-4xl">
                In 6th grade, I saw a sci-fi movie featuring futuristic <span className="text-blue-400 font-bold">hydroplanting facilities</span> and was blown away. I decided to build my own version. I hooked up a sensor array—soil moisture, light, and temperature—along with <span className="text-blue-400 font-bold">dual water pumps</span> for overhead sprinkling and base-level hydration. <br /><br />
                The core was an <span className="text-blue-400 font-bold">ESP32-CAM module</span> that provided a live feed and telemetry stats to a custom app. Interfacing with the ESP32 was a massive headache (it required connecting through an Arduino), but getting it to work was an incredible feeling. Though I realized scaling this to a full-sized field was impossible, it taught me everything I know about IoT integration and the "friction" of real hardware.
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Main_Takeaways:</span>
                <div className="flex flex-wrap gap-3">
                  {['ESP32-CAM Integration', 'IoT Feedback Loops', 'Arduino Bridge Programming', 'Sensor Analytics'].map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 bg-zinc-900/50 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="py-12 border-t border-zinc-900/50">
              <p className={`text-zinc-500 font-mono text-sm italic ${bootSequence ? 'fade-in-sequence' : 'opacity-0'}`} style={{ animationDelay: '1300ms' }}>
                And many more, smaller, now-forgotten projects which actually made me capable of doing the things listed above.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-32 pt-8 border-t border-zinc-900/50 flex justify-between items-center opacity-40">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
            Module_Robotics // IIT_DELHI_EE
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