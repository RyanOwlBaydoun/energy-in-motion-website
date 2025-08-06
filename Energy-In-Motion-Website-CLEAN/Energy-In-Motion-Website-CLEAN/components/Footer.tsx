import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002B2F] text-white rounded-3xl mx-6 mb-6">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Side - Brand Tagline */}
          <div className="lg:col-span-1">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
                We Develop & Create
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#E36B6B] leading-tight">
                Successful Future
              </h2>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address */}
              <div>
                <h3 className="text-base font-semibold mb-3 text-white">
                  Address
                </h3>
                <div className="space-y-1 text-gray-300 text-sm">
                  <p>Germany-785 15th Street, Office 478</p>
                  <p>Berlin, De 81566</p>
                </div>
              </div>

              {/* Say Hello */}
              <div>
                <h3 className="text-base font-semibold mb-3 text-white">
                  Say Hello
                </h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <a
                      href="mailto:info@domain.com"
                      className="text-gray-300 hover:text-[#E36B6B] transition-colors duration-200"
                      aria-label="Send email to info@domain.com"
                    >
                      info@domain.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+18408412256"
                      className="text-gray-300 hover:text-[#E36B6B] transition-colors duration-200"
                      aria-label="Call +1 840 841 256"
                    >
                      +1 840 841 256
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Follow us on Pinterest"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E36B6B] transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-white group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.740-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Follow us on X (Twitter)"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E36B6B] transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-white group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Follow us on Facebook"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E36B6B] transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-white group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Follow us on Instagram"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E36B6B] transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 text-white group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Navigation and Copyright */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-start space-x-6 text-gray-300 text-sm">
              <Link
                href="/"
                className="hover:text-[#E36B6B] transition-colors duration-200"
                aria-label="Go to Home page"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-[#E36B6B] transition-colors duration-200"
                aria-label="Go to About Us page"
              >
                About Us
              </Link>
              <Link
                href="/coaching"
                className="hover:text-[#E36B6B] transition-colors duration-200"
                aria-label="Go to Coaching page"
              >
                Coaching
              </Link>
              <Link
                href="/training"
                className="hover:text-[#E36B6B] transition-colors duration-200"
                aria-label="Go to Training page"
              >
                Training
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#E36B6B] transition-colors duration-200"
                aria-label="Go to Contact us page"
              >
                Contact us
              </Link>
            </nav>

            {/* Copyright */}
            <p className="text-gray-400 text-xs">
              Copyright © {currentYear} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
