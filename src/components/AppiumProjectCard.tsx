import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, TestTube } from 'lucide-react';
import appiumScreenshot from '@/assets/appium-bridge-screenshot.jpg';

const AppiumProjectCard = () => {
  return (
    <>
      {/* Bridge AI - Prompt Engineering Card */}
      <Card className="premium-project-card bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-500/10 p-3 rounded-lg premium-icon-container">
              <Brain className="w-8 h-8 text-yellow-400 premium-animated-icon" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3 premium-project-title">🚀 Bridge AI – Prompt Engineering</h3>
            </div>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed premium-description">
            Taught the product to ChatGPT 3.0 using Prompt Engineering. Tested all AI-generated templates and forums, ensuring valid JSON structure and accurate key mapping. Created UI automatically from JSON using Google Studio 2.5 Pro.
          </p>
          
          <div className="mb-4">
            <img 
              src={appiumScreenshot} 
              alt="Bridge AI Creation Steps Screenshot"
              className="w-full h-40 object-cover rounded-lg border border-blue-500/30 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {['Prompt Engineering', 'ChatGPT 3.0', 'JSON Validation', 'Google Studio 2.5 Pro', 'Backend Generation'].map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="premium-tech-tag px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bridge Product - Mobile Automation Card */}
      <Card className="premium-project-card bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-500/10 p-3 rounded-lg premium-icon-container">
              <TestTube className="w-8 h-8 text-yellow-400 premium-animated-icon" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3 premium-project-title">🧪 Bridge Product – Mobile Automation</h3>
            </div>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed premium-description">
            Built complete automation using Appium Inspector and Appium Server. Supported both UIAutomator2 (Android) and XCUITest (iOS) frameworks. Handled multiple devices simultaneously using different ports with deep QA testing and validation.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {['Appium Inspector', 'UIAutomator2', 'XCUITest', 'Multi-device Testing', 'Mobile QA', 'Integration Testing'].map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="premium-tech-tag px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AppiumProjectCard;