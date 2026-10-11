import { ProjectCard } from '@/components/ui/ProjectCard';
import { Section } from '@/components/ui/Section';
import { projects } from '@/data/projects';

// Featured projects come first. `sort` mutates in place, so copy the array before sorting
// to leave the shared `projects` data untouched.
const orderedProjects = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      {/* The section owns the grid; the card only styles its own contents, so it works anywhere. */}
      <div className="grid gap-8 md:grid-cols-2">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
