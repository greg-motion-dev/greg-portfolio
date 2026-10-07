// The home page is prerendered at build time, so `new Date()` here runs once during `npm run build`,
// not on every visit. On its own, the year would stay stuck until the next deploy.
const buildYear = new Date().getFullYear();

// This inline script runs in the visitor's browser as soon as the footer HTML is parsed (before it's
// painted) and swaps in the current year, so the footer stays right even if the site isn't rebuilt
// after New Year's.
const yearScript = `document.getElementById("copyright-year").textContent=new Date().getFullYear()`;

// Temporary placeholder footer: just the copyright line for now.
export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        <p>
          {/* suppressHydrationWarning: the script may change this text before React loads, which is expected. */}
          © <span id="copyright-year" suppressHydrationWarning>{buildYear}</span> Greg Telakis. All rights
          reserved.
        </p>
        <script dangerouslySetInnerHTML={{ __html: yearScript }} />
      </div>
    </footer>
  );
}
