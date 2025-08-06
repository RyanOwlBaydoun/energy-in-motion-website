"use client";

import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

const FooterSection = () => {
  const socialIcons = [
    { icon: MapPin, href: "#", label: "Pinterest" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact us", href: "#" },
  ];

  return (
    <footer className="bg-[#002B27] text-white pt-16 pb-8 px-6 rounded-t-[32px] mt-[-4px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left Block - CTA Headline */}
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              We Develop & Create
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF6B57] leading-tight">
              Successful Future
            </h2>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white text-xl hover:text-[#FF6B57] transition-colors duration-200"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Block - Address */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Address</h3>
            <div className="text-[14px] text-white/90 leading-6">
              <p>Germany-785 15th Street, Office 478</p>
              <p>Berlin, De 81566</p>
            </div>
          </div>

          {/* Right Block - Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Say Hello</h3>
            <div className="text-[14px] text-white/90 leading-6">
              <p>info@domain.com</p>
              <p>+1 840 841 256</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <div className="text-white/90">
              Copyright © 2024 All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
