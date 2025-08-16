import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold hero-gradient mb-4">Alex Chen</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer passionate about creating exceptional digital experiences 
              through clean code and thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Let's Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card/50 border border-border hover:bg-card transition-smooth hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card/50 border border-border hover:bg-card transition-smooth hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@alexchen.dev"
                className="p-2 rounded-full bg-card/50 border border-border hover:bg-card transition-smooth hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Alex Chen. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;