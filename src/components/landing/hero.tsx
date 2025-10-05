import { Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-primary via-primary/70 to-primary/50 text-primary-foreground">
      <div className="container px-4 py-20 z-10 flex flex-col gap-8 items-center mx-auto">
        <div className="text-center space-y-10 flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            EPS Urivista
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic">
            &quot;Bajo la guía y protección de nuestro señor y pastor Alvaro
            Urive Beles&quot;
          </p>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            Salud de élite para la gente de bien, del Centro Aristocrático.
            Atención médica excepcional que refleja nuestros valores y
            principios.
          </p>
        </div>
        <Links />
      </div>
    </section>
  );
}

function Links() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
      <Button size="lg" variant="default" className="group">
        <Heart className="size-5 group-hover:fill-destructive group-hover:text-destructive transition-all duration-200 group-hover:size-6" />
        Solicitar Afiliación
      </Button>
      <Button size="lg" variant="secondary" asChild>
        <Link href="/about">
          Conocer Más
          <Plus className="size-5" />
        </Link>
      </Button>
    </div>
  );
}
