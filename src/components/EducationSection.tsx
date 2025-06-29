
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University Name',
      year: '2018-2021',
      description: 'Comprehensive study of computer science fundamentals, programming languages, and software development methodologies.'
    },
    {
      degree: 'Pre-University Course (12th Grade)',
      institution: 'College Name',
      year: '2016-2018',
      description: 'Science stream with focus on Mathematics, Physics, and Computer Science.'
    },
    {
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'School Name',
      year: '2016',
      description: 'Strong foundation in core subjects with excellent academic performance.'
    }
  ];

  return (
    <section id="education" className="section-padding bg-dark-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-dark-700/50 border-neon-gold/30 hover:border-neon-gold/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neon-gold/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-neon-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neon-gold mb-2">{edu.degree}</h3>
                    <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-neon-teal" />
                      <span className="text-neon-teal text-sm">{edu.year}</span>
                    </div>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
