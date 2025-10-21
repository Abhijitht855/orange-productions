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

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQComponentProps {
  variantName?: string; // Optional prop to prefill Required Item
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
  },
];

export default function FAQComponent({ variantName = "" }: FAQComponentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requiredItem: variantName,
    message: "",
  });

  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div id="about" className="min-h-screen bg-gray-200 text-black py-20 sm:py-28 lg:py-36 px-4 md:px-12 lg:px-24">
       <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 text-center">
        Have Questions? Contact Us!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Left Side - Inquiry Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg z-10 lg:-mr-5">
          <div className="mb-8">
            <div className="inline-block border border-[#E7671E] rounded-full px-6 py-2 mb-6">
              <span className="text-sm text-gray-600 uppercase tracking-wide">Inquiry Form</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Let&apos;s Connect
            </h1>
            <p className="text-gray-600 text-lg">
              Submit your inquiry to connect with our team for tailored solutions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Smith"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7671E] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7671E] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 222 444 66"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7671E] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="requiredItem" className="block text-sm font-medium text-gray-700 mb-2">
                  Required Item
                </label>
                <input
                  type="text"
                  id="requiredItem"
                  name="requiredItem"
                  value={formData.requiredItem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7671E] focus:border-transparent"
                  placeholder="e.g. Headphone"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Type here ..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7671E] focus:border-transparent resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-[#E7671E] text-white rounded-full font-medium hover:bg-[#D55A1B] transition-colors duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Right Side - FAQ Section */}
        <div className="bg-gray-100 rounded-r-3xl rounded-l-none p-8 sm:p-12 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our services
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left transition-all duration-300 hover:bg-gray-50"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <svg
                      className={`w-6 h-6 text-slate-700 transform ${openItem === item.id ? "rotate-45" : ""}`}
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
                  </div>
                </button>

                {/* Answer */}
                {openItem === item.id && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}