// A union type: `category` can only be one of these exact strings.
// TypeScript will flag typos like 'wordpres' at compile time.
export type ProjectCategory = 'wordpress' | 'react' | 'ux' | 'creative';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  // Shown in place of a screenshot until real images exist.
  emoji: string;
  // `?` marks a field as optional — not every project has an image, live site or public repo yet.
  // Once `imageUrl` is set, components should render the image instead of the emoji.
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

// Annotating as `Project[]` makes TypeScript check every entry against the type above.
export const projects: Project[] = [
  {
    id: 'placeholder-wordpress-site',
    title: 'Placeholder WordPress Site',
    category: 'wordpress',
    description: 'A custom WordPress theme built for a small business client.',
    tags: ['WordPress', 'PHP', 'SCSS'],
    emoji: '🧱',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'placeholder-react-app',
    title: 'Placeholder React App',
    category: 'react',
    description: 'An interactive dashboard built with React and TypeScript.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    emoji: '⚛️',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/placeholder-react-app',
    featured: true,
  },
  {
    id: 'placeholder-creative-experiment',
    title: 'Placeholder Creative Experiment',
    category: 'creative',
    description: 'A 3D scroll-driven experiment using React Three Fiber and GSAP.',
    tags: ['React Three Fiber', 'GSAP', 'WebGL'],
    emoji: '🌀',
    githubUrl: 'https://github.com/example/placeholder-creative-experiment',
    featured: false,
  },
];
