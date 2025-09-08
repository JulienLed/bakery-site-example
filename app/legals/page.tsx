import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Legals() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[60vw] px-5">
        <CardHeader>
          <CardTitle>Politique de confidentialité</CardTitle>
          <CardDescription>
            Chez Boulangerie de Wavre SPRL, nous respectons votre vie privée et
            nous nous engageons à protéger les informations personnelles que
            vous nous communiquez via notre site internet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Nous collectons uniquement les informations que vous nous fournissez
            volontairement via notre formulaire de contact, telles que votre
            nom, adresse email et message. Ces informations sont utilisées
            uniquement pour répondre à vos demandes ou questions et, si vous le
            demandez explicitement, pour vous envoyer des informations
            concernant nos produits ou services. Nous ne partageons jamais vos
            données avec des tiers à des fins commerciales. Vos informations
            sont conservées le temps nécessaire pour traiter votre demande et
            peuvent être supprimées sur simple demande à l’adresse{" "}
            <a href="mailto:info@boulangeriewavre.be">
              info@boulangeriewavre.be
            </a>{" "}
            . Notre site n’utilise pas de cookies de suivi et nous mettons en
            place des mesures techniques et organisationnelles pour protéger vos
            données contre tout accès non autorisé ou divulgation. Vous pouvez à
            tout moment demander l’accès, la correction ou la suppression de vos
            données en nous contactant à{" "}
            <a href="mailto:info@boulangeriewavre.be">
              info@boulangeriewavre.be
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
