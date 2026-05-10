import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import miFoto from "./assets/guapoide.jpeg";

/**
 * COMPONENTE: TerminalPrompt
 * Simula la escritura de comandos en una terminal Linux.
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

    if (delay > 0) {
      timeout = setTimeout(() => startTyping(), delay * 1000);
    } else {
      startTyping();
    }
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="font-mono text-cyan-500 text-sm md:text-base mb-4">
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
      
      {/* --- CAPAS DE EFECTOS VISUALES (SCANLINES & NOISE) --- */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />

      {/* --- NAVBAR --- */}
      <nav className="border-b border-cyan-900/30 bg-black/80 backdrop-blur-md sticky top-0 z-50">
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
        
        {/* --- HERO SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] uppercase tracking-tighter">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              Access_Level: Senior_Engineer
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
              JL_DEV<span className="text-cyan-500">.</span><br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>SYSTEMS</span>
            </h1>
            
            <TerminalPrompt text="Ejecutando despliegue de arquitectura escalable..." delay={1} />
            
            <p className="max-w-xl text-lg text-slate-400 leading-relaxed font-sans border-l-2 border-slate-800 pl-6">
              Ingeniero de Sistemas enfocado en la deconstrucción de problemas complejos. 
              Fusión de <span className="text-cyan-400 font-bold">Microservicios</span>, 
              <span className="text-emerald-400 font-bold">Deep Learning</span> y 
              <span className="text-white font-bold">UX Core</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-cyan-600 hover:bg-cyan-400 text-black font-black py-4 px-10 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3">
                DEPLOY_CONNECTION <span>_&gt;</span>
              </button>
              <button className="border border-slate-700 hover:border-cyan-500 py-4 px-10 transition-all font-bold text-sm tracking-widest">
                FETCH_REPOS
              </button>
            </div>
          </motion.div>

          {/* CONTENEDOR DE IMAGEN (SOLUCIÓN AL TAMAÑO) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Decoración Frame Tech */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-cyan-500 z-20" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-cyan-500 z-20" />
              
              <div className="relative overflow-hidden w-full h-full border border-white/10 group">
                <img 
                  src={miFoto} 
                  alt="JL_ENGINEER" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-cyan-900/20" />
                
                {/* HUD Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] text-cyan-500 font-bold uppercase tracking-[0.2em] mb-1">Status_Check</p>
                      <p className="text-xs text-white font-black uppercase">Architect: Active</p>
                    </div>
                    <p className="text-[10px] text-emerald-400 font-mono">OK_200</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- GRID DE LENGUAJES --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:col-span-1 border border-white/5 bg-white/[0.02] p-8 relative group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            <h3 className="text-cyan-500 text-xs font-black tracking-widest uppercase mb-10 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyan-900" /> 
              Core_Runtimes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.languages.map((lang, idx) => (
                <div key={idx} className="p-4 border border-white/5 bg-black hover:border-cyan-500/40 transition-all group/item">
                  <p className="text-[10px] text-slate-500 font-bold group-hover/item:text-cyan-400 uppercase mb-2">{lang}</p>
                  <div className="h-[2px] w-full bg-slate-900 overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 1 }}
                      className="h-full bg-cyan-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {techStack.specialties.map((spec, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all relative"
                >
                  <span className="text-4xl mb-6 block filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{spec.icon}</span>
                  <h4 className="text-white font-black text-xs uppercase mb-4 tracking-tighter">{spec.name}</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-900 h-[1px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${spec.level}%` }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">{spec.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FILOSOFÍA */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="p-10 border border-cyan-900/20 bg-black relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-7xl font-black uppercase italic pointer-events-none">
                Logic
              </div>
              <h3 className="text-white font-black mb-6 italic tracking-[0.2em] uppercase text-xs">// Manifiesto_Técnico</h3>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-sans max-w-2xl border-l border-cyan-500/30 pl-8">
                No construyo solo código, diseño <span className="text-white font-bold underline decoration-cyan-500">sistemas de pensamiento</span>. 
                Mi enfoque une la eficiencia de bajo nivel con la abstracción analítica de los datos. <br /><br />
                <span className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em]">
                  {"> "} Status: Optimización_Constante
                </span>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] text-slate-600 tracking-[0.4em] uppercase font-bold">
            © 2026 Crafted_by_JL_Engine / Kernel_v6.8
          </div>
          <div className="flex gap-10">
            {["GitHub", "LinkedIn", "Docs"].map(link => (
              <a key={link} href="#" className="text-[10px] text-cyan-700 hover:text-white transition-all uppercase font-black hover:tracking-[0.2em]">
                [{link}]
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}