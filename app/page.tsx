import { Caroussel } from "@/components/carrousel";
import { Presentation } from "@/components/presentation";

export default function Home() {
  return (
    <div className="flex flex-col items-center sm:items-start md:grid md:grid-cols-5 gap-20">
      <section id="caroussel" className="col-span-2 animate-fade-right">
        <Caroussel />
      </section>
      <section
        id="presentation"
        className="col-span-3 justify-self-start animate-fade-right"
      >
        <Presentation />
      </section>
    </div>
  );
}
