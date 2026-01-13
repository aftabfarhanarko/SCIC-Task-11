"use client";
import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AuthButtons from "./AuthButtons/AuthButtons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Accommodations", href: "/room" },
    { name: "Dining", href: "/feedback" },
    { name: "Experiences", href: "/experiences" },
    { name: "Special Offers", href: "/offers" },
  ];

  return (
    <>
      {/* Announcement Bar */}

      {/* Main Navbar */}
      <header className="fixed w-full z-50 bg-slate-900 py-5 transition-all duration-300">
        {/* Top Contact Bar - Desktop Only */}
        <div className="hidden lg:block border-b border-white/10">
          <div className="container mx-auto px-8 py-3 flex justify-between items-center">
            <div className="flex gap-8 text-xs tracking-wider text-white/70">
              <a
                href="tel:+18881234567"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300"
              >
                <Phone size={14} />
                <span>01613410880</span>
              </a>
              <a
                href="mailto:reservations@luxestay.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300"
              >
                <Mail size={14} />
                <span>RESERVATIONS@LUXESTAY.COM</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                <span>MIAMI BEACH, FLORIDA</span>
              </span>
            </div>
            <div className="flex gap-6 text-xs tracking-wider">
              <button className="text-white/70 hover:text-amber-400 transition-colors duration-300">
                EN
              </button>
              <span className="text-white/30">|</span>
              <button className="text-white/70 hover:text-amber-400 transition-colors duration-300">
                USD
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50 group">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-white tracking-[0.3em] font-light">
                  LUXE
                  <span className="text-amber-400 font-normal">STAY</span>
                </span>
                <span className="text-[9px] tracking-[0.4em] text-white/60 mt-1 group-hover:text-amber-400 transition-colors duration-300">
                  LUXURY RESORT & SPA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-medium text-white/90 hover:text-white transition-all duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]"></span>
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <AuthButtons />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white focus:outline-none"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${
                    isOpen
                      ? "top-1/2 rotate-45 transform -translate-y-1/2"
                      : "top-0"
                  }`}
                ></span>
                <span
                  className={`absolute w-full h-0.5 bg-white top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${
                    isOpen
                      ? "top-1/2 -rotate-45 transform -translate-y-1/2"
                      : "bottom-0"
                  }`}
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/98 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center transition-all duration-500 delay-100 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Mobile Logo */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <span className="text-2xl font-serif text-white tracking-[0.3em] font-light">
              LUXE<span className="text-amber-400">STAY</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-6 mb-12">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-xl font-light tracking-[0.2em] hover:text-amber-400 transition-all duration-300 transform hover:scale-105"
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div className="flex flex-col items-center gap-4 mb-8 text-white/70 text-sm">
            <a
              href="tel:+18881234567"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone size={16} />
              <span>+1 (888) 123-4567</span>
            </a>
            <a
              href="mailto:reservations@luxestay.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail size={16} />
              <span>RESERVATIONS@LUXESTAY.COM</span>
            </a>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-xs px-6">
            <a
              href="/login"
              onClick={() => setIsOpen(false)}
              className="border border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all duration-300"
            >
              Sign In
            </a>
            <a
              href="/book"
              onClick={() => setIsOpen(false)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all duration-300"
            >
              Reserve Your Stay
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
