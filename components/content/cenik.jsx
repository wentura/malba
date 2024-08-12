import Image from "next/image";
import React from "react";
import { CenikMalbenka, CenikUbytovani } from "../cenikData";
export default function Cenik({ idScroll }) {
  return (
    <div className="py-8 bg-white sm:py-12 lg:py-24" id={idScroll}>
      <div className="py-24 mb-10 md:mb-16 ubrus drop-shadow-lg">
        <h2 className="hadvojka">Ceník</h2>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden bg-gray-100 rounded-lg drop-shadow-lg lg:h-full">
              <Image
                width={600}
                height={800}
                src="/images/m1/12.webp"
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
            <p className="mb-4 text-gray-500 sm:text-lg">
              Cena ubytování za osobu a noc bez snídaně:
            </p>
            <ul className="mb-4">
              {CenikUbytovani.map((cenaM) => {
                return (
                  <li key="a" className="text-gray-500">
                    <strong>{cenaM.cena}</strong> Kč - {cenaM.text}
                  </li>
                );
              })}
            </ul>
            <p className="mb-12 text-gray-500 sm:text-lg">
              Pro bližší informace nás kontaktujte, rádi Vám uděláme konkrétní
              nabídku.
            </p>
            <p className="font-bold text-center text-gray-500 md:text-left">
              pronájem
            </p>
            <h1 className="mb-2 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-2 md:text-left">
              školící místnost
            </h1>
            <p className="mb-12 text-gray-500 sm:text-lg">
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
            <p className="mb-4 text-gray-500 sm:text-lg">
              Cena ubytování za <b>celou chatu Malběnka</b> bez snídaně:
            </p>
            <ul className="mb-4">
              {CenikMalbenka.map((cenaM) => {
                return (
                  <li
                    key="a"
                    className="text-gray-500"
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
