"use client";

import React from "react";
import { useParams } from "next/navigation";
import { dropdownMenus } from "@/components/DropdownMenuData";
import SubcategorySectionNew from "@/components/SubcategorySectionNew";

export default function CategoryPage() {
  const params = useParams();
  const slug = decodeURIComponent(params.slug as string);
  const categoryData = dropdownMenus[slug];

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Category not found.
      </div>
    );
  }

  return (
    <main className="px-6 xl:px-32 py-10 bg-gray-50 min-h-screen">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-10">
        {slug}
      </h1>

      {/* Loop through subcategories */}
      {Object.entries(categoryData.categories).map(([subcategory, data]) => (
        <SubcategorySectionNew key={subcategory} title={subcategory} items={data.items} />
      ))}
    </main>
  );
}
