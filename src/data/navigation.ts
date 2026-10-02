// Section links point at element ids on the home page. The leading "/" makes them work
// from any future route too: "/#projects" goes back to the home page, then jumps to #projects.
export type NavLink = {
  label: string;
  href: string;
};

// `external: true` opens the link in a new tab; it's optional because most links stay on the site.
export type SocialLink = NavLink & {
  external?: boolean;
};

// Only #projects exists so far. The other ids belong to sections that haven't been built yet,
// so those links won't scroll anywhere until the matching section is added.
export const sectionLinks: NavLink[] = [
  { label: 'Work', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

// TODO: replace the LinkedIn placeholder and add the CV file at public/cv.pdf.
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/greg-motion-dev', external: true },
  { label: 'LinkedIn', href: '#', external: true },
];

export const cvLink: SocialLink = { label: 'CV', href: '/cv.pdf', external: true };
