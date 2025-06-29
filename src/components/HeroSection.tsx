
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
        {/* Ultra Dark Space Background */}
        <div className="absolute inset-0 dark-space-bg"></div>
        
        {/* Falling Stars Animation */}
        <div className="absolute inset-0 falling-stars opacity-90"></div>
        
        {/* Realistic Lighting Effects */}
        <div className="absolute inset-0 light-beam"></div>
        <div className="absolute inset-0 ambient-glow"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          {/* Profile Image with Popup */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/78339498-1920-4ca1-aa22-f4759e0b75a6.png" 
                alt="Sampreeth Kannavar" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-500 profile-glow cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setShowImageModal(true)}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text hover:gold-glow transition-all duration-300 cursor-default">
            Sampreeth Kannavar
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-4 gold-glow hover-glow transition-all duration-300 cursor-default">
            Software QA Engineer | Manual & Automation Testing | UI/UX QA Specialist
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-white">
            <div className="flex items-center gap-2 hover-glow transition-all duration-300 cursor-default">
              <MapPin className="w-4 h-4 text-yellow-500" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2 hover-glow transition-all duration-300 cursor-default">
              <Mail className="w-4 h-4 text-yellow-500" />
              <span>ksampreeth12@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover-glow transition-all duration-300 cursor-default">
              <Phone className="w-4 h-4 text-yellow-500" />
              <span>+91 9591491861</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadResume}
              className="bg-yellow-600 text-black hover:bg-yellow-500 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transform"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              onClick={handleLinkedInConnect}
              variant="outline" 
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-600 hover:text-black hover:border-yellow-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Connect LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl max-h-2xl">
            <img 
              src="/lovable-uploads/78339498-1920-4ca1-aa22-f4759e0b75a6.png" 
              alt="Sampreeth Kannavar" 
              className="w-full h-full object-contain rounded-lg shadow-2xl shadow-yellow-500/30"
            />
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute -top-4 -right-4 bg-yellow-600 text-black rounded-full p-2 hover:bg-yellow-500 transition-all duration-300 hover:scale-110"
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
