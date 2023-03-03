import React from "react";
import Link from "next/link";
import Image from "next/image";

import ThemeToggler from "./ThemeToggle";

import {SiCplusplus, SiJavascript, SiPython, SiRust, SiTypescript} from "react-icons/si";

import { FaHome } from "react-icons/fa";

const TopNav = () => {
    return (
        <div className="fixed left-0 top-0 w-full z-10 bg-[black]">
      {/* NAVBAR COMPONENT
      ========================================================================================= */}
      <nav className="h-[80px] m-auto flex justify-start items-center p-2 text-white font-bold">
        {/* lg:flex nav topic buttons */}
        <ul className="hidden lg:flex">
          <li className="p-4">
            <ThemeToggler />
          </li>
          <li className="p-4">
            <Link href="/">
            <p>Home</p>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
            <p>About</p>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <p>Diet</p>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
            <p>Fitness</p>
            </Link>
          </li>
          
          
        </ul>

        {/* DRAWER COMPONENT
        ========================================================================================= */}
      </nav>
    </div>
    )
}

export default TopNav;