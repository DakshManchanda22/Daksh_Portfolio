import { useState, useEffect, useRef } from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      year: "2025",
      description: "Advanced training in generative AI models and applications",
      link: "https://www.linkedin.com/in/dakshmanchanda/details/certifications/1752352355767/single-media-viewer/?profileId=ACoAAEZZ7AsBgPbLl675NI5USNiB65zM4-mAkq4"
    },
    {
      title: "Gen AI Using IBM Watsonx",
      issuer: "IBM",
      year: "2025",
      description: "Specialized certification in IBM Watsonx AI platform",
      link: "https://courses.adroitprolearn.skillsnetwork.site/certificates/411fbfc6573b4d8aaa5a821d4a645438"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // Extended array with first item duplicated at the end for seamless loop
  const extendedCertifications = [...certifications, certifications[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When we reach the duplicated first item (index = certifications.length)
    if (currentIndex === certifications.length) {
      // Wait for the transition to complete
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Jump to real first item without animation
      }, 600); // Match the CSS transition duration
    }
  }, [currentIndex, certifications.length]);

  const handleIndicatorClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <section id="certifications" className="certifications-carousel-section">
      <div className="certifications-carousel-container">
        <h2 className="certifications-carousel-title">CERTIFICATIONS</h2>
        
        <div className="certifications-carousel">
          <div 
            ref={trackRef}
            className="certifications-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
            }}
          >
            {extendedCertifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-year">{cert.year}</p>
                <p className="certification-description">{cert.description}</p>
                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-view-btn"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {certifications.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                (currentIndex % certifications.length) === index ? 'active' : ''
              }`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;