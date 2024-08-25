import Link from "next/link";
import React from "react";
import { Content } from "./contentData";
export default function StrucneVyhody() {
  return (
    <div
      // className="hidden py-6 bg-hotel sm:py-8 lg:pt-12 md:-mb-24 lg:-mb-52 xl:-mb-96 md:block"
      className="hidden py-44 bg-hotel md:py-56 md:block md:mb-12 lg:mb-64 lg:py-16 md:mt-8"
      id="malba"
    >
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {Content[1].services.map((sluzby) => {
            return (
              <Link
                href={sluzby.tellMeMoreRoute}
                key={sluzby.title}
                className="relative hidden px-8 py-4 align-middle transition duration-300 ease-in-out shadow-xl bg-kartaVyhod rounded-xl lg:block lg:top-60 xl:top-64 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-lg md:h-16 md:w-16">
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
          <div className="relative flex-col justify-center hidden px-8 py-4 lg:flex lg:items-center rounded-xl lg:top-60 xl:top-64">
            <div className="px-8 py-4 text-center transition duration-500 ease-in-out rounded-lg shadow-xl bg-mabla-20 hover:bg-mabla-20 hover:shadow-2xl hover:scale-105">
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
