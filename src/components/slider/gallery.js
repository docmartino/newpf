// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./gallery-style.css";

import img01 from "./img/01.jpeg";
import img02 from "./img/02.jpeg";
import img03 from "./img/03.jpeg";
import img04 from "./img/04.jpeg";
import img05 from "./img/05.jpeg";
import img06 from "./img/06.jpeg";
import img07 from "./img/07.jpeg";
import img08 from "./img/08.jpeg";
import img09 from "./img/img.jpg";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Gallery() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img01} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={img02} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={img03} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={img04} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={img05} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={img06} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={img07} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={img08} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={img09} alt="img"/></SwiperSlide>
      </Swiper>
    </>
  );
}
