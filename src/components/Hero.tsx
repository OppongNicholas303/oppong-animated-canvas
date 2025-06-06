
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
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
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-8 relative">
      <div className="animate-fade-in space-y-12 max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-base text-muted-foreground font-medium tracking-wide uppercase">
              Software Engineer
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight tracking-tight">
              Nicholas Oppong
            </h1>
          </div>
          
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              <span className="border-r-2 border-primary/60 pr-3 mr-3">
                {displayText}
              </span>
              <span className="animate-pulse text-primary">|</span>
            </h2>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Specializing in enterprise-grade applications with 
            <span className="text-foreground font-medium"> Java Spring Boot</span>, 
            <span className="text-foreground font-medium"> React.js</span>, and 
            <span className="text-foreground font-medium"> AWS cloud infrastructure</span>. 
            Building scalable solutions that drive business growth.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="text-base px-8 py-3 font-medium"
          >
            <Mail className="mr-2" size={18} />
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="text-base px-8 py-3 font-medium"
          >
            <Download className="mr-2" size={18} />
            Download Resume
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 animate-bounce hover:scale-110 transition-transform"
      >
        <ChevronDown size={32} className="text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
