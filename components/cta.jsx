import Link from "next/link";
import React from "react";

export default function Cta({ klass = "", text = "Rezervujte nyní" }) {
  return (
    <div className="flex justify-center mt-8 mb-12">
      <Link
        href="/#kontakt"
        className={` ${klass} mx-auto px-4 md:px-12 pt-4 pb-3 bg-mabla-20 text-neutral-800 font-normal uppercase rounded-lg shadow-2xl hover:bg-mabla-50 transition duration-300 hover:-translate-x-1 hover:translate-y-1 ease-in-out hover:shadow-md`}
      >
        <p className="text-sm md:text-base">{text}</p>
      </Link>
    </div>
  );
}
