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

  const [selectedVariant, setSelectedVariant] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedQuantity, setSelectedQuantity] = React.useState("");

  const currentVariant = product?.variants?.[selectedVariant];
  const price = currentVariant?.price || 0;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <main className="px-6 xl:px-32 py-10 bg-gray-50 min-h-screen">
      {/* Product Header with Tabs */}
      <motion.div
        className="max-w-7xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
        <div className="flex border-b border-gray-200 gap-8">
          <button className="pb-3 px-1 border-b-2 border-[#E7671E] text-[#E7671E] font-medium">
            Price
          </button>
          <button className="pb-3 px-1 text-gray-600 hover:text-gray-900 font-medium">
            About
          </button>
        </div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentVariant?.image ? (
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src={currentVariant.image}
                  alt={currentVariant.name}
                  fill
                  className="object-contain"
                />
              </div>
              {currentVariant.name && (
                <p className="text-gray-700 font-medium text-center mt-6">
                  {currentVariant.name}
                </p>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 h-96 lg:h-[500px] flex items-center justify-center">
              <span className="text-gray-400">No Image Available</span>
            </div>
          )}
        </motion.div>

        {/* Right Column - Product Details */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Variant Selection */}
          {product.variants && product.variants.length > 1 && (
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-3">
                Variant:
              </label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] text-gray-700"
              >
                {product.variants.map((variant, idx) => (
                  <option key={idx} value={idx}>
                    {variant.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-3">
              Size:
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] text-gray-700"
            >
              <option value="">--Select--</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-3">
              Quantity:
            </label>
            <select
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] text-gray-700"
            >
              <option value="">--Select--</option>
              <option value="100">100</option>
              <option value="250">250</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="2500">2500</option>
            </select>
          </div>

          {/* Price Display */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-baseline gap-3">
              <span className="text-gray-600 font-medium">Total :</span>
              <span className="text-3xl font-bold text-gray-900">₹{price}</span>
              <span className="text-gray-500">(Excl. VAT)</span>
            </div>
          </div>

          {/* Note */}
          <div className="mb-6 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">Note:</span> The prices listed are for readymade envelopes.
            </p>
            <p className="text-sm text-gray-600">
              No printing will be done on the flaps, edges, or reverse side of the envelopes.
            </p>
          </div>

          {/* Description */}
          {currentVariant?.description && (
            <p className="text-gray-600 text-sm mb-6">
              {currentVariant.description}
            </p>
          )}

          {/* Order Button */}
          <button className="w-full bg-[#E7671E] text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors font-semibold text-lg">
            Order Now
          </button>
        </motion.div>
      </div>
    </main>
  );
}