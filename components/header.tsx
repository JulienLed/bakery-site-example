"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { DesktopMenu } from "./desktopMenu";
import { MobileMenu } from "./mobileMenu";
import { useWidthScreen } from "./hooks/windowWidth";

export function Header() {
  const windowWidth = useWidthScreen();

  return (
    <div className="grid grid-cols-3">
      <Link href={"/"}>
        <Image
          alt="Logo Boulangerie"
          className="w-20 sm:w-30 md:w-35 lg:w-50 justify-self-center hover:scale-105 active:scale-95 active:transition-all active:duration-200 animate-jump-in delay-500"
          src={logo}
          width={500}
          height={395}
        ></Image>
      </Link>

      {windowWidth > 640 ? (
        <DesktopMenu />
      ) : (
        <div className="flex justify-center">
          <MobileMenu />
        </div>
      )}
    </div>
  );
}
