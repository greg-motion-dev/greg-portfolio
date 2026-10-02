import Link from 'next/link';
import { cvLink, sectionLinks, socialLinks } from '@/data/navigation';

// Shared focus ring for every link in the header, so keyboard users always see where they are.
const focusRing =
  'focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground';

// Temporary placeholder navigation: plain links, no animation and no mobile menu yet.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/15">
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
          <ul className="flex gap-6 text-sm">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`whitespace-nowrap underline-offset-4 hover:underline ${focusRing}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Profiles" className="ml-auto">
          <ul className="flex items-center gap-4 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`underline-offset-4 hover:underline ${focusRing}`}
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
      </div>
    </header>
  );
}
