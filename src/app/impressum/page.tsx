import type { Metadata } from 'next';
import { disclaimerSections, impressumContact } from '@/data/legal';

// A folder inside src/app becomes a route: this file is served at /impressum.
// Page-level metadata overrides the root layout's title for this page only.
export const metadata: Metadata = {
  title: 'Impressum & Disclaimer',
};

// Next.js requires the page file to use a default export; components elsewhere use named exports.
export default function ImpressumPage() {
  const contact = impressumContact;

  return (
    <main id="main" className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Impressum &amp; Disclaimer</h1>

      <section aria-labelledby="impressum-heading" className="flex flex-col gap-4">
        <h2 id="impressum-heading" className="text-2xl font-semibold tracking-tight">
          Impressum
        </h2>
        {/* <address> marks this up as contact information for the page's owner. */}
        <address className="not-italic">
          {contact.name}
          <br />
          {contact.street}
          <br />
          {contact.postcodeCity}
          <br />
          {contact.country}
        </address>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
          <dt className="text-muted-foreground">Email</dt>
          <dd>{contact.email}</dd>
          {contact.phone && (
            <>
              <dt className="text-muted-foreground">Phone</dt>
              <dd>{contact.phone}</dd>
            </>
          )}
        </dl>
        <p className="text-muted-foreground">Responsible for the content of this website: {contact.name}</p>
      </section>

      <section aria-labelledby="disclaimer-heading" className="flex flex-col gap-8">
        <h2 id="disclaimer-heading" className="text-2xl font-semibold tracking-tight">
          Disclaimer
        </h2>
        {disclaimerSections.map((section) => (
          <div key={section.heading} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">{section.heading}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
