import React from "react";
import Carousel from "./carousel/carousel";
import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function StrucneVyhodyCarousel({ klass }) {
  return (
    <div className={klass}>
      <div className="absolute z-20 flex justify-center w-full text-3xl text-center text-white top-56">
        <div
          className={`${inter.className} shadow-lg bg-header max-w-fit px-4 py-2 rounded-md`}
        >
          exkluzivní ubytování v<br />
          srdci Kokořínska
        </div>
      </div>
      <Carousel />
    </div>
  );
}
