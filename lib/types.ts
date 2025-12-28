// User types
export interface User {
  id: string;
  email: string;
  connectedAt: Date;
}

// Item types based on MCOC webstore API
export interface RecurrentSchedule {
  interval_type: "daily" | "weekly";
  reset_next_date: number; // Unix timestamp
}

export interface PerUserLimit {
  total: number;
  available: number; // 0 = claimed, 1+ = can claim
  recurrent_schedule?: RecurrentSchedule;
}

export interface ItemLimits {
  per_user: PerUserLimit;
}

export interface FreeItem {
  item_id: number;
  sku: string;
  name: string;
  description: string;
  image_url: string;
  is_free: boolean;
  virtual_item_type: string;
  limits: ItemLimits;
}

// Claim history
export interface ClaimRecord {
  itemSku: string;
  itemName: string;
  claimedAt: Date;
  orderId: number;
}

// App state
export interface AppState {
  user: User | null;
  items: FreeItem[];
  claimHistory: ClaimRecord[];
  isConnected: boolean;
}
