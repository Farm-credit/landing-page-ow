import Link from 'next/link';
import { FooterLink } from './FooterLink';

const navSections = [
  {
    heading: 'About',
    links: [
      { label: 'Our Mission', href: '#mission' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Team', href: '#team' },
      { label: 'Partners', href: '#partners' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Help Center', href: '#help' },
      { label: 'Documentation', href: '#docs' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Discord', href: '#discord' },
      { label: 'Twitter', href: '#twitter' },
      { label: 'Telegram', href: '#telegram' },
      { label: 'Farcaster', href: '#farcaster' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Cookie Policy', href: '#cookies' },
];

export const Footer = () => (
  <footer className="bg-black text-white pt-24 pb-10 px-6 sm:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto">
      {/* Main grid */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8 pb-16">
        {/* Logo */}
        <div className="flex items-start">
          <Link href="/" className="flex items-center space-x-1">
            <span className="text-3xl font-bold text-[#F9A15A]">Farm</span>
            <span className="text-3xl font-bold text-[#8EB021]">Credit</span>
          </Link>
        </div>

        {/* Nav columns */}
        {navSections.map((section) => (
          <nav key={section.heading} aria-label={section.heading}>
            <h3 className="text-white font-semibold text-base mb-6">{section.heading}</h3>
            <ul className="flex flex-col gap-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
          {legalLinks.map((link, idx) => (
            <span key={link.label} className="flex items-center gap-3">
              <Link href={link.href} className="hover:text-white transition-colors duration-200">
                {link.label}
              </Link>
              {idx < legalLinks.length - 1 && <span className="text-white/30">|</span>}
            </span>
          ))}
        </div>
        <p className="text-sm text-white/70">© Boveda 2025</p>
      </div>
    </div>
  </footer>
);
