"use client";
import React, { useState, useEffect } from 'react'

const Navabr = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">TRUSTLINK</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-800 hover:text-gray-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors">About</a>
          <a href="#services" className="text-gray-800 hover:text-gray-600 transition-colors">Services</a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors">Contact</a>
        </div>
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-gray-800"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <a href="#home" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navabr