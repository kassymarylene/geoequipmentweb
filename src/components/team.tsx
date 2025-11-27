import Image from "next/image";
import { useTranslations } from "next-intl";

const leaders = [
  {
    name: "Mr AYONGABA Francios AGWENAM",
    role: "Founder & CEO",
    description:
      "Civil engineer with ten years of experience leading multimillion-dollar infrastructure and land-development programs in Cameroon.",
    image: "/images/geo23.jpeg",
  },
  {
    name: "Mr GUELA LIENOU Maurice",
    role: "Deputy General Administrator",
    description:
      "Geospatial project manager who coordinates GNSS campaigns, photogrammetry missions, and government partnerships.",
    image: "/images/geo77.jpeg",
  },
];

const Team = () => {
  const t = useTranslations("team");

  return (
  <section id="team" className="relative bg-gradient-to-b from-brand-900 via-brand-900 to-brand-800 py-16 text-white">
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <div className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/72">Expert Team</p>
        <h2 className="text-5xl font-semibold text-white">{t("title")}</h2>
        <p className="text-base text-white/70">{t("description")}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {leaders.map((lead) => (
          <article
            key={lead.name}
            className="flex flex-col gap-6 rounded-[26px] border border-white/20 bg-slate-950/90 p-6 shadow-[0_25px_60px_rgba(2,6,23,0.65)]"
          >
            <div className="flex items-center gap-5">
              <div className="h-24 w-24 overflow-hidden rounded-[30px] border border-white/20 bg-white/10">
                <Image src={lead.image} alt={lead.name} width={320} height={320} className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{lead.name}</h3>
                <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/60">
                  {lead.role}
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70">{lead.description}</p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              <span>Strategic Planning</span>
              <span>Public Procurement</span>
              <span>Geospatial Integrity</span>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-6xl rounded-[32px] border border-white/20 bg-white/5 p-6 text-sm text-white shadow-[0_25px_70px_rgba(2,6,23,0.5)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          Contact
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-white">{t("phoneLabel")}</p>
            <p className="text-white/70">{t("phoneNumbers").split("|").join(" / ")}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t("whatsappLabel")}</p>
            <p className="text-white/70">{t("whatsappNumbers").split("|").join(" / ")}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Team;
