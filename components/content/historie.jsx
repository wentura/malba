import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import React from "react";
const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function Historie({ idScroll }) {
  return (
    <div className="py-16 bg-white" id={idScroll}>
      <div className={`${inter.className} ubrus ubrusOdsazeni`}>
        <h2 className="hadvojka">Historie penzionu Malba</h2>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="overflow-hidden rounded-lg h-96 drop-shadow-lg lg:h-full">
              <Image
                width={800}
                height={1000}
                src="/images/malba/m3.webp"
                loading="lazy"
                alt="současná podoba penzionu Malba"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="mb-4  ">
              Patrně první stavení, které stálo na místě penzionu Malba, byl
              malý domek, který se jmenoval <b>vila Bóža</b>. Dům byl
              identifikován na blíže neurčené fotografii z Kokořínského Dolu jen
              podle skalních místností za domem, které zůstaly prakticky
              nezměněné dodnes.
            </p>
            <p className="mb-4  ">
              Patrně radikální přestavbou malé vily vznikl hotel a zahradní
              restaurace <b>Pelikán</b>. Točili zde Lobkowiczké pivo, ačkoli
              budova dnešní restaurace ještě nestála.
            </p>
            <p className="mb-4  ">
              Asi až v padesátých letech byla postavena budova restaurace
              mělnickým hoteliérem panem Šrachtou. Hotel se pak jmenoval{" "}
              <b>Šrachta</b>&nbsp;až do znárodnění, kdy se stal rekreačním
              střediskem výrobního družstva malířů a lakýrníků{" "}
              <b>Malba Praha</b>.
            </p>
            <p className="mb-4  ">
              Současní vlastníci objekt koupili v roce 2000 a v roce 2001
              proběhla rekonstrukce na penzion s koupelnami a restauračním
              provozem. Stavělo se ve značném tempu a zahájení provozu bylo 1.
              6. 2001.
            </p>
            <p className="mb-4  ">
              V roce 2003 byla k areálu připojena chata <b>Malběnka</b>, která
              byla pravděpodobně postavena v padesátých letech v souvislosti s
              trampskou činností osady Harakoko.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
