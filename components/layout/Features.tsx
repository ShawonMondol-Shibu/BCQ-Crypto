import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Features() {
  return (
    <main className="my-20">
      <Card className="border-none shadow-none">
        <CardContent className="flex flex-row-reverse flex-wrap items-center justify-between lg:gap-10 gap-4">
          <div className="m-auto">
            <Image
              src={"/images/phone.png"}
              alt="about section globe section"
              width={569}
              height={569}
            />
          </div>
          <div className="lg:space-y-8 space-y-5 w-xl m-auto">
            <p className="lg:text-base text-sm font-semibold text-orange-400">
              YOUR GATEWAY TO THE GLOBAL ECONOMY
            </p>
            <h3 className="lg:text-5xl text-3xl font-bold">
              The Easiest and Most Powerful Crypto Wallet
            </h3>
            <p className="lg:text-base text-sm font-normal text-zinc-500">
              Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. 
            </p>

            <Button variant={"default"} size={"lg"}>
              Get it now
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
