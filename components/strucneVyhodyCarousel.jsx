import { Bebas_Neue } from "next/font/google";
import React from "react";
import Carousel from "./carousel/carousel";
import CarouselMobilni from "./carousel/carouselMobil.jsx";
const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function StrucneVyhodyCarousel() {
  return (
    <div className="my-16">
      <div className="hidden md:block">
        <Carousel />
      </div>
      <div className="block md:hidden">
        <CarouselMobilni />
      </div>
    </div>
  );
}
