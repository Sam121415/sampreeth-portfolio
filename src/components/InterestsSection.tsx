
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Smartphone, Headphones } from 'lucide-react';

const InterestsSection = () => {
  const interests = [
    {
      icon: Palette,
      title: 'Exploring UI/UX Design',
      description: 'Passionate about user interface design principles and user experience optimization. Constantly learning about design trends and accessibility standards.'
    },
    {
      icon: Smartphone,
      title: 'Testing Emerging Apps',
      description: 'Always curious about new applications and technologies. Love to explore and test cutting-edge mobile and web applications to understand innovative user interactions.'
    },
    {
      icon: Headphones,
      title: 'QA Talks & Tech Podcasts',
      description: 'Regular listener of quality assurance discussions, testing methodologies, and technology podcasts to stay updated with industry best practices.'
    }
  ];

  return (
    <section id="interests" className="section-padding relative overflow-hidden">
      {/* Dark Background with Falling Stars */}
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Interests & Hobbies</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 card-hover backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-500/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <interest.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold gold-glow mb-3">{interest.title}</h3>
                <p className="text-gray-300">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
