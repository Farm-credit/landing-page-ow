
import React from "react";

interface SocialIconProps {
  href: string;
  label: string;
}
export default function SocialIcon({ href, label,  } : SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-green-500 transition-colors duration-200 focus:outline-none text-lg focus-visible:ring-2 focus-visible:ring-green-500 rounded-full "
    >
 
      {label}
    </a>
  );
}