'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import type { FreeItem } from '@/lib/types';
import { formatCountdown } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

interface ClaimItemCardProps {
  item: FreeItem;
  index?: number;
}

export function ClaimItemCard({ item, index = 0 }: ClaimItemCardProps) {
  const isClaimed = item.limits.per_user.available === 0;
  const resetTime = item.limits.per_user.recurrent_schedule?.reset_next_date;
  const intervalType = item.limits.per_user.recurrent_schedule?.interval_type;

  const gradientStyle = getGradientStyle(intervalType);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="group"
    >
      <Button
        variant="ghost"
        className="w-full h-auto justify-start gap-3 rounded-xl bg-muted/20 p-2.5 pr-4 hover:bg-muted/40 active:scale-[0.99] active:bg-muted/50"
      >
        {/* Thumbnail */}
        <div
          className="relative size-12 shrink-0 rounded-lg overflow-hidden shadow-sm"
          style={gradientStyle}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          {/* Crystal icon */}
          <div className="absolute inset-0 flex items-center justify-center text-xl drop-shadow-sm">
            {intervalType === 'weekly' ? '💎' : '✨'}
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 text-left">
          <h3 className="text-foreground text-[15px] font-medium leading-tight tracking-tight truncate">
            {item.name}
          </h3>
          {resetTime && (
            <p className="text-muted-foreground text-xs tabular-nums mt-0.5 font-normal">
              {isClaimed ? `Next in ${formatCountdown(resetTime)}` : 'Available now'}
            </p>
          )}
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div
            className={cn(
              'size-2 rounded-full',
              isClaimed ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
            )}
          />
          <span
            className={cn(
              'text-xs',
              isClaimed ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
            )}
          >
            {isClaimed ? 'Claimed' : 'Ready'}
          </span>
        </div>
      </Button>
    </motion.div>
  );
}

function getGradientStyle(intervalType: 'daily' | 'weekly' | undefined): React.CSSProperties {
  if (intervalType === 'weekly') {
    return {
      background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #4F46E5 100%)',
    };
  }
  return {
    background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EF4444 100%)',
  };
}
