import React from "react";
import Link from "next/link";

import ThemeToggler from "./ThemeToggle";

const TopNav = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 bg-[var(--dark-bg-contrast)]">
      {/* NAVBAR COMPONENT
      ========================================================================================= */}
      <nav className="h-[80px] m-auto flex justify-start items-center p-2 text-white font-bold">
        {/* lg:flex nav topic buttons */}
        <ul className="hidden lg:flex">
          <li className="p-4">
            <ThemeToggler />
          </li>
          <li className="p-4 text-[1.2rem]">
            <Link href="/">
              <p>HF-Tracker</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;
