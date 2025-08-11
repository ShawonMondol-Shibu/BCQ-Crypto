import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { blogType } from "@/types/type";

export default function Blog() {
  const blogs: blogType[] = [
    {
      image: "/images/processor.png",
      title: "Futures Trading Week",
      desc: " BCQ crypto supports a variety of the most popular digital crypto currencies.",
      url: "#",
    },
    {
      image: "/images/security.png",
      title: "Futures Trading Week",
      desc: " BCQ crypto supports a variety of the most popular digital crypto currencies.",
      url: "#",
    },
    {
      image: "/images/server.png",
      title: "Futures Trading Week",
      desc: " BCQ crypto supports a variety of the most popular digital crypto currencies.",
      url: "#",
    },
  ];
  return (
    <main className="my-40">
      <div className="text-center md:w-lg space-y-4 m-auto">
        <p className="text-base font-semibold text-orange-400">
          Gataway to the global economy
        </p>

        <h2 className="text-5xl font-bold text-zinc-800 leading-14">
          Cryptocurrency in Every Wallet™
        </h2>
      </div>

      <section className="flex lg:flex-nowrap flex-wrap items-center justify-evenly gap-10 mt-10">
        {blogs.map((item: blogType, i: number) => (
          <Card key={i} className="w-full max-w-sm p-0 border-none shadow-none">
            <div className="bg-foreground rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                width={236}
                height={236}
                className="rounded-2xl bg-foreground m-auto object-cover"
              />
            </div>
            <CardContent className="space-y-10 p-0">
              <div className="mt-4 space-y-4 w-70">
                <h4 className="text-2xl font-semibold text-zinc-800">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-base font-normal">
                  {item.desc}
                </p>
                <Link
                  href={item.url}
                  className="text-base font-medium text-orange-400 border-b border-orange-400"
                >
                  read more
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
