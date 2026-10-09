import Link from 'next/link';

// The home page is prerendered at build time, so `new Date()` here runs once during `npm run build`,
// not on every visit. On its own, the year would stay stuck until the next deploy.
const buildYear = new Date().getFullYear();

// This inline script runs in the visitor's browser as soon as the footer HTML is parsed (before it's
// painted) and swaps in the current year, so the footer stays right even if the site isn't rebuilt
// after New Year's.
const yearScript = `document.getElementById("copyright-year").textContent=new Date().getFullYear()`;

// Temporary placeholder footer: the copyright line and the Impressum link.
export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <p>
          {/* suppressHydrationWarning: the script may change this text before React loads, which is expected. */}
          © <span id="copyright-year" suppressHydrationWarning>{buildYear}</span> Greg Telakis. All rights
          reserved.
        </p>
        <script dangerouslySetInnerHTML={{ __html: yearScript }} />
        {/* The Impressum must be reachable from every page, which the layout-wide footer guarantees. */}
        <Link
          href="/impressum"
          className="underline-offset-4 hover:text-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Impressum &amp; Disclaimer
        </Link>
      </div>
    </footer>
  );
}
