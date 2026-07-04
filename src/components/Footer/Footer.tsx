// components/Footer/Footer.jsx
import React from "react";

import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import FooterLink from "./FooterLink";
import SocialIcon from "./SocialIcon";

const resources: { label: string; href: string }[] = [
  { label: "Blog", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Documentation", href: "#" },
];

const aboutLinks: { label: string; href: string }[] = [
  { label: "Our Mission", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Team", href: "#" },
  { label: "Partners", href: "#" },
];

const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "Discord", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "Farcaster", href: "#" },
];

const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className=" bg-white min-h-screen">
       {/* rounded-t-[50px] md:rounded-tl-[180px] lg:rounded-tl-[150px] */}

        <div className="min-h-screen px-6 sm:px-30 pt-40 pb-10 bg-black text-white md:mt-20   rounded-tl-[25%] rounded-tr-[25%] md:rounded-tl-[40%] md:rounded-tr-[40%] lg:rounded-tl-[30%] lg:rounded-tr-[30%]">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-10">
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-[#F39200]">Farm</span>
              <span className="text-[#A3CF62]">Credit</span>
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-y-8 md:flex-row">
            {/* About */}
            <nav aria-label="About">
              <h3 className="font-semibold mb-4 text-xl">About</h3>
              <ul className="flex flex-col gap-y-6">
                {aboutLinks.map(({ label, href }) => (
                  <FooterLink key={label} href={href}>
                    {label}
                  </FooterLink>
                ))}
              </ul>
            </nav>

            {/* Resources */}
            <nav aria-label="Resources">
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="flex flex-col gap-y-6">
                {resources.map(({ label, href }) => (
                  <FooterLink key={label} href={href}>
                    {label}
                  </FooterLink>
                ))}
              </ul>
            </nav>

            {/* Community */}
            <div>
              <h3 className="font-semibold mb-4">Community</h3>

              <div className="flex flex-col gap-y-6">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <SocialIcon key={label} href={href} label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map((label) => (
              <ul className="flex items-center justify-center gap-5" key={label.label}>
                <FooterLink key={label.label} href={label.href}>
                  {label.label}
                </FooterLink>
                <span className="text-xl">|</span>
              </ul>
            ))}
          </div>

          <p>© {new Date().getFullYear()} Boveda</p>
        </div>
      </div>
   
    </footer>
  );
}
