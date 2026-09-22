'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  baseOpacity: number;
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COUNT = 120;
    const W = () => canvas.width;
    const H = () => canvas.height;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particlesRef.current = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W(),
        y: Math.random() * H(),
        z: Math.random() * 600 + 100,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        baseOpacity: Math.random() * 0.5 + 0.15,
      }));
    };

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        // mouse repel
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx -= (dx / dist) * force * 0.15;
          p.vy -= (dy / dist) * force * 0.15;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // friction
        p.vx *= 0.995;
        p.vy *= 0.995;

        // drift
        p.vx += (Math.random() - 0.5) * 0.01;
        p.vy += (Math.random() - 0.5) * 0.01;

        // wrap
        if (p.x < -20) p.x = W() + 20;
        if (p.x > W() + 20) p.x = -20;
        if (p.y < -20) p.y = H() + 20;
        if (p.y > H() + 20) p.y = -20;
        if (p.z > 700) p.z = 100;
        if (p.z < 100) p.z = 700;

        // perspective: closer = bigger + brighter
        const depth = p.z / 700;
        const scale = 1 - depth * 0.6;
        const r = p.size * scale;
        const alpha = p.baseOpacity * (1 - depth * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
