import { FeatureProps } from "@/types/common/features";
import { Cross, Handshake, Shield, Swords } from "lucide-react";

export const features: FeatureProps[] = [
  {
    title: "Seguridad Total",
    description:
      "Protección integral inspirada en los valores de firmeza y seguridad democrática",
    benefits: [
      "Clínicas blindadas",
      "Personal de confianza",
      "Privacidad garantizada",
      "Solo gente de bien",
    ],
    icon: <Shield className="size-12 text-primary" />,
  },
  {
    title: "Excelencia Médica",
    description:
      "Los mejores especialistas comprometidos con la gente de bien y los valores de nuestro líder",
    benefits: [
      "Médicos certificados y patriotas",
      "Tecnología de punta importada",
      "Atención inmediata sin trámites",
      "Mano firme contra la negligencia",
    ],
    icon: <Cross className="size-12 text-primary" />,
  },
  {
    title: "Comunidad Exclusiva",
    description:
      "Únete a nuestra familia de afiliados del Centro Aristocrático. Salud entre gente de bien",
    benefits: [
      "Red de confianza verificada",
      "Eventos exclusivos con líderes",
      "Beneficios para militantes activos",
      "Cero tolerancia con infiltrados",
    ],
    icon: <Handshake className="size-12 text-primary" />,
  },
  {
    title: "Mano Firme en Gestión",
    description:
      "Administración eficiente inspirada en la seguridad democrática de Alvaro Urive Beles",
    benefits: [
      "Cero corrupción, cero burocracia",
      "Autorizaciones en tiempo récord",
      "Vigilancia estricta de calidad",
      "Resultados inmediatos y efectivos",
    ],
    icon: <Swords className="size-12 text-primary" />,
  },
];
