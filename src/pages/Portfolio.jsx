import NavBar from '../components/portfolio/NavBar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import WorkSection from '../components/portfolio/WorkSection';
import ServicesSection from '../components/portfolio/ServicesSection';
import ContactSection from '../components/portfolio/ContactSection';
import FooterSection from '../components/portfolio/FooterSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}