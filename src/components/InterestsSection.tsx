
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const InterestsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const interests = [
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
    {
      icon: '🛠️',
      title: 'Exploring Automation Tools',
      description: 'Researching and testing new automation frameworks and testing tools.'
    },
    {
      icon: '🤖',
      title: 'AI Tools Exploration',
      description: 'Exploring cutting-edge AI tools and prompt engineering techniques.'
    },
    {
      icon: '🙏',
      title: 'Disciplined Routine & Focus',
      description: 'Maintaining structured daily routines for peak productivity and focus.'
    },
    {
      icon: '♟️',
      title: 'Chess & Logic Puzzles',
      description: 'Strategic thinking and problem-solving through chess and brain teasers.'
    },
    {
      icon: '📝',
      title: 'Tech Blog Reading',
      description: 'Reading and writing QA insights and technical articles.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design Analysis',
      description: 'Breaking down design patterns and user experience flows.'
    },
    {
      icon: '📸',
      title: 'Photography & Travel',
      description: 'Digital culture research through photography and travel experiences.'
    },
    {
      icon: '🎵',
      title: 'Music & DJing',
      description: 'Playing music and DJing for creative focus and relaxation.'
    },
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
    },
    {
      icon: '🎨',
      title: 'Web Animation Design',
      description: 'Creating smooth animations and micro-interactions for web experiences.'
    },
    {
      icon: '🧘',
      title: 'Practicing Deep Focus & Discipline',
      description: 'Developing mindfulness and sustained concentration techniques.'
    }
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let scrollPosition = 0;
    const scrollSpeed = 1.8; // Increased speed further

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
    };

    const interval = setInterval(autoScroll, 25); // Faster interval
    
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      const newInterval = setInterval(autoScroll, 25);
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

  return (
    <section id="interests" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      {/* Enhanced Glowing Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-radial from-yellow-400/80 via-white/60 to-transparent rounded-full animate-pulse glowing-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* 3D Planets Background - Better Mobile Visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-12 h-12 md:w-10 md:w-10 bg-gradient-radial from-purple-400/60 via-purple-600/40 to-transparent rounded-full animate-pulse floating-planet-3d planet-mobile-visible"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 md:w-6 md:h-6 bg-gradient-radial from-green-400/70 via-green-600/50 to-transparent rounded-full animate-pulse floating-planet-3d planet-mobile-visible"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 md:w-12 md:h-12 bg-gradient-radial from-orange-400/70 via-yellow-500/60 to-transparent rounded-full animate-pulse floating-planet-3d sun-glow-soft planet-mobile-visible"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Interests & Hobbies</h2>
        
        <div className="relative">
          <div className="premium-space-track absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-400/40 via-yellow-400/60 to-blue-400/40 transform -translate-y-1/2 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent h-px top-1/2 transform -translate-y-1/2"></div>
          </div>
          
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 px-4 space-train-container"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {interests.map((interest, index) => (
              <Card key={index} className="min-w-[300px] bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-200 card-hover-enhanced backdrop-blur-sm flex-shrink-0 premium-train-car-enhanced">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-500/10 p-4 rounded-full w-fit mx-auto mb-6">
                    <div className="text-4xl laser-icon-glow">{interest.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{interest.title}</h3>
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
