import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

export function Footer() {
  return (
    <Card className="w-full flex flex-col items-center md:grid md:grid-cols-[auto_1fr_auto] animate-flip-up">
      <CardContent>
        <Image
          alt="Logo Boulangerie"
          src={logo}
          width={500}
          height={395}
          className="w-20"
        />
      </CardContent>
      <CardContent className="justify-self-center flex items-end gap-1 text-xs md:text-2xs">
        <p>©La Boulangerie de Wavre sprl - </p>
        <Link href={"/legals"}>Politique de confidentialité</Link>
      </CardContent>
      <CardContent className="justify-self-center flex flex-col justify-end md:gap-1 text-xs md:text-2xs">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rue+de+la+Baguette+12,+1300+Wavre,+Belgique"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>La Boulangerie de Wavre</p>
          <p>Rue de la Baguette 12, 1300 Wavre</p>
        </a>
        <a href="mailto:info@boulangeriewavre.be">
          <p>info@boulangeriewavre.be</p>
        </a>
        <a href="tel:+3210865566">
          <p>010 86 55 66</p>
        </a>
        <p>TVA: BE0123.456.789</p>
      </CardContent>
    </Card>
  );
}
