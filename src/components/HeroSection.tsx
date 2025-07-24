
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
        
        {/* Background Galaxies */}
        <div className="absolute top-10 left-10 w-32 h-32 md:w-40 md:h-40 opacity-30 pointer-events-none z-5">
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(75, 0, 130, 0.3) 30%, rgba(25, 25, 112, 0.2) 60%, transparent 100%)',
              animation: 'spin 120s linear infinite',
              boxShadow: '0 0 50px rgba(138, 43, 226, 0.3), 0 0 100px rgba(75, 0, 130, 0.2)'
            }}
          />
        </div>

        <div className="absolute bottom-20 right-20 w-28 h-28 md:w-36 md:h-36 opacity-25 pointer-events-none z-5">
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 20, 147, 0.4) 0%, rgba(139, 69, 19, 0.3) 30%, rgba(128, 0, 128, 0.2) 60%, transparent 100%)',
              animation: 'spin 180s linear infinite reverse',
              boxShadow: '0 0 60px rgba(255, 20, 147, 0.3), 0 0 120px rgba(139, 69, 19, 0.2)'
            }}
          />
        </div>

        {/* Black Hole */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 md:w-20 md:h-20 opacity-70 pointer-events-none z-8">
          <div 
            className="w-full h-full rounded-full relative"
            style={{
              background: 'radial-gradient(circle, #000000 30%, rgba(128, 0, 128, 0.8) 50%, rgba(255, 255, 255, 0.1) 80%, transparent 100%)',
              boxShadow: '0 0 30px rgba(128, 0, 128, 0.8), 0 0 60px rgba(75, 0, 130, 0.6), inset 0 0 20px rgba(0, 0, 0, 0.9)',
              animation: 'spin 8s linear infinite'
            }}
          >
            {/* Accretion Disk */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-12 md:w-28 md:h-14 border border-purple-400/40 rounded-full"
              style={{
                animation: 'spin 4s linear infinite',
                boxShadow: '0 0 20px rgba(128, 0, 128, 0.6)'
              }}
            />
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 md:w-24 md:h-12 border border-purple-300/30 rounded-full"
              style={{
                animation: 'spin 6s linear infinite reverse'
              }}
            />
          </div>
        </div>

        {/* Enhanced Premium Solar System - Drifting Motion */}
        <div 
          className="absolute top-8 right-4 md:top-12 md:right-8 lg:top-16 lg:right-12 pointer-events-none z-10"
          style={{
            animation: 'solar-drift 600s ease-in-out infinite',
            willChange: 'transform'
          }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            
            {/* Planet Orbits with Enhanced Glowing Rings */}
            {[
              { name: 'Mercury', size: 12, orbit: 50, speed: 8, color: 'linear-gradient(45deg, #8C7853, #BFB5A0)', glow: 'rgba(140, 120, 83, 0.8)' },
              { name: 'Venus', size: 14, orbit: 65, speed: 12, color: 'linear-gradient(45deg, #FFC649, #FFB347)', glow: 'rgba(255, 198, 73, 0.9)' },
              { name: 'Earth', size: 16, orbit: 80, speed: 16, color: 'linear-gradient(45deg, #6B93D6, #4FC3F7, #66BB6A)', glow: 'rgba(107, 147, 214, 1)' },
              { name: 'Mars', size: 14, orbit: 95, speed: 20, color: 'linear-gradient(45deg, #CD5C5C, #FF6B35)', glow: 'rgba(205, 92, 92, 0.9)' },
              { name: 'Jupiter', size: 24, orbit: 120, speed: 24, color: 'linear-gradient(45deg, #D2691E, #FF8C00, #F4A460)', glow: 'rgba(210, 105, 30, 1)' },
              { name: 'Saturn', size: 20, orbit: 145, speed: 28, color: 'linear-gradient(45deg, #FAD5A5, #FFEAA7)', glow: 'rgba(250, 213, 165, 0.9)' }
            ].map((planet, index) => (
              <div key={planet.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Enhanced Glowing Orbit Ring */}
                <div 
                  className="border border-white/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: `${planet.orbit}px`,
                    height: `${planet.orbit}px`,
                    animation: `spin ${planet.speed}s linear infinite`,
                    boxShadow: `0 0 15px rgba(255, 255, 255, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)`,
                    willChange: 'transform'
                  }}
                >
                  {/* Enhanced Planet */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: `${planet.size}px`,
                      height: `${planet.size}px`,
                      borderRadius: '50%',
                      background: planet.color,
                      boxShadow: `0 0 25px ${planet.glow}, 0 0 50px ${planet.glow.replace('1)', '0.6)')}, 0 0 75px ${planet.glow.replace('1)', '0.3)')}`,
                      animation: `spin ${planet.speed / 2}s linear infinite reverse`,
                      willChange: 'transform'
                    }}
                  >
                    {/* Enhanced Saturn's Rings */}
                    {planet.name === 'Saturn' && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div 
                          className="border-2 border-yellow-300/90 rounded-full"
                          style={{
                            width: '36px',
                            height: '18px',
                            animation: 'spin 12s linear infinite',
                            boxShadow: '0 0 20px rgba(255, 215, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.5), 0 0 60px rgba(255, 215, 0, 0.3)'
                          }}
                        ></div>
                        <div 
                          className="border border-yellow-200/70 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          style={{
                            width: '40px',
                            height: '20px',
                            animation: 'spin 15s linear infinite reverse'
                          }}
                        ></div>
                        <div 
                          className="border border-yellow-100/50 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          style={{
                            width: '44px',
                            height: '22px',
                            animation: 'spin 18s linear infinite'
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Enhanced Central Sun - Perfectly Centered */}
            <div className="absolute top-1/2 left-1/2 w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <div 
                className="w-full h-full rounded-full"
                style={{
                  background: 'radial-gradient(circle, #FFD700 0%, #FFA500 40%, #FF8C00 80%, #FF6347 100%)',
                  boxShadow: '0 0 50px rgba(255, 215, 0, 1), 0 0 100px rgba(255, 165, 0, 0.8), 0 0 150px rgba(255, 140, 0, 0.6), 0 0 200px rgba(255, 99, 71, 0.4)',
                  animation: 'pulse 3s ease-in-out infinite, spin 25s linear infinite'
                }}
              ></div>
              <div 
                className="absolute inset-0 rounded-full opacity-90"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 80%)',
                  animation: 'spin 30s linear infinite reverse'
                }}
              ></div>
              {/* Solar Flares */}
              <div 
                className="absolute inset-0 rounded-full opacity-60"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 215, 0, 0.3) 10%, transparent 20%, rgba(255, 165, 0, 0.3) 30%, transparent 40%)',
                  animation: 'spin 15s linear infinite'
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
