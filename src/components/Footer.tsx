"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/images/logo.svg"; 

export default function OrangeFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      {/* Logo */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">
        <Image src={Logo} alt="Orange Productions" width={150} height={40} />
      </div>

      {/* Footer Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Office Address */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Office Address</h3>
          <p>Al Harar building</p>
          <p>M 08 ,Abu Hail</p>
          <p>P.O. Box : 13492</p>
          <p>Dubai, UAE</p>
          <p className="mt-2 font-semibold">Phone:</p>
          <p>+971 56 6699 033</p>
          <p className="mt-2 font-semibold">Email:</p>
          <p>info@orangemena.com</p>
        </div>

        {/* Production Addresses */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Production Address (China)</h3>
            <p>No 23, Brownies Industry Park</p>
            <p>Shenxi Road, Baihao Area</p>
            <p>Houije Town, Dongguan City</p>
            <p>Guangdong Province, China</p>
            <p className="mt-2 font-semibold">Email:</p>
            <p>info@orangemena.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Production UAE</h3>
            <p>Warehouse No.3</p>
            <p>Behind Safeer Market</p>
            <p>Industrial Area 17</p>
            <p>Sharjah UAE</p>
            <p className="mt-2 font-semibold">Email:</p>
            <p>info@orangemena.com</p>
          </div>
        </div>

        {/* Sitemap */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Sitemap</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Products</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Corporate Gifts Suppliers in Dubai</li>
            <li>Personalised Diary Dubai</li>
            <li>Customised Gifts Dubai</li>
            <li>Personalized Mugs UAE</li>
            <li>Personalized Pen Dubai</li>
            <li>Personal Gifts UAE</li>
            <li>Promotional Gifts Dubai</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Product Categories */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Product Categories</h3>
          <ul className="space-y-1 text-sm">
            <li>Technology</li>
            <li>Drinkware</li>
            <li>Bags</li>
            <li>Stationary</li>
            <li>Gift Sets</li>
            <li>Apparel & Clothing</li>
            <li>Eco-Friendly Items</li>
            <li>Kids</li>
            <li>Video Brochure Dubai</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Social Media */}
      <div className="mt-8 py-6 border-t border-gray-200 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center md:text-left">© 2025 Orange Productions</p>

        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
