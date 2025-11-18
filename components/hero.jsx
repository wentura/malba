"use client";

import Image from "next/image";

const BigImage = {
  img: "/images/malba/malba2.webp",
  alt: "Penzion Malba",
  width: 1600,
  height: 800,
};

export default function Hero() {
  return (
    <div className="mx-auto max-w-screen-2xl w-full relative">
      <div className="relative w-full">
        <Image
          src={BigImage.img}
          alt={BigImage.alt}
          width={BigImage.width}
          height={BigImage.height}
          className="w-full max-h-[50vh] md:max-h-[70vh] object-cover"
          priority
        />
        <div className="absolute inset-0 flex md:items-end md:justify-end md:pb-12 md:pr-12 hidden md:flex">
          <Image
            src="/images/malba_logo.png"
            alt="Penzion Malba - logo"
            width={400}
            height={400}
            className="w-auto h-24 md:h-32 lg:h-48 object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
