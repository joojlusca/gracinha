import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';

const timelineEvents = [
  {
    title: "Onde tudo começou...",
    date: "15 de Abril de 2023",
    description: "Esse foi o dia que senti algo diferente por você, claro que eu ja tinha interesse antes, mas aqui foi diferente, sua energia me cativou de uma maneira especial",
    phrase: "Seu encantador jeito de ser",
    placeholderId: "encounter",
    image: "/primeiro_encontro.jpg"
  },
  {
    title: "O Convite",
    date: "17 de Abril de 2023",
    description: "Neste dia, realizei o ato de maior coragem da minha vida! Te mandei uma mensagem te chamando pra sair kkkkk",
    phrase: "A mensagem",
    placeholderId: "iloveyou",
    image: "/o_convite.jpg"
  },
  {
    title: "O Primeiro Encontro",
    date: "13 de Maio de 2023",
    description: "Esse foi o dia do nosso primeiro encontro, eu estava muito nervoso (ainda mais com a Querem me ameaçando) mas no fim deu tudo certo quando eu te beijei (claramente estou mentindo pela piada)",
    phrase: "Um dia inesquecível 🤍",
    placeholderId: "trip",
    image: "/primeiro_encontro_real.jpg"
  },
  {
    title: "Segundo Encontro",
    date: "3 de Junho de 2023",
    description: "No nosso segundo encontro, eu achava que tinha te conquistado, mas na verdade era eu que já estava compeltamente apaixonado por você, tudo em você me tirava um sorriso!",
    phrase: "Totalmente apaixonado...",
    placeholderId: "christmas",
    image: "/segundo_encontro.jpg"
  },
  {
    title: "Flagrados!",
    date: "Ainda no dia 3 de junho...",
    description: "Nesse mesmo dia ainda fomos flagrados ao maior estilo Gossip Girl.",
    phrase: "Gossip Girl...",
    placeholderId: "oneyear",
    image: "/flagrados.jpg"
  },
  {
    title: "Primeira Viagem Juntos",
    date: "19 de Novembro de 2023",
    description: "Nossa primeira viagem juntos, mas não sei se conta já que nossa familia foi junto, e sim a partir desse dia senti que eles eram minha familia também!",
    phrase: "viagem",
    placeholderId: "firsttrip",
    image: "/primeira_viagem.jpg"
  },
  {
    title: "Primeiro Ano Novo Juntos",
    date: "1 de Janeiro de 2024",
    description: "Essa foi a primeira vez que passamos a virada do ano juntos e depois desse dia não posso passar mais nenhuma virada sozinho (seria perigoso já que foi você quem cuidou de mim, me desculpa por ter dado trabalho esse dia kkkkkkkkkk)",
    phrase: "Cuidando de mim 🤍",
    placeholderId: "newyear",
    image: "/primeiro_ano_novo.jpg"
  },
  {
    title: "Clima Natalino",
    date: "16 de Novembro de 2024",
    description: "Como esquecer esse passeio em clima Natalino?",
    phrase: "Clima de Natal 🎄",
    placeholderId: "christmas_walk",
    image: "/passeio_natalino.jpg"
  },
  {
    title: "Nosso Filho de Mentira?",
    date: "31 de Dezembro de 2024",
    description: "Nessa virada, tiramos muitas fotos com o Otávio e as pessoas estavam achando que ele era nosso filho, desde então não consegui parar de pensar em como seria se tivessimos um filho. Espero que ele não puxe nossas chatices, imagina lidar com a gente em dobro?",
    phrase: "João, Maria e neném",
    placeholderId: "otavio",
    image: "/ano_novo_otavio.jpg"
  },
  {
    title: "Sua Formatura",
    date: "Janeiro de 2025",
    description: "Esse dia foi incrivel! Eu amo te prestigiar sempre que possivel, vi suas apresentações na faculdade e acompanhar esse processo foi muito gratificante, meu coração se enche de orgulho ao ver você crescendo, vou apoiar cada conquista sua com tudo de mim!!!",
    phrase: "Orgulho de você 🤍",
    placeholderId: "graduation",
    image: "/formatura_gracinha.jpg"
  },
  {
    title: "Para Sempre",
    date: "Hoje & Sempre",
    description: "Apredendi muitas coisas nesses ultimos 3 anos, entendi que existem pessoas que vão te apoiar nas piores situações e tornar os momentos bons inesqueciveis, para mim, essa pessoa é você. EU TE AMO <3",
    phrase: "EU TE AMO <3",
    placeholderId: "future",
    image: "/futuro_juntos.jpg"
  }
];

// Gera um placeholder SVG fofo e romântico com corações para as fotos
const PolaroidPlaceholder = ({ title }) => (
  <div className="w-full aspect-square bg-rose-50 dark:bg-rose-950/20 rounded flex flex-col items-center justify-center border border-dashed border-romantic-soft text-romantic-deep/40 dark:text-romantic-darkAccent/40 p-4 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-tr from-romantic-soft/10 to-transparent group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    <Heart className="w-10 h-10 mb-2 animate-pulse-slow fill-current text-romantic-soft/60 dark:text-romantic-darkAccent/30" />
    <span className="text-[10px] font-sans text-center tracking-wider uppercase opacity-70">
      Sua Foto Aqui 📸
    </span>
    <span className="text-[9px] font-sans text-center mt-1 opacity-50 px-2 truncate w-full">
      {title}
    </span>
  </div>
);

export default function Timeline() {
  return (
    <section id="historia" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-romantic-deep dark:text-romantic-darkAccent font-medium text-glow-rose">
          Nossa História
        </h2>
        <div className="w-16 h-1 bg-romantic-gold mx-auto mt-4 rounded-full" />
        <p className="font-sans text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto">
          Um registro carinhoso dos momentos mais especiais e das esquinas da vida onde decidimos caminhar lado a lado.
        </p>
      </div>

      {/* Linha do tempo vertical */}
      <div className="relative border-l-2 border-romantic-soft/30 dark:border-romantic-darkCard/50 ml-4 md:mx-auto md:w-fit md:border-l-0">
        
        {/* Linha vertical centralizada em desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-romantic-deep/50 via-romantic-gold/50 to-romantic-deep/50 transform -translate-x-1/2" />

        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-start md:items-center w-full ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Marcador na linha */}
              <div className="absolute -left-[27px] md:left-1/2 top-1 md:top-auto md:bottom-auto w-[12px] h-[12px] rounded-full bg-romantic-gold border-4 border-romantic-cream dark:border-romantic-darkBg shadow-md transform md:-translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-romantic-deep dark:bg-romantic-darkAccent" />
              </div>

              {/* Bloco de conteúdo (Texto) */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0 md:px-6">
                <div className="glass-card p-6 rounded-2xl border-romantic-soft/20 hover:shadow-2xl transition-all duration-300 relative">
                  {/* Selo de Data */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-romantic-deep dark:text-romantic-darkAccent uppercase tracking-widest mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-slate-800 dark:text-white font-medium mb-3">
                    {event.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Espaçador central para desktop */}
              <div className="hidden md:block w-[10%]" />

              {/* Bloco da Foto (Polaroid) */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0 md:px-6 mt-4 md:mt-0 flex justify-start md:justify-center">
                <motion.div 
                  whileHover={{ scale: 1.03, rotate: isEven ? 1 : -1 }}
                  className="w-48 md:w-56 bg-white dark:bg-slate-900 p-3 pb-8 rounded shadow-lg border border-slate-100 dark:border-slate-800 transform rotate-1 transition-transform duration-300"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Polaroid Image Slot */}
                  {event.image ? (
                    <img 
                      src={`${import.meta.env.BASE_URL}${event.image.startsWith('/') ? event.image.substring(1) : event.image}`} 
                      alt={event.title} 
                      className="w-full aspect-square object-cover rounded border border-slate-100 dark:border-slate-850" 
                    />
                  ) : (
                    <PolaroidPlaceholder title={event.title} />
                  )}
                  
                  {/* Polaroid Captions */}
                  <div className="mt-4 text-center">
                    <p className="font-cursive text-base md:text-lg text-romantic-deep dark:text-romantic-darkAccent leading-none">
                      {event.phrase}
                    </p>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
