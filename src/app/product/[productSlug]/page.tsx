// "use client";

// import React from "react";
// import { useParams } from "next/navigation";
// import { dropdownMenus, SubItem } from "@/components/DropdownMenuData";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ProductPage() {
//   const params = useParams();
//   const productSlug = params.productSlug as string;
//   let product: SubItem | null = null;

//   // Search for the product across all categories and subcategories
//   for (const [mainCategory, data] of Object.entries(dropdownMenus)) {
//     for (const [subcategory, subData] of Object.entries(data.categories)) {
//       const foundItem = subData.items.find((item: SubItem) =>
//         item.name.toLowerCase().replace(/\s+/g, '-') === productSlug
//       );
//       if (foundItem) {
//         product = foundItem;
//         break;
//       }
//     }
//     if (product) break;
//   }

//   const [selectedVariant, setSelectedVariant] = React.useState(0);
//   const [selectedSize, setSelectedSize] = React.useState("");
//   const [selectedQuantity, setSelectedQuantity] = React.useState("");

//   const currentVariant = product?.variants?.[selectedVariant];
//   const price = currentVariant?.price || 0;

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         Product not found.
//       </div>
//     );
//   }

//   return (
//     <main className="px-6 xl:px-32 py-10 bg-gray-50 min-h-screen">
//       {/* Product Header with Tabs */}
//       <motion.div
//         className="max-w-7xl mx-auto mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
//         <div className="flex border-b border-gray-200 gap-8">
//           <button className="pb-3 px-1 border-b-2 border-[#E7671E] text-[#E7671E] font-medium">
//             Price
//           </button>
//           <button className="pb-3 px-1 text-gray-600 hover:text-gray-900 font-medium">
//             About
//           </button>
//         </div>
//       </motion.div>

//       {/* Two Column Layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Column - Image Gallery */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {currentVariant?.image ? (
//             <div className="bg-white rounded-lg shadow-md p-8">
//               <div className="relative w-full h-96 lg:h-[500px]">
//                 <Image
//                   src={currentVariant.image}
//                   alt={currentVariant.name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               {currentVariant.name && (
//                 <p className="text-gray-700 font-medium text-center mt-6">
//                   {currentVariant.name}
//                 </p>
//               )}
//             </div>
//           ) : (
//             <div className="bg-white rounded-lg shadow-md p-8 h-96 lg:h-[500px] flex items-center justify-center">
//               <span className="text-gray-400">No Image Available</span>
//             </div>
//           )}
//         </motion.div>

//         {/* Right Column - Product Details */}
//         <motion.div
//           className="bg-white rounded-lg shadow-md p-8"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Variant Selection */}
//           {product.variants && product.variants.length > 1 && (
//             <div className="mb-6">
//               <label className="block text-gray-800 font-semibold mb-3">
//                 Variant:
//               </label>
//               <select
//                 value={selectedVariant}
//                 onChange={(e) => setSelectedVariant(Number(e.target.value))}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] text-gray-700"
//               >
//                 {product.variants.map((variant, idx) => (
//                   <option key={idx} value={idx}>
//                     {variant.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Size Selection */}
//           <div className="mb-6">
//             <label className="block text-gray-800 font-semibold mb-3">
//               Size:
//             </label>
//             <select
//               value={selectedSize}
//               onChange={(e) => setSelectedSize(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] text-gray-700"
//             >
//               <option value="">--Select--</option>
//               <option value="small">Small</option>
//               <option value="medium">Medium</option>
//               <option value="large">Large</option>
//               <option value="xl">Extra Large</option>
//             </select>
//           </div>

//           {/* Quantity Selection */}
//           <div className="mb-6">
//             <label className="block text-gray-800 font-semibold mb-3">
//               Quantity:
//             </label>
//             <select
//               value={selectedQuantity}
//               onChange={(e) => setSelectedQuantity(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] text-gray-700"
//             >
//               <option value="">--Select--</option>
//               <option value="100">100</option>
//               <option value="250">250</option>
//               <option value="500">500</option>
//               <option value="1000">1000</option>
//               <option value="2500">2500</option>
//             </select>
//           </div>

//           {/* Price Display */}
//           <div className="mb-6 pb-6 border-b border-gray-200">
//             <div className="flex items-baseline gap-3">
//               <span className="text-gray-600 font-medium">Total :</span>
//               <span className="text-3xl font-bold text-gray-900">₹{price}</span>
//               <span className="text-gray-500">(Excl. VAT)</span>
//             </div>
//           </div>

//           {/* Note */}
//           <div className="mb-6 p-4 bg-gray-50 rounded-md">
//             <p className="text-sm text-gray-700 mb-2">
//               <span className="font-semibold">Note:</span> The prices listed are for readymade envelopes.
//             </p>
//             <p className="text-sm text-gray-600">
//               No printing will be done on the flaps, edges, or reverse side of the envelopes.
//             </p>
//           </div>

//           {/* Description */}
//           {currentVariant?.description && (
//             <p className="text-gray-600 text-sm mb-6">
//               {currentVariant.description}
//             </p>
//           )}

//           {/* Order Button */}
//           <button className="w-full bg-[#E7671E] text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors font-semibold text-lg">
//             Order Now
//           </button>
//         </motion.div>
//       </div>
//     </main>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { dropdownMenus, SubItem, Variant } from "@/components/DropdownMenuData";
// import RelatedProducts from "@/components/RelatedProducts";
// import FaqProducts from "@/components/FaqProducts"
// import { slugify } from "@/utils/slugify";

// export default function ProductPage() {
//   const { productSlug } = useParams();
//   const [item, setItem] = useState<SubItem | null>(null);
//   const [variantTabs, setVariantTabs] = useState<Record<string, string>>({});
//   const [quantities, setQuantities] = useState<Record<string, string>>({});
//   const [totals, setTotals] = useState<Record<string, number>>({});

//   useEffect(() => {
//     let foundItem: SubItem | null = null;

//     for (const menuName in dropdownMenus) {
//       const menu = dropdownMenus[menuName];
//       for (const categoryName in menu.categories) {
//         const category = menu.categories[categoryName];
//         const matchedItem = category.items.find(
//           (i) => slugify(i.name) === productSlug  // ✅ use slugify here
//         );
//         if (matchedItem) {
//           foundItem = matchedItem;
//           break;
//         }
//       }
//       if (foundItem) break;
//     }

//     if (foundItem) {
//       setItem(foundItem);

//       // Initialize tabs
//       const initialTabs: Record<string, string> = {};
//       if (foundItem.variants) {
//         foundItem.variants.forEach((v: Variant) => {
//           initialTabs[v.name] = "Price";
//         });
//         setVariantTabs(initialTabs);
//       }
//     }
//   }, [productSlug]);

//   const handleTabChange = (variantName: string, tab: string) => {
//     setVariantTabs((prev) => ({ ...prev, [variantName]: tab }));
//   };

//   const handleQuantityChange = (variantName: string, value: string) => {
//     setQuantities((prev) => ({ ...prev, [variantName]: value }));
//     const variant = item?.variants?.find((v) => v.name === variantName);
//     const qty = parseInt(value) || 0;
//     const price = variant?.price || 0;
//     setTotals((prev) => ({ ...prev, [variantName]: qty * price }));
//   };

//   if (!item) return <div className="text-center py-10">Product not found</div>;

//   if (!item.variants) {
//     return (
//       <div className="text-center py-10">
//         No variants available for {item.name}
//       </div>
//     );
//   }

//   return (
//     <div className=" px-4 lg:px-6 xl:px-32 pt-20">
//       <h1 className="text-3xl font-bold mb-10 text-center">{item.name}</h1>

//       <p className="text-center text-lg md:text-xl text-gray-600 mb-10 max-w-5xl mx-auto">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero? Deleniti autem aperiam amet ratione obcaecati provident voluptates, ipsum, totam cum et voluptas hic dolore sit quisquam aspernatur ullam velit pariatur corporis! Placeat, voluptas. Dolorum dolore voluptatum laudantium explicabo accusantium.
//       </p>

//       <div className="space-y-12">
//         {item.variants.map((variant) => (
//           <div
//             key={variant.name}
//             className="flex flex-col md:flex-row shadow-sm hover:shadow-md transition bg-white overflow-hidden"
//           >
//             {/* Left: Image */}
//             <div className="md:w-1/2 bg-gray-50">
//               {variant.image && (
//                 <Image
//                   src={variant.image}
//                   alt={variant.name}
//                   width={600}
//                   height={400}
//                   className="object-contain w-full h-auto"
//                 />
//               )}
//             </div>

//             {/* Right: Tabs + Content */}
//             <div className="md:w-1/2 p-6">
//               {/* Tabs */}
//               <div className="flex border-b mb-4">
//                 {["Price", "About"].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => handleTabChange(variant.name, tab)}
//                     className={`flex-1 text-lg font-medium py-2 border-b-2 ${variantTabs[variant.name] === tab
//                       ? "border-orange-500 text-orange-600"
//                       : "border-transparent text-gray-500 hover:text-orange-500"
//                       }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {/* Tab Content */}
//               {variantTabs[variant.name] === "Price" && (
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-3">
//                     {variant.name}
//                   </h2>

//                   <p className="text-gray-700 mb-3">
//                     Price:{" "}
//                     <span className="font-bold text-orange-600">
//                       {variant.price ? `$${variant.price.toFixed(2)}` : "N/A"}
//                     </span>
//                   </p>

//                   <div className="mb-4">
//                     <label className="font-medium text-sm mr-2">
//                       Quantity:
//                     </label>
//                     <select
//                       value={quantities[variant.name] || ""}
//                       onChange={(e) =>
//                         handleQuantityChange(variant.name, e.target.value)
//                       }
//                       className="border rounded-md p-1"
//                     >
//                       <option value="">--Select--</option>
//                       {[10, 50, 100, 500, 1000].map((qty) => (
//                         <option key={qty} value={qty}>
//                           {qty}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <p className="text-base font-semibold">
//                     Total:{" "}
//                     <span className="text-orange-600">
//                       ${totals[variant.name]?.toFixed(2) || "0.00"}
//                     </span>{" "}
//                     <span className="text-gray-500 text-sm">(Excl. VAT)</span>
//                   </p>

//                   <p className="text-sm text-gray-500 mt-4">
//                     <span className="font-semibold">Note:</span> The prices
//                     listed are for readymade products. Additional customization
//                     may incur extra costs.
//                   </p>

//                   <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">
//                     Order Now
//                   </button>
//                 </div>
//               )}

//               {variantTabs[variant.name] === "About" && (
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-3">
//                     {variant.name}
//                   </h2>
//                   <p className="text-gray-600 leading-relaxed">
//                     {variant.description ||
//                       "No additional information available for this variant."}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <RelatedProducts />
//       <FaqProducts />
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { dropdownMenus, SubItem, Variant } from "@/components/DropdownMenuData";
// import RelatedProducts from "@/components/RelatedProducts";
// import FaqProducts from "@/components/FaqProducts";
// import { slugify } from "@/utils/slugify";

// export default function ProductPage() {
//   const { productSlug } = useParams();
//   const [item, setItem] = useState<SubItem | null>(null);
//   const [variantTabs, setVariantTabs] = useState<Record<string, string>>({});
//   const [quantities, setQuantities] = useState<Record<string, string>>({});
//   const [sizes, setSizes] = useState<Record<string, string>>({});
//   const [totals, setTotals] = useState<Record<string, number>>({});

//   useEffect(() => {
//     let foundItem: SubItem | null = null;

//     for (const menuName in dropdownMenus) {
//       const menu = dropdownMenus[menuName];
//       for (const categoryName in menu.categories) {
//         const category = menu.categories[categoryName];
//         const matchedItem = category.items.find(
//           (i) => slugify(i.name) === productSlug
//         );
//         if (matchedItem) {
//           foundItem = matchedItem;
//           break;
//         }
//       }
//       if (foundItem) break;
//     }

//     if (foundItem) {
//       setItem(foundItem);

//       // Initialize tabs
//       const initialTabs: Record<string, string> = {};
//       const initialSizes: Record<string, string> = {};
//       if (foundItem.variants) {
//         foundItem.variants.forEach((v: Variant) => {
//           initialTabs[v.name] = "Price";
//           initialSizes[v.name] = v.sizes?.[0] || ""; // Default to first size if available
//         });
//         setVariantTabs(initialTabs);
//         setSizes(initialSizes);
//       }
//     }
//   }, [productSlug]);

//   const handleTabChange = (variantName: string, tab: string) => {
//     setVariantTabs((prev) => ({ ...prev, [variantName]: tab }));
//   };

//   const handleQuantityChange = (variantName: string, value: string) => {
//     setQuantities((prev) => ({ ...prev, [variantName]: value }));
//     const variant = item?.variants?.find((v) => v.name === variantName);
//     const qty = parseInt(value) || 0;
//     const price = variant?.price || 0;
//     setTotals((prev) => ({ ...prev, [variantName]: qty * price }));
//   };

//   const handleSizeChange = (variantName: string, value: string) => {
//     setSizes((prev) => ({ ...prev, [variantName]: value }));
//   };

//   if (!item) return <div className="text-center py-10">Product not found</div>;

//   if (!item.variants) {
//     return (
//       <div className="text-center py-10">
//         No variants available for {item.name}
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 lg:px-6 xl:px-32 pt-20">
//       <h1 className="text-3xl font-bold mb-10 text-center">{item.name}</h1>

//       <p className="text-center text-lg md:text-xl text-gray-600 mb-10 max-w-5xl mx-auto">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero? Deleniti autem aperiam amet ratione obcaecati provident voluptates, ipsum, totam cum et voluptas hic dolore sit quisquam aspernatur ullam velit pariatur corporis! Placeat, voluptas. Dolorum dolore voluptatum laudantium explicabo accusantium.
//       </p>

//       <div className="space-y-12">
//         {item.variants.map((variant) => (
//           <div
//             key={variant.name}
//             className="flex flex-col md:flex-row shadow-sm hover:shadow-md transition bg-white overflow-hidden"
//           >
//             {/* Left: Image */}
//             <div className="md:w-1/2 bg-gray-50">
//               {variant.image && (
//                 <Image
//                   src={variant.image}
//                   alt={variant.name}
//                   width={600}
//                   height={400}
//                   className="object-contain w-full h-auto"
//                 />
//               )}
//             </div>

//             {/* Right: Tabs + Content */}
//             <div className="md:w-1/2 p-6">
//               {/* Tabs */}
//               <div className="flex border-b mb-4">
//                 {["Price", "About"].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => handleTabChange(variant.name, tab)}
//                     className={`flex-1 text-lg font-medium py-2 border-b-2 ${
//                       variantTabs[variant.name] === tab
//                         ? "border-orange-500 text-orange-600"
//                         : "border-transparent text-gray-500 hover:text-orange-500"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {/* Tab Content */}
//               {variantTabs[variant.name] === "Price" && (
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-3">{variant.name}</h2>
//                   {variant.price ? (
//                     <>
//                       <p className="text-gray-700 mb-3">
//                         Price:{" "}
//                         <span className="font-bold text-orange-600">
//                           ${variant.price.toFixed(2)}
//                         </span>
//                       </p>
//                       <div className="mb-4">
//                         <label className="font-medium text-sm mr-2">Size:</label>
//                         <select
//                           value={sizes[variant.name] || ""}
//                           onChange={(e) => handleSizeChange(variant.name, e.target.value)}
//                           className="border rounded-md p-1"
//                         >
//                           <option value="">--Select Size--</option>
//                           {variant.sizes?.map((size) => (
//                             <option key={size} value={size}>
//                               {size}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="mb-4">
//                         <label className="font-medium text-sm mr-2">Quantity:</label>
//                         <select
//                           value={quantities[variant.name] || ""}
//                           onChange={(e) => handleQuantityChange(variant.name, e.target.value)}
//                           className="border rounded-md p-1"
//                         >
//                           <option value="">--Select--</option>
//                           {[10, 50, 100, 500, 1000].map((qty) => (
//                             <option key={qty} value={qty}>
//                               {qty}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <p className="text-base font-semibold">
//                         Total:{" "}
//                         <span className="text-orange-600">
//                           ${totals[variant.name]?.toFixed(2) || "0.00"}
//                         </span>{" "}
//                         <span className="text-gray-500 text-sm">(Excl. VAT)</span>
//                       </p>
//                       <p className="text-sm text-gray-500 mt-4">
//                         <span className="font-semibold">Note:</span> The prices listed are for readymade products. Additional customization may incur extra costs.
//                       </p>
//                       <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">
//                         Order Now
//                       </button>
//                     </>
//                   ) : (
//                     <p className="text-gray-600">Price information not available.</p>
//                   )}
//                 </div>
//               )}

//               {variantTabs[variant.name] === "About" && (
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-3">{variant.name}</h2>
//                   <p className="text-gray-600 leading-relaxed">
//                     {variant.description || "No additional information available for this variant."}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <RelatedProducts />
//       <FaqProducts />
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { dropdownMenus, SubItem, Variant } from "@/components/DropdownMenuData";
// import RelatedProducts from "@/components/RelatedProducts";
// import FaqProducts from "@/components/FaqProducts";
// import { slugify } from "@/utils/slugify";

// export default function ProductPage() {
//   const { productSlug } = useParams();
//   const [item, setItem] = useState<SubItem | null>(null);
//   const [variantTabs, setVariantTabs] = useState<Record<string, string>>({});
//   const [quantities, setQuantities] = useState<Record<string, string>>({});
//   const [sizes, setSizes] = useState<Record<string, string>>({});
//   const [totals, setTotals] = useState<Record<string, number>>({});

//   useEffect(() => {
//     let foundItem: SubItem | null = null;

//     for (const menuName in dropdownMenus) {
//       const menu = dropdownMenus[menuName];
//       for (const categoryName in menu.categories) {
//         const category = menu.categories[categoryName];
//         const matchedItem = category.items.find(
//           (i) => slugify(i.name) === productSlug
//         );
//         if (matchedItem) {
//           foundItem = matchedItem;
//           break;
//         }
//       }
//       if (foundItem) break;
//     }

//     if (foundItem) {
//       setItem(foundItem);

//       // Initialize tabs
//       const initialTabs: Record<string, string> = {};
//       const initialSizes: Record<string, string> = {};
//       if (foundItem.variants) {
//         foundItem.variants.forEach((v: Variant) => {
//           initialTabs[v.name] = "Price";
//           initialSizes[v.name] = v.sizes?.[0] || ""; // Default to first size if available
//         });
//         setVariantTabs(initialTabs);
//         setSizes(initialSizes);
//       }
//     }
//   }, [productSlug]);

//   const handleTabChange = (variantName: string, tab: string) => {
//     setVariantTabs((prev) => ({ ...prev, [variantName]: tab }));
//   };

//   const handleQuantityChange = (variantName: string, value: string) => {
//     setQuantities((prev) => ({ ...prev, [variantName]: value }));
//     const variant = item?.variants?.find((v) => v.name === variantName);
//     const qty = parseInt(value) || 0;
//     const price = variant?.price || 0;
//     setTotals((prev) => ({ ...prev, [variantName]: qty * price }));
//   };

//   const handleSizeChange = (variantName: string, value: string) => {
//     setSizes((prev) => ({ ...prev, [variantName]: value }));
//   };

//   if (!item) return <div className="text-center py-10">Product not found</div>;

//   if (!item.variants) {
//     return (
//       <div className="text-center py-10">
//         No variants available for {item.name}
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 lg:px-6 xl:px-32 pt-20">
//       <h1 className="text-3xl font-bold mb-10 text-center">{item.name}</h1>

//       <p className="text-center text-lg md:text-xl text-gray-600 mb-10 max-w-5xl mx-auto">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero? Deleniti autem aperiam amet ratione obcaecati provident voluptates, ipsum, totam cum et voluptas hic dolore sit quisquam aspernatur ullam velit pariatur corporis! Placeat, voluptas. Dolorum dolore voluptatum laudantium explicabo accusantium.
//       </p>

//       <div className="space-y-12">
//         {item.variants.map((variant) => (
//           <div
//             key={variant.name}
//             className="flex flex-col md:flex-row shadow-sm hover:shadow-md transition bg-white overflow-hidden"
//           >
//             {/* Left: Image */}
//             <div className="md:w-1/2 bg-gray-50">
//               {variant.image && (
//                 <Image
//                   src={variant.image}
//                   alt={variant.name}
//                   width={600}
//                   height={400}
//                   className="object-contain w-full h-auto"
//                 />
//               )}
//             </div>

//             {/* Right: Tabs + Content */}
//             <div className="md:w-1/2 p-6">
//               {/* Tabs */}
//               <div className="flex border-b mb-4">
//                 {["Price", "About"].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => handleTabChange(variant.name, tab)}
//                     className={`flex-1 text-lg font-medium py-2 border-b-2 ${
//                       variantTabs[variant.name] === tab
//                         ? "border-orange-500 text-orange-600"
//                         : "border-transparent text-gray-500 hover:text-orange-500"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {/* Tab Content */}
//               {variantTabs[variant.name] === "Price" && (
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-3">{variant.name}</h2>
//                   {variant.price ? (
//                     <>
//                       <p className="text-gray-700 mb-3">
//                         Price:{" "}
//                         <span className="font-bold text-orange-600">
//                           ${variant.price.toFixed(2)}
//                         </span>
//                       </p>
//                       <div className="mb-4">
//                         <label className="font-medium text-sm mr-2">Size:</label>
//                         <select
//                           value={sizes[variant.name] || ""}
//                           onChange={(e) => handleSizeChange(variant.name, e.target.value)}
//                           className="border rounded-md p-1"
//                         >
//                           <option value="">--Select Size--</option>
//                           {variant.sizes?.map((size) => (
//                             <option key={size} value={size}>
//                               {size}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="mb-4">
//                         <label className="font-medium text-sm mr-2">Quantity:</label>
//                         <select
//                           value={quantities[variant.name] || ""}
//                           onChange={(e) => handleQuantityChange(variant.name, e.target.value)}
//                           className="border rounded-md p-1"
//                         >
//                           <option value="">--Select--</option>
//                           {[10, 50, 100, 500, 1000].map((qty) => (
//                             <option key={qty} value={qty}>
//                               {qty}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <p className="text-base font-semibold">
//                         Total:{" "}
//                         <span className="text-orange-600">
//                           ${totals[variant.name]?.toFixed(2) || "0.00"}
//                         </span>{" "}
//                         <span className="text-gray-500 text-sm">(Excl. VAT)</span>
//                       </p>
//                       <p className="text-sm text-gray-500 mt-4">
//                         <span className="font-semibold">Note:</span> The prices listed are for readymade products. Additional customization may incur extra costs.
//                       </p>
//                     </>
//                   ) : (
//                     <p className="text-gray-600">Price information not available.</p>
//                   )}
//                 </div>
//               )}

//               {variantTabs[variant.name] === "About" && (
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-3">{variant.name}</h2>
//                   <p className="text-gray-600 leading-relaxed">
//                     {variant.description || "No additional information available for this variant."}
//                   </p>
//                 </div>
//               )}

//               {/* Order Now Button */}
//               <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">
//                 Order Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <RelatedProducts />
//       <FaqProducts />
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { dropdownMenus, SubItem, Variant } from "@/components/DropdownMenuData";
// import RelatedProducts from "@/components/RelatedProducts";
// import FaqProducts from "@/components/FaqProducts";
// import { slugify } from "@/utils/slugify";

// export default function ProductPage() {
//   const { productSlug } = useParams();
//   const [item, setItem] = useState<SubItem | null>(null);
//   const [variantTabs, setVariantTabs] = useState<Record<string, string>>({});
//   const [quantities, setQuantities] = useState<Record<string, string>>({});
//   const [sizes, setSizes] = useState<Record<string, string>>({});
//   const [totals, setTotals] = useState<Record<string, number>>({});
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//     requiredItem: "",
//     message: "",
//   });

//   useEffect(() => {
//     let foundItem: SubItem | null = null;

//     for (const menuName in dropdownMenus) {
//       const menu = dropdownMenus[menuName];
//       for (const categoryName in menu.categories) {
//         const category = menu.categories[categoryName];
//         const matchedItem = category.items.find(
//           (i) => slugify(i.name) === productSlug
//         );
//         if (matchedItem) {
//           foundItem = matchedItem;
//           break;
//         }
//       }
//       if (foundItem) break;
//     }

//     if (foundItem) {
//       setItem(foundItem);

//       // Initialize tabs
//       const initialTabs: Record<string, string> = {};
//       const initialSizes: Record<string, string> = {};
//       if (foundItem.variants) {
//         foundItem.variants.forEach((v: Variant) => {
//           initialTabs[v.name] = "Price";
//           initialSizes[v.name] = v.sizes?.[0] || "";
//         });
//         setVariantTabs(initialTabs);
//         setSizes(initialSizes);
//       }
//     }
//   }, [productSlug]);

//   const handleTabChange = (variantName: string, tab: string) => {
//     setVariantTabs((prev) => ({ ...prev, [variantName]: tab }));
//   };

//   const handleQuantityChange = (variantName: string, value: string) => {
//     setQuantities((prev) => ({ ...prev, [variantName]: value }));
//     const variant = item?.variants?.find((v) => v.name === variantName);
//     const qty = parseInt(value) || 0;
//     const price = variant?.price || 0;
//     setTotals((prev) => ({ ...prev, [variantName]: qty * price }));
//   };

//   const handleSizeChange = (variantName: string, value: string) => {
//     setSizes((prev) => ({ ...prev, [variantName]: value }));
//   };

//   const handleOrderClick = (variantName: string) => {
//     setSelectedVariant(variantName);
//     setFormData((prev) => ({ ...prev, requiredItem: variantName }));
//     setIsModalOpen(true);
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Inquiry submitted:", formData);
//     // Add your form submission logic here (e.g., API call)
//     setIsModalOpen(false);
//     setFormData({
//       name: "",
//       email: "",
//       contactNumber: "",
//       requiredItem: "",
//       message: "",
//     });
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setFormData({
//       name: "",
//       email: "",
//       contactNumber: "",
//       requiredItem: "",
//       message: "",
//     });
//   };

//   if (!item) return <div className="text-center py-10">Product not found</div>;

//   if (!item.variants) {
//     return (
//       <div className="text-center py-10">
//         No variants available for {item.name}
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 lg:px-6 xl:px-32 pt-20">
//       <h1 className="text-3xl font-bold mb-10 text-center">{item.name}</h1>

//       <p className="text-center text-lg md:text-xl text-gray-600 mb-10 max-w-5xl mx-auto">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero? Deleniti autem aperiam amet ratione obcaecati provident voluptates, ipsum, totam cum et voluptas hic dolore sit quisquam aspernatur ullam velit pariatur corporis! Placeat, voluptas. Dolorum dolore voluptatum laudantium explicabo accusantium.
//       </p>

//       <div className="space-y-12">
//         {item.variants.map((variant) => (
//           <div
//             key={variant.name}
//             className="flex flex-col md:flex-row shadow-sm hover:shadow-md transition bg-white overflow-hidden"
//           >
//             {/* Left: Image */}
//             <div className="md:w-1/2 bg-gray-50">
//               {variant.image && (
//                 <Image
//                   src={variant.image}
//                   alt={variant.name}
//                   width={600}
//                   height={400}
//                   className="object-contain w-full h-auto"
//                 />
//               )}
//             </div>

//             {/* Right: Tabs + Content */}
//             <div className="md:w-1/2 p-6">
//               {/* Tabs */}
//               <div className="flex border-b mb-4">
//                 {["Price", "About"].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => handleTabChange(variant.name, tab)}
//                     className={`flex-1 text-lg font-medium py-2 border-b-2 ${
//                       variantTabs[variant.name] === tab
//                         ? "border-orange-500 text-orange-600"
//                         : "border-transparent text-gray-500 hover:text-orange-500"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {/* Tab Content */}
//               {variantTabs[variant.name] === "Price" && (
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-3">{variant.name}</h2>
//                   {variant.price ? (
//                     <>
//                       <p className="text-gray-700 mb-3">
//                         Price:{" "}
//                         <span className="font-bold text-orange-600">
//                           ${variant.price.toFixed(2)}
//                         </span>
//                       </p>
//                       <div className="mb-4">
//                         <label className="font-medium text-sm mr-2">Size:</label>
//                         <select
//                           value={sizes[variant.name] || ""}
//                           onChange={(e) => handleSizeChange(variant.name, e.target.value)}
//                           className="border rounded-md p-1"
//                         >
//                           <option value="">--Select Size--</option>
//                           {variant.sizes?.map((size) => (
//                             <option key={size} value={size}>
//                               {size}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="mb-4">
//                         <label className="font-medium text-sm mr-2">Quantity:</label>
//                         <select
//                           value={quantities[variant.name] || ""}
//                           onChange={(e) => handleQuantityChange(variant.name, e.target.value)}
//                           className="border rounded-md p-1"
//                         >
//                           <option value="">--Select--</option>
//                           {[10, 50, 100, 500, 1000].map((qty) => (
//                             <option key={qty} value={qty}>
//                               {qty}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <p className="text-base font-semibold">
//                         Total:{" "}
//                         <span className="text-orange-600">
//                           ${totals[variant.name]?.toFixed(2) || "0.00"}
//                         </span>{" "}
//                         <span className="text-gray-500 text-sm">(Excl. VAT)</span>
//                       </p>
//                       <p className="text-sm text-gray-500 mt-4">
//                         <span className="font-semibold">Note:</span> The prices listed are for readymade products. Additional customization may incur extra costs.
//                       </p>
//                     </>
//                   ) : (
//                     <p className="text-gray-600">Price information not available.</p>
//                   )}
//                 </div>
//               )}

//               {variantTabs[variant.name] === "About" && (
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-3">{variant.name}</h2>
//                   <p className="text-gray-600 leading-relaxed">
//                     {variant.description || "No additional information available for this variant."}
//                   </p>
//                 </div>
//               )}

//               {/* Order Now Button */}
//               <button
//                 onClick={() => handleOrderClick(variant.name)}
//                 className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
//               >
//                 Order Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Inquiry Form Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
//             <h2 className="text-2xl font-bold text-slate-800 mb-6">Inquiry Form</h2>
//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   placeholder="e.g. John Smith"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   placeholder="e.g. john@email.com"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="contactNumber"
//                   name="contactNumber"
//                   value={formData.contactNumber}
//                   onChange={handleFormChange}
//                   placeholder="e.g. +1 222 444 66"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="requiredItem" className="block text-sm font-medium text-gray-700 mb-2">
//                   Required Item
//                 </label>
//                 <input
//                   type="text"
//                   id="requiredItem"
//                   name="requiredItem"
//                   value={formData.requiredItem}
//                   readOnly
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleFormChange}
//                   placeholder="Type your message..."
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={handleCloseModal}
//                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <RelatedProducts />
//       <FaqProducts />
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { dropdownMenus, SubItem, Variant } from "@/components/DropdownMenuData";
import RelatedProducts from "@/components/RelatedProducts";
import FaqProducts from "@/components/FaqProducts";
import { slugify } from "@/utils/slugify";

export default function ProductPage() {
  const { productSlug } = useParams();
  const [item, setItem] = useState<SubItem | null>(null);
  const [variantTabs, setVariantTabs] = useState<Record<string, string>>({});
  const [quantities, setQuantities] = useState<Record<string, string>>({});
  const [sizes, setSizes] = useState<Record<string, string>>({});
  const [totals, setTotals] = useState<Record<string, number>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    requiredItem: "",
    message: "",
  });

  useEffect(() => {
    let foundItem: SubItem | null = null;

    for (const menuName in dropdownMenus) {
      const menu = dropdownMenus[menuName];
      for (const categoryName in menu.categories) {
        const category = menu.categories[categoryName];
        const matchedItem = category.items.find(
          (i) => slugify(i.name) === productSlug
        );
        if (matchedItem) {
          foundItem = matchedItem;
          break;
        }
      }
      if (foundItem) break;
    }

    if (foundItem) {
      setItem(foundItem);

      // Initialize tabs
      const initialTabs: Record<string, string> = {};
      const initialSizes: Record<string, string> = {};
      if (foundItem.variants) {
        foundItem.variants.forEach((v: Variant) => {
          initialTabs[v.name] = "Price";
          initialSizes[v.name] = v.sizes?.[0] || "";
        });
        setVariantTabs(initialTabs);
        setSizes(initialSizes);
      }
    }
  }, [productSlug]);

  const handleTabChange = (variantName: string, tab: string) => {
    setVariantTabs((prev) => ({ ...prev, [variantName]: tab }));
  };

  const handleQuantityChange = (variantName: string, value: string) => {
    setQuantities((prev) => ({ ...prev, [variantName]: value }));
    const variant = item?.variants?.find((v) => v.name === variantName);
    const qty = parseInt(value) || 0;
    const price = variant?.price || 0;
    setTotals((prev) => ({ ...prev, [variantName]: qty * price }));
  };

  const handleSizeChange = (variantName: string, value: string) => {
    setSizes((prev) => ({ ...prev, [variantName]: value }));
  };

  const handleOrderClick = (variantName: string) => {
    setFormData((prev) => ({ ...prev, requiredItem: variantName }));
    setIsModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry submitted:", formData);
    // Add your form submission logic here (e.g., API call)
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      requiredItem: "",
      message: "",
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      requiredItem: "",
      message: "",
    });
  };

  if (!item) return <div className="text-center py-10">Product not found</div>;

  if (!item.variants) {
    return (
      <div className="text-center py-10">
        No variants available for {item.name}
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-6 xl:px-32 pt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 text-center">
        Have Questions? Contact Us!
      </h1>
      <h1 className="text-3xl font-bold mb-10 text-center">{item.name}</h1>

      <p className="text-center text-lg md:text-xl text-gray-600 mb-10 max-w-5xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero? Deleniti autem aperiam amet ratione obcaecati provident voluptates, ipsum, totam cum et voluptas hic dolore sit quisquam aspernatur ullam velit pariatur corporis! Placeat, voluptas. Dolorum dolore voluptatum laudantium explicabo accusantium.
      </p>

      <div className="space-y-12">
        {item.variants.map((variant) => (
          <div
            key={variant.name}
            className="flex flex-col md:flex-row shadow-sm hover:shadow-md transition bg-white overflow-hidden"
          >
            {/* Left: Image */}
            <div className="md:w-1/2 bg-gray-50">
              {variant.image && (
                <Image
                  src={variant.image}
                  alt={variant.name}
                  width={600}
                  height={400}
                  className="object-contain w-full h-auto"
                />
              )}
            </div>

            {/* Right: Tabs + Content */}
            <div className="md:w-1/2 p-6">
              {/* Tabs */}
              <div className="flex border-b mb-4">
                {["Price", "About"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(variant.name, tab)}
                    className={`flex-1 text-lg font-medium py-2 border-b-2 ${
                      variantTabs[variant.name] === tab
                        ? "border-[#E7671E] text-[#E7671E]"
                        : "border-transparent text-gray-500 hover:text-[#E7671E]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {variantTabs[variant.name] === "Price" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{variant.name}</h2>
                  {variant.price ? (
                    <>
                      <p className="text-gray-700 mb-3">
                        Price:{" "}
                        <span className="font-bold text-[#E7671E]">
                          ${variant.price.toFixed(2)}
                        </span>
                      </p>
                      <div className="mb-4">
                        <label className="font-medium text-sm mr-2">Size:</label>
                        <select
                          value={sizes[variant.name] || ""}
                          onChange={(e) => handleSizeChange(variant.name, e.target.value)}
                          className="border rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-[#E7671E]"
                        >
                          <option value="">--Select Size--</option>
                          {variant.sizes?.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="font-medium text-sm mr-2">Quantity:</label>
                        <select
                          value={quantities[variant.name] || ""}
                          onChange={(e) => handleQuantityChange(variant.name, e.target.value)}
                          className="border rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-[#E7671E]"
                        >
                          <option value="">--Select--</option>
                          {[10, 50, 100, 500, 1000].map((qty) => (
                            <option key={qty} value={qty}>
                              {qty}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p className="text-base font-semibold">
                        Total:{" "}
                        <span className="text-[#E7671E]">
                          ${totals[variant.name]?.toFixed(2) || "0.00"}
                        </span>{" "}
                        <span className="text-gray-500 text-sm">(Excl. VAT)</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-4">
                        <span className="font-semibold">Note:</span> The prices listed are for readymade products. Additional customization may incur extra costs.
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-600">Price information not available.</p>
                  )}
                </div>
              )}

              {variantTabs[variant.name] === "About" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{variant.name}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {variant.description || "No additional information available for this variant."}
                  </p>
                </div>
              )}

              {/* Order Now Button */}
              <button
                onClick={() => handleOrderClick(variant.name)}
                className="mt-6 bg-[#E7671E] text-white px-6 py-2 rounded-md hover:bg-[#D55A1B] transition"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold text-[#E7671E] mb-6">Inquiry Form</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="e.g. John Smith"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="e.g. john@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E]"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleFormChange}
                  placeholder="e.g. +1 222 444 66"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E]"
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
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Type your message..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] resize-none"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#E7671E] text-white rounded-md hover:bg-[#D55A1B] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <RelatedProducts />
      <FaqProducts />
    </div>
  );
}