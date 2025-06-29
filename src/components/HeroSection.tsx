
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/da2b4390-85a3-4451-9433-8772ff66b42e.png'; // This will be replaced with actual PDF
    link.download = 'Sampreeth_Kannavar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInConnect = () => {
    window.open('https://www.linkedin.com/in/sampreeth-k-1b5ba7263', '_blank');
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Laser Grid Background */}
        <div className="absolute inset-0 laser-grid opacity-20"></div>
        
        {/* Animated Snowfall */}
        <div className="absolute inset-0 snowfall"></div>
        
        {/* Moving Laser Lines */}
        <div className="absolute inset-0 laser-lines"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/78339498-1920-4ca1-aa22-f4759e0b75a6.png" 
              alt="Sampreeth Kannavar" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-neon-gold profile-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-gold/20 to-transparent animate-pulse"></div>
          </div>
        </div>
        
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
            onClick={handleDownloadResume}
            className="bg-neon-gold text-dark-900 hover:bg-neon-gold/90 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-gold/25 golden-hover"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button 
            onClick={handleLinkedInConnect}
            variant="outline" 
            className="border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-dark-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-gold/25 golden-hover"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Connect LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
