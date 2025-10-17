// "use client";

// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Product {
//     id: number;
//     name: string;
//     description: string;
//     price: string;
//     image: string;
// }

// export default function ProductCarousel() {
//     const scrollRef = useRef<HTMLDivElement>(null);

//     const scroll = (direction: "left" | "right") => {
//         if (!scrollRef.current) return;
//         const scrollAmount = 400;
//         if (direction === "left") {
//             scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//         } else {
//             scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         }
//     };

//     const products: Product[] = [
//         { id: 1, name: "Notebook", description: "Premium quality notebook", price: "₹150", image: "images/custom_design_pu_notebook_dubai.webp" },
//         { id: 2, name: "Binding", description: "Professional binding services", price: "₹200", image: "images/custom_design_pu_notebook_dubai.webp" },
//         { id: 3, name: "Business Cards", description: "High-quality business cards", price: "₹300", image: "images/custom_design_pu_notebook_dubai.webp" },
//         { id: 4, name: "Envelopes", description: "Durable envelopes", price: "₹100", image: "images/custom_design_pu_notebook_dubai.webp" },
//         { id: 5, name: "Folder", description: "Organizer folder for documents", price: "₹180", image: "images/custom_design_pu_notebook_dubai.webp" },
//         { id: 6, name: "Notepad", description: "Compact notepad for notes", price: "₹120", image: "images/custom_design_pu_notebook_dubai.webp" },
//         { id: 7, name: "Certificate", description: "Official certificates printing", price: "₹250", image: "images/custom_design_pu_notebook_dubai.webp" },
//         { id: 8, name: "Handtags", description: "Custom handtags for products", price: "₹90", image: "images/custom_design_pu_notebook_dubai.webp" },
//     ];

//     return (
//         <section className="bg-gray-100">
//             <div className="mx-auto w-full max-w-7xl px-6 lg:px-0 pt-28 bg-gray-100">
//                 <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-500 break-words ">
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E7671E] to-[#FF9A4D]">
//                         Stationery
//                     </span>{" "}
//                     <span className="block sm:inline">Items</span>
//                 </h2>
//             </div>

//             <div className="relative w-full">
//                 {/* Left Button */}
//                 <button
//                     onClick={() => scroll("left")}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
//                 >
//                     <ChevronLeft className="w-7 h-7" />
//                 </button>

//                 {/* Product Row */}
//                 <div
//   ref={scrollRef}
//   className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-6 px-4 md:px-24"
// >
//   {products.map((product) => (
//     <div
//       key={product.id}
//       className="bg-white shadow-xl relative 
//                  min-w-[220px] sm:min-w-[280px] md:min-w-[320px] 
//                  h-[400px] sm:h-[480px] md:h-[500px] 
//                  rounded-2xl flex-shrink-0 overflow-hidden 
//                  flex flex-col justify-between
//                  transform transition-transform duration-300 hover:scale-102 hover:shadow-2xl"
//     >
//       {/* Top Content */}
//       <div className="p-4 sm:p-6">
//         <h3 className="text-xl sm:text-3xl font-bold text-black">{product.name}</h3>
//         <p className="text-gray-800 text-sm sm:text-lg mt-1 sm:mt-2">
//           {product.description}
//         </p>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">{product.price}</p>
//       </div>

//       {/* Bottom Image */}
//       <div className="w-full flex justify-center items-end">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-auto object-contain max-h-[200px] sm:max-h-[300px] md:max-h-[320px]"
//         />
//       </div>
//     </div>
//   ))}
// </div>



//                 {/* Right Button */}
//                 <button
//                     onClick={() => scroll("right")}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
//                 >
//                     <ChevronRight className="w-7 h-7" />
//                 </button>
//             </div>
//         </section>
//     );
// }

// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { Swiper as SwiperType } from "swiper";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: string;
//   image: string;
// }

// export default function ProductCarousel() {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);


//   const products: Product[] = [
//     { id: 1, name: "Notebook", description: "Premium quality notebook", price: "₹150", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     { id: 2, name: "Binding", description: "Professional binding services", price: "₹200", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     { id: 3, name: "Business Cards", description: "High-quality business cards", price: "₹300", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     { id: 4, name: "Envelopes", description: "Durable envelopes", price: "₹100", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     { id: 5, name: "Folder", description: "Organizer folder for documents", price: "₹180", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     { id: 6, name: "Notepad", description: "Compact notepad for notes", price: "₹120", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     { id: 7, name: "Certificate", description: "Official certificates printing", price: "₹250", image: "/images/custom_design_pu_notebook_dubai.webp" },
//     { id: 8, name: "Handtags", description: "Custom handtags for products", price: "₹90", image: "/images/custom_design_pu_notebook_dubai.webp" },
//   ];

//   return (
//     <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
//       {/* Header */}
//       <div className="px-4 lg:px-6 xl:px-32 mb-8">
//         <h2 className="text-4xl sm:text-5xl font-semibold">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E7671E] to-[#FF9A4D]">
//             Stationery
//           </span>{" "}
//           <span className="text-neutral-500">Items</span>
//         </h2>
//       </div>

//       {/* Swiper Container */}
//       <div className="relative">
//         {isMounted && (
//           <Swiper
//             modules={[Pagination, Navigation]}
//             spaceBetween={24}
//             slidesPerView={1.1}
//             slidesOffsetBefore={16}
//             slidesOffsetAfter={16}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             breakpoints={{
//               640: { slidesPerView: 1.2, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
//               768: { slidesPerView: 1.6, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
//               1024: { slidesPerView: 2.5, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
//               1280: { slidesPerView: 3.5, slidesOffsetBefore: 128, slidesOffsetAfter: 128 },
//             }}
//             centeredSlides={false}
//           >
//             {products.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-white shadow-sm cursor-pointer flex flex-col justify-between">
//                   <div className="p-4 sm:p-6">
//                     <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-2">
//                       {product.description}
//                     </p>
//                     <p className="text-gray-500 mt-2 font-medium">{product.price}</p>
//                   </div>

//                   <div className="w-full h-full relative">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       width={1080}
//                       height={1350}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}


//         {/* Navigation Buttons */}
//         <div className="absolute inset-y-0 left-4 flex items-center z-10">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="rounded-full p-2 cursor-pointer transition-all bg-gray-400/30 hover:bg-gray-400/40"
//           >
//             <FaChevronLeft size={40} className="text-gray-600 drop-shadow-lg" />
//           </button>
//         </div>

//         <div className="absolute inset-y-0 right-4 flex items-center z-10">
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="rounded-full p-2 cursor-pointer transition-all bg-gray-400/30 hover:bg-gray-400/40"
//           >
//             <FaChevronRight size={40} className="text-gray-600 drop-shadow-lg" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { dropdownMenus } from "./DropdownMenuData"; // Adjust the import path as needed

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure Swiper renders only on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extract "Stationery Items" from "PRINT AND MARKETING" menu
  const stationeryItems = dropdownMenus["PRINT AND MARKETING"].categories["Stationery Items"].items;

  // Map items to Product interface
  const products: Product[] = stationeryItems.map((item, index) => ({
    id: index + 1,
    name: item.name,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: `₹${150 + index * 30}`, // Placeholder prices from original
    image: item.image || "/images/placeholder.webp", // Use item image with fallback
  }));

  // Function to generate slug from product name
  const generateSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Header */}
      <div className="px-4 lg:px-6 xl:px-32 mb-8">
        <h2 className="text-4xl sm:text-5xl font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E7671E] to-[#FF9A4D]">
            Stationery
          </span>{" "}
          <span className="text-neutral-500">Items</span>
        </h2>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        {isMounted && (
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1.1}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 1.2, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
              768: { slidesPerView: 1.6, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
              1024: { slidesPerView: 2.5, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
              1280: { slidesPerView: 3.5, slidesOffsetBefore: 128, slidesOffsetAfter: 128 },
            }}
            centeredSlides={false}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link href={`/product/${generateSlug(product.name)}`}>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-white shadow-sm cursor-pointer flex flex-col justify-between">
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="text-gray-500 mt-2 font-medium">{product.price}</p>
                    </div>

                    <div className="w-full h-full relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={1080}
                        height={1350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-4 flex items-center z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="rounded-full p-2 cursor-pointer transition-all bg-gray-400/30 hover:bg-gray-400/40"
          >
            <FaChevronLeft size={40} className="text-gray-600 drop-shadow-lg" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-4 flex items-center z-10">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="rounded-full p-2 cursor-pointer transition-all bg-gray-400/30 hover:bg-gray-400/40"
          >
            <FaChevronRight size={40} className="text-gray-600 drop-shadow-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}