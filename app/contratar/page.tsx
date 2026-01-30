import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ContratarPageProps {
  searchParams: Promise<{ plan?: string }>;
}

export default async function ContratarPage({ searchParams }: ContratarPageProps) {
  const params = await searchParams;
  const plan = params.plan;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#planes"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a planes
          </Link>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-card-foreground">
                Solicita tu plan
              </h1>
              <p className="mt-2 text-muted-foreground">
                Rellena el formulario y nos pondremos en contacto contigo para
                agilizar el proceso y darte la mejor atención posible.
              </p>
            </div>

            <ContactForm plan={plan} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
