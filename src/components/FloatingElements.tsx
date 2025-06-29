
import React from 'react';
import { Bug, Shield, CheckCircle, Zap, TestTube, Star } from 'lucide-react';

const FloatingElements = () => {
  const icons = [
    { Icon: Bug, delay: '0s', position: 'top-20 left-10', color: 'text-blue-400' },
    { Icon: Shield, delay: '1s', position: 'top-40 right-20', color: 'text-blue-500' },
    { Icon: CheckCircle, delay: '2s', position: 'top-60 left-1/4', color: 'text-blue-300' },
    { Icon: Zap, delay: '3s', position: 'top-80 right-1/3', color: 'text-blue-400' },
    { Icon: TestTube, delay: '4s', position: 'top-96 left-1/2', color: 'text-blue-500' },
    { Icon: Star, delay: '5s', position: 'top-32 left-3/4', color: 'text-blue-300' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {icons.map(({ Icon, delay, position, color }, index) => (
        <div
          key={index}
          className={`absolute ${position} floating-icon`}
          style={{ animationDelay: delay }}
        >
          <Icon
            className={`w-6 h-6 ${color} drop-shadow-lg opacity-40`}
            style={{
              filter: 'drop-shadow(0 0 8px currentColor)',
              animation: `float 3s ease-in-out infinite ${delay}, glow-pulse 2s ease-in-out infinite ${delay}`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
