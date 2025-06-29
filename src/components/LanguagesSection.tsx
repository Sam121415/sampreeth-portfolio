
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const LanguagesSection = () => {
  const languages = [
    { name: 'Kannada', proficiency: 'Native', flag: '🇮🇳' },
    { name: 'English', proficiency: 'Professional', flag: '🇺🇸' },
    { name: 'Hindi', proficiency: 'Conversational', flag: '🇮🇳' }
  ];

  return (
    <section id="languages" className="section-padding bg-dark-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Languages</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <Card key={index} className="bg-dark-700/50 border-neon-teal/30 hover:border-neon-teal/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-teal/10">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{language.flag}</div>
                <h3 className="text-xl font-semibold text-neon-teal mb-2">{language.name}</h3>
                <p className="text-gray-400">{language.proficiency}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Globe className="w-8 h-8 text-neon-gold mx-auto mb-4" />
          <p className="text-gray-400">Multilingual communication enables better collaboration across diverse teams</p>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
