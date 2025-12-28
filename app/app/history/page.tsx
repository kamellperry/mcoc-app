"use client";

import { mockClaimHistory } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2Icon } from "lucide-react";

export default function HistoryPage() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <>
      <header className="px-4 pt-4 pb-2 sm:px-6 sm:pt-6">
        <h1 className="text-foreground text-xl font-bold sm:text-2xl">
          Claim History
        </h1>
        <p className="text-muted-foreground mt-0.5 text-sm">
          Your recent reward claims
        </p>
      </header>

      <div className="space-y-3 px-4 pt-4 sm:px-6">
        {mockClaimHistory.map((record, index) => (
          <Card key={`${record.itemSku}-${index}`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 flex size-10 shrink-0 items-center justify-center rounded-full">
                  <CheckCircle2Icon className="size-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-foreground text-sm font-semibold">
                      {record.itemName}
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      Claimed
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {formatDate(record.claimedAt)}
                  </p>
                  <p className="text-muted-foreground/60 mt-0.5 text-[10px]">
                    Order #{record.orderId}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
