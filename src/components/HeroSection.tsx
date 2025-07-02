
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Mail, Phone, MapPin, X } from 'lucide-react';

const HeroSection = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const name = 'Sampreeth Kannavar';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= name.length) {
        setAnimatedText(name.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setNameAnimationComplete(true);
        // Start title animation after name completes
        setTimeout(() => {
          setTitleAnimationComplete(true);
        }, 500);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

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

  const closeModal = () => {
    setShowImageModal(false);
  };

  return (
    <>
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Dark Background with Falling Stars */}
        <div className="absolute inset-0 dark-space-bg"></div>
        <div className="absolute inset-0 enhanced-falling-stars opacity-90"></div>
        
        {/* 3D Rotating Planets Background */}
        <div className="absolute top-20 right-10 md:top-32 md:right-20 z-10">
          <div className="rotating-planets-container">
            <div className="planet-orbit">
              <div className="planet sun-planet"></div>
            </div>
            <div className="planet-orbit planet-orbit-2">
              <div className="planet earth-planet"></div>
            </div>
            <div className="planet-orbit planet-orbit-3">
              <div className="planet mars-planet"></div>
            </div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          {/* Profile Image with Fast Popup */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/da12429c-9415-4737-9e61-48de56241cbc.png" 
                alt="Sampreeth Kannavar" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 profile-glow cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-yellow-400"
                onClick={() => setShowImageModal(true)}
              />
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 cursor-default min-h-[80px] md:min-h-[100px] text-white glow-text`}>
            {animatedText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <h2 className={`text-xl md:text-2xl font-medium mb-4 transition-all duration-300 cursor-default text-white glow-text`}>
            Software QA Engineer | Manual & Automation Testing | UI/UX QA Specialist
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-white">
            <button 
              onClick={handleLocationClick}
              className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Bengaluru, Karnataka, India</span>
            </button>
            <button 
              onClick={handleEmailClick}
              className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 text-yellow-400 glow-text"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>ksampreeth12@gmail.com</span>
            </button>
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+91 9591491861</span>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadResume}
              className="premium-button bg-gradient-to-r from-yellow-400 to-yellow-300 text-black hover:from-yellow-300 hover:to-yellow-200 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 hover:scale-105 transform border-2 border-yellow-400/50"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button 
              onClick={handleLinkedInConnect}
              className="premium-button bg-slate-900/80 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-600/20 hover:border-blue-400 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Connect LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Fast Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-2xl max-h-2xl animate-scale-in text-center">
            <img 
              src="/lovable-uploads/da12429c-9415-4737-9e61-48de56241cbc.png" 
              alt="Sampreeth Kannavar" 
              className="w-full h-full object-contain rounded-lg shadow-2xl shadow-blue-500/30 max-w-lg max-h-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2 glow-text">Sampreeth Kannavar</h3>
            <p className="text-lg text-gray-300 mb-4">Software QA Engineer</p>
            <button 
              onClick={closeModal}
              className="bg-red-600 text-white rounded-full p-3 hover:bg-red-500 transition-all duration-200 hover:scale-110 shadow-lg laser-glow"
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
