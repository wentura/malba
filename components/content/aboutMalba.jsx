import React from "react";

export default function AboutMalba({ klass = "hidden md:block mb-8" }) {
  return (
    <div className={`${klass} max-w-screen-xl px-4 mx-auto md:px-8`}>
      <p className="text-gray-500 sm:text-lg">
        <strong>Penzion Malba</strong> je ubytovací zařízení s restaurací
        sloužící pouze hostům penzionu, které navazuje na dlouhou tradici
        pohostinství <strong>pod hradem Kokořín v srdci CHKO Kokořínsko</strong>
        .
        <br />
        Kapacita je <strong>31 lůžek v 11 pokojích</strong> s vlastními
        koupelnami a do areálu patří i{" "}
        <strong>exklusivní skalní domeček Malběnka</strong>, který je pro 3
        osoby.
        <br />
        <strong>
          Restaurace s barem je pouze pro hosty penzionů Malba a Milča
        </strong>
        , kapacita je 60 míst, 25 míst venkovní terasa, 48 míst posezení u
        ohniště a vinárna ve skále 15 osob.
      </p>
    </div>
  );
}
