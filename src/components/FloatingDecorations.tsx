import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: number;
  rotation: string;
}

export default function FloatingDecorations() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate petals after mount to prevent hydration/static mismatches
    const generated: Petal[] = Array.from({ length: 15 }).map((_, idx) => {
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 12}s`;
      const duration = `${12 + Math.random() * 15}s`;
      const size = Math.floor(6 + Math.random() * 12);
      const rotation = `${Math.floor(Math.random() * 360)}deg`;

      return {
        id: idx,
        left,
        delay,
        duration,
        size,
        rotation,
      };
    });

    setPetals(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="absolute bottom-0 text-champagne/15 fill-current petal-float"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            transform: `rotate(${petal.rotation})`,
          }}
          viewBox="0 0 24 24"
        >
          {/* Delicate leaf/petal SVG path */}
          <path d="M12,2C12,2 4,10 4,15A8,8 0 0,0 12,23C20,23 20,15 20,15C20,10 12,2 12,2M12,4.83C15.54,8.83 18,12.75 18,15C18,18.31 15.31,21 12,21C8.69,21 6,18.31 6,15C6,12.75 8.46,8.83 12,4.83Z" />
        </svg>
      ))}
    </div>
  );
}
