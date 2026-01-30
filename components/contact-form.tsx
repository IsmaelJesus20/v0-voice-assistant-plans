"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  plan?: string;
}

export function ContactForm({ plan }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get("nombre") as string,
      apellido: formData.get("apellido") as string,
      telefono: formData.get("telefono") as string,
      email: formData.get("email") as string,
      plan: plan || "No especificado",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setIsSubmitted(true);
    } catch {
      setError("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          ¡Solicitud enviada!
        </h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Hemos recibido tu solicitud correctamente. Te enviaremos un correo de
          confirmación y nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {plan && (
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">Plan seleccionado</p>
          <p className="text-lg font-semibold text-primary">{plan}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            required
            className="bg-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="apellido">Apellido</Label>
          <Input
            id="apellido"
            name="apellido"
            placeholder="Tu apellido"
            required
            className="bg-secondary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefono">Teléfono de contacto</Label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="Ej: 672 285 363"
          required
          className="bg-secondary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          required
          className="bg-secondary"
        />
      </div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar solicitud"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Al enviar este formulario, aceptas que nos pongamos en contacto contigo
        para ofrecerte la mejor atención posible.
      </p>
    </form>
  );
}
