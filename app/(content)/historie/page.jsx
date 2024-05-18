import React from "react";

export default function ContentHistorie() {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          {/* <Image
            src="/images/malba_logo.png"
            width={400}
            height={300}
            className="invert text-center mx-auto pb-4"
            alt="Malba logo"
          /> */}
          <h2 className="hadvojka">Historie penzionu Malba</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="mb-4 text-gray-500 sm:text-lg">
              Patrně první stavení, které stálo na místě penzionu Malba, byl
              malý domek, který se jmenoval <b>vila Bóža</b>. Dům byl
              identifikován na blíže neurčené fotografii z Kokořínského Dolu jen
              podle skalních místností za domem, které zůstaly prakticky
              nezměněné dodnes.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Patrně radikální přestavbou malé vily vznikl hotel a zahradní
              restaurace <b>Pelikán</b>. Točili zde Lobkowiczké pivo, ačkoli
              budova dnešní restaurace ještě nestála.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Asi až v padesátých letech byla postavena budova restaurace
              mělnickým hoteliérem panem Šrachtou. Hotel se pak jmenoval{" "}
              <b>Šrachta</b>&nbsp;až do znárodnění, kdy se stal rekreačním
              střediskem výrobního družstva malířů a lakýrníků{" "}
              <b>Malba Praha</b>.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Současní vlastníci objekt koupili v roce 2000 a v roce 2001
              proběhla rekonstrukce na penzion s koupelnami a restauračním
              provozem. Stavělo se ve značném tempu a zahájení provozu bylo 1.
              6. 2001.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
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
