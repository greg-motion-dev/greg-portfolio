// `motion/react-client` exposes `motion.*` elements that are already marked as client
// components, so this file can stay a server component without a "use client" directive.
import * as motion from 'motion/react-client';
import Image from 'next/image';
import type { Project, ProjectCategory } from '@/data/projects';

// `Record<ProjectCategory, string>` requires a label for every category in the union.
// Adding a new category to `ProjectCategory` makes TypeScript flag this object until it has a label.
const categoryLabels: Record<ProjectCategory, string> = {
  wordpress: 'WordPress',
  react: 'React',
  ux: 'UX',
  creative: 'Creative',
};

// Variants are named animation states. When the parent <motion.article> switches to "hover",
// every child with the same variant names animates too, so one `whileHover` drives them all.
const cardVariants = {
  rest: { y: 0 },
  hover: { y: -4 },
};

const mediaVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  // The title links to the live site first, then the repo. A project with neither gets a plain title.
  const primaryUrl = project.liveUrl ?? project.githubUrl;

  return (
    <motion.article
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-background dark:border-white/15"
    >
      <div className="relative grid aspect-video place-items-center overflow-hidden bg-black/5 dark:bg-white/5">
        <motion.div variants={mediaVariants} className="absolute inset-0 grid place-items-center">
          {project.imageUrl ? (
            // Empty alt: the title below already names the project, so screen readers skip the image.
            <Image
              src={project.imageUrl}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <span className={project.featured ? 'text-8xl' : 'text-6xl'} aria-hidden>
              {project.emoji}
            </span>
          )}
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide">
          <span className="rounded-full bg-black/5 px-3 py-1 dark:bg-white/10">
            {categoryLabels[project.category]}
          </span>
          {project.featured && <span className="text-black/50 dark:text-white/50">Featured</span>}
        </div>

        <h3 className="text-xl font-semibold tracking-tight">
          {primaryUrl ? (
            // "Stretched link": the ::after pseudo-element covers the whole card, so clicking anywhere
            // opens the project without wrapping the card (and its other links) in a single <a>.
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-foreground"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-black/70 dark:text-white/70">{project.description}</p>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-black/10 px-2 py-0.5 text-sm dark:border-white/15"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          // `relative z-10` lifts these links above the stretched title link so they stay clickable.
          <div className="relative z-10 mt-auto flex gap-4 pt-2 text-sm font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                Live site ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
