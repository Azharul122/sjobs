import { DropdownMenu, DropdownMenuTrigger } from "./dropdown-menu";
import Image from "next/image";

import icon from "@/assets/images/manicon.png";

export default function TopNav() {
  return (
    <nav className="px-3 sm:px-6 flex items-center justify-end bg-[#004A75] h-full py-5">
      <div className="flex items-center gap-3.5 ml-auto lg:ml-0 ">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="flex items-center gap-2">
              <Image
                src={icon}
                alt="User avatar"
                width={28}
                height={28}
                className="rounded-full ring-2 ring-gray-200 sm:w-9 sm:h-9 cursor-pointer"
              />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </nav>
  );
}
