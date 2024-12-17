import Slider from "@/components/slider";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import React from "react";
const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function Restaurace({ idScroll }) {
  return (
    <div className="py-16 bg-white sm:py-12 lg:py-24" id="restaurace">
      <div className={`${inter.className} ubrusOdsazeni ubrus`}>
        <h2 className="hadvojka">Restaurace penzionu Malba</h2>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="my-4">
              <strong>
                Základem stravování je u nás dobrá snídaně podávaná formou
                studeného bufetu
              </strong>{" "}
              s teplými a studenými nápoji, ovocem a zeleninou, uzeninou a sýry,
              cereáliemi a domácím pečivem.{" "}
              <strong>
                Večeře Vám nabídneme a pro skupiny umíme kompletní celodenní
                stravování.
              </strong>
            </p>
            <p className="mb-4">
              Pro skupiny jsme schopni zajistit celodenní stravování: snídaně,
              obědy, večeře, coffeebreaky, rožnění, grilování a rauty.
            </p>
          </div>
          <div className=" bg-gray-100 drop-shadow-lg  mx-auto">
            <Image
              // src="/images/restaurace.webp"
              src="/images/malba/malba2.webp"
              loading="lazy"
              alt="restaurace penzionu Malba"
              width={600}
              height={600}
              className="object-cover object-center h-full w-full rounded-lg md:h-[400px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
