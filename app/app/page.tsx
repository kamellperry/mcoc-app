"use client";

import * as React from "react";
import { AppHeader } from "@/components/app/app-header";
import { AccountCard } from "@/components/app/account-card";
import { ClaimsSection } from "@/components/app/claims-section";
import { CountdownTimer } from "@/components/app/countdown-timer";
import { EmptyState } from "@/components/app/empty-state";
import { ConnectAccountDrawer } from "@/components/app/connect-account-drawer";
import {
  mockUser,
  mockItems,
  getNextResetTime,
} from "@/lib/mock-data";
import type { User, FreeItem } from "@/lib/types";

export default function AppPage() {
  // Mock state - in real app this would come from auth/API
  const [isConnected, setIsConnected] = React.useState(true);
  const [user, setUser] = React.useState<User | null>(mockUser);
  const [items] = React.useState<FreeItem[]>(mockItems);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const nextResetTime = getNextResetTime(items);

  async function handleConnect(email: string, _password: string) {
    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock successful connection
    setUser({
      id: "mock-user-id",
      email,
      connectedAt: new Date(),
    });
    setIsConnected(true);
  }

  function handleDisconnect() {
    setUser(null);
    setIsConnected(false);
  }

  // Split items by frequency
  const dailyItems = items.filter(
    (item) => item.limits.per_user.recurrent_schedule?.interval_type === "daily"
  );
  const weeklyItems = items.filter(
    (item) =>
      item.limits.per_user.recurrent_schedule?.interval_type === "weekly"
  );

  return (
    <>
      <AppHeader user={user} isConnected={isConnected} />

      {isConnected && user ? (
        <>
          <AccountCard user={user} onDisconnect={handleDisconnect} />

          {dailyItems.length > 0 && (
            <ClaimsSection items={dailyItems} title="Daily Rewards" />
          )}

          {weeklyItems.length > 0 && (
            <ClaimsSection items={weeklyItems} title="Weekly Rewards" />
          )}

          {nextResetTime && <CountdownTimer targetTimestamp={nextResetTime} />}
        </>
      ) : (
        <EmptyState onConnect={() => setIsDrawerOpen(true)} />
      )}

      <ConnectAccountDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        onConnect={handleConnect}
      />
    </>
  );
}
