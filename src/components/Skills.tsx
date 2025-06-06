
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend Development",
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: 'Java', level: 95, years: '5+ years' },
        { name: 'Spring Boot', level: 90, years: '4+ years' },
        { name: 'Node.js', level: 85, years: '3+ years' },
        { name: 'Express.js', level: 88, years: '3+ years' }
      ]
    },
    {
      category: "Frontend Development", 
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: 'React.js', level: 92, years: '4+ years' },
        { name: 'TypeScript', level: 88, years: '3+ years' },
        { name: 'JavaScript', level: 90, years: '5+ years' },
        { name: 'HTML/CSS', level: 85, years: '5+ years' }
      ]
    },
    {
      category: "Cloud & DevOps",
      color: "from-orange-500 to-red-600", 
      skills: [
        { name: 'AWS', level: 80, years: '3+ years' },
        { name: 'Docker', level: 75, years: '2+ years' },
        { name: 'CI/CD', level: 70, years: '2+ years' },
        { name: 'Linux', level: 78, years: '3+ years' }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "Oracle Java Certification",
    "React Professional Certificate",
    "Agile/Scrum Master"
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development and cloud technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{skill.level}%</div>
                        <div className="text-xs text-muted-foreground">{skill.years}</div>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Certifications & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Development Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Agile Methodology</h4>
                  <p className="text-muted-foreground text-sm">Experienced in Scrum and Kanban workflows</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Test-Driven Development</h4>
                  <p className="text-muted-foreground text-sm">Unit testing, integration testing, and CI/CD</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Code Quality</h4>
                  <p className="text-muted-foreground text-sm">Clean code principles and peer reviews</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Performance Optimization</h4>
                  <p className="text-muted-foreground text-sm">Database optimization and caching strategies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
