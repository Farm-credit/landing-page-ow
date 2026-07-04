"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About us",
      href: "/about-us",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact us",
      href: "/contact-us",
    },
  ];
  return (
    <div>
      {/* DESKTOP NAVBAR  */}
      <div className="bg-[#334b35] py-4 px-6 md:px-8 lg:px-30 font-sans md:flex justify-between items-center hidden">
        <p className="text-4xl text-[#ff972b] font-extrabold pl-6">
          Farm<span className="text-[#89aa18]">Credit</span>
        </p>
        <div className="flex items-center gap-6 ">
          {navLinks.map((nav) => {
            const isActive = pathname === nav.href;
            return (
              <li key={nav.label} className="list-none">
                <Link
                  className={`capitalize text-white ${isActive ? `border-b-[#d0c27d] font-semibold` : `border-b-transparent hover:border-b-[#d0c27d] font-light`} border-b-2 transition-all pb-1`}
                  href={nav.href}
                >
                  {nav.label}
                </Link>
              </li>
            );
          })}
          <button className="bg-[#ff972b] p-3 rounded-lg text-black uppercase font-light text-xs hover:bg-transparent border border-transparent hover:border-[#ff972b] cursor-pointer hover:text-white">
            Get Started
          </button>
        </div>
      </div>
      {/* MOBILE NAVBAR  */}
      <div className="relative">
        <div className="md:hidden flex justify-between w-full items-center p-6 bg-[#334b35]">
          <p className="text-3xl text-[#ff972b] font-extrabold">
            Farm<span className="text-[#89aa18]">Credit</span>
          </p>
          <div
            className="relative w-6 h-6 cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          >
            <Menu
              className={`absolute transition-all duration-300 ${
                openNav
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
              size={24}
              color="white"
              strokeWidth={3}
            />

            <X
              className={`absolute transition-all duration-300 ${
                openNav
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              }`}
              size={24}
              color="white"
              strokeWidth={3}
            />
          </div>
        </div>
        {openNav && (
          <div className="bg-white py-4 px-30 font-sans  justify-between items-center md:hidden min-h-screen fixed min-w-full">
            <div className="flex flex-col items-center gap-6 pt-6">
              {navLinks.map((nav) => {
                const isActive = pathname === nav.href;
                return (
                  <li key={nav.label} className="list-none">
                    <Link
                      className={`capitalize text-black ${isActive ? `border-b-[#d0c27d] font-semibold` : `border-b-transparent hover:border-b-[#d0c27d] font-light`} border-b-2 transition-all pb-1 text-lg`}
                      href={nav.href}
                      onClick={() => setOpenNav(false)}
                    >
                      {nav.label}
                    </Link>
                  </li>
                );
              })}
               <button className="bg-[#ff972b] p-3 rounded-lg text-black uppercase font-light text-xs hover:bg-transparent border border-transparent hover:border-[#ff972b] cursor-pointer hover:text-white px-6 text-nowrap">
            Get Started
          </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
