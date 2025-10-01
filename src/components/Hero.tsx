"use client";
import { FaStar, FaComments, FaLock, FaTruck } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const features = [
    { text: "1010+ Reviews", icon: <FaStar className="text-yellow-500 w-5 h-5" />, rating: "4.7" },
    { text: "Chat or Email Us", icon: <FaComments className="text-blue-500 w-5 h-5" /> },
    { text: "Safe and Secure Payment Processing", icon: <FaLock className="text-green-600 w-5 h-5" /> },
    { text: "Flexible Venue Delivery", icon: <FaTruck className="text-orange-500 w-5 h-5" /> },
  ];

  const categories = [
    { name: "PRINT AND MARKETING", img: "/images/Folders.webp" },
    { name: "OFFICE BRANDING", img: "/images/Folders.webp" },
    { name: "SIGNAGES", img: "/images/Folders.webp" },
    { name: "FLAGS", img: "/images/Folders.webp" },
    { name: "BACKDROPS & EXHIBITIONS", img: "/images/Folders.webp" },
    { name: "CORPORATE GIFTS", img: "/images/Folders.webp" },
    { name: "VIDEO BROCHURE", img: "/images/Folders.webp" },
  ];

  return (
    <>
      <section className="w-full border-b border-gray-200 bg-gray-100">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-0 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left side heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-500 break-words">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600">
              Shop.
            </span>{" "}
            <span className="block sm:inline">Celebrate every moment.</span>
          </h2>

          {/* Right side features */}
          <div className="flex flex-col space-y-4 w-full md:w-auto">
            {features.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                {item.icon}
                <span className="text-gray-700 text-base font-medium break-words">
                  {item.text}
                  {item.rating && (
                    <span className="ml-2 text-yellow-500 font-semibold">⭐ {item.rating}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full bg-gray-100 py-8">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-0 overflow-x-auto lg:overflow-visible">
          <div className="flex gap-4 justify-start lg:justify-between">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform w-20 sm:w-36 md:w-32 lg:w-32"
              >
                <div className="w-20 h-20 relative mb-2 md:w-24 md:h-24">
                  <Image src={cat.img} alt={cat.name} fill className="object-contain" />
                </div>
                <span className="text-gray-800 text-xs md:text-sm text-center font-medium">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
