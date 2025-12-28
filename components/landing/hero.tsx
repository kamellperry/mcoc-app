"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, SparklesIcon } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6">
      {/* Badge */}
      <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1.5">
        <SparklesIcon className="size-3.5" />
        <span>Automated daily claims</span>
      </Badge>

      {/* Headline */}
      <h1 className="text-foreground max-w-md text-center text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl md:max-w-lg md:text-6xl">
        Claim Your Free Rewards Automatically
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground mt-4 max-w-sm text-center text-base sm:mt-6 sm:text-lg">
        Never miss a daily or weekly crystal again. We claim your MCOC webstore
        rewards for you.
      </p>

      {/* Features list */}
      <ul className="text-muted-foreground mt-6 flex flex-col gap-2 text-sm sm:mt-8 sm:flex-row sm:gap-6">
        <li className="flex items-center gap-2">
          <CheckIcon className="text-primary size-4" />
          <span>Daily crystals</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckIcon className="text-primary size-4" />
          <span>Weekly rewards</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckIcon className="text-primary size-4" />
          <span>Market points</span>
        </li>
      </ul>

      {/* CTA */}
      <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
        <Button render={<Link href="/login" />} size="lg" className="w-full min-w-[200px] sm:w-auto">
          Get Started
        </Button>
        <p className="text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-foreground underline underline-offset-4 hover:no-underline"
          >
            Log in
          </Link>
        </p>
      </div>

      {/* Preview card (optional visual) */}
      <div className="mt-12 w-full max-w-xs sm:mt-16">
        <div className="bg-card ring-border/50 rounded-2xl p-4 shadow-sm ring-1">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-muted-foreground text-xs font-medium">
              Today&apos;s Overview
            </span>
            <span className="text-lg">✨</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded bg-green-100 dark:bg-green-900/30">
                <CheckIcon className="size-3 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-foreground text-sm">
                Daily Crystal claimed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded bg-green-100 dark:bg-green-900/30">
                <CheckIcon className="size-3 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-foreground text-sm">
                Market Points claimed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex size-5 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30">
                <SparklesIcon className="size-3 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-muted-foreground text-sm">
                Weekly in 5 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
