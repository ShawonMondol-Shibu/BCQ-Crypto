import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Features() {
  return (
    <main className="mt-20">
      <Card className="border-none shadow-none">
        <CardContent className="flex flex-row-reverse items-center justify-between gap-10">
          <div className="m-auto">
            <Image
              src={"/images/phone.png"}
              alt="about section globe section"
              width={569}
              height={569}
            />
          </div>
          <div className="space-y-8 w-xl m-auto">
            <p className="text-base font-semibold text-orange-400">
              YOUR GATEWAY TO THE GLOBAL ECONOMY
            </p>
            <h3 className="text-5xl font-bold">
              The Easiest and Most Powerful Crypto Wallet
            </h3>
            <p className="text-base font-normal text-zinc-500">
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
