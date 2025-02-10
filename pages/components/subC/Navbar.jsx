import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      {/* Navigation Section */}
      <header className="flex justify-between items-center p-2">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 px-10">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/work" className="hover:text-gray-400">
            Our Impact
          </Link>
          <Link href="#services" className="hover:text-gray-400">
            What we offer
          </Link>
        </nav>

        {/* Logo */}
        <div className="w-28 flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={112}
            height={60}
            className="object-contain"
            quality={100}
          />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4 px-10">
          <Link
            href="/contact"
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Book intro call — it&apos;s free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu">
          {showMobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white text-black p-4 shadow-lg fixed top-[88px] left-0 right-0 h-screen z-50">
          <Link
            href="/"
            className="block py-3 border-b border-gray-200 hover:text-purple-600">
            Home
          </Link>
          <Link
            href="/work"
            className="block py-3 border-b border-gray-200 hover:text-purple-600">
            Our Impact
          </Link>

          <Link
            href="/contact"
            className="block mt-4 bg-purple-600 text-white py-3 px-4 rounded text-center hover:bg-purple-700 transition-colors">
            Book intro call — it&apos;s free
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
