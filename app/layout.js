import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full bg-white sticky top-0 z-10">
          <div className="container max-w-screen-2xl mx-auto">
            <Header />
          </div>
        </div>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
