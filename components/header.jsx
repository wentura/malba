import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./nav";
export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 pt-3 pb-2 md:pt-2 2xl:px-0">
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
