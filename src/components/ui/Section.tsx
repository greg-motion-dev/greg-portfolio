import type { ReactNode } from 'react';

type SectionProps = {
  // Must match the nav link's hash, e.g. id "about" for "/#about" in src/data/navigation.ts.
  id: string;
  title: string;
  children: ReactNode;
};

// Shared wrapper for the home page sections, so every section has the same width, spacing and
// heading style, and the nav can jump to it by id.
export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    // `aria-labelledby` gives the section an accessible name taken from its heading.
    <section id={id} aria-labelledby={headingId} className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 id={headingId} className="mb-12 text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
