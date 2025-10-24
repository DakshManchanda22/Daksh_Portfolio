import { useEffect, useState } from 'react';
import { Linkedin, Github } from 'lucide-react';
import dakshPhoto from '@/assets/dakshphoto.png';

const words = ['Creator', 'Coder', 'Student', 'Designer'];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (typewriterText.length < currentWord.length) {
          setTypewriterText(currentWord.slice(0, typewriterText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.slice(0, -1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, wordIndex]);

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="hero-grainy">
      {/* SVG Filter for Grainy Texture */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="1 1" />
            </feComponentTransfer>
            <feBlend mode="multiply" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* Top Left Link */}
      <a 
        href="https://dakshmanchanda22.myportfolio.com/" 
        target="_blank"
        rel="noopener noreferrer"
        className="hero-top-left-text"
      >
        More of Me
      </a>

      {/* Top Right Buttons Group */}
      <div className="hero-top-right-group">
        <a 
          href="https://www.linkedin.com/in/dakshmanchanda/" 
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-btn"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a 
          href="https://github.com/DakshManchanda22" 
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-btn"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href="/Daksh_Resume.pdf" 
          download="Daksh_Resume.pdf"
          className="hero-top-right-btn"
        >
          Download CV
        </a>
      </div>

      {/* Main Content */}
      <div className={`hero-grainy-content ${isVisible ? 'visible' : ''}`}>
        {/* Typewriter Text Above Name */}
        <div className="typewriter-container">
          <span className="typewriter-text">
            I am a <span className="typewriter-word">{typewriterText}</span>
            <span className={`typewriter-cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </span>
        </div>

            {/* Large Background Text - Repeated with mask gradient fade */}
            <div className="hero-name-bg">
              <div className="hero-name-line">DAKSH MANCHANDA</div>
              <div className="hero-name-line">DAKSH MANCHANDA</div>
              <div className="hero-name-line">DAKSH MANCHANDA</div>
              <div className="hero-name-line">DAKSH MANCHANDA</div>
              <div className="hero-name-line">DAKSH MANCHANDA</div>
              <div className="hero-name-line">DAKSH MANCHANDA</div>
              <div className="hero-name-line">DAKSH MANCHANDA</div>
              <div className="hero-name-line">DAKSH MANCHANDA</div>
            </div>

        {/* Centered Photo */}
        <div className="hero-photo-center">
          <img
            src={dakshPhoto}
            alt="Daksh Manchanda"
            className="hero-photo-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;