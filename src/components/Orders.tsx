"use client";

import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper"; // ✅ added type import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronCircleRight, FaChevronCircleLeft, FaRegEnvelope, FaFileInvoiceDollar, FaCreditCard, FaDraftingCompass, FaIndustry, FaTruck } from "react-icons/fa";

interface Orders {
    title: string;
    description: string;
}

const steps: Orders[] = [
    { title: "Inquiry", description: "Inquire with your requirements" },
    { title: "Quotation", description: "Approve provided quotation" },
    { title: "Payment", description: "Make payment to proceed" },
    { title: "Mock UP", description: "Confirm mock-up before production" },
    { title: "Production", description: "We fulfill your order" },
    { title: "Delivery Or Collection", description: "Receive via delivery or collect" },
];

// Map titles to icons
const iconMap: Record<string, React.ReactNode> = {  // ✅ cleaner typing
  Inquiry: <FaRegEnvelope size={40} className="text-indigo-600 mb-4" />,
  Quotation: <FaFileInvoiceDollar size={40} className="text-green-600 mb-4" />,
  Payment: <FaCreditCard size={40} className="text-yellow-600 mb-4" />,
  "Mock UP": <FaDraftingCompass size={40} className="text-pink-600 mb-4" />,
  Production: <FaIndustry size={40} className="text-gray-600 mb-4" />,
  "Delivery Or Collection": <FaTruck size={40} className="text-red-600 mb-4" />,
};


export default function OrderProcess() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="w-full py-20 bg-gray-100 relative">
            {/* Heading */}
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-0 pt-28">
                <h2 className="text-4xl sm:text-5xl font-semibold break-words mb-8 text-gray-900">
                    Follow Us for Hot Deals & Updates!
                </h2>
            </div>

            {/* Swiper */}
            <div>
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
                            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center h-[18rem] cursor-pointer hover:shadow-2xl transition text-center mb-16">
                                {iconMap[step.title]}
                                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-4 z-10">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="text-black cursor-pointer"
                    >
                        <FaChevronCircleLeft size={40} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="text-black cursor-pointer"
                    >
                        <FaChevronCircleRight size={40} />
                    </button>
                </div>
            </div>
        </div>
    );
}
