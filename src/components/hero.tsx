// import heroBack from "../../public/next.svg";
import { Carousel } from "flowbite-react";
import Image, { StaticImageData } from "next/image";

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
      <section className="flex flex-col w-full h-screen ">
        <div className=" relative  h-96 sm:h-96 xl:h-lvh 2xl:h-dvh w-full  bg-no-repeat rounded-b-4xl">
          <Carousel className="">
            <Image
              className=" w-full object-contain"
              src={"/images/geo1.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className=" w-full object-contain"
              src={"/images/geo2.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className=" w-full object-contain"
              src={"/images/geo3.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className=" w-full object-contain"
              src={"/images/geo4.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className=" w-full object-contain"
              src={"/images/geo5.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className=" w-full object-contain"
              src={"/images/geo6.jpg"}
              alt="house image"
              width={512}
              height={1}
            />
            <Image
              className=" w-full object-contain"
              src={"/images/geo7.jpg"}
              alt="house image"
              width={512}
              height={1}
            />

            <Image
              className=" w-full object-contain"
              src={"/images/geo11.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />

            <Image
              className=" w-full object-contain"
              src={"/images/geo24.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />

            <Image
              className=" w-full object-contain"
              src={"/images/geo25.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />

            <Image
              className=" w-full object-contain"
              src={"/images/geo30.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />

            <Image
              className=" w-full object-contain"
              src={"/images/geo19.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />

            <Image
              className=" w-full object-contain"
              src={"/images/geo12.jpeg"}
              alt="house image"
              width={512}
              height={1}
            />
          </Carousel>
        </div>

        <div className="w-full absolute h-screen ">
          <div className=" h-screen text-center flex flex-col justify-center items-center">
            <div className="">
              <h1 className="font-medium text-2xl text-center mt-24 capitalize">
                GEO-EQUIPEMENT CONSULTANT COVERS
                <br />
                <span className="block mt-4text-gray-800	">Real State</span>
                <span className="block mt-2">
                  Renting and Selling of Construction Equipment
                </span>
                <span className="block mt-2">Constracts</span>
                <span className="block mt-2">Negotiation</span>
                <span className="block mt-2">
                  Topographic Studies and Performance of Public Procurement
                </span>
                <span className="block mt-2">General Trade</span>
              </h1>
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
