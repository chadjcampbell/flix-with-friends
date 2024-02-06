"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProfileMenu from "./ProfileMenu";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/my-flix",
    name: "My Flix",
  },
  {
    path: "/friends",
    name: "Friends",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/writing/")) {
    pathname = "/writing";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="p-4 mb-12 sticky top-0 z-[100] bg-black backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Link href="/" className="hidden md:block">
          <Image
            src={"/logos/icon.png"}
            alt="Flix with Friends Logo"
            width={40}
            height={40}
          />
        </Link>
        <nav className="flex gap-1 relative justify-center">
          {navItems.map((item) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={item.path}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                  isActive ? "text-zinc-100" : "text-zinc-200"
                }`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-indigo-700/80 rounded-md -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <ProfileMenu />
      </div>
    </div>
  );
}
