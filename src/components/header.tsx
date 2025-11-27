import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LanguageSwitcher from "./languageSwitcher";
import ThemeChanger from "./themeChanger";
import { Span } from "next/dist/trace";
import { useRouter } from 'next/router';
import Image, { StaticImageData } from 'next/image';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');

  const router = useRouter();

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor('linear-gradient(to right, #020024, #093679, #00d4ff)');
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
      className=" backdrop-blur-xl bg-lime-950/100 fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
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
        className="py-2 text-2xl font-bold hover:text-orange-500"
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
        <li className=" p-4 hover:text-orange-500 text-lg">
          <Link href="#about-container">About</Link>
        </li>
        <li className=" p-4 hover:text-orange-500 text-lg">
          <Link href="#services">Services</Link>
        </li>
        <li className=" p-4 hover:text-orange-500 text-lg">
          <Link href="#team">Team</Link>
        </li>
        <li className=" p-4 hover:text-orange-500 text-lg">
          <Link href="#contact">Contact</Link>
        </li>
        <li className=" p-4 hover:text-orange-500 text-lg">
          <Link href="#projects">Projects</Link>
        </li>
      </ul>) : (
        <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-bold hidden sm:flex
      "
      >
        <li className=" p-4 hover:text-orange-500 text-lg">
          <Link href="/">Home</Link>
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
            ? "sm:hidden fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-black/90 via-black/80 to-slate-900/90 backdrop-blur-[30px] text-center transition duration-300"
            : "sm:hidden fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-black/0 via-black/0 to-black/0 backdrop-blur-[30px] opacity-0 pointer-events-none transition duration-300"
        }
      >
        <div className="absolute inset-0 bg-black/80" aria-hidden />
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-6">
          <ul className="flex h-full w-full flex-col items-center justify-center gap-8 text-3xl font-semibold tracking-[0.35em] text-white">
            {[
              { label: "About", target: "#about-container" },
              { label: "Services", target: "#services" },
              { label: "Team", target: "#team" },
              { label: "Projects", target: "#projects" },
              { label: "Contact", target: "#contact" },
            ].map((link) => (
              <li key={link.label} className="w-full">
                <Link
                  href={link.target}
                  onClick={handleMobileHeader}
                  className="block w-full rounded-2xl bg-white/10 px-6 py-4 text-center text-lg uppercase tracking-[0.4em] transition hover:bg-white/20"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
