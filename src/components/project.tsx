import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const projectImages = [
  "/images/geo55.jpeg",
  "/images/geo68.jpeg",
  "/images/geo27.jpeg",
  "/images/geo63.jpeg",
  "/images/geo50.jpeg",
  "/images/geo29.jpeg",
  "/images/geo19.jpeg",
  "/images/geo71.jpeg",
  "/images/geo72.jpeg",
];

const Project = () => {
  const t = useTranslations("project");
  const projectItems = t.raw("items") as Array<{
    title: string;
    description: string;
    status: "ongoing" | "completed";
  }>;
  return (
    <section
      id="projects"
      data-reveal
      className="reveal bg-gradient-to-br from-brand-900 via-brand-900 to-brand-800 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-accent/80">
            {t("label")}
          </p>
          <h2 className="text-5xl font-semibold text-white sm:text-6xl">
            {t("heading")}
          </h2>
          <p className="text-base font-medium text-white/70">{t("subheading")}</p>
        </div>

        <div className="relative rounded-[32px] border border-white/20 bg-slate-950 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.9)]">
          <Swiper
            effect={"coverflow"}
            grabCursor
            centeredSlides
            slidesPerView={"auto"}
            loop
            speed={900}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 18,
              stretch: 0,
              depth: 90,
              modifier: 1,
              slideShadows: false,
            }}
            pagination
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {projectItems.map((item, index) => (
              <SwiperSlide key={`${item.title}-${index}`}>
                <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-[0_30px_70px_rgba(2,6,23,0.65)] transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={projectImages[index] ?? projectImages[0]}
                      alt={item.title}
                      fill
                      className="object-cover object-[center_20%] transition duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  </div>
                  <div className="space-y-3 p-5 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">
                      {t("label")}
                    </p>
                    <h5 className="text-2xl font-semibold leading-tight text-white">{item.title}</h5>
                    <p className="text-base text-white/75">{item.description}</p>
                    <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                      {item.status === "completed" ? t("status.completed") : t("status.ongoing")}
                    </span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
