import { Section } from '@/components/ui/Section';
import { aboutParagraphs } from '@/data/about';

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="flex max-w-3xl flex-col gap-6 text-lg">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
