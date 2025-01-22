import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/public/style.css";
import "./globals.css";

export const metadata = {
  title: "Malba, penzion v srdci Kokořínska",
  description:
    "Penzion Malba je ubytovací zařízení s restaurací sloužící pouze hostům penzionu, které navazuje na dlouhou tradici pohostinství pod hradem Kokořín v srdci CHKO Kokořínsko. Kapacita je 31 lůžek v 11 pokojích s vlastními koupelnami a do areálu patří i exklusivní skalní domeček Malběnka, který je pro 3 osoby. Restaurace s barem je pouze pro hosty penzionů Malba a Milča, kapacita je 60 míst, 25 míst venkovní terasa, 48 míst posezení u ohniště a vinárna ve skále 15 osob.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className="max-w-full mx-auto scroll-pt-14 md:scroll-pt-12 lg:scroll-pt-8 lato-light text-base md:text-xl"
        id="top"
      >
        <header className="max-w-full mx-auto header-sticky">
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
