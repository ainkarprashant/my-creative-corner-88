import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {/* Greeting */}
          <p className="text-primary text-lg font-medium tracking-wide animate-fade-in">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold hero-gradient leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Alex Chen
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Full-Stack Developer & UI/UX Designer
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I craft exceptional digital experiences with modern technologies, 
            focusing on performance, accessibility, and beautiful design.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="min-w-[180px]"
            >
              View My Work
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="min-w-[180px]"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border hover:bg-card/30 transition-smooth glow-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border hover:bg-card/30 transition-smooth glow-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:hello@alexchen.dev" 
              className="p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border hover:bg-card/30 transition-smooth glow-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-card/20 backdrop-blur-sm border border-border hover:bg-card/30 transition-smooth"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;