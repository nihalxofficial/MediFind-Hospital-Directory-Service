"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Doctors", href: "/doctors" },
  { label: "Tests", href: "/tests" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Close mobile menu when route changes / link clicked
  const closeMenu = () => setIsOpen(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-2xl" : ""
      }`}
    >
      <div className="glass border-b border-white/20 shadow-lg shadow-emerald-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition" />
                <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-xl shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12h4l2-7 4 14 2-7h6"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                Medi
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Find
                </span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1 text-slate-700 font-semibold text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/book"
                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all btn-shine"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Book Appointment
              </Link>

              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/60 text-slate-700 hover:bg-white transition shadow-sm"
              >
                {isOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 space-y-1 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-[400px] py-4 opacity-100"
              : "max-h-0 py-0 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="block text-slate-700 font-semibold hover:bg-emerald-50 hover:text-emerald-700 px-4 py-3 rounded-xl transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={closeMenu}
            className="block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center font-bold px-5 py-3 rounded-xl mt-2 shadow-lg"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}