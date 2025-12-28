'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { UserIcon, BellIcon, ShieldIcon, LogOutIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const router = useRouter();

  function handleLogout() {
    router.push('/');
  }

  const settingsGroups = [
    {
      title: 'Account',
      items: [
        {
          icon: UserIcon,
          label: 'Profile',
          description: 'Manage your account',
          onClick: () => {},
        },
        {
          icon: ShieldIcon,
          label: 'Connected Account',
          description: 'MCOC connection',
          onClick: () => {},
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: BellIcon,
          label: 'Notifications',
          description: 'Claim alerts',
          onClick: () => {},
        },
      ],
    },
  ];

  return (
    <div className='px-4 sm:px-6'>
      <header className='pt-4 pb-6 sm:pt-6'>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-foreground text-xl font-semibold tracking-tight'
        >
          Settings
        </motion.h1>
      </header>

      <div className='space-y-6'>
        {settingsGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.05 }}
          >
            <h2 className='text-muted-foreground mb-1.5 text-[11px] font-semibold uppercase tracking-wider px-1'>
              {group.title}
            </h2>
            <div className='rounded-xl bg-muted/30 overflow-hidden'>
              {group.items.map((item, index) => (
                <Button
                  key={item.label}
                  variant='ghost'
                  onClick={item.onClick}
                  className={cn(
                    'w-full h-auto justify-start gap-3 px-3.5 py-3 rounded-none',
                    'hover:bg-muted/60 active:bg-muted',
                    index > 0 && 'border-t border-border/30'
                  )}
                >
                  <item.icon className='size-[18px] text-muted-foreground group-hover/button:text-foreground/70 transition-colors shrink-0' />
                  <div className='min-w-0 flex-1 text-left'>
                    <span className='text-foreground text-[15px] font-medium block leading-tight'>{item.label}</span>
                    <span className='text-muted-foreground text-xs leading-tight font-normal'>{item.description}</span>
                  </div>
                  <ChevronRightIcon className='size-4 text-muted-foreground/40 shrink-0' />
                </Button>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className='pt-2'
        >
          <Button
            variant='destructive'
            onClick={handleLogout}
            className='w-full h-auto gap-2 py-3'
          >
            <LogOutIcon className='size-[18px]' />
            <span className='text-[15px] font-medium'>Log Out</span>
          </Button>
        </motion.div>

        {/* Version */}
        <p className='text-muted-foreground/50 pt-2 pb-4 text-center text-[11px]'>MCOC Claimer v1.0.0</p>
      </div>
    </div>
  );
}
