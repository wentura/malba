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

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      {/* <Hero /> */}
      <StrucneVyhodyCarousel />
      {/* <StrucneVyhody /> */}
      <AboutMalba />
      <Ubytovani idScroll="ubytovani" />
      {/* <Row
          title="prvni row"
          text="nejak claim jak svina"
          bgImgClass="rowMalbenka hidden md:block"
          darkRow="lightRow"
        /> */}
      <Restaurace idScroll="restaurace" />
      {/* <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test2"
          darkRow="lightRow"
        /> */}
      <FiremniAkce idScroll="firemni-akce-svatby" />
      {/* <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test3"
          darkRow="lightRow"
        /> */}
      <Rekreace idScroll="rekreace" />
      {/* <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test"
          darkRow="darkRow"
        /> */}
      <Historie idScroll="historie" />
      {/* <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test"
          darkRow="darkRow"
        /> */}
      <Cenik idScroll="cenik" />
      <Contact idScroll="kontakt" />
    </main>
  );
}
