import { useTranslations } from "next-intl";

export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}: {
  cardTitle1: string;
  cardTitle2: string;
  cardTitle3: string;
  cardSubText1: string;
  cardSubText2: string;
  cardSubText3: string;
}) {
  const t = useTranslations("about");
  const highlights = t("highlights").split("|");
  const credentialItems = t("credentialsItems").split("|");
  const missionTags = t("missionTags").split("|");
  const presenceBanks = t("presenceBanks").split("|");

  return (
    <section
      id="about-container"
      data-reveal
      className="reveal relative my-16 rounded-[32px] border border-white/20 bg-gradient-to-br from-brand-900 via-brand-900 to-brand-800 px-6 py-12 shadow-[0_30px_70px_rgba(2,6,23,0.75)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.7em] text-accent">
              {t("storyLabel")}
            </p>
            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              GEO-EQUIPMENT{" "}
              <span className="text-accent drop-shadow-[0_10px_30px_rgba(201,168,106,0.25)]">
                CONSULTANT
              </span>
            </h2>
            <p className="text-lg font-medium leading-relaxed text-white/80">{t("story")}</p>
            <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/20">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
                {t("credentials")}
              </p>
              <ul className="text-sm font-medium text-white/80">
                {credentialItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-slate-900/20">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
              {t("partnersLabel")}
            </p>
            <div className="space-y-3 text-sm font-medium text-white/80">
              {highlights.map((text) => (
                <p key={text} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  {text}
                </p>
              ))}
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p className="font-semibold text-white">{t("contactLabel")}</p>
              <p className="font-medium text-white/90">{t("contactLine1")}</p>
              <p className="text-white/70">{t("contactLine2")}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[cardTitle1, cardTitle2, cardTitle3].map((title, index) => (
            <article
              key={title}
              className="flex flex-col gap-2 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-slate-950/30 p-6 text-center text-white shadow-lg shadow-black/25 backdrop-blur"
            >
              <p className="text-6xl font-semibold text-white">{title}</p>
              <p className="text-base font-medium text-white/80">
                {[cardSubText1, cardSubText2, cardSubText3][index]}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="space-y-4 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white shadow-[0_30px_80px_rgba(2,6,23,0.75)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.6em] text-accent">{t("missionLabel")}</p>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">{t("missionMeta")}</span>
            </div>
            <p className="leading-relaxed text-lg font-medium text-white/80">{t("mission")}</p>
            <div className="grid gap-2 text-xs uppercase tracking-[0.4em] text-white/60 md:grid-cols-3">
              {missionTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
          <article className="space-y-4 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/70 to-slate-950/90 p-6 text-sm text-white shadow-[0_30px_80px_rgba(2,6,23,0.75)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/70">{t("presenceLabel")}</p>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t("presenceMeta")}</span>
            </div>
            <p className="leading-relaxed text-base text-white/70">{t("presence")}</p>
            <div className="space-y-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              <p>{t("presenceBankLabel")}</p>
              {presenceBanks.map((bank) => (
                <p key={bank}>{bank}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
