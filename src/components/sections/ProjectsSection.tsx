import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

// Featured projects come first. `sort` mutates in place, so copy the array before sorting
// to leave the shared `projects` data untouched.
const orderedProjects = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

export function ProjectsSection() {
  return (
    // `aria-labelledby` gives the section an accessible name taken from its heading.
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 id="projects-heading" className="mb-12 text-4xl font-semibold tracking-tight">
        Projects
      </h2>

      {/* The section owns the grid; the card only styles its own contents, so it works anywhere. */}
      <div className="grid gap-8 md:grid-cols-2">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
