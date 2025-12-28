"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  UserIcon,
  BellIcon,
  ShieldIcon,
  LogOutIcon,
  ChevronRightIcon,
} from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();

  function handleLogout() {
    // Mock logout - redirect to landing
    router.push("/");
  }

  const settingsGroups = [
    {
      title: "Account",
      items: [
        {
          icon: UserIcon,
          label: "Profile",
          description: "Manage your account details",
          onClick: () => {},
        },
        {
          icon: ShieldIcon,
          label: "Connected Account",
          description: "MCOC account connection",
          onClick: () => {},
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: BellIcon,
          label: "Notifications",
          description: "Claim alerts and updates",
          onClick: () => {},
        },
      ],
    },
  ];

  return (
    <>
      <header className="px-4 pt-4 pb-2 sm:px-6 sm:pt-6">
        <h1 className="text-foreground text-xl font-bold sm:text-2xl">
          Settings
        </h1>
        <p className="text-muted-foreground mt-0.5 text-sm">
          Manage your preferences
        </p>
      </header>

      <div className="space-y-6 px-4 pt-4 sm:px-6">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-muted-foreground mb-2 text-xs font-semibold uppercase tracking-wider">
              {group.title}
            </h2>
            <Card>
              <CardContent className="p-0">
                {group.items.map((item, index) => (
                  <div key={item.label}>
                    {index > 0 && <Separator />}
                    <button
                      onClick={item.onClick}
                      className="hover:bg-muted/50 flex w-full items-center gap-3 p-4 text-left transition-colors"
                    >
                      <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-full">
                        <item.icon className="text-muted-foreground size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-foreground text-sm font-medium">
                          {item.label}
                        </span>
                        <p className="text-muted-foreground text-xs">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRightIcon className="text-muted-foreground size-5" />
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Logout */}
        <div className="pt-4">
          <Button
            variant="outline"
            className="text-destructive hover:bg-destructive/10 w-full"
            onClick={handleLogout}
          >
            <LogOutIcon className="mr-2 size-4" />
            Log Out
          </Button>
        </div>

        {/* Version info */}
        <p className="text-muted-foreground/60 pb-4 text-center text-xs">
          MCOC Claimer v1.0.0
        </p>
      </div>
    </>
  );
}
