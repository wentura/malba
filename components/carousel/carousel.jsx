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
  const slides = ["malba2", "mr7", "mr3"];
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
        <SwiperSlide className="swiperSlideCarousel" key={"slide"}>
          <Image
            src={`/images/${slide}.webp`}
            alt="restaurace penzionu Malba"
            height={400}
            width={600}
            className="object-cover object-center w-full h-full md:block"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
