
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
      link.href = '/lovable-uploads/b5c4eaa6-ef01-4511-bf71-ab399e9fa8ae.png';
      link.download = 'Sampreeth_Kannavar_Resume.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus('success');
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
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
        
        {/* Premium Solar System - Always Visible */}
        <div className="absolute top-8 right-4 md:top-12 md:right-8 lg:top-16 lg:right-12 pointer-events-none z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            
            {/* Planet Orbits with Glowing Rings */}
            {[
              { name: 'Mercury', size: 12, orbit: 60, speed: 8, color: 'linear-gradient(45deg, #8C7853, #BFB5A0)', glow: 'rgba(140, 120, 83, 0.8)' },
              { name: 'Venus', size: 14, orbit: 80, speed: 12, color: 'linear-gradient(45deg, #FFC649, #FFB347)', glow: 'rgba(255, 198, 73, 0.9)' },
              { name: 'Earth', size: 16, orbit: 100, speed: 16, color: 'linear-gradient(45deg, #6B93D6, #4FC3F7, #66BB6A)', glow: 'rgba(107, 147, 214, 1)' },
              { name: 'Mars', size: 14, orbit: 120, speed: 20, color: 'linear-gradient(45deg, #CD5C5C, #FF6B35)', glow: 'rgba(205, 92, 92, 0.9)' },
              { name: 'Jupiter', size: 24, orbit: 150, speed: 24, color: 'linear-gradient(45deg, #D2691E, #FF8C00, #F4A460)', glow: 'rgba(210, 105, 30, 1)' },
              { name: 'Saturn', size: 20, orbit: 180, speed: 28, color: 'linear-gradient(45deg, #FAD5A5, #FFEAA7)', glow: 'rgba(250, 213, 165, 0.9)' }
            ].map((planet, index) => (
              <div key={planet.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Glowing Orbit Ring */}
                <div 
                  className="border border-white/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: `${planet.orbit}px`,
                    height: `${planet.orbit}px`,
                    animation: `spin ${planet.speed}s linear infinite`,
                    boxShadow: `0 0 10px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.2)`
                  }}
                >
                  {/* Planet */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: `${planet.size}px`,
                      height: `${planet.size}px`,
                      borderRadius: '50%',
                      background: planet.color,
                      boxShadow: `0 0 20px ${planet.glow}, 0 0 40px ${planet.glow.replace('1)', '0.6)')}, 0 0 60px ${planet.glow.replace('1)', '0.3)')}`,
                      animation: `spin ${planet.speed / 2}s linear infinite reverse`
                    }}
                  >
                    {/* Saturn's Rings */}
                    {planet.name === 'Saturn' && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div 
                          className="border-2 border-yellow-300/80 rounded-full"
                          style={{
                            width: '32px',
                            height: '16px',
                            animation: 'spin 12s linear infinite',
                            boxShadow: '0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.4)'
                          }}
                        ></div>
                        <div 
                          className="border border-yellow-200/60 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          style={{
                            width: '36px',
                            height: '18px',
                            animation: 'spin 15s linear infinite reverse'
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Central Sun - Perfectly Centered and Glowing */}
            <div className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <div 
                className="w-full h-full rounded-full animate-pulse"
                style={{
                  background: 'radial-gradient(circle, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                  boxShadow: '0 0 40px rgba(255, 215, 0, 0.9), 0 0 80px rgba(255, 165, 0, 0.7), 0 0 120px rgba(255, 140, 0, 0.5)',
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              ></div>
              <div 
                className="absolute inset-0 rounded-full opacity-80"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                  animation: 'spin 20s linear infinite'
                }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/da12429c-9415-4737-9e61-48de56241cbc.png" 
                alt="Sampreeth Kannavar" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 profile-glow cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-yellow-400"
                onClick={openModal}
              />
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 cursor-default min-h-[80px] md:min-h-[100px] premium-name-elegant ${nameAnimationComplete ? 'name-complete-elegant' : 'name-typing-elegant'}`}>
            {animatedText}
            {!nameAnimationComplete && <span className="animate-pulse">|</span>}
          </h1>
          
          <h2 className={`text-xl md:text-2xl font-medium mb-6 transition-all duration-300 cursor-default premium-subtitle-elegant ${titleAnimationComplete ? 'subtitle-complete-elegant' : ''}`}>
            Software QA Engineer | Manual & Automation Testing | UI/UX QA Specialist
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 text-white">
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={handleDownloadResume}
              disabled={downloadStatus === 'downloading'}
              className="premium-button-compact"
            >
              <Download className="w-4 h-4 mr-2" />
              <span className="premium-button-text-glow">
                {downloadStatus === 'success' ? 'Downloaded' : downloadStatus === 'downloading' ? 'Downloading...' : 'Download Resume'}
              </span>
            </Button>
            <Button 
              onClick={handleLinkedInConnect}
              className="premium-button-compact"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              <span className="premium-button-text-glow">Connect LinkedIn</span>
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
