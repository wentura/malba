import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import React from "react";
import Cta from "../cta";
const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function FiremniAkce({ idScroll }) {
  return (
    <div className="py-16 bg-white" id={idScroll}>
      <div className={`${inter.className} ubrusOdsazeni ubrus `}>
        <h2 className="hadvojka">Firemní, skupinové akce a svatby</h2>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-full overflow-hidden bg-gray-100 rounded-lg drop-shadow-lg">
              <Image
                width={640}
                height={480}
                src="/images/mic/restaurace.webp"
                loading="lazy"
                alt="grilování, penzion Malba"
                className="object-cover object-center w-full h-full "
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="mb-4  ">
              <strong>
                Restaurace penzionu není otevřena pro veřejnost a firmy tu
                najdou dostatek klidu a soukromí.
              </strong>
            </p>
            <p className="mb-4  ">
              <strong>Kapacita hlavní školicí místnosti je max. 40 osob</strong>{" "}
              a nachází se v patře nad restaurací, kterou lze také využít až pro
              60 osob. Uspořádání místností je variabilní a lze je vybavit
              didaktickou technikou jako je dataprojektor, videoprojektor,
              diaprojektor, videorekordér, DVD přehrávač, ozvučovací technika či
              flipchart. Pro menší týmy je možné využít i další menší prostory
              penzionu.
            </p>
            <p className="mb-4  ">
              <strong>
                Pro skupiny jsme schopni zajistit celodenní stravování
              </strong>
              : snídaně, obědy, večeře, coffeebreaky, rožnění, grilování a
              rauty.
              <strong>
                Restaurace je otevřena pouze pro hosty penzionů Malba a Milča.
              </strong>
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-4 lg:grid-cols-2 lg:gap-12 md:mt-8 lg:mt-12">
          <div className="h-full overflow-hidden bg-gray-100 rounded-lg lg:order-2 drop-shadow-lg">
            <Image
              width={640}
              height={480}
              src="/images/mic/msp2.webp"
              loading="lazy"
              alt="grilování, penzion Malba"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="md:pt-4 lg:pt-8">
            <p className="mb-4  ">
              Poradíme Vám s procházkou nebo i s výběrem lokality pro outdoorové
              aktivity. Nabízíme exkluzivní noční návštěvy hradů Kokořín a
              Houska.
            </p>
            <p className="mb-4  ">
              Jsme schopni s našimi partnery zajistit další aktivity jako{" "}
              <strong>
                paintball, skalní lezení, stromo lezení nebo i připravit celý
                program
              </strong>{" "}
              dle individuálních požadavků.
            </p>
            <p className="mb-4  ">
              Pro svatby standardně nabízíme svatební víkendy, které kalkulujeme
              individuálně podle přání hostů.
            </p>
            <p className="mb-4  ">
              <strong>
                Hostiny připravujeme formou rautu nebo svatební tabule
              </strong>
              , která je omezena maximálním počtem 40 osob. K dispozici je celý
              penzion včetně teras, jeskyně a ohniště.
            </p>
            <Cta />
          </div>
        </div>
      </div>
    </div>
  );
}
