
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InterestsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const interests = [
    // Professional QA Interests
    {
      icon: '🖥️',
      title: 'UI Testing',
      description: 'Comprehensive user interface testing across web and mobile platforms.'
    },
    {
      icon: '🤖',
      title: 'Automation Practice',
      description: 'Building and maintaining automated test suites for efficiency.'
    },
    {
      icon: '🎨',
      title: 'Web Design QA',
      description: 'Ensuring pixel-perfect designs and responsive layouts.'
    },
    {
      icon: '🔍',
      title: 'Exploratory Testing',
      description: 'Discovering edge cases through systematic exploration.'
    },
    // Personal Interests
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

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Slow auto-scroll speed

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to beginning when reaching the end
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
    };

    const interval = setInterval(autoScroll, 50);
    
    // Pause auto-scroll on hover
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      const newInterval = setInterval(autoScroll, 50);
      return () => clearInterval(newInterval);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text gold-glow-font">Interests & Hobbies</h2>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600/80 hover:bg-blue-500/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 laser-glow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600/80 hover:bg-blue-500/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 laser-glow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container with Auto-scroll */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {interests.map((interest, index) => (
              <Card key={index} className="min-w-[280px] bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 card-hover backdrop-blur-sm flex-shrink-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-500/10 p-4 rounded-full w-fit mx-auto mb-6">
                    <div className="text-4xl laser-icon-glow">{interest.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold gold-glow-font mb-3">{interest.title}</h3>
                  <p className="text-gray-300 text-sm gold-glow-font">{interest.description}</p>
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
