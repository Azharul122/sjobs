"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";
import { usePathname } from "next/navigation";

// Define the menu structure
type MenuItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  menuItems?: MenuItem[];
  loginText?: string;
  loginHref?: string;
};

const Navbar = ({
  menuItems = [
    { label: "Home", href: "/" },
    { label: "Find Candidates", href: "/find-candidates" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  loginText = "Login/ Post a job",
  loginHref = "/auth/login",
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-border px-4 py-4 lg:px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}

        <Logo />
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/" ? path === "/" : path.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium hover:text-primary/80 ${
                  isActive ? "text-primary" : "text-textBlack1"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Login/Post Button */}
        <Link
          href={loginHref}
          className="hidden lg:block bg-primary text-white font-medium px-5 py-2 rounded hover:bg-primary-hover transition-colors"
        >
          {loginText}
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 0 }}
        transition={{ type: "tween", duration: 0.2 }}
        className={`fixed top-0 left-0 w-full lg:hidden h-screen bg-black/20 z-40 flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0 block" : "-translate-x-full hidden "
        }`}
        onClick={toggleMenu}
      ></motion.div>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.2 }}
        className="fixed top-0 right-0 h-full w-64 lg:hidden bg-white z-50 border-l border-border shadow-lg flex flex-col p-4 space-y-2"
      >
        <div className="flex items-center justify-between gap-2 mb-4">
          <div onClick={toggleMenu} className="cursor-pointer">
            <Logo />
          </div>
          <button className="self-center text-gray-700" onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-900 font-medium hover:text-blue-700 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={loginHref}
          className="bg-primary cursor-pointer text-white font-medium px-5 py-2 rounded text-center hover:bg-primary-hover transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {loginText}
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
