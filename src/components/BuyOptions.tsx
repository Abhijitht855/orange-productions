"use client";

import {
  FaQuestionCircle,
  FaFileInvoice,
  FaMoneyBillWave,
  FaDraftingCompass,
  FaIndustry,
  FaTruck,
} from "react-icons/fa";

const BuyOptions = () => {
  const steps = [
    {
      title: "Inquiry",
      description: "Reach out to us with your product requirements.",
      icon: <FaQuestionCircle />,
    },
    {
      title: "Quotation",
      description: "Get a detailed quotation tailored to your needs.",
      icon: <FaFileInvoice />,
    },
    {
      title: "Payment",
      description: "Secure and flexible payment options available.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Mock UP",
      description: "Preview your design with a professional mockup.",
      icon: <FaDraftingCompass />,
    },
    {
      title: "Production",
      description: "High-quality production begins once approved.",
      icon: <FaIndustry />,
    },
    {
      title: "Delivery Or Collection",
      description: "Get your order delivered or collect it from us.",
      icon: <FaTruck />,
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-6">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="text-center p-6 rounded-lg"
          >
            <div className="mx-auto h-16 w-16 text-[#7D7D7E] mb-5 flex items-center justify-center text-5xl">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyOptions;
