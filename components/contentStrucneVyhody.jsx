import Link from "next/link";
import React from "react";
import { Content } from "./contentData";
export default function StrucneVyhody() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 hidden md:block" id="malba">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          {/* feature - start */}
          {/* feature - end */}
          {/* question - start */}
          {Content[1].services.map((sluzby) => {
            return (
              <div
                className="flex flex-col items-center bg-white py-4 px-8 rounded-xl relative md:-top-24 lg:-top-32 xl:-top-40 shadow-xl"
                key={sluzby.title}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg md:h-20 md:w-20">
                  <img src={sluzby.icon} className="p-2" />
                </div>
                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  {sluzby.title}
                </h3>
                <div
                  className="mb-2 text-center text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: sluzby.shortContent,
                  }}
                ></div>
                <Link href={sluzby.tellMeMoreRoute} className="odkaz self-end">
                  {sluzby.tellMeMore}
                </Link>
              </div>
            );
          })}
          <div className="flex flex-col justify-center items-center py-4 px-8 rounded-xl relative md:-top-24 lg:-top-32 xl:-top-40">
            <div className="px-8 py-4 bg-mabla-50 text-center text-gray-900 rounded-xl transition delay-300 hover:bg-mabla-100 shadow-xl hover:shadow-md">
              <Link href="/kontakt" className="text-2xl">
                Kontaktujte nás
              </Link>
            </div>
          </div>
          {/* question - end */}
        </div>
        <p className="mb-4 text-gray-500 sm:text-lg">
          Penzion Malba je ubytovací zařízení s restaurací sloužící pouze hostům
          penzionu, které navazuje na dlouhou tradici pohostinství pod hradem
          Kokořín v srdci CHKO Kokořínsko.
          <br />
          Kapacita je 31 lůžek v 11 pokojích s vlastními koupelnami a do areálu
          patří i exklusivní skalní domeček Malběnka, který je pro 3 osoby.
          <br />
          Restaurace s barem je pouze pro hosty penzionů Malba a Milča, kapacita
          je 60 míst, 25 míst venkovní terasa, 48 míst posezení u ohniště a
          vinárna ve skále 15 osob.
        </p>
      </div>
    </div>
  );
}
