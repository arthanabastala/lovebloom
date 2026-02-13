import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  scale: number;
  color: string;
}

interface FloatingPetalsProps {
  zIndex?: string;
}

const FloatingPetals: React.FC<FloatingPetalsProps> = ({ zIndex = "z-0" }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate static petals on mount to avoid re-renders causing jumps
    const newPetals: Petal[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      animationDuration: 10 + Math.random() * 15, // seconds
      delay: Math.random() * -20, // negative delay to start mid-animation
      scale: 0.5 + Math.random() * 0.5,
      color: Math.random() > 0.5 ? '#fda4af' : '#fecdd3' // rose-300 or rose-200
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${zIndex}`}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute opacity-60"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.delay}s`,
            transform: `scale(${petal.scale})`,
            color: petal.color
          }}
        >
          {/* Simple Petal Shape SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm">
             <path d="M12 21C12 21 4 14 4 8C4 4.686 6.686 2 10 2C11.17 2 12 2.5 12 2.5C12 2.5 12.83 2 14 2C17.314 2 20 4.686 20 8C20 14 12 21 12 21Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;