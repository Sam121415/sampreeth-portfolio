
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Dark Background with Falling Stars */}
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">About Me</h2>
        
        <Card className="bg-slate-900/80 border-blue-500/30 backdrop-blur-sm card-hover">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-white mb-6">
              I'm a Software Engineer with 1.6 years of experience at Cosmitude Softwares, specializing in Quality Assurance. 
              I bring a strong foundation in manual and automation testing, and have worked across multiple QA domains — from 
              web UI to pixel-level visual QA, ensuring every release meets the highest quality standards.
            </p>
            
            <p className="text-lg leading-relaxed text-white mb-6">
              My expertise includes comprehensive testing frameworks using Selenium and Appium, API testing with Postman, 
              and cross-platform quality assurance. I've successfully implemented automated test suites that improved 
              testing efficiency by 60% and reduced regression testing time significantly.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              I'm passionate about delivering pixel-perfect user experiences and maintaining robust testing methodologies. 
              My approach combines technical precision with creative problem-solving to ensure comprehensive quality 
              coverage across web applications, mobile platforms, and API integrations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
