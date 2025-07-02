
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Microscope, Zap } from 'lucide-react';

const PhilosophySection = () => {
  const philosophies = [
    {
      icon: Search,
      title: 'Precision Bug Detection',
      quote: 'Every bug is a clue waiting to reveal the story of better software.',
      description: 'Meticulous attention to detail in identifying and documenting defects with comprehensive analysis.'
    },
    {
      icon: Microscope,
      title: 'Deep System Analysis',
      quote: 'Understanding the system is the first step to mastering its quality.',
      description: 'Thorough examination of system behavior, user flows, and edge cases for comprehensive coverage.'
    },
    {
      icon: Zap,
      title: 'Automation Test Efficiency',
      quote: 'Automation amplifies human intelligence, it doesn\'t replace human insight.',
      description: 'Strategic automation implementation that enhances testing efficiency while maintaining quality focus.'
    }
  ];

  return (
    <section id="philosophy" className="section-padding relative overflow-hidden">
      {/* Dark Background with Falling Stars */}
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text gold-glow-font">My Quality Philosophy</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <Card key={index} className="bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 card-hover backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="bg-blue-500/10 p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <philosophy.icon className="w-8 h-8 text-yellow-400 laser-icon-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{philosophy.title}</h3>
                <blockquote className="text-yellow-400 italic mb-4 text-lg">
                  "{philosophy.quote}"
                </blockquote>
                <p className="text-gray-300">{philosophy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
