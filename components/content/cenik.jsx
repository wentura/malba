import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import React from "react";
import { CenikMalbenka, CenikUbytovani } from "../cenikData";
const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function Cenik({ idScroll }) {
  return (
    <div className="py-16 bg-white sm:py-12 lg:py-24" id={idScroll}>
      <div className={`${inter.className} ubrus ubrusOdsazeni`}>
        <h2 className="hadvojka">Ceník</h2>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden bg-gray-100 rounded-lg drop-shadow-lg lg:h-full">
              <Image
                width={600}
                height={800}
                src="/images/malba/12.webp"
                loading="lazy"
                alt="penzion Malba"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="font-bold text-center text-gray-500 md:text-left">
              ubytování
            </p>
            <h1 className="mb-2 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-2 md:text-left">
              penzion Malba
            </h1>
            <p className="mb-4  ">Cena ubytování za osobu a noc bez snídaně:</p>
            <ul className="mb-4">
              {CenikUbytovani.map((cenaM) => {
                return (
                  <li key={cenaM.id} className="">
                    <strong>{cenaM.cena}</strong> Kč - {cenaM.text}
                  </li>
                );
              })}
            </ul>
            <p className="mb-12  ">
              Pro bližší informace nás kontaktujte, rádi Vám uděláme konkrétní
              nabídku.
            </p>
            <p className="font-bold text-center text-gray-500 md:text-left">
              pronájem
            </p>
            <h1 className="mb-2 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-2 md:text-left">
              školící místnost
            </h1>
            <p className="mb-12  ">
              Cena za pronájem je 4.000 Kč denně.
              <br />
              <br />
              Ceny dalších poskytovaných služeb (ozvučení, videoprojekce,
              zajištění speciálních služeb dle přání klienta) budou stanoveny po
              dohodě ohledně jednotlivých konkrétních položek.
            </p>
            <p className="font-bold text-center text-gray-500 md:text-left">
              ubytování
            </p>
            <h1 className="mb-2 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-2 md:text-left">
              chata Malběnka
            </h1>
            <p className="mb-4  ">
              Cena ubytování za <b>celou chatu Malběnka</b> bez snídaně:
            </p>
            <ul className="mb-4">
              {CenikMalbenka.map((cenaM) => {
                return (
                  <li
                    key={cenaM}
                    className=""
                    dangerouslySetInnerHTML={{ __html: cenaM }}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
