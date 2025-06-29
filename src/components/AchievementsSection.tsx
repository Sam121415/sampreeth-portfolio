
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Users, Zap, Shield, Code } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Shield,
      title: 'Lead Automation of OneView & Prescreener',
      description: 'Successfully led the automation initiative for critical applications, improving test coverage by 80%'
    },
    {
      icon: Target,
      title: 'Tested 100+ Features Across Platforms',
      description: 'Comprehensive testing of features across web, mobile, and API platforms ensuring quality delivery'
    },
    {
      icon: Code,
      title: 'Cross-browser Session Handling',
      description: 'Implemented robust cross-browser testing strategies with advanced session management'
    },
    {
      icon: Zap,
      title: 'Reusable Test Frameworks',
      description: 'Created scalable and maintainable test automation frameworks reducing development time by 60%'
    },
    {
      icon: Users,
      title: 'Mentored Junior Testers',
      description: 'Guided and trained junior QA engineers in best practices and automation techniques'
    },
    {
      icon: Trophy,
      title: 'Quality Excellence Award',
      description: 'Recognized for outstanding contribution to quality assurance and process improvement'
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-dark-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Achievements & Responsibilities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-dark-700/50 border-neon-gold/30 hover:border-neon-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-gold/10 group">
              <CardContent className="p-6">
                <div className="bg-neon-gold/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-neon-gold/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-neon-gold" />
                </div>
                <h3 className="text-lg font-semibold text-neon-gold mb-3">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
