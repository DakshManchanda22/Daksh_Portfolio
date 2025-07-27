import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import dakshPhoto from '@/assets/dakshphoto.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-container overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="portfolio-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className={`stagger-children ${isVisible ? 'visible' : ''} space-y-8`}>
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight">
                <span className="gradient-text">Daksh Manchanda</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mb-6"></div>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              CS student at <span className="text-primary font-medium">VIT Vellore</span> blending technology and creativity. 
              I build tools, tell visual stories, and explore everything in between.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="mailto:daksh.manchanda22@gmail.com" 
                className="p-4 rounded-xl bg-soft-blue hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dakshmanchanda" 
                className="p-4 rounded-xl bg-soft-purple hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/DakshManchanda22" 
                className="p-4 rounded-xl bg-soft-pink hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
                target="_blank" rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className={`fade-in ${isVisible ? 'visible' : ''} flex justify-center lg:justify-end`}>
            <div className="profile-placeholder group hover:scale-105 transition-transform duration-500 overflow-hidden rounded-xl w-48 h-65 bg-muted">
              <img
                src={dakshPhoto}
                alt="Daksh Manchanda"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
