import Footer from "@/components/footer";
import Header from "@/components/header";
import PerformanceMonitor from "@/components/performanceMonitor";
import Script from "next/script";
// import { Metadata } from "next";
import ServiceWorkerRegistration from "@/components/serviceWorker";
import "@/public/style.css";
import "./globals.css";

const baseUrl = "https://penzionmalba.cz";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Penzion Malba",
  url: baseUrl,
  image: `${baseUrl}/images/malba_logo.webp`,
  description:
    "Rodinný penzion Malba nabízí útulné ubytování v přírodě CHKO Kokořínsko. Ideální pro rodiny, páry i turisty.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kokořínský Důl 38",
    addressLocality: "Kokořín",
    postalCode: "277 23",
    addressCountry: "CZ",
  },
  telephone: "+420603461723",
  email: "malba@kokorin.cz",
};

// export const metadata = {
//   title: "Malba, penzion v srdci Kokořínska",
//   description:
//     "Penzion Malba je ubytovací zařízení s restaurací sloužící pouze hostům penzionu, které navazuje na dlouhou tradici pohostinství pod hradem Kokořín v srdci CHKO Kokořínsko. Kapacita je 31 lůžek v 11 pokojích s vlastními koupelnami a do areálu patří i exklusivní skalní domeček Malběnka, který je pro 3 osoby. Restaurace s barem je pouze pro hosty penzionů Malba a Milča, kapacita je 60 míst, 25 míst venkovní terasa, 48 míst posezení u ohniště a vinárna ve skále 15 osob.",
// };
export const metadata = {
  metadataBase: new URL(baseUrl),
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
    url: baseUrl,
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
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
  alternates: {
    canonical: baseUrl,
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
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="max-w-full mx-auto scroll-pt-14 md:scroll-pt-12 lg:scroll-pt-8 lato-light text-lg md:text-xl font-light"
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
