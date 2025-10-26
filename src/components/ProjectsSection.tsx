import { ExternalLink, Github } from 'lucide-react';
import titleGeneratorImg from '@/assets/titlegenerator.png';
import constructionImg from '@/assets/brique.png';
import hostelManagerImg from '@/assets/hostelmanager.png';
import medicalBuddyImg from '@/assets/Medicalbuddy.png';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Youtube Title Generator",
      category: "AI Implementation",
      image: titleGeneratorImg,
      links: {
        demo: "https://yourfriendlytitlegenerator.streamlit.app/",
        github: "https://github.com/DakshManchanda22/yourfriendlytitlegenerator"
      }
    },
    {
      title: "Brique Bois",
      category: "Brand Website",
      image: constructionImg,
      links: {
        demo: "https://dakshmanchanda22.github.io/Brique-Bois/",
        github: "https://github.com/DakshManchanda22/Brique-Bois"
      }
    },
        {
          title: "HostelGrid",
          category: "Database Management System",
          image: hostelManagerImg,
          links: {
            demo: "https://hostelgrid.onrender.com",
            github: "https://github.com/divyamagg2005/Hostelocity/tree/divyam"
          }
        },
    {
      title: "Your Medical Buddy",
      category: "AI Prediction model",
      image: medicalBuddyImg,
      links: {
        demo: "https://dakshmanchanda22.github.io/Brique-Bois/",
        github: "https://github.com/DakshManchanda22/Brique-Bois"
      }
    }
  ];

  return (
    <section id="projects" className="projects-grid-section">
      <div className="projects-grid-container">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card-modern"
          >
            <div className="project-card-image">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-img"
              />
              <div className="project-overlay"></div>
            </div>
            
            {/* Inner Box with Title */}
            <div className="project-inner-box">
              <div className="project-inner-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                
                {/* Buttons - Show on Hover */}
                <div className="project-buttons">
                  <a 
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;