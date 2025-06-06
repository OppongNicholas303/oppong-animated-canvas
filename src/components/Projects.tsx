
import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Microservices-based e-commerce solution handling 10K+ daily transactions with real-time inventory management, payment processing, and analytics dashboard.',
      longDescription: 'Built a scalable e-commerce platform using Spring Boot microservices architecture, deployed on AWS with auto-scaling capabilities.',
      technologies: ['Java Spring Boot', 'React.js', 'PostgreSQL', 'AWS ECS', 'Redis', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      metrics: ['10K+ daily users', '99.9% uptime', '< 200ms response time'],
      featured: true
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Advanced data visualization platform with real-time streaming, interactive charts, and automated reporting for business intelligence.',
      longDescription: 'Developed a comprehensive analytics platform processing millions of data points in real-time.',
      technologies: ['Node.js', 'React.js', 'MongoDB', 'Apache Kafka', 'D3.js', 'AWS Lambda'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      metrics: ['1M+ data points/day', 'Real-time processing', '15+ chart types'],
      featured: true
    },
    {
      title: 'Cloud-Native Task Management',
      description: 'Scalable project management solution with team collaboration, automated workflows, and integration capabilities.',
      longDescription: 'Built a comprehensive task management system with advanced collaboration features.',
      technologies: ['Spring Boot', 'React.js', 'MySQL', 'AWS EKS', 'Docker', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      metrics: ['500+ teams', 'Multi-tenant', 'REST & GraphQL APIs']
    }
  ];

  const additionalProjects = [
    {
      title: 'AI-Powered Code Review Tool',
      technologies: ['Python', 'React', 'TensorFlow', 'Node.js'],
      description: 'Machine learning application for automated code quality analysis and improvement suggestions.'
    },
    {
      title: 'Blockchain Supply Chain Tracker',
      technologies: ['Solidity', 'Web3.js', 'React', 'Express.js'],
      description: 'Transparent supply chain tracking system using blockchain technology.'
    },
    {
      title: 'Multi-tenant SaaS Platform',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'AWS'],
      description: 'Scalable SaaS solution with tenant isolation and customizable features.'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions and technical excellence across various domains
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className={`overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} ${project.featured ? 'border-primary/50' : ''}`}>
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:grid-cols-2'}`}>
                <div className={`relative overflow-hidden group ${index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-primary/90 hover:bg-primary">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="bg-background/90 hover:bg-background">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-sm font-semibold text-primary">{metric}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Additional Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <Card key={project.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted text-xs rounded-full"
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
        
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
