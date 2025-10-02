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

"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

interface Poster {
  title: string;
  description: string;
  image: string;
}

const steps: Poster[] = [
  { title: "Step 1", description: "Choose your product", image: "/images/Social.jpg" },
  { title: "Step 2", description: "Add to cart", image: "/images/Social.jpg" },
  { title: "Step 3", description: "Provide details", image: "/images/Social.jpg" },
  { title: "Step 4", description: "Make payment", image: "/images/Social.jpg" },
  { title: "Step 5", description: "Track your order", image: "/images/Social.jpg" },
  { title: "Step 6", description: "Receive product", image: "/images/Social.jpg" },
];

export default function OrderProcess() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full py-20 bg-gray-50 relative">

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-0 pt-28">
        <h2 className="text-4xl sm:text-5xl font-semibold break-words mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600">
            Follow Us for Hot Deals & Updates!
          </span>
        </h2>
      </div>

      <div className="">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1.1}
          slidesOffsetBefore={24}
          slidesOffsetAfter={24}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1.3, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
            768: { slidesPerView: 2, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
            1024: { slidesPerView: 3, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
            1280: { slidesPerView: 3, slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
          }}
          centeredSlides={false}
        >
          {steps.map((step, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative rounded-xl overflow-hidden  sm:h-[34rem] cursor-pointer">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                {/* Optional text overlay */}
                {/* <div className="absolute top-4 left-4 text-white bg-black/50 p-2 rounded">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-4 z-10">
          <button onClick={() => swiperRef.current?.slidePrev()} className="text-black cursor-pointer">
            <FaChevronCircleLeft size={40} />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} className="text-black cursor-pointer">
            <FaChevronCircleRight size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}
