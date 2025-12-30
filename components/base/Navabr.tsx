"use client";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInvestorDropdownOpen, setIsInvestorDropdownOpen] = useState(false);
  const [isMobileInvestorOpen, setIsMobileInvestorOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-sky-50 text-sm text-gray-700">
       
      </div>

      {/* Main Navbar */}
      <div className="bg-sky-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="bold text-3xl">TrustLink</h1>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
            <a href="/" className="text-blue-700 border-b-2 border-blue-700">
              Home
            </a>
            <a href="/rta" className="hover:text-blue-700">RTA Services</a>
            <a href="" className="hover:text-blue-700">About Us</a>
            <a href="/services" className="hover:text-blue-700">Our Services</a>
            <a href="/resources" className="hover:text-blue-700">Resources</a>
            <div className="relative">
              <button
                onMouseEnter={() => setIsInvestorDropdownOpen(true)}
                onMouseLeave={() => setIsInvestorDropdownOpen(false)}
                className="hover:text-blue-700 flex items-center gap-1"
              >
                Investor Centre
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isInvestorDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setIsInvestorDropdownOpen(true)}
                  onMouseLeave={() => setIsInvestorDropdownOpen(false)}
                >
                  <a href="/investor/grievance-redressal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Grievance Redressal
                  </a>
                  <a href="/investor/compliance-officer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Compliance Officer
                  </a>
                  <a href="/investor/investor-charter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Investor Charter
                  </a>
                  <a href="/investor/investor-grievances-reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Investor Grievances Reports
                  </a>
                  <a href="https://smartodr.in/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Smart ODR Portal
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Burger Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-sky-50 px-6 py-4">
            <nav className="flex flex-col gap-4 font-medium text-gray-800">
              <a href="/" className="text-blue-700 border-b-2 border-blue-700">
                Home
              </a>
              <a href="/rta" className="hover:text-blue-700">RTA Services</a>
              <a href="" className="hover:text-blue-700">About Us</a>
              <a href="/services" className="hover:text-blue-700">Our Services</a>
              <a href="/resources" className="hover:text-blue-700">Resources</a>
              <div>
                <button
                  onClick={() => setIsMobileInvestorOpen(!isMobileInvestorOpen)}
                  className="hover:text-blue-700 flex items-center gap-1 w-full text-left"
                >
                  Investor Centre
                  <svg className={`w-4 h-4 transition-transform ${isMobileInvestorOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileInvestorOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a href="/investor/grievance-redressal" className="text-sm hover:text-blue-700">Grievance Redressal</a>
                    <a href="/investor/compliance-officer" className="text-sm hover:text-blue-700">Compliance Officer</a>
                    <a href="/investor/investor-charter" className="text-sm hover:text-blue-700">Investor Charter</a>
                    <a href="/investor/investor-grievances-reports" className="text-sm hover:text-blue-700">Investor Grievances Reports</a>
                    <a href="/investor/smart-odr-portal" className="text-sm hover:text-blue-700">SMART ODR PORTAL</a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
