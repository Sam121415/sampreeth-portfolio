
import React from 'react';
import Header from '@/components/Header';
import FloatingElements from '@/components/FloatingElements';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LanguagesSection from '@/components/LanguagesSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import PhilosophySection from '@/components/PhilosophySection';
import QuotesSection from '@/components/QuotesSection';
import InterestsSection from '@/components/InterestsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <FloatingElements />
      
      <main>
        <HeroSection />
        <AboutSection />
        <LanguagesSection />
        <EducationSection />
        <SkillsSection />
        <AchievementsSection />
        <PhilosophySection />
        <QuotesSection />
        <InterestsSection />
        <ContactSection />
      </main>
      
      <footer className="bg-dark-800 border-t border-neon-blue/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Sampreeth Kannavar. Crafted with precision and passion for quality.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
