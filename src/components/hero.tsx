import { Carousel } from "flowbite-react";
import Image from "next/image";

const Hero = ({ address, phone, email }: any) => {
  const showMoreBtn = () => {
    if (document) {
      document
        .getElementById("about-container")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative flex flex-col w-full h-screen">
        <div className="relative h-96 sm:h-96 xl:h-lvh 2xl:h-dvh w-full bg-no-repeat rounded-b-4xl">
          <Carousel>
            <Image
              className="w-full object-cover"
              src={"/images/geo1.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo2.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo3.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo4.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo5.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo6.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo7.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo11.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo24.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo30.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo19.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className="w-full object-cover"
              src={"/images/geo12.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />
          </Carousel>

          {/* Slogan Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            &rdquo;From Equipment to Expertise: We Make Projects Possible&rdquo;
            </h2>
          </div>
        </div>

        {/* Hero Text */}
        <div className="absolute w-full h-screen flex flex-col items-center justify-center text-center mt-24">
          <div>
            <h1 className="font-medium text-2xl md:text-4xl capitalize text-white">
            Real Estate, Rental and Sales of Public work Equipment, Contracts,
            Negotiation, <br></br> Topographic Studies, Public Procurement, General Trade
            </h1>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
