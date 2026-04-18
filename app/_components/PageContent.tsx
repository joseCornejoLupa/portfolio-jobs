"use client";

import { useRole } from "./RoleContext";
import { sectionsByRole, SectionId } from "../_lib/data";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Research from "./Research";
import MoodlePlugins from "./MoodlePlugins";
import Patents from "./Patents";
import Articles from "./Articles";
import Contact from "./Contact";
import ScrollIndicator from "./ScrollIndicator";
import ScrollToTopFAB from "./ScrollToTopFAB";

const sectionComponents: Record<SectionId, React.ReactNode> = {
  hero:       <Hero key="hero" />,
  about:      <About key="about" />,
  experience: <Experience key="experience" />,
  research:   <Research key="research" />,
  moodle:     <MoodlePlugins key="moodle" />,
  patents:    <Patents key="patents" />,
  articles:   <Articles key="articles" />,
  contact:    <Contact key="contact" />,
};

export default function PageContent() {
  const { activeRole } = useRole();
  const sections = sectionsByRole[activeRole];

  return (
    <>
      <Header />
      <ScrollIndicator sections={sections} />
      <main>
        {sections.map((id) => sectionComponents[id])}
      </main>
      <ScrollToTopFAB />
    </>
  );
}
