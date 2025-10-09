"use client";

import React from "react";
import { useParams } from "next/navigation";
import { dropdownMenus, SubItem } from "@/components/DropdownMenuData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductPage() {
  const params = useParams();
  const productSlug = params.productSlug as string;
  let product: SubItem | null = null;

  // Search for the product across all categories and subcategories
  for (const [mainCategory, data] of Object.entries(dropdownMenus)) {
    for (const [subcategory, subData] of Object.entries(data.categories)) {
      const foundItem = subData.items.find((item: SubItem) =>
        item.name.toLowerCase().replace(/\s+/g, '-') === productSlug
      );
      if (foundItem) {
        product = foundItem;
        break;
      }
    }
    if (product) break;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <main className="px-6 xl:px-32 py-10 bg-gray-50 min-h-screen">
      {/* Product Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
        <p className="text-gray-600 text-lg">Explore our range of {product.name.toLowerCase()} options.</p>
      </motion.div>

      {/* Variants Section */}
      {product.variants && product.variants.length > 0 ? (
        <motion.section
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Available Variants</h2>
          <div className="space-y-12">
            {product.variants.map((variant, idx) => (
              <motion.div
                key={variant.name}
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                {/* Variant Image (Left) */}
                {variant.image ? (
                  <div className="w-full md:w-1/2 relative h-64 md:h-80">
                    <Image
                      src={variant.image}
                      alt={variant.name}
                      fill
                      className="object-cover rounded-l-xl"
                    />
                  </div>
                ) : (
                  <div className="w-full md:w-1/2 relative h-64 md:h-80 bg-gray-200 rounded-l-xl flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                {/* Variant Details (Right) */}
                <div className="w-full md:w-1/2 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{variant.name}</h3>
                  {variant.description ? (
                    <p className="text-gray-600 text-sm mb-4">{variant.description}</p>
                  ) : (
                    <p className="text-gray-600 text-sm mb-4">No description available.</p>
                  )}
                  {variant.price ? (
                    <p className="text-[#E7671E] font-bold text-lg mb-4">${variant.price.toFixed(2)}</p>
                  ) : (
                    <p className="text-gray-600 text-sm mb-4">Price not available.</p>
                  )}
                  <button className="w-full bg-[#E7671E] text-white py-2 rounded-md hover:bg-orange-600 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ) : (
        <motion.section
          className="max-w-4xl mx-auto text-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600">No variants available for this product.</p>
        </motion.section>
      )}
    </main>
  );
}