"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiSearch, FiChevronDown, FiX, FiMenu } from "react-icons/fi";
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
      // Set default selected category to first menu item
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

  return (
    <header className="w-full bg-white shadow-md relative">
      {/* Mobile Header Wrapper */}
      <div className="block lg:hidden fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <Image src="/images/orange-productions.svg" alt="Logo" width={100} height={35} />
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSearch}
              className="p-1 hover:text-[#E7671E] transition-all duration-300 hover:scale-110"
              style={{
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <div className={`transition-all duration-300 ${isSearchOpen ? 'rotate-90' : 'rotate-0'}`}>
                <FiSearch className="w-5 h-5 text-gray-800" />
              </div>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-1 hover:text-[#E7671E] transition-all duration-300 hover:scale-110"
              style={{
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {isMobileMenuOpen ? <FiX className="w-5 h-5 text-gray-800" /> : <FiMenu className="w-5 h-5 text-gray-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {isSearchOpen && (
          <div className="absolute inset-x-0 top-full bg-white shadow-2xl border border-gray-200 px-4 py-4 w-full z-50 transition-all duration-300 ease-in-out transform origin-top scale-y-100 opacity-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search products, services..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7671E] text-sm transition-all duration-300"
                style={{
                  transform: 'translateX(0)',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />
              <button
                onClick={closeSearch}
                className="p-1 hover:text-[#E7671E] transition-all duration-300 hover:scale-110"
                style={{
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="fixed inset-x-0 top-[59px] h-[calc(100vh-60px)] bg-white shadow-2xl border-t border-gray-200 z-40 transition-all duration-300 ease-in-out transform origin-top scale-y-100 opacity-100 overflow-y-auto">
            <div className="flex h-full">
              {/* Left Column - Categories */}
              <div className="w-1/3 bg-gray-50 border-r border-gray-200 p-2 overflow-y-auto">
                <div className="space-y-4">
                  {/* Main Menu Items */}
                  {menuItems.map((item) => (
                    <div
                      key={item.name}
                      className={`cursor-pointer p-1 rounded-lg transition-colors duration-300 ${selectedMobileCategory === item.name ? 'bg-white text-[#E7671E] border border-[#E7671E]' : 'text-gray-600 hover:text-[#E7671E]'
                        }`}
                      onClick={() => selectMobileCategory(item.name)}
                    >
                      <span className="text-xs font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="w-2/3 p-2 overflow-y-auto">
                {selectedMobileCategory && dropdownMenus[selectedMobileCategory] ? (
                  <>
                    {/* Selected Category Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                      {selectedMobileCategory}
                    </h3>

                    {/* Most Popular Products - At Top */}
                    {dropdownMenus[selectedMobileCategory]?.popularProducts && (
                      <div className="mb-8">
                        <h4 className="text-gray-800 font-bold text-sm mb-4">Most Popular</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {dropdownMenus[selectedMobileCategory].popularProducts.map((prod) => (
                            <div key={prod.name} className="flex flex-col bg-white shadow-sm overflow-hidden">
                              <div className="aspect-square w-full relative">
                                <Image
                                  src={prod.image}
                                  alt={prod.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="flex items-center justify-center text-xs text-center text-gray-600 px-1 py-1 flex-1 min-h-[10%]">
                                {prod.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Other Products - Card List */}
                    <div className="space-y-6">
                      {Object.entries(dropdownMenus[selectedMobileCategory].categories).map(([category, data]) => (
                        <div key={category}>
                          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-3">
                            {category}
                          </h4>
                          <div className="grid grid-cols-3 gap-2">
                            {data.items.map((subItem: SubItem) => (
                              <div
                                key={subItem.name}
                                className="flex flex-col bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 overflow-hidden"
                              >
                                <div className="aspect-square w-full relative">
                                  <Image
                                    src={subItem.image || "/images/placeholder.png"}
                                    alt={subItem.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <span className="flex items-center justify-center text-xs text-center text-gray-600 px-1 py-1 flex-1 min-h-[10%]">
                                  {subItem.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <h3 className="text-xl font-bold mb-4">Explore Our Services</h3>
                    <p className="text-sm">Click on a category on the left to get started.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        {/* Logo + Search Section */}
        <div className="hidden lg:flex items-center justify-between px-6 xl:px-32 py-4">
          <Image src="/images/orange-productions.svg" alt="Logo" width={120} height={42} />
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${isSearchOpen ? 'w-96 opacity-100' : 'w-0 opacity-0'
                  }`}
              >
                <input
                  type="text"
                  placeholder="Search products, services..."
                  className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border focus:border-[#E7671E] transition-all duration-300"
                  style={{
                    transform: isSearchOpen ? 'translateX(0)' : 'translateX(20px)',
                    transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                />
              </div>
              <button
                onClick={isSearchOpen ? closeSearch : toggleSearch}
                className="hover:text-[#E7671E] transition-all duration-300 hover:scale-110"
                style={{
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <div
                  className={`transition-all duration-300 ${isSearchOpen ? 'rotate-90' : 'rotate-0'
                    }`}
                >
                  {isSearchOpen ? (
                    <FiX className="w-6 h-6" />
                  ) : (
                    <FiSearch className="w-6 h-6 text-gray-800" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>


        {/* Menu + Dropdown */}
        <div className="relative" onMouseLeave={handleMouseLeave}>
          <div className="hidden lg:flex items-center justify-between w-full bg-gray-100 px-6 xl:px-32 py-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                className="inline-block"
              >
                <span className="text-gray-800 text-xs xl:text-sm font-medium hover:text-[#E7671E] cursor-pointer flex items-center gap-1 whitespace-nowrap">
                  {item.name} {item.hasDropdown && <FiChevronDown className="w-4 h-4" />}
                </span>
              </div>
            ))}
          </div>

          {/* Mega Dropdown */}
          {activeDropdown && (
            <div className="hidden lg:block">
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

                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}