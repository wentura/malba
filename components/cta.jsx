import Link from "next/link";
import React from "react";

export default function Cta({ klass = "", text = "Rezervujte nyní" }) {
  return (
    <div className="flex justify-center mt-8 mb-12">
      <Link
        href="/#kontakt"
        className={` ${klass} mx-auto px-16 pt-4 pb-3 bg-green-800 text-neutral-100 font-extrabold rounded-lg shadow-xl hover:bg-green-900 transition duration-300 hover:-translate-x-1 hover:-translate-y-1 ease-in-out hover:shadow-md`}
      >
        <span className="">{text}</span>
      </Link>
    </div>
  );
}
