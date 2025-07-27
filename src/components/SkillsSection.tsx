import SectionWrapper from './SectionWrapper';
import { Code, Wrench, Globe } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["C++", "Python", "HTML", "CSS", "JavaScript"],
      color: "bg-soft-blue"
    },
    {
      title: "Frameworks",
      icon: <Globe size={24} />,
      skills: ["React.js"],
      color: "bg-soft-purple"
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "Streamlit", "Gemini/OpenAI API"],
      color: "bg-soft-green"
    }
  ];

  return (
    <SectionWrapper>
      <section className="portfolio-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 gradient-text">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card">
              <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-medium mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default SkillsSection;