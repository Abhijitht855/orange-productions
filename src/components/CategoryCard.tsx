// "use client";

// import Image from "next/image";
// import React from "react";

// interface CategoryCardProps {
//   name: string;
//   image?: string;
// }

// const CategoryCard: React.FC<CategoryCardProps> = ({ name, image }) => {
//   return (
//     <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
//       <div className="aspect-square relative">
//         <Image
//           src={image || "/images/placeholder.png"}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="p-2 text-center">
//         <h4 className="text-gray-700 text-sm font-medium">{name}</h4>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;

"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

interface CategoryCardProps {
  name: string;
  image?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image }) => {
  const productSlug = slugify(name);

  return (
    <Link href={`/product/${productSlug}`}>
      <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="aspect-square relative group-hover:scale-105 transition-transform duration-300">
          <Image
            src={image || "/images/placeholder.png"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-2 text-center">
          <h4 className="text-gray-700 text-sm font-medium group-hover:text-[#E7671E] transition-colors">
            {name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;