"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as SwiperClass } from "swiper"; // instance type


// Type for poster images
const posters: string[] = [
  "/images/corporate_and_gifts_banner.webp",
  "/images/office_and_store_branding.webp",
  "/images/corporate_and_gifts_banner.webp",
  "/images/office_and_store_branding.webp",
  "/images/corporate_and_gifts_banner.webp",
];

export default function PosterCarousel() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: true, // stop autoplay on swipe
          pauseOnMouseEnter: true,    // stop autoplay on hover
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="cursor-grab rounded-xl"
      >
        {posters.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
              <Image
                src={src}
                alt={`Poster ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
