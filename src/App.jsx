import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import miFoto from "./assets/guapoide.jpeg";

const TerminalPrompt = ({ text, delay = 0 }) => {
  const [currentText, setCurrentText] = useState("");
  useEffect(() => {
    let timeout;
    const startTyping = () => {
      let i = 0;
      const interval = setInterval(() => {
        setCurrentText(text.substring(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 40);
    };
    if (delay > 0) timeout = setTimeout(startTyping, delay * 1000);
    else startTyping();
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="font-mono text-cyan-400 text-sm md:text-base mb-4 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
      <span className="text-emerald-500">jl_root@dev:~$</span> {currentText}
      <span className="animate-pulse bg-cyan-500 ml-1 inline-block w-2 h-4 align-middle"></span>
    </div>
  );
};

export default function App() {
  const techStack = {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "PHP"],
    specialties: [
      { name: "Fullstack Architecture", icon: "🏗️", level: 95 },
      { name: "Mobile Development", icon: "📱", level: 88 },
      { name: "Data Intelligence", icon: "🧪", level: 82 },
    ],
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-mono selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* --- BACKGROUND EFFECTS (Z-0 para no bloquear contenido) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed inset-0 pointer-events-none z-1 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />

      {/* --- CONTENT LAYER (Z-10) --- */}
      <div className="relative z-10">
        <nav className="border-b border-cyan-900/30 bg-black/80 backdrop-blur-md sticky top-0">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[10px] tracking-[0.2em] text-cyan-500 uppercase font-bold">System_Online: JL-V.2.6</span>
            </div>
            <div className="hidden md:flex gap-8 text-[10px] tracking-widest text-slate-500 uppercase">
              <span className="hover:text-cyan-400 cursor-pointer transition-all hover:tracking-[0.3em] font-bold">// Root</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-all hover:tracking-[0.3em] font-bold">// Stack</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-all hover:tracking-[0.3em] font-bold">// Logs</span>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
            
            {/* TEXTO HERO */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] uppercase tracking-tighter">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                Access_Level: Senior_Engineer
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                JL_DEV<span className="text-cyan-500 animate-pulse">.</span><br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(34,211,238,0.5)" }}>SYSTEMS</span>
              </h1>
              
              <TerminalPrompt text="Iniciando kernel de desarrollo JL_v2.0..." delay={1} />
              
              <p className="max-w-xl text-lg text-slate-400 leading-relaxed font-sans border-l-2 border-cyan-900 pl-6">
                Ingeniero de Sistemas enfocado en la deconstrucción de problemas complejos. 
                Fusión de <span className="text-cyan-400 font-bold">Microservicios</span> y 
                <span className="text-white font-bold">UX Core</span>.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-cyan-600 hover:bg-cyan-400 text-black font-black py-4 px-10 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  DEPLOY_CONNECTION
                </button>
                <button className="border border-slate-700 hover:border-cyan-500 py-4 px-10 transition-all font-bold text-sm tracking-widest text-white">
                  FETCH_REPOS
                </button>
              </div>
            </motion.div>

            {/* IMAGEN HERO (CORREGIDA) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[350px] group">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500 z-20" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-500 z-20" />
                
                <div className="relative overflow-hidden aspect-[3/4] border border-white/10">
                  <img 
                    src={miFoto} 
                    alt="JL_ENGINEER" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* HUD Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Active_Kernel</span>
                      <span className="text-[10px] text-emerald-500 font-mono">OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* --- TECH GRID --- */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.specialties.map((spec, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 border border-white/5 bg-white/[0.02] hover:border-cyan-500/50 transition-all"
              >
                <span className="text-4xl mb-6 block">{spec.icon}</span>
                <h4 className="text-white font-black text-xs uppercase mb-4 tracking-widest">{spec.name}</h4>
                <div className="h-[2px] w-full bg-slate-800">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${spec.level}%` }}
                    className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                  />
                </div>
              </motion.div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}