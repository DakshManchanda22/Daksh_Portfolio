import SectionWrapper from './SectionWrapper';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Core",
      company: "Entrepreneurship Cell, VIT",
      period: "2025 – Now",
      description: "Leading entrepreneurial initiatives and fostering startup culture at university level."
    },
    {
      title: "Content Creator",
      company: "YouTube",
      period: "2020 – Now",
      description: "Creating educational and tech-related content, building community engagement."
    },
    {
      title: "Social Media Intern",
      company: "MyPerro",
      period: "2024 – 2025",
      description: "Managed social media strategy and content creation for pet care startup."
    },
    {
      title: "Student Volunteer",
      company: "Riviera, VIT",
      period: "Feb 2025",
      description: "Contributed to organizing VIT's annual cultural festival."
    }
  ];

  return (
    <SectionWrapper>
      <section className="portfolio-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 gradient-text">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key roles that shaped my skills
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="portfolio-card">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 lg:mt-0 px-3 py-1 bg-soft-blue rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default ExperienceSection;