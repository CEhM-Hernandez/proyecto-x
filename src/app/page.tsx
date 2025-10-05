import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Check } from "lucide-react";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />

      {/* Testimonial Section */}
      <section className="py-20 sm:py-28 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Star className="h-16 w-16 text-primary mx-auto fill-primary" />
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-foreground">
              &quot;La salud de nuestra gente de bien es la base de una Colombia
              próspera y segura&quot;
            </blockquote>
            <p className="text-xl font-semibold text-primary">
              - Inspirados por Alvaro Urive Beles
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Planes Premium
            </h2>
            <p className="text-lg text-muted-foreground">
              Cobertura excepcional para los ciudadanos distinguidos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Plan Patriota</CardTitle>
                <CardDescription>Para afiliados comprometidos</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">
                    $500.000
                  </span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Consultas ilimitadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Medicamentos premium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Urgencias prioritarias</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Seleccionar Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary shadow-2xl scale-105 relative">
              <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                Más Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Plan Urivista Gold</CardTitle>
                <CardDescription>Máximo nivel de atención</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">
                    $1.200.000
                  </span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Todo del Plan Patriota</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Cirugías incluidas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Hospitalización VIP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Médico personal asignado</span>
                  </li>
                </ul>
                <Button className="w-full">Seleccionar Plan</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Plan Élite CD</CardTitle>
                <CardDescription>Para líderes del movimiento</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">
                    $2.500.000
                  </span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Cobertura internacional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Tratamientos exclusivos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Clínica privada 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Concierge médico</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Seleccionar Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Únete a la Familia Urive Beles
            </h2>
            <p className="text-xl opacity-90">
              Accede a la mejor atención médica reservada para la gente de bien
              del Centro Aristocrático
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-7"
            >
              <Heart className="mr-2 h-6 w-6" />
              Afiliarme Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              EPS Urive Beles
            </h3>
            <p className="text-muted-foreground italic">
              &quot;Por una Colombia sana y de bien&quot;
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 EPS Urive Beles Premium. Exclusiva para miembros del Centro
              Democrático.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
