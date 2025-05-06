"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, User, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "./Logo";
import { SheetClose } from "@/components/ui/sheet";

const mainNavItems = [
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Departments",
    href: "/departments",
  },
  {
    title: "Packages",
    href: "/packages",
  },
  {
    title: "Emergency",
    href: "/emergency",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#f4f9f9]"
      }`}
    >
      <div className="ultramed-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center flex-1 min-w-0">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex ml-6">
              <NavigationMenu>
                <NavigationMenuList className="gap-2 bg-transparent shadow-none p-0">
                  {mainNavItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 flex items-center px-4 text-sm font-medium bg-transparent shadow-none hover:bg-primary/10 hover:text-primary transition-colors rounded-lg">
                        {item.title}
                        </NavigationMenuLink>
                                </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
          {/* Schedule Care CTA - always far right */}
                <Link
            href="/schedule-care"
            className="hidden lg:inline-flex ml-auto bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition text-sm"
                >
            Schedule Care
                </Link>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <button aria-label="Menu" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex justify-start py-4">
                  <Logo size="small" />
                </div>
                <nav className="flex flex-col gap-4 mt-4">
                  {mainNavItems.map((item) => (
                    <div key={item.title} className="flex flex-col">
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="text-lg font-medium mb-2 hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    </div>
                  ))}
                {/* Mobile Schedule Care CTA */}
                    <SheetClose asChild>
                      <Link
                        href="/schedule-care"
                        className="mt-4 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-primary/90 transition text-center text-lg"
                      >
                        Schedule Care
                      </Link>
                    </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
