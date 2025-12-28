"use client";

import { CheckIcon, ClockIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FreeItem } from "@/lib/types";
import { formatCountdown } from "@/lib/mock-data";

interface ClaimItemCardProps {
  item: FreeItem;
}

export function ClaimItemCard({ item }: ClaimItemCardProps) {
  const isClaimed = item.limits.per_user.available === 0;
  const resetTime = item.limits.per_user.recurrent_schedule?.reset_next_date;
  const intervalType = item.limits.per_user.recurrent_schedule?.interval_type;

  // Get a placeholder gradient based on item type
  const gradientClass = getGradientClass(intervalType);

  return (
    <Card className="w-[140px] shrink-0 overflow-hidden sm:w-[160px]">
      {/* Image placeholder with gradient */}
      <div
        className={`aspect-square w-full ${gradientClass} flex items-center justify-center`}
      >
        <div className="text-4xl opacity-80">
          {intervalType === "daily" ? "💎" : "🔮"}
        </div>
      </div>

      <CardContent className="p-3">
        {/* Item name */}
        <h3 className="text-foreground line-clamp-2 text-xs font-semibold leading-tight">
          {item.name}
        </h3>

        {/* Status badge */}
        <div className="mt-2">
          {isClaimed ? (
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            >
              <CheckIcon className="mr-1 size-3" />
              Claimed
            </Badge>
          ) : (
            <Badge variant="outline">
              <ClockIcon className="mr-1 size-3" />
              Available
            </Badge>
          )}
        </div>

        {/* Reset time */}
        {resetTime && isClaimed && (
          <p className="text-muted-foreground mt-2 text-[10px]">
            Next: {formatCountdown(resetTime)}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function getGradientClass(
  intervalType: "daily" | "weekly" | undefined
): string {
  if (intervalType === "weekly") {
    return "bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-600";
  }
  return "bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500";
}
