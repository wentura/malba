import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./nav";
export default function Header() {
  return (
    <div className="flex items-center justify-between w-full max-w-screen-xl py-4 pt-3 pb-2 md:pt-2 2xl:px-0">
      <Link href="/#top">
        <Image
          src="/images/malba_logo.png"
          alt="penzion Malba - logo"
          width={100}
          height={80}
          className="h-auto invert"
        />
      </Link>
      <Navigation />
    </div>
  );
}
