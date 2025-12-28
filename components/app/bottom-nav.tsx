'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { HomeIcon, ClipboardListIcon, SettingsIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: '/app', label: 'Home', icon: HomeIcon },
  { href: '/app/history', label: 'History', icon: ClipboardListIcon },
  { href: '/app/settings', label: 'Settings', icon: SettingsIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-[max(env(safe-area-inset-bottom),12px)] pointer-events-none">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30, delay: 0.1 }}
        className="pointer-events-auto flex items-center gap-1 rounded-2xl bg-foreground/[0.03] backdrop-blur-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1),0_4px_8px_-4px_rgba(0,0,0,0.04)] border border-border/40 p-1.5"
      >
        {navItems.map((item) => {
          const isActive =
            item.href === '/app' ? pathname === '/app' : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative flex items-center justify-center rounded-xl p-3 transition-colors',
                'active:scale-95 transition-transform duration-100',
                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/70'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-xl bg-background shadow-sm ring-1 ring-border/50"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <item.icon className={cn('relative z-10 size-[22px]', isActive && 'stroke-[2.25px]')} />
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
}
