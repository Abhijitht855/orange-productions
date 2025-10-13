"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

export default function ProductCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = 400;
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const products: Product[] = [
  { id: 1, name: "Rollup Stand", description: "Premium Rollup Stand", price: "₹150", image: "images/Home Wallpaper.webp" },
  { id: 2, name: "X Banner Stand", description: "High-quality X Banner Stand", price: "₹200", image: "images/Home Wallpaper.webp" },
  { id: 3, name: "Broad Base Roll Up Stand", description: "Sturdy broad base rollup stand", price: "₹300", image: "images/Home Wallpaper.webp" },
  { id: 4, name: "Classic Backlit Standee", description: "Illuminated backlit standee", price: "₹100", image: "images/Home Wallpaper.webp" },
  { id: 5, name: "Barricade", description: "Durable barricade for crowd control", price: "₹180", image: "images/Home Wallpaper.webp" },
  { id: 6, name: "Cut Out Standee", description: "Custom cut-out standee", price: "₹120", image: "images/Home Wallpaper.webp" },
  { id: 7, name: "Toblerone Frame", description: "Triangular Toblerone frame display", price: "₹250", image: "images/Home Wallpaper.webp" },
  { id: 8, name: "Popout Banner/Spring A Board", description: "Popout banner with spring A board", price: "₹90", image: "images/Home Wallpaper.webp" },
];


    return (
        <section>
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-0 pt-28">
                <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-500 break-words ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600">
                        Standees
                    </span>{" "}
                    
                </h2>
            </div>

            <div className="relative w-full">
                {/* Left Button */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
                >
                    <ChevronLeft className="w-7 h-7" />
                </button>

                {/* Product Row */}
                <div
  ref={scrollRef}
  className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-6 px-4 md:px-24"
>
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white shadow-xl relative 
                 min-w-[220px] sm:min-w-[280px] md:min-w-[320px] 
                 h-[400px] sm:h-[480px] md:h-[500px] 
                 rounded-2xl flex-shrink-0 overflow-hidden 
                 flex flex-col justify-between
                 transform transition-transform duration-300 hover:scale-102 hover:shadow-2xl"
    >
      {/* Top Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-3xl font-bold text-black">{product.name}</h3>
        <p className="text-gray-800 text-sm sm:text-lg mt-1 sm:mt-2">
          {product.description}
        </p>
        <p className="text-gray-600 text-sm sm:text-base mt-1">{product.price}</p>
      </div>

      {/* Bottom Image */}
      <div className="w-full flex justify-center items-end">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain max-h-[200px] sm:max-h-[300px] md:max-h-[320px]"
        />
      </div>
    </div>
  ))}
</div>



                {/* Right Button */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
                >
                    <ChevronRight className="w-7 h-7" />
                </button>
            </div>
        </section>
    );
}
