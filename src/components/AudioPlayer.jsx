import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // URL da música local do casal na pasta pública
  const audioUrl = "/Tim Bernardes - BB (Garupa de Moto Amarela) (Audio Oficial + Lyrics) - Tim Bernardes (youtube).mp3";

  useEffect(() => {
    // Configura o áudio
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.log("Navegador impediu autoplay: requer interação prévia.", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Elemento de áudio HTML5 oculto */}
      <audio ref={audioRef} src={audioUrl} loop />

      {/* Ondas Sonoras Animadas */}
      {isPlaying && (
        <div className="flex items-end gap-[3px] h-6 px-3 py-1 rounded-full glass-card border-romantic-soft/20 shadow-md">
          <div className="w-[3px] h-2 bg-romantic-deep dark:bg-romantic-darkAccent rounded-full animate-[soundWave_1.2s_ease-in-out_infinite]" />
          <div className="w-[3px] h-4 bg-romantic-deep dark:bg-romantic-darkAccent rounded-full animate-[soundWave_0.8s_ease-in-out_infinite_0.2s]" />
          <div className="w-[3px] h-3 bg-romantic-deep dark:bg-romantic-darkAccent rounded-full animate-[soundWave_1.1s_ease-in-out_infinite_0.4s]" />
          <div className="w-[3px] h-5 bg-romantic-deep dark:bg-romantic-darkAccent rounded-full animate-[soundWave_0.9s_ease-in-out_infinite_0.1s]" />
        </div>
      )}

      {/* Botão de Controle */}
      <button
        onClick={togglePlay}
        className="relative w-12 h-12 rounded-full glass-card border-romantic-soft/30 hover:border-romantic-gold/50 shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105"
        title={isPlaying ? "Pausar música de fundo" : "Tocar música de fundo"}
      >
        {/* Barra de Progresso Circular */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="transparent"
            stroke="rgba(245, 200, 66, 0.15)"
            strokeWidth="2.5"
          />
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="transparent"
            stroke="#F5C842"
            strokeWidth="2.5"
            strokeDasharray={138.2}
            strokeDashoffset={138.2 - (138.2 * progress) / 100}
            className="transition-all duration-300"
          />
        </svg>

        {/* Ícone */}
        <div className="text-romantic-deep dark:text-romantic-darkAccent z-10">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-slate-400" />
          )}
        </div>
      </button>

      {/* Estilos injetados para animação das ondas sonoras */}
      <style>{`
        @keyframes soundWave {
          0%, 100% { height: 6px; }
          50% { height: 20px; }
        }
      `}</style>
    </div>
  );
}
