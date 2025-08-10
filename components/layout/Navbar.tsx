import {navType} from "@/types/type";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  const navLink: navType[] = [
    { name: "Wallet", url: "#" },
    { name: "Exchange", url: "#" },
    { name: "Explorer", url: "#" },
  ];
  return (
    <nav className="container m-auto px-2 py-2 flex items-center justify-between gap-5">
      <div className="flex items-center gap-10">
        <span className="text-2xl font-semibold">
          <span className="text-(--primary)">BCQ</span>
          Crypto
        </span>
        <ul className="flex items-center gap-5">
          {navLink.map((nav: navType, i: number) => (
            <li key={i}>
              <Link href={nav.url}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-x-5">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}
