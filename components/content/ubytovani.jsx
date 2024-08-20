import Slider from "@/components/slider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "../carousel/carousel";
import { Content } from "../contentData";
import Row from "../row";
import AboutMalba from "./aboutMalba";
import UbytovaniAccordion from "./ubytovaniAccordion";
export default function Ubytovani({ idScroll }) {
  return (
    <div className="py-4 bg-white md:py-12 lg:py-24" id={idScroll}>
      <Row
        title="Ubytování s pohádkovým výhledem"
        text=""
        bgImgClass="rowUbrus hidden md:block"
        darkRow="darkRow"
      />
      <div className="w-full mb-8 md:hidden">
        <Carousel />
      </div>

      <AboutMalba klass="block md:hidden mb-4" />
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        {/* <div className="hidden mb-10 md:mb-16 md:block">
          <Image
            src="/images/malba_logo.png"
            width={400}
            height={300}
            className="pb-4 mx-auto text-center invert"
            alt="Malba logo"
          />
        </div> */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="h-[400px] overflow-hidden rounded-lg bg-gray-100 drop-shadow-lg lg:h-full hidden md:block">
            <Image
              height={400}
              width={800}
              src="/images/malba/ml.webp"
              loading="lazy"
              alt="penzion Malba"
              className="hidden object-cover object-center w-full h-full md:block"
            />
          </div>

          <div className="md:pt-8">
            {/* <p className="hidden mb-6 font-bold text-center md:flex md:mb-0 md:text-base md:text-gray-500 md:text-left">
              ubytování
            </p>
            <h1 className="hidden mb-4 text-2xl font-bold text-center text-gray-800 md:flex sm:text-3xl md:mb-6 md:text-left">
              penzion Malba
            </h1> */}
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>Penzion je rozdělen do dvou budov</strong>, větší
              ubytovací, menší stravovací a školící. Celková ubytovací kapacita
              penzionu je 31 lůžek v 11 pokojích a chata Malběnka je pro 3
              osoby.
            </p>
            <UbytovaniAccordion />
            <p className="my-4 text-lg font-semibold md:mb-4 md:text-right">
              <Link href="#cenik" className="odkaz">
                ceník ubytování
              </Link>
            </p>
          </div>
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-2 lg:gap-12">
          <div className="lg:order-2">
            {/* <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-[500px] hidden md:block">
              <Image
                width={600}
                height={600}
                // src="/images/malbenka/8.webp"
                src="/images/m4.webp"
                loading="lazy"
                alt="chata Malběnka"
                className="object-cover object-center w-full h-full"
              />
            </div> */}
            <Slider
              data="ubytovani"
              klass="pt-8 drop-shadow-lg h-96 md:mb-24"
            />
          </div>
          <div className="pt-4 md:pt-8">
            {/* <p className="hidden font-bold text-center text-gray-500 md:flex md:text-left">
              ubytování
            </p>
            <h1 className="hidden mb-4 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              chata Malběnka{" "}
            </h1> */}
            <p className="mb-4 text-gray-500 sm:text-lg">
              <strong>
                Malběnka je exklusivní zrenovovaný samostatný objekt na skále
              </strong>{" "}
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
