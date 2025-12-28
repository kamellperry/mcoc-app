"use client";

import type { User } from "@/lib/types";

interface AppHeaderProps {
  user: User | null;
  isConnected: boolean;
}

export function AppHeader({ user, isConnected }: AppHeaderProps) {
  const greeting = getGreeting();
  const displayName = user?.email?.split("@")[0] ?? "Summoner";

  return (
    <header className="px-4 pt-4 pb-2 sm:px-6 sm:pt-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-foreground text-xl font-bold sm:text-2xl">
            {greeting}, {displayName}
          </h1>
          <p className="text-muted-foreground mt-0.5 text-sm">
            {isConnected
              ? "Your rewards are being claimed"
              : "Connect your account to get started"}
          </p>
        </div>
        <div className="text-2xl">{isConnected ? "✨" : "👋"}</div>
      </div>
    </header>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}
