"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      question: "Consectetur adipiscing elit?",
      answer:
        "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    },
    {
      question: "Praesent libero sed cursus?",
      answer:
        "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      question: "Fusce nec tellus sed augue?",
      answer:
        "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Lorem Ipsum FAQs
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Image from public/images */}
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-white hover:shadow-xl transition-shadow duration-300">
          <img
            src="/images/fc_values_13799486f_2x.jpg"
            alt="Placeholder Image"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-black/10 hover:backdrop-blur-[2px]"></div>

          <div className="absolute bottom-4 left-4 text-white font-bold text-xl bg-black/50 px-3 py-1 rounded">
            Lorem Ipsum
          </div>
        </div>

        {/* Right Side - FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <FaChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="p-4 text-base text-gray-800">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
