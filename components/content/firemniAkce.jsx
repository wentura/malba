import Image from "next/image";
import React from "react";
export default function FiremniAkce({ idScroll }) {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-24" id={idScroll}>
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
            <div className="h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image
                width={640}
                height={480}
                src="/images/malba/gril.webp"
                loading="lazy"
                alt="grilování, penzion Malba"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                Restaurace penzionu není otevřena pro veřejnost a firmy tu
                najdou dostatek klidu a soukromí.
              </strong>
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>Kapacita hlavní školicí místnosti je max. 40 osob</strong>{" "}
              a nachází se v patře nad restaurací, kterou lze také využít až pro
              60 osob. Uspořádání místností je variabilní a lze je vybavit
              didaktickou technikou jako je dataprojektor, videoprojektor,
              diaprojektor, videorekordér, DVD přehrávač, ozvučovací technika či
              flipchart. Pro menší týmy je možné využít i další menší prostory
              penzionu.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                Pro skupiny jsme schopni zajistit celodenní stravování
              </strong>
              : snídaně, obědy, večeře, coffeebreaky, rožnění, grilování a
              rauty.
              <strong>
                Restaurace je otevřena pouze pro hosty penzionů Malba a Milča.
              </strong>
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Poradíme Vám s procházkou nebo i s výběrem lokality pro outdoorové
              aktivity. Nabízíme exkluzivní noční návštěvy hradů Kokořín a
              Houska.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Jsme schopni s našimi partnery zajistit další aktivity jako
              <strong>
                paintball, skalní lezení, stromo lezení nebo i připravit celý
                program
              </strong>{" "}
              dle individuálních požadavků.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Pro svatby standardně nabízíme svatební víkendy, které kalkulujeme
              individuálně podle přání hostů.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                Hostiny připravujeme formou rautu nebo svatební tabule
              </strong>
              , která je omezena maximálním počtem 40 osob. K dispozici je celý
              penzion včetně teras, jeskyně a ohniště.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
