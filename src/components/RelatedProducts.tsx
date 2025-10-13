"use client";

import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

const relatedProducts = [
  { name: "Product 1", image: "/images/personalized_note_cubes_printing_dubai.webp" },
  { name: "Product 2", image: "/images/personalized_note_cubes_printing_dubai.webp" },
  { name: "Product 3", image: "/images/personalized_note_cubes_printing_dubai.webp" },
  { name: "Product 4", image: "/images/personalized_note_cubes_printing_dubai.webp" },
];

export default function RelatedProducts() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
          >
            <div className="aspect-square w-full relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
              <span className="text-[#E7671E] text-xs mt-1 inline-flex items-center">
                View <FiChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
