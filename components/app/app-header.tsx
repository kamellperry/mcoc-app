'use client';

import { motion } from 'motion/react';
import type { User } from '@/lib/types';

interface AppHeaderProps {
  user: User | null;
  isConnected: boolean;
}

export function AppHeader({ user, isConnected }: AppHeaderProps) {
  const greeting = getGreeting();
  const displayName = user?.email?.split('@')[0] ?? 'Summoner';

  return (
    <header className='px-4 pt-4 pb-1 sm:px-6 sm:pt-6 mb-5'>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className='flex items-center justify-between'
      >
        <div>
          <h1 className='text-foreground text-lg font-semibold tracking-tight'>
            {greeting}, {displayName}
          </h1>
          <div className='flex items-center gap-1.5 mt-0.5'>
            <div className={`size-1.5 rounded-full ${isConnected ? 'bg-emerald-500' : 'bg-muted-foreground/30'}`} />
            <p className='text-muted-foreground text-sm'>{isConnected ? 'Auto-claiming active' : 'Connect to start'}</p>
          </div>
        </div>

        {/* Status indicator circle */}
        <div className='relative'>
          <div className='size-10 rounded-full bg-muted/50 flex items-center justify-center'>
            <span className='text-base font-semibold text-foreground/80'>{displayName.charAt(0).toUpperCase()}</span>
          </div>
          {isConnected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className='absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-emerald-500 border-2 border-background'
            />
          )}
        </div>
      </motion.div>
    </header>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}
