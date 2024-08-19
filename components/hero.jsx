import Image from "next/image";

import React from "react";
export default function Hero() {
  return (
    <div className="mx-auto bg-hotel min-h-96 md:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[700px] hidden md:block">
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center max-w-xl pt-2 pb-0 text-center sm:pb-16 lg:pb-32 lg:pt-32 xl:pt-52">
          {/* <Image
            src="/images/malba_logo.png"
            height={600}
            width={800}
            className="h-[300px] w-[700px] drop-shadow-lg shadow-slate-950 "
            alt="Malba penzion logo"
          /> */}
        </div>
      </section>
    </div>
  );
}
