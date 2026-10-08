import Link from 'next/link';
import { cvLink, sectionLinks, socialLinks } from '@/data/navigation';
import { ThemeToggle } from './ThemeToggle';

// Shared focus ring for every link in the header, so keyboard users always see where they are.
const focusRing =
  'focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground';

// TEMPORARY colour test: links take turns highlighting in yellow, cyan and magenta on hover.
// Tailwind only generates classes it can find written out in full, so the complete class names
// live in this array instead of being built like `hover:bg-brand-${colour}`.
const hoverColors = ['hover:bg-brand-yellow', 'hover:bg-brand-cyan', 'hover:bg-brand-magenta'];

// The brand colours are all bright, so the hovered text is always near-black, in both themes.
const navLink = 'rounded-full px-2.5 py-1 hover:text-neutral-950';

// Temporary placeholder navigation: plain links, no animation and no mobile menu yet.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      {/* Skip link: hidden until focused, so keyboard users can jump past the nav with one Tab. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4">
        <Link href="/" className={`font-semibold tracking-tight ${focusRing}`}>
          Greg Telakis
        </Link>

        {/* `aria-label` tells screen readers which navigation this is, since there are two. */}
        <nav aria-label="Sections" className="order-last w-full overflow-x-auto md:order-none md:w-auto">
          <ul className="flex gap-2 text-sm">
            {sectionLinks.map((link, index) => (
              <li key={link.href}>
                {/* `index % 3` cycles 0, 1, 2, 0, 1… so the colours repeat in order along the nav. */}
                <Link
                  href={link.href}
                  className={`whitespace-nowrap ${navLink} ${hoverColors[index % hoverColors.length]} ${focusRing}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Profiles" className="ml-auto">
          <ul className="flex items-center gap-2 text-sm">
            {socialLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`${navLink} ${hoverColors[index % hoverColors.length]} ${focusRing}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={cvLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full bg-foreground px-4 py-1.5 font-medium text-background ${focusRing}`}
              >
                {cvLink.label}
              </a>
            </li>
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
