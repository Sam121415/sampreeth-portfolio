
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

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Bengaluru,Karnataka,India', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ksampreeth12@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919591491861';
  };

  return (
    <>
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Dark Background with Falling Stars */}
        <div className="absolute inset-0 dark-space-bg"></div>
        <div className="absolute inset-0 falling-stars opacity-90"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          {/* Profile Image with Popup */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/da12429c-9415-4737-9e61-48de56241cbc.png" 
                alt="Sampreeth Kannavar" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 profile-glow cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400"
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
            <button 
              onClick={handleLocationClick}
              className="flex items-center gap-2 hover-glow transition-all duration-300 cursor-pointer hover:text-blue-400"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Bengaluru, Karnataka, India</span>
            </button>
            <button 
              onClick={handleEmailClick}
              className="flex items-center gap-2 hover-glow transition-all duration-300 cursor-pointer hover:text-blue-400"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>ksampreeth12@gmail.com</span>
            </button>
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 hover-glow transition-all duration-300 cursor-pointer hover:text-blue-400"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+91 9591491861</span>
            </button>
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
              className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Connect LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl max-h-2xl">
            <img 
              src="/lovable-uploads/da12429c-9415-4737-9e61-48de56241cbc.png" 
              alt="Sampreeth Kannavar" 
              className="w-full h-full object-contain rounded-lg shadow-2xl shadow-blue-500/30 max-w-lg max-h-lg"
            />
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full p-3 hover:bg-red-500 transition-all duration-300 hover:scale-110 shadow-lg"
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
