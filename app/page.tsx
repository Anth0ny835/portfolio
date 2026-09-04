import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return <main>
    <HomeSection/>
    <ProjectsSection/>
    <ExperienceSection/>
    <AboutSection/>
    <ResumeSection/>
    <ContactSection/>
  </main>;
}
