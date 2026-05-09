import { motion } from "framer-motion";
// 1. IMPORTA TU FOTO AQUÍ (Asegúrate de que esté en src/assets/mi-foto.jpg)
import miFoto from "./assets/guapoide.jpeg";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-20 selection:bg-blue-500/30">
      {/* Header con tipografía imponente */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center border-b border-slate-800 pb-16"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase">
          JORGITO<span className="text-blue-600 animate-pulse">.</span>
        </h1>

        {/* Espacio para la Imagen Sexy y Central */}
        {/* Espacio para la Imagen Sexy y Central */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 w-full flex justify-center" // Añadimos w-full y justify-center
        >
          <div
            className="relative group"
            style={{
              width: "200px",
              height: "200px",
              marginLeft: "auto", // Esto empuja desde la izquierda
              marginRight: "auto", // Esto empuja desde la derecha
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={miFoto}
              alt="Jorgito"
              className="relative w-full h-full rounded-full object-cover border-2 border-slate-800 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              style={{ display: "block" }}
            />
          </div>
        </motion.div>

        <p className="mt-8 text-2xl md:text-3xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto">
          Ingeniero de Sistemas.{" "}
          <span className="text-white">Estratega Digital.</span> Arquitecto de
          lo invisible.
        </p>
      </motion.header>

      {/* Grid de Contenido */}
      <main className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Sección Biográfica */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight">
            La Filosofía
          </h2>
          <p className="text-xl leading-relaxed text-slate-400">
            No me conformo con lo funcional; busco lo{" "}
            <span className="text-blue-400">trascendental</span>. Mi enfoque
            combina la precisión del hardware con la fluidez de una narrativa
            poética.
          </p>
          <div className="bg-slate-900/80 p-8 rounded-xl border-l-8 border-blue-600 shadow-inner">
            <p className="text-lg italic text-slate-300">
              "El código es el lenguaje en el que escribo el futuro. Cada línea
              es un compromiso con la excelencia."
            </p>
          </div>
        </motion.section>

        {/* Lista de Diseño (Dots) */}
        <motion.section
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-slate-900/30 p-10 rounded-3xl border border-slate-800 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold mb-8 text-blue-500 uppercase tracking-widest">
            Core Intelligence
          </h3>
          <ul className="space-y-6">
            {[
              "Lógica Multidimensional",
              "Arquitectura de Microservicios",
              "Liderazgo Técnico Senior",
              "Optimización de Alto Rendimiento",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-4 text-xl">
                <span className="h-2 w-2 bg-blue-600 rounded-full ring-4 ring-blue-900/50"></span>
                <span className="text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </main>

      <footer className="mt-40 mb-10 text-center">
        <p className="text-slate-700 uppercase tracking-[0.5em] text-xs">
          &copy; 2026 Crafted by JL-Developments
        </p>
      </footer>
    </div>
  );
}

export default App;
