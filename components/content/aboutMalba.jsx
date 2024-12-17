import Image from "next/image";
import React from "react";

export default function AboutMalba() {
  return (
    <div
      className={`max-w-screen-xl px-4 mx-auto md:px-8 flex gap-8 flex-col lg:flex-row`}
    >
      {/* <Image
        src="/images/malba_logo.png"
        width={300}
        height={200}
        className="mx-auto text-center invert object-scale-down w-70"
        alt="Penzion Malba"
      /> */}
      <div>
        <h2 className="hadvojka mb-8">Útulné ubytování v srdci Kokořínska</h2>
        <p className="">
          <strong>Penzion Malba</strong> s restaurací, které navazuje na dlouhou
          tradici pohostinství{" "}
          <strong>pod hradem Kokořín v srdci CHKO Kokořínsko</strong>
          .
          <br />S kapacitou <strong>31 lůžek v 11 pokojích</strong> s vlastními
          koupelnami a <strong>exklusivním skalním domeček Malběnka</strong>,
          který je pro 3 osoby, se jedná o jedinečné ubytování s krásnými
          výhledy.
          <br />
          <strong>Restaurace s barem pro hosty penzionů Malba a Milča</strong>s
          kapacitou 60 míst, prostornou venkovní terasou, ohništěm a vinárnou ve
          skále nabídne nepřeberné množství chutí a vůní.
        </p>
      </div>
    </div>
  );
}
