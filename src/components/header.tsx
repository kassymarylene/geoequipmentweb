import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ThemeChanger from './themeChanger';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');

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
        <Link href="/">
          <h1
            style={{ color: `${headerText}` }}
            className="py-2 text-2xl font-bold hover:text-orange-500"
          >
            <p>
                Geo-Equipment <br/>
            <span>Consultant Cameroon</span>
          </p>
          </h1>
        </Link>
      </div>

     

      {/* navbar Links */}

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
      </ul>

      <p
        style={{ color: `${headerText}` }}
        className="hidden sm:flex text-sm font-bold ml-10 mr-5 hover:text-orange-500 cursor-pointer"
      >
        Get In Touch
      </p>
      <div className="mr-10">
        <ThemeChanger />
      </div>

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
            ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
        }
      >
        <ul
          style={{ color: `${headerText}` }}
          className="text-sm font-bold 
      "
        >
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#about-container" onClick={handleMobileHeader}>
              About
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#services" onClick={handleMobileHeader}>
              Services
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#deals" onClick={handleMobileHeader}>
              Deals
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#reviews" onClick={handleMobileHeader}>
              Reviews
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#contact" onClick={handleMobileHeader}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
