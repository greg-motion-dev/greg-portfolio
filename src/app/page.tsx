import { ProjectsSection } from "@/components/sections/ProjectsSection";

// Next.js requires the page file to use a default export; components elsewhere use named exports.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <ProjectsSection />
    </main>
  );
}
