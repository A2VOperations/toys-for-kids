"use client";

import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ cartCount = 0, onCartClick }) {
  return (
    <>
      <div className="flex flex-col gap-1 bg-[#2d2d2d] px-5 py-1.5 text-center text-xs text-[#ccc] sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <span>?? 91 2345 678 | Mon-Sat: 10am - 9pm</span>
        <span>Free shipping on orders over $50! ??</span>
        <span>Sign in | Register</span>
      </div>

      <nav className="sticky top-0 z-[999] border-b border-[#f0f0f0] bg-white px-5 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="flex items-center gap-1 text-[28px] font-black tracking-[-0.06em] lg:justify-self-start">
            <span className="text-[#E84393]">KIDD</span>
            <span className="text-[#FFB800]">EX</span>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#444] lg:gap-6 lg:justify-self-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="cursor-pointer text-[#444] transition-colors duration-200 hover:text-[#E84393]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block" />
        </div>
      </nav>
    </>
  );
}
