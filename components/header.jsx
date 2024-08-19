import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./nav";
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 pb-1 mb-0 md:pt-2 2xl:px-0 md:mb-2">
      <Link href="/">
        <Image
          src="/images/malba_logo.png"
          alt="penzion Malba - logo"
          height={100}
          width={200}
          className="w-32 h-12 invert"
        />
      </Link>
      <Navigation />
    </header>
  );
}
