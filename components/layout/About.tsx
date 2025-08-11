import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

export default function About() {
  return (
    <main className="mt-20">
      <Card className="border-none shadow-none">
        <CardContent className="flex items-center justify-between gap-10">
          <div>
            <Image
              src={"/images/globe.png"}
              alt="about section globe section"
              width={569}
              height={569}
            />
          </div>
          <div className="space-y-8 w-xl ">
            <p className="lg:text-base text-sm font-semibold text-orange-400">
              YOUR GATEWAY TO THE GLOBAL ECONOMY
            </p>
            <h3 className="lg:text-5xl text-3xl font-bold">
              BCQ crypto lending, trading, and custody for worldwide
            </h3>
            <p className="lg:text-base text-sm font-normal text-zinc-500">
              Institutional Markets is a full-stack crypto services platform
              that works worldwide with crypto-native businesses and
              institutional clients on trading, and custody solutions.
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
