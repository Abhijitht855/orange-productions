"use client";

import React from "react";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

interface SubcategorySectionProps {
  title: string;
  items: { name: string; image?: string }[];
}

const SubcategorySection: React.FC<SubcategorySectionProps> = ({ title, items }) => {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4">
        {title}
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.3 }}
          >
            <CategoryCard name={item.name} image={item.image} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SubcategorySection;
