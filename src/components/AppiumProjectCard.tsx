import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';
import appiumScreenshot from '@/assets/appium-bridge-screenshot.jpg';

const AppiumProjectCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Bridge AI - Prompt Engineering Card */}
      <Card className="bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 card-hover backdrop-blur-sm h-fit">
        <CardContent className="p-6">
          <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
            <Smartphone className="w-6 h-6 text-yellow-400 laser-icon-glow" />
          </div>
          
          <h3 className="text-lg font-bold text-white mb-3">🚀 Bridge AI – Prompt Engineering</h3>
          <h4 className="text-yellow-400 text-sm font-semibold mb-3">🧠 Smart backend creation using ChatGPT 3.0</h4>
          
          <div className="text-gray-300 space-y-2 text-sm leading-relaxed mb-4">
            <p>• Taught the product to ChatGPT 3.0 using Prompt Engineering.</p>
            <p>• Tested all AI-generated templates and forums, ensuring valid JSON structure and accurate key mapping in the database.</p>
            <p>• Created UI automatically from JSON using Google Studio 2.5 Pro.</p>
          </div>

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
                className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bridge Product - Mobile Automation Card */}
      <Card className="bg-slate-900/80 border-green-500/30 hover:border-green-400/60 transition-all duration-300 card-hover backdrop-blur-sm h-fit">
        <CardContent className="p-6">
          <div className="bg-green-500/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-green-500/20 transition-colors">
            <Smartphone className="w-6 h-6 text-yellow-400 laser-icon-glow" />
          </div>
          
          <h3 className="text-lg font-bold text-white mb-3">🧪 Bridge Product – Mobile Automation</h3>
          <h4 className="text-yellow-400 text-sm font-semibold mb-3">🔧 Multi-device Appium testing for Android & iOS</h4>
          
          <div className="text-gray-300 space-y-2 text-sm leading-relaxed mb-4">
            <p>• Built complete automation using Appium Inspector and Appium Server.</p>
            <p>• Supported both UIAutomator2 (Android) and XCUITest (iOS) frameworks.</p>
            <p>• Handled multiple devices simultaneously using different ports.</p>
            <p>• Performed deep QA testing on Bridge's mobile flows.</p>
            <p>• Validated integrations, dynamic data flow, and edge cases on real devices.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['Appium Inspector', 'UIAutomator2', 'XCUITest', 'Multi-device Testing', 'Mobile QA', 'Integration Testing'].map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppiumProjectCard;