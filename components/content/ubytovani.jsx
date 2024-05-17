import Image from "next/image";
import React from "react";
import { Content } from "../contentData";
export default function Ubytovani() {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-24" id="ubytovani">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <Image
            src="/images/malba_logo.png"
            width={400}
            height={300}
            className="invert text-center mx-auto pb-4"
            alt="Malba logo"
          />
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
            <p className="text-center font-bold text-gray-500 md:text-left">
              ubytování
            </p>
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              penzion Malba
            </h1>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Penzion je rozdělen do dvou budov, větší ubytovací, menší
              stravovací a školící. Celková ubytovací kapacita penzionu je 31
              lůžek v 11 pokojích a chata Malběnka je pro 3 osoby.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Všechny pokoje mají vlastní koupelny s toaletou. Pokoje jsou 3
              čtyřlůžkové, 3 třílůžkové a 5 dvoulůžkových. Čtyři pokoje
              disponují vlastním balkónem s posezením. Každý pokoj má k
              dispozici vlastní koupelnu se sprchou a WC, včetně ručníků a mýdla
              (doporučujeme vlastní osušku).
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Všechny pokoje jsou vybaveny nábytkem z masivního dřeva. Přikrývky
              jsou vždy z mikrovlákna, polštáře máme buď péřové, anebo z
              mikrovlákna vhodné pro alergiky. Ložní prádlo a ručníky jsou
              v ceně pokoje.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Základem stravování je u nás poctivá snídaně podávaná formou
              studeného bufetu s teplými a studenými nápoji, ovocem a zeleninou,
              uzeninou a sýry, cereáliemi a domácím pečivem. Večeře Vám
              nabídneme a pro skupiny umíme kompletní stravování.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Připojení k internetu je zdarma pomocí Wi–Fi. V případě potřeby
              Vám rádi zapůjčíme dětskou postýlku. K dispozici je společná
              čajová kuchyňka (konvice, lednice, mikrovlnka) s posezením,
              venkovní posezení na terase, posezení u ohně s grilem nebo i
              jeskynní posezení s výčepem a krbovou vložkou.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Parkování před domem je zdarma a celý areál lze uzavřít. Za
              poplatek lze vypůjčit síť na hřiště u penzionu Milča (včetně míčů
              a badmintonu) nebo stolní tenis. Pro ubytované cyklisty je zde
              možnost bezpečné úschovy jejich kol s nabíjením. Hosté penzionu
              Malba mohou zdarma na požádání využít parkování u rybníka Harasov.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Všechny pokoje jsou vybaveny nábytkem z masivního dřeva. Přikrývky
              jsou vždy z mikrovlákna, polštáře máme buď péřové, anebo z
              mikrovlákna vhodné pro alergiky. Ložní prádlo a ručníky jsou
              v ceně pokoje.
            </p>
            <p className="mb-2 text-lg font-semibold  sm:text-xl md:mb-4 md:text-right odkaz">
              ceník ubytování
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 py-8 ">
          <div className="lg:order-2">
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="text-center font-bold text-gray-500 md:text-left">
              ubytování
            </p>
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              chata Malběnka{" "}
            </h1>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Malběnka je exklusivní zrenovovaný samostatný objekt na skále nad
              penzionem Malba.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              „Dřevěná chatička“ ve stylu trampské osady Harakoko připomíná svou
              polohou Orlí hnízdo. Domeček má vlastní koupelnu se sprchou a WC.
              K dispozici je kuchyňka, lednice a venkovní posezení. O komfort se
              stará podlahové vytápění a klimatizace.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              Hosté Malběnky mohou využívat všechny služby a společné prostory
              penzionu Malba. Chata není vhodná pro malé děti a osoby s omezeným
              pohybem kvůli své poloze na skále!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
