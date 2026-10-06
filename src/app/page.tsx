import { ColorTestSection } from "@/components/sections/ColorTestSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

// Next.js requires the page file to use a default export; components elsewhere use named exports.
export default function Home() {
  // `id="main"` is the target of the header's "Skip to content" link.
  return (
    <main id="main" className="flex flex-1 flex-col">
      <ColorTestSection />
      <ProjectsSection />
    </main>
  );
}
