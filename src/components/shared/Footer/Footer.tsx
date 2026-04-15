import Link from "next/link";
import { Facebook, Linkedin, Instagram, Globe } from "lucide-react";
import logo from "@/assets/images/home/logo-footer.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Us Column - Full width on mobile, then takes appropriate space */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-4">
              <Image src={logo} alt="logo" className=" " />
              <h3 className="text-lg font-semibold mt-3">About us</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </p>
          </div>

          {/* Explore Column - Full width on mobile, then normal flow */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <nav className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                className="text-gray-600 text-sm hover:text-[#004D6E]"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-600 text-sm hover:text-[#004D6E]"
              >
                About Us
              </Link>
              <Link
                href="/find-work"
                className="text-gray-600 text-sm hover:text-[#004D6E]"
              >
                Find Work
              </Link>
              <Link
                href="/find-candidates"
                className="text-gray-600 text-sm hover:text-[#004D6E]"
              >
                Find Candidates
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 text-sm hover:text-[#004D6E]"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="text-gray-600 text-sm hover:text-[#004D6E]"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 text-sm hover:text-[#004D6E]"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Us and Social Media Columns - Now stacked on mobile */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">Call: +123 400 123</p>
                  <p className="text-gray-600 text-sm">
                    Praesent nulla massa, hendrerit vestibulum gravida in,
                    feugiat auctor felis.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Email: example@mail.com
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="md:text-end">
                <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                <div className="flex md:flex-col flex-row flex-wrap gap-2 md:items-end  mr-10">
                  <Link
                    href="#"
                    className="w-8 h-8 bg-[#004D6E] text-white flex items-center justify-center rounded"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-[#004D6E] text-white flex items-center justify-center rounded"
                    aria-label="Website"
                  >
                    <Globe size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-[#004D6E] text-white flex items-center justify-center rounded"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-[#004D6E] text-white flex items-center justify-center rounded"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-[#004D6E] text-white flex items-center justify-center rounded"
                    aria-label="Other"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 3h6m-3-3v3m-4 3h10v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6zm2 14a2 2 0 0 0 4 0v-5a2 2 0 0 0-4 0v5z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="text-center text-gray-500 text-sm">
            © 2024 LoGo - Job Portal. All rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
