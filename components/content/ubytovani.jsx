import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Content } from "../contentData";
export default function Ubytovani({ idScroll }) {
  return (
    <div className="bg-white pt-0 pb-8 sm:pb-12 lg:py-24" id={idScroll}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* <div className="mb-10 md:mb-16 hidden md:block">
          <Image
            src="/images/malba_logo.png"
            width={400}
            height={300}
            className="invert text-center mx-auto pb-4"
            alt="Malba logo"
          />
        </div> */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[400px] block md:hidden">
              <Image
                width={600}
                height={400}
                src="/images/malba2.webp"
                loading="lazy"
                alt="chata Malběnka"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-[400px] overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-full hidden md:block">
              <Image
                height={400}
                width={800}
                src="/images/malba.webp"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-full w-full object-cover object-center hidden md:block"
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
              <strong>Všechny pokoje mají vlastní koupelny s toaletou</strong>.
              Pokoje jsou 3 čtyřlůžkové, 3 třílůžkové a 5 dvoulůžkových. Čtyři
              pokoje disponují vlastním balkónem s posezením. Každý pokoj má k
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
              <strong>Základem stravování je u nás poctivá snídaně</strong>{" "}
              podávaná formou studeného bufetu s teplými a studenými nápoji,
              ovocem a zeleninou, uzeninou a sýry, cereáliemi a domácím pečivem.
              Večeře Vám nabídneme a pro skupiny umíme kompletní stravování.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>Připojení k internetu je zdarma pomocí Wi–Fi</strong>. V
              případě potřeby Vám rádi zapůjčíme dětskou postýlku. K dispozici
              je společná čajová kuchyňka (konvice, lednice, mikrovlnka) s
              posezením, venkovní posezení na terase, posezení u ohně s grilem
              nebo i jeskynní posezení s výčepem a krbovou vložkou.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                Parkování před domem je zdarma a celý areál lze uzavřít
              </strong>
              . Za poplatek lze vypůjčit síť na hřiště u penzionu Milča (včetně
              míčů a badmintonu) nebo stolní tenis. Pro ubytované cyklisty je
              zde možnost bezpečné úschovy jejich kol s nabíjením. Hosté
              penzionu Malba mohou{" "}
              <a href="http://harasov.eu/" target="_blank" className="odkaz">
                <strong>
                  zdarma na požádání využít parkování u rybníka Harasov
                </strong>
              </a>
              .
            </p>

            <p className="mb-2 text-lg font-semibold  sm:text-xl md:mb-4 md:text-right ">
              <Link href="#cenik" className="odkaz">
                ceník ubytování
              </Link>
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 py-8 ">
          <div className="lg:order-2">
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[400px] hidden md:block">
              <Image
                width={600}
                height={400}
                src="/images/malbenka/8.webp"
                loading="lazy"
                alt="chata Malběnka"
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
              Malběnka je{" "}
              <strong>exklusivní zrenovovaný samostatný objekt na skále</strong>{" "}
              nad penzionem Malba.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                „Dřevěná chatička“ ve stylu trampské osady Harakoko
              </strong>{" "}
              připomíná svou polohou Orlí hnízdo. Domeček má vlastní koupelnu se
              sprchou a WC. K dispozici je kuchyňka, lednice a venkovní
              posezení. O komfort se stará podlahové vytápění a klimatizace.
            </p>
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                Hosté Malběnky mohou využívat všechny služby a společné prostory
                penzionu Malba.
              </strong>{" "}
              Chata není vhodná pro malé děti a osoby s omezeným pohybem kvůli
              své poloze na skále!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
