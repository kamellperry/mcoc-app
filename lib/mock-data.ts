import type { User, FreeItem, ClaimRecord } from "./types";

// Mock user - connected account
export const mockUser: User = {
  id: "5781c2e8-1900-0000-0000-000000000000",
  email: "summoner@example.com",
  connectedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
};

// Calculate next reset times
const now = Date.now();
const nextDailyReset = now + 11 * 60 * 60 * 1000 + 56 * 60 * 1000; // ~12 hours
const nextWeeklyReset = now + 1 * 24 * 60 * 60 * 1000 + 11 * 60 * 60 * 1000; // ~1 day 11 hours

// Mock items from MCOC webstore
export const mockItems: FreeItem[] = [
  {
    item_id: 544419,
    sku: "com.kabam.marvel.dailyval.xs.free.000",
    name: "Valiant Daily Crystal",
    description: "Claim your Crystal every day for valuable rewards!",
    image_url: "https://cdn3.xsolla.com/img/misc/images/7c8dc65e9a5e7f7e8c8b9d0a1b2c3d4e.png",
    is_free: true,
    virtual_item_type: "consumable",
    limits: {
      per_user: {
        total: 1,
        available: 0, // Already claimed
        recurrent_schedule: {
          interval_type: "daily",
          reset_next_date: Math.floor(nextDailyReset / 1000),
        },
      },
    },
  },
  {
    item_id: 544420,
    sku: "com.kabam.marvel.weeklyxs.xs.free.000",
    name: "Weekly Webstore Crystal",
    description: "Claim your weekly Crystal for premium rewards!",
    image_url: "https://cdn3.xsolla.com/img/misc/images/8d9ec76f0b6f8g8f9d9c0e1b2d3e4f5g.png",
    is_free: true,
    virtual_item_type: "consumable",
    limits: {
      per_user: {
        total: 1,
        available: 0, // Already claimed
        recurrent_schedule: {
          interval_type: "weekly",
          reset_next_date: Math.floor(nextWeeklyReset / 1000),
        },
      },
    },
  },
  {
    item_id: 544421,
    sku: "com.kabam.marvel.dailymarket.xs.free.000",
    name: "Daily Free Market Points",
    description: "Get free Market Points and Holiday Points daily!",
    image_url: "https://cdn3.xsolla.com/img/misc/images/9e0fd87g1c7g9h0g0e0d1f2c3e4f5g6h.png",
    is_free: true,
    virtual_item_type: "consumable",
    limits: {
      per_user: {
        total: 1,
        available: 0, // Already claimed
        recurrent_schedule: {
          interval_type: "daily",
          reset_next_date: Math.floor(nextDailyReset / 1000),
        },
      },
    },
  },
  {
    item_id: 544422,
    sku: "com.kabam.marvel.weeklymarket.xs.free.000",
    name: "Weekly Free Market Points",
    description: "Get bonus Market Points and Holiday Points weekly!",
    image_url: "https://cdn3.xsolla.com/img/misc/images/0f1ge98h2d8h0i1h1f1e2g3d4f5g6h7i.png",
    is_free: true,
    virtual_item_type: "consumable",
    limits: {
      per_user: {
        total: 1,
        available: 0, // Already claimed
        recurrent_schedule: {
          interval_type: "weekly",
          reset_next_date: Math.floor(nextWeeklyReset / 1000),
        },
      },
    },
  },
];

// Mock claim history
export const mockClaimHistory: ClaimRecord[] = [
  {
    itemSku: "com.kabam.marvel.dailyval.xs.free.000",
    itemName: "Valiant Daily Crystal",
    claimedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    orderId: 12345678,
  },
  {
    itemSku: "com.kabam.marvel.weeklyxs.xs.free.000",
    itemName: "Weekly Webstore Crystal",
    claimedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    orderId: 12345679,
  },
  {
    itemSku: "com.kabam.marvel.dailymarket.xs.free.000",
    itemName: "Daily Free Market Points",
    claimedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    orderId: 12345680,
  },
  {
    itemSku: "com.kabam.marvel.weeklymarket.xs.free.000",
    itemName: "Weekly Free Market Points",
    claimedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    orderId: 12345681,
  },
];

// Helper to get next reset time
export function getNextResetTime(items: FreeItem[]): number | null {
  const dailyItems = items.filter(
    (item) => item.limits.per_user.recurrent_schedule?.interval_type === "daily"
  );

  if (dailyItems.length === 0) return null;

  const nextReset = Math.min(
    ...dailyItems
      .map((item) => item.limits.per_user.recurrent_schedule?.reset_next_date)
      .filter((time): time is number => time !== undefined)
  );

  return nextReset;
}

// Helper to format relative time
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffDays > 0) {
    return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
  }
  if (diffHours > 0) {
    return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
  }
  if (diffMinutes > 0) {
    return diffMinutes === 1 ? "1 minute ago" : `${diffMinutes} minutes ago`;
  }
  return "Just now";
}

// Helper to format countdown
export function formatCountdown(targetTimestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = targetTimestamp - now;

  if (diff <= 0) return "Available now";

  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);

  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days}d ${remainingHours}h`;
  }

  return `${hours}h ${minutes}m`;
}
