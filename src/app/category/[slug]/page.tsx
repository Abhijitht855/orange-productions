// "use client";

// import React, { useEffect } from "react";
// import { useParams } from "next/navigation";
// import { dropdownMenus } from "@/components/DropdownMenuData";
// import SubcategorySectionNew from "@/components/SubcategorySectionNew";

// export default function CategoryPage() {
//   const params = useParams();
//   const slug = decodeURIComponent(params.slug as string);
//   const categoryData = dropdownMenus[slug];

//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const sectionId = hash.replace("#", "");
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   }, []);

//   if (!categoryData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         Category not found.
//       </div>
//     );
//   }

//   return (
//     <main className="px-6 xl:px-32 py-10 bg-gray-50 min-h-screen">
//       {/* Page Heading */}
//       <h1 className="text-3xl font-bold text-gray-900 mb-10">
//         {slug}
//       </h1>

//       {/* Loop through subcategories */}
//       {Object.entries(categoryData.categories).map(([subcategory, data]) => (
//         <SubcategorySectionNew key={subcategory} title={subcategory} items={data.items} />
//       ))}
//     </main>
//   );
// }

"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { dropdownMenus } from "@/components/DropdownMenuData";
import SubcategorySectionNew from "@/components/SubcategorySectionNew";
import { slugify } from "@/utils/slugify";


export default function CategoryPage() {
  const params = useParams();
  const slug = decodeURIComponent(params.slug as string);
  const categoryEntry = Object.entries(dropdownMenus).find(
  ([key]) => slugify(key) === slug
);
const categoryName = categoryEntry ? categoryEntry[0] : null; 
const categoryData = categoryEntry ? categoryEntry[1] : null;


  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove '#'
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Scroll on initial load
    handleHashChange();

    // Listen for hash changes (for client-side updates)
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array: Runs once on mount

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Category not found.
      </div>
    );
  }

  return (
    <main className="px-6 xl:px-32 pt-20 lg:py-10 bg-gray-50 min-h-screen">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-10">
         {categoryName} 
      </h1>

      {/* Loop through subcategories */}
      {Object.entries(categoryData.categories).map(([subcategory, data]) => (
        <SubcategorySectionNew key={subcategory} title={subcategory} items={data.items} />
      ))}
    </main>
  );
}