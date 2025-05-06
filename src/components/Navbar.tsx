"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Departments", href: "/departments" },
  { name: "Packages", href: "/packages" },
  { name: "Emergency", href: "/emergency" },
  { name: "About Us", href: "/about-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ultramed-container">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              UltraMed
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                    layoutId="underline"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
} 