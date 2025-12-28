'use client';

import { motion } from 'motion/react';
import { mockClaimHistory } from '@/lib/mock-data';
import { CheckIcon } from 'lucide-react';

export default function HistoryPage() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="px-4 sm:px-6">
      <header className="pt-4 pb-4 sm:pt-6">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground text-xl font-semibold tracking-tight"
        >
          History
        </motion.h1>
      </header>

      <div className="space-y-1.5">
        {mockClaimHistory.map((record, index) => (
          <motion.div
            key={`${record.itemSku}-${index}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
          >
            <div className="flex items-center gap-3 rounded-xl bg-muted/20 p-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                <CheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-foreground text-[15px] font-medium block truncate">
                  {record.itemName}
                </span>
                <span className="text-muted-foreground text-xs">{formatDate(record.claimedAt)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {mockClaimHistory.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <p className="text-muted-foreground text-sm">No claims yet</p>
        </motion.div>
      )}
    </div>
  );
}
