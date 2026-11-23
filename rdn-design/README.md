# RDN Design
Next.js App Router · TypeScript · Tailwind CSS · Framer Motion · Lucide.

## Local development
`pnpm install`, `pnpm dev`. Production: `pnpm build`. Deploy on Vercel using the Next.js preset. Static export is generated in `out/` for Sites hosting.

## Editing
- `src/data/site.ts`: contact details, social URL, replaceable reference photography, portfolio data. Empty contact values are intentionally hidden.
- `src/data/copy.ts`, `src/data/editorial.ts`, `src/data/locales/`: Polish, English and Russian content. Language selection is retained in localStorage.
- `src/data/services/`: dedicated service catalog and editing guide.
- System theme follows `prefers-color-scheme` automatically; no manual theme override is stored.
- `src/app/globals.css`: design tokens and responsive layout.
- New projects automatically receive detail routes through generateStaticParams.

## Contact integration
Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_CONTACT_ENDPOINT` to an HTTPS email-service endpoint accepting JSON fields name, email, projectType, area, message, consent. It must enforce validation, origin restrictions, rate limits, abuse prevention and return 2xx only after accepting the message. Rebuild after changes. API secrets belong in that service, never in NEXT_PUBLIC variables. With no endpoint, the UI clearly reports that nothing was sent. Complete the privacy page with actual administrator and processing details before enabling the service.

## Demo content
All four portfolio entries are illustrative concepts. Unsplash photographs are references, not completed RDN projects. Replace images, project facts, contact details and privacy information before business launch. PL, EN and RU are available through the header language selector.
