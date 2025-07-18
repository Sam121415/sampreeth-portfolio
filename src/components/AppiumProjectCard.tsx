import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';
import appiumScreenshot from '@/assets/appium-bridge-screenshot.jpg';

const AppiumProjectCard = () => {
  return (
    <Card className="bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 card-hover backdrop-blur-sm h-fit">
      <CardContent className="p-6">
        <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
          <Smartphone className="w-6 h-6 text-yellow-400 laser-icon-glow" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">🚀 Bridge AI – Automation & Prompt Engineering</h3>
        
        <div className="mb-4">
          <img 
            src={appiumScreenshot} 
            alt="Bridge AI Automation Screenshot"
            className="w-full h-40 object-cover rounded-lg border border-blue-500/30 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          />
        </div>
        
        <div className="text-gray-300 space-y-2 text-sm leading-relaxed">
          <p>• Built automation using Appium Inspector + Appium Server for Android (UIAutomator2) & iOS (XCUITest).</p>
          <p>• Enabled multiple device testing by assigning unique ports.</p>
          <p>• Used Prompt Engineering to teach the product to ChatGPT 3.0, enabling users to generate backend software apps (e.g., hospital or attendance systems) with a single prompt.</p>
          <p>• Tested auto-generated templates & forums by validating full JSON structure in the database.</p>
          <p>• Created frontend UI from JSON using Google Studio 2.5 Pro.</p>
          <p>• Also handled server restarts and routing in GCP using shared configuration commands.</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {['Appium', 'UIAutomator2', 'XCUITest', 'Prompt Engineering', 'ChatGPT 3.0', 'JSON Validation', 'Google Studio 2.5 Pro', 'GCP'].map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppiumProjectCard;