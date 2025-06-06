
import React from 'react';
import { Code2, Lightbulb, Rocket, Award, Users, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    { icon: Code2, title: "5+ Years Experience", desc: "Building enterprise-grade applications" },
    { icon: Rocket, title: "20+ Projects", desc: "Successfully delivered to production" },
    { icon: Users, title: "Cross-functional", desc: "Collaborated with diverse teams" },
    { icon: Award, title: "Best Practices", desc: "Clean code and architecture focus" }
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Writing maintainable, scalable code following SOLID principles and design patterns."
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Constantly exploring emerging technologies to solve complex business challenges."
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Staying current with industry trends and best practices through ongoing education."
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated full-stack software engineer with a passion for building robust, 
                scalable applications that solve real-world problems. With expertise spanning from 
                backend Java Spring Boot services to modern React frontends, I bridge the gap 
                between complex technical requirements and intuitive user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in software development has taken me through enterprise-level applications, 
                microservices architectures, and cloud-native solutions on AWS. I believe in writing 
                clean, maintainable code and fostering collaborative team environments.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-background">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                      alt="Nicholas Oppong" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
