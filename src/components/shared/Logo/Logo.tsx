import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoSrc from "@/assets/icons/logo.png"; // Adjust the path as necessary

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-10 w-36">
        <Image
          src={LogoSrc}
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
