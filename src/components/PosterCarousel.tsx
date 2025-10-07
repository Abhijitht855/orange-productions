// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Swiper as SwiperClass } from "swiper"; // instance type


// // Type for poster images
// const posters: string[] = [
//   "/images/corporate_and_gifts_banner.webp",
//   "/images/office_and_store_branding.webp",
//   "/images/corporate_and_gifts_banner.webp",
//   "/images/office_and_store_branding.webp",
//   "/images/corporate_and_gifts_banner.webp",
// ];

// export default function PosterCarousel() {
//   const swiperRef = useRef<SwiperClass | null>(null);

//   return (
//     <div className="w-full max-w-7xl mx-auto py-10">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         loop
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: true, // stop autoplay on swipe
//           pauseOnMouseEnter: true,    // stop autoplay on hover
//         }}
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         className="cursor-grab rounded-xl"
//       >
//         {posters.map((src, index) => (
//           <SwiperSlide key={index}>
//             <div className="rounded-xl overflow-hidden shadow-lg relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
//               <Image
//                 src={src}
//                 alt={`Poster ${index + 1}`}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// "use client";

// import React from 'react';

// export default function InfiniteScrollGallery() {
//   // Sample images - replace with your actual image paths
//   const images = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop', alt: 'Person 1', className: 'row-span-2' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=400&fit=crop', alt: 'Watch' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=800&fit=crop', alt: 'Phone', className: 'row-span-2' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop', alt: 'Tablet' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop', alt: 'People' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', alt: 'Person 2' },
//   ];

//   // Duplicate images for seamless loop
//   const duplicatedImages = [...images, ...images, ...images];

//   return (
//     <div className="w-full overflow-hidden bg-gray-100 py-12">
//       <style jsx>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }

//         .animate-scroll {
//           animation: scroll-left 30s linear infinite;
//         }

//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="relative">
//         <div className="flex animate-scroll">
//           {duplicatedImages.map((image, index) => (
//             <div
//               key={`${image.id}-${index}`}
//               className="flex-shrink-0 px-3"
//               style={{ width: '380px' }}
//             >
//               <div className="grid grid-rows-2 gap-3 h-[600px]">
//                 {index % 6 === 0 && (
//                   <div className="row-span-2 rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                     <img
//                       src={duplicatedImages[index].src}
//                       alt={duplicatedImages[index].alt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 )}
//                 {index % 6 === 1 && (
//                   <>
//                     <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                       <img
//                         src={duplicatedImages[index].src}
//                         alt={duplicatedImages[index].alt}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                       <img
//                         src={duplicatedImages[index + 1].src}
//                         alt={duplicatedImages[index + 1].alt}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </>
//                 )}
//                 {index % 6 === 2 && (
//                   <div className="row-span-2 rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                     <img
//                       src={duplicatedImages[index].src}
//                       alt={duplicatedImages[index].alt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 )}
//                 {index % 6 === 3 && (
//                   <>
//                     <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                       <img
//                         src={duplicatedImages[index].src}
//                         alt={duplicatedImages[index].alt}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                       <img
//                         src={duplicatedImages[index + 1].src}
//                         alt={duplicatedImages[index + 1].alt}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React from "react";

// export default function InfiniteScrollGallery() {
//   // Sample images - replace with your actual image paths
//   const images = [
//     { id: 1, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop", alt: "Person 1", className: "row-span-2" },
//     { id: 2, src: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=400&fit=crop", alt: "Watch" },
//     { id: 3, src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=800&fit=crop", alt: "Phone", className: "row-span-2" },
//     { id: 4, src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop", alt: "Tablet" },
//     { id: 5, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop", alt: "People" },
//     { id: 6, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", alt: "Person 2" },
//   ];

//   // Duplicate images once for seamless scroll
//   const duplicatedImages = [...images, ...images];

//   return (
//     <div className="w-full overflow-hidden bg-gray-100 py-12 relative">
//       <style jsx>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .scroll-track {
//           display: flex;
//           animation: scroll-left 40s linear infinite;
//         }

//         .scroll-track:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="relative flex overflow-hidden">
//         {/* Two identical tracks for seamless infinite scroll */}
//         {[0, 1].map((trackIndex) => (
//           <div key={trackIndex} className="scroll-track">
//             {duplicatedImages.map((image, index) => (
//               <div
//                 key={`${image.id}-${index}-${trackIndex}`}
//                 className="flex-shrink-0 px-3"
//                 style={{ width: "380px" }}
//               >
//                 <div className="grid grid-rows-2 gap-3 h-[600px]">
//                   {index % 6 === 0 && (
//                     <div className="row-span-2 rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                       <img
//                         src={image.src}
//                         alt={image.alt}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   )}
//                   {index % 6 === 1 && (
//                     <>
//                       <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                         <img
//                           src={image.src}
//                           alt={image.alt}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                         <img
//                           src={duplicatedImages[(index + 1) % duplicatedImages.length].src}
//                           alt={duplicatedImages[(index + 1) % duplicatedImages.length].alt}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </>
//                   )}
//                   {index % 6 === 2 && (
//                     <div className="row-span-2 rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                       <img
//                         src={image.src}
//                         alt={image.alt}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   )}
//                   {index % 6 === 3 && (
//                     <>
//                       <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                         <img
//                           src={image.src}
//                           alt={image.alt}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
//                         <img
//                           src={duplicatedImages[(index + 1) % duplicatedImages.length].src}
//                           alt={duplicatedImages[(index + 1) % duplicatedImages.length].alt}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";

export default function InfiniteScrollGallery() {
  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop", alt: "Person 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=400&fit=crop", alt: "Watch" },
    { id: 3, src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop", alt: "Tablet" },
    { id: 4, src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=800&fit=crop", alt: "Phone" },
    { id: 5, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop", alt: "People" },
    { id: 6, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", alt: "Person 2" },
  ];

  // Duplicate for seamless scroll
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-16">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .scroll-track {
          display: flex;
          animation: scroll-left 200s linear infinite;
        }

        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative flex overflow-hidden">
        <div className="scroll-track">
          {duplicatedImages.map((_, outerIndex) => {
            const startIndex = (outerIndex * 6) % images.length;

            return (
              <React.Fragment key={`group-${outerIndex}`}>
                {/* Column 1: Tall image */}
                <div className="flex-shrink-0" style={{ width: "300px", padding: "0 8px" }}>
                  <div className="h-[480px]">
                    <div className="h-full rounded-[32px] overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-[1.02]">
                      <img
                        src={images[(startIndex + 0) % images.length].src}
                        alt={images[(startIndex + 0) % images.length].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Column 2: Two stacked images */}
                <div className="flex-shrink-0" style={{ width: "360px", padding: "0 8px" }}>
                  <div className="h-[480px] flex flex-col gap-4">
                    <div className="flex-1 rounded-[32px] overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-[1.02]">
                      <img
                        src={images[(startIndex + 1) % images.length].src}
                        alt={images[(startIndex + 1) % images.length].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 rounded-[32px] overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-[1.02]">
                      <img
                        src={images[(startIndex + 2) % images.length].src}
                        alt={images[(startIndex + 2) % images.length].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Column 3: Tall image */}
                <div className="flex-shrink-0" style={{ width: "560px", padding: "0 8px" }}>
                  <div className="h-[480px]">
                    <div className="h-full rounded-[32px] overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-[1.02]">
                      <img
                        src={images[(startIndex + 3) % images.length].src}
                        alt={images[(startIndex + 3) % images.length].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Column 4: Two stacked images */}
                <div className="flex-shrink-0" style={{ width: "360px", padding: "0 8px" }}>
                  <div className="h-[480px] flex flex-col gap-4">
                    <div className="flex-1 rounded-[32px] overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-[1.02]">
                      <img
                        src={images[(startIndex + 4) % images.length].src}
                        alt={images[(startIndex + 4) % images.length].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 rounded-[32px] overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-[1.02]">
                      <img
                        src={images[(startIndex + 5) % images.length].src}
                        alt={images[(startIndex + 5) % images.length].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}