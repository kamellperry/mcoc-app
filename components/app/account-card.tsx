'use client';

import { motion } from 'motion/react';
import { LinkIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { User } from '@/lib/types';
import { formatRelativeTime } from '@/lib/mock-data';

interface AccountCardProps {
  user: User;
  onDisconnect?: () => void;
}

export function AccountCard({ user }: AccountCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="mx-4 sm:mx-6"
    >
      <Button
        variant="ghost"
        className="w-full h-auto justify-start gap-3 rounded-xl bg-muted/30 p-3 hover:bg-muted/50 active:bg-muted/60"
      >
        {/* Icon */}
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
          <LinkIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 text-left">
          <span className="text-foreground text-[15px] font-medium block truncate">
            {user.email}
          </span>
          <span className="text-muted-foreground text-xs font-normal">
            Connected {formatRelativeTime(user.connectedAt)}
          </span>
        </div>

        <ChevronRightIcon className="size-4 text-muted-foreground/40 shrink-0 group-hover/button:text-muted-foreground/60 transition-colors" />
      </Button>
    </motion.div>
  );
}
