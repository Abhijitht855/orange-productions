// "use client";

// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const FAQPage = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: "Lorem ipsum dolor sit amet?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
//     },
//     {
//       question: "Consectetur adipiscing elit?",
//       answer:
//         "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
//     },
//     {
//       question: "Praesent libero sed cursus?",
//       answer:
//         "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
//     },
//     {
//       question: "Fusce nec tellus sed augue?",
//       answer:
//         "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.",
//     },
//   ];

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       {/* Heading */}
//       <div className="mb-12 text-center">
//         <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
//           Lorem Ipsum FAQs
//         </h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//       </div>

//       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Side - Image from public/images */}
//         <div className="relative h-96 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-white hover:shadow-xl transition-shadow duration-300">
//           <img
//             src="/images/fc_values_13799486f_2x.jpg"
//             alt="Placeholder Image"
//             className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
//           />
//           <div className="absolute inset-0 bg-black/10 hover:backdrop-blur-[2px]"></div>

//           <div className="absolute bottom-4 left-4 text-white font-bold text-xl bg-black/50 px-3 py-1 rounded">
//             Lorem Ipsum
//           </div>
//         </div>

//         {/* Right Side - FAQs */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
//               >
//                 <span className="text-lg font-semibold">{faq.question}</span>
//                 <FaChevronDown
//                   className={`h-5 w-5 transition-transform duration-300 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   openIndex === index ? "max-h-96" : "max-h-0"
//                 }`}
//               >
//                 <p className="p-4 text-base text-gray-800">{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQPage;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at lectus urna duis convallis.",
  },
  {
    id: 2,
    question: "Consectetur adipiscing elit sed do eiusmod?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.",
  },
  {
    id: 3,
    question: "Ut enim ad minim veniam quis nostrud exercitation?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Integer eget aliquet nibh praesent tristique magna sit amet.",
  }
];



export default function FAQComponent() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div id="about" className="min-h-screen bg-gray-100 text-black py-20 sm:py-28 lg:py-36 px-4 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Responsive Image with Bottom Content */}
        <div className="overflow-hidden flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Image
              src="/images/banner.jpeg"
              alt="FAQ Illustration"
              width={600}
              height={400}
              className="object-contain w-full h-auto"
            />
          </motion.div>

          {/* Bottom Content under Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <p className="text-black text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>
        </div>

        {/* Right Side - FAQ Content */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Heading */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Get Every <span className="text-black">Single Answer</span>
              </h1>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4 pt-4">
              {faqData.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: item.id * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-black rounded-2xl overflow-hidden bg-gradient-to-tr from-white/15 to-white/5 backdrop-blur-sm"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-6 text-left transition-all duration-300"
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItem === item.id ? 45 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-black text-base sm:text-lg">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}