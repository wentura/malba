import Restaurace from "@/components/content/restaurace";
import Ubytovani from "@/components/content/ubytovani";
import StrucneVyhody from "@/components/contentStrucneVyhody";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <StrucneVyhody />
      <Ubytovani />
      <Restaurace />
    </>
  );
}
