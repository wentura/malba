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

  return (
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={true}
      modules={[Pagination, Autoplay, Navigation]}
      className="swiperCarousel"
    >
      {slides.map((slide) => (
        <SwiperSlide className="swiperSlideCarousel" key={slide}>
          <Image
            src={`/images/${slide}.webp`}
            alt="Penzion Malba"
            height={600}
            width={1800}
            className=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
