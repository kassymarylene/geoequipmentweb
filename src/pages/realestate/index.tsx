import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";

const propertyHighlights = [
  "Residential developments with villas, multi-family, and gated communities.",
  "Commercial &amp; mixed-use assets anchored around Douala and Yaoundé.",
  "Industrial/warehouse campuses and logistics centers near transport corridors.",
  "Land acquisition &amp; parcel rectification for long-term appreciation.",
];

const productTiles = [
  {
    id: 1,
    name: "Master Planning &amp; Site Layouts",
    imageSrc: "/images/geo76.jpeg",
    description: "Composite site plans for reals estate, hospitality, and campus developments.",
  },
  {
    id: 2,
    name: "Boundary Rectification",
    imageSrc: "/images/geo67.jpeg",
    description: "Precision boundary surveys that resolve land disputes and secure titles.",
  },
  {
    id: 3,
    name: "Cadastral Dossiers",
    imageSrc: "/images/geo74.jpeg",
    description: "Complete cadastral mapping for registration, tax, and investment purposes.",
  },
  {
    id: 4,
    name: "Development Monitoring",
    imageSrc: "/images/geo19.jpeg",
    description: "Phased deliverables for foundations, utilities, and finishing works.",
  },
];

const testimonialMetrics = [
  { label: "10 years", detail: "of developing heavyweight projects" },
  { label: "20-500M FCFA", detail: "annual cross-sector volume" },
  { label: "1,000+", detail: "transactions facilitated with trust" },
];

export default function RealEstate() {
  const { locale } = useRouter();
  const baseUrl = "https://www.geoequipcam.com";
  const canonicalUrl =
    locale && locale !== "en"
      ? `${baseUrl}/${locale}/realestate`
      : `${baseUrl}/realestate`;
  return (
    <>
      <NextSeo
        title="Geo-Equipment Real Estate Solutions"
        description="Geo-Equipment Consultant delivers residential, commercial, and industrial real estate consulting with cadastral, planning, and GNSS-backed accuracy."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "Real Estate Excellence",
          description:
            "Land acquisition, site planning, and cadastral control for residential, commercial, and industrial investors.",
          images: [
            {
              url: "https://www.geoequipcam.com/images/geo76.jpeg",
              width: 1200,
              height: 630,
              alt: "Master planning site",
            },
          ],
          site_name: "Geo-Equipment Consultant",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        languageAlternates={[
          { hrefLang: "en", href: `${baseUrl}/realestate` },
          { hrefLang: "fr", href: `${baseUrl}/fr/realestate` },
          { hrefLang: "x-default", href: `${baseUrl}/realestate` },
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "real estate, site planning, cadastral, property development, investment, Cameroon",
          },
          {
            name: "robots",
            content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ]}
      />

      <div className="bg-slate-950 text-white">
        <section className="relative overflow-hidden px-6 pb-16 pt-28">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-slate-950/80" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">
            <div className="space-y-4">
              <p className="inline-flex w-fit items-center rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-accent shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur">
                Real Estate Advisory
              </p>
              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Site planning, land acquisition, and asset strategies for resilient growth
              </h1>
              <p className="text-base font-medium text-white/80">
                We anchor property deals with GNSS-based cadastral certainty, risk-aware contracts, and development roadmaps that satisfy investors and regulators alike.
              </p>
              <div className="flex flex-wrap gap-4">
                {testimonialMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    <p className="text-2xl font-semibold text-accent">{metric.label}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-white/10 to-transparent shadow-xl shadow-black/40 lg:h-72">
              <Image
                src="/images/geo23.jpeg"
                alt="Real estate overview"
                fill
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-accent/80">Property Types</p>
            <h2 className="text-3xl font-semibold text-white">Tailored experiences by asset class</h2>
            <p className="text-base text-white/70">
              Combining market intelligence with GNSS precision lets us deliver high-impact residential, commercial, industrial, and land investments that scale responsibly.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {propertyHighlights.map((item) => (
              <article
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-base font-medium text-white shadow-lg shadow-black/30 backdrop-blur"
              >
                {item}
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-3xl font-semibold text-white">Featured Deliverables</h3>
              <p className="text-base text-white/70">
                Photographic proof, digital plots, and legal dossiers accompany every hand-off.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {productTiles.map((product) => (
                <article
                  key={product.name}
                  className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/10 p-5 text-sm text-white shadow-2xl shadow-black/40 transition hover:-translate-y-1"
                >
                  <div className="relative h-32 rounded-2xl border border-white/20 bg-white/10 overflow-hidden">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="rounded-2xl object-cover object-[center_20%]"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{product.name}</h4>
                  <p className="text-sm text-white/70">{product.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
