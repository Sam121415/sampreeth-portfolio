
import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InterestsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const interests = [
    {
      icon: '🥾',
      title: 'Hiking',
      description: 'Exploring nature trails and mountain paths for adventure and fitness.'
    },
    {
      icon: '🏊‍♂️',
      title: 'Swimming',
      description: 'Regular swimming sessions for health and relaxation.'
    },
    {
      icon: '📺',
      title: 'Animated Web Series',
      description: 'Enjoying creative storytelling through animated content and series.'
    },
    {
      icon: '🏏',
      title: 'Cricket',
      description: 'Following cricket matches and playing occasionally with friends.'
    },
    {
      icon: '🎱',
      title: 'Snooker',
      description: 'Strategic gameplay and precision shots in snooker games.'
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="interests" className="section-padding relative overflow-hidden">
      {/* Dark Background with Falling Stars */}
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Interests & Hobbies</h2>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600/80 hover:bg-blue-500/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600/80 hover:bg-blue-500/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {interests.map((interest, index) => (
              <Card key={index} className="min-w-[280px] bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 card-hover backdrop-blur-sm flex-shrink-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h3 className="text-lg font-semibold gold-glow mb-3">{interest.title}</h3>
                  <p className="text-gray-300 text-sm">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
