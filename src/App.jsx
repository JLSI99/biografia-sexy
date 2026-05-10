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
    if (delay > 0) {
      timeout = setTimeout(() => startTyping(), delay * 1000);
    } else {
      startTyping();
    }

    function startTyping() {
      let i = 0;
      const interval = setInterval(() => {
        setCurrentText(text.substring(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 40);
    }
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="font-mono text-cyan-500 text-sm md:text-base">
      <span className="text-emerald-500">jl_root@dev:~$</span> {currentText}
      <span className="animate-pulse">_</span>
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
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-mono selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* --- EFECTOS VISUALES --- */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />

      {/* --- HEADER --- */}
      <nav className="border-b border-cyan-900/30 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]" />
            <span className="text-[10px] tracking-widest text-cyan-600 uppercase">System_Active: JL-01</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] tracking-widest text-slate-500 uppercase">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">// Root</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">// Tech_Stack</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">// Projects</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        {/* --- SECCIÓN HERO --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs mb-4">
              [ ACCESS_GRANTED: SENIOR_LEVEL ]
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
              JL_DEV<span className="text-cyan-500">.</span><br />
              <span className="text-outline text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>ENGINEER</span>
            </h1>
            
            <TerminalPrompt text="Iniciando protocolos Fullstack, Mobile & Data Science..." delay={0.5} />
            
            <p className="max-w-xl text-lg text-slate-400 leading-relaxed font-sans">
              Especialista en la construcción de ecosistemas digitales de alto rendimiento. 
              Mi arquitectura fusiona la robustez del bajo nivel (<span className="text-white">C/C++</span>) 
              con la agilidad del desarrollo moderno.
            </p>

            <div className="flex gap-4 pt-6">
              <button className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3 px-8 transition-all flex items-center gap-2 group">
                INICIAR CONEXIÓN <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="border border-slate-700 hover:border-cyan-500 py-3 px-8 transition-all">
                VIEW_LOGS
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <div className="absolute -inset-4 border border-cyan-500/20 animate-pulse" />
              <div className="relative overflow-hidden border-2 border-cyan-500 group">
                <img 
                  src={miFoto} 
                  alt="JL Developer" 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent opacity-60" />
              </div>
              <div className="absolute top-4 left-4 bg-black/80 p-2 text-[8px] border border-cyan-500/50 text-cyan-400 backdrop-blur-md">
                <p>NAME: JL_ROOT</p>
                <p>IP: 192.168.1.1</p>
                <p>ARCH: x86_64</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- GRID DE LENGUAJES & SKILLS --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="md:col-span-1 border border-cyan-900/30 bg-cyan-950/5 p-6"
          >
            <h3 className="text-cyan-500 text-xs tracking-widest uppercase mb-6 flex justify-between">
              <span>// Language_Runtime</span>
              <span className="animate-pulse">●</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.languages.map((lang) => (
                <div key={lang} className="p-3 border border-slate-800 bg-black hover:border-cyan-500/50 transition-colors group">
                  <p className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors uppercase">{lang}</p>
                  <div className="h-1 w-full bg-slate-900 mt-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-cyan-600" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {techStack.specialties.map((spec, i) => (
                <div key={i} className="p-6 border border-cyan-900/30 bg-black flex flex-col justify-between group hover:bg-cyan-950/10 transition-all">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase mb-2">{spec.name}</h4>
                    <div className="w-full bg-slate-800 h-1">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${spec.level}%` }}
                        className="h-full bg-cyan-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 border border-cyan-900/30 bg-[#0c0c0c] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl font-black uppercase tracking-tighter">
                Architecture
              </div>
              <h3 className="text-white font-bold mb-4 italic tracking-tight uppercase">Filosofía de Desarrollo</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed border-l-2 border-cyan-500 pl-6">
                No me limito a una plataforma. Mi capacidad para transitar entre <span className="text-cyan-400">Java</span> empresarial, 
                apps móviles fluidas y el análisis de <span className="text-emerald-400">Data Science</span> en Python, me permite ofrecer 
                visiones 360° en proyectos complejos. <br /><br />
                <span className="text-slate-500 uppercase text-[10px]">
                  {"> "} Status: Siempre optimizando, siempre deconstruyendo.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="mt-20 border-t border-cyan-900/30 bg-black p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 text-[10px] text-slate-500 tracking-widest uppercase">
            <p>© 2026 Crafted by JL-Developments</p>
            <p className="hidden md:block text-emerald-500">Kernel: 6.8.9-arch1-1</p>
          </div>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Twitter"].map(link => (
              <a key={link} href="#" className="text-[10px] text-cyan-600 hover:text-white transition-colors uppercase tracking-[0.3em]">
                [{link}]
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}