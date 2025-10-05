import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { features } from "@/config/landing/features";
import { FeatureProps } from "@/types/common/features";

export function Features() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30 group-[xd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Atención Premium para Gente de Bien
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Servicios exclusivos que honran el legado de nuestro líder
          </p>
        </div>

        <div className="mx-auto flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:justify-center">
          {features.map((feature) => (
            <Feature
              icon={feature.icon}
              key={feature.title}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ title, description, benefits, icon }: FeatureProps) {
  return (
    <Card className="group min-w-50 w-full max-w-80 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <div className="transition-transform duration-300 ease-in-out group-hover:scale-125 w-fit">
          {icon}
        </div>
        <CardTitle className="text-2xl text-balance mt-5">{title}</CardTitle>
        <CardDescription className="text-base text-pretty">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit) => (
            <li className="flex items-center gap-2" key={benefit}>
              <Check className="size-4 text-primary" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
