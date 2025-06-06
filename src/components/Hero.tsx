
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full-Stack Software Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="animate-fade-in space-y-8 max-w-4xl">
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground font-medium tracking-wide">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Nicholas Oppong
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light h-16 flex items-center justify-center">
            <span className="border-r-2 border-primary pr-2 mr-2">
              {displayText}
            </span>
            <span className="animate-pulse text-primary">|</span>
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          Crafting scalable, high-performance applications with modern technologies. 
          Specialized in <span className="text-primary font-semibold">Java Spring Boot</span>, 
          <span className="text-primary font-semibold"> React.js</span>, and 
          <span className="text-primary font-semibold"> AWS cloud solutions</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button 
            onClick={scrollToAbout}
            size="lg"
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Explore My Work
            <ExternalLink className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300 border-2"
          >
            Download Resume
            <Download className="ml-2" size={20} />
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 animate-bounce hover:scale-110 transition-transform"
      >
        <ChevronDown size={40} className="text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
