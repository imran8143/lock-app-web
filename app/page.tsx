"use client";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono selection:bg-green-500 selection:text-black">
      
      {/* Top Notification Bar */}
      <div className="w-full bg-green-950/40 border-b border-green-900/60 py-2 px-4 text-center text-xs tracking-widest text-green-400 uppercase">
        System Status: Restricted Access // Cohort #1 Enrollment Active
      </div>

      {/* Hero Section */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-green-400">
          // LOCK_ENGINE
        </div>
        <a 
          href="#apply" 
          className="border border-green-500/50 hover:bg-green-500 hover:text-black transition-all px-4 py-2 text-sm tracking-widest uppercase"
        >
          Initialize Access
        </a>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
        
        <div className="inline-block border border-green-500/30 px-3 py-1 text-xs uppercase tracking-widest text-green-400 mb-6 bg-green-950/20">
          Anti-Doomscrolling Infrastructure
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Stop Consuming AI. <br />
          <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">
            Start Executing Under Scarcity.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          The world’s first time-gated, desktop-first diagnostic engine. No endless chats. No casual browsing. Only 30 minutes of unvarnished psychological truth per week to force real-world execution.
        </p>

        {/* Action Form / Gate */}
        <div id="apply" className="w-full max-w-md bg-zinc-950 border border-green-500/30 p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <label className="text-xs uppercase tracking-widest text-left text-green-400 opacity-80">
                Enter your primary email to request entry:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="builder@domain.com"
                required
                className="bg-black border border-green-500/50 px-4 py-3 text-green-400 placeholder-green-900 focus:outline-none focus:border-green-400 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-black font-bold uppercase tracking-widest py-3 transition-colors text-sm"
              >
                Request Access Window
              </button>
            </form>
          ) : (
            <div className="py-6 text-green-400 text-sm tracking-wider">
              &gt; STATUS: CREDENTIALS LOGGED.<br />
              &gt; Check your inbox for your evaluation window.
            </div>
          )}
          <p className="text-xs text-zinc-600 mt-4 tracking-wider">
            Strict filter: 95% of applicants are rejected based on psychological baseline.
          </p>
        </div>

      </main>

      {/* Feature Grid: First Principles vs Traditional */}
      <section className="border-t border-green-900/40 bg-zinc-950/50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-green-600 mb-2">Architectural Shift</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">Why Artificial Scarcity Wins</h3>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            
            <div className="border border-red-900/40 bg-red-950/10 p-6">
              <div className="text-red-500 font-bold uppercase tracking-wider text-sm mb-3">
                [X] Traditional AI Chatbots
              </div>
              <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <li>• Designed for maximum screen time and endless doomscrolling.</li>
                <li>• Gives lazy, copy-paste answers that breed mental dependency.</li>
                <li>• Accessible 24/7, turning users into passive consumers.</li>
                <li>• Zero skin in the game; zero real-world execution tracking.</li>
              </ul>
            </div>

            <div className="border border-green-500/40 bg-green-950/10 p-6 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <div className="text-green-400 font-bold uppercase tracking-wider text-sm mb-3">
                [✓] The Lock-Engine Architecture
              </div>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>• Hard-locked access windows (30 mins, 2-3x a week).</li>
                <li>• Deep psychometric profiling that flags excuses and self-sabotage.</li>
                <li>• Forces you offline to execute physical tasks between sessions.</li>
                <li>• High-friction filter ensures only elite, serious operators enter.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-900/30 py-8 text-center text-xs text-zinc-600 tracking-widest">
        SYSTEM POWERED BY FIRST PRINCIPLES THINKING // ALL RIGHTS RESERVED
      </footer>

    </div>
  );
}
