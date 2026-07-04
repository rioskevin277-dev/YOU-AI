/**
 * DotMatrixBackground — Lightweight Canvas 2D dot matrix.
 *
 * Renders a grid of dots with a slow wave animation radiating from center.
 * Inspired by the 21st.dev Sign In Flow background, but using Canvas 2D
 * instead of Three.js — no extra dependencies.
 *
 * Overlays:
 *  - Radial gradient vignette (dark center → transparent edges → depth)
 *  - Top gradient so the navbar doesn't fight with dots
 */
'use client';

import { useEffect, useRef } from 'react';

interface DotMatrixBackgroundProps {
  /** Opacity cap for each dot (0-1). Keep low for subtlety. Default 0.08 */
  maxOpacity?: number;
  /** Dot radius in px. Default 1.5 */
  dotSize?: number;
  /** Grid spacing in px. Default 24 */
  spacing?: number;
  /** RGB color string, e.g. '255, 255, 255'. Default white. */
  color?: string;
  /** Wave propagation speed. Default 0.25 */
  speed?: number;
}

export function DotMatrixBackground({
  maxOpacity = 0.08,
  dotSize = 1.5,
  spacing = 24,
  color = '255, 255, 255',
  speed = 0.25,
}: DotMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let startTime = performance.now();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / spacing);
      const rows = Math.ceil(h / spacing);
      const cx = w / 2;
      const cy = h / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      // Use a fixed seed for per-dot randomness (deterministic per position)
      const hash = (x: number, y: number) => {
        let h = x * 374761393 + y * 668265263;
        h = (h ^ (h >> 13)) * 1274126177;
        return (h ^ (h >> 16)) & 0xffff;
      };

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing + spacing / 2;
          const y = row * spacing + spacing / 2;

          // Skip dots too close to edges for a cleaner look
          if (x < spacing || x > w - spacing || y < spacing || y > h - spacing) continue;

          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          const normalized = dist / maxDist;

          // Wave: a slow sine that radiates from center
          // Each dot gets a tiny random phase offset so they don't all pulse in unison
          const randomOffset = (hash(col, row) % 1000) / 1000;
          const phase = normalized * 3 - elapsed * speed + randomOffset;
          const wave = (Math.sin(phase * Math.PI * 2) + 1) / 2; // 0..1

          // Fade dots toward edges (vignette via distance)
          const edgeFade = 1 - normalized * 0.5;

          const dotOpacity = wave * maxOpacity * edgeFade;

          // Only bother drawing if visible
          if (dotOpacity < 0.001) continue;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${dotOpacity})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [maxOpacity, dotSize, spacing, color, speed]);

  return (
    <div className="dot-matrix-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="dot-matrix-canvas" />
      {/* Radial vignette: darker center pushes dots outward visually */}
      <div className="dot-matrix-radial" />
      {/* Top fade so the navbar area stays clean */}
      <div className="dot-matrix-top" />
    </div>
  );
}
