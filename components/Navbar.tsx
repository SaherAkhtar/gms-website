"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (href: string) =>
    pathname === href
      ? "text-green-600 font-semibold"
      : "hover:text-green-600 transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/gms-logo-new.png"
            alt="GMS Logo"
            width={60}
            height={60}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-green-700">
              Get Migration & Study
            </h1>

            <p className="text-xs text-gray-500">
              Your Dreams, Our Guidance, Your Future
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 font-medium md:flex">
          <Link href="/" className={navLink("/")}>
            Home
          </Link>

          <Link href="/about" className={navLink("/about")}>
            About
          </Link>

          <Link href="/services" className={navLink("/services")}>
            Services
          </Link>

          <Link href="/countries" className={navLink("/countries")}>
            Countries
          </Link>

          <Link
            href="/schengen-group-tour"
            className={navLink("/schengen-group-tour")}
          >
            Schengen Tour
          </Link>

          <Link href="/contact" className={navLink("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-green-600 px-5 py-2 text-white transition hover:bg-green-700 md:block"
        >
          Free Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white shadow-md md:hidden">
          <nav className="flex flex-col p-6">

            <Link
              href="/"
              className={`${navLink("/")} py-3`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`${navLink("/about")} py-3`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`${navLink("/services")} py-3`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/countries"
              className={`${navLink("/countries")} py-3`}
              onClick={() => setMenuOpen(false)}
            >
              Countries
            </Link>

            <Link
              href="/schengen-group-tour"
              className={`${navLink("/schengen-group-tour")} py-3`}
              onClick={() => setMenuOpen(false)}
            >
              Schengen Tour
            </Link>

            <Link
              href="/contact"
              className={`${navLink("/contact")} py-3`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Free Consultation
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}