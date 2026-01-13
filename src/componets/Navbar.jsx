"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Globe, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Experiences", href: "/experiences" },
    { name: "Offers", href: "/offers" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Top Bar (Optional - for extra premium feel, usually visible on desktop) */}
      <div
        className={`hidden lg:block border-b border-white/10 ${
          scrolled ? "hidden" : "block"
        }`}
      >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-xs tracking-widest text-white/80">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
              <Phone size={12} /> +1 (888) 123-4567
            </span>
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
              RESERVATIONS@LUXESTAY.COM
            </span>
          </div>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white transition-colors">
              EN
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              LOGIN
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span
              className={`text-2xl font-serif tracking-[0.2em] font-bold ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              LUXE<span className="text-amber-500">STAY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-amber-500 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              className={`transition-colors ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              <Search size={20} />
            </button>
            <Link
              href="/book"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${
                isOpen
                  ? "text-slate-900"
                  : scrolled
                  ? "text-slate-900"
                  : "text-white"
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-slate-900 hover:text-amber-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="mt-8 bg-amber-600 text-white px-10 py-4 text-sm uppercase tracking-widest font-bold"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
