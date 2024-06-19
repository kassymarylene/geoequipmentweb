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
      >   
         OUR VERIOUS PROJECTS      
        <SwiperSlide>
         <div>
         <img src="geo5.jpg" />
         </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="geo27.jpg" />
           BARAGE
        </SwiperSlide>
        <SwiperSlide>
          <img src="geo28.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="geo16.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="geo50.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="geo51.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="geo55.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="geo53.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="geo52.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
      )
    
}

export default Project;