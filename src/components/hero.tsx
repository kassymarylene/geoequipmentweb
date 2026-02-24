import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const slides = [
  "/images/geo1.jpg",
  "/images/geo2.jpg",
  "/images/geo3.jpg",
  "/images/geo4.jpg",
  "/images/geo5.jpg",
  "/images/geo6.jpg",
];

const Hero = ({ address, phone, email }: any) => {
  const t = useTranslations("hero");
  const highlightValues = t("highlights");
  const highlights = typeof highlightValues === "string" ? highlightValues.split("|") : [];

  return (
    <header className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white">
      <div className="absolute inset-0">
        <Carousel
          indicators={false}
          className="h-full"
          slideInterval={3500}
        >
          {slides.map((slide) => (
            <div key={slide} className="relative h-full w-full">
              <Image
                src={slide}
                alt="site view"
                fill
                className="h-full w-full object-cover brightness-110 contrast-105 saturate-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/35 via-slate-950/45 to-slate-950/55" />
            </div>
          ))}
        </Carousel>
      </div>

      <div
        data-reveal
        className="reveal relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-28 md:pb-20 md:pt-32"
      >
        <div className="max-w-3xl space-y-5">
          <p className="inline-flex w-fit items-center rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-accent shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur">
            Geo-Equipment Consultant
          </p>
          <h1 className="text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:text-7xl">
            {t("title")}
          </h1>
          <p className="text-lg font-medium text-white/85">{t("subtitle")}</p>
          <p className="rounded-2xl border border-accent/60 bg-slate-950/60 px-4 py-3 text-lg font-semibold text-accent shadow-[0_18px_40px_rgba(201,168,106,0.18)] backdrop-blur">
            {t("tagline")}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-white/90">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-white/15 bg-slate-950/50 px-4 py-2 font-semibold backdrop-blur"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wider text-slate-900 shadow-lg shadow-[0_20px_60px_rgba(201,168,106,0.35)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
          >
            {t("ctaSecondary")}
          </a>
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-white/90 shadow-2xl shadow-slate-900/60 md:grid-cols-3">
          <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{t("location.label")}</p>
            <p className="mt-1 font-semibold text-white">{t("location.value")}</p>
          </div>
          <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">{t("call.label")}</p>
            <p className="mt-1 space-y-1 text-base font-semibold text-white">
              {t("call.numbers")
                .split("|")
                .map((num: string) => (
                  <span key={num}>{num}</span>
                ))}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{t("contact.label")}</p>
            <p className="mt-1 space-y-1 text-base font-semibold text-white">
              {t("contact.whatsapp")
                .split("|")
                .map((num: string) => (
                  <span key={num}>{num}</span>
                ))}
              <span>{email}</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
