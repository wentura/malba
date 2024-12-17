import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import React from "react";
const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function Contact() {
  return (
    <div className="py-16 bg-white sm:py-12 lg:py-24" id="kontakt">
      <div className={`${inter.className} ubrus ubrusOdsazeni`}>
        <h2 className="hadvojka">Kontakt</h2>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="md:pt-8">
            <h1 className="mb-4 text-2xl font-bold text-left text-gray-800 sm:text-3xl md:mb-6">
              Penzion Malba
            </h1>
            <ul className="mb-6   md:mb-8">
              <li>Kokořínský Důl 38</li>
              <li>277 23</li>
              <li>Kokořín</li>
            </ul>
            <ul className="mb-6   md:mb-8">
              <li>
                telefon: 
                <a href="tel:+420603461723" className="odkaz">
                  +420 603 461 723
                </a>{" "}
                <small>(8:00-20:00hod.)</small>
              </li>
              <li>
                email: 
                <a href="mailto:malba@kokorin.cz" className="odkaz">
                  malba@kokorin.cz
                </a>
              </li>
            </ul>
            {/* <Image
              src="/images/malba_logo.png"
              width={400}
              height={300}
              className="pb-4 mx-auto text-center invert"
              alt="Malba logo"
            /> */}
          </div>
          <div className="md:pt-8">
            <h2 className="mb-2 text-xl font-semibold text-center text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              <a href="mailto:malba@kokorin.cz" className="odkaz">
                Rezervace zasílejte na email malba@kokorin.cz
              </a>
            </h2>
            <p className="mt-8 mb-2 md:mb-2">Uveďte prosím vždy tyto údaje:</p>
            <ul className="pl-6 list-disc">
              <li>vaše jméno a příjmení</li>
              <li>telefon a email</li>
              <li>počet osob a pokojů</li>
              <li>datum příjezdu </li>
              <li>datum odjezdu</li>
            </ul>
            <p className="my-6 md:my-8">
              Pokud potřebujete zařídit odvoz, dejte nám vědět určitě Vám ho
              pomůžeme zařídit. Disponujeme vlastním vozem Volkswagen
              Transporter 7 osob + řidič.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 text-center md:my-16">
        <iframe
          className="border-0 mx-auto min-h-[500px] max-w-screen-3xl"
          src="https://frame.mapy.cz/s/dadapegato"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
