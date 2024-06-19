import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {

  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);
  
  return (
    // <div className="absolute bottom-0 w-full p-4 mb-4 mx-[10px]">
    //   {/* Row 1 */}
      

    //   {/* Row 2 */}

      // <div className="relative py-0 px=[340px] border-t-2 border-solid border-[#EDEFF2] flex items-center justify-between gap-5">
      //   <p className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText dark:text-white">
      //     {`© ${year}. All Rights Reserved.`}
      //   </p>
      //   <Link
      //     href="https://www.figma.com/community/file/1216698613875563555/Company-One"
      //     target="_blank"
      //     className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
      //   >
      //     Design by Kassandrale Mognitou
      //   </Link>
       
      // </div>
    // </div>
    <footer>
        <div className="relative py-0 px=[340px] border-t-2 border-solid border-[#EDEFF2] flex items-center justify-between gap-5">
        <p className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText dark:text-white">
          {`© ${year}. All Rights Reserved.`}
        </p>
        <Link
          href=""
          target="_blank"
          className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
        >
          Design by Kassandrale Mognitou
        </Link>
       
      </div>
    </footer>
  );
};

export default Footer;
