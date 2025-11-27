import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale, pathname, asPath, query } = router;

  if (!locales) {
    return null;
  }

  return (
    <div className="flex gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => {
            if (loc === locale) return;
            router.push({ pathname, query }, asPath, { locale: loc });
          }}
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition ${
            loc === locale
              ? "bg-white text-slate-900"
              : "border border-white/40 bg-transparent text-white/80 hover:bg-white/20"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
