import Slider from "@/components/slider";
import Image from "next/image";
import React from "react";
export default function Restaurace({ idScroll }) {
  return (
    <div className="py-8 bg-white sm:py-12 lg:py-24" id={idScroll}>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="mb-10 md:mb-16">
          {/* <Image
            src="/images/malba_logo.png"
            width={400}
            height={300}
            className="pb-4 mx-auto text-center invert"
            alt="Malba logo"
          /> */}
          <h2 className="hadvojka">Restaurace penzionu Malba</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2">
            {/* <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[400px]">
              <Image
                width={600}
                height={600}
                // src="/images/restaurace.webp"
                src="/images/mr1.webp"
                loading="lazy"
                alt="restaurace penzionu Malba"
                className="object-cover object-center w-full h-full"
              />
            </div> */}
            <div className="pt-4 pb-8">
              <Slider data="restaurace" klass="pt-8" vyska="h-64" />{" "}
              {/* <p className="mb-2 text-gray-500 sm:mb-4 sm:text-lg">
                Pro skupiny jsme schopni zajistit celodenní stravování: snídaně,
                obědy, večeře, coffeebreaky, rožnění, grilování a rauty.
              </p> */}
            </div>
          </div>
          <div className="order-1 md:pt-4">
            <p className="mb-4 text-gray-500 sm:text-lg">
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
            <p className="text-gray-500 lg:mb-4 sm:text-lg">
              Pro skupiny jsme schopni zajistit celodenní stravování: snídaně,
              obědy, večeře, coffeebreaky, rožnění, grilování a rauty.
            </p>
            <div className="hidden lg:block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[400px]">
              <Image
                width={600}
                height={400}
                // src="/images/restaurace.webp"
                src="/images/mr3.webp"
                loading="lazy"
                alt="restaurace penzionu Malba"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
