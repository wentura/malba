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

export default function CarouselMobilni() {
  const slides = ["carousel/m1", "carousel/m2", "carousel/m3"];

  return (
    <Swiper
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={true}
      modules={[Pagination, Autoplay, Navigation]}
      className="swiperCarousel  max-h-64"
    >
      {slides.map((slide) => (
        <SwiperSlide className="swiperSlideCarousel" key={slide}>
          <Image
            src={`/images/${slide}.webp`}
            alt="Penzion Malba"
            height={400}
            width={600}
            className="object-bottom"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
