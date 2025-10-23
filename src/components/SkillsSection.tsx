const SkillsSection = () => {
  const skillRows = [
    // Row 1 - Left to Right
    ["C++", "Python", "HTML", "CSS", "JavaScript", "React.js"],
    // Row 2 - Right to Left
    ["Node.js", "TypeScript", "Git", "GitHub", "Vercel", "Supabase"],
    // Row 3 - Left to Right
    ["Streamlit", "Gemini API", "OpenAI API", "Tailwind", "Vite", "MySQL"]
  ];

  return (
    <section id="skills" className="skills-bubbles-section">
      <div className="skills-header">
        <h2 className="skills-title">Technical Skills</h2>
        <p className="skills-subtitle">Technologies and tools I use to bring ideas to life</p>
      </div>
      
      <div className="skills-rows-container">
        {skillRows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className={`skill-row ${rowIndex % 2 === 0 ? 'row-ltr' : 'row-rtl'}`}
          >
            <div className="skill-track">
              {/* Double the content for seamless infinite scroll */}
              {[...row, ...row].map((skill, index) => (
                <div key={`${skill}-${index}`} className="skill-bubble-horizontal">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;