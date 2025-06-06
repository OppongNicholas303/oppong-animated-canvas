
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nicholas.oppong@email.com',
      action: 'mailto:nicholas.oppong@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available for Remote Work',
      action: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com', username: '@nicholasoppong' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', username: 'nicholas-oppong' }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and potential collaborations. Whether you're a startup or an established company, 
                  let's explore how we can work together.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <info.icon className="text-primary w-5 h-5" />
                      <div className="flex-1">
                        <p className="font-medium">{info.label}</p>
                        {info.action ? (
                          <a href={info.action} className="text-muted-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell me about your project, timeline, and requirements..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
              <p className="text-muted-foreground mb-4">
                Prefer to talk directly? Schedule a 30-minute consultation call.
              </p>
              <Button variant="outline" size="lg">
                Book a Meeting
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-muted-foreground mb-4">
                Need a fast answer? I typically respond to emails within 4 hours.
              </p>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-lg">
            © 2024 Nicholas Oppong - Crafting Digital Excellence with React, Java & AWS ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
