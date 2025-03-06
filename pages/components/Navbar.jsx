import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

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
          <Link href="#results" className="text-white hover:text-[#AFFE14] transition-colors duration-300">
            Our Impact
          </Link>
          <div className="relative group">
            <button 
              className="text-white hover:text-[#AFFE14] transition-colors duration-300 flex items-center"
              onMouseEnter={() => setShowDropdown(true)}
            >
              What we offer
              <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl py-2 transition-all duration-300 ${
                showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link href="/services/media-kit" className="block px-4 py-2 text-white hover:bg-[#AFFE14] hover:text-black transition-all duration-300 hover:pl-6">
                Media Kit Creation
              </Link>
              <Link href="/services/brand-deals" className="block px-4 py-2 text-white hover:bg-[#AFFE14] hover:text-black transition-all duration-300 hover:pl-6">
                Brand Deals Outreach
              </Link>
              <Link href="/services/verification" className="block px-4 py-2 text-white hover:bg-[#AFFE14] hover:text-black transition-all duration-300 hover:pl-6">
                PR + Verification Setup
              </Link>
              <Link href="/services/ugc" className="block px-4 py-2 text-white hover:bg-[#AFFE14] hover:text-black transition-all duration-300 hover:pl-6">
                UGC Portfolio Setup
              </Link>
              <Link href="/services/growth" className="block px-4 py-2 text-white hover:bg-[#AFFE14] hover:text-black transition-all duration-300 hover:pl-6">
                Monthly Influencer Growth Package
              </Link>
            </div>
          </div>
        </nav>

        {/* Logo */}
        <Link href="/" className="w-16 absolute left-[50%] transform -translate-x-1/2 hidden md:flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={65}
            className="object-cover"
            quality={100}
            priority
          />
        </Link>

        {/* Mobile Logo - Left Aligned */}
        <Link href="/" className="md:hidden flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={60}
            className="object-cover"
            quality={100}
            priority
          />
        </Link>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4 px-10">
          <Link
            href="/components/Contact"
            className="bg-[#AFFE14] text-[#240141] py-2.5 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg transition-colors duration-300"
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
      <div className={`md:hidden fixed top-[80px] left-0 w-64 h-screen z-50 bg-black/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out ${showMobileMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <nav className="flex flex-col space-y-4 p-6">
          <Link
            href="/"
            className="py-4 border-b border-[#3a0268] hover:text-[#AFFE14] transition-colors duration-300 text-white">
            Home
          </Link>
          <Link
            href="/work"
            className="py-4 border-b border-[#3a0268] hover:text-[#AFFE14] transition-colors duration-300 text-white">
            Our Impact
          </Link>
          <div className="py-4 border-b border-[#3a0268]">
            <span className="text-white mb-2 block">What we offer</span>
            <div className="pl-4 flex flex-col space-y-2">
              <Link href="/services/media-kit" className="text-gray-300 hover:text-[#AFFE14] transition-colors duration-300">
                Media Kit Creation
              </Link>
              <Link href="/services/brand-deals" className="text-gray-300 hover:text-[#AFFE14] transition-colors duration-300">
                Brand Deals Outreach
              </Link>
              <Link href="/services/verification" className="text-gray-300 hover:text-[#AFFE14] transition-colors duration-300">
                PR + Verification Setup
              </Link>
              <Link href="/services/ugc" className="text-gray-300 hover:text-[#AFFE14] transition-colors duration-300">
                UGC Portfolio Setup
              </Link>
              <Link href="/services/growth" className="text-gray-300 hover:text-[#AFFE14] transition-colors duration-300">
                Monthly Influencer Growth Package
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-6 bg-[#AFFE14] text-[#240141] py-3 px-6 rounded-lg text-center font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Enquire Now
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
