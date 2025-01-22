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
  const slides = [
    {
      img: "carousel/m1",
      title: "",
      logo: true,
    },
    { img: "carousel/m2", title: "primo pod hradem Kokořín" },
    { img: "carousel/m3", title: "v srdci CHKO Kokořínsko" },
  ];

  return (
    <Swiper
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      navigation={false}
      pagination={false}
      modules={[Pagination, Autoplay, Navigation]}
      className="swiperCarousel  max-h-44"
    >
      {slides.map((slide) => (
        <SwiperSlide className="swiperSlideCarousel relative" key={slide}>
          <Image
            src={`/images/${slide.img}.webp`}
            alt="Penzion Malba"
            height={600}
            width={400}
            className="absolute object-cover object-bottom w-full h-full z-0"
          />
          <div className="z-10 bottom-2 absolute">
            {slide.logo && (
              <Image
                src="/images/malba_logo.png"
                alt="penzion Malba - logo"
                width={150}
                height={120}
                className="h-auto max-h-44 max-w-[200px]"
              />
            )}
            <h2 className="peknyPismo text-white text-xl">{slide.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
