/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Settings, LogOut, Menu } from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { logoutHandler } from "@/utils/handleLogout";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import Logo from "@/assets/images/Dashboard/image 78.png";
import { TiMessage } from "react-icons/ti";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiStackLine } from "react-icons/ri";

export default function SidebarCompany() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a menu item is active
  const isActive = (href: string) => pathname === href;

  function NavItem({
    href = "#",
    icon: Icon,
    children,
  }: {
    href?: string;
    icon?: React.ComponentType<any>;
    children: React.ReactNode;
  }) {
    return (
      <Link
        href={href}
        className={`flex items-center px-3 py-2 text-sm md:text-base rounded-sm transition-colors 
        ${isActive(href) ? "text-[#4A4A4A] bg-white" : "text-white"} 
        hover:text-gray-900 hover:bg-gray-100`}
      >
        {Icon && <Icon className="h-5 w-5 mr-3 flex-shrink-0" />}
        {children}
      </Link>
    );
  }

  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutHandler(dispatch, router);
    window.dispatchEvent(new Event("logout"));
  };

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-white shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </button>
      <nav
        className={`fixed inset-y-0 left-0 z-[70] w-64 bg-[#004A75] transform transition-transform duration-200 ease-in-out
                lg:translate-x-0 lg:static lg:w-64 
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full flex flex-col">
          <Link
            href="/"
            rel="noopener noreferrer"
            className="h-16 flex items-center justify-center pt-20 pb-14"
          >
            <div className="flex items-center justify-center ">
              <Image
                src={Logo}
                alt="Logo"
                width={Logo.width}
                height={Logo.height}
                className="w-52 flex-shrink-0"
              />
            </div>
          </Link>
          <div className="border opacity-90"></div>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-6">
              <div>
                <div className="space-y-1">
                  <NavItem href="/overview-employe" icon={RiStackLine}>
                    Overview
                  </NavItem>
                  <NavItem href="/message" icon={TiMessage}>
                    Message
                  </NavItem>
                  <NavItem href="/add-job-details" icon={IoMdAddCircleOutline}>
                    Add Job
                  </NavItem>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-200">
            <div className="space-y-1">
              <NavItem href="/change-password" icon={Settings}>
                Settings
              </NavItem>
              <NavItem>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center hover:text-gray-900"
                >
                  <LogOut size={35} className="h-5 w-5 mr-3" />
                  <span className="text-sm md:text-base text-white hover:text-gray-900">
                    Logout
                  </span>
                </button>
              </NavItem>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
