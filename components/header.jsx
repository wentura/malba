import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./nav";
export default function Header() {
  return (
    <header className="px-6 2xl:px-0 mb-2 flex items-center justify-between py-4 md:mb-2">
      <Link href="/">
        <Image
          src="/images/malba_logo.png"
          alt="penzion Malba - logo"
          height={100}
          width={200}
          className="invert h-12 w-32"
        />
      </Link>
      <Navigation />
    </header>
  );
}
