"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Data = {
  subject: string[];
  name: string;
  surname: string;
  email: string;
  message: string;
};

export default function Page() {
  const [formData, setFormData] = useState<Data>({
    subject: ["", "", ""],
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      subject: ["Message de : ", formData.name, formData.surname],
    };
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataToSend }),
      });
      alert(
        `Message envoyé au serveur: Nom: ${formData.name}, Prénom: ${formData.surname}, Mail: ${formData.email}, Message: ${formData.message}`
      );
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <Card className="w-[80vw] md:w-[60vw] px-2 md:px-5 shadow-2xl animate-fade-right">
      <CardHeader>
        <CardTitle>Nous contacter</CardTitle>

        <CardDescription>
          Vous pouvez nous contacter par{" "}
          <a className="font-bold" href="href=tel:+3210865566">
            téléphone
          </a>
          , par{" "}
          <a className="font-bold" href="mailto:info@boulangeriewavre.be">
            email
          </a>{" "}
          ou via notre formulaire de contact ci-dessous :
        </CardDescription>
      </CardHeader>
      <Card>
        <CardHeader>
          <CardTitle>Formulaire de contact :</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={onSubmit}
            className="flex flex-col md:grid md:grid-cols-2 gap-5"
          >
            <Label htmlFor="name" className="flex flex-col items-start">
              Nom:
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                type="text"
                placeholder="Votre nom"
                required
              />
            </Label>
            <Label htmlFor="surname" className="flex flex-col items-start">
              Prénom:
              <Input
                id="surname"
                value={formData.surname}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, surname: e.target.value }))
                }
                type="text"
                placeholder="Votre prénom"
                required
              />
            </Label>
            <Label htmlFor="email" className="flex flex-col items-start">
              Mail:
              <Input
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                placeholder="Votre email"
                required
              />
            </Label>
            <Label htmlFor="message" className="flex flex-col items-start">
              Votre message:
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Votre message"
                required
              />
            </Label>
            <Button type="submit" className="md:col-span-2">
              Envoyer
            </Button>
          </form>
        </CardContent>
      </Card>
    </Card>
  );
}
