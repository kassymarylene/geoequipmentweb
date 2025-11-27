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
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-900/90" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300/80">
            Geo-Equipment Consultant
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
            {t("title")}
          </h1>
          <p className="text-base text-white/80">{t("subtitle")}</p>
        </div>

          <div className="flex flex-wrap gap-3 text-base text-white/80">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-white/30 px-4 py-2 backdrop-blur"
            >
              {highlight}
            </span>
          ))}
        </div>

          <div className="flex flex-wrap gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-900 shadow-lg shadow-cyan-500/40 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
          >
            Book a Call
          </a>
        </div>

        <div className="grid gap-6 rounded-3xl bg-white/10 p-6 text-sm text-white/90 shadow-2xl shadow-slate-900/60 md:grid-cols-3">
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
