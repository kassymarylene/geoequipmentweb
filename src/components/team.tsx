import Image from "next/image";
import { useTranslations } from "next-intl";

const Team = () => {
  const t = useTranslations("team");
  const leaders = t.raw("leaders") as Array<{
    name: string;
    role: string;
    description: string;
  }>;
  const tags = t("tags").split("|");
  const leaderImages = ["/images/geo23.jpeg", "/images/geo77.jpeg"];

  return (
  <section id="team" data-reveal className="reveal relative bg-gradient-to-b from-brand-900 via-brand-900 to-brand-800 py-16 text-white">
    <div className="mx-auto max-w-6xl space-y-10 px-6">
      <div className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.6em] text-accent/80">{t("sectionLabel")}</p>
        <h2 className="text-5xl font-semibold text-white sm:text-6xl">{t("title")}</h2>
        <p className="text-lg font-medium text-white/70">{t("description")}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {leaders.map((lead, index) => (
          <article
            key={lead.name}
            className="flex flex-col gap-6 rounded-[26px] border border-white/15 bg-slate-950/90 p-6 shadow-[0_25px_60px_rgba(2,6,23,0.65)] transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_35px_80px_rgba(201,168,106,0.2)]"
          >
            <div className="flex items-center gap-5">
              <div className="h-24 w-24 overflow-hidden rounded-[30px] border border-white/20 bg-white/10">
                <Image
                  src={leaderImages[index] ?? leaderImages[0]}
                  alt={lead.name}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{lead.name}</h3>
                <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/60">
                  {lead.role}
                </p>
              </div>
            </div>
            <p className="text-base text-white/70">{lead.description}</p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-6xl rounded-[32px] border border-white/15 bg-gradient-to-br from-white/10 to-slate-900/40 p-6 text-sm text-white shadow-[0_25px_70px_rgba(2,6,23,0.5)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          {t("contactTitle")}
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
