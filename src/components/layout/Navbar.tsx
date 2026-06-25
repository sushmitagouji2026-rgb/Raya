"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Construction", path: "/construction" },
    { name: "Interior Design", path: "/interior" },
    { name: "Real Estate", path: "/real-estate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-4 glass border-b border-white/5 shadow-lg" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img 
            src="/RAYA-GROUPS-02.png" 
            alt="Raya Groups Logo" 
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#FF6B00] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#FF6B00] text-white text-sm font-semibold tracking-wider hover:bg-[#FF6B00]/90 glow-orange transition-all rounded-md"
          >
            GET QUOTE
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Sidebar Overlay */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Nav Sidebar */}
      <div
        className={cn(
          "md:hidden fixed top-0 right-0 h-full w-[280px] bg-[#0A0A0A]/95 backdrop-blur-md border-l border-white/10 z-50 transition-transform duration-300 transform flex flex-col pt-8 px-6 shadow-2xl",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-12">
          <img 
            src="/RAYA-GROUPS-02.png" 
            alt="Raya Groups Logo" 
            className="h-8 w-auto object-contain" 
          />
          <button
            className="text-white hover:text-[#FF6B00] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col items-start gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base uppercase tracking-wider text-gray-300 hover:text-[#FF6B00] transition-colors w-full border-b border-white/5 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 px-6 py-3 bg-[#FF6B00] text-white text-sm font-semibold tracking-wider hover:bg-[#FF6B00]/90 glow-orange transition-all rounded-md w-full text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            GET QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}
