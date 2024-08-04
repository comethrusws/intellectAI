import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from './ui/carousel'
import Link from 'next/link'

export default function Slider(){
  return (
    <Carousel className="w-full rounded-sm">
      <CarouselContent className="rounded-ls">
        <CarouselItem >
        <div className="rounded-lg relative w-[80vw] h-[70vh] md:w-full md:h-[60vh] bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-white">
                Our Fastest SLM model: SIMRIK
              </h1>
              <p className="text-xl mb-8 text-white">
                Chat about email, screenshots, files, and anything on your screen.
                <br />
                <small className="text-xs mb-8 text-white">Based on SAGA-2</small>
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                <Link href={"/try-simrik"}>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )}
