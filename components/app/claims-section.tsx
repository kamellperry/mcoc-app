'use client';

import { motion } from 'motion/react';
import type { FreeItem } from '@/lib/types';
import { ClaimItemCard } from './claim-item-card';

interface ClaimsSectionProps {
  items: FreeItem[];
  title?: string;
}

export function ClaimsSection({ items, title = 'Rewards' }: ClaimsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  const claimedCount = items.filter((i) => i.limits.per_user.available === 0).length;

  return (
    <section className="mt-5">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-2 flex items-baseline justify-between px-4 sm:px-6"
      >
        <h2 className="text-foreground text-sm font-semibold tracking-tight">{title}</h2>
        <span className="text-muted-foreground text-xs tabular-nums">
          {claimedCount}/{items.length}
        </span>
      </motion.div>

      {/* Stacked cards */}
      <div className="space-y-1.5 px-4 sm:px-6">
        {items.map((item, index) => (
          <ClaimItemCard key={item.sku} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
