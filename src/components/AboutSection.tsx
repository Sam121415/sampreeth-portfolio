
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
        
        <Card className="bg-slate-900/80 border-yellow-500/30 backdrop-blur-sm card-hover">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-white mb-6">
              I'm a passionate Software QA Engineer with extensive experience in both manual and automation testing. 
              My expertise spans across web applications, mobile platforms, and API testing, with a strong focus on 
              delivering high-quality software solutions.
            </p>
            
            <p className="text-lg leading-relaxed text-white mb-6">
              With proficiency in Selenium, Appium, and various testing frameworks, I've successfully automated 
              complex test scenarios and improved testing efficiency across multiple projects. My approach combines 
              technical precision with creative problem-solving to ensure comprehensive quality assurance.
            </p>
            
            <p className="text-lg leading-relaxed text-white">
              I believe in continuous learning and staying updated with the latest testing methodologies and tools. 
              My goal is to bridge the gap between development and quality assurance, ensuring that every product 
              meets the highest standards of excellence.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
