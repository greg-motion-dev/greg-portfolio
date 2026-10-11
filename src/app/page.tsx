import { AboutSection } from "@/components/sections/AboutSection";
import { ColorTestSection } from "@/components/sections/ColorTestSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

// Next.js requires the page file to use a default export; components elsewhere use named exports.
export default function Home() {
  // `id="main"` is the target of the header's "Skip to content" link.
  return (
    <main id="main" className="flex flex-1 flex-col">
      <ColorTestSection />
      {/* Same order as the nav links in src/data/navigation.ts. */}
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
