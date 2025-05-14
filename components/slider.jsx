"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./carousel/carousel.css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Slider({ data = "ubytovani" }) {
  let slides = [];
  if (data === "ubytovani") {
    slides = [
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1747262134/Kamil/W45A7933.webp",
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1747262137/Kamil/W45A8111.webp",
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1747262134/Kamil/W45A7919.webp",
      "https://res.cloudinary.com/dam7wdzvx/image/upload/v1747262138/Kamil/W45A8113.webp",
      //   "malba/m3",
      //   "malbenka/m3",
      //   "malba/ml",
      //   "pokoje/mr5",
      //   "pokoje/mp8",
      //   "pokoje/mr7",
      //   "pokoje/mp1",
      //   "malbenka/m1",
      //   "malbenka/m2",
      //   "malbenka/7",
      //   "koko/5",
    ];
  }
  // if (data === "restaurace") {
  //   slides = [
  //     "mic/restaurace",
  //     "mic/mr3",
  //     "mic/ms2",
  //     "mic/3",
  //     "mic/mr1",
  //     "mic/gril",
  //     "mic/g1",
  //   ];
  // }

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={false}
      pagination={false}
      //   modules={[Pagination, Autoplay, Navigation]}
      modules={[Autoplay]}
      className="swiperUbytovani max-h-[400px] rounded-lg"
    >
      {slides.map((slide) => (
        <SwiperSlide className="swiperSlideCarouselUbytovani" key={slide}>
          <Image
            // src={`/images/${slide}.webp`}
            src={`${slide}`}
            alt="Penzion Malba"
            height={600}
            width={600}
            className="object-cover object-center w-full h-full rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
