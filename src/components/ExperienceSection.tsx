import { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Core",
      company: "Entrepreneurship Cell, VIT",
      period: "2025 – Now",
      description: "Leading entrepreneurial initiatives and fostering startup culture at university level. Organizing events, mentoring startups, and building a thriving entrepreneurial ecosystem."
    },
    {
      title: "Content Creator",
      company: "YouTube",
      period: "2020 – Now",
      description: "Creating educational and tech-related content, building community engagement. Producing tutorials, reviews, and insights that help viewers learn and grow."
    },
    {
      title: "Social Media Intern",
      company: "MyPerro",
      period: "2024 – 2025",
      description: "Managed social media strategy and content creation for pet care startup. Developed campaigns that increased engagement and brand awareness significantly."
    },
    {
      title: "Student Volunteer",
      company: "Riviera, VIT",
      period: "Feb 2025",
      description: "Contributed to organizing VIT's annual cultural festival. Coordinated events, managed logistics, and ensured smooth execution of multiple activities."
    }
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1 for each card)
      const progress = Math.max(0, (windowHeight - sectionTop - 200) / 300);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="experience-ladder-section" ref={sectionRef}>
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

      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          Professional journey and key roles that shaped my skills
        </p>
      </div>

      <div className="experience-container">
        {experiences.map((exp, index) => {
          // Calculate when this card should start moving (each card waits for previous)
          const cardStartProgress = index;
          const cardProgress = Math.max(0, Math.min(1, scrollProgress - cardStartProgress));
          
          // Determine if card is settled
          const isSettled = cardProgress >= 1;
          const isActive = cardProgress > 0 && cardProgress < 1;
          
          return (
            <div
              key={index}
              className={`experience-ladder-item ${isSettled ? 'settled' : ''} ${isActive ? 'active' : ''}`}
              style={{
                '--card-index': index,
                '--card-progress': cardProgress
              } as React.CSSProperties}
            >
              {/* Left Card */}
              <div className="experience-card-left">
                <h3 className="experience-card-title">{exp.title}</h3>
                <p className="experience-card-company">{exp.company}</p>
              </div>

              {/* Right Details */}
              <div className="experience-details-right">
                <span className="experience-period">{exp.period}</span>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;