"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInvestorDropdownOpen, setIsInvestorDropdownOpen] = useState(false);
  const [isMobileInvestorOpen, setIsMobileInvestorOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClass = (href: string) =>
    isActive(href)
      ? "text-blue-700 border-b-2 border-blue-700"
      : "hover:text-blue-700";

  return (
    <header className="w-full">
      <div className="bg-sky-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" alt="TrustLink Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 font-medium text-gray-800">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About Us</Link>
            <Link href="/services" className={linkClass("/services")}>Our Services</Link>
            <Link href="/resources" className={linkClass("/resources")}>Resources</Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsInvestorDropdownOpen(!isInvestorDropdownOpen)}
                className="hover:text-blue-700 flex items-center gap-1"
              >
                Investor Centre
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isInvestorDropdownOpen && (
                <div className="absolute mt-2 w-56 bg-white border rounded shadow">
                  <Link
                    href="/investor/grievance-redressal"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Grievance Redressal
                  </Link>
                  <Link
                    href="/investor/investor-charter"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Investor Charter
                  </Link>
                  <a
                    href="https://smartodr.in/login"
                    target="_blank"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Smart ODR Portal
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-6 py-4">
            <nav className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/resources">Resources</Link>

              <button onClick={() => setIsMobileInvestorOpen(!isMobileInvestorOpen)}>
                Investor Centre
              </button>

              {isMobileInvestorOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  <Link href="/investor/grievance-redressal">Grievance Redressal</Link>
                  <Link href="/investor/investor-charter">Investor Charter</Link>
                  <a href="https://smartodr.in/login" target="_blank">
                    Smart ODR Portal
                  </a>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
