"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUp, MessageSquare } from "lucide-react";
import { Logo } from "./Logo";

const footerLinks = [
  {
    title: "Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Departments", href: "/departments" },
      { name: "Packages", href: "/packages" },
      { name: "Emergency", href: "/emergency" },
      { name: "About Us", href: "/about-us" },
      { name: "Feedback", href: "/feedback" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
  { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/" },
];

export function Footer() {
  return (
    <footer className="bg-[#08354d] text-white pt-12 pb-6 mt-16">
      <div className="ultramed-container">
        {/* Mission Statement */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed font-medium">
            Our mission is to improve the health and well-being of Nigerians and others whom we serve. We accomplish this by providing leadership and excellence in the interrelated areas of patient care, education and research.
          </p>
        </div>

        {/* Logo, Contact, Social */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10 gap-8 border-b border-white/20 pb-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo variant="white" />
            <address className="not-italic text-center md:text-left text-base">
              <p className="font-semibold">No 57, 4th Avenue, Gwarinpa Estate</p>
              <p>Abuja, Nigeria</p>
              <a href="tel:09090099775" className="block mt-2 text-primary font-bold hover:underline">
                09090099775
              </a>
            </address>
          </div>
          {/* Social Links */}
          <div className="flex space-x-3 mt-6 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} (opens in a new tab)`}
                className="rounded-full bg-white/10 hover:bg-primary/20 p-2 transition-colors text-white shadow-sm"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary-200 text-white/80">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-primary-200 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Back to Top and Feedback */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1 text-primary-200 hover:text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 bg-[#08354d] shadow-sm transition"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </button>
            <Link
              href="/feedback"
              className="flex items-center gap-1 text-primary-200 hover:text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 bg-[#08354d] shadow-sm transition hover:bg-primary/20"
            >
              <MessageSquare className="h-4 w-4" />
              Share Feedback
            </Link>
          </div>
        </div>
        <p className="text-xs text-white/60 text-center mt-4">
            &copy; {new Date().getFullYear()} UltraMed. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
