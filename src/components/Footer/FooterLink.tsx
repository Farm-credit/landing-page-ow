
import React from "react";
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}
export default function FooterLink({ href, children } : FooterLinkProps) {
  return (
    <li className=" ">
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors text-lg font-normal duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 "
      >
        {children}
      </a>
    </li>
  );
}