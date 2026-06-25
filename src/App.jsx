import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Moon, Sun, ChevronDown, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

import BokehBackground from './components/BokehBackground';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(false);

  // Alterna a classe dark no elemento HTML
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const handleEnterSite = () => {
    setShowSplash(false);
    // Dispara explosão de confetes na entrada
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#C2185B', '#FCE4EC', '#F5C842']
    });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-romantic-deep/20">
      {/* Fundo de Bokeh & Pétalas Animadas */}
      <BokehBackground isDark={isDark} />

      <AnimatePresence>
        {showSplash ? (
          /* Splash Screen de Boas-vindas */
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-romantic-cream dark:bg-romantic-darkBg p-4"
          >
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,rgba(252,228,236,0.6)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(194,24,91,0.15)_0%,transparent_70%)]" />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-md text-center flex flex-col items-center relative z-10"
            >
              {/* Coração pulsante com brilho */}
              <div className="w-24 h-24 rounded-full bg-white dark:bg-romantic-darkCard shadow-2xl flex items-center justify-center mb-8 relative border border-romantic-soft/30">
                <div className="absolute inset-0 rounded-full bg-romantic-deep/10 dark:bg-romantic-darkAccent/10 animate-ping" />
                <Heart className="w-12 h-12 text-romantic-deep dark:text-romantic-darkAccent fill-current animate-pulse" />
              </div>

              <h1 className="font-serif text-4xl md:text-5xl text-slate-800 dark:text-white font-medium mb-3 tracking-tight">
                Nosso memorial
              </h1>
              <p className="font-cursive text-2xl text-romantic-deep dark:text-romantic-darkAccent mb-8 text-glow-rose">
                Para você, Gracinha 🤍
              </p>

              <p className="font-sans text-sm md:text-base text-slate-900 dark:text-slate-200 mb-8 max-w-sm leading-relaxed">
                Como fui barrado de dar presentes, dediquei meu tempo criando esse memorial para eternizar nossa história.
              </p>

              <button
                onClick={handleEnterSite}
                className="relative px-8 py-4 bg-gradient-to-r from-romantic-deep to-romantic-deep/90 dark:from-romantic-darkAccent dark:to-romantic-darkAccent/90 hover:shadow-2xl text-white rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-lg flex items-center gap-2 group overflow-hidden"
              >
                {/* Efeito de brilho hover no botão */}
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>Nossos momentos</span>
                <Heart className="w-4 h-4 fill-current animate-pulse" />
              </button>
            </motion.div>
          </motion.div>
        ) : (
          /* Conteúdo Principal do Site */
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col min-h-screen"
          >
            {/* Botão de Alternar Tema Flutuante no Topo Direito */}
            <div className="fixed top-6 right-6 z-40">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full glass-card border border-romantic-soft/30 dark:border-white/10 hover:border-romantic-gold/50 shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 text-slate-600 dark:text-slate-300"
                title={isDark ? "Tema Claro" : "Tema Escuro Romântico"}
              >
                {isDark ? <Sun className="w-5 h-5 text-romantic-gold" /> : <Moon className="w-5 h-5 text-romantic-deep dark:text-romantic-darkAccent" />}
              </button>
            </div>

            {/* Seção Hero (Landing) */}
            <section
              id="inicio"
              className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative pt-20"
            >
              {/* Degradê romântico central */}
              <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,rgba(252,228,236,0.8)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(194,24,91,0.2)_0%,transparent_60%)]" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="max-w-3xl relative z-20 flex flex-col items-center"
              >
                {/* Título com animação caligráfica */}
                <h2 className="font-cursive text-4xl md:text-6xl text-romantic-deep dark:text-romantic-darkAccent mb-6 text-glow-rose">
                  Para você, Gracinha 🤍
                </h2>

                <h1 className="font-serif text-3xl md:text-5xl text-black dark:text-white font-bold tracking-tight leading-tight max-w-2xl mb-8 drop-shadow-sm">
                  A garota mais radiante que ja pisou na Terra!
                </h1>

                {/* Subcontador descritivo */}
                <p className="font-sans text-xs md:text-sm text-slate-800 dark:text-slate-300 uppercase tracking-widest mb-6">
                  Estamos construindo nossa história há
                </p>

                {/* Contador de Aniversário Dinâmico */}
                <Countdown />

                {/* Ícone Indicador de Scroll */}
                <motion.a
                  href="#historia"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-16 p-3 rounded-full glass-card border-romantic-soft/30 text-romantic-deep dark:text-romantic-darkAccent hover:text-romantic-gold cursor-pointer transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </section>

            {/* Seção da Linha do Tempo (Nossa História) */}
            <Timeline />

            {/* Seção da Galeria de Fotos */}
            <Gallery />

            {/* Seção da Carta de Amor */}
            <LoveLetter />

            {/* Rodapé / Encerramento */}
            <footer className="w-full py-16 px-4 border-t border-romantic-soft/10 dark:border-white/5 bg-white/40 dark:bg-romantic-darkCard/30 backdrop-blur-sm text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 relative z-10">
                <Heart className="w-8 h-8 text-romantic-deep dark:text-romantic-darkAccent fill-current animate-pulse-slow" />
                
                <h3 className="font-serif text-2xl text-slate-800 dark:text-white font-medium">
                  25 de Junho de 2023 — para sempre 🤍
                </h3>
                
                <p className="font-cursive text-xl text-slate-500 dark:text-slate-400 mt-2">
                  "O amor não consiste em olhar um para o outro, mas sim em olhar juntos na mesma direção."
                </p>

                <p className="font-sans text-[11px] text-slate-400 dark:text-slate-500 mt-8 tracking-wider uppercase">
                  Desenvolvido com todo o carinho do mundo por Bibigo.
                </p>
              </div>
            </footer>

            {/* Player de Áudio Flutuante */}
            <AudioPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
