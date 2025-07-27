import SectionWrapper from './SectionWrapper';
import { ExternalLink, Github } from 'lucide-react';
import titleGeneratorImg from '@/assets/titlegenerator.png';
import constructionImg from '@/assets/brique.png';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Your Friendly Title Generator",
      description: "A Streamlit + Gemini API-based creative title generator that helps users create engaging and unique titles for their content.",
      image: titleGeneratorImg,
      tech: ["Python", "Streamlit", "Gemini API"],
      links: {
        demo: "https://yourfriendlytitlegenerator.streamlit.app/",
        github: "https://github.com/DakshManchanda22/yourfriendlytitlegenerator"
      }
    },
    {
      title: "Brique & Bois Website",
      description: "Landing site for a construction startup featuring modern design, responsive layout, and comprehensive company information.",
      image: constructionImg,
      tech: ["HTML", "CSS", "JavaScript"],
      links: {
        demo: "https://dakshmanchanda22.github.io/Brique-Bois/",
        github: "https://github.com/DakshManchanda22/Brique-Bois"
      }
    }
  ];

  return (
    <SectionWrapper>
      <section className="portfolio-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 gradient-text">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and creativity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-medium mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-soft-blue text-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.links.demo}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a 
                  href={project.links.github}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default ProjectsSection;