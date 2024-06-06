
// import heroBack from "../../public/next.svg";
import { Carousel } from "flowbite-react";

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById('about-container')
      .scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    
      <section className="flex flex-col w-full h-screen ">
        
        <div className=" absolute h-96 sm:h-96 xl:h-lvh 2xl:h-dvh w-full  bg-no-repeat rounded-b-4xl">

      <Carousel >
        <img src="/images/geo1.jpg" alt="..." />
        <img src="/images/geo2.jpg" alt="..." />
        <img src="/images/geo3.jpg" alt="..." />
        <img src="/images/geo4.jpg" alt="..." />
        <img src="/images/geo5.jpg" alt="..." />
        <img src="/images/geo6.jpg" alt="..." />
        <img src="/images/geo7.jpg" alt="..." />
      </Carousel>
    </div>
       
      <div className="w-full h-screen relative ">
        <div className="relative h-screen text-center flex flex-col justify-center items-center">
          <button className="hidden lg:block bg-orange-600 hover:bg-orange-500 px-2 py-1 rounded-2xl text-white h-8 w-28 font-black text-xs uppercase cursor-pointer">
            Real Estate
          </button>
          <h1 className="font-normal text-7xl text-center mt-24 text-white capitalize">
            find real estate
            <br /> that suits you
          </h1>
          {/* Icons and Text under Heading */}
         
          {/* Show more button  */}
          <div className="  absolute bottom-8 w-full text-center ">
            <button
              onClick={showMoreBtn}
              className=" text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36"
            >
              show more
            </button>
          </div>
        </div>
      </div>
    </section>
      
      {/* <div className=" h-96 sm:h-96 xl:h-lvh 2xl:h-dvh w-full  bg-no-repeat rounded-b-4xl">

      <Carousel >
        <img src="/images/geo1.jpg" alt="..." />
        <img src="/images/geo2.jpg" alt="..." />
        <img src="/images/geo3.jpg" alt="..." />
        <img src="/images/geo4.jpg" alt="..." />
        <img src="/images/geo5.jpg" alt="..." />
        <img src="/images/geo6.jpg" alt="..." />
        <img src="/images/geo7.jpg" alt="..." />
      </Carousel>
    </div> */}
    </>
    
  );
};

export default Hero;
