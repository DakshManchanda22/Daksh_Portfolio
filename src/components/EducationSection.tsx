const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "VIT Vellore",
      period: "2023 — 2027",
      description: "Pursuing comprehensive education in computer science fundamentals, algorithms, and software development."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Pace Junior Science College, Mumbai",
      period: "2021 — 2023",
      description: "Focused on science stream with emphasis on mathematics and computer applications."
    },
    {
      degree: "Secondary Education (ICSE)",
      institution: "Sri Sri Academy, Kolkata",
      period: "2019 — 2021",
      description: "Completed ICSE board examinations with strong foundation in core subjects and extracurricular activities."
    }
  ];

  return (
    <section id="education" className="education-grid-section">
      <div className="education-grid-container">
        <h2 className="education-grid-title">EDUCATION</h2>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-grid-item">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-period">{edu.period}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;