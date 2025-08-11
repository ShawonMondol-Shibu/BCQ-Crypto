import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { testimonialType } from '@/types/type'

export default function Testimonial() {

  const testimonials:testimonialType[] = [
    {image:"/images/man.png",name: "Alejandro Nicolas",nameSub:"Ingenieria,Argentina", title:'All your crypto in one place', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ."},
    {image:"/images/man1.png",name: "Hector Colombo",nameSub:"Ingenieria,Argentina", title:'At home or on the go', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ."},
    {image:"/images/man.png",name: "Alejandro Nicolas",nameSub:"Ingenieria,Argentina", title:'All your crypto in one place', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ."},
  ]

  return (
    <main className='bg-primary p-14 rounded-3xl space-y-8'>
      <h2 className='text-5xl font-bold text-zinc-50'>The Easiest and Most </h2>
<Carousel className='my-10'>
  <CarouselContent className='mb-10'>

    {
      testimonials.map((item:testimonialType,i:number)=> <CarouselItem key={i} className='basis-1/2 text-center'>
      <Card>
        <CardContent className='space-y-6'>
          <div className='flex items-center gap-4 m-auto w-fit'>
            <Image src={item.image} width={56} height={56} alt={item.name} className='rounded-full'/>
            <div>
              <p className='text-base font-semibold'>{item.name}</p>
              <p className='text-zinc-500 text-base font-light'>{item.nameSub}</p>
            </div>
          </div>

          <h2 className='text-2xl font-semibold mt-6'>{item.title}</h2>

          <p className='text-base text-zinc-500'>{item.desc}</p>
        </CardContent>
      </Card>
    </CarouselItem>)
    }
   

  </CarouselContent>
   <div className='absolute bottom-0 left-[50%] -translate-x-[50%]'>
  <CarouselPrevious/>
  <CarouselNext/>
   </div>
</Carousel>
    </main>
  )
}
