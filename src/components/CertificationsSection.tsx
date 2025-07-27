import SectionWrapper from './SectionWrapper';
import { Award, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      year: "2025",
      color: "bg-soft-purple"
    },
    {
      title: "Gen AI Using IBM Watsonx",
      issuer: "IBM",
      year: "2025",
      color: "bg-soft-blue"
    }
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Hindi", level: "Native" }
  ];

  return (
    <SectionWrapper>
      <section className="portfolio-section">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-light mb-4 gradient-text">Certifications</h2>
              <p className="text-muted-foreground">
                Continuous learning and skill development
              </p>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="portfolio-card">
                  <div className="flex items-start gap-4">
                    <div className={`${cert.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium mb-1">{cert.title}</h3>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        {cert.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Languages */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-light mb-4 gradient-text">Languages</h2>
              <p className="text-muted-foreground">
                Communication across cultures
              </p>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="portfolio-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium mb-1">{lang.name}</h3>
                      <p className="text-muted-foreground">{lang.level}</p>
                    </div>
                    <div className="w-3 h-3 bg-soft-green rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default CertificationsSection;