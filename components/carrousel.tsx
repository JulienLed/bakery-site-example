"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import pain from "@/public/pain.webp";
import croissant from "@/public/croissant.webp";
import boulanger from "@/public/boulanger.webp";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function Caroussel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="flex justify-center">
          <Image
            alt="Un boulanger devant sa boulangerie"
            className="w-xs md:w-md rounded-4xl"
            src={boulanger}
            width={1024}
            height={1024}
            priority
            fetchPriority="high"
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image
            alt="Un pain venant d'être fait"
            className="w-xs md:w-md rounded-4xl"
            src={pain}
            width={1024}
            height={1024}
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image
            alt="Un croissant venant d'être fait"
            className="w-xs md:w-md rounded-4xl"
            src={croissant}
            width={1024}
            height={1024}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
