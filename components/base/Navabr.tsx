"use client";
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInvestorDropdownOpen, setIsInvestorDropdownOpen] = useState(false);
  const [isMobileInvestorOpen, setIsMobileInvestorOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsInvestorDropdownOpen(false);
        if (closeTimeout) {
          clearTimeout(closeTimeout);
          setCloseTimeout(null);
        }
      }
    };

    if (isInvestorDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isInvestorDropdownOpen, closeTimeout]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getLinkClasses = (href: string) => {
    return isActive(href)
      ? "text-blue-700 border-b-2 border-blue-700"
      : "hover:text-blue-700";
  };

  const handleInvestorMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsInvestorDropdownOpen(true);
  };

  const handleInvestorMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsInvestorDropdownOpen(false);
    }, 2000);
    setCloseTimeout(timeout);
  };

  const handleInvestorClick = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsInvestorDropdownOpen(!isInvestorDropdownOpen);
  };

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
            <img src="/logo.png" alt="TrustLink Logo" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
            <a href="/" className={getLinkClasses("/")}>
              Home
            </a>
            
            <a href="/about" className={getLinkClasses("/about")}>About Us</a>
            <a href="/services" className={getLinkClasses("/services")}>Our Services</a>
            <a href="/resources" className={getLinkClasses("/resources")}>Resources</a>
            <div className="relative" ref={dropdownRef}>
              <div
                onMouseEnter={handleInvestorMouseEnter}
                onMouseLeave={handleInvestorMouseLeave}
              >
                <button
                  onClick={handleInvestorClick}
                  className={`hover:text-blue-700 flex items-center gap-1 ${isActive("/investor") ? "text-blue-700 border-b-2 border-blue-700" : ""}`}
                >
                  Investor Centre
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isInvestorDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  >
                    <a href="/investor/grievance-redressal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Grievance Redressal
                    </a>
                    
                    <a href="/investor/investor-charter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Investor Charter
                    </a>
                   
                    <a href="https://smartodr.in/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Smart ODR Portal
                    </a>
                  </div>
                )}
              </div>
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
              <a href="/" className={getLinkClasses("/")}>
                Home
              </a>
              
              <a href="/about" className={getLinkClasses("/about")}>AboutUs</a>
              <a href="/services" className={getLinkClasses("/services")}>Our Services</a>
              <a href="/resources" className={getLinkClasses("/resources")}>Resources</a>
              <div>
                <button
                  onClick={() => setIsMobileInvestorOpen(!isMobileInvestorOpen)}
                  className={`hover:text-blue-700 flex items-center gap-1 w-full text-left ${isActive("/investor") ? "text-blue-700 border-b-2 border-blue-700" : ""}`}
                >
                  Investor Centre
                  <svg className={`w-4 h-4 transition-transform ${isMobileInvestorOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileInvestorOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a href="/investor/grievance-redressal" className="text-sm hover:text-blue-700">Grievance Redressal</a>
                    <a href="/investor/investor-charter" className="text-sm hover:text-blue-700">Investor Charter</a>
                    
                    <a href="https://smartodr.in/login" className="text-sm hover:text-blue-700">SMART ODR PORTAL</a>
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
