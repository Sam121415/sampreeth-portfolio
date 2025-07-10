
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuotesSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "Quality is not an act, it is a habit in the realm of software testing.",
      author: "Aristotle (Adapted for QA)",
      category: "Philosophy"
    },
    {
      text: "A bug in production is worth a thousand in development. Test early, test often!",
      author: "QA Wisdom",
      category: "Testing Philosophy"
    },
    {
      text: "The best debugger is a good night's sleep and a fresh pair of eyes on the code.",
      author: "QA Master",
      category: "Debugging"
    },
    {
      text: "Testing is not about finding bugs; it's about preventing disasters before they happen.",
      author: "Software QA Guru",
      category: "Prevention"
    },
    {
      text: "Every click, every scroll, every pixel matters. User experience is our responsibility.",
      author: "UI/UX QA Specialist",
      category: "User Experience"
    },
    {
      text: "Automation is not about replacing testers; it's about empowering them to focus on what machines cannot do - think creatively.",
      author: "Automation Engineer",
      category: "Automation"
    },
    {
      text: "The most expensive bug is the one that reaches the customer. Quality pays for itself.",
      author: "QA Economics",
      category: "Business Value"
    },
    {
      text: "In the world of software, assumption is the mother of all bugs. Question everything, test everything.",
      author: "Critical Thinker QA",
      category: "Critical Thinking"
    },
    {
      text: "Good software, like good wine, gets better with age. But only if it's tested properly from the beginning.",
      author: "Vintage QA Engineer",
      category: "Quality Assurance"
    },
    {
      text: "The beauty of testing lies not in finding perfection, but in the relentless pursuit of excellence.",
      author: "Perfectionist QA",
      category: "Excellence"
    },
    {
      text: "Every test case is a story waiting to be told. Make sure it has a happy ending.",
      author: "Storyteller QA",
      category: "Test Design"
    },
    {
      text: "Regression testing: Because yesterday's fix might be today's new feature request.",
      author: "Experienced QA Lead",
      category: "Regression"
    },
    {
      text: "The user doesn't care about your code architecture. They care about whether your app works flawlessly.",
      author: "User-Centric QA",
      category: "User Focus"
    },
    {
      text: "Testing is like insurance - you don't appreciate it until you need it, but when you do, you're grateful it's there.",
      author: "Risk Management QA",
      category: "Risk Management"
    },
    {
      text: "A great tester sees what others overlook, questions what others assume, and protects what others take for granted.",
      author: "Visionary QA Engineer",
      category: "Vision"
    }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="quotes" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-60"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 premium-section-title-unified premium-title-font">
          QA Wisdom & Inspiration
        </h2>
        
        <Card className="bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-8 h-8 text-yellow-400" />
            </div>
            
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-6 italic font-medium">
                "{quotes[currentQuote].text}"
              </p>
              <p className="text-yellow-400 font-semibold text-lg">
                — {quotes[currentQuote].author}
              </p>
              <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mt-3">
                {quotes[currentQuote].category}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <Button
                onClick={prevQuote}
                variant="ghost"
                className="premium-button-compact h-10 w-10 p-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuote 
                        ? 'bg-yellow-400 w-6' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextQuote}
                variant="ghost"
                className="premium-button-compact h-10 w-10 p-0"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-gray-400 italic">
            Quote {currentQuote + 1} of {quotes.length} • Inspiring the QA Community
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
