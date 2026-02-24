import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || window.pageYOffset;
      const height = doc.scrollHeight - doc.clientHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, percent)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [router.asPath]);

  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent via-brand-300 to-brand-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <main>{children}</main>
      <Footer />
      {showButton && (
        <div className="fixed bottom-24 right-10 z-50">
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-accent shadow-[0_20px_50px_rgba(201,168,106,0.35)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-slate-900 transition group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5l-7 7M12 5l7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
