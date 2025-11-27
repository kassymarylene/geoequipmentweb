import { Card } from "flowbite-react";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { useTranslations } from "next-intl";

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
    imageSrc: "/images/geo72.jpeg",
    title: "SITE PLAN",
    description: "Detailed layout of a building floor with residential units and common areas.",
    href: "#",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Project = () => {
  const t = useTranslations("project");
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-brand-900 via-brand-900 to-brand-800 py-16 text-white"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-300">
            {t("label")}
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            {t("heading")}
          </h2>
          <p className="text-sm text-white/70">{t("subheading")}</p>
        </div>

        <div className="relative rounded-[32px] border border-white/20 bg-slate-950 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.9)]">
          <Swiper
            effect={"coverflow"}
            grabCursor
            centeredSlides
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            }}
            pagination
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {projectList.map((item) => (
              <SwiperSlide key={item.imageSrc}>
                <Card
                  className="max-w-sm bg-slate-900/80"
                  imgAlt={item.title}
                  imgSrc={item.imageSrc}
                >
                  <h5 className="text-2xl font-semibold leading-tight text-white">{item.title}</h5>
                  <p className="mt-2 text-sm text-white/80">{item.description}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                  {item.href === "#" ? t("status.ongoing") : t("status.completed")}
                  </p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
