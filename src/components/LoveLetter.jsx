import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const Emoji = ({ name, code }) => {
  // CDN de imagem do emoji no padrão Apple (usado no WhatsApp)
  const src = `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/${code}.png`;
  return (
    <img 
      src={src} 
      alt={name} 
      className="inline-block w-[1.3em] h-[1.3em] mx-1 align-middle -translate-y-[2px]" 
      onError={(e) => {
        // Fallback caso a CDN falhe, carrega o Twemoji
        e.target.onerror = null;
        e.target.src = `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/${code}.png`;
      }}
      loading="lazy"
    />
  );
};

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const triggerConfetti = () => {
    // Celebração de corações e confetes brilhantes
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#C2185B', '#FCE4EC', '#F5C842']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#C2185B', '#FCE4EC', '#F5C842']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleOpen = () => {
    setIsOpen(true);
    triggerConfetti();
  };

  return (
    <section id="carta" className="py-20 px-4 w-full bg-gradient-to-b from-transparent via-romantic-soft/10 to-transparent dark:via-romantic-darkCard/20 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Detalhes de brilhos ao fundo */}
      <div className="absolute top-10 left-10 text-romantic-gold/30 animate-pulse-slow">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-10 right-10 text-romantic-deep/20 dark:text-romantic-darkAccent/30 sparkle-slow">
        <Heart className="w-10 h-10 fill-current" />
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center justify-center min-h-[400px]">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Envelope Fechado */
            <motion.div
              key="envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleOpen}
              className="glass-card max-w-md w-full p-8 rounded-3xl border-romantic-soft/30 flex flex-col items-center justify-center text-center cursor-pointer hover:border-romantic-gold/50 shadow-2xl transition-all duration-300 relative group"
            >
              {/* Lacre da Carta */}
              <div className="w-20 h-20 rounded-full bg-romantic-deep/10 dark:bg-romantic-darkAccent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-romantic-deep/5 dark:bg-romantic-darkAccent/5 animate-ping" />
                <Heart className="w-10 h-10 text-romantic-deep dark:text-romantic-darkAccent fill-current animate-pulse-slow" />
              </div>

              <h3 className="font-serif text-2xl text-slate-800 dark:text-white font-medium mb-2">
                Uma carta para você
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-xs mb-6">
                Toque no botão para abrir.
              </p>

              <button className="flex items-center gap-2 px-6 py-3 bg-romantic-deep hover:bg-romantic-deep/90 text-white rounded-full font-sans text-sm font-semibold tracking-wider uppercase shadow-md transition-all group-hover:-translate-y-0.5">
                <MailOpen className="w-4 h-4" />
                Abrir Carta de Amor
              </button>
            </motion.div>
          ) : (
            /* Carta de Amor Revelada */
            <motion.div
              key="letter"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 20, stiffness: 80 }}
              className="w-full p-6 md:p-12 rounded-3xl border border-romantic-gold/20 shadow-2xl relative bg-[#FFFDF9] dark:bg-[#FFFDF9]"
              style={{
                backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(252, 228, 236, 0.15) 0%, transparent 80%)'
              }}
            >
              {/* Selo no topo da carta */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-20 hover:opacity-100 transition-opacity">
                <Heart className="w-8 h-8 text-romantic-deep dark:text-romantic-deep fill-current cursor-pointer" onClick={triggerConfetti} />
              </div>
 
              {/* Corpo da Carta */}
              <div className="space-y-6 md:space-y-8 text-left">
                {/* Cabeçalho Festivo */}
                <div className="text-center mb-4">
                  <h4 className="font-serif text-2xl md:text-3xl text-romantic-deep dark:text-romantic-deep font-bold tracking-wide">
                    FELIZ NOSSO DIA MEU AMOR!!!!
                  </h4>
                </div>
 
                {/* Conteúdo Caligráfico */}
                <div className="font-cursive text-xl md:text-2xl text-slate-800 dark:text-slate-800 leading-relaxed space-y-6 tracking-wide">
                  <p>
                    Como é bom partilhar essa vida com você, meus dias ganharam mais cor quando você entrou na minha vida, sou eternamente grato a Deus por ter te conhecido, como é possível duas pessoas de universos tão diferentes combinarem tanto?
                  </p>
                  <p>
                    Pensando bem, não somos tão diferentes assim, somos dois engraçadinhos, mas cada um do seu jeito <Emoji name="grinning" code="1f601" />. Só queria dizer que ao longo de todo esse tempo eu aprendi muita coisa com você e convívio com você me tornou uma pessoa melhor, você me faz muito bem Maria Luisa <Emoji name="heart" code="2764-fe0f" />.
                  </p>
                  <p>
                    Quero desejar muita prosperidade para nós, ainda virão muitos anos juntos pela frente, nossa parceria foi a melhor coisa que já me aconteceu, somos a melhor dupla existente <Emoji name="sunglasses" code="1f60e" />.
                  </p>
                  <p className="text-romantic-deep dark:text-romantic-deep font-medium text-glow-rose text-2xl md:text-3xl mt-4">
                    Eu te amo!
                  </p>
                </div>
 
                {/* Assinatura */}
                <div className="pt-4 border-t border-romantic-soft/20 text-right">
                  <p className="font-sans text-xs md:text-sm text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                    Assinado por:
                  </p>
                  <p className="font-cursive text-2xl md:text-3xl text-romantic-deep dark:text-romantic-deep mt-2">
                    João Lucas Carrasco Souza
                  </p>
                  <p className="font-sans text-[11px] text-slate-400 dark:text-slate-400 mt-1">
                    (esse é meu nome completo caso você não saiba kkkk)
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
