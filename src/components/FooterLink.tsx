import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Link
    href={href}
    className="text-white/70 hover:text-white transition-colors duration-200 text-sm leading-relaxed"
  >
    {children}
  </Link>
);
