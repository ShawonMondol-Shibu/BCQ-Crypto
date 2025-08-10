import navType from "@/types/type";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navLink: navType[] = [
    { name: "Wallet", url: "#" },
    { name: "Exchange", url: "#" },
    { name: "Explorer", url: "#" },
  ];
  return (
    <nav>
      <span className="">
        <span className="text-(--primary)">BCQ</span>
        Crypto
      </span>
      <ul>
        {navLink.map((nav: navType, i: number) => (
          <li key={i}>
            <Link href={nav.url}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
