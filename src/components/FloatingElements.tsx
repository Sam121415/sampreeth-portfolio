
import React from 'react';
import { Bug, Shield, CheckCircle, Zap } from 'lucide-react';

const FloatingElements = () => {
  const icons = [
    { Icon: Bug, delay: '0s', position: 'top-20 left-10' },
    { Icon: Shield, delay: '1s', position: 'top-40 right-20' },
    { Icon: CheckCircle, delay: '2s', position: 'top-60 left-1/4' },
    { Icon: Zap, delay: '3s', position: 'top-80 right-1/3' },
    { Icon: Bug, delay: '4s', position: 'top-96 left-1/2' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {icons.map(({ Icon, delay, position }, index) => (
        <Icon
          key={index}
          className={`absolute w-6 h-6 text-neon-blue/30 floating-icon ${position}`}
          style={{ animationDelay: delay }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
