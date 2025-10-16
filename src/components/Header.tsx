"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiSearch, FiChevronDown, FiX, FiMenu, FiChevronRight } from "react-icons/fi";
import { dropdownMenus, SubItem } from "./DropdownMenuData";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { slugify } from "@/utils/slugify";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMobileCategory, setSelectedMobileCategory] = useState<string | null>(null);

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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (nextState) {
      setSelectedMobileCategory(menuItems[0].name);
    } else {
      setSelectedMobileCategory(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setSelectedMobileCategory(null);
  };

  const selectMobileCategory = (category: string) => {
    setSelectedMobileCategory(selectedMobileCategory === category ? null : category);
  };

  const handleCategoryClick = () => {
    setActiveDropdown(null); // Close dropdown on click
  };

  return (
    <header className="w-full bg-white shadow-md relative z-50">
      {/* Mobile Header Wrapper */}
      <div className="block lg:hidden fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <Image src="/images/logo.svg" alt="Logo" width={100} height={35} />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSearch}
              className="p-1 hover:text-[#E7671E] transition-all duration-300 hover:scale-110"
              style={{ transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            >
              <div className={`transition-all duration-300 ${isSearchOpen ? 'rotate-90' : 'rotate-0'}`}>
                <FiSearch className="w-5 h-5 text-gray-800" />
              </div>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-1 hover:text-[#E7671E] transition-all duration-300 hover:scale-110"
              style={{ transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            >
              {isMobileMenuOpen ? <FiX className="w-5 h-5 text-gray-800" /> : <FiMenu className="w-5 h-5 text-gray-800" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="absolute inset-x-0 top-full bg-white shadow-2xl border border-gray-200 px-4 py-4 w-full z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-2">
                <motion.input
                  type="text"
                  placeholder="Search products, services..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] text-sm transition-all duration-300"
                  style={{ transform: 'translateX(0)', transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
                <motion.button
                  onClick={closeSearch}
                  className="p-1 hover:text-[#E7671E] transition-all duration-300 hover:scale-110"
                  style={{ transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <FiX className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-x-0 top-[59px] h-[calc(100vh-60px)] bg-white shadow-2xl border-t border-gray-200 z-40 overflow-y-auto"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "calc(100vh - 60px)", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex h-full">
                <motion.div
                  className="w-1/3 bg-gray-50 border-r border-gray-200 p-2 overflow-y-auto"
                  initial="hidden"
                  animate="visible"
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                >
                  <div className="space-y-4">
                    {menuItems.map((item) => (
                      <motion.div
                        key={item.name}
                        className={`cursor-pointer p-1 rounded-lg transition-colors duration-300 ${selectedMobileCategory === item.name
                          ? 'bg-white text-[#E7671E] border border-[#E7671E]'
                          : 'text-gray-600 hover:text-[#E7671E]'
                          }`}
                        onClick={() => selectMobileCategory(item.name)}
                        variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-xs font-medium">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <div className="w-2/3 p-2 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {selectedMobileCategory && dropdownMenus[selectedMobileCategory] ? (
                      <motion.div
                        key={selectedMobileCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <Link
                          href={`/category/${slugify(selectedMobileCategory!)}`}
                          onClick={closeMobileMenu}
                        >
                          <h3 className="flex items-center justify-between text-base font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2 hover:text-[#E7671E] cursor-pointer transition-colors">
                            <span>{selectedMobileCategory}</span>
                            <FiChevronRight className="w-4 h-4" />
                          </h3>
                        </Link>


                        {dropdownMenus[selectedMobileCategory]?.popularProducts && (
                          <motion.div
                            className="mb-8"
                            initial="hidden"
                            animate="visible"
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                          >
                            <h4 className="text-gray-800 font-bold text-sm mb-4">Most Popular</h4>
                            <div className="grid grid-cols-3 gap-2">
                              {dropdownMenus[selectedMobileCategory].popularProducts.map((prod) => (
                                <motion.div
                                  key={prod.name}
                                  className="flex flex-col bg-white shadow-sm overflow-hidden"
                                  variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                                  transition={{ duration: 0.25 }}
                                >
                                  <div className="aspect-square w-full relative">
                                    <Image src={prod.image} alt={prod.name} fill className="object-cover" />
                                  </div>
                                  <span className="flex items-center justify-center text-xs text-center text-gray-600 px-1 py-1 flex-1 min-h-[10%]">
                                    {prod.name}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        <motion.div
                          className="space-y-6"
                          initial="hidden"
                          animate="visible"
                          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                        >
                          {Object.entries(dropdownMenus[selectedMobileCategory].categories).map(([category, data]) => (
                            <motion.div
                              key={category}
                              variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                              transition={{ duration: 0.3 }}
                            >
                              <Link
                                href={`/category/${slugify(selectedMobileCategory!)}#${slugify(category)}`}
                                onClick={closeMobileMenu}
                              >
                                <div className="flex items-center font-bold text-gray-800 mb-3 text-sm border-b border-gray-300 pb-1 hover:text-[#E7671E] transition-colors">
                                  <span className="mr-1">{category}</span>
                                  <FiChevronRight className="w-4 h-4" />
                                </div>
                              </Link>
                              <div className="grid grid-cols-3 gap-2">
                                {data.items.map((subItem: SubItem) => {
                                  const productSlug = slugify(subItem.name); // use the utility
                                  return (
                                    <motion.div
                                      key={subItem.name}
                                      className="flex flex-col bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 overflow-hidden"
                                      variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                                      transition={{ duration: 0.25 }}
                                    >
                                      <Link href={`/product/${productSlug}`} className="block w-full h-full" onClick={closeMobileMenu}>
                                        <div className="aspect-square w-full relative group">
                                          <Image
                                            src={subItem.image || "/images/placeholder.png"}
                                            alt={subItem.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                          />
                                        </div>
                                        <span className="flex items-center justify-center text-xs text-center text-gray-600 px-1 py-1 flex-1 min-h-[10%] group-hover:text-[#E7671E] transition-colors duration-300">
                                          {subItem.name}
                                        </span>
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="no-category"
                        className="text-center py-12 text-gray-500"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <h3 className="text-xl font-bold mb-4">Explore Our Services</h3>
                        <p className="text-sm">Click on a category on the left to get started.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative">
        {/* Logo + Search Section */}
        <div className="hidden lg:flex items-center justify-between px-6 xl:px-32 py-4">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={120} height={42} />
          </Link>
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <div className={`overflow-hidden transition-all duration-500 ease-out ${isSearchOpen ? 'w-96 opacity-100' : 'w-0 opacity-0'}`}>
                <input
                  type="text"
                  placeholder="Search products, services..."
                  className="w-96 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-[#E7671E] transition-all duration-300"
                  style={{ transform: isSearchOpen ? 'translateX(0)' : 'translateX(20px)', transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                />
              </div>
              <button
                onClick={isSearchOpen ? closeSearch : toggleSearch}
                className="hover:text-[#E7671E] transition-all duration-300 hover:scale-110"
                style={{ transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
              >
                <div className={`transition-all duration-300 ${isSearchOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isSearchOpen ? <FiX className="w-6 h-6 cursor-pointer" /> : <FiSearch className="w-6 h-6 text-gray-800 cursor-pointer" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Menu + Dropdown */}
        <div className="relative z-50" onMouseLeave={handleMouseLeave}>
          <div className="hidden lg:flex items-center justify-between w-full bg-gray-100 px-6 xl:px-32 py-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                className="inline-block"
              >
                {item.hasDropdown ? (
                  <Link
                    href={`/category/${slugify(item.name)}`}
                    onClick={handleCategoryClick}
                  >
                    <span className="text-gray-800 text-xs xl:text-sm font-medium hover:text-[#E7671E] cursor-pointer flex items-center gap-1 whitespace-nowrap">
                      {item.name} {item.hasDropdown && <FiChevronDown className="w-4 h-4" />}
                    </span>
                  </Link>
                ) : (
                  <span className="text-gray-800 text-xs xl:text-sm font-medium hover:text-[#E7671E] cursor-pointer flex items-center gap-1 whitespace-nowrap">
                    {item.name} {item.hasDropdown && <FiChevronDown className="w-4 h-4" />}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mega Dropdown */}
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                className="hidden lg:block absolute inset-x-0 top-[100%] z-50"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div className="bg-white shadow-2xl border border-gray-200 px-6 xl:px-32 py-8 w-full">
                  <motion.div
                    className="flex gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
                  >
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 flex-1 items-start"
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                    >
                      {Object.entries(dropdownMenus[activeDropdown]!.categories).map(([category, data]) => (
                        <motion.div
                          key={category}
                          className="flex flex-col justify-start"
                          variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                          transition={{ duration: 0.3 }}
                        >
                          <Link
                            href={`/category/${slugify(activeDropdown)}#${slugify(category)}`}
                            onClick={handleCategoryClick}
                          >
                            <div className="flex items-center font-bold text-gray-800 mb-3 text-sm border-b border-gray-300 pb-1 hover:text-[#E7671E] transition-colors">
                              <span className="mr-1">{category}</span>
                              <FiChevronRight className="w-4 h-4" />
                            </div>
                          </Link>
                          <ul className="space-y-1">
                            {data.items.map((subItem: SubItem) => {
                              const productSlug = slugify(subItem.name); // use utility

                              return (
                                <motion.li
                                  key={subItem.name}
                                  className="text-gray-600 text-sm hover:text-[#E7671E] cursor-pointer"
                                  onMouseEnter={() => setHoveredSubItem(subItem)}
                                  onMouseLeave={() => setHoveredSubItem(null)}
                                  variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Link
                                    href={`/product/${productSlug}`}
                                    onClick={handleCategoryClick}
                                    className="block w-full"
                                  >
                                    {subItem.name}
                                  </Link>
                                </motion.li>
                              );
                            })}
                          </ul>

                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="w-[260px] flex flex-col items-center justify-start"
                      variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.3 }}
                    >
                      {hoveredSubItem || defaultSubItem ? (
                        <>
                          <div className="w-[200px] h-[200px] mb-2 overflow-hidden">
                            <Image
                              src={(hoveredSubItem || defaultSubItem)!.image || "/images/placeholder.png"}
                              alt={(hoveredSubItem || defaultSubItem)!.name}
                              width={200}
                              height={200}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <span className="text-gray-800 font-medium text-center">
                            {(hoveredSubItem || defaultSubItem)!.name}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-400 text-sm">No items</span>
                      )}
                      {dropdownMenus[activeDropdown]?.popularProducts && (
                        <div className="mt-6 w-full">
                          <h4 className="text-gray-800 font-bold text-sm mb-2">Most Popular</h4>
                          <div className="grid grid-cols-3 gap-2">
                            {dropdownMenus[activeDropdown].popularProducts.map((prod) => (
                              <motion.div
                                key={prod.name}
                                className="flex flex-col items-center"
                                variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.25 }}
                              >
                                <div className="w-[60px] h-[60px] overflow-hidden">
                                  <Image
                                    src={prod.image}
                                    alt={prod.name}
                                    width={60}
                                    height={60}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                                <span className="text-xs text-center mt-1">{prod.name}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Background Blur Overlay */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              className="fixed left-0 right-0 bg-transparent z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backdropFilter: activeDropdown ? 'blur(5px)' : 'none',
                WebkitBackdropFilter: activeDropdown ? 'blur(5px)' : 'none',
                top: '104px',
                height: 'calc(100vh - 104px)',
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}