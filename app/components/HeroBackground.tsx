'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  ox: number; // origin x
  oy: number; // origin y
  vx: number;
  vy: number;
  size: number;
  hue: number; // 230–280 indigo/violet range
}

// Tuning
const SPACING   = 52;
const REPEL_R   = 160;   // mouse influence radius
const FORCE     = 9;     // repel strength
const RETURN    = 0.07;  // spring stiffness
const FRICTION  = 0.78;
const LINE_DIST = 80;    // max dist between neighbours to draw a line

export default function HeroBackground() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const mouseRef    = useRef({ x: -9999, y: -9999 });
  const particles   = useRef<Particle[]>([]);
  const rafRef      = useRef(0);
  const sectionRef  = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // find the parent <section> so we know the bounding rect
    sectionRef.current = canvas.closest('section');

    const ctx = canvas.getContext('2d', { alpha: true })!;

    /* ── build grid ── */
    const build = () => {
      const section = sectionRef.current;
      const W = section ? section.offsetWidth  : window.innerWidth;
      const H = section ? section.offsetHeight : window.innerHeight;
      canvas.width  = W;
      canvas.height = H;

      const cols = Math.ceil(W / SPACING) + 1;
      const rows = Math.ceil(H / SPACING) + 1;
      const list: Particle[] = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          list.push({
            x: c * SPACING, y: r * SPACING,
            ox: c * SPACING, oy: r * SPACING,
            vx: 0, vy: 0,
            size: Math.random() < 0.15 ? 2.2 : 1.3,
            hue: 230 + Math.random() * 50, // indigo→violet
          });
        }
      }
      particles.current = list;
    };

    build();

    /* ── mouse: listen on window so it works behind content ── */
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const onLeave = (e: MouseEvent) => {
      // only clear if leaving the section area
      const section = sectionRef.current;
      if (!section) { mouseRef.current = { x: -9999, y: -9999 }; return; }
      const r = section.getBoundingClientRect();
      if (
        e.clientX < r.left || e.clientX > r.right ||
        e.clientY < r.top  || e.clientY > r.bottom
      ) {
        mouseRef.current = { x: -9999, y: -9999 };
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousemove', onLeave);

    /* ── draw loop ── */
    let last = 0;
    const draw = (t: number) => {
      rafRef.current = requestAnimationFrame(draw);
      if (t - last < 16) return; // 60 fps cap
      last = t;

      const { x: mx, y: my } = mouseRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = particles.current;

      /* physics */
      for (const p of pts) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const d2 = dx * dx + dy * dy;

        if (d2 < REPEL_R * REPEL_R && d2 > 0) {
          const d    = Math.sqrt(d2);
          const force = ((REPEL_R - d) / REPEL_R) ** 1.4 * FORCE;
          p.vx -= (dx / d) * force;
          p.vy -= (dy / d) * force;
        }

        p.vx += (p.ox - p.x) * RETURN;
        p.vy += (p.oy - p.y) * RETURN;
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x  += p.vx;
        p.y  += p.vy;
      }

      /* lines between neighbours (draw first, under dots) */
      ctx.lineWidth = 0.6;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        const dispA = Math.hypot(a.x - a.ox, a.y - a.oy);

        // only check right + down neighbours (avoids double-drawing)
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          // skip distant grid cells early (cheap check)
          if (Math.abs(b.ox - a.ox) > SPACING * 1.5) continue;
          if (Math.abs(b.oy - a.oy) > SPACING * 1.5) break; // rows are sorted

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > LINE_DIST) continue;

          const dispB   = Math.hypot(b.x - b.ox, b.y - b.oy);
          const avgDisp = (dispA + dispB) / 2;
          const alpha   = Math.min(avgDisp / 18, 1) * 0.55 * (1 - dist / LINE_DIST);
          if (alpha < 0.01) continue;

          const hue = (a.hue + b.hue) / 2;
          ctx.strokeStyle = `hsla(${hue}, 85%, 70%, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      /* dots */
      for (const p of pts) {
        const disp  = Math.hypot(p.x - p.ox, p.y - p.oy);
        const t2    = Math.min(disp / 22, 1);
        const alpha = 0.18 + t2 * 0.75;
        const size  = p.size + t2 * 1.8;

        // glow for displaced dots
        if (t2 > 0.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size + 4, 0, Math.PI * 2);
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size + 4);
          grd.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${t2 * 0.3})`);
          grd.addColorStop(1, `hsla(${p.hue}, 90%, 70%, 0)`);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 68%, ${alpha})`;
        ctx.fill();
      }
    };

    rafRef.current = requestAnimationFrame(draw);

    const onResize = () => build();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousemove', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
