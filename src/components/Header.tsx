
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
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Show lightning effect
    setShowLightning(sectionId);
    setTimeout(() => setShowLightning(''), 300);

    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Lightning Effect */}
      {showLightning && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="absolute inset-0 bg-blue-400/20 animate-pulse duration-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Zap className="w-20 h-20 text-yellow-400 animate-ping" />
          </div>
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
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/30 profile-glow"
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
                  className={`nav-link text-sm font-semibold transition-all duration-300 hover:text-blue-400 relative font-['Outfit',sans-serif] ${
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
                className={`text-left text-sm font-semibold transition-all duration-300 hover:text-blue-400 py-2 font-['Outfit',sans-serif] ${
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
