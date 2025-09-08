import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { sacramento } from "@/app/layout";
import { LuCroissant } from "react-icons/lu";

export function Presentation() {
  return (
    <Card className="shadow-2xl">
      <CardHeader>
        <CardTitle
          className={`${sacramento.className} text-[3rem] lg:text-[4rem] text-center md:text-left`}
        >
          Bienvenue à la Boulangerie de Wavre
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>
            Depuis notre ouverture, nous mettons tout notre savoir-faire au
            service de vos papilles. Chaque matin, nous préparons des pains,
            viennoiseries et pâtisseries avec des ingrédients de qualité,
            sélectionnés avec soin. Que vous veniez pour un croissant
            croustillant, une baguette traditionnelle ou une gourmandise sucrée,
            nous nous engageons à vous offrir fraîcheur et authenticité à chaque
            bouchée. Venez découvrir un lieu où passion, goût et convivialité se
            rencontrent, et laissez-vous séduire par nos créations maison,
            préparées avec amour pour notre belle communauté de Wavre.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 mt-5 text-center sm:text-left text-xl">
            <p>N'hésitez pas à nous rendre visite !</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rue+de+la+Baguette+12,+1300+Wavre,+Belgique"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-baseline gap-5"
            >
              <LuCroissant />
              Nous sommes situés à Rue de la Baguette 12, 1300 Wavre
              <LuCroissant />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
