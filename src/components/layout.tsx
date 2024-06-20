import { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Image from 'next/image';
import scrollIcon from '../assets/icons/topArrowIcon.png';


export default function Layout({ children }: any) {
    const [showButton, setShowButton] = useState(false);


  const handleScrollToTop = () => {
    window.scrollTo({ top: (0), behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return (
    //   <>
    //     <Header />
    //     <main>{children}</main>
    //     <Footer />
    //     {showButton && (
    //       <div className="fixed bottom-24 right-10 z-50">
    //         <button
    //           onClick={handleScrollToTop}
    //           className="bg-slate-100 rounded shadow-xl overflow-visible"
    //         >
    //           <Image src={scrollIcon} alt="scroll button" />
    //         </button>
    //       </div>
    //     )}
    //   </>

    <div className="flex flex-col min-h-screen mx-auto px-4 pt-8 pb-16">
    <div className="flex-grow">
      <Header />
      <main className="my-0 py-16">{children}</main>
    </div>
    <Footer />
  </div>
    )
  }