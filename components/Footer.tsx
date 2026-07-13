import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              Get Migration & Study
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Your trusted partner for Study Visas, Visit Visas,
              Work Visas, Immigration Consultancy and
              Schengen Group Tours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-green-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-green-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/countries" className="hover:text-green-400">
                  Countries
                </Link>
              </li>

              <li>
                <Link
                  href="/schengen-group-tour"
                  className="hover:text-green-400"
                >
                  Schengen Tour
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Study Visa</li>
              <li>Visit Visa</li>
              <li>Work Visa</li>
              <li>Immigration Consultancy</li>
              <li>Schengen Group Tour</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1" />

                <a
                  href="tel:+923008382774"
                  className="hover:text-green-400"
                >
                  +92 300 8382774
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1" />

                <a
                  href="mailto:getmigrationstudy@gmail.com"
                  className="break-all hover:text-green-400"
                >
                  getmigrationstudy@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />

                <span>
                  Office #2, 12th Floor
                  <br />
                  First Capital Tower
                  <br />
                  Gulberg III
                  <br />
                  Lahore, Pakistan
                </span>
              </div>

            </div>

            <div className="mt-6 flex gap-4 text-2xl">

              <a href="#" className="hover:text-green-400">
                <FaFacebookF />
              </a>

              <a href="#" className="hover:text-green-400">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-green-400">
                <FaLinkedinIn />
              </a>

            </div>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Get Migration & Study. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}