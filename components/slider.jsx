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
      "malba/m3",
      "malbenka/m3",
      "malba/ml",
      "pokoje/mr5",
      "pokoje/mp8",
      "pokoje/mr7",
      "pokoje/mp1",
      "malbenka/m1",
      "malbenka/m2",
      "malbenka/7",
      "koko/5",
    ];
  }
  if (data === "restaurace") {
    slides = [
      "mic/restaurace",
      "mic/mr3",
      "mic/ms2",
      "mic/3",
      "mic/mr1",
      "mic/gril",
      "mic/g1",
    ];
  }

  return (
    <div className={`${klass}`}>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="overflow-hidden slider"
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
