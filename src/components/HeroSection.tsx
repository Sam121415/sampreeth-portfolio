
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, Mail, Phone, MapPin, X } from 'lucide-react';

const HeroSection = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('idle');
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
        setTimeout(() => {
          setTitleAnimationComplete(true);
        }, 500);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = async () => {
    setDownloadStatus('downloading');
    
    try {
      const link = document.createElement('a');
      link.href = '/lovable-uploads/053a0eb3-f0c5-4d0c-8329-593cd9de7c76.png';
      link.download = 'Sampreeth_Kannavar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus('success');
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 4000);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('idle');
    }
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

  const openModal = () => {
    setShowImageModal(true);
  };

  const closeModal = () => {
    setShowImageModal(false);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dark-space-bg"></div>
        <div className="absolute inset-0 enhanced-falling-stars opacity-90"></div>
        
        {/* Simple 3D Planets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-24 h-24 realistic-earth-3d"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 realistic-sun-3d"></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 realistic-saturn-3d"></div>
          <div className="absolute top-1/2 left-1/6 w-12 h-12 realistic-mars-3d"></div>
        </div>
        
        {/* Simple Glowing Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-radial from-yellow-400/80 via-white/60 to-transparent rounded-full glowing-star-premium"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/da12429c-9415-4737-9e61-48de56241cbc.png" 
                alt="Sampreeth Kannavar" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 profile-glow cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-yellow-400"
                onClick={openModal}
              />
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 cursor-default min-h-[80px] md:min-h-[100px] text-white premium-title-font ${nameAnimationComplete ? 'name-glow-complete' : 'name-typing-glow'}`}>
            {animatedText}
            {!nameAnimationComplete && <span className="animate-pulse">|</span>}
          </h1>
          
          <h2 className={`text-xl md:text-2xl font-medium mb-4 transition-all duration-300 cursor-default text-white premium-subtitle-font ${titleAnimationComplete ? 'title-glow-complete' : ''}`}>
            Software QA Engineer | Manual & Automation Testing | UI/UX QA Specialist
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-white">
            <button 
              onClick={handleLocationClick}
              className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-yellow-400 premium-contact-link"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Bengaluru, Karnataka, India</span>
            </button>
            <button 
              onClick={handleEmailClick}
              className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-yellow-400 text-yellow-400 glow-text premium-contact-link"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>ksampreeth12@gmail.com</span>
            </button>
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-yellow-400 premium-contact-link"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+91 9591491861</span>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadResume}
              disabled={downloadStatus === 'downloading'}
              className="premium-3d-button premium-gold-button px-8 py-4 text-lg font-bold"
            >
              <Download className="w-5 h-5 mr-2" />
              {downloadStatus === 'success' ? 'Downloaded ✓' : downloadStatus === 'downloading' ? 'Downloading...' : 'Download Resume'}
            </Button>
            <Button 
              onClick={handleLinkedInConnect}
              className="premium-3d-button premium-pink-button px-8 py-4 text-lg font-bold"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 smooth-modal-entry">
          <div className="relative max-w-2xl max-h-2xl text-center">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-500 transition-all duration-200 hover:scale-110 shadow-lg z-10 smooth-close-button"
            >
              <X className="w-5 h-5" />
            </button>
            
            {!imageLoaded && (
              <div className="w-96 h-96 bg-slate-800/50 rounded-lg flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
              </div>
            )}
            
            <img 
              src="/lovable-uploads/da12429c-9415-4737-9e61-48de56241cbc.png" 
              alt="Sampreeth Kannavar" 
              className={`w-full h-full object-contain rounded-lg shadow-2xl shadow-blue-500/30 max-w-lg max-h-lg mb-4 transition-opacity duration-700 ${imageLoaded ? 'opacity-100 smooth-image-entry' : 'opacity-0'}`}
              onLoad={handleImageLoad}
            />
            
            {imageLoaded && (
              <div className="smooth-text-entry">
                <h3 className="text-2xl font-bold text-white mb-2 glow-text premium-title-font">Sampreeth Kannavar</h3>
                <p className="text-lg text-gray-300 mb-4 premium-subtitle-font">Software QA Engineer</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
