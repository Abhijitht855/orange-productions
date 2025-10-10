// "use client";

// const CompanyIconsMarquee = () => {
//   const companyIcons = [
//     "/images/ARG-Capital-logo.png",
//     "/images/02-01-2025-15_54_02.png",
//     "/images/FuturaX-Logo-03.png",
//     "/images/website-WSDT-Dubai-comapny-logo-12.webp",
//     "/images/ARG-Capital-logo.png",
//     "/images/FuturaX-Logo-03.png",
//   ];

//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="overflow-hidden">
//         {/* First Row */}
//         <div className="flex animate-marquee">
//           {[...companyIcons, ...companyIcons,...companyIcons,...companyIcons,].map((icon, index) => (
//             <img
//               key={index}
//               src={icon}
//               alt={`Company ${index + 1}`}
//               className="h-16 w-auto object-contain mr-10"
//             />
//           ))}
//         </div>

//         {/* Gap between rows */}
//         <div className="h-10"></div>

//         {/* Second Row */}
//         <div className="flex animate-marquee-reverse">
//           {[...companyIcons, ...companyIcons,...companyIcons,...companyIcons,].map((icon, index) => (
//             <img
//               key={index + companyIcons.length}
//               src={icon}
//               alt={`Company ${index + 1}`}
//               className="h-16 w-auto object-contain mr-10"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Inject CSS animation */}
//       <style jsx>{`
//         .animate-marquee {
//           display: flex;
//           width: max-content;
//           animation: marquee 20s linear infinite;
//         }

//         .animate-marquee-reverse {
//           display: flex;
//           width: max-content;
//           animation: marquee-reverse 20s linear infinite;
//         }

//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         @keyframes marquee-reverse {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CompanyIconsMarquee;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CompanyIconsMarquee = () => {
  const companyIcons = [
    "/images/ARG-Capital-logo.png",
    "/images/02-01-2025-15_54_02.png",
    "/images/FuturaX-Logo-03.png",
    "/images/website-WSDT-Dubai-comapny-logo-12.webp",
    "/images/ARG-Capital-logo.png",
    "/images/FuturaX-Logo-03.png",
  ];

  return (
    <div className="bg-gray-950/90 py-12">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-10">
          Slider & Default Color
        </h2>

        <div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={10} // smaller gap
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            allowTouchMove={false}
            simulateTouch={false}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 10 },
              1024: { slidesPerView: 5, spaceBetween: 10 },
            }}
          >

            {companyIcons.map((icon, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center py-2">
                  <img
                    src={icon}
                    alt={`Company ${index + 1}`}
                    className="h-16 w-auto object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-20">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 0, // no delay for continuous movement
              disableOnInteraction: false,
              reverseDirection: true, // 👈 this makes it move left → right
            }}
            speed={4000} // adjust for smoothness (higher = slower)
            allowTouchMove={false} // disables touch sliding
            simulateTouch={false} // disables mouse drag
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 10 },
              1024: { slidesPerView: 5, spaceBetween: 10 },
            }}
          >
            {companyIcons.map((icon, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center py-2">
                  <img
                    src={icon}
                    alt={`Company ${index + 1}`}
                    className="h-16 w-auto object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>
    </div>
  );
};

export default CompanyIconsMarquee;
