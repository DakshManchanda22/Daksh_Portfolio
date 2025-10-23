import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import LanguagesSection from '@/components/LanguagesSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <HeroSection />
        <Navbar />
      </div>
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <LanguagesSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
