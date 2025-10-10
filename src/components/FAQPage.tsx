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

import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "Why shouldn't we trust atoms?", answer: "They make up everything" },
  { question: "What do you call someone with no body and no nose?", answer: "Nobody knows." },
  { question: "What's the object-oriented way to become wealthy?", answer: "Inheritance." },
  { question: "How many tickles does it take to tickle an octopus?", answer: "Ten-tickles!" },
  { question: "What is: 1 + 1?", answer: "Depends on who are you asking." },
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // first FAQ active by default

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        {faqData.map((faq, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`relative border rounded-xl overflow-hidden transition-all duration-300 ${
                isActive ? "bg-white shadow-lg" : "bg-transparent border-gray-400"
              }`}
            >
              <div className="flex items-center justify-between p-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
                <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                <div className="text-gray-600">
                  {isActive ? <FaTimes className="text-gray-700" /> : <FaChevronDown />}
                </div>
              </div>
              <div
                className={`px-6 pb-6 text-gray-700 transition-all duration-300 overflow-hidden ${
                  isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQPage;
