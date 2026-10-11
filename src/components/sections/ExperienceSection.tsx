import { Section } from '@/components/ui/Section';
import { experience } from '@/data/experience';

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      {/* An ordered list, since the roles run in time order (newest first). */}
      <ol className="flex max-w-3xl flex-col">
        {experience.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="flex flex-col gap-2 border-t border-border py-6 md:flex-row md:gap-8"
          >
            <p className="shrink-0 text-sm text-muted-foreground md:w-40 md:pt-1">{item.period}</p>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">
                {item.role} <span className="font-normal text-muted-foreground">· {item.company}</span>
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
