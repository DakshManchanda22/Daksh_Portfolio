import SectionWrapper from './SectionWrapper';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "VIT Vellore",
      degree: "B.Tech CSE",
      period: "2023–2027",
      color: "bg-soft-blue"
    },
    {
      institution: "Pace Junior Science College, Mumbai",
      degree: "Higher Secondary",
      period: "2023",
      color: "bg-soft-purple"
    },
    {
      institution: "Sri Sri Academy, Kolkata",
      degree: "ICSE",
      period: "2021",
      color: "bg-soft-pink"
    }
  ];

  return (
    <SectionWrapper>
      <section className="portfolio-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 gradient-text">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="portfolio-card group">
              <div className={`${edu.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <GraduationCap size={24} className="text-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">{edu.institution}</h3>
              <p className="text-muted-foreground mb-1">{edu.degree}</p>
              <p className="text-primary font-medium">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default EducationSection;