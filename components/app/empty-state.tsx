"use client";

import { Button } from "@/components/ui/button";
import { Gamepad2Icon } from "lucide-react";

interface EmptyStateProps {
  onConnect: () => void;
}

export function EmptyState({ onConnect }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6">
      {/* Illustration */}
      <div className="bg-muted mb-6 flex size-24 items-center justify-center rounded-2xl">
        <Gamepad2Icon className="text-muted-foreground size-12" />
      </div>

      {/* Title */}
      <h2 className="text-foreground text-center text-xl font-bold sm:text-2xl">
        Connect Your Account
      </h2>

      {/* Description */}
      <p className="text-muted-foreground mt-2 max-w-xs text-center text-sm">
        Link your Marvel Contest of Champions account to automatically claim
        your daily rewards
      </p>

      {/* CTA */}
      <Button size="lg" className="mt-6" onClick={onConnect}>
        Connect Account
      </Button>
    </div>
  );
}
