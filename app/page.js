import AboutMalba from "@/components/content/aboutMalba";
import Cenik from "@/components/content/cenik";
import Contact from "@/components/content/contact";
import FiremniAkce from "@/components/content/firemniAkce";
import Historie from "@/components/content/historie";
import Rekreace from "@/components/content/rekreace";
import Restaurace from "@/components/content/restaurace";
import Ubytovani from "@/components/content/ubytovani";
import StrucneVyhody from "@/components/contentStrucneVyhody";
import Hero from "@/components/hero";
import StrucneVyhodyCarousel from "@/components/strucneVyhodyCarousel";
import { Suspense } from "react";

// Loading component for sections
function SectionLoader() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="max-w-[2100px] mx-auto">
      <Suspense fallback={<SectionLoader />}>
        {/* <StrucneVyhodyCarousel /> */}
        <Hero />
      </Suspense>

      <div className="max-w-screen-xl mx-auto">
        {/* <Hero /> */}
        {/* <StrucneVyhody /> */}

        <Suspense fallback={<SectionLoader />}>
          <AboutMalba />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Ubytovani idScroll="ubytovani" />
        </Suspense>

        {/* <Row
          title="prvni row"
          text="nejak claim jak svina"
          bgImgClass="rowMalbenka hidden md:block"
          darkRow="lightRow"
        /> */}

        <Suspense fallback={<SectionLoader />}>
          <Restaurace idScroll="restaurace" />
        </Suspense>

        {/* <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test2"
          darkRow="lightRow"
        /> */}

        <Suspense fallback={<SectionLoader />}>
          <FiremniAkce idScroll="firemni-akce-svatby" />
        </Suspense>

        {/* <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test3"
          darkRow="lightRow"
        /> */}

        <Suspense fallback={<SectionLoader />}>
          <Rekreace idScroll="rekreace" />
        </Suspense>

        {/* <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test"
          darkRow="darkRow"
        /> */}

        <Suspense fallback={<SectionLoader />}>
          <Historie idScroll="historie" />
        </Suspense>

        {/* <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test"
          darkRow="darkRow"
        /> */}

        <Suspense fallback={<SectionLoader />}>
          <Cenik idScroll="cenik" />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact idScroll="kontakt" />
        </Suspense>
      </div>
    </main>
  );
}
