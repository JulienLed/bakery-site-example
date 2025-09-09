import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sacramento } from "../layout";
import { TbBaguette } from "react-icons/tb";
import { GiSlicedBread } from "react-icons/gi";
import { GiBreadSlice } from "react-icons/gi";
import { LuCroissant } from "react-icons/lu";
import { GiChocolateBar } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { GiStrawberry } from "react-icons/gi";
import { TbBrandCakephp } from "react-icons/tb";

const menu = [
  {
    title: "Nos Pains",
    description:
      "Nos pains sont pétris chaque matin avec des farines sélectionnées et cuits dans un four à sole traditionnel. Croustillants à l'extérieur, moelleux à l'intérieur, ils accompagnent vos repas avec authenticité.",
    items: [
      {
        nom: "Baguette tradition",
        description: "Pain croustillant au levain",
        prix: "1,30€",
        icon: <TbBaguette />,
      },
      {
        nom: "Pain complet",
        description: "Farine complète bio",
        prix: "2,50€",
        icon: <GiSlicedBread />,
      },
      {
        nom: "Pain multicéréales",
        description: "Mélange de graines et farines",
        prix: "2,80€",
        icon: <GiBreadSlice />,
      },
    ],
  },
  {
    title: "Nos Viennoiseries",
    description:
      "Le parfum du beurre frais qui s'échappe du four, voilà ce qui vous accueille chaque matin. Nos viennoiseries sont feuilletées avec patience, dorées à la perfection et fondantes en bouche.",
    items: [
      {
        nom: "Croissant au beurre",
        description: "Pur beurre AOP",
        prix: "1,20€",
        icon: <LuCroissant />,
      },
      {
        nom: "Pain au chocolat",
        description: "Chocolat belge fondant",
        prix: "1,50€",
        icon: <GiChocolateBar />,
      },
      {
        nom: "Chausson aux pommes",
        description: "Pommes sucrées et fondantes",
        prix: "1,80€",
        icon: <FaAppleAlt />,
      },
    ],
  },
  {
    title: "Nos Pâtisseries",
    description:
      "De véritables petites œuvres d'art sucrées, préparées avec finesse et créativité. Chaque pâtisserie allie tradition française et gourmandise moderne, pour finir un repas en beauté ou simplement se faire plaisir.",
    items: [
      {
        nom: "Éclair au chocolat",
        description: "Crème chocolat intense",
        prix: "2,50€",
        icon: <FaBoltLightning />,
      },
      {
        nom: "Tartelette aux fraises",
        description: "Crème vanille et fraises fraîches",
        prix: "3,50€",
        icon: <GiStrawberry />,
      },
      {
        nom: "Mille-feuille",
        description: "Feuilletage et crème pâtissière",
        prix: "3,00€",
        icon: <TbBrandCakephp />,
      },
    ],
  },
];

export default function Page() {
  return (
    <Card className="w-[90vw] md:w-[60vw] px-1 md:px-5 shadow-2xl animate-fade-right">
      <CardHeader>
        <CardTitle
          className={`${sacramento.className} text-[3rem] lg:text-[4rem] text-center md:text-left`}
        >
          Nos Produits
        </CardTitle>
      </CardHeader>

      {menu.map((item) => {
        return (
          <CardContent key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            {item.items.map((product) => {
              return (
                <CardContent key={product.nom}>
                  <CardHeader>
                    <CardTitle className="mt-5 flex items-center gap-2">
                      {product.icon} {product.nom}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex justify-between">
                        <section>{product.description}</section>
                        <section>{product.prix}</section>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </CardContent>
              );
            })}
          </CardContent>
        );
      })}
    </Card>
  );
}
