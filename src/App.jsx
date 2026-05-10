import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import miFoto from "./assets/guapoide.jpeg";

/**
 * COMPONENTE: TerminalPrompt
 * Simula la escritura de comandos en una terminal de ingeniero.
 */
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
  const languages = ["C", "C++", "Java", "Python", "JavaScript", "PHP", "Rust", "SQL", "TypeScript"];
  
  const philosophyStack = [
    { name: "Absurdismo", desc: "Creación de sentido ante el silencio del universo.", icon: "🌑" },
    { name: "Estoicismo", desc: "Resiliencia lógica y control de la percepción.", icon: "🏛️" },
    { name: "Existencialismo", desc: "La libertad absoluta de definir la propia esencia.", icon: "🧠" },
    { name: "Psicología", desc: "Deconstrucción de patrones y conducta humana.", icon: "🧬" }
  ];

  const specialties = [
    { name: "Fullstack Architecture", icon: "🏗️", level: 95 },
    { name: "Mobile Development", icon: "📱", level: 88 },
    { name: "Data Intelligence", icon: "🧪", level: 82 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-mono selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* --- CAPAS DE EFECTOS VISUALES (Z-0) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed inset-0 pointer-events-none z-1 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />

      <div className="relative z-10">
        {/* --- NAVBAR --- */}
        <nav className="border-b border-cyan-900/30 bg-black/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[10px] tracking-[0.2em] text-cyan-500 uppercase font-bold">System_Online: JL-V.2.6</span>
            </div>
            <div className="flex gap-6 text-[10px] tracking-widest text-slate-500 uppercase font-bold">
              <span className="hover:text-cyan-400 cursor-pointer transition-all">// Neural_Core</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-all">// Stack</span>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          
          {/* --- HERO SECTION --- */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] uppercase tracking-tighter">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                Access_Level: Architect_Philosopher
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                JL_SYS<span className="text-cyan-500 animate-pulse">.</span><br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>DECONSTRUCT</span>
              </h1>
              
              <TerminalPrompt text="Cargando manifiesto: Camus, Séneca, Sartre, Nietzsche..." delay={1} />
              
              <p className="max-w-xl text-lg text-slate-400 leading-relaxed font-sans border-l-2 border-cyan-900 pl-6 italic">
                "En la profundidad del invierno, finalmente aprendí que dentro de mí habitaba un verano invencible." 
                <span className="block mt-2 text-sm text-cyan-600 not-italic font-bold uppercase">— Aplicando lógica a lo absurdo.</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-cyan-600 hover:bg-cyan-400 text-black font-black py-4 px-10 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] uppercase text-xs">
                  Deploy_Connection
                </button>
                <button className="border border-slate-700 hover:border-cyan-500 py-4 px-10 transition-all font-bold text-xs tracking-widest text-white uppercase">
                  Fetch_Repos
                </button>
              </div>
            </motion.div>

            {/* FOTO HERO */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[320px] group">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500 z-20" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-500 z-20" />
                
                <div className="relative overflow-hidden aspect-[3/4] border border-white/10">
                  <img 
                    src={miFoto} 
                    alt="JL_ENGINEER" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Active_Kernel</span>
                      <span className="text-[10px] text-emerald-500 font-mono">OK_200</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* --- MARQUEE DE LENGUAJES --- */}
          <div className="mb-32 overflow-hidden py-10 border-y border-white/5 relative">
            <div className="flex animate-infinite-scroll gap-20 whitespace-nowrap">
              {[...languages, ...languages].map((lang, i) => (
                <span key={i} className="text-4xl md:text-6xl font-black text-white/10 hover:text-cyan-500/30 transition-colors uppercase italic tracking-tighter cursor-default">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* --- NEURAL CORE (FILOSOFÍA) --- */}
          <section className="mb-32">
            <h3 className="text-cyan-500 text-[10px] font-black tracking-[0.5em] uppercase mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-cyan-900" /> // NEURAL_CORE_FILTERS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophyStack.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, borderColor: "rgba(34,211,238,0.3)" }} 
                  className="p-6 border border-white/5 bg-white/[0.01] transition-all"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h4 className="text-white font-bold text-sm uppercase mb-2 tracking-tight">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- TECH GRID (ESPECIALIDADES) --- */}
          <section className="mb-20">
            <h3 className="text-cyan-500 text-[10px] font-black tracking-[0.5em] uppercase mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-cyan-900" /> // SYSTEM_SPECIALTIES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((spec, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }} 
                  className="p-8 border border-white/5 bg-white/[0.02] hover:border-cyan-500/50 transition-all group"
                >
                  <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{spec.icon}</span>
                  <h4 className="text-white font-black text-[10px] uppercase mb-4 tracking-widest">{spec.name}</h4>
                  <div className="h-[2px] w-full bg-slate-900 overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${spec.level}%` }} 
                      transition={{ duration: 1.5, ease: "easeOut" }} 
                      className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]" 
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[9px] text-slate-600 font-mono">STATUS: OPTIMIZED</span>
                    <span className="text-[10px] text-cyan-500 font-bold font-mono">{spec.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </main>

        <footer className="border-t border-white/5 bg-black/50 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] text-slate-600 tracking-[0.3em] uppercase">© 2026 Crafted_by_JL / Built_with_Absurdism</p>
            <div className="flex gap-8">
              {["GitHub", "LinkedIn", "Archive"].map(link => (
                <a key={link} href="#" className="text-[10px] text-slate-400 hover:text-cyan-400 transition-colors uppercase font-bold tracking-widest">
                  [{link}]
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* --- ESTILOS CSS PARA ANIMACIÓN INFINITA --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
        }
      `}} />
    </div>
  );
}