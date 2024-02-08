"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import ProfileMenu from "./ProfileMenu";

const navItems = [
  {
    path: "/auth",
    name: "Home",
  },
  {
    path: "/auth/my-flix",
    name: "My Flix",
  },
  {
    path: "/auth/friends",
    name: "Friends",
  },
  {
    path: "/auth/contact-us",
    name: "Contact Us",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/auth/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src={"/logos/logo-white-crop.png"}
            alt="Flix with Friends Logo"
            width={200}
            height={40}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Image
            src={"/logos/logo-white-crop.png"}
            alt="Flix with Friends Logo"
            width={200}
            height={40}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => {
          const isActive = item.path === pathname;

          return (
            <NavbarItem key={item.path}>
              <Link
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
                      bounce: 0.025,
                      stiffness: 200,
                      damping: 20,
                      duration: 0.1,
                    }}
                  />
                )}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <ProfileMenu />
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item) => {
          const isActive = item.path === pathname;

          return (
            <NavbarMenuItem key={item.path}>
              <Link
                className={`w-full px-2 py-1 md:px-4 md:py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                  isActive ? "text-zinc-100" : "text-zinc-200"
                }`}
                data-active={isActive}
                size="lg"
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
                onClick={() =>
                  setTimeout(() => {
                    setIsMenuOpen(false);
                  }, 500)
                }
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
                      bounce: 0.025,
                      stiffness: 200,
                      damping: 20,
                      duration: 0.1,
                    }}
                  />
                )}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
