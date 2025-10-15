"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is your minimum order quantity?",
    answer:
      "Our minimum order quantity depends on the product type. Typically, it starts from 50 pieces for printed items.",
  },
  {
    question: "Do you offer custom printing or branding?",
    answer:
      "Yes, we provide custom printing, embossing, and branding options for most of our products based on your design requirements.",
  },
  {
    question: "What are the available payment options?",
    answer:
      "We accept bank transfers, UPI, and all major debit/credit cards. Corporate customers can also request invoiced billing.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 7–10 business days depending on customization requirements and delivery location.",
  },
  {
    question: "Can I get a sample before placing a bulk order?",
    answer:
      "Absolutely! You can request a sample before confirming a bulk order to ensure quality and design satisfaction.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 ">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

      <div className=" mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <button
              className="w-full flex justify-between items-center text-left p-4 font-medium text-lg text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-orange-500" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
