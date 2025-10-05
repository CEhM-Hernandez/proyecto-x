"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Shield,
  Home,
  Eye,
  ShieldAlert,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background font-sans flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header con advertencia */}
        <div className="text-center mb-8 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <ShieldAlert className="h-32 w-32 text-destructive animate-pulse" />
              <div className="absolute inset-0 bg-destructive/20 blur-3xl animate-pulse"></div>
            </div>
          </div>

          <Badge
            variant="destructive"
            className="text-lg px-6 py-2 mb-4 animate-pulse"
          >
            <AlertTriangle className="mr-2 h-5 w-5" />
            ZONA RESTRINGIDA - ERROR 404
          </Badge>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-foreground mb-4">
            404
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-destructive mb-4">
            ¿Qué Estás Buscando?
          </h2>

          <p className="text-xl sm:text-2xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
            &ldquo;El que busca problemas donde no los hay, termina
            encontrándolos&rdquo;
            <br />
            <span className="text-primary font-semibold">
              - Sabiduría de Alvaro Urive Beles
            </span>
          </p>
        </div>

        {/* Advertencias importantes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Eye className="h-6 w-6" />
                Te Estamos Observando
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nuestros sistemas de seguridad democrática han registrado tu
                intento de acceder a esta página. Recuerda que la gente de bien
                no anda buscando donde no debe.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Shield className="h-6 w-6" />
                Protocolo de Seguridad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Si sigues navegando por áreas no autorizadas, activaremos los
                protocolos de seguridad inspirados en la firmeza de nuestro
                líder. No busques problemas donde no los hay.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mensajes de advertencia */}

        <div className="flex items-start gap-3 p-4 bg-destructive/20 rounded-lg border-2 border-destructive">
          <ShieldAlert className="h-6 w-6 text-destructive flex-shrink-0 mt-1 animate-pulse" />
          <div>
            <h3 className="font-bold text-lg mb-2 text-destructive">
              ÚLTIMA ADVERTENCIA
            </h3>
            <p className="text-foreground font-semibold">
              Si sigues buscando problemas donde no los hay, VAN A HABER
              PROBLEMAS. Nuestro sistema de seguridad no tolera comportamientos
              sospechosos. Te recomendamos volver a la zona segura
              INMEDIATAMENTE.
            </p>
          </div>
        </div>

        {/* Opciones de navegación */}
        <div className="text-center space-y-6 mb-30 mt-10">
          <p className="text-lg text-muted-foreground font-semibold">
            Te sugerimos que regreses a territorio conocido antes de que las
            cosas se compliquen:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                <Home className="mr-2 h-5 w-5" />
                Volver a Casa (Recomendado)
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Retroceder
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
