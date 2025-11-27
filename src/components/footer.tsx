import Link from "next/link";
import { useEffect, useState } from "react";

const footerLinks = [
  { label: "About", href: "#about-container" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-br from-brand-900 via-brand-900 to-brand-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Geo-Equipment Consultant</p>
          <h3 className="text-2xl font-semibold text-white">Precision surveying &amp; development</h3>
          <p className="mt-2 text-sm text-white/70">
            GNSS geodesy, drone photogrammetry, public works equipment, and contract advisory for Cameroon and beyond.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="uppercase tracking-widest text-white/60 transition hover:text-cyan-200">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-white/60">
          <p>© {year} Geo-Equipment Consultant</p>
          <p>Design by Kassandrale Mognitou</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
