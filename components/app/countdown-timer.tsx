"use client";

import * as React from "react";
import { ClockIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatCountdown } from "@/lib/mock-data";

interface CountdownTimerProps {
  targetTimestamp: number;
  label?: string;
}

export function CountdownTimer({
  targetTimestamp,
  label = "Next claim available in",
}: CountdownTimerProps) {
  const [countdown, setCountdown] = React.useState(() =>
    formatCountdown(targetTimestamp)
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(formatCountdown(targetTimestamp));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  return (
    <Card className="mx-4 mt-4 sm:mx-6">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-full">
            <ClockIcon className="text-muted-foreground size-5" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">{label}</p>
            <p className="text-foreground text-lg font-bold tabular-nums">
              {countdown}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
