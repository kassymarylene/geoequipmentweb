import { Card } from "flowbite-react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Dialog, DialogPanel, Radio, RadioGroup } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import {
  CheckIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const projectList = [
  {
    imageSrc: "/images/geo55.jpeg",
    title: "LAND SURVEY",
    description: "the process of measuring and mapping out the position, dimensions, and boundaries of a piece of land.",
    href: "#",
  },
  {
    imageSrc: "/images/geo68.jpeg",
    title: "SITE PLAN",
    description: "Detailed layout of a building floor with residential units and common areas.",
    href: "#",
  },
  {
    imageSrc: "/images/geo27.jpeg",
    title: "TURNEL CONSTRUCTION",
   description: "Building turnels which are underground passages used for transportation and mining ",
    href: "#",
  },
  {
    imageSrc: "/images/geo63.jpeg",
    title: "SITE PLAN",
    description: "Larger layout of a residential development with housing units and open spaces.",
    href: "#",
  },
  {
    imageSrc: "/images/geo50.jpeg",
    title: "LAND CLEARING",
    description: "prepare the land for construction by  removing trees, stumps, brush, rocks, and other obstacles from a piece of land.",
    href: "#",
  },
  {
    imageSrc: "/images/geo29.jpeg",
    title: "ROAD CLEARING",
    description: "prepare the road for construction by  removing trees, stumps, brush, rocks, and other obstacles",
    href: "#",
  },
  {
    imageSrc: "/images/geo19.jpeg",
    title: "CART DRAFTING",
    description: "Creating detailed drawings or maps based on the survey data,Creating detailed drawings or maps based on the survey data,this is crucial for architects",
    href: "#",
  },
  {
    imageSrc: "/images/geo71.jpeg",
    title: "SITE PLAN",
    description: " Larger layout of a residential development with housing units and open spaces.",
    href: "#",
  },
  {
    imageSrc: "/images/geo70.jpeg",
    title: "SITE PLAN",
    description: "Detailed layout of a building floor with residential units and common areas.",
    href: "#",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Project = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="projects"  className="bg-white">
      <main>
        <div className="isolate overflow-hidden">
          <div className="flow-root bg-gray-900 py-16 sm:pt-32 lg:pb-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                  Our Various Projects
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
                  These are other projects Geo-equipment consultant carries on like;<br/>
                  tunnel construction,road opening and construction,land surveys and clearing
                </p>
              </div>
              <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                >
                  <ellipse
                    cx={604}
                    cy={512}
                    fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
                    rx={604}
                    ry={512}
                  />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor="#7775D6" />
                      <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="my-11">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 10,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {projectList.map(
                    (item: {
                      imageSrc: string;
                      title: string;
                      description: string;
                      href: string;
                    }) => (
                      <SwiperSlide key={item.imageSrc}>
                        <Card
                          className="max-w-sm"
                          imgAlt="Meaningful alt text for an image that is not purely decorative"
                          imgSrc={item.imageSrc}
                        >
                          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                          </h5>
                          <p className="font-normal text-gray-700 dark:text-gray-400">
                            {item.description}
                          </p>
                        </Card>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;
