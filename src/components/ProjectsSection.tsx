
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, TestTube, Smartphone, Figma } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      icon: Code,
      title: 'OneView Automation',
      description: 'Led comprehensive automation testing for OneView platform using Selenium and Python. Implemented robust test frameworks and achieved 80% test coverage improvement.',
      technologies: ['Selenium', 'Python', 'Test Frameworks', 'CI/CD']
    },
    {
      icon: TestTube,
      title: 'Prescreener Candidate Flow',
      description: 'Automated end-to-end testing for candidate screening workflows. Developed cross-browser testing strategies and session handling mechanisms.',
      technologies: ['Automation Testing', 'Cross-browser', 'Session Management', 'API Testing']
    },
    {
      icon: Smartphone,
      title: 'Mobile App QA with Appium',
      description: 'Comprehensive mobile application testing using Appium with JavaScript. Covered iOS and Android platforms with extensive device compatibility testing.',
      technologies: ['Appium', 'JavaScript', 'Mobile Testing', 'iOS/Android']
    },
    {
      icon: Figma,
      title: 'Figma QA Testing on Webflow',
      description: 'UI/UX quality assurance for Figma designs implemented on Webflow. Ensured pixel-perfect implementation and responsive design compliance.',
      technologies: ['Figma', 'Webflow', 'UI/UX Testing', 'Responsive Design']
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Dark Background with Falling Stars */}
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 card-hover backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <project.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold gold-glow mb-3">{project.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
