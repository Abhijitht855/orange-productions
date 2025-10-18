// "use client";

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

// interface Poster {
//   title: string;
//   description: string;
//   image: string;
// }

// const steps: Poster[] = [
//   { title: "Step 1", description: "Choose your product", image: "/images/Home Wallpaper.webp" },
//   { title: "Step 2", description: "Add to cart", image: "/images/Home Wallpaper.webp" },
//   { title: "Step 3", description: "Provide details", image: "/images/Home Wallpaper.webp" },
//   { title: "Step 4", description: "Make payment", image: "/images/Home Wallpaper.webp" },
//   { title: "Step 5", description: "Track your order", image: "/images/Home Wallpaper.webp" },
//   { title: "Step 6", description: "Receive product", image: "/images/Home Wallpaper.webp" },
//     { title: "Step 6", description: "Receive product", image: "/images/Home Wallpaper.webp" },
// ];

// export default function OrderProcess() {
//   const swiperRef = useRef<any>(null);

//   return (
//     <div className="w-full py-20 bg-gray-50 relative">
//       <h2 className="text-3xl font-bold text-center mb-8">Order Process</h2>

//       <div className="">
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={10}
//           slidesPerView={1.2} // show part of next card
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           breakpoints={{
//             640: { slidesPerView: 1.3 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           centeredSlides={false}
//         >
//           {steps.map((step, idx) => (
//             <SwiperSlide key={idx} className={idx === 0 ? "ml-4 sm:ml-6" : ""}>
//               <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center h-[28rem] mb-4">
//                 <div className="text-center mb-4">
//                   <h3 className="text-xl font-semibold">{step.title}</h3>
//                   <p className="text-gray-600">{step.description}</p>
//                 </div>
//                 <img
//                   src={step.image}
//                   alt={step.title}
//                   className="w-full h-full object-contain mt-auto"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Buttons above the cards */}
//         <div className="absolute bottom-4 right-4 flex gap-4 z-10">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
//           >
//             <FaChevronCircleLeft size={24} />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
//           >
//             <FaChevronCircleRight size={24} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useRef } from "react";
// import { Swiper as SwiperType } from "swiper";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

// interface Poster {
//   title: string;
//   description: string;
//   image: string;
// }

// const steps: Poster[] = [
//   { title: "Step 1", description: "Choose your product", image: "/images/Social.jpg" },
//   { title: "Step 2", description: "Add to cart", image: "/images/Social.jpg" },
//   { title: "Step 3", description: "Provide details", image: "/images/Social.jpg" },
//   { title: "Step 4", description: "Make payment", image: "/images/Social.jpg" },
//   { title: "Step 5", description: "Track your order", image: "/images/Social.jpg" },
//   { title: "Step 6", description: "Receive product", image: "/images/Social.jpg" },
// ];

// export default function OrderProcess() {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <div className="w-full py-20 bg-gray-50 relative">

//       <div className="mx-auto w-full px-4 lg:px-6 xl:px-32 pt-28">
//         <h2 className="text-4xl sm:text-5xl font-semibold break-words mb-8">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600">
//             Follow Us for Hot Deals & Updates!
//           </span>
//         </h2>
//       </div>

//       <div className="">
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={24}
//           slidesPerView={1.1}
//           slidesOffsetBefore={24}
//           slidesOffsetAfter={24}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           breakpoints={{
//             640: { slidesPerView: 1.3, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
//             768: { slidesPerView: 2, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
//             1024: { slidesPerView: 3, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
//             1280: { slidesPerView: 3, slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
//           }}
//           centeredSlides={false}
//         >
//           {steps.map((step, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="relative rounded-xl overflow-hidden  sm:h-[34rem] cursor-pointer">
//                 <Image
//                   src={step.image}
//                   alt={step.title}
//                   width={800}      // ✅ required by next/image
//                   height={600}     // ✅ required by next/image
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="absolute bottom-4 right-4 flex gap-4 z-10">
//           <button onClick={() => swiperRef.current?.slidePrev()} className="text-black cursor-pointer">
//             <FaChevronCircleLeft size={40} />
//           </button>
//           <button onClick={() => swiperRef.current?.slideNext()} className="text-black cursor-pointer">
//             <FaChevronCircleRight size={40} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useRef } from "react";
// import { Swiper as SwiperType } from "swiper";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

// interface Poster {
//   title: string;
//   description: string;
//   image: string;
// }

// const steps: Poster[] = [
//   { title: "Step 1", description: "Choose your product", image: "/images/Social.jpg" },
//   { title: "Step 2", description: "Add to cart", image: "/images/Social.jpg" },
//   { title: "Step 3", description: "Provide details", image: "/images/Social.jpg" },
//   { title: "Step 4", description: "Make payment", image: "/images/Social.jpg" },
//   { title: "Step 5", description: "Track your order", image: "/images/Social.jpg" },
//   { title: "Step 6", description: "Receive product", image: "/images/Social.jpg" },
// ];

// export default function OrderProcess() {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <div className="w-full py-20 bg-gray-50 relative">
//       {/* Container for heading + slider (same padding & spacing) */}
//       <div className="mx-auto w-full px-4 lg:px-6 xl:px-32 pt-28 relative">
//         {/* Heading */}
//         <h2 className="text-4xl sm:text-5xl font-semibold break-words mb-8">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600">
//             Follow Us for Hot Deals & Updates!
//           </span>
//         </h2>

//         {/* Swiper Section */}
//         <div className="relative">
//           <Swiper
//             modules={[Pagination, Navigation]}
//             spaceBetween={24}
//             slidesPerView={1.1}
//             slidesOffsetBefore={0}
//             slidesOffsetAfter={0}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             breakpoints={{
//               640: { slidesPerView: 1.3 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 3.2 },
//             }}
//             centeredSlides={false}
//           >
//             {steps.map((step, idx) => (
//               <SwiperSlide key={idx}>
//                 <div className="relative rounded-xl overflow-hidden sm:h-[34rem] cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
//                   <Image
//                     src={step.image}
//                     alt={step.title}
//                     width={800}
//                     height={600}
//                     className="w-full h-full object-cover"
//                   />
//                   {/* Optional overlay text */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Buttons — now inside same container alignment */}
//           <div className="absolute -top-14 right-0 flex gap-4 z-10">
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               className="text-black hover:text-violet-600 transition-colors"
//             >
//               <FaChevronCircleLeft size={40} />
//             </button>
//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               className="text-black hover:text-violet-600 transition-colors"
//             >
//               <FaChevronCircleRight size={40} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useRef } from "react";
// import { Swiper as SwiperType } from "swiper";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

// interface Poster {
//   title: string;
//   description: string;
//   image: string;
// }

// const steps: Poster[] = [
//   { title: "Step 1", description: "Choose your product", image: "/images/Social.jpg" },
//   { title: "Step 2", description: "Add to cart", image: "/images/Social.jpg" },
//   { title: "Step 3", description: "Provide details", image: "/images/Social.jpg" },
//   { title: "Step 4", description: "Make payment", image: "/images/Social.jpg" },
//   { title: "Step 5", description: "Track your order", image: "/images/Social.jpg" },
//   { title: "Step 6", description: "Receive product", image: "/images/Social.jpg" },
// ];

// export default function OrderProcess() {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
//       {/* Header */}
//       <div className="px-4 lg:px-6 xl:px-32 mb-8">
//         <h2 className="text-4xl sm:text-5xl font-semibold">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600">
//             Follow Us for Hot Deals & Updates!
//           </span>
//         </h2>
//       </div>

//       {/* Swiper Container (full width) */}
//       <div className="relative">
//         <Swiper
//           modules={[Pagination, Navigation]}
//           spaceBetween={24}
//           slidesPerView={1.1}
//           slidesOffsetBefore={16}  // px-4 = 16px
//           slidesOffsetAfter={16}   // px-4 = 16px
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           breakpoints={{
//             640: {
//               slidesPerView: 1.2,
//               slidesOffsetBefore: 16,  // sm:px-4
//               slidesOffsetAfter: 16,
//             },
//             768: {
//               slidesPerView: 1.6,
//               slidesOffsetBefore: 16,  // md:px-4
//               slidesOffsetAfter: 16,
//             },
//             1024: {
//               slidesPerView: 2.5,
//               slidesOffsetBefore: 24,  // lg:px-6 = 24px
//               slidesOffsetAfter: 24,
//             },
//             1280: {
//               slidesPerView: 3.5,
//               slidesOffsetBefore: 128, // xl:px-32 = 128px
//               slidesOffsetAfter: 128,
//             },
//           }}
//           centeredSlides={false}
//         >
//         {steps.map((step, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="relative rounded-xl overflow-hidden sm:h-[34rem] cursor-pointer bg-white shadow-sm">
//               <Image
//                 src={step.image}
//                 alt={step.title}
//                 width={800}
//                 height={600}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-6 left-6 text-white bg-black/50 p-3 rounded-lg">
//                 <h3 className="text-lg font-semibold">{step.title}</h3>
//                 <p className="text-sm">{step.description}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Navigation Buttons */}
//       <div className="absolute bottom-4 right-4 flex gap-4 z-10">
//         <button
//           onClick={() => swiperRef.current?.slidePrev()}
//           className="text-black cursor-pointer"
//         >
//           <FaChevronCircleLeft size={40} />
//         </button>
//         <button
//           onClick={() => swiperRef.current?.slideNext()}
//           className="text-black cursor-pointer"
//         >
//           <FaChevronCircleRight size={40} />
//         </button>
//       </div>
//     </div>
//     </section >
//   );
// }

"use client";

import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface Poster {
  image: string;
}

const steps: Poster[] = [
  { image: "/images/Social.jpg" },
  { image: "/images/Social1.jpg" },
  { image: "/images/Social2.jpg" },
  { image: "/images/Social3.jpg" },
  { image: "/images/Social4.jpg" },
  { image: "/images/Social5.jpg" },
];

export default function OrderProcess() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
      {/* Header */}
      <div className="px-4 lg:px-6 xl:px-32 mb-8">
        <h2 className="text-4xl sm:text-5xl font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E7671E] to-[#FF9A4D]">
            Follow Us
          </span>{" "}
          <span className="text-neutral-500">for Hot Deals & Updates!</span>
        </h2>
      </div>

      {/* Swiper Container (full width) */}
      <div className="relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1.1}
          slidesOffsetBefore={16}  // px-4 = 16px
          slidesOffsetAfter={16}   // px-4 = 16px
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              slidesOffsetBefore: 16,  // sm:px-4
              slidesOffsetAfter: 16,
            },
            768: {
              slidesPerView: 1.6,
              slidesOffsetBefore: 16,  // md:px-4
              slidesOffsetAfter: 16,
            },
            1024: {
              slidesPerView: 2.5,
              slidesOffsetBefore: 24,  // lg:px-6 = 24px
              slidesOffsetAfter: 24,
            },
            1280: {
              slidesPerView: 3.5,
              slidesOffsetBefore: 128, // xl:px-32 = 128px
              slidesOffsetAfter: 128,
            },
          }}
          centeredSlides={false}
        >
          {steps.map((step, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer bg-white shadow-sm">
                <Image
                  src={step.image}
                  alt={`Slide ${idx + 1}`}
                  width={1080}
                  height={1350}
                  className="w-full h-full object-cover"
                />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

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

