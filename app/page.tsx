import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="container m-auto">
      <header className="flex items-center justify-center gap-20">
        <section className="w-2xl flex-2/5 space-y-8 ">

        <p className="font-semibold text-orange-400 text-base">Join the our crypto exchange</p>
        <h2 className="text-7xl font-bold leading-20 text-zinc-800">Popular way to buy  and sell crypto. </h2>
        <p className="text-lg font-normal text">Besnik crypto is the community-run technology powering <br /> the cryptocurrency, ether and thousands of decentralized <br /> applications.</p>
        <div className="flex items-center shadow-2xl shadow-zinc-200 px-8 py-5 rounded-3xl">
          <Input type="search" placeholder="Enter your mail" className="border-none shadow-none hover:outline-0 text-xl font-normal"/>
          <Button variant={'default'} size={'lg'}>Try Now</Button>
        </div>
        </section>

        {/* Carousel */}
        <section className="bg-primary flex-1/2 h-screen">
        
        </section>
      </header>
    </main>
  );
}
