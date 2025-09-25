import Header from "@/components/header";
import HomeSection from "@/app/sections/home-section";
import AboutSection from "@/app/sections/about-section";
import CertificationsSection from "@/app/sections/certifications-section";
import ExperienceSection from "@/app/sections/experience-section";
import SkillsSection from "@/app/sections/skills-section";
import ProjectsSection from "@/app/sections/projects-section";
import ContactSection from "@/app/sections/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <CertificationsSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
