import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const studyAreas = [
  {
    title: "Soil &amp; Rock Mechanics",
    body: "Understanding soil strength, rock mass behavior, and site stability for foundations, slopes, and tunnels.",
  },
  {
    title: "Foundation Engineering",
    body: "Shallow/deep foundation layouts, bearing capacity assessment, and construction monitoring.",
  },
  {
    title: "Ground Improvement &amp; Earthquake Engineering",
    body: "Compaction, grouting, and seismic resilience strategies that protect people and assets.",
  },
  {
    title: "Survey-grade Topographic Mapping",
    body: "Drone photogrammetry, GNSS, and total-station campaigns for detailed contours, DEMs, and orthomosaics.",
  },
];

export default function Studies() {
  const { locale } = useRouter();
  const baseUrl = "https://www.geoequipcam.com";
  const canonicalUrl =
    locale && locale !== "en"
      ? `${baseUrl}/${locale}/studies`
      : `${baseUrl}/studies`;
  return (
    <>
      <NextSeo
        title="Geomatics & Survey Studies"
        description="Geo-Equipment Consultant delivers soil mechanics, topographic, and geotechnical studies for infrastructure, real estate, and public works."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "Geomatics & Survey Studies",
          description:
            "Soil mechanics, topographic mapping, and geotechnical studies for confident infrastructure planning.",
          images: [
            {
              url: "https://www.geoequipcam.com/images/geo27.jpeg",
              width: 1200,
              height: 630,
              alt: "Geomatics and survey studies",
            },
          ],
          site_name: "Geo-Equipment Consultant",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        languageAlternates={[
          { hrefLang: "en", href: `${baseUrl}/studies` },
          { hrefLang: "fr", href: `${baseUrl}/fr/studies` },
          { hrefLang: "x-default", href: `${baseUrl}/studies` },
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "geomatics, survey studies, topographic mapping, soil mechanics, geotechnical, Cameroon",
          },
          {
            name: "robots",
            content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ]}
      />

      <div className="bg-slate-950 text-white">
        <section className="px-6 pb-16 pt-28">
          <div className="mx-auto max-w-6xl space-y-4">
            <p className="inline-flex w-fit items-center rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.6em] text-accent shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur">
              Geomatics Studies
            </p>
            <h1 className="text-5xl font-semibold sm:text-6xl">
              Terrain, geotechnical, and cadastral intelligence for confident infrastructure
            </h1>
            <p className="text-base font-medium text-white/70">
              From airports to university campuses, we combine GNSS/geodetic control with drone photogrammetry and structural diagnostics for safe planning.
            </p>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {studyAreas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white shadow-xl shadow-black/50"
                >
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-sm font-medium text-white/70">{item.body}</p>
                </article>
              ))}
            </div>
            <article className="rounded-[32px] border border-white/20 bg-gradient-to-br from-accent/20 to-slate-900/40 p-6 text-sm text-white shadow-2xl shadow-black/60">
              <h3 className="text-3xl font-semibold">Digital Surveying Capabilities</h3>
              <p className="mt-3 text-base text-white/80">
                GNSS control networks, PPK/RTK-enabled drones, advanced SfM processing, and orthomosaics deliver deliverables that planners and regulators can trust.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
