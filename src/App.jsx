import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-20">
      
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto border-b border-slate-800 pb-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          JORGITO <span className="text-blue-500">.</span>
        </h1>
        <p className="mt-4 text-xl text-slate-400 italic">
          Arquitecto de Sistemas | Mentor de Mentes | Poeta del Binario
        </p>
      </motion.header>

      
      <main className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-400">La Esencia</h2>
          <p className="text-lg leading-relaxed text-slate-300">
            No solo escribo código; esculpo soluciones en el vacío digital. 
            Como un ingeniero que entiende los susurros del hardware y la elegancia del software, 
            mi vida es una búsqueda constante de la **simetría perfecta**.
          </p>
          <div className="bg-slate-900 p-6 rounded-lg border-l-4 border-blue-500 italic">
            "El código es mi lienzo, la lógica mi pincel y la eficiencia mi obsesión más sexy."
          </div>
        </motion.section>

        
        <motion.section 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center bg-slate-900/50 p-8 rounded-2xl border border-slate-800"
        >
          <ul className="space-y-4">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">Mente</span>
              <span className="text-white">Analítica / Abstracta</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">Estilo</span>
              <span className="text-white">Minimalista Profesional</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">Pasión</span>
              <span className="text-white">Optimización Extrema</span>
            </li>
          </ul>
        </motion.section>
      </main>

      <footer className="mt-32 text-center text-slate-600 text-sm">
        &copy; 2026 Chavito Engineering. Diseñado para impactar.
      </footer>
    </div>
  );
}

export default App;