import {
  Phone,
  MessageSquare,
  Calendar,
  Settings,
  Shield,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Atención telefónica automatizada",
    description:
      "Responde llamadas entrantes de forma natural y profesional, las 24 horas del día sin interrupciones.",
  },
  {
    icon: Calendar,
    title: "Gestión de citas",
    description:
      "Programa, modifica y cancela citas automáticamente según la disponibilidad de tu negocio.",
  },
  {
    icon: MessageSquare,
    title: "Confirmaciones multicanal",
    description:
      "Envía confirmaciones por SMS, WhatsApp o email para asegurar que tus clientes no olviden sus citas.",
  },
  {
    icon: Settings,
    title: "100% personalizable",
    description:
      "Adaptamos el asistente a tu negocio: flujos de conversación, tono de voz y respuestas a medida.",
  },
  {
    icon: Shield,
    title: "Seguridad y privacidad",
    description:
      "Cumplimos con RGPD y todas las normativas de protección de datos para tu tranquilidad.",
  },
  {
    icon: Headphones,
    title: "Soporte dedicado",
    description:
      "Equipo de expertos disponible para ayudarte con la configuración y optimización del sistema.",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Características
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Todo lo que necesitas para automatizar tu atención telefónica
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Nuestro asistente de voz con IA está diseñado para adaptarse a las
            necesidades específicas de tu negocio.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-secondary"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
