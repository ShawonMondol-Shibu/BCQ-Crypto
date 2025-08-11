"use client";
import About from "@/components/layout/About";
import Blog from "@/components/layout/Blog";
import Features from "@/components/layout/Features";
import Services from "@/components/layout/Services";
import Testimonial from "@/components/layout/Testimonial";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container m-auto px-5">
      <header className="flex items-center justify-center gap-20">
        <section className="w-2xl flex-2/5 space-y-4">
          <p className="font-semibold text-orange-400 text-base">
            Join the our crypto exchange
          </p>
          <h2 className="text-7xl font-bold leading-24 text-zinc-800">
            Popular way to buy and sell crypto.{" "}
          </h2>
          <p className="text-lg font-normal text">
            Besnik crypto is the community-run technology powering <br /> the
            cryptocurrency, ether and thousands of decentralized <br />{" "}
            applications.
          </p>
          <div className="flex items-center shadow-2xl shadow-zinc-200 px-8 py-5 rounded-3xl">
            <Input
              type="search"
              placeholder="Enter your mail"
              className="border-none shadow-none hover:outline-0 text-xl font-normal"
            />
            <Button variant={"default"} size={"lg"}>
              Try Now
            </Button>
          </div>
        </section>

        {/* Carousel */}
        <section className="bg-primary flex-1/2 h-screen">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-max"
          >
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 h-screen m-auto">
                      <Image src={'/images/carousel.png'} alt="carousel image" width={500} height={1000}/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className=" absolute bottom-0 left-[50%] -translate-x-[50%]">
            <CarouselPrevious />
            <CarouselNext />
            </div>
          </Carousel>
        </section>
      </header>


      {/* About section */}
      <About/>

      {/* Service Section */}
      <Services/>

      {/* Features Section */}
      <Features/>

      {/* Testimonials Section */}
      <Testimonial/>

      {/* Blog Section */}
      <Blog/>
    </main>
  );
}
