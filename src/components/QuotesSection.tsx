
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, RefreshCw } from 'lucide-react';

const QuotesSection = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const qaWisdomQuotes = [
    { quote: "Quality is never an accident; it is always the result of intelligent effort.", author: "John Ruskin" },
    { quote: "Testing shows the presence, not the absence of bugs.", author: "Edsger W. Dijkstra" },
    { quote: "The bitterness of poor quality remains long after the sweetness of low price is forgotten.", author: "Benjamin Franklin" },
    { quote: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
    { quote: "If you don't have time to do it right, when will you have time to do it over?", author: "John Wooden" },
    { quote: "Testing can only prove the presence of bugs, not their absence.", author: "Edsger Dijkstra" },
    { quote: "The goal of a good tester is to find bugs. The goal of a good programmer is to avoid creating them.", author: "Anonymous" },
    { quote: "Quality is not an act, it is a habit.", author: "Aristotle" },
    { quote: "Better to prevent bugs than to chase them.", author: "Anonymous QA Wisdom" },
    { quote: "Test early, test often, test thoroughly.", author: "QA Best Practice" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % qaWisdomQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [qaWisdomQuotes.length]);

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % qaWisdomQuotes.length);
  };

  return (
    <section id="quotes" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text gold-glow-font">QA Wisdom</h2>
        
        <Card className="bg-slate-900/80 border-blue-500/30 backdrop-blur-sm card-hover">
          <CardContent className="p-12 text-center">
            <div className="bg-blue-500/10 p-4 rounded-full w-fit mx-auto mb-8">
              <Quote className="w-8 h-8 text-yellow-400 laser-icon-glow" />
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
              "{qaWisdomQuotes[currentQuoteIndex].quote}"
            </blockquote>
            
            <cite className="text-lg text-yellow-400 font-medium">
              — {qaWisdomQuotes[currentQuoteIndex].author}
            </cite>
            
            <button
              onClick={nextQuote}
              className="mt-8 bg-blue-600/80 hover:bg-blue-500/90 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105 laser-glow"
            >
              <RefreshCw className="w-4 h-4" />
              Next Wisdom
            </button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuotesSection;
