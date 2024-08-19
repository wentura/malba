"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navi } from "./navData";
export default function MenuMobilni() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="mobilniMenu">
      <button className="flex justify-end p-2 lg:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        }  top-0 left-0 right-0 bg-white px-2 pt-2 pb-4 z-20 flex flex-col text-gray-900 shadow-md opacity-90 w-full h-screen fixed`}
      >
        <button className="flex justify-end p-4" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M 0 0 L 20 20 L 0 0 M 20 0 L 0 20 L 20 0"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center w-full my-2 text-xl gap-y-2">
          <li className="flex px-8 py-4 max-h-48" key="home">
            <Link href="/" className="">
              <Image
                src="/images/malba_logo.png"
                width={300}
                height={200}
                className="pb-4 mx-auto text-center invert max-h-32"
                alt="Malba logo"
              />
            </Link>{" "}
          </li>
          {navi.map((navig) => {
            return (
              <li className="flex py-2" key={navig.id}>
                <Link
                  href={navig.route}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-yellow-600"
                  onClick={toggleMenu}
                >
                  {navig.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
