import { NextSeo } from "next-seo";

const negotiations = [
  "Preparation: Market intelligence and property valuation research.",
  "Relationship building: Transparent proposals that build trust.",
  "Communication: Clearly defined needs with flexible terms.",
  "Due diligence: Legal, survey, and financial review before closing.",
];

const servicePoints = [
  {
    title: "Real Estate Negotiation",
    detail: "Buy, sell, lease, and manage properties with legal oversight and tenant screening.",
  },
  {
    title: "General Trade",
    detail: "Sourcing materials, equipment, and commodities for projects and government programs.",
  },
  {
    title: "Public Work Equipment",
    detail: "Equip rental agreements, pricing, and maintenance packages for road/bridge campaigns.",
  },
];

export default function NgeneralTrade() {
  return (
    <>
      <NextSeo
        title="Negotiation & General Trade"
        description="Geo-Equipment Consultant supports negotiation, procurement, and general trade for real estate, infrastructure, and public works."
        canonical="https://www.geoequipcam.com/ngeneraltrade"
      />

      <div className="bg-slate-950 text-white">
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-300">
              Negotiation &amp; General Trade
            </p>
            <h1 className="text-4xl font-semibold">
              Strategic negotiation, procurement, and sourcing power for Cameroon
            </h1>
            <p className="text-sm text-white/70">
              Support for land deals, equipment purchasing, public-private partnerships, and contractual negotiations that secure your project’s outcomes.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {negotiations.map((item) => (
                <article
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Step</h3>
                  <p className="mt-2 text-sm text-white">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="rounded-[32px] border border-white/20 bg-white/5 p-6 shadow-2xl shadow-black/60">
              <h2 className="text-2xl font-semibold text-white">Key Service Areas</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {servicePoints.map((point) => (
                  <article key={point.title} className="space-y-2 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm">
                    <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                    <p className="text-white/70">{point.detail}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/20 bg-gradient-to-br from-cyan-500/20 to-slate-900/40 p-6 text-sm text-white shadow-2xl shadow-black/60">
              <h3 className="text-xl font-semibold">Ready for your deal flow</h3>
              <p className="mt-3 text-white/80">
                Whether it is a government procurement, private equity transaction, or a multinational partnership, Geo-Equipment Consultant ensures compliance, clarity, and momentum.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
