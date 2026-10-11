import { Section } from '@/components/ui/Section';
import { contactEmail, contactIntro } from '@/data/contact';
import { socialLinks } from '@/data/navigation';

const focusRing =
  'focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground';

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex max-w-3xl flex-col gap-8">
        <p className="text-lg">{contactIntro}</p>
        {/* `mailto:` opens the visitor's email app with the address filled in. */}
        <a
          href={`mailto:${contactEmail}`}
          className={`self-start text-2xl font-semibold underline underline-offset-8 md:text-3xl ${focusRing}`}
        >
          {contactEmail}
        </a>
        <ul className="flex gap-6 text-sm">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`underline-offset-4 hover:underline ${focusRing}`}
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
