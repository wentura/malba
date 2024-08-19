import Link from "next/link";
import React from "react";
import { Content } from "./contentData";
export default function StrucneVyhody() {
  return (
    <div
      className="hidden py-6 bg-white sm:py-8 lg:pt-12 md:-mb-24 lg:-mb-52 xl:-mb-96 md:block"
      id="malba"
    >
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          {Content[1].services.map((sluzby) => {
            return (
              <Link
                href={sluzby.tellMeMoreRoute}
                key={sluzby.title}
                className="relative px-8 py-4 align-middle transition duration-300 ease-in-out shadow-lg bg-kartaVyhod rounded-xl md:-top-24 lg:-top-56 xl:-top-96 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg md:h-20 md:w-20">
                    <img src={sluzby.icon} className="p-2" alt={sluzby.title} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-center md:text-xl">
                    {sluzby.title}
                  </h3>
                  <div
                    className="mb-2 text-left text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: sluzby.shortContent,
                    }}
                  ></div>
                </div>
              </Link>
            );
          })}
          <div className="relative flex flex-col items-center justify-center px-8 py-4 rounded-xl md:-top-24 lg:-top-56 xl:-top-96">
            <div className="px-8 py-4 text-center transition duration-500 ease-in-out rounded-lg shadow-lg bg-mabla-20 hover:bg-mabla-70 hover:shadow-2xl hover:scale-125">
              <Link
                href="/kontakt"
                className="text-2xl text-mabla-300 hover:text-mabla-400"
              >
                Rezervujte nyní
              </Link>
            </div>
          </div>
          {/* question - end */}
        </div>
      </div>
    </div>
  );
}
