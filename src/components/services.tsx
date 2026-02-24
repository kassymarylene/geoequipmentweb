import Image from "next/image";
import Link from "next/link";
import {
  CubeIcon,
  MapIcon,
  DocumentTextIcon,
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const serviceItems = [
  {
    id: "realEstate",
    icon: MapIcon,
    href: "/realestate",
    image: "/images/geo76.jpeg",
  },
  {
    id: "equipment",
    icon: CubeIcon,
    href: "/rentingselling",
    image: "/images/geo31.jpeg",
  },
  {
    id: "contracts",
    icon: DocumentTextIcon,
    href: "/contracts",
    image: "/images/geo23.jpeg",
  },
  {
    id: "trade",
    icon: ChatBubbleLeftEllipsisIcon,
    href: "/ngeneraltrade",
    image: "/images/geo65.jpeg",
  },
  {
    id: "studies",
    icon: GlobeAltIcon,
    href: "/studies",
    image: "/images/geo27.jpeg",
  },
];

const Services = () => {
  const t = useTranslations();

  return (
    <section
      id="services"
      data-reveal
      className="reveal relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 px-6 py-20 text-white shadow-[inset_0_0_50px_rgba(2,6,23,0.8)]"
    >
      <div className="mx-auto max-w-5xl space-y-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.6em] text-accent/80">
          {t("services.label")}
        </p>
        <h2 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
          {t("services.heading")}
        </h2>
        <p className="text-lg font-medium text-white/70">
          {t("services.subheading")}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
        {serviceItems.map((service) => (
          <Link key={service.id} href={service.href} className="group">
            <article className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-slate-950/95 p-0 shadow-[0_30px_60px_rgba(2,6,23,0.75)] transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_35px_80px_rgba(201,168,106,0.25)]">
              <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={service.image}
                  alt={t(`services.${service.id}.title`)}
                  fill
                  className="object-cover object-[center_20%] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                  {t(`services.${service.id}.badge`)}
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/10 p-3 text-lg text-accent transition group-hover:bg-accent group-hover:text-slate-900">
                    <service.icon aria-hidden className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{t(`services.${service.id}.title`)}</h3>
                </div>
                <p className="text-base text-white/80">{t(`services.${service.id}.description`)}</p>
                <span className="mt-auto text-xs font-semibold uppercase tracking-[0.4em] text-accent/90">
                  {t("services.explore")}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
