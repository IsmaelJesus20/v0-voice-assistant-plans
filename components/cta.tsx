import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="px-8 py-16 text-center lg:px-16 lg:py-24">
            <h2 className="text-balance text-3xl font-bold text-card-foreground sm:text-4xl lg:text-5xl">
              ¿Listo para automatizar tu atención telefónica?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground lg:text-lg">
              Ponte en contacto con el equipo de ISJO AI y te mostraremos cómo
              podemos transformar la comunicación con tus clientes. Agendaremos una
              reunión para personalizar todo a tu medida.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <a href="/contratar?plan=Contacto">
                  Contactar con el equipo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contratar?plan=Ventas">Hablar con Ventas</a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Sin compromiso. Reunión de 30 minutos para analizar tu caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
