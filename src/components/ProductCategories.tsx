"use client";

import React from "react";
import { Star } from "lucide-react";

interface Product {
  name: string;
  rating: number;
  image: string;
}

interface Category {
  title: string;
  products: Product[];
}

export default function ProductCategories() {
  const categories: Category[] = [
    {
      title: "Lifestyle",
      products: [
        {
          name: "Scarf",
          rating: 4.5,
          image:
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=300&h=300&fit=crop",
        },
        {
          name: "Pillows",
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300&h=300&fit=crop",
        },
        {
          name: "Bean Bag",
          rating: 4.5,
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
        },
      ],
    },
    {
      title: "Just for You",
      products: [
        {
          name: "Bottle",
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
        },
        {
          name: "PU Notebook",
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=300&h=300&fit=crop",
        },
        {
          name: "Wax Seal",
          rating: 4.5,
          image:
            "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?w=300&h=300&fit=crop",
        },

      ],
    },
    {
      title: "Décor",
      products: [
        {
          name: "Home Wallpaper",
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1615873968403-89e068629265?w=300&h=300&fit=crop",
        },
        {
          name: "Dining Table Cloth",
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=300&h=300&fit=crop",
        },
        {
          name: "Balloon Décor",
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop",
        },
      ],
    },
  ];

  // Render stars with TypeScript-friendly typing
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-4 h-4 fill-orange-400 text-orange-400" />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-orange-400 absolute" />
          <div className="overflow-hidden w-2 absolute">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
          </div>
        </div>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-orange-400" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 lg:px-6 xl:px-32">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Title */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-[#E7671E] after:rounded">
                  {category.title}
                </h2>
              </div>

              {/* Products List */}
              <div className="space-y-4 sm:space-y-6">
                {category.products.map((product, prodIndex) => (
                  <div
                    key={prodIndex}
                    className="flex gap-4 items-start hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow">
                      <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">
                        {product.name}
                      </h3>
                      <div className="flex gap-1">{renderStars(product.rating)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}