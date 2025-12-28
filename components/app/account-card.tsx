"use client";

import { CheckCircle2Icon, LinkIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { User } from "@/lib/types";
import { formatRelativeTime } from "@/lib/mock-data";

interface AccountCardProps {
  user: User;
  onDisconnect?: () => void;
}

export function AccountCard({ user }: AccountCardProps) {
  return (
    <Card className="mx-4 sm:mx-6">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-full">
            <CheckCircle2Icon className="text-primary size-5" />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-foreground text-sm font-semibold">
                Account Connected
              </span>
              <Badge variant="secondary" className="text-[10px]">
                Active
              </Badge>
            </div>
            <p className="text-muted-foreground mt-0.5 truncate text-sm">
              {user.email}
            </p>
            <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
              <LinkIcon className="size-3" />
              Connected {formatRelativeTime(user.connectedAt)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
