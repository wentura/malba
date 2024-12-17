"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Carousel() {
  const slides = ["carousel/1", "carousel/2", "carousel/3"];
  // const slides = ["carousel/1"];

  return (
    <Swiper
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={true}
      modules={[Pagination, Autoplay, Navigation]}
      className="swiperCarousel md:min-h-[400px] lg:min-h-[600px] "
    >
      {slides.map((slide) => (
        <SwiperSlide className="swiperSlideCarousel" key={slide}>
          <Image
            src={`/images/${slide}.webp`}
            alt="Penzion Malba"
            height={800}
            width={1800}
            className=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
