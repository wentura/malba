import React from "react";

export default function Rekreace({ idScroll }) {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-24" id={idScroll}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          {/* <Image
            src="/images/malba_logo.png"
            width={400}
            height={300}
            className="invert text-center mx-auto pb-4"
            alt="Malba logo"
          /> */}
          <h2 className="hadvojka">Rekreace na Kokořínsku</h2>
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
              Rádi Vám poradíme s výběrem tras a turistických cílů. Informujte
              se o nabídce sportovního vybavení a aktivit. Stolní tenis a
              pétanque Vám zapůjčíme zdarma.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                Pro vyznavače aktivního odpočinku se nabízí bezpočet možností
                pěších výletů po turisticky značených stezkách i po četných
                neznačených cestách do celé oblasti CHKO Kokořínsko.
              </strong>{" "}
              Nejznámější a nejbližší turistické cíle jsou hrad Kokořín (500 m)
              a skalní útvary zvané Pokličky (2,5 km). Mezi další atraktivní
              cíle patří hrad Houska, Obří hlava, Žába či skalní Bludiště.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                Kokořínsko je populární mezi znalci cykloturistiky
              </strong>{" "}
              a to proto, že nabízí trasy nejenom pro vyjížďky na silničním
              kole, ale i náročné terény pro jízdy na horském kole, kde si na
              své přijdou jak vyznavači rychlých sjezdů a strmých stoupání, tak
              pohodoví jezdci přírodou.{" "}
              <a
                href="http://kokostezky.cz/"
                className="odkaz lowercase cursor-auto font-bold"
                target="_blank"
              >
                WWW.KOKOSTEZKY.CZ
              </a>
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Kokořínsko je oblastí pískovcového skalního lezení. Správcem skal
              je Lezecký klub Mšeno, který vydal i průvodce oblastí pod názvem
              Dubské skály. Je tu i pár boulderových oblastí. Koupání je možné
              na 4 km vzdáleném rybníce Harasov nebo městském koupališti ve
              Mšeně. Máchovo jezero je vzdálené 20 km.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Rybaření můžeme nabídnout na soukromém revíru Harasov, se kterým
              úzce spolupracujeme. Další informace včetně ceníku Vám zašleme
              e-mailem.{" "}
              <a
                href="http://harasov.eu/"
                className="odkaz lowercase font-bold"
                target="_blank"
              >
                www.harasov.eu
              </a>
            </p>
            <p className="mb-1 text-gray-500 sm:text-lg">Pujčovna Harasov:</p>
            <ul className="text-gray-500 pl-6 list-disc">
              <li>kolo TREK MTB hard - 500 Kč / den</li>
              <li>kolo TREK MTB full - 1200 Kč / den</li>
              <li>E-kolo TREK cestovní - 800 Kč / den</li>
              <li>Padleboardy set plovák, vesta, pádlo – 200,- / hodina</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
