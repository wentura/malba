import Image from "next/image";
import React from "react";
export default function FiremniAkce() {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-24" id="firemniakcesvatby">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          {/* <Image
            src="/images/malba_logo.png"
            width={400}
            height={300}
            className="invert text-center mx-auto pb-4"
            alt="Malba logo"
          /> */}
          <h2 className="hadvojka">Firemní, skupinové akce a svatby</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="mb-4 text-gray-500 sm:text-lg">
              Základem stravování je u nás dobrá snídaně podávaná formou
              studeného bufetu s teplými a studenými nápoji, ovocem a zeleninou,
              uzeninou a sýry, cereáliemi a domácím pečivem. Večeře Vám
              nabídneme a pro skupiny umíme kompletní celodenní stravování.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Pro skupiny jsme schopni zajistit celodenní stravování: snídaně,
              obědy, večeře, coffeebreaky, rožnění, grilování a rauty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
