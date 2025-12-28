"use client";

import type { FreeItem } from "@/lib/types";
import { ClaimItemCard } from "./claim-item-card";

interface ClaimsSectionProps {
  items: FreeItem[];
  title?: string;
}

export function ClaimsSection({
  items,
  title = "Today's Claims",
}: ClaimsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-6">
      {/* Section header */}
      <div className="mb-3 flex items-center justify-between px-4 sm:px-6">
        <h2 className="text-foreground text-sm font-semibold">{title}</h2>
        <span className="text-muted-foreground text-xs">
          {items.filter((i) => i.limits.per_user.available === 0).length}/
          {items.length} claimed
        </span>
      </div>

      {/* Horizontal scroll container */}
      <div className="scrollbar-hide flex gap-3 overflow-x-auto px-4 pb-2 sm:px-6">
        {items.map((item) => (
          <ClaimItemCard key={item.sku} item={item} />
        ))}
      </div>
    </section>
  );
}
