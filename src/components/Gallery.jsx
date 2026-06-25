import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const galleryPhotos = [
  {
    id: 1,
    phrase: "Não consigo tirar os olhos de você❤️",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG_20250524_213943.jpg"
  },
  {
    id: 2,
    phrase: "Nosso jantar romântico à luz de velas 🕯️",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20240413-WA0045.jpg"
  },
  {
    id: 3,
    phrase: "Seu sorriso é meu ponto fraco",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20230616-WA0071.jpg"
  },
  {
    id: 4,
    phrase: "Mata-leão mais amoroso da história🥋",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20240116-WA0002.jpg"
  },
  {
    id: 5,
    phrase: "Única foto que temos nos beijando, eu adoro ela ❤️",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-2",
    image: "/Photos-3-001 (2)/IMG_20250222_185302.jpg"
  },
  {
    id: 6,
    phrase: "Momento skincare e caretas 🧖‍♀️",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20231016-WA0007.jpg"
  },
  {
    id: 7,
    phrase: "Risadas soltas e muito amor ✨",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20241224-WA0072.jpg"
  },
  {
    id: 8,
    phrase: "Fazendo gracinhaaaaa",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20241116-WA0182.jpg"
  },
  {
    id: 9,
    phrase: "Parceiros de hang loose e risadas diárias 🤙",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20251007-WA0083.jpg"
  },
  {
    id: 10,
    phrase: "Aquele seu abraço apertado de sempre",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG_20250530_190644.jpg"
  },
  {
    id: 11,
    phrase: "Te olhar de pertinho é meu momento de paz",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20240331-WA0012.jpg"
  },
  {
    id: 12,
    phrase: "Montando nosso Lego peça por peça 🧩",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (2)/PXL_20250301_122543060.jpg"
  },
  {
    id: 13,
    phrase: "DUPLO BICEPS DE FRENTE 💪",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (3)/IMG-20250615-WA0006.jpg"
  },
  {
    id: 14,
    phrase: "Adoro esse biquinho BIGA BIGA",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG-20240811-WA0168.jpg"
  },
  {
    id: 15,
    phrase: "Mais uma da coleção 'fotos no carro' 🗺️",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG_20250719_153518.jpg"
  },
  {
    id: 16,
    phrase: "Carregando o amor nas costas (literalmente!)",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (3)/IMG-20250719-WA0063.jpg"
  },
  {
    id: 17,
    phrase: "Gracinhas de sempre antes das fotos",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (3)/IMG-20251220-WA0193.jpg"
  },
  {
    id: 18,
    phrase: "Você me encanta",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (2)/IMG_20250808_153452.jpg"
  },
  {
    id: 19,
    phrase: "Nosso rodízio de sushi sagrado! 🍣",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (3)/IMG_20240531_195509.jpg"
  },
  {
    id: 20,
    phrase: "Com você, qualquer praia vira um paraíso 🏖️",
    gridClass: "sm:col-span-2 md:col-span-2 md:row-span-1",
    image: "/Photos-3-001 (3)/praia.jpg"
  },
  {
    id: 21,
    phrase: "Minha melhor amiga BFF (e minha namorada também)",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "/Photos-3-001 (3)/IMG_20250510_223656.jpg"
  }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-romantic-deep dark:text-romantic-darkAccent font-medium text-glow-rose">
          Nossa Galeria de Momentos
        </h2>
        <div className="w-16 h-1 bg-romantic-gold mx-auto mt-4 rounded-full" />
        <p className="font-sans text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto">
          Um mural repleto de carinho e diversão, duas coisas que representam bem a gente
        </p>
      </div>

      {/* Grid de Fotos Mosaico Assimétrico (h-auto no mobile, auto-rows no desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 md:auto-rows-[220px]">
        {galleryPhotos.map((photo) => {
          const PhotoIcon = photo.icon;
          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: photo.id * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 h-auto md:h-full ${photo.gridClass}`}
            >
              {photo.image ? (
                /* Exibe imagem real inteira no mobile (h-auto/object-contain) e cortada no mosaico do desktop */
                <img
                  src={`${import.meta.env.BASE_URL}${photo.image.startsWith('/') ? photo.image.substring(1) : photo.image}`}
                  alt={photo.phrase}
                  className="w-full h-auto md:h-full md:w-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                /* Caso contrário, renderiza o placeholder de gradiente com ícone */
                <div className={`w-full h-full bg-gradient-to-br ${photo.gradient} dark:bg-slate-900/60 flex flex-col items-center justify-center p-6 transition-transform duration-700 group-hover:scale-110`}>
                  <div className="p-4 rounded-full bg-white/40 dark:bg-white/5 border border-white/40 backdrop-blur-sm shadow-sm transition-transform duration-500 group-hover:rotate-12">
                    <PhotoIcon className="w-8 h-8 text-romantic-deep dark:text-romantic-darkAccent" />
                  </div>
                  <span className="text-[11px] font-sans text-slate-500 dark:text-slate-400 mt-4 uppercase tracking-wider font-medium opacity-80">
                    Foto {photo.id}
                  </span>
                  <span className="text-[9px] font-sans text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-tight">
                    Nosso futuro
                  </span>
                </div>
              )}

              {/* Overlay Suave que surge no Hover */}
              <div className="absolute inset-0 bg-romantic-deep/80 dark:bg-romantic-darkBg/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <Heart className="w-6 h-6 text-romantic-gold fill-current mb-3 animate-pulse" />
                  <p className="font-cursive text-xl md:text-2xl text-white text-glow-gold px-2">
                    "{photo.phrase}"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
