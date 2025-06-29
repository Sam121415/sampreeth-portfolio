
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Automation Testing',
      skills: ['Selenium (Python)', 'Appium (JavaScript)', 'Test Frameworks', 'Cross-browser Testing']
    },
    {
      category: 'Manual Testing',
      skills: ['Functional Testing', 'Mobile Testing', 'Regression Testing', 'User Acceptance Testing']
    },
    {
      category: 'API Testing',
      skills: ['Postman', 'REST APIs', 'API Automation', 'Response Validation']
    },
    {
      category: 'Tools & Technologies',
      skills: ['JIRA', 'Figma', 'GitHub Actions', 'CI/CD Pipeline']
    },
    {
      category: 'Development',
      skills: ['Python', 'JavaScript', 'Git', 'Version Control']
    },
    {
      category: 'QA Methodologies',
      skills: ['Agile Testing', 'Test Planning', 'Bug Reporting', 'Test Documentation']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="border-blue-400/50 text-blue-300 hover:bg-blue-500/10 transition-colors"
                    >
                      {skill}
                    </Badge>
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

export default SkillsSection;
