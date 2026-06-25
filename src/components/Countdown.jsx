import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const startDate = new Date('2023-06-25T00:00:00');

    const calculateTime = () => {
      const now = new Date();
      
      // Cálculo preciso de Anos, Meses e Dias
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      // Ajusta os dias se o dia atual for menor que o dia de início
      if (days < 0) {
        months--;
        // Pega o último dia do mês anterior
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      // Ajusta os meses se o mês atual for anterior ao mês de início
      if (months < 0) {
        years--;
        months += 12;
      }

      // Horas, minutos e segundos restantes para o ciclo do dia
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        // Se as horas cruzarem a meia-noite, ajusta dias, mas a lógica acima baseada em datas já cobre a maior parte
      }

      // Cálculo de dias totais para curiosidade/detalhe
      const differenceInMs = now.getTime() - startDate.getTime();
      const totalDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

      setTimeLeft({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Anos', value: timeLeft.years },
    { label: 'Meses', value: timeLeft.months },
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 mt-6">
      {/* Contador em Grid de Cartões */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 w-full max-w-4xl">
        {timeBlocks.map((block, index) => (
          <div
            key={index}
            className="glass-card flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl border-romantic-soft/30 hover:border-romantic-gold/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <span className="font-serif text-3xl md:text-5xl font-semibold text-romantic-deep dark:text-romantic-darkAccent text-glow-rose">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm font-medium tracking-wider text-slate-500 dark:text-slate-400 mt-2 uppercase">
              {block.label}
            </span>
          </div>
        ))}
      </div>

      {/* Dias totais acumulados */}
      <div className="mt-8 flex items-center justify-center gap-2 px-6 py-2 rounded-full glass-card border-romantic-soft/20 text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium">
        <Heart className="w-4 h-4 text-romantic-deep dark:text-romantic-darkAccent animate-pulse-slow fill-current" />
        <span>Já são <strong className="text-romantic-deep dark:text-romantic-darkAccent font-semibold font-serif text-lg">{timeLeft.totalDays}</strong> dias rindo das suas gracinhas!</span>
        <Heart className="w-4 h-4 text-romantic-deep dark:text-romantic-darkAccent animate-pulse-slow fill-current" />
      </div>
    </div>
  );
}
