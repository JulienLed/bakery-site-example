import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Sacramento } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Boulangerie Wavre",
  description: "Site de la boulangerie de Wavre",
};

export const nunito = Nunito({
  subsets: ["latin"],
});

export const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} min-h-screen flex flex-col bg-[url("/bg.webp")]`}
      >
        <div className="fixed inset-0 bg-white/40 pointer-events-none"></div>
        <Header />
        <main className="flex justify-center items-center flex-1 my-10 mx-[10vw]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
