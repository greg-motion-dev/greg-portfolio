import { Section } from '@/components/ui/Section';
import { skillGroups } from '@/data/skills';

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-4 rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-md bg-muted px-2 py-0.5 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
