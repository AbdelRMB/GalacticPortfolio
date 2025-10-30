import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function GalaxyBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<number[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);

    const shootingInterval = setInterval(() => {
      setShootingStars((prev) => [...prev, Date.now()]);
      setTimeout(() => {
        setShootingStars((prev) => prev.slice(1));
      }, 3000);
    }, 4000);

    return () => clearInterval(shootingInterval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />
      </div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {shootingStars.map((id) => (
        <div
          key={id}
          className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
          }}
        >
          <div className="absolute w-20 h-0.5 bg-gradient-to-r from-white to-transparent -translate-y-1/2" />
        </div>
      ))}

      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
}
