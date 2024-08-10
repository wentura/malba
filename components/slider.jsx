"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Slider(
  { data = "ubytovani", klass = "h-32" },
  vyska = "h-32"
) {
  let slides = [];
  if (data === "ubytovani") {
    slides = ["m1", "m2", "m3", "m4", "m5"];
  }
  if (data === "restaurace") {
    slides = ["mr1", "mr2", "mr3", "mr4"];
  }

  return (
    <div className={`${klass}`}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="h-[300] w-[800px] prvniSlider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide}>
            <Image
              src={`/images/${slide}.webp`}
              alt={slide}
              width={600}
              height={400}
              className="object-cover object-center w-full h-full md:block"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
