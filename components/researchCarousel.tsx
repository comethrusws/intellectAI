import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    title: "Aligning language models to follow instructions",
    description: "We've trained language models that are much better at following user intentions than GPT-3.",
    image: "/research/res3.png",
    bgColor: "/research/res3.png"
  },
  {
    title: "Summarizing books with human feedback",
    description: "We've trained a model to summarize entire books with human feedback.",
    image: "/research/res1.png",
    bgColor: "/research/res1.png"
  },
  {
    title: "Language models are few-shot learners",
    description: "We trained GPT-3, an autoregressive language model with 175 billion parameters.",
    image: "/research/res2.png",
    bgColor: "/research/res2.png"
  }
];

const ResearchCarousel = () => {
  return (
    <Carousel className="w-full mt-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className={`${item.bgColor} h-full`}>
                <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                  <h3 className="text-xs font-normal mb-2">{item.title}</h3>
                  <p className="text-center">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:hidden ml-3" />
      <CarouselNext className="md:hidden mr-3" />
    </Carousel>
  );
};

export default ResearchCarousel;