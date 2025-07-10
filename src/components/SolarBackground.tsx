
import React, { useEffect, useState } from 'react';

const SolarBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const planets = [
    { name: 'Mercury', size: 3, color: 'gray-400', orbit: 60, speed: 0.2 },
    { name: 'Venus', size: 4, color: 'yellow-300', orbit: 80, speed: 0.15 },
    { name: 'Earth', size: 5, color: 'blue-400', orbit: 100, speed: 0.12 },
    { name: 'Mars', size: 4, color: 'red-400', orbit: 120, speed: 0.1 },
    { name: 'Jupiter', size: 8, color: 'orange-400', orbit: 150, speed: 0.08 },
    { name: 'Saturn', size: 7, color: 'yellow-600', orbit: 180, speed: 0.06 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Central Solar System */}
      <div className="absolute top-20 right-10 w-96 h-96">
        {/* Central Sun */}
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-full h-full rounded-full animate-pulse shadow-[0_0_30px_rgba(255,215,0,0.8),0_0_60px_rgba(255,165,0,0.6),0_0_90px_rgba(255,140,0,0.4)]"></div>
        </div>

        {/* Planet Orbits */}
        {planets.map((planet, index) => (
          <div key={planet.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Orbit Ring */}
            <div 
              className="border border-white/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${planet.orbit}px`,
                height: `${planet.orbit}px`,
                animation: `spin ${20 + index * 10}s linear infinite`
              }}
            >
              {/* Planet */}
              <div 
                className={`absolute w-${planet.size} h-${planet.size} bg-gradient-to-r from-${planet.color} to-${planet.color.replace('-400', '-300')} rounded-full shadow-lg`}
                style={{
                  top: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: `0 0 15px rgba(255, 255, 255, 0.6)`,
                  width: `${planet.size * 4}px`,
                  height: `${planet.size * 4}px`
                }}
              >
                {/* Saturn Ring Effect */}
                {planet.name === 'Saturn' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div 
                      className="border-2 border-yellow-300/60 rounded-full"
                      style={{
                        width: '40px',
                        height: '20px',
                        animation: 'saturn-ring 8s linear infinite',
                        boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)'
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scattered Background Planets */}
      <div
        className="absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 blur-sm animate-pulse"
        style={{
          left: '15%',
          top: `${25 + (scrollY * 0.05)}%`,
          transform: `translateY(${scrollY * 0.1}px)`,
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
        }}
      />
      <div
        className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50 blur-sm animate-pulse"
        style={{
          left: '85%',
          top: `${70 + (scrollY * 0.08)}%`,
          transform: `translateY(${scrollY * 0.15}px)`,
          animationDelay: '1s',
          boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)'
        }}
      />
    </div>
  );
};

export default SolarBackground;
