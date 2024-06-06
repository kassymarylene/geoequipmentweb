
import { Carousel } from "flowbite-react";
// import heroBack from "../../public/next.svg";

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById('about-container')
      .scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      
      <div className=" h-96 sm:h-96 xl:h-lvh 2xl:h-dvh w-full  bg-no-repeat rounded-b-4xl">

      <Carousel pauseOnHover >
        <img src="/images/heroBackground.png" alt="..." />
        <img src="/images/image-2.png" alt="..." />
        <img src="/images/heroBackground.png" alt="..." />
        <img src="/images/heroBackground.png" alt="..." />
        <img src="/images/heroBackground.png" alt="..." />
        <img src="/images/heroBackground.png" alt="..." />
        <img src="/images/heroBackground.png" alt="..." />
      </Carousel>
    </div>
    </>
    // <section className="flex flex-col w-full h-screen ">
    //    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      
    // </div>
      // <Image
      //   src={heroBg}
      //   alt="bg image"
      //   fill
      //   className="w-full h-screen bg-no-repeat rounded-b-4xl object-cover object-center"
      // />
    //   <div className="w-full h-screen relative ">
    //     <div className="relative h-screen text-center flex flex-col justify-center items-center">
          
    //       <h1 className="font-normal text-7xl text-center mt-24 text-white capitalize">
    //         find real estate
    //         <br /> that suits you
    //       </h1>
    //       {/* Icons and Text under Heading */}
    //       <div className="hidden sm:flex mt-24 justify-center items-center">
    //         <div className="flex mr-11 ">
    //           <Image
    //             src={arrowIcon}
    //             alt="arrow icon"
    //             className="w-5 h-5 mx-9 self-center"
    //           />
    //           <p className="text-white text-xl py-2 ">{address}</p>
    //         </div>

    //         <div className="flex ml-20 mr-20">
    //           <Image
    //             src={phoneIcon}
    //             alt="phone icon"
    //             className="w-5 h-5 mx-9 self-center"
    //           />
    //           <p className="text-white text-xl py-2">{phone}</p>
    //         </div>

    //         <div className="flex ml-20">
    //           <Image
    //             src={mailIcon}
    //             alt="mail icon"
    //             className="w-5 h-5 mx-9 self-center"
    //           />
    //           <p className="text-white text-xl py-2">{email}</p>
    //         </div>
    //       </div>
    //       {/* Show more button  */}
    //       <div className="  absolute bottom-8 w-full text-center ">
    //         <button
    //           onClick={showMoreBtn}
    //           className=" text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36"
    //         >
    //           show more
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
