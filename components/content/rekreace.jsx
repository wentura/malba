import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import React from "react";
const inter = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export default function Rekreace({ idScroll }) {
  return (
    <div className="py-16 bg-white" id={idScroll}>
      <div className={`${inter.className} ubrus ubrusOdsazeni`}>
        <h2 className="hadvojka">Rekreace na Kokořínsku</h2>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-lg h-96 drop-shadow-lg lg:h-full">
            <Image
              width={600}
              height={800}
              src="/images/koko/6.webp"
              loading="lazy"
              alt="pohled na ponzion Malba"
              className="object-cover object-center w-full h-full rounded-lg lg:h-1/2 lg:mb-2"
            />
            <Image
              width={600}
              height={800}
              src="/images/mic/1.webp"
              loading="lazy"
              alt="pohled na ponzion Malba"
              className="hidden object-cover object-center w-full rounded-lg lg:mt-2 lg:block lg:h-1/2"
            />
          </div>

          <div className="md:pt-8">
            <p className="mb-4  ">
              Rádi Vám poradíme s výběrem tras a turistických cílů. Informujte
              se o nabídce sportovního vybavení a aktivit. Stolní tenis a
              pétanque Vám zapůjčíme zdarma.
            </p>
            <p className="mb-4  ">
              <strong>
                Pro vyznavače aktivního odpočinku se nabízí bezpočet možností
                pěších výletů po turisticky značených stezkách i po četných
                neznačených cestách do celé oblasti CHKO Kokořínsko.
              </strong>{" "}
              Nejznámější a nejbližší turistické cíle jsou hrad Kokořín (500 m)
              a skalní útvary zvané Pokličky (2,5 km). Mezi další atraktivní
              cíle patří hrad Houska, Obří hlava, Žába či skalní Bludiště.
            </p>
            <p className="mb-4  ">
              <strong>
                Kokořínsko je populární mezi znalci cykloturistiky
              </strong>{" "}
              a to proto, že nabízí trasy nejenom pro vyjížďky na silničním
              kole, ale i náročné terény pro jízdy na horském kole, kde si na
              své přijdou jak vyznavači rychlých sjezdů a strmých stoupání, tak
              pohodoví jezdci přírodou.{" "}
              <a
                href="http://kokostezky.cz/"
                className="font-bold lowercase cursor-auto odkaz"
                target="_blank"
              >
                WWW.KOKOSTEZKY.CZ
              </a>
            </p>
            <p className="mb-4  ">
              Kokořínsko je oblastí pískovcového skalního lezení. Správcem skal
              je Lezecký klub Mšeno, který vydal i průvodce oblastí pod názvem
              Dubské skály. Je tu i pár boulderových oblastí. Koupání je možné
              na 4 km vzdáleném rybníce Harasov nebo městském koupališti ve
              Mšeně. Máchovo jezero je vzdálené 20 km.
            </p>
            <p className="mb-4  ">
              Rybaření můžeme nabídnout na soukromém revíru Harasov, se kterým
              úzce spolupracujeme. Další informace včetně ceníku Vám zašleme
              e-mailem.{" "}
              <a
                href="http://harasov.eu/"
                className="font-bold lowercase odkaz"
                target="_blank"
              >
                www.harasov.eu
              </a>
            </p>
            <p className="mb-1  ">Pujčovna Harasov:</p>
            <ul className="pl-6 list-disc">
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
