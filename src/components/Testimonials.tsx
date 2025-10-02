// "use client";

// import React, { useRef } from "react";
// import { Swiper as SwiperType } from "swiper"; // ✅ added type import
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import { FaChevronCircleRight, FaChevronCircleLeft, FaRegEnvelope, FaFileInvoiceDollar, FaCreditCard, FaDraftingCompass, FaIndustry, FaTruck } from "react-icons/fa";

// interface Testimonials {
//     title: string;
//     description: string;
// }

// const steps: Testimonials[] = [
//     { title: "Inquiry", description: "Inquire with your requirements" },
//     { title: "Quotation", description: "Approve provided quotation" },
//     { title: "Payment", description: "Make payment to proceed" },
//     { title: "Mock UP", description: "Confirm mock-up before production" },
//     { title: "Production", description: "We fulfill your order" },
//     { title: "Delivery Or Collection", description: "Receive via delivery or collect" },
// ];

// // Map titles to icons
// const iconMap: Record<string, React.ReactNode> = {  // ✅ cleaner typing
//   Inquiry: <FaRegEnvelope size={40} className="text-indigo-600 mb-4" />,
//   Quotation: <FaFileInvoiceDollar size={40} className="text-green-600 mb-4" />,
//   Payment: <FaCreditCard size={40} className="text-yellow-600 mb-4" />,
//   "Mock UP": <FaDraftingCompass size={40} className="text-pink-600 mb-4" />,
//   Production: <FaIndustry size={40} className="text-gray-600 mb-4" />,
//   "Delivery Or Collection": <FaTruck size={40} className="text-red-600 mb-4" />,
// };


// export default function OrderProcess() {
//     const swiperRef = useRef<SwiperType | null>(null);

//     return (
//         <div className="w-full py-20 bg-gray-100 relative">
//             {/* Heading */}
//             <div className="mx-auto w-full max-w-7xl px-6 lg:px-0 pt-28">
//                 <h2 className="text-4xl sm:text-5xl font-semibold break-words mb-8 text-gray-900">
//                     Lorem ipsum dolor sit.
//                 </h2>
//             </div>

//             {/* Swiper */}
//             <div>
//                 <Swiper
//                     modules={[Pagination, Navigation]}
//                     spaceBetween={24}
//                     slidesPerView={1.1}
//                     slidesOffsetBefore={24}
//                     slidesOffsetAfter={24}
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     breakpoints={{
//                         640: { slidesPerView: 1.3, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
//                         768: { slidesPerView: 2, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
//                         1024: { slidesPerView: 3, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
//                         1280: { slidesPerView: 3, slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
//                     }}
//                     centeredSlides={false}
//                 >
//                     {steps.map((step, idx) => (
//                         <SwiperSlide key={idx}>
//                             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center h-[18rem] cursor-pointer hover:shadow-2xl transition text-center mb-16">
//                                 {iconMap[step.title]}
//                                 <h3 className="text-2xl font-semibold mb-2 text-gray-900">{step.title}</h3>
//                                 <p className="text-gray-600">{step.description}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Navigation Buttons */}
//                 <div className="absolute bottom-4 right-4 flex gap-4 z-10">
//                     <button
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         className="text-black cursor-pointer"
//                     >
//                         <FaChevronCircleLeft size={40} />
//                     </button>
//                     <button
//                         onClick={() => swiperRef.current?.slideNext()}
//                         className="text-black cursor-pointer"
//                     >
//                         <FaChevronCircleRight size={40} />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";

import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronCircleRight, FaChevronCircleLeft, FaQuoteLeft, FaStar } from "react-icons/fa";

interface Testimonial {
  paragraph: string;
  name: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    paragraph: "Perfect quality, delivery on time. The team is very professional.",
    name: "Elvira Yudina",
    rating: 5,
  },
  {
    paragraph: "Best service! Quick response and excellent printing quality.",
    name: "Екатерина Плыва",
    rating: 5,
  },
  {
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "James Anderson",
    rating: 4,
  },
  {
    paragraph: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sophia Martinez",
    rating: 5,
  },
  {
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    name: "Liam Carter",
    rating: 4,
  },
  {
    paragraph: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Emily Davis",
    rating: 5,
  },
  {
    paragraph: "Excepteur sint occaecat cupidatat non proident.",
    name: "Oliver Brown",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full py-16 bg-gray-100 relative">
      {/* Heading */}
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
          Happy Clients
        </h2>
        <p className="text-gray-600">
          Here’s what our clients have to say about our services.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          centeredSlides={false}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between h-48 hover:shadow-lg transition">
                <div className="flex items-start gap-3 mb-4">
                  <FaQuoteLeft size={24} className="text-indigo-500 mt-1" />
                  <p className="text-gray-700 text-sm line-clamp-4">{t.paragraph}</p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{t.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-10 right-4 flex gap-4 z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-black cursor-pointer"
          >
            <FaChevronCircleLeft size={36} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-black cursor-pointer"
          >
            <FaChevronCircleRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );
}
