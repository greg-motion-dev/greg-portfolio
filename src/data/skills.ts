export type SkillGroup = {
  title: string;
  skills: string[];
};

// TODO: placeholder groups; adjust to match your CV.
export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML & CSS'] },
  { title: 'Motion & 3D', skills: ['GSAP', 'Motion', 'React Three Fiber', 'Three.js'] },
  { title: 'CMS & Design', skills: ['WordPress', 'PHP', 'Figma', 'UX'] },
];
