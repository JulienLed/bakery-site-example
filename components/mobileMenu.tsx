"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

type MenuItem = {
  title: string;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "Produits",
    path: "/produits",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <IoMenu size={40} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItems.map((item) => {
          return (
            <DropdownMenuItem key={item.title}>
              <Link href={item.path} onClick={handleClick}>
                {item.title}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
