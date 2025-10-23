import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky when user scrolls past the hero section
      if (window.scrollY > window.innerHeight - 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar-horizontal ${isSticky ? 'sticky' : ''}`}>
      {/* Left - Signature */}
      <div className="navbar-signature" onClick={scrollToTop}>
        DM
      </div>

      {/* Center - Navigation Links */}
      <div className="navbar-links">
        <button onClick={() => scrollToSection('education')} className="navbar-link">
          EDUCATION
        </button>
        <button onClick={() => scrollToSection('projects')} className="navbar-link">
          PROJECTS
        </button>
        <button onClick={() => scrollToSection('experience')} className="navbar-link">
          EXPERIENCE
        </button>
        <button onClick={() => scrollToSection('certifications')} className="navbar-link">
          CERTIFICATIONS
        </button>
      </div>

      {/* Right - Contact Button */}
      <div className="navbar-right">
        <button
          onClick={() => scrollToSection('contact')}
          className="navbar-contact-btn"
        >
          CONTACT
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

