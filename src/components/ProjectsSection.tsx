
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, TestTube, Smartphone, Figma, Palette, Network, Server, Receipt, Bug, Clipboard } from 'lucide-react';

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
      icon: Receipt,
      title: 'SubTrash Full Website QA',
      description: 'Performed complete end-to-end manual testing following STLC lifecycle including test case creation, execution, bug tracking, and regression testing. Focused on UI, responsiveness, and cross-platform compatibility.',
      technologies: ['Manual Testing', 'STLC', 'Bug Tracking', 'Regression Testing', 'Cross-platform']
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
    },
    {
      icon: Palette,
      title: 'Creative Tool – Web QA',
      description: 'Comprehensive quality assurance for creative web tools and design platforms. Focus on user experience, visual consistency, and cross-browser compatibility.',
      technologies: ['Web QA', 'Creative Tools', 'UX Testing', 'Visual QA']
    },
    {
      icon: Network,
      title: 'Bridge Product – Multi-port Browser Automation',
      description: 'Advanced multi-port browser automation testing system. Handles concurrent sessions across different browsers and ports for comprehensive testing coverage.',
      technologies: ['Multi-port Testing', 'Browser Automation', 'Concurrent Sessions', 'Cross-browser']
    },
    {
      icon: Server,
      title: 'Server API Automation',
      description: 'Automated API testing using Postman with Collection Runner and Newman. Implemented globally stored environment variables for seamless test execution.',
      technologies: ['Postman', 'Newman', 'API Testing', 'Environment Variables']
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden premium-section">
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      {/* Realistic 3D Planets for Projects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-16 h-16 realistic-earth-3d" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-10 w-14 h-14 realistic-mars-3d" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text gold-glow-font premium-section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="premium-project-card bg-slate-900/80 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg premium-icon-container">
                    <project.icon className="w-8 h-8 text-yellow-400 premium-animated-icon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 premium-project-title">{project.title}</h3>
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
