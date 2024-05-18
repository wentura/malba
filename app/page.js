import Restaurace from "@/components/content/restaurace";
import Ubytovani from "@/components/content/ubytovani";
import StrucneVyhody from "@/components/contentStrucneVyhody";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-white sticky top-0 z-10">
        <div className="container max-w-screen-2xl mx-auto">
          <Header />
        </div>
      </div>
      <Hero />

      <StrucneVyhody />
      <Ubytovani />
      <Restaurace />
    </div>
  );
}
