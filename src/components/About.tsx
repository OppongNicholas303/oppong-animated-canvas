import React from 'react';
import { Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern, scalable web applications. 
              With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user 
              experiences backed by robust server-side solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development has led me through various technologies, from Java Spring Boot 
              applications to React frontends, all deployed on AWS cloud infrastructure. I'm constantly learning 
              and adapting to new technologies to deliver the best solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <Code className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Writing maintainable and efficient code</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <Lightbulb className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Problem Solving</h3>
                <p className="text-sm text-muted-foreground">Finding creative solutions to complex challenges</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <Coffee className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">Always exploring new technologies and best practices</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img 
                    src="/src/assets/images/nicholas.jpeg" 
                    alt="Nicholas Oppong" 
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
