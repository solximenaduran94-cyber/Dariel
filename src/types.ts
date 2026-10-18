export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

export interface RSVPData {
  guestName: string;
  isAttending: boolean;
  totalGuests: number;
  message?: string;
  giftChoice?: string;
}

export interface GiftSize {
  category: string;
  size: string;
  description: string;
}
