
import React from 'react';

const FloatingElements = () => {
  // Realistic lighting elements instead of emoji icons
  const lightElements = [
    { delay: '0s', position: 'top-20 left-10', intensity: 'opacity-30' },
    { delay: '1s', position: 'top-40 right-20', intensity: 'opacity-40' },
    { delay: '2s', position: 'top-60 left-1/4', intensity: 'opacity-20' },
    { delay: '3s', position: 'top-80 right-1/3', intensity: 'opacity-35' },
    { delay: '4s', position: 'top-96 left-1/2', intensity: 'opacity-25' },
    { delay: '5s', position: 'top-32 left-3/4', intensity: 'opacity-30' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {lightElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} floating-light`}
          style={{ animationDelay: element.delay }}
        >
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 ${element.intensity} blur-sm`}
            style={{
              animation: `float 4s ease-in-out infinite ${element.delay}, glow-pulse 3s ease-in-out infinite ${element.delay}`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
