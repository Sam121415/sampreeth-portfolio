
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Mail, Phone, MapPin, X } from 'lucide-react';

const HeroSection = () => {
  const [showImageModal, setShowImageModal] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/da2b4390-85a3-4451-9433-8772ff66b42e.png';
    link.download = 'Sampreeth_Kannavar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInConnect = () => {
    window.open('https://www.linkedin.com/in/sampreeth-k-1b5ba7263', '_blank');
  };

  return (
    <>
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Galaxy Background with Premium Effects */}
        <div className="absolute inset-0">
          {/* Galaxy Background */}
          <div className="absolute inset-0 galaxy-bg"></div>
          
          {/* Golden Snowfall */}
          <div className="absolute inset-0 golden-snowfall"></div>
          
          {/* Animated Asteroids */}
          <div className="absolute inset-0 asteroid-field"></div>
          
          {/* Light Beams */}
          <div className="absolute inset-0 light-beams"></div>
          
          {/* 3D Floating Icons */}
          <div className="absolute inset-0 floating-3d-icons"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/78339498-1920-4ca1-aa22-f4759e0b75a6.png" 
                alt="Sampreeth Kannavar" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-neon-gold profile-glow cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/50"
                onClick={() => setShowImageModal(true)}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-gold/20 via-neon-pink/20 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text text-white hover:text-neon-gold transition-all duration-300 cursor-default">
            Sampreeth Kannavar
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-4 text-neon-gold gold-glow hover:text-neon-pink transition-all duration-300 cursor-default">
            Software QA Engineer | Manual & Automation Testing | UI/UX QA Specialist
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-gray-300">
            <div className="flex items-center gap-2 hover:text-neon-gold transition-all duration-300 cursor-default">
              <MapPin className="w-4 h-4 text-neon-teal" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2 hover:text-neon-gold transition-all duration-300 cursor-default">
              <Mail className="w-4 h-4 text-neon-teal" />
              <span>ksampreeth12@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-neon-gold transition-all duration-300 cursor-default">
              <Phone className="w-4 h-4 text-neon-teal" />
              <span>+91 9591491861</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadResume}
              className="bg-neon-gold text-dark-900 hover:bg-neon-pink hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-gold/50 hover:scale-105 transform"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              onClick={handleLinkedInConnect}
              variant="outline" 
              className="border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-dark-900 hover:border-neon-pink hover:shadow-lg hover:shadow-neon-pink/50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Connect LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl max-h-2xl">
            <img 
              src="/lovable-uploads/78339498-1920-4ca1-aa22-f4759e0b75a6.png" 
              alt="Sampreeth Kannavar" 
              className="w-full h-full object-contain rounded-lg shadow-2xl shadow-neon-gold/30"
            />
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute -top-4 -right-4 bg-neon-gold text-dark-900 rounded-full p-2 hover:bg-neon-pink hover:text-white transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
