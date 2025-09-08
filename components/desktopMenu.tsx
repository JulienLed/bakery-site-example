import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

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

export function DesktopMenu() {
  return (
    <NavigationMenu className="justify-self-center">
      <NavigationMenuList className="flex gap-[5vw] py-2 px-2 backdrop-blur-xs rounded-2xl text-shadow-2xl font-bold">
        {menuItems.map((item: MenuItem) => {
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                className="text-base md:text-xl  animate-fade-right"
                asChild
              >
                <Link href={item.path}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
