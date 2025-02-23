import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      {/* Navigation Section */}
      <header className={`flex justify-between items-center backdrop-blur-[2px]  border-r-[8px] border-l-[8px]  fixed top-0 left-0 right-0 px-6 py-5 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mx-10 py-5">
          <Link href="/" className="text-white hover:text-[#AFFE14] transition-colors duration-300">
            Home
          </Link>
          <Link href="/work" className="text-white hover:text-[#AFFE14] transition-colors duration-300">
            Our Impact
          </Link>
          <Link href="#services" className="text-white hover:text-[#AFFE14] transition-colors duration-300">
            What we offer
          </Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="w-16 absolute left-[50%] transform -translate-x-1/2 hidden md:flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={65}
            className="object-contain hover:opacity-90 transition-opacity duration-300"
            quality={100}
            priority
          />
        </Link>

        {/* Mobile Logo - Left Aligned */}
        <Link href="/" className="md:hidden flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={65}
            className="object-cover"
            quality={100}
            priority
          />
        </Link>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4 px-10">
          <Link
            href="/contact"
            className="bg-[#AFFE14] text-[#240141] py-2.5 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-[#3a0268] rounded-lg transition-colors duration-300"
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
        <div className={`md:hidden bg-[#240141] text-white p-6 shadow-2xl fixed top-[80px] left-0 w-64 h-screen z-50 animate-fadeIn transition-transform duration-300 ${visible ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="py-4 border-b border-[#3a0268] hover:text-[#AFFE14] transition-colors duration-300">
              Home
            </Link>
            <Link
              href="/work"
              className="py-4 border-b border-[#3a0268] hover:text-[#AFFE14] transition-colors duration-300">
              Our Impact
            </Link>
            <Link
              href="#services"
              className="py-4 border-b border-[#3a0268] hover:text-[#AFFE14] transition-colors duration-300">
              What we offer
            </Link>
            <Link
              href="/contact"
              className="mt-6 bg-[#AFFE14] text-[#240141] py-3 px-6 rounded-lg text-center font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
