import { NextSeo } from "next-seo";

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
  return (
    <>
      <NextSeo
        title="Contracts & Procurements - Geo-Equipment Consultant"
        description="We draft, negotiate, and manage contracts that connect equipment rental, real estate projects, and general trade with legal rigor."
        canonical="https://www.geoequipcam.com/contracts"
        openGraph={{
          url: "https://www.geoequipcam.com/contracts",
          title: "Contracts & Procurement Support",
          description: "Legal, real estate, and equipment agreements designed for Cameroon’s infrastructure programs.",
          site_name: "Geo-Equipment Consultant",
        }}
      />

      <div className="bg-slate-950 text-white">
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl space-y-6 lg:flex lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-300">
                Contracts
              </p>
              <h1 className="text-4xl font-semibold sm:text-5xl">
                Legal frameworks for property, equipment, and procurement
              </h1>
              <p className="text-sm text-white/70">
                Geo-Equipment Consultant designs contracts that manage risk, align with public procurement rules, and keep your developments on track.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/20 bg-white/5 p-6 text-sm text-white/80 shadow-[0_25px_60px_rgba(2,6,23,0.8)]">
              <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/60">Quick Facts</p>
              <p className="mt-3 text-2xl font-semibold text-white">Government + Private</p>
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
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl space-y-6 rounded-[32px] border border-white/20 bg-gradient-to-br from-white/10 to-transparent p-8">
            <h2 className="text-2xl font-semibold text-white">Why Geo-Equipment Contracts</h2>
            <ul className="grid gap-4 text-sm text-white/70 md:grid-cols-2">
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
