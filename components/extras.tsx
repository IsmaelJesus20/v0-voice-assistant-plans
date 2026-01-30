import { MessageSquare, PhoneOutgoing, Mail, Smartphone } from "lucide-react";

const extras = [
  {
    icon: PhoneOutgoing,
    title: "Llamadas extra",
    price: "0,39€",
    description: "Por cada llamada adicional fuera del paquete contratado.",
  },
  {
    icon: MessageSquare,
    title: "Confirmaciones SMS",
    description:
      "Envía recordatorios y confirmaciones automáticas por SMS a tus clientes.",
  },
  {
    icon: Smartphone,
    title: "Confirmaciones WhatsApp",
    description:
      "Notificaciones y confirmaciones a través de WhatsApp Business.",
  },
  {
    icon: Mail,
    title: "Confirmaciones Email",
    description:
      "Envía emails personalizados con la información de las citas.",
  },
];

export function Extras() {
  return (
    <section id="extras" className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Servicios Adicionales
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Amplía las capacidades de tu asistente
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Añade funcionalidades extra para ofrecer una experiencia completa a
            tus clientes. Los precios se discuten en la reunión de configuración.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((extra) => (
            <div
              key={extra.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <extra.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">
                {extra.title}
              </h3>
              {extra.price && (
                <p className="mt-1 text-2xl font-bold text-primary">
                  {extra.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    (sin IVA)
                  </span>
                </p>
              )}
              <p className="mt-2 text-sm text-muted-foreground">
                {extra.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">
            Personalización total
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Cada negocio es único. Por eso, en nuestra reunión inicial
            analizamos tus necesidades específicas y adaptamos el asistente de
            voz a tu empresa. Flujos de conversación, integraciones con tu CRM,
            horarios especiales... todo se puede configurar.
          </p>
        </div>
      </div>
    </section>
  );
}
