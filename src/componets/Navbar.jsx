"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/room" },
    { name: "Dining", href: "/feedback" },
    { name: "Experiences", href: "/experiences" },
    { name: "Offers", href: "/offers" },
  ];

  return (
    <header className="fixed w-full z-50 py-5 text-white transition-all duration-300 bg-slate-900">
      {/* Top Bar */}
      <div className="hidden lg:block border-b border-white/10">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-xs tracking-widest text-white/80">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 text-white cursor-pointer transition-colors">
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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="text-2xl font-serif text-white tracking-[0.2em] font-bold">
              LUXE<span className="text-amber-500">STAY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest font-medium transition-colors hover:text-amber-500 text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="transition-colors text-white">
              <Search size={20} />
            </button>

            {/* Login Button */}
            <Link
              href="/login"
              className="text-white hover:text-amber-500 px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Login
            </Link>

            {/* Register Button */}
            <Link
              href="/register"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded"
            >
              Register
            </Link>

            {/* Book Now Button */}
            <Link
              href="/book"
              className="bg-white hover:bg-gray-100 text-slate-900 px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-colors text-white"
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

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-3 text-sm uppercase tracking-widest font-bold text-center transition-all"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-3 text-sm uppercase tracking-widest font-bold text-center transition-all"
            >
              Register
            </Link>
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="bg-slate-900 text-white px-10 py-4 text-sm uppercase tracking-widest font-bold text-center"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
