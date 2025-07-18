import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';
import appiumScreenshot from '@/assets/appium-bridge-screenshot.jpg';

const AppiumProjectCard = () => {
  const project = {
    icon: Smartphone,
    title: 'Bridge AI & Prescreener – Automation & Prompt Engineering',
    description: 'Used Appium Inspector + Appium Server to automate Android (UIAutomator2) & iOS (XCUITest). Tested multi-device automation using separate debugging ports. In Bridge project, taught our platform to ChatGPT 3.0 using Prompt Engineering. Users can generate backend apps (e.g., Hospital or Attendance Management) instantly using a single prompt. Verified all auto-generated Templates and Forums by validating the full JSON structure in database. UI/UX was created using Google Studio 2.5 Pro by reading JSON. Also performed Server Restart & Router Config via shared GCP commands.',
    technologies: ['Appium', 'UIAutomator2', 'XCUITest', 'Prompt Engineering', 'ChatGPT 3.0', 'JSON Validation', 'Google Studio 2.5 Pro', 'GCP'],
    image: appiumScreenshot
  };

  return (
    <Card className="premium-project-card bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-blue-500/10 p-3 rounded-lg premium-icon-container">
            <project.icon className="w-8 h-8 text-yellow-400 premium-animated-icon" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3 premium-project-title">{project.title}</h3>
          </div>
        </div>
        <div className="mb-4">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg border border-blue-500/30 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          />
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed premium-description">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
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
  );
};

export default AppiumProjectCard;