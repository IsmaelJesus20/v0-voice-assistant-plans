import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    price: "499,99",
    description: "Ideal para pequeños negocios que quieren empezar a automatizar.",
    minutes: "800",
    features: [
      "800 minutos incluidos/mes",
      "Asistente de voz 24/7",
      "Gestión básica de citas",
      "Panel de control",
      "Soporte por email",
    ],
    popular: false,
  },
  {
    name: "Estándar",
    price: "849,99",
    description: "Para negocios en crecimiento con mayor volumen de uso.",
    minutes: "1.400",
    features: [
      "1.400 minutos incluidos/mes",
      "Asistente de voz 24/7",
      "Gestión avanzada de citas",
      "Confirmaciones SMS/WhatsApp",
      "Panel de control avanzado",
      "Integraciones básicas",
      "Soporte prioritario",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "A medida",
    description: "Solución 100% personalizada. Lo creamos y montamos al gusto del cliente.",
    minutes: null,
    features: [
      "Hecho a medida para tu negocio",
      "Configuración totalmente personalizada",
      "Minutos según tus necesidades",
      "Funcionalidades a tu elección",
      "Reunión para definir requisitos",
    ],
    popular: false,
    isCustom: true,
  },
];

export function Pricing() {
  return (
    <section id="planes" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Planes
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Elige el plan que mejor se adapte a tu negocio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Precios con IVA incluido. Todos los planes incluyen configuración
            personalizada en una reunión inicial con nuestro equipo.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all",
                plan.popular
                  ? "border-primary bg-secondary"
                  : "border-border bg-card hover:border-primary/50"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-card-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-card-foreground">
                    {plan.isCustom ? plan.price : `${plan.price}€`}
                  </span>
                  {!plan.isCustom && <span className="ml-2 text-muted-foreground">/mes</span>}
                </div>
                {plan.minutes && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.minutes} minutos incluidos
                  </p>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <a href={`/contratar?plan=${encodeURIComponent(plan.name)}`}>
                  {plan.isCustom ? "Contactar" : "Contratar"}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ¿Necesitas un plan personalizado?{" "}
            <a href="/contratar" className="text-primary hover:underline">
              Contáctanos
            </a>{" "}
            y lo adaptamos a tus necesidades.
          </p>
        </div>
      </div>
    </section>
  );
}
