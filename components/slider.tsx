"use client"
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Link from 'next/link'
import Autoplay from "embla-carousel-autoplay"

const placeholders = [
  "Write a story about Humpty-Dumpty",
  "How do I make a card?",
  "Write a poem about sunlight",
  "What is Tonsillitis?",
  "Write a haiku on AI",
  "How can I maintain a healthy sleep cycle?"
];

export default function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setPlaceholder(prevPlaceholder => {
          const currentIndex = placeholders.indexOf(prevPlaceholder);
          return placeholders[(currentIndex + 1) % placeholders.length];
        });
        setIsTransitioning(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = "/try-simrik";
    }
  };

  return (
    <Carousel orientation="horizontal" className="w-full" plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.isPlaying}>
      <CarouselContent className="ml-0">
        <CarouselItem className="basis-full p-4">
          <div className="backdrop-blur-lg rounded-lg relative w-full h-[40vh] md:w-full md:h-[50vh] bg-[url('/slides/5.png')] bg-cover overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl md:text-5xl font-normal mb-4 text-white">
                  Our Fastest SLM model: SIMRIK
                </h1>
                <p className="text-xs md:text-xl mb-8 text-white">
                  Generate effective content, make human-like conversations, and more.
                  <br />
                  <small className="text-xxs md:text-xs mb-8 text-white">Based on our GEM-1o</small>
                </p>
                <button className="bg-white text-black px-6 py-2 rounded-full font-normal text-xs hover:bg-opacity-90 transition-colors">
                  <Link href={"/try-simrik"}>Learn More</Link>
                </button>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-full p-4">
          <div className="rounded-lg relative min-w-full h-[40vh] md:h-[50vh] md:w-full bg-neutral-900 bg-cover overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl md:text-5xl font-normal mb-4 text-white">
                  Ask SIMRIK anything
                </h1>
                <div className="w-full max-w-xl mx-auto mt-10">
                  <form onSubmit={handleSubmit} className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-sm text-gray-900 bg-neutral-500 border-none rounded-full focus:outline-none focus:bg-none"
                      placeholder={placeholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-2 mr-4"
                    >
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-full p-4">
          <div className="rounded-lg relative w-full h-[40vh] md:w-full md:h-[50vh] bg-[url('/slides/9.png')] bg-cover overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl md:text-5xl font-normal mb-4 text-white">
                  Spring Update
                </h1>
                <p className="text-xs md:text-xl mb-8 text-white">
                  Introducing GEM-1o and making more capabilities available for free in SIMRIK.
                </p>
                <button className="bg-white text-black px-6 py-2 rounded-full font-normal text-xs hover:bg-opacity-90 transition-colors">
                  <Link href={"/docs"}>Learn More</Link>
                </button>
              </div>
            </div>
          </div>
        </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
