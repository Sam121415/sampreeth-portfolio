
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Bangalore University',
      year: '2018-2021',
      description: 'Comprehensive study of computer science fundamentals, programming languages, and software development methodologies.'
    },
    {
      degree: 'Pre-University Course (12th Grade)',
      institution: 'Vyshnavi Chetana PU College',
      year: '2016-2018',
      description: 'Science stream with focus on Mathematics, Physics, and Computer Science.'
    },
    {
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'Bapuji Higher Primary English Medium School',
      year: '2016',
      description: 'Strong foundation in core subjects with excellent academic performance.'
    }
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text gold-glow-font">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-slate-900/80 border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 card-hover backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-yellow-400 laser-icon-glow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-white font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-yellow-500" />
                      <span className="text-yellow-500 text-sm">{edu.year}</span>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
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
