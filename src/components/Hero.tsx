"use client";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slugify"; // 🔹 import the utility

export default function Hero() {
  const categories = [
    { name: "PRINT AND MARKETING", img: "/images/blank-ruled-notebook-white-table.png" },
    { name: "OFFICE BRANDING", img: "/images/metalplate1.jpg" },
    { name: "SIGNAGES", img: "/images/flat-lay-frame-with-floral-concept-removebg-preview.png" },
    { name: "FLAGS", img: "/images/flag.jpg" },
    { name: "BACKDROPS & EXHIBITION", img: "/images/476-removebg-preview.png" },
    { name: "CORPORATE GIFTS", img: "/images/headphone.jpg" },
    { name: "VIDEO BROCHURE", img: "/images/eid_chocolate_box_13-removebg-preview.png" },

    
  ];

  return (
    <>
      <section className="w-full px-4 lg:px-6 xl:px-32">
        <div className="mx-auto w-full py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left side heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-500 break-words">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E7671E] to-[#FF9A4D]">Shop.</span>{" "}
            <span className="block sm:inline">Celebrate every moment.</span>
          </h2>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full bg-gray-100 py-8 px-4 lg:px-6 xl:px-32">
        <div className="mx-auto w-full overflow-x-auto lg:overflow-visible">
          <div className="flex gap-4 justify-start lg:justify-between">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={`/category/${slugify(cat.name)}`} // 🔹 use utility
                className="flex-shrink-0 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform w-20 sm:w-36 md:w-32 lg:w-32"
              >
                <div className="w-20 h-20 relative mb-2 md:w-32 md:h-32">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-800 text-xs md:text-sm text-center font-medium hover:text-[#E7671E] transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
