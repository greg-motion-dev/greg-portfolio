// TEMPORARY: a swatch area for checking the light and dark theme colours. Delete this file and its
// line in page.tsx once the palette is settled.
export function ColorTestSection() {
  return (
    <section aria-labelledby="color-test-heading" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 rounded-2xl border border-border p-8 md:grid-cols-2">
        {/* Text block: every text colour token on the page background. */}
        <div className="flex flex-col gap-4">
          <h2 id="color-test-heading" className="text-3xl font-semibold tracking-tight">
            Colour test
          </h2>
          <p>
            This paragraph uses the foreground colour on the background. It should be easy to read in
            both themes. Switch the toggle in the header and check that nothing disappears or glares.
          </p>
          <p className="text-muted-foreground">
            This one is muted foreground, for descriptions and secondary labels. It should be quieter
            than the paragraph above but still comfortable to read.
          </p>
          <p className="font-medium">
            <span className="text-brand-yellow">Brand yellow</span>,{' '}
            <span className="text-brand-cyan">brand cyan</span> and{' '}
            <span className="text-brand-magenta">brand magenta</span> as text.
          </p>
          <p className="rounded-lg bg-muted p-4 text-sm">
            A muted surface, like the project card chips and image placeholders.
          </p>
        </div>

        {/* Shapes: each brand colour as a fill. */}
        <div className="flex flex-wrap items-center justify-center gap-10">
          {/* A triangle isn't a box, so it's an SVG; `fill-*` takes any Tailwind colour. */}
          <svg viewBox="0 0 100 100" className="size-24 fill-brand-yellow" role="img" aria-label="Yellow triangle">
            <polygon points="50,6 96,94 4,94" />
          </svg>
          <div role="img" aria-label="Cyan circle" className="size-24 rounded-full bg-brand-cyan" />
          <div role="img" aria-label="Magenta square" className="size-24 bg-brand-magenta" />
        </div>
      </div>
    </section>
  );
}
