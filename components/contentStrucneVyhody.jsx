import Link from "next/link";
import React from "react";
import { Content } from "./contentData";
export default function StrucneVyhody() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            {Content[0].title}
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            {Content[0].shortContent}
          </p>
        </div>
        {/* text - end */}
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          {/* question - start */}
          {Content[1].services.map((sluzby) => {
            return (
              <div
                key={sluzby.title}
                className="px-4 pt-4 pb-0 border-l-8 md:border-l-9 border-l-gray-100 flex flex-col justify-between"
              >
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-700 md:text-xl">
                    {sluzby.title}
                  </h3>
                  <div
                    className="text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: sluzby.shortContent,
                    }}
                  />
                </div>
                <div className="text-right pb-2 pt-4">
                  <Link href={sluzby.tellMeMoreRoute} className="odkaz">
                    {sluzby.tellMeMore}
                  </Link>
                </div>
              </div>
            );
          })}

          {/* question - end */}
        </div>
      </div>
    </div>
  );
}
