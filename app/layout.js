import Footer from "@/components/footer";
import Header from "@/components/header";
import PerformanceMonitor from "@/components/performanceMonitor";
// import { Metadata } from "next";
import ServiceWorkerRegistration from "@/components/serviceWorker";
import "@/public/style.css";
import "./globals.css";

// export const metadata = {
//   title: "Malba, penzion v srdci Kokořínska",
//   description:
//     "Penzion Malba je ubytovací zařízení s restaurací sloužící pouze hostům penzionu, které navazuje na dlouhou tradici pohostinství pod hradem Kokořín v srdci CHKO Kokořínsko. Kapacita je 31 lůžek v 11 pokojích s vlastními koupelnami a do areálu patří i exklusivní skalní domeček Malběnka, který je pro 3 osoby. Restaurace s barem je pouze pro hosty penzionů Malba a Milča, kapacita je 60 míst, 25 míst venkovní terasa, 48 míst posezení u ohniště a vinárna ve skále 15 osob.",
// };
export const metadata = {
  metadataBase: new URL('https://penzionmalba.cz'),
  title: "Penzion Malba – ubytování v srdci Kokořínska",
  description:
    "Rodinný penzion Malba nabízí útulné ubytování v přírodě CHKO Kokořínsko. Ideální pro rodiny, páry i turisty.",
  keywords: [
    "Penzion Malba",
    "ubytování Kokořín",
    "penzion Kokořínsko",
    "příroda",
    "rodinné ubytování",
  ],
  openGraph: {
    title: "Penzion Malba – ubytování v Kokořínsku",
    description: "Užijte si klidné ubytování v srdci přírody.",
    url: "https://penzionmalba.cz",
    siteName: "Penzion Malba",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/images/malba_logo.webp",
        width: 800,
        height: 600,
        alt: "Penzion Malba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Penzion Malba – stylové ubytování v Kokořínsku",
    description: "Víkend v přírodě? Vyberte si Penzion Malba.",
    images: ["/images/malba_logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://penzionmalba.cz",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className="max-w-full mx-auto scroll-pt-14 md:scroll-pt-12 lg:scroll-pt-8 lato-light text-base md:text-xl"
        id="top"
      >
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
        <header className="max-w-full mx-auto header-sticky">
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
