
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations. Whether you have a project in mind or just want to chat 
                about technology, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">nicholas.oppong2326@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <Phone className="text-primary" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+233 (545) 294-916</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Available for Remote Work</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a 
                href="https://github.com"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Nicholas Oppong. Built with React, TypeScript, and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
