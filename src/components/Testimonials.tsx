// "use client";

// import React, { useRef } from "react";
// import { Swiper as SwiperType } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { FaChevronCircleRight, FaChevronCircleLeft, FaQuoteLeft, FaStar } from "react-icons/fa";

// interface Testimonial {
//   paragraph: string;
//   name: string;
//   rating: number;
// }

// const testimonials: Testimonial[] = [
//   {
//     paragraph: "Perfect quality, delivery on time. The team is very professional.",
//     name: "Elvira Yudina",
//     rating: 5,
//   },
//   {
//     paragraph: "Best service! Quick response and excellent printing quality.",
//     name: "Екатерина Плыва",
//     rating: 5,
//   },
//   {
//     paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     name: "James Anderson",
//     rating: 4,
//   },
//   {
//     paragraph: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     name: "Sophia Martinez",
//     rating: 5,
//   },
//   {
//     paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit.",
//     name: "Liam Carter",
//     rating: 4,
//   },
//   {
//     paragraph: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
//     name: "Emily Davis",
//     rating: 5,
//   },
//   {
//     paragraph: "Excepteur sint occaecat cupidatat non proident.",
//     name: "Oliver Brown",
//     rating: 5,
//   },
// ];

// export default function TestimonialsSlider() {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <div className="w-full py-16 bg-gray-100 relative">
//       {/* Heading */}
//       <div className="mx-auto w-full px-6 lg:px-0 text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
//           Happy Clients
//         </h2>
//         <p className="text-gray-600">
//           Here’s what our clients have to say about our services.
//         </p>
//       </div>

//       {/* Swiper */}
//       <div className="relative max-w-7xl mx-auto">
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={16}
//           slidesPerView={1.1}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 16 },
//             768: { slidesPerView: 3, spaceBetween: 20 },
//             1024: { slidesPerView: 4, spaceBetween: 24 },
//           }}
//           centeredSlides={false}
//         >
//           {testimonials.map((t, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-48 hover:shadow-lg transition">
//                 <div className="flex items-start gap-3 mb-4">
//                   <FaQuoteLeft size={24} className="text-indigo-500 mt-1" />
//                   <p className="text-gray-700 text-sm line-clamp-4">{t.paragraph}</p>
//                 </div>

//                 <div className="flex justify-between items-center mt-auto">
//                   <div className="flex text-yellow-400">
//                     {Array.from({ length: t.rating }).map((_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                   </div>
//                   <span className="text-sm font-semibold text-gray-900">{t.name}</span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="absolute -bottom-10 right-4 flex gap-4 z-10">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="text-black cursor-pointer"
//           >
//             <FaChevronCircleLeft size={36} />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="text-black cursor-pointer"
//           >
//             <FaChevronCircleRight size={36} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronRight, FaChevronLeft, FaQuoteLeft, FaStar } from "react-icons/fa";

interface Testimonial {
  paragraph: string;
  name: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    paragraph: "The quality of their work is impeccable, and the delivery was right on time. The team’s professionalism and attention to detail made the entire process seamless and stress-free. Highly recommend their services!",
    name: "Elvira Yudina",
    rating: 5,
  },
  {
    paragraph: "Exceptional service with a quick response time and outstanding printing quality. From start to finish, the team was responsive and ensured every detail was perfect. I’m thrilled with the results!",
    name: "Екатерина Плыва",
    rating: 5,
  },
  {
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    name: "James Anderson",
    rating: 4,
  },
  {
    paragraph: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    name: "Sophia Martinez",
    rating: 5,
  },
  {
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "Liam Carter",
    rating: 4,
  },
  {
    paragraph: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    name: "Emily Davis",
    rating: 5,
  },
  {
    paragraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Oliver Brown",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full py-16 bg-gray-100 relative">
      {/* Inline CSS for Pagination Dots */}
      <style>{`
        .swiper-pagination-bullet {
          background: #6B7280; /* Gray-500 for inactive dots */
          opacity: 0.5;
          width: 10px;
          height: 10px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #E7671E, #FF9A4D); /* Gradient for active dot */
          opacity: 1;
          transform: scale(1.2); /* Slightly larger active dot */
        }
      `}</style>

      {/* Heading and Navigation Buttons Container */}
      <div className="mx-auto w-full px-4 lg:px-6 xl:px-32 mb-4 flex justify-between items-center">
        <div className="text-left">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E7671E] to-[#FF9A4D]">
              Happy
            </span>{" "}
            <span className="text-neutral-500">Clients</span>
          </h2>
          <p className="text-lg text-black">
            Here’s what our clients have to say about our services.
          </p>
        </div>
        {/* Navigation Buttons */}
        <div className="hidden sm:flex gap-4 z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-black cursor-pointer border-2 border-black rounded-full p-2"
          >
            <FaChevronLeft size={36} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-black cursor-pointer border-2 border-black rounded-full p-2"
          >
            <FaChevronRight size={36} />
          </button>
        </div>
      </div>

      {/* Swiper Container with Responsive Padding */}
      <div className="relative mx-auto px-4 lg:px-6 xl:px-32">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            clickable: false, // Set to true if you want clickable dots
            el: ".swiper-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          centeredSlides={false}
          className="pb-10"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="pt-2 pb-10">
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col justify-between h-64 hover:shadow-lg transition relative">
                <div className="flex-1">
                  <p className="text-base text-gray-700 line-clamp-6">{t.paragraph}</p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <FaQuoteLeft size={28} className="text-[#E7671E]" />
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-base font-semibold text-gray-900">{t.name}</span>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar key={i} size={20} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-4"></div>
        </Swiper>
      </div>
    </div>
  );
}