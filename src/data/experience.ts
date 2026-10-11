export type ExperienceItem = {
  role: string;
  company: string;
  // Free text so it can read "2022 – Present" or "Spring 2021".
  period: string;
  description: string;
};

// TODO: placeholder entries; replace with your real roles, newest first.
export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Placeholder Agency',
    period: '2023 – Present',
    description: 'Building interactive marketing sites and custom WordPress themes for clients.',
  },
  {
    role: 'Web Developer',
    company: 'Placeholder Studio',
    period: '2021 – 2023',
    description: 'Turned designs into responsive, accessible pages and maintained client sites.',
  },
];
