
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
//import "swiper/css";
//import "swiper/css/pagination"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';
import MySlide from "./Component/MySlide";

// install Swiper modules
SwiperCore.use([Pagination]);

const products=[{name:'a'},{name:'b'}]
export default function App() {
  
  
  
  return (
    <>
    <Swiper slidesPerView={1} spaceBetween={10} pagination={{
  "clickable": true
}} breakpoints={{
  "@0.00": {
    "slidesPerView": 1,
    "spaceBetween": 10
  },
  "@0.75": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "@1.00": {
    "slidesPerView": 3,
    "spaceBetween": 40
  },
  "@1.50": {
    "slidesPerView": 4,
    "spaceBetween": 50
  }
}} className="mySwiper">
  
  {/* {[1,2,3,5,6,7,8,9,10].map((a)=><SwiperSlide><MySlide index={a} /></SwiperSlide>)} */}
   {products.map((a)=><SwiperSlide><MySlide index={a.name} /></SwiperSlide>)} 
  </Swiper>
    </>
  )
}