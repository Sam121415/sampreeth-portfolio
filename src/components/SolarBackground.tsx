
import React, { useEffect, useState } from 'react';

const SolarBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const planets = [
    { name: 'Sun', size: 8, color: 'yellow-400', x: 10, baseY: 20, speed: 0.1 },
    { name: 'Earth', size: 4, color: 'blue-400', x: 80, baseY: 30, speed: 0.15 },
    { name: 'Moon', size: 2, color: 'gray-300', x: 85, baseY: 25, speed: 0.12 },
    { name: 'Saturn', size: 6, color: 'yellow-600', x: 60, baseY: 60, speed: 0.08 },
    { name: 'Mars', size: 3, color: 'red-400', x: 30, baseY: 70, speed: 0.2 },
    { name: 'Jupiter', size: 7, color: 'orange-400', x: 90, baseY: 80, speed: 0.05 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {planets.map((planet, index) => (
        <div
          key={planet.name}
          className={`absolute rounded-full bg-${planet.color} opacity-30 blur-sm animate-pulse`}
          style={{
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            left: `${planet.x}%`,
            top: `${planet.baseY + (scrollY * planet.speed * 0.1)}%`,
            transform: `translateY(${scrollY * planet.speed}px)`,
            animationDelay: `${index * 0.5}s`,
            boxShadow: `0 0 ${planet.size * 2}px rgba(255, 215, 0, 0.3)`
          }}
        />
      ))}
    </div>
  );
};

export default SolarBackground;
