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
import Link from 'next/link';

interface CarouselItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ResearchCarouselProps {
  items: CarouselItem[];
}

const ResearchCarousel: React.FC<ResearchCarouselProps> = ({ items }) => {
  return (
    <div className="w-full max-w-[90vw] mx-auto px-4 py-8 lg:overflow-hidden md:overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3">
              <div className="aspect-square md:aspect-[16/9] lg:aspect-[16/9]">
                <Card className="outline-none relative h-full md:h-[70vh] md:w-[50vh] cursor-pointer">
                  <CardContent className="p-0 h-full md:w-full">
                    <Link href={item.link}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg md:hover:zoom-in-75 md:zoom-in-0"
                      />
                      <div className="absolute text-left inset-0 flex flex-col justify-end p-4 md:p-6 text-white bg-gradient-to-t from-black/50 to-transparent w-full">
                        <h3 className="text-xs md:text-sm font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-base lg:text-base">{item.description}</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 md:hidden" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden" />
      </Carousel>
    </div>
  );
};

export default ResearchCarousel;
