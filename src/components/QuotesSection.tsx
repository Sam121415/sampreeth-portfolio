
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
    "The difference between good and great software is in the details.",
    "Testing is not a phase, it's a way of thinking.",
    "Quality is not an act, it is a habit.",
    "The best way to find bugs is to actively look for them.",
    "Testing is the compass that guides development in the right direction.",
    "A tester's job is to be professionally paranoid.",
    "Quality assurance is not quality control, it's quality prevention.",
    "The value of testing is not in finding bugs, but in preventing them.",
    "Every test case is a question asked of the system.",
    "Testing is the bridge between what was built and what was needed.",
    "A good test plan is like a good map - it shows you where you are and where you need to go.",
    "Testing is not about breaking things, it's about understanding them.",
    "The best testers are those who can think like the worst users.",
    "Quality is not about perfection, it's about meeting expectations.",
    "Testing is the guardian of user experience.",
    "A bug in production is worth a thousand tests in development.",
    "Testing is the art of asking the right questions at the right time.",
    "Quality is not an accident, it's the result of intentional effort.",
    "The most important test is the one you haven't written yet.",
    "Testing is not a cost center, it's a value creator.",
    "A tester's skepticism is a user's protection.",
    "Quality starts with the first line of code and ends with the last user interaction.",
    "Testing is the lens through which we see our software clearly.",
    "The best defense against bugs is a good offense of testing.",
    "Quality is not a destination, it's a journey of continuous improvement.",
    "Testing is the voice of the user in the development process.",
    "A good tester is worth their weight in prevented disasters.",
    "Quality is not about doing things right, it's about doing the right things.",
    "Testing is the safety net that catches what development misses.",
    "The greatest risk is not testing at all.",
    "Quality assurance is the promise we make to our users.",
    "Testing is not just about finding problems, it's about finding solutions.",
    "A thorough test today prevents a critical bug tomorrow.",
    "Quality is not a feature, it's the foundation of all features.",
    "Testing is the discipline that turns chaos into order.",
    "The best testers are those who can see the forest and the trees.",
    "Quality is not negotiable, it's essential.",
    "Testing is the practice of turning uncertainty into confidence.",
    "A good test strategy is like a good insurance policy - you hope you never need it, but you're glad you have it.",
    "Quality is not about being perfect, it's about being reliable.",
    "Testing is the guardian angel of software development.",
    "The most valuable feedback is the one that prevents a problem.",
    "Quality is not a luxury, it's a necessity.",
    "Testing is the art of making the invisible visible.",
    "A good tester is a good storyteller - they tell the story of what could go wrong.",
    "Quality is not about speed, it's about sustainability.",
    "Testing is the compass that keeps development on course.",
    "The best bugs are the ones that are caught before they become features.",
    "Quality is not about doing more, it's about doing better.",
    "Testing is the practice of professional doubt.",
    "A good test is like a good question - it reveals more than it asks.",
    "Quality is not about meeting standards, it's about exceeding expectations.",
    "Testing is the bridge between intention and reality.",
    "The most important quality is the one the user experiences.",
    "Quality is not about avoiding mistakes, it's about learning from them.",
    "Testing is the practice of turning assumptions into facts.",
    "A good tester is like a good teacher - they help others see what they couldn't see before.",
    "Quality is not about being flawless, it's about being trustworthy.",
    "Testing is the art of finding the needle in the haystack before it pricks someone.",
    "The best test is the one that finds the bug that would have caused the most damage.",
    "Quality is not about perfection, it's about continuous improvement.",
    "Testing is the practice of turning possibilities into probabilities.",
    "A good test suite is like a good security system - it protects what's valuable.",
    "Quality is not about avoiding failure, it's about failing fast and learning faster.",
    "Testing is the discipline that turns good intentions into great results.",
    "The most valuable test is the one that prevents the most valuable bug.",
    "Quality is not about being right, it's about being useful.",
    "Testing is the practice of professional curiosity.",
    "A good tester is like a good detective - they follow the evidence wherever it leads.",
    "Quality is not about meeting requirements, it's about exceeding them.",
    "Testing is the art of making the complex simple and the simple bulletproof.",
    "The best quality is the one that goes unnoticed by users because everything just works.",
    "Quality is not about doing things perfectly, it's about doing perfect things.",
    "Testing is the practice of turning hope into certainty.",
    "A good test is like a good friend - it tells you what you need to hear, not what you want to hear.",
    "Quality is not about avoiding problems, it's about solving them before they become problems.",
    "Testing is the guardian of user trust and system reliability.",
    "The most important quality metric is user satisfaction.",
    "Quality is not about following rules, it's about understanding principles.",
    "Testing is the practice of turning theory into practice.",
    "A good tester is like a good coach - they help the team perform at their best.",
    "Quality is not about being perfect, it's about being consistent.",
    "Testing is the art of finding the extraordinary in the ordinary.",
    "The best test strategy is the one that adapts to change while maintaining standards.",
    "Quality is not about avoiding risk, it's about managing it wisely."
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
    <section id="quotes" className="section-padding relative overflow-hidden">
      {/* Dark Background with Falling Stars */}
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">QA Wisdom</h2>
        
        <Card className="bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6 animate-pulse laser-glow" />
            
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed min-h-[120px] flex items-center justify-center">
              <span>"{quotes[currentQuote]}"</span>
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevQuote}
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 laser-glow"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.min(10, quotes.length) }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuote % 10 ? 'bg-blue-400 laser-glow' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextQuote}
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 laser-glow"
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
