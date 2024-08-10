import Cenik from "@/components/content/cenik";
import Contact from "@/components/content/contact";
import FiremniAkce from "@/components/content/firemniAkce";
import Historie from "@/components/content/historie";
import Rekreace from "@/components/content/rekreace";
import Restaurace from "@/components/content/restaurace";
import Ubytovani from "@/components/content/ubytovani";
import StrucneVyhody from "@/components/contentStrucneVyhody";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Row from "@/components/row";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Malba, penzion v srdci Kokořínska",
  description:
    "Penzion Malba je ubytovací zařízení s restaurací sloužící pouze hostům penzionu, které navazuje na dlouhou tradici pohostinství pod hradem Kokořín v srdci CHKO Kokořínsko. Kapacita je 31 lůžek v 11 pokojích s vlastními koupelnami a do areálu patří i exklusivní skalní domeček Malběnka, který je pro 3 osoby. Restaurace s barem je pouze pro hosty penzionů Malba a Milča, kapacita je 60 míst, 25 míst venkovní terasa, 48 míst posezení u ohniště a vinárna ve skále 15 osob.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-p-14 md:scroll-p-12 lg:scroll-pt-8 max-w-[2500px] mx-auto"
    >
      <body className="mx-auto">
        <div className="sticky top-0 z-10 w-full bg-white">
          <div className="container mx-auto max-w-screen-xl">
            <Header />
          </div>
        </div>
        {children}
        <Hero />
        <StrucneVyhody />
        <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test hidden md:block"
          darkRow="lightdarkRow"
        />
        <Ubytovani idScroll="ubytovani" />
        <Row
          title="prvni row"
          text="nejak claim jak svina"
          bgImgClass="rowMalbenka hidden md:block"
          darkRow="lightRow"
        />

        <Restaurace idScroll="restaurace" />
        <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test2"
          darkRow="lightRow"
        />
        <FiremniAkce idScroll="firemni-akce-svatby" />
        <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test3"
          darkRow="lightRow"
        />
        <Rekreace idScroll="rekreace" />
        <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test"
          darkRow="darkRow"
        />
        <Historie idScroll="historie" />
        <Row
          title="ubytování s prima výhledem"
          text=""
          bgImgClass="test"
          darkRow="darkRow"
        />
        <Cenik idScroll="cenik" />
        <Contact idScroll="kontakt" />
        <Footer />
      </body>
    </html>
  );
}
