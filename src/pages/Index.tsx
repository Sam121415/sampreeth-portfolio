
import React from 'react';
import Header from '@/components/Header';
import SolarBackground from '@/components/SolarBackground';
import FloatingElements from '@/components/FloatingElements';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import PhilosophySection from '@/components/PhilosophySection';
import QuotesSection from '@/components/QuotesSection';
import InterestsSection from '@/components/InterestsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white" style={{ scrollBehavior: 'smooth' }}>
      <Header />
      <FloatingElements />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <PhilosophySection />
        <QuotesSection />
        <InterestsSection />
        <ContactSection />
      </main>
      
      <footer className="bg-slate-900/80 border-t border-blue-500/20 py-8 relative">
        <div className="absolute inset-0 dark-space-bg"></div>
        <div className="absolute inset-0 enhanced-falling-stars opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-gray-300 font-normal">
            © 2024 Sampreeth Kannavar. Crafted with precision and passion for quality.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
