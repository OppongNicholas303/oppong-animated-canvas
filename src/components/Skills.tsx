
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 90, color: 'from-red-500 to-orange-500' },
    { name: 'Spring Boot', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 80, color: 'from-green-600 to-lime-500' },
    { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-800' },
    { name: 'AWS', level: 75, color: 'from-orange-500 to-yellow-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-400' },
    { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-800' },
  ];

  const technologies = [
    'Java', 'Spring Boot', 'React', 'Node.js', 'Express.js', 'AWS', 
    'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'REST APIs', 'GraphQL'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Technology Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={tech}
                  className="p-4 bg-card border border-border rounded-lg text-center hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Areas of Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <h4 className="text-lg font-semibold mb-3 text-primary">Frontend Development</h4>
              <p className="text-muted-foreground">
                Building responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <h4 className="text-lg font-semibold mb-3 text-primary">Backend Development</h4>
              <p className="text-muted-foreground">
                Creating robust APIs and microservices using Java Spring Boot, Node.js, and Express.js.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <h4 className="text-lg font-semibold mb-3 text-primary">Cloud & DevOps</h4>
              <p className="text-muted-foreground">
                Deploying and managing applications on AWS with containerization and CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
