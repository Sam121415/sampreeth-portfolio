
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuotesSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Behind every great product is an invisible tester with a keyboard and coffee.",
    "Testing is not about finding bugs, it's about preventing disasters.",
    "A good tester is like a detective, always asking 'what if?'",
    "Quality is everyone's responsibility, but testing is our specialty.",
    "The best bugs are the ones users never see.",
    "Testing without automation is like driving without GPS - possible, but why?",
    "Every click tells a story, every bug teaches a lesson.",
    "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    "The user doesn't care about your code, they care about their experience.",
    "Testing is an investment in quality that pays dividends in trust.",
    "A bug found in testing is a problem solved for users.",
    "Good testers think like users, great testers think like attackers.",
    "The goal of testing is not to eliminate all bugs, but to reduce risk.",
    "Testing is the art of controlled destruction to build something better.",
    "Every feature is an opportunity to exceed expectations.",
    "Quality cannot be tested into a product, it must be built in.",
    "The most expensive bugs are the ones that reach production.",
    "Testing is where creativity meets methodology.",
    "A thorough tester leaves no stone unturned, no path unexplored.",
    "The difference between good and great software is in the details."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="quotes" className="section-padding bg-dark-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">QA Wisdom</h2>
        
        <Card className="bg-dark-700/50 border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300">
          <CardContent className="p-12 text-center">
            <Quote className="w-12 h-12 text-neon-pink mx-auto mb-6 animate-pulse" />
            
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed min-h-[120px] flex items-center justify-center">
              <span className="animate-neon-pulse">"{quotes[currentQuote]}"</span>
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevQuote}
                className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {quotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuote ? 'bg-neon-pink' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextQuote}
                className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuotesSection;
