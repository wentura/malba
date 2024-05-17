import Link from "next/link";
import React from "react";
import { Content } from "./contentData";
export default function StrucneVyhody() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 hidden md:block">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
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
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-50 text-white shadow-lg md:h-20 md:w-20 md:rounded-xl">
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

            // return (
            //   <div
            //     key={sluzby.title}
            //     className="px-4 pt-4 pb-0 border-l-8 md:border-l-9 border-l-gray-100 flex flex-col justify-between"
            //   >
            //     <div>
            //       <h3 className="mb-2 text-lg font-semibold text-gray-700 md:text-xl">
            //         {sluzby.title}
            //       </h3>
            //       <div
            //         className="text-gray-500"
            //         dangerouslySetInnerHTML={{
            //           __html: sluzby.shortContent,
            //         }}
            //       />
            //     </div>
            //     <div className="text-right pb-2 pt-4">
            //       <Link href={sluzby.tellMeMoreRoute} className="odkaz">
            //         {sluzby.tellMeMore}
            //       </Link>
            //     </div>
            //   </div>
            // );
          })}

          {/* question - end */}
        </div>
      </div>
    </div>
  );
}
