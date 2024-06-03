import React from "react";
import { CenikMalbenka, CenikUbytovani } from "../cenikData";
export default function Cenik({ idScroll }) {
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
          <h2 className="hadvojka">Ceník</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="text-center font-bold text-gray-500 md:text-left">
              ubytování
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-2 md:text-left">
              penzion Malba
            </h1>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Cena ubytování za osobu a noc bez snídaně:
            </p>
            <ul className="mb-4">
              {CenikUbytovani.map((cenaM) => {
                return (
                  <li key="a" className="text-gray-500">
                    {cenaM}
                  </li>
                );
              })}
            </ul>
            <p className="mb-12 text-gray-500 sm:text-lg">
              Pro bližší informace nás kontaktujte, rádi Vám uděláme konkrétní
              nabídku.
            </p>
            <p className="text-center font-bold text-gray-500 md:text-left">
              pronájem
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-2 md:text-left">
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
            <p className="text-center font-bold text-gray-500 md:text-left">
              ubytování
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-2 md:text-left">
              chata Malběnka
            </h1>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Cena ubytování za <b>celou chatu Malběnka</b> bez snídaně:
            </p>
            <ul className="mb-4">
              {CenikMalbenka.map((cenaM) => {
                return (
                  <li key="a" className="text-gray-500">
                    {cenaM}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
