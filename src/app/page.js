import AboutSection from "../components/homepage/about";
import ContactSection from "../components/homepage/contact";
import Education from "../components/homepage/education";
import Experience from "../components/homepage/experience";
import HeroSection from "../components/homepage/hero-section";
import ProjectsSection from "../components/homepage/projects/ProjectsSection";
import Skills from "../components/homepage/skills";


export default async function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <ProjectsSection />
      <Education />
      {/* <ContactBG /> */}
      <ContactSection />
    </>
  )
};