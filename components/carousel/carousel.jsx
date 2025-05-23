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
import { Autoplay } from "swiper/modules";

export default function Carousel() {
  const slides = [
    {
      img: "carousel/1",
      title: "",
      logo: true,
    },
    { img: "carousel/2", title: "přímo pod hradem Kokořín" },
    { img: "carousel/3", title: "v srdci CHKO Kokořínsko" },
  ];

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={false}
      pagination={false}
      modules={[Autoplay]}
      //   modules={[Pagination, Autoplay, Navigation]}
      className="swiperCarousel md:min-h-[400px] lg:min-h-[600px] "
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="swiperSlideCarousel relative" key={index}>
          <Image
            src={`/images/${slide.img}.webp`}
            alt="Penzion Malba"
            height={800}
            width={1800}
            className="absolute object-cover object-center w-full h-full z-0"
          />
          <div className="z-10 bottom-2 absolute">
            {slide.logo && (
              <Image
                src="/images/malba_logo.png"
                alt="penzion Malba - logo"
                width={400}
                height={320}
                className="h-auto"
              />
            )}
            <h2 className="hadvojka text-white">{slide.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
