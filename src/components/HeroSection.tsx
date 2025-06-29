
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
        {/* Dark Blue Sky Background */}
        <div className="absolute inset-0 night-sky-bg"></div>
        
        {/* Falling White Stars */}
        <div className="absolute inset-0 star-field opacity-80"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/78339498-1920-4ca1-aa22-f4759e0b75a6.png" 
                alt="Sampreeth Kannavar" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 profile-glow cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setShowImageModal(true)}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text text-white hover:text-blue-400 transition-all duration-300 cursor-default">
            Sampreeth Kannavar
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-4 text-blue-400 blue-glow hover:text-blue-300 transition-all duration-300 cursor-default">
            Software QA Engineer | Manual & Automation Testing | UI/UX QA Specialist
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-gray-300">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 cursor-default">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 cursor-default">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>ksampreeth12@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 cursor-default">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+91 9591491861</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadResume}
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transform"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              onClick={handleLinkedInConnect}
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 transform"
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
              className="w-full h-full object-contain rounded-lg shadow-2xl shadow-blue-500/30"
            />
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-all duration-300 hover:scale-110"
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
