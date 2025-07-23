
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
      {/* Central Solar System - Perfectly Centered */}
      <div className="absolute top-20 right-10 w-96 h-96 opacity-80">
        {/* Planet Orbits - Properly Spaced from Sun */}
        {planets.map((planet, index) => (
          <div key={planet.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Orbit Ring */}
            <div 
              className="border border-white/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${planet.orbit + 60}px`,
                height: `${planet.orbit + 60}px`,
                animation: `spin ${20 + index * 10}s linear infinite`
              }}
            >
              {/* Planet */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: `${planet.size * 4}px`,
                  height: `${planet.size * 4}px`,
                  borderRadius: '50%',
                  background: planet.name === 'Mercury' ? 'linear-gradient(45deg, #8C7853, #BFB5A0)' :
                             planet.name === 'Venus' ? 'linear-gradient(45deg, #FFC649, #FFB347)' :
                             planet.name === 'Earth' ? 'linear-gradient(45deg, #6B93D6, #4FC3F7, #66BB6A)' :
                             planet.name === 'Mars' ? 'linear-gradient(45deg, #CD5C5C, #FF6B35)' :
                             planet.name === 'Jupiter' ? 'linear-gradient(45deg, #D2691E, #FF8C00, #F4A460)' :
                             'linear-gradient(45deg, #FAD5A5, #FFEAA7)', // Saturn
                  boxShadow: planet.name === 'Mercury' ? '0 0 15px rgba(140, 120, 83, 0.6)' :
                             planet.name === 'Venus' ? '0 0 15px rgba(255, 198, 73, 0.7)' :
                             planet.name === 'Earth' ? '0 0 15px rgba(107, 147, 214, 0.8)' :
                             planet.name === 'Mars' ? '0 0 15px rgba(205, 92, 92, 0.7)' :
                             planet.name === 'Jupiter' ? '0 0 20px rgba(210, 105, 30, 0.8)' :
                             '0 0 18px rgba(250, 213, 165, 0.7)' // Saturn
                }}
              >
                {/* Saturn Ring Effect */}
                {planet.name === 'Saturn' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div 
                      className="border-2 border-yellow-300/80 rounded-full"
                      style={{
                        width: '45px',
                        height: '22px',
                        animation: 'spin 12s linear infinite',
                        boxShadow: '0 0 15px rgba(255, 215, 0, 0.6)'
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Central Sun - Perfectly Centered Above All Orbits */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="w-full h-full rounded-full animate-pulse shadow-[0_0_40px_rgba(255,215,0,0.9),0_0_80px_rgba(255,165,0,0.7),0_0_120px_rgba(255,140,0,0.5)]"></div>
        </div>
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
