import React, { useEffect, useRef } from 'react';

export default function BokehBackground({ isDark }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Ajusta o tamanho do canvas no resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Configuração das partículas
    const particleCount = 45;
    const particles = [];

    class Petal {
      constructor() {
        this.reset();
        // Começa em posições Y aleatórias na tela para não cair tudo do topo logo no início
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -20;
        this.size = Math.random() * 14 + 6; // tamanho das pétalas
        this.speedY = Math.random() * 0.8 + 0.4; // velocidade de queda
        this.speedX = Math.random() * 0.4 - 0.2; // deriva horizontal
        this.opacity = Math.random() * 0.5 + 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() * 0.02 - 0.01) * 0.5;
        this.oscillationSpeed = Math.random() * 0.015 + 0.005;
        this.oscillationAmount = Math.random() * 1.5 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        
        // Tipo de partícula: 0 = Pétala de rosa, 1 = Bokeh suave circular
        this.type = Math.random() > 0.4 ? 0 : 1;
      }

      update() {
        this.y += this.speedY;
        this.angle += this.oscillationSpeed;
        this.x += Math.sin(this.angle) * this.oscillationAmount + this.speedX;
        this.rotation += this.rotationSpeed;

        // Leve interação física com o mouse
        if (mouseRef.current.active) {
          const dx = this.x - mouseRef.current.x;
          const dy = this.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            const force = (120 - distance) / 120;
            this.x += (dx / distance) * force * 2;
            this.y += (dy / distance) * force * 2;
          }
        }

        // Se sair da tela, reseta no topo
        if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        if (this.type === 0) {
          // Desenha uma pétala de rosa delicada
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          
          // Paleta baseada no tema
          if (isDark) {
            ctx.fillStyle = `rgba(255, 64, 129, ${this.opacity})`; // Neon Rose
          } else {
            ctx.fillStyle = `rgba(194, 24, 91, ${this.opacity * 0.8})`; // Deep Rose mais suave
          }

          ctx.beginPath();
          // Curva de pétala orgânica estilizada
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 3, 0, this.size);
          ctx.bezierCurveTo(this.size, this.size / 3, this.size / 2, -this.size / 2, 0, 0);
          ctx.fill();

          // Detalhe de nervura na pétala
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, this.size * 0.75);
          ctx.stroke();

        } else {
          // Desenha um círculo Bokeh de luz suave desfocado
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 2
          );
          
          if (isDark) {
            gradient.addColorStop(0, `rgba(245, 200, 66, ${this.opacity})`); // Gold glow
            gradient.addColorStop(0.5, `rgba(194, 24, 91, ${this.opacity * 0.3})`); // Rose glow
            gradient.addColorStop(1, 'rgba(26, 10, 16, 0)');
          } else {
            gradient.addColorStop(0, `rgba(252, 228, 236, ${this.opacity})`); // Soft blush
            gradient.addColorStop(0.6, `rgba(245, 200, 66, ${this.opacity * 0.25})`); // Gold soft
            gradient.addColorStop(1, 'rgba(255, 248, 240, 0)');
          }

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Inicializa a população de partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Petal());
    }

    const animate = () => {
      // Limpa com um efeito de rastro suave
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-1000"
      style={{ opacity: 0.8 }}
    />
  );
}
