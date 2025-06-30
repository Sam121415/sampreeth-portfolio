
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLightning, setShowLightning] = useState('');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'quotes', label: 'QA Wisdom' },
    { id: 'interests', label: 'Interests' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Increased offset for better detection

      // Find the current section based on scroll position
      let currentSection = 'home';
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = navItems[i].id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Enhanced lightning effect with laser strike
    setShowLightning(sectionId);
    setTimeout(() => setShowLightning(''), 600);

    // Scroll to section with faster speed
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Enhanced Lightning Effect with Laser Strike */}
      {showLightning && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-purple-500/20 to-transparent animate-pulse duration-600"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-blue-400 to-transparent opacity-80 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 bg-yellow-400/40 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-16 h-16 bg-white/60 rounded-full animate-pulse mx-auto my-auto"></div>
          </div>
          {/* Light crack effect */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-px h-1/3 bg-gradient-to-b from-transparent via-yellow-300 to-transparent animate-pulse delay-150"></div>
        </div>
      )}

      <header className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-blue-500/20 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand with Profile Image */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/da12429c-9415-4737-9e61-48de56241cbc.png" 
                alt="Sampreeth K" 
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/30 profile-glow transition-all duration-300 hover:scale-110"
              />
              <div className="text-xl font-bold text-white glow-text font-['Outfit',sans-serif]">
                Sampreeth K
              </div>
            </div>
            
            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link text-sm font-semibold transition-all duration-300 hover:text-blue-400 relative font-['Outfit',sans-serif] gold-glow-font ${
                    activeSection === item.id 
                      ? 'text-yellow-400 glow-text active-nav' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-blue-400 transition-colors p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-16 left-0 w-full bg-slate-950/98 backdrop-blur-md border-b border-blue-500/20 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm font-semibold transition-all duration-300 hover:text-blue-400 py-2 font-['Outfit',sans-serif] gold-glow-font ${
                  activeSection === item.id 
                    ? 'text-yellow-400 glow-text border-l-2 border-yellow-400 pl-3' 
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
