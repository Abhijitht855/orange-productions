
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { FiSearch, FiShoppingBag, FiChevronDown } from "react-icons/fi";
// import { dropdownMenus, SubItem } from "./DropdownMenuData";

// const menuItems = [
//   { name: "PRINT AND MARKETING", hasDropdown: true },
//   { name: "OFFICE BRANDING", hasDropdown: true },
//   { name: "SIGNAGES", hasDropdown: true },
//   { name: "FLAGS", hasDropdown: true },
//   { name: "BACKDROPS & EXHIBITION", hasDropdown: true },
//   { name: "CORPORATE GIFTS", hasDropdown: true },
//   { name: "VIDEO BROCHURE", hasDropdown: true },
// ];

// export default function Header() {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [hoveredSubItem, setHoveredSubItem] = useState<SubItem | null>(null);
//   const [defaultSubItem, setDefaultSubItem] = useState<SubItem | null>(null);

//   useEffect(() => {
//     if (activeDropdown && dropdownMenus[activeDropdown]) {
//       const firstCategory = Object.values(dropdownMenus[activeDropdown].categories)[0];
//       if (firstCategory && firstCategory.items.length > 0) {
//         setDefaultSubItem(firstCategory.items[0]);
//       }
//     }
//   }, [activeDropdown]);


//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//     setHoveredSubItem(null);
//   };

//   return (
//     <header className="w-full bg-white shadow-md">
//       <div className="relative">

//         {/* Logo + Icons */}
//         <div className="hidden lg:flex items-center justify-between px-32 py-4">
//           <Image src="/images/orange-productions.svg" alt="Logo" width={120} height={42} />
//           <div className="flex items-center gap-6">
//             <FiSearch className="w-6 h-6 text-gray-800 hover:text-[#E7671E] cursor-pointer" />
//             <FiShoppingBag className="w-6 h-6 text-gray-800 hover:text-[#E7671E] cursor-pointer" />
//           </div>
//         </div>

//         {/* Menu + Dropdown */}
//         <div className="relative" onMouseLeave={handleMouseLeave}>
//           <div className="hidden lg:flex items-center justify-between w-full bg-gray-100 px-32 py-4">
//             {menuItems.map((item) => (
//               <div
//                 key={item.name}
//                 onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
//                 className="inline-block"
//               >
//                 <span className="text-gray-800 text-sm font-medium hover:text-[#E7671E] cursor-pointer flex items-center gap-1 whitespace-nowrap">
//                   {item.name} {item.hasDropdown && <FiChevronDown className="w-4 h-4" />}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Mega Dropdown */}
//           {activeDropdown && (
//             <div className="absolute inset-x-0 top-[100%] bg-white shadow-2xl border border-gray-200 px-32 py-4 w-full z-50">
//               <div className="flex gap-8">
//                 {/* Categories (4 columns) */}
//                 <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-4 flex-1">
//                   {Object.entries(dropdownMenus[activeDropdown]!.categories).map(([category, data]) => (
//                     <div key={category}>
//                       <h3 className="font-bold text-gray-900 mb-3 text-sm border-b border-gray-200 pb-2">
//                         {category}
//                       </h3>
//                       <ul className="space-y-2">
//                         {data.items.map((subItem: SubItem) => (
//                           <li
//                             key={subItem.name}
//                             className="text-gray-600 text-sm hover:text-[#E7671E] cursor-pointer"
//                             onMouseEnter={() => setHoveredSubItem(subItem)}
//                             onMouseLeave={() => setHoveredSubItem(null)}
//                           >
//                             {subItem.name}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//                 {/* 5th Column: Image + Popular Products */}
//                 <div className="w-[260px] flex flex-col items-center justify-start">
//                   {hoveredSubItem || defaultSubItem ? (
//                     <>
//                       <Image
//                         src={(hoveredSubItem || defaultSubItem)!.image || "/images/placeholder.png"}
//                         alt={(hoveredSubItem || defaultSubItem)!.name}
//                         width={200}
//                         height={200}
//                         className="object-cover mb-2"
//                       />
//                       <span className="text-gray-800 font-medium text-center">
//                         {(hoveredSubItem || defaultSubItem)!.name}
//                       </span>
//                     </>
//                   ) : (
//                     <span className="text-gray-400 text-sm">No items</span>
//                   )}

//                   {/* Popular Products */}
//                   {dropdownMenus[activeDropdown]?.popularProducts && (
//                     <div className="mt-6 w-full">
//                       <h4 className="text-gray-800 font-bold text-sm mb-2">Most Popular</h4>
//                       <div className="grid grid-cols-3 gap-2">
//                         {dropdownMenus[activeDropdown].popularProducts.map((prod) => (
//                           <div key={prod.name} className=" flex flex-col items-center">
//                             <Image
//                               src={prod.image}
//                               alt={prod.name}
//                               width={60}
//                               height={60}
//                               className="object-cover mb-1"
//                             />
//                             <span className="text-xs text-center">{prod.name}</span>
//                             {prod.price && (
//                               <span className="text-xs font-semibold text-gray-700">{prod.price}</span>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiSearch, FiShoppingBag, FiChevronDown } from "react-icons/fi";
import { dropdownMenus, SubItem } from "./DropdownMenuData";

const menuItems = [
  { name: "PRINT AND MARKETING", hasDropdown: true },
  { name: "OFFICE BRANDING", hasDropdown: true },
  { name: "SIGNAGES", hasDropdown: true },
  { name: "FLAGS", hasDropdown: true },
  { name: "BACKDROPS & EXHIBITION", hasDropdown: true },
  { name: "CORPORATE GIFTS", hasDropdown: true },
  { name: "VIDEO BROCHURE", hasDropdown: true },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<SubItem | null>(null);
  const [defaultSubItem, setDefaultSubItem] = useState<SubItem | null>(null);

  useEffect(() => {
    if (activeDropdown && dropdownMenus[activeDropdown]) {
      const firstCategory = Object.values(dropdownMenus[activeDropdown].categories)[0];
      if (firstCategory && firstCategory.items.length > 0) {
        setDefaultSubItem(firstCategory.items[0]);
      }
    }
  }, [activeDropdown]);


  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setHoveredSubItem(null);
  };

  return (
    <header className="w-full bg-white shadow-md">


      {/* Mobile Header */}
<div className="flex items-center justify-between px-4 py-3 lg:hidden">
  <Image src="/images/orange-productions.svg" alt="Logo" width={100} height={35} />
  <div className="flex items-center gap-4">
    <FiSearch className="w-5 h-5 text-gray-800" />
    <FiShoppingBag className="w-5 h-5 text-gray-800" />
  </div>
</div>


      <div className="relative">

        {/* Logo + Icons */}
        <div className="hidden lg:flex items-center justify-between px-32 py-4">
          <Image src="/images/orange-productions.svg" alt="Logo" width={120} height={42} />
          <div className="flex items-center gap-6">
            <FiSearch className="w-6 h-6 text-gray-800 hover:text-[#E7671E] cursor-pointer" />
            <FiShoppingBag className="w-6 h-6 text-gray-800 hover:text-[#E7671E] cursor-pointer" />
          </div>
        </div>

        {/* Menu + Dropdown */}
        <div className="relative" onMouseLeave={handleMouseLeave}>
          <div className="hidden lg:flex items-center justify-between w-full bg-gray-100 px-32 py-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                className="inline-block"
              >
                <span className="text-gray-800 text-sm font-medium hover:text-[#E7671E] cursor-pointer flex items-center gap-1 whitespace-nowrap">
                  {item.name} {item.hasDropdown && <FiChevronDown className="w-4 h-4" />}
                </span>
              </div>
            ))}
          </div>

          {/* Mega Dropdown */}
          {activeDropdown && (
            <div className="absolute inset-x-0 top-[100%] bg-white shadow-2xl border border-gray-200 px-32 py-4 w-full z-50">
              <div className="flex gap-8">
                {/* Categories (4 columns) */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-4 flex-1">
                  {Object.entries(dropdownMenus[activeDropdown]!.categories).map(([category, data]) => (
                    <div key={category}>
                      <h3 className="font-bold text-gray-900 mb-3 text-sm border-b border-gray-200 pb-2">
                        {category}
                      </h3>
                      <ul className="space-y-2">
                        {data.items.map((subItem: SubItem) => (
                          <li
                            key={subItem.name}
                            className="text-gray-600 text-sm hover:text-[#E7671E] cursor-pointer"
                            onMouseEnter={() => setHoveredSubItem(subItem)}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            {subItem.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* 5th Column: Image + Popular Products */}
                <div className="w-[260px] flex flex-col items-center justify-start">
                  {hoveredSubItem || defaultSubItem ? (
                    <>
                      <Image
                        src={(hoveredSubItem || defaultSubItem)!.image || "/images/placeholder.png"}
                        alt={(hoveredSubItem || defaultSubItem)!.name}
                        width={200}
                        height={200}
                        className="object-cover mb-2"
                      />
                      <span className="text-gray-800 font-medium text-center">
                        {(hoveredSubItem || defaultSubItem)!.name}
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-400 text-sm">No items</span>
                  )}

                  {/* Popular Products */}
                  {dropdownMenus[activeDropdown]?.popularProducts && (
                    <div className="mt-6 w-full">
                      <h4 className="text-gray-800 font-bold text-sm mb-2">Most Popular</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {dropdownMenus[activeDropdown].popularProducts.map((prod) => (
                          <div key={prod.name} className=" flex flex-col items-center">
                            <Image
                              src={prod.image}
                              alt={prod.name}
                              width={60}
                              height={60}
                              className="object-cover mb-1"
                            />
                            <span className="text-xs text-center">{prod.name}</span>
                            {prod.price && (
                              <span className="text-xs font-semibold text-gray-700">{prod.price}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}

