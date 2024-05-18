import Link from "next/link";
import React from "react";
import { navi } from "./navData";
import MenuMobilni from "./navMobil";
export default function Navigation() {
  return (
    <div>
      {/* nav - start */}
      <nav className="hidden gap-12 lg:flex">
        {navi.map((navig) => {
          return (
            <Link key={navig.id} href={navig.route}>
              {navig.title}
            </Link>
          );
        })}
      </nav>
      <MenuMobilni />
      {/* nav - end */}
    </div>
  );
}
