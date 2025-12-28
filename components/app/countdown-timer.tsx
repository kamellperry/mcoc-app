'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { formatCountdown } from '@/lib/mock-data';

interface CountdownTimerProps {
  targetTimestamp: number;
  label?: string;
}

export function CountdownTimer({ targetTimestamp, label = 'Next reset' }: CountdownTimerProps) {
  const [countdown, setCountdown] = React.useState(() => formatCountdown(targetTimestamp));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(formatCountdown(targetTimestamp));
    }, 60000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="mx-4 mt-4 sm:mx-6"
    >
      <div className="flex items-center justify-between rounded-lg bg-muted/20 px-3.5 py-2.5">
        <span className="text-muted-foreground text-sm">{label}</span>
        <span className="text-foreground text-sm font-semibold tabular-nums">{countdown}</span>
      </div>
    </motion.div>
  );
}
