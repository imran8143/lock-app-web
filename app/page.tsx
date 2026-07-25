"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30-minute strict window
  const [input, setInput] = useState("");
  
  // The Memory Layer: We start with the first Psychometric question
  const [chatLog, setChatLog] = useState([
    { 
      role: "ai", 
      text: "Diagnostic Stage 1: What is the single biggest obstacle currently preventing you from achieving your main goal, and why haven't you solved it yet?" 
    }
  ]);

  // The Scarcity Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // The Action Handler: What happens when they press Enter
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Save the user's response to the screen
    setChatLog((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    // 2. Placeholder for the AI Engine (Groq/Gemini)
    setTimeout(() => {
      setChatLog((prev) => [
        ...prev, 
        { role: "ai", text: "Analyzing locus of control... (API connection pending). Proceeding to Stage 2." }
      ]);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-6 font-mono selection:bg-green-500 selection:text-black">
      
      {/* Session Timer */}
      <div className="absolute top-8 text-4xl tracking-widest font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
        {formatTime(timeLeft)}
      </div>

      {/* AI Diagnostic Output Stream */}
      <div className="w-full max-w-2xl text-lg mb-8 leading-relaxed opacity-90 space-y-6 h-96 overflow-y-auto flex flex-col justify-end pb-4">
        <p className="text-green-400 opacity-70 uppercase tracking-widest text-sm mb-2 border-b border-green-900 pb-2">
          Deep Profiler Active
        </p>
        
        {chatLog.map((entry, index) => (
          <div key={index} className={`flex ${entry.role === "user" ? "text-white opacity-80" : "text-green-500"}`}>
            <span className="mr-4 opacity-70">
              {entry.role === "ai" ? ">" : "User:"}
            </span>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>

      {/* User Input Form */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-2xl flex items-center border-b border-green-500/50 pb-2 focus-within:border-green-400 transition-colors"
      >
        <span className="mr-4 text-xl opacity-70 animate-pulse">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Execute..."
          className="w-full bg-transparent border-none outline-none text-green-400 text-lg placeholder-green-800 focus:ring-0"
          autoFocus
        />
      </form>
      
    </main>
  );
}
