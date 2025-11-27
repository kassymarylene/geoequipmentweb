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

  return (
    <section
      id="about-container"
      className="relative my-16 rounded-[32px] border border-white/20 bg-gradient-to-br from-brand-900 via-brand-900 to-brand-800 px-6 py-12 shadow-[0_30px_70px_rgba(2,6,23,0.75)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.7em] text-cyan-500">
              Our Story
            </p>
            <h2 className="text-4xl font-semibold text-white">
              GEO-EQUIPMENT CONSULTANT
            </h2>
            <p className="text-base leading-relaxed text-white/80">{t("story")}</p>
            <div className="space-y-3 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg shadow-slate-900/20">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">
                {t("credentials")}
              </p>
              <ul className="text-sm text-white/70">
                <li>• Registered: RC.BDA.2014A.179</li>
                <li>• Taxpayer: M041412440255R</li>
                <li>• Yaoundé HQ, serving national infrastructure programs</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
              Why partners choose us
            </p>
            <div className="space-y-3 text-sm font-medium text-white/80">
              {highlights.map((text) => (
                <p key={text} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                  {text}
                </p>
              ))}
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p className="font-semibold text-white">Contact</p>
              <p>B.P. 916 Yaoundé — +237 677 355 166</p>
              <p>Available 24/7 for online/offline consultations (Sat until 13:30)</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[cardTitle1, cardTitle2, cardTitle3].map((title, index) => (
            <article
              key={title}
              className="flex flex-col gap-2 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-slate-950/30 p-6 text-center text-white shadow-lg shadow-black/25 backdrop-blur"
            >
              <p className="text-5xl font-semibold text-white">{title}</p>
              <p className="text-base text-white/80">
                {[cardSubText1, cardSubText2, cardSubText3][index]}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="space-y-4 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white shadow-[0_30px_80px_rgba(2,6,23,0.75)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-300">Mission</p>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">Est. 2014</span>
            </div>
            <p className="leading-relaxed text-base text-white/80">{t("mission")}</p>
            <div className="grid gap-2 text-xs uppercase tracking-[0.4em] text-white/60 md:grid-cols-3">
              <span>Precision GNSS</span>
              <span>Drone &amp; Terrain</span>
              <span>Contracts &amp; Procurement</span>
            </div>
          </article>
          <article className="space-y-4 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/70 to-slate-950/90 p-6 text-sm text-white shadow-[0_30px_80px_rgba(2,6,23,0.75)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/70">Presence</p>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">Yaoundé + Regions</span>
            </div>
            <p className="leading-relaxed text-white/70">{t("presence")}</p>
            <div className="space-y-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              <p>Corporate Bank Accounts:</p>
              <p>Afriland First Bank: 06489961001</p>
              <p>CCC Bank: 37211933402</p>
              <p>Ecobank: 0222845401</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
