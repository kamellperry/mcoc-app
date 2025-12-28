"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "./hero";

export function LandingPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="bg-primary flex size-8 items-center justify-center rounded-lg">
            <span className="text-primary-foreground text-sm font-bold">M</span>
          </div>
          <span className="text-foreground text-lg font-semibold">MCOC Claimer</span>
        </div>
        <Button render={<Link href="/login" />} size="sm" variant="ghost">
          Log in
        </Button>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col">
        <Hero />
      </main>

      {/* Footer */}
      <footer className="text-muted-foreground px-4 py-6 text-center text-xs sm:px-6">
        <p>Not affiliated with Kabam or Marvel</p>
      </footer>
    </div>
  );
}
