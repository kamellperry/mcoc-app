"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ClipboardListIcon, SettingsIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: "/app", label: "Home", icon: HomeIcon },
  { href: "/app/history", label: "History", icon: ClipboardListIcon },
  { href: "/app/settings", label: "Settings", icon: SettingsIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-background/80 border-border/50 fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-4 pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => {
          const isActive =
            item.href === "/app"
              ? pathname === "/app"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/80"
              )}
            >
              <item.icon
                className={cn("size-5", isActive && "stroke-[2.5px]")}
              />
              <span
                className={cn(
                  "text-[10px]",
                  isActive ? "font-semibold" : "font-medium"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
