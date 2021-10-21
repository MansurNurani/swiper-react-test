import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import MySlide from "./MySlide";

// Import Swiper styles
//import 'swiper/css';

export default () => {
  return (
    <Swiper
      width="400px"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        [1, 2, 3].map((a) => {
          <SwiperSlide><MySlide index={a} /></SwiperSlide>
        })
      }
      <SwiperSlide><MySlide index={1} /></SwiperSlide>
      <SwiperSlide><MySlide index={2} /></SwiperSlide>
      <SwiperSlide><MySlide index={3} /></SwiperSlide>
      <SwiperSlide><MySlide index={4} /></SwiperSlide>
    </Swiper>
  );
};