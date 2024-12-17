import Link from "next/link";
import React from "react";
import { navi } from "./navData";
import MenuMobilni from "./navMobil";
export default function Navigation() {
  return (
    <div>
      {/* nav - start */}
      <nav className="hidden gap-12 lg:flex">
        {navi.map((navig, index) => {
          return (
            <Link
              key={index}
              href={navig.route}
              scroll={true}
              replace
              className="lato-nav"
            >
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
