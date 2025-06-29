
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Laser Grid Background */}
      <div className="absolute inset-0 laser-grid opacity-20"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text text-white">
          Sampreeth Kannavar
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium mb-4 text-neon-gold gold-glow">
          Software QA Engineer | Manual & Automation Testing | UI/UX QA Specialist
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-neon-teal" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-neon-teal" />
            <span>ksampreeth12@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-neon-teal" />
            <span>+91 9591491861</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-neon-gold text-dark-900 hover:bg-neon-gold/90 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-gold/25"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/25"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
