"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";

import { EffectCards } from "swiper/modules";

export default function Slider({ data = "ubytovani", klass = "h-32" }) {
  let slides = [];
  if (data === "ubytovani") {
    slides = [
      "m5",
      "m4",
      "m3",
      "m2",
      "m1",
      "malba2",
      "mr7",
      "mr6",
      "mp8",
      "mp5",
      "mp1",
      "mp3",
      "mp2",
    ];
  }
  if (data === "restaurace") {
    slides = ["mr1", "mr2", "mr3", "mr4"];
  }

  return (
    <div className={`${klass}`}>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide} className="slider-slide">
            <Image
              src={`/images/${slide}.webp`}
              alt="restaurace penzionu Malba"
              height={600}
              width={500}
              className="object-cover object-center w-full h-full md:block"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
