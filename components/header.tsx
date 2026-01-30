"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ISJO AI Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-foreground">ISJO AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#caracteristicas"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Características
          </Link>
          <Link
            href="#planes"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Planes
          </Link>
          <Link
            href="#extras"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Extras
          </Link>
          <Link
            href="#contacto"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>

        <div className="hidden items-center md:flex">
          <Button size="sm" asChild>
            <a href="/contratar">Contactar</a>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <Link
              href="#caracteristicas"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </Link>
            <Link
              href="#planes"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Planes
            </Link>
            <Link
              href="#extras"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Extras
            </Link>
            <Link
              href="#contacto"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button size="sm" asChild>
                <a href="/contratar">Contactar</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
