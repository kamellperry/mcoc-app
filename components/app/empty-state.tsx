'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Gamepad2Icon } from 'lucide-react';

interface EmptyStateProps {
  onConnect: () => void;
}

export function EmptyState({ onConnect }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6"
    >
      {/* Illustration */}
      <div className="mb-5 flex size-20 items-center justify-center rounded-2xl bg-muted/40">
        <Gamepad2Icon className="text-muted-foreground/60 size-10" />
      </div>

      {/* Title */}
      <h2 className="text-foreground text-center text-lg font-semibold tracking-tight">
        Connect Your Account
      </h2>

      {/* Description */}
      <p className="text-muted-foreground mt-1.5 max-w-[260px] text-center text-sm leading-relaxed">
        Link your MCOC account to automatically claim daily rewards
      </p>

      {/* CTA */}
      <Button size="lg" className="mt-5" onClick={onConnect}>
        Connect Account
      </Button>
    </motion.div>
  );
}
