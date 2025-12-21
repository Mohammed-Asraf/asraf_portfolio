'use client';

import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

const StarParticle: FC = () => (
  <div
    className="absolute h-2 w-2 rounded-full star-particle-animation"
    style={{
      background: 'radial-gradient(white, rgba(255, 255, 255, 0))',
      filter: 'blur(0.5px)', // Added blur
    }}
  />
);

const CursorAura = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  const lastTimeRef = useRef(0);
  const throttleInterval = 50; // ms

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTimeRef.current < throttleInterval) {
        return;
      }
      lastTimeRef.current = now;

      const newParticle: Particle = {
        id: now,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove the particle after the animation is done
      setTimeout(() => {
        setParticles((currentParticles) =>
          currentParticles.filter((p) => p.id !== newParticle.id)
        );
      }, 1000); // Must match animation duration
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <style>
        {`
          @keyframes fade-out-star {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              transform: scale(0);
            }
          }
          .star-particle-animation {
            animation: fade-out-star 1s forwards;
          }
        `}
      </style>
      <div className="pointer-events-none fixed inset-0 z-[9999]">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute"
            style={{ top: p.y, left: p.x, transform: 'translate(-50%, -50%)' }}
          >
            <StarParticle />
          </div>
        ))}
      </div>
    </>
  );
};

export default CursorAura;