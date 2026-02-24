import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const contractHighlights = [
  {
    title: "Real Estate Contracts",
    body: "Purchase agreements, lease documentation, and development frameworks tailored to local and international partners.",
  },
  {
    title: "Equipment &amp; Construction Contracts",
    body: "Detailed renting, sale, and maintenance clauses that reduce liability and ensure compliance with Cameroon’s procurement code.",
  },
  {
    title: "Dispute Prevention",
    body: "Transparent inspections, payment terms, and insurance responsibility keep stakeholders in sync and avoid costly delays.",
  },
];

export default function Contracts() {
  const { locale } = useRouter();
  const baseUrl = "https://www.geoequipcam.com";
  const canonicalUrl =
    locale && locale !== "en"
      ? `${baseUrl}/${locale}/contracts`
      : `${baseUrl}/contracts`;
  return (
    <>
      <NextSeo
        title="Contracts & Procurements - Geo-Equipment Consultant"
        description="We draft, negotiate, and manage contracts that connect equipment rental, real estate projects, and general trade with legal rigor."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "Contracts & Procurement Support",
          description: "Legal, real estate, and equipment agreements designed for Cameroon’s infrastructure programs.",
          images: [
            {
              url: "https://www.geoequipcam.com/images/geo23.jpeg",
              width: 1200,
              height: 630,
              alt: "Contracts and agreements",
            },
          ],
          site_name: "Geo-Equipment Consultant",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        languageAlternates={[
          { hrefLang: "en", href: `${baseUrl}/contracts` },
          { hrefLang: "fr", href: `${baseUrl}/fr/contracts` },
          { hrefLang: "x-default", href: `${baseUrl}/contracts` },
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "contracts, procurement, legal advisory, equipment rental contracts, real estate agreements, Cameroon",
          },
          {
            name: "robots",
            content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ]}
      />

      <div className="bg-slate-950 text-white">
        <section className="px-6 pb-16 pt-28">
          <div className="mx-auto max-w-6xl space-y-6 lg:flex lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="inline-flex w-fit items-center rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.6em] text-accent shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur">
                Contracts
              </p>
              <h1 className="text-5xl font-semibold sm:text-6xl">
                Legal frameworks for property, equipment, and procurement
              </h1>
              <p className="text-base font-medium text-white/70">
                Geo-Equipment Consultant designs contracts that manage risk, align with public procurement rules, and keep your developments on track.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/20 bg-white/5 p-6 text-sm text-white/80 shadow-[0_25px_60px_rgba(2,6,23,0.8)]">
              <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/60">Quick Facts</p>
              <p className="mt-3 text-2xl font-semibold text-accent">Government + Private</p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Multi-sector contracts with performance guarantees
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {contractHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl space-y-6 rounded-[32px] border border-white/20 bg-gradient-to-br from-white/10 to-transparent p-8">
            <h2 className="text-3xl font-semibold text-white">Why Geo-Equipment Contracts</h2>
            <ul className="grid gap-4 text-base font-medium text-white/70 md:grid-cols-2">
              <li>• Detailed scope of work for acquisition, rental, and maintenance.</li>
              <li>• Payment schedules aligned with project milestones and delivery.</li>
              <li>• Insurance and liability clearly defined for equipment and land.</li>
              <li>• Inspection, acceptance, and dispute resolution clauses.</li>
              <li>• Renewals, extensions, and exit options with notice timelines.</li>
              <li>• Compliance with Cameroon’s procurement, tax, and land laws.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
