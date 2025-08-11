import React from "react";
import { Button } from "../ui/button";
import { CloudCheck } from "lucide-react";
import { FaAward, FaUserShield } from "react-icons/fa";
import { serviceType } from "@/types/type";
import { GiTrade } from "react-icons/gi";

export default function Services() {
  const services: serviceType[] = [
    {
      icon: CloudCheck,
      name: "Secure storage",
      desc: "We store the vast majority of the digital assets in secure offline storage.",
    },
    {
      icon: FaUserShield,
      name: "Protected by insurance",
      desc: "Cryptocurrency stored on our servers is covered by our insurance policy.",
    },
    {
      icon: FaAward,
      name: "Industry best practices",
      desc: "Besnik crypto supports a variety of the most popular digital crypto currencies.",
    },
    {
      icon: GiTrade,
      name: "Trade Assets",
      desc: "Discover new and innovative crypto assets with over 200 spot trading pairs and 25 margin.",
    },
  ];
  return (
    <main className="grid xl:grid-cols-2  items-center justify-center gap-20 m-auto my-20">
      <section className="space-y-8 md:w-lg m-auto" >
        <h3 className="text-5xl font-bold text-zinc-800 text-wrap">
          We make crypto easy.
        </h3>
        <p className="text-base font-normal text-zinc-500 text-wrap">
          Specific cryptocurrencies work and get a bit of crypto to try out for
          yourself. Here are a few reasons why you should choose besnik crypto
        </p>
        <Button variant={"default"} size={"lg"}>
          Learn more
        </Button>
      </section>
      <section className="grid md:grid-cols-2 items-center gap-10 ">
        {services.map((service: serviceType, i: number) => (
          <div key={i} className="flex items-start w-80 gap-2">
            <div className="text-orange-400">
              <service.icon size={30} />
            </div>
            <hgroup className="space-y-4">
              <h4 className="text-2xl font-semibold">{service.name}</h4>
              <p className="text-">{service.desc}</p>
            </hgroup>
          </div>
        ))}
      </section>
    </main>
  );
}
