"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const currentRoute = usePathname();
  return (
    <nav>
      <li>
        <Link
          className={currentRoute === "/" ? "active-link" : "pending-link"}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={currentRoute === "/about" ? "active-link" : "pending-link"}
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={
            currentRoute === "/profile" ? "active-link" : "pending-link"
          }
          href="/profile"
        >
          Profile
        </Link>
      </li>
      <li>
        <Link
          className={
            currentRoute === "/apple/mack" ? "active-link" : "pending-link"
          }
          href="/apple/mack"
        >
          Mack
        </Link>
      </li>
      <li></li>
    </nav>
  );
};

export default NavMenu;
