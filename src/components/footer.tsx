import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const footerLinks = [
  { key: "about", href: "#about-container" },
  { key: "services", href: "#services" },
  { key: "team", href: "#team" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-br from-brand-900 via-brand-900 to-brand-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 border-t border-white/10 px-6 py-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">{t("brand")}</p>
          <h3 className="text-2xl font-semibold text-white">{t("headline")}</h3>
          <p className="mt-2 text-sm text-white/70">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link key={link.key} href={link.href} className="uppercase tracking-widest text-white/60 transition hover:text-accent">
              {nav(link.key)}
            </Link>
          ))}
        </div>
        <div className="text-xs text-white/60">
          <p>© {year} Geo-Equipment Consultant</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/40">{t("designLabel")}</p>
          <p className="text-sm text-white/70">{t("designCredit")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
