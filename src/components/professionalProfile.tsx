import {
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
} from "react-icons/hi";

const expertiseList = [
  "High-precision GNSS/GPS geodesy — static & RTK surveys, control networks, baseline processing, coordinate adjustment.",
  "Drone (UAV) photogrammetry — mission planning, aerial acquisition, PPK/RTK workflows, GCPs, orthomosaics, 3D/DEM modeling.",
  "Topographic & engineering surveys — large-area mapping, terrain modeling, contour generation, and engineering site plans.",
  "Cadastral & land administration — boundary re-establishment, parcel rectification, encroachment detection, and registration datasets.",
  "Infrastructure & development surveys — road corridor mapping, airport control monitoring, and new-zone site selection.",
];

const projectEntries = [
  {
    title: "University of Bamenda New Site Development (2017)",
    points: [
      "Lead technical surveyor for the 100-hectare expansion.",
      "Designed and executed a first-order GNSS geodetic control network.",
      "Integrated precision RTK, static GPS, and total-station data for complete site mapping.",
      "Delivered topographic, boundary, and engineering-grade datasets for planning and architecture.",
    ],
  },
  {
    title: "Bamenda Airport Geodetic Monitoring",
    points: [
      "Performed aviation-grade geodetic control, runway mapping, and elevation calibration.",
      "Delivered deformation checks that informed safety assessments before civilian flights resumed.",
    ],
  },
  {
    title: "Regional Development & Site Selection (North West Region)",
    points: [
      "Led technical teams to evaluate new development sites and extend geodetic control.",
      "Established legal boundaries and produced statutory survey plans for regional planning.",
    ],
  },
  {
    title: "Cadastral, Expropriation & Land Management",
    points: [
      "Analyzed property encroachments into state lands.",
      "Conducted boundary diagnostics for disputed parcels.",
      "Produced valuation-ready maps for compensation and legal processes.",
    ],
  },
  {
    title: "World Bank Road Infrastructure Programs",
    points: [
      "Completed right-of-way surveys, alignment staking, and corridor mapping.",
      "Delivered datasets for determining compensation along road projects.",
    ],
  },
];

const whatIDo = [
  "Establish GNSS-controlled Ground Control Points (GCPs) using RTK/PPK receivers.",
  "Execute UAV missions with high-overlap photogrammetry standards.",
  "Process imagery with SfM, point-cloud generation, orthorectification, and terrain modeling.",
  "Produce survey-grade outputs: topographic maps, cadastral maps, boundary rectification, subdivisions, and 3D terrain models.",
];

const professionalValue = [
  "Public infrastructure modernization.",
  "Land-use planning & regulation.",
  "Aviation safety improvements.",
  "Real estate development readiness.",
  "Transparent compensation & expropriation support.",
  "Digital mapping & smart land management.",
];

const highlightBadges = [
  {
    label: "10+ Years",
    detail: "Leading national infrastructure surveys",
    icon: <HiOutlineChartBar className="h-6 w-6 text-orange-400" />,
  },
  {
    label: "Drone + GNSS",
    detail: "Photogrammetry paired with precision control",
    icon: <HiOutlineSparkles className="h-6 w-6 text-emerald-400" />,
  },
  {
    label: "International Reach",
    detail: "World Bank, airport, and regional programs",
    icon: <HiOutlineGlobeAlt className="h-6 w-6 text-cyan-300" />,
  },
];

const ProfessionalProfile = () => (
  <section
    id="profile"
    className="relative my-16 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-brand-900 via-brand-900 to-brand-800 px-4 py-16 text-white shadow-[0_35px_70px_rgba(2,6,23,0.75)] lg:px-12"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08),_transparent_60%)]" />
    <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
      <header className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-200">
          Professional Profile
        </p>
        <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Geodetic &amp; Geomatics Expert
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80">
          Highly skilled Geomatics and Geodetic Surveying professionals deliver GNSS/GPS precision, drone photogrammetry,
          engineering mapping, and cadastral services that support national infrastructure, land administration, aviation safety, and real estate planning.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {highlightBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left text-sm shadow-lg shadow-black/40"
            >
              <span className="rounded-full bg-white/10 p-2 text-white">{badge.icon}</span>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">{badge.label}</p>
                <p className="text-sm text-white/80">{badge.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.7fr_1.3fr]">
        <article className="rounded-3xl border border-white/20 bg-slate-950/95 p-6 shadow-[0_30px_70px_rgba(2,6,23,0.75)]">
          <h3 className="text-xl font-semibold text-white">Core Technical Expertise</h3>
          <p className="mt-2 text-sm text-white/70">
            Decades of delivering geodesy, photogrammetry, and land administration programs for governments, banks, and developers.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-white/80">
            {expertiseList.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 text-sm shadow-sm shadow-black/25"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl border border-white/20 bg-slate-950/95 p-6 shadow-[0_30px_70px_rgba(2,6,23,0.75)]">
          <h3 className="text-xl font-semibold text-white">Professional Impact</h3>
          <p className="mt-2 text-sm text-white/70">
            Independent execution of complex geospatial and land-administration programs ensures transparency and strategic outcomes.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            {professionalValue.map((value) => (
              <p key={value} className="flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                {value}
              </p>
            ))}
          </div>
        </article>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="rounded-3xl border border-white/20 bg-slate-950/95 p-6 shadow-[0_30px_70px_rgba(2,6,23,0.75)]">
          <h3 className="text-2xl font-semibold text-white">Major Project Contributions</h3>
          <div className="mt-5 space-y-4">
            {projectEntries.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm shadow-sm shadow-black/40"
              >
                <h4 className="text-base font-semibold text-white">{project.title}</h4>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-white/80">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-3xl border border-white/20 bg-slate-950/95 p-6 shadow-[0_30px_70px_rgba(2,6,23,0.75)]">
          <h3 className="text-2xl font-semibold text-white">
            Drone Photogrammetry &amp; Digital Surveying (2020 – Present, Yaoundé)
          </h3>
          <p className="mt-2 text-sm text-white/70">
            UAV photogrammetry, GNSS control, and SfM processing deliver survey-grade orthomosaics and terrain intelligence.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {whatIDo.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-sm shadow-black/35"
              >
                <span className="mt-0.5 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-6 w-full rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-slate-950 shadow-lg shadow-cyan-500/50 transition hover:-translate-y-0.5"
          >
            Request Detailed Survey Sheet
          </button>
        </article>
      </div>
    </div>
  </section>
);

export default ProfessionalProfile;
