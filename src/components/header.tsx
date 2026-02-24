import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LanguageSwitcher from "./languageSwitcher";
import ThemeChanger from "./themeChanger";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslations } from "next-intl";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');

  const router = useRouter();
  const t = useTranslations("nav");

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = header ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [header]);

  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor('linear-gradient(to right, #0f1624, #14233a, #1b2d4a)');
        setHeaderText('#ffffff');
      } else {
        setHeaderColor('transparent');
        setHeaderText('#ffffff');
      }
    };
    window.addEventListener('scroll', handleColorChange);
  }, []);

  return (
    <div
      style={{ background: `${headerColor}` }}
      className="backdrop-blur-xl bg-brand-900/95 fixed top-0 left-0 w-full h-20 border-b border-white/5 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
    >
      {/* Menu + Name */}

      <div className="max-w-[1240px] m-5 flex justify-between items-center p-4">
  <Link href="/" className="flex items-center">
    <Image
      src={"/geologo4.jpeg"}
      alt="Geo-Equipment Logo"
      width={70} // Adjust width and height as per your logo size
      height={70}
      className="mr-2 rounded w-20 h-16" // Add spacing between logo and text
      priority
    />
    <div className="ml-2"> {/* Wrapper for the title and subtitle */}
      <h1
        style={{ color: `${headerText}` }}
        className="py-2 text-2xl font-bold hover:text-accent"
      >
        Geo-Equipment  
        <br/>
        <span>Consultant</span>  
      </h1>
   
    </div>
  </Link>
</div>


     
      {/* navbar Links */}

      {router.pathname === '/' ? (
        <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-bold hidden sm:flex
      "
      >
        <li className=" p-4 hover:text-accent text-lg">
          <Link href="#about-container">{t("about")}</Link>
        </li>
        <li className=" p-4 hover:text-accent text-lg">
          <Link href="#services">{t("services")}</Link>
        </li>
        <li className=" p-4 hover:text-accent text-lg">
          <Link href="#team">{t("team")}</Link>
        </li>
        <li className=" p-4 hover:text-accent text-lg">
          <Link href="#contact">{t("contact")}</Link>
        </li>
        <li className=" p-4 hover:text-accent text-lg">
          <Link href="#projects">{t("projects")}</Link>
        </li>
      </ul>) : (
        <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-bold hidden sm:flex
      "
      >
        <li className=" p-4 hover:text-accent text-lg">
          <Link href="/">{t("home")}</Link>
        </li>
        
      </ul>
      )}

      <div className="hidden items-center gap-3 sm:flex">
        <LanguageSwitcher />
      </div>
      {/* <div className="mr-10">
        <ThemeChanger />
      </div> */}

      {/* Mobile hamburgerMenu */}

      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} style={{ color: `${headerText}` }} className='cursor-pointer' />
        ) : (
          <AiOutlineMenu size={30} style={{ color: `${headerText}` }} className='cursor-pointer' />
        )}
      </div>
      <div
        className={
          header
            ? "sm:hidden fixed inset-0 z-50 flex min-h-dvh flex-col bg-slate-950 text-center transition duration-300 isolate"
            : "sm:hidden fixed inset-0 z-50 flex min-h-dvh flex-col bg-slate-950 text-center opacity-0 pointer-events-none transition duration-300 isolate"
        }
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,106,0.08),_transparent_55%)]" aria-hidden />
        <div className="relative mx-auto flex min-h-dvh w-full max-w-sm flex-col overflow-y-auto overscroll-contain px-6 pb-10 pt-6 text-left">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-accent/80">Menu</p>
              <p className="text-2xl font-semibold text-white">Navigate</p>
            </div>
            <button
              onClick={handleMobileHeader}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent/40 hover:text-accent"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-3 text-base">
            {[
              { label: t("about"), target: "#about-container" },
              { label: t("services"), target: "#services" },
              { label: t("team"), target: "#team" },
              { label: t("projects"), target: "#projects" },
              { label: t("contact"), target: "#contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.target}
                onClick={handleMobileHeader}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-lg font-semibold text-white/90 transition hover:border-accent/40 hover:bg-white/10"
              >
                {link.label}
                <span className="text-accent">→</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">Quick Contact</p>
            <p className="mt-2 text-base font-semibold text-white">+237 677 355 166</p>
            <p className="text-sm text-white/60">constrctr@restate.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
