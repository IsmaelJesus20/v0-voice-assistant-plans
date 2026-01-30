import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">
              Disponible 24/7, los 365 días del año
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Tu asistente inteligente,{" "}
            <span className="text-primary">siempre activo</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl">
            Automatiza la atención telefónica de tu negocio. Responde llamadas,
            gestiona citas y ofrece información a tus clientes sin intervención
            humana. Personalizable al 100% para tu empresa.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://vapi.ai?demo=true&shareKey=f780f3e9-2cdc-4841-bd34-c4c5369df67e&assistantId=c4a596d6-85cd-4c83-93d0-6c0ca6af0f50" target="_blank" rel="noopener noreferrer">
                Solicitar Demo Gratuita
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="#planes">Ver Planes</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">
                  Disponibilidad total
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">+10.000</p>
                <p className="text-sm text-muted-foreground">
                  Llamadas gestionadas
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{"<"}2s</p>
                <p className="text-sm text-muted-foreground">
                  Tiempo de respuesta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
