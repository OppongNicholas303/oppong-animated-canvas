
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application built with React, Spring Boot, and AWS. Features include user authentication, payment processing, and inventory management.',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'AWS S3', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with real-time messaging, file sharing, and user presence indicators. Built with Node.js and React.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with Kanban boards, team collaboration features, and real-time updates. Deployed on AWS.',
      technologies: ['React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Docker'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard that aggregates weather data from multiple APIs and presents insights through interactive charts and maps.',
      technologies: ['React', 'Node.js', 'Chart.js', 'Weather APIs', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Microservices Architecture',
      description: 'Scalable microservices system with API Gateway, service discovery, and distributed logging. Demonstrates enterprise-level architecture patterns.',
      technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'AWS', 'Eureka'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'AI-Powered Code Review Tool',
      description: 'Machine learning application that analyzes code quality, suggests improvements, and identifies potential bugs using natural language processing.',
      technologies: ['Python', 'React', 'TensorFlow', 'Node.js', 'AWS Lambda'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={project.live}
                    className="p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Github size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
