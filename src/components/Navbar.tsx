'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1 group">
          <span className="text-2xl font-bold text-[#F9A15A] transition-colors group-hover:text-[#e89048]">
            Farm
          </span>
          <span className="text-2xl font-bold text-[#8EB021] transition-colors group-hover:text-[#7d9b1d]">
            Credit
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#F9A15A] ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${link.name === 'Home' ? 'border-b-2 border-[#F9A15A] pb-1' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#get-started"
            className="px-5 py-2 bg-[#F9A15A] text-white rounded-lg text-sm font-bold shadow-lg hover:bg-[#e89048] transition-all transform hover:scale-105"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-gray-900' : 'text-white'} p-2`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-gray-900 hover:text-[#F9A15A] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#get-started"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 bg-[#F9A15A] text-white rounded-lg font-bold shadow-lg hover:bg-[#e89048] transition-all"
          >
            GET STARTED
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-gray-900 p-2"
        >
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};
