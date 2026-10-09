// Content for the /impressum page. Like the rest of the site's content, it lives here as data so the
// page component only handles layout.

export type ImpressumContact = {
  name: string;
  street: string;
  postcodeCity: string;
  country: string;
  email: string;
  phone?: string;
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

// TODO: replace the bracketed placeholders with your real details before going live.
// An Impressum needs a postal address where you can be reached (not a P.O. box) and a fast way to
// contact you electronically, usually an email address.
export const impressumContact: ImpressumContact = {
  name: 'Greg Telakis',
  street: '[Street and number]',
  postcodeCity: '[Postcode and city]',
  country: '[Country]',
  email: '[Email address]',
};

// A standard English disclaimer. It's general wording, not legal advice; have it checked if in doubt.
export const disclaimerSections: LegalSection[] = [
  {
    heading: 'Liability for content',
    paragraphs: [
      'The content of this website has been created with great care. However, I cannot guarantee that it is accurate, complete or up to date.',
      'As a service provider I am responsible for my own content on these pages under the general laws. I am not obliged to monitor third-party information transmitted or stored, or to investigate circumstances that indicate illegal activity. If I become aware of any legal violations, I will remove the content concerned immediately.',
    ],
  },
  {
    heading: 'Liability for links',
    paragraphs: [
      'This website contains links to external websites of third parties, over whose content I have no control. I therefore cannot accept any liability for that content. The respective provider or operator of the linked pages is always responsible for their content.',
      'The linked pages were checked for possible legal violations at the time of linking, and no illegal content was found. Permanent monitoring of linked pages is not reasonable without concrete evidence of a violation. If I become aware of any legal violations, I will remove such links immediately.',
    ],
  },
  {
    heading: 'Copyright',
    paragraphs: [
      'The content and works on this website created by me are subject to copyright. Copying, editing, distributing or any kind of use beyond the limits of copyright law requires my written consent.',
      'Where content on this site was not created by me, the copyrights of third parties are respected and such content is marked as such. If you nevertheless notice a copyright infringement, please let me know and I will remove the content concerned immediately.',
    ],
  },
];
