"use client";

import React, { useState } from "react";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

// Inside src/app/layout.tsx, update the navLinks array:

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Robotics", href: "/robotics" },
    { name: "Code", href: "/code" },
    { name: "Life", href: "/life" },
    { name: "Contact", href: "/contact" }, // Added 5th page
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <html lang="en">
      <body className="bg-[#000814] text-zinc-300 antialiased font-sans overflow-x-hidden">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-[#000814]/80 backdrop-blur-md">
          <div className="w-full px-6 h-16 flex items-center justify-between">
            {/* Extreme Left Name */}
            <div className="text-blue-500 font-mono text-sm font-bold tracking-widest uppercase">
              Ranveer Singh Virdi
            </div>

            {/* Hamburger Icon */}
            <button 
              onClick={toggleMenu}
              className="p-2 text-zinc-400 hover:text-blue-500 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Right Side Drawer */}
        <div 
          className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={toggleMenu} 
          />
          
          {/* Drawer Panel */}
          <div 
            className={`absolute right-0 top-0 h-full w-72 bg-[#000814] border-l border-zinc-800 p-8 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Navigation_Ports</span>
              <button onClick={toggleMenu} className="text-zinc-500 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`font-mono text-sm uppercase tracking-[0.3em] transition-all flex items-center gap-3 ${
                    pathname === link.href 
                      ? "text-blue-500 font-bold translate-x-2" 
                      : "text-zinc-500 hover:text-zinc-300 hover:translate-x-2"
                  }`}
                >
                  <Terminal size={14} className={pathname === link.href ? "opacity-100" : "opacity-0"} />
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="h-[1px] w-full bg-zinc-900 mb-4" />
              <div className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
                System_v1.0 // IITD_EE
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="pt-16 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}