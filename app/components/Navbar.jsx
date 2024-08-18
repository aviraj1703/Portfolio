"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const navlink = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "#about",
      title: "About",
    },
    {
      href: "#projects",
      title: "Projects",
    },
    {
      href: "#contact",
      title: "Contact",
    },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-2 md:shadow-md">
        <div className="flex flex-wrap items-center justify-end md:justify-center mx-auto py-6 px-12">
          <div className="mobile-menu block md:hidden">
            {navOpen ? (
              <div className="flex items-end justify-around flex-col">
                <button
                  onClick={() => setNavOpen(!navOpen)}
                  className="flex items-center p-2 border rounded hover:border-[#808080] hover:text-[#808080] text-primary-300 border-primary-300"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="flex items-center p-2 border rounded hover:border-[#808080] hover:text-[#808080] text-primary-300 border-primary-300"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            )}
            <MenuOverlay navOpen={navOpen} links={navlink} />
          </div>
          <div className="menu hidden md:block md:w-auto" id="home">
            <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
              {navlink.map((link, index) => (
                <NavLink
                  key={index}
                  href={link.href}
                  title={link.title}
                  isSelected={selected === index}
                  onClick={() => setSelected(index)}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
