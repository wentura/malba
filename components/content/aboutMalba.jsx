import Image from "next/image";
import React from "react";

export default function AboutMalba() {
  return (
    <div
      className={`w-full max-w-screen-xl px-4 mx-auto md:px-8 flex gap-8 flex-col lg:flex-row py-16`}
    >
      {/* <Image
        src="/images/malba_logo.png"
        width={300}
        height={200}
        className="mx-auto text-center invert object-scale-down w-70"
        alt="Penzion Malba"
      /> */}
      <div>
        <h1 className="hadvojka mb-8">Penzion Malba <br />ubytování v srdci Kokořínska</h1>
        <p className="">
          <strong className="font-black">Penzion Malba</strong> s restaurací, které navazuje na dlouhou
          tradici pohostinství pod hradem Kokořín v srdci CHKO Kokořínsko.
          <br />S kapacitou <strong>31 lůžek v 11 pokojích</strong> s vlastními
          koupelnami a exklusivním skalním domečkem Malběnka,
          který je pro 3 osoby, se jedná o jedinečné ubytování s krásnými
          výhledy.
          <br />
          Restaurace s barem pro hosty penzionů Malba a Milča s
          kapacitou 60 míst, prostornou venkovní terasou, ohništěm a vinárnou ve
          skále nabídne nepřeberné množství chutí a vůní.
        </p>
      </div>
    </div>
  );
}
