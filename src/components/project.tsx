import { Card } from "flowbite-react";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination , Autoplay} from 'swiper/modules';

const Project = () => {

    return (
        <div>
           <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
      >    OUR VERIOUS PROJECTS      
        <SwiperSlide>
         <div>
         <img src="/images/geo5.jpg" />
          LAND SURVEY
         </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/geo28.jpeg" />
           TURNEL
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/geo27.jpeg" />
           TURNEL
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/geo11.jpeg" />
          PROJECT OUT OF COUNTRY
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/geo50.jpeg" />
          ROAD OPENING
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/geo51.jpeg" />
          LAND CLEARING
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/geo55.jpeg" />
          LAND SURVEY
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/geo53.jpeg" />
          ROAD CONSTRUCTION
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/geo12.jpeg" />
          HOUSE COMPLITION
        </SwiperSlide>
      </Swiper>
        </div>
      )
    
}

export default Project;