import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const equipmentHighlights = [
  "Fleet of bulldozers, graders, compactors, cranes, and excavators.",
  "Flexible rental by the hour, day, or long-term contract.",
  "Maintenance, transport, and operator coordination included.",
];

const equipmentAssets = [
  {
    name: "BullDozer Series",
    price: "100,000 FCFA / h",
    duration: "500,000 FCFA / 6d",
    image: "/images/geo31.jpeg",
  },
  {
    name: "Frond Wild Holder",
    price: "75,000 FCFA / h",
    duration: "500,000 FCFA / 6d",
    image: "/images/geo36.jpeg",
  },
  {
    name: "Compactors &amp; Graders",
    price: "75,000 FCFA / h",
    duration: "480,000 FCFA / 6d",
    image: "/images/geo61.jpeg",
  },
  {
    name: "Loaders &amp; Misc. Fleet",
    price: "Starts at 65,000 FCFA / h",
    duration: "Negotiable packages",
    image: "/images/geo48.jpeg",
  },
];

const faq = [
  {
    label: "Renting",
    body: "Temporary deployment for road openings, site prep, or government corridors with an inclusive operating plan.",
  },
  {
    label: "Sales",
    body: "New and reconditioned units, financing support, and warranties tailored for developers or municipalities.",
  },
  {
    label: "Logistics",
    body: "Transport, insurance, and equipment checks before every deployment ensure uptime and compliance.",
  },
];

export default function RentingSelling() {
  const { locale } = useRouter();
  const baseUrl = "https://www.geoequipcam.com";
  const canonicalUrl =
    locale && locale !== "en"
      ? `${baseUrl}/${locale}/rentingselling`
      : `${baseUrl}/rentingselling`;
  return (
    <>
      <NextSeo
        title="Construction Equipment Rentals & Sales"
        description="Geo-Equipment Consultant supplies bulldozers, graders, compactors, and cranes for rent or purchase backed by logistics and GNSS site planning."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "Public Works Equipment Rental & Sales",
          description:
            "Rent or buy heavy equipment with maintenance, transport, and surveying support.",
          images: [
            {
              url: "https://www.geoequipcam.com/images/geo31.jpeg",
              width: 1200,
              height: 630,
              alt: "Heavy machinery fleet",
            },
          ],
          site_name: "Geo-Equipment Consultant",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        languageAlternates={[
          { hrefLang: "en", href: `${baseUrl}/rentingselling` },
          { hrefLang: "fr", href: `${baseUrl}/fr/rentingselling` },
          { hrefLang: "x-default", href: `${baseUrl}/rentingselling` },
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "equipment rental, bulldozer, grader, compactor, crane, public works, Cameroon",
          },
          {
            name: "robots",
            content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ]}
      />

      <div className="bg-slate-950 text-white">
        <section className="relative overflow-hidden px-6 pb-16 pt-28">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-slate-950/70" />
          <div className="relative mx-auto max-w-6xl space-y-8 lg:flex lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="inline-flex w-fit items-center rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.6em] text-accent shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur">
                Equipment Rental &amp; Sales
              </p>
              <h1 className="text-5xl font-semibold sm:text-6xl">
                Bulldozers, graders, and excavators ready for public work projects
              </h1>
              <p className="text-base font-medium text-white/80">
                We pair heavy equipment availability with GNSS-guided site planning, transport logistics, and operator coordination so every job keeps moving.
              </p>
              <div className="flex flex-wrap gap-4">
                {equipmentHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-accent/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-[32px] border border-white/30 bg-slate-900 lg:h-72">
              <Image
                src="/images/geo31.jpeg"
                alt="Heavy machinery fleet"
                fill
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl space-y-6">
            <h2 className="text-4xl font-semibold text-white">Featured Fleet</h2>
            <p className="text-base text-white/70">
              Whether you rent for groundbreaking preparation or buy for an ongoing project, each machine is calibrated, insured, and ready for rails, roads, or runways.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {equipmentAssets.map((asset) => (
                <article
                  key={asset.name}
                  className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white shadow-2xl shadow-black/60"
                >
                  <div className="relative h-36 overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                    <Image
                      src={asset.image}
                      alt={asset.name}
                      fill
                      className="object-cover object-[center_20%]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{asset.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">{asset.price}</p>
                  <p className="text-xs text-white/60">{asset.duration}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl space-y-6 rounded-[32px] border border-white/20 bg-white/5 p-6 shadow-2xl shadow-black/60">
            <h3 className="text-3xl font-semibold text-white">Rental + Sales Process</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {faq.map((item) => (
                <article key={item.label} className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm text-white/80">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">{item.label}</p>
                  <p className="mt-3 text-sm text-white">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
