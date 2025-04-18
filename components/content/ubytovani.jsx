import Slider from "@/components/slider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "../carousel/carousel";
import { Content } from "../contentData";
import Cta from "../cta";
import Row from "../row";
import StrucneVyhodyCarousel from "../strucneVyhodyCarousel";
import AboutMalba from "./aboutMalba";
import UbytovaniAccordion from "./ubytovaniAccordion";
export default function Ubytovani({ idScroll }) {
  return (
    <div className="py-16 bg-white" id={idScroll}>
      <Row
        title="Ubytování s pohádkovým výhledem"
        text=""
        // bgImgClass={` ${inter.className} rowUbrus hidden md:block`}
        bgImgClass={` rowUbrus ubrusOdsazeni`}
        darkRow="darkRow"
      />

      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* <div className="h-[400px] overflow-hidden rounded-lg bg-gray-100 drop-shadow-lg lg:h-full hidden md:block"> */}
          <div className="h-[400px] overflow-hidden rounded-lg bg-gray-100 drop-shadow-lg lg:h-full">
            <Image
              height={400}
              width={800}
              src="/images/malba/ml.webp"
              loading="lazy"
              alt="penzion Malba"
              // className="hidden object-cover object-center w-full h-full md:block"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="md:pt-8">
            {/* <p className="">ubytování</p> */}
            <h1 className="lato-bold peknyPismo text-xl md:text-3xl mb-8">
              penzion Malba
            </h1>
            <p className="pb-4">
              <strong>Penzion je rozdělen do dvou budov</strong>, větší
              ubytovací, menší stravovací a školící. Celková ubytovací kapacita
              penzionu je 31 lůžek v 11 pokojích a chata Malběnka je pro 3
              osoby.
            </p>
            {/* <UbytovaniAccordion /> */}
            <p className="pb-4">
              Všechny pokoje mají vlastní koupelny s toaletou. Pokoje jsou 3
              čtyřlůžkové, 3 třílůžkové a 5 dvoulůžkových. Čtyři pokoje
              disponují vlastním balkónem s posezením. Každý pokoj má k
              dispozici vlastní koupelnu se sprchou a WC, včetně ručníků a mýdla
              (doporučujeme vlastní osušku).
            </p>
            <p className="pb-4">
              Všechny pokoje jsou vybaveny nábytkem z masivního dřeva. Přikrývky
              jsou vždy z mikrovlákna, polštáře máme buď péřové, anebo z
              mikrovlákna vhodné pro alergiky. Ložní prádlo a ručníky jsou
              v ceně pokoje.
            </p>
            <p className="pb-4">
              Základem stravování je u nás poctivá snídaně podávaná formou
              studeného bufetu s teplými a studenými nápoji, ovocem a zeleninou
              uzeninou a sýry, cereáliemi a domácím pečivem. Večeře Vám
              nabídneme a pro skupiny umíme kompletní stravování.
            </p>
            <p className="pb-4">Wi–Fi připojení k internetu je zdarma.</p>
            <p className="pb-4">
              V případě potřeby Vám rádi zapůjčíme dětskou postýlku. K dispozici
              je společná čajová kuchyňka (konvice, lednice, mikrovlnka) s
              posezením, venkovní posezení na terase, posezení u ohně s grilem
              nebo i jeskynní posezení s výčepem a krbovou vložkou.
            </p>
            <p className="pb-4">
              Parkování před domem je zdarma a celý areál lze uzavřít.
            </p>
            <p className="pb-4">
              Za poplatek lze vypůjčit síť na hřiště u penzionu Milča (včetně
              míčů a badmintonu) nebo stolní tenis. Pro ubytované cyklisty je
              zde možnost bezpečné úschovy jejich kol s nabíjením. Hosté
              penzionu Malba mohou zdarma na požádání využít parkování u rybníka
              Harasov.
            </p>
            <p className="my-4 md:mb-4 md:text-right">
              <Link href="#cenik" className="odkaz">
                ceník ubytování
              </Link>
            </p>
            {/* <div className="hidden md:block"> */}
            <Cta text="už Chci dovolenou" />
            {/* </div> */}
          </div>
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-2 lg:gap-12">
          <div className="lg:order-2">
            <div className="overflow-hidden hidden sm:block">
              {/* <div className="h-[400px] overflow-hidden rounded-lg bg-gray-100 drop-shadow-lg lg:h-full"> */}
              <Slider data="ubytovani" />
            </div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 md:h-[500px] sm:hidden">
              <Image
                width={600}
                height={600}
                src="/images/malbenka/8.webp"
                // src="/images/m3.webp"
                loading="lazy"
                alt="chata Malběnka"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="pt-4 md:pt-8">
            {/* <p className="hidden font-bold text-center text-gray-500 md:flex md:text-left">
              ubytování
            </p>
            <h1 className="hidden mb-4 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              chata Malběnka{" "}
            </h1> */}
            <div className="mb-4  ">
              <h1 className="lato-bold peknyPismo text-xl md:text-3xl mb-8">
                chata Malběnka
              </h1>
              <strong>
                Malběnka je exklusivní zrenovovaný samostatný objekt na skále
              </strong>{" "}
              nad penzionem Malba.
            </div>
            <p className="mb-4  ">
              <strong>
                „Dřevěná chatička“ ve stylu trampské osady Harakoko
              </strong>{" "}
              připomíná svou polohou Orlí hnízdo. Domeček má vlastní koupelnu se
              sprchou a WC. K dispozici je kuchyňka, lednice a venkovní
              posezení. O komfort se stará podlahové vytápění a klimatizace.
            </p>
            <p className="mb-4  ">
              <strong>
                Hosté Malběnky mohou využívat všechny služby a společné prostory
                penzionu Malba.
              </strong>{" "}
              Chata není vhodná pro malé děti a osoby s omezeným pohybem kvůli
              své poloze na skále!
            </p>
            <Cta text="rezervovat si ubytování" />
          </div>
          {/* <div className="md:hidden -mb-24">
            <Cta text="Rezervujte ubytování" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
