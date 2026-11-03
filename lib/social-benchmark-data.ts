export type AccountKind = 'hamlet_hotel' | 'hamlet_group' | 'competitor';

export interface SocialAccount {
  id: string;
  hotel_id?: string | null;
  name: string;
  town: string;
  platform: 'instagram';
  handle: string;
  url: string;
  kind: AccountKind;
  is_duplicate: boolean;
  notes?: string | null;
  is_active: boolean;
  created_at: string;
}

export interface SocialSnapshot {
  id: string;
  account_id: string;
  checked_on: string; // YYYY-MM-DD
  followers: number;
  posts: number;
  recent_likes: string | null;
  avg_recent_likes: number | null;
  notes?: string | null;
  created_by?: string | null;
  created_at: string;
}

export const INITIAL_ACCOUNTS: SocialAccount[] = [
  {
    id: 'carmichael-dup',
    name: 'The Carmichael',
    town: 'Hull',
    platform: 'instagram',
    handle: 'carmichaelhotel',
    url: 'https://www.instagram.com/carmichaelhotel/',
    kind: 'hamlet_hotel',
    is_duplicate: true,
    notes: 'Older account',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'carmichael-primary',
    name: 'The Carmichael',
    town: 'Hull',
    platform: 'instagram',
    handle: 'carmichael_hotel',
    url: 'https://www.instagram.com/carmichael_hotel/',
    kind: 'hamlet_hotel',
    is_duplicate: false,
    notes: 'Mostly designed graphics',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'hideout-hull',
    name: 'Hideout Hotel',
    town: 'Hull',
    platform: 'instagram',
    handle: 'hideout_hotel',
    url: 'https://www.instagram.com/hideout_hotel/',
    kind: 'competitor',
    is_duplicate: false,
    notes: 'Verified, 15 apartments, works with local creators, story highlights',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'kingston-hull',
    name: 'Kingston Theatre Hotel',
    town: 'Hull',
    platform: 'instagram',
    handle: 'kingstontheatrehotel',
    url: 'https://www.instagram.com/kingstontheatrehotel/',
    kind: 'competitor',
    is_duplicate: false,
    notes: 'Family-run boutique, food and events',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: '1843-dup',
    name: 'Hotel 1843',
    town: 'Reading',
    platform: 'instagram',
    handle: '1843reading',
    url: 'https://www.instagram.com/1843reading/',
    kind: 'hamlet_hotel',
    is_duplicate: true,
    notes: 'Older account, 3 posts',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: '1843-primary',
    name: 'Hotel 1843',
    town: 'Reading',
    platform: 'instagram',
    handle: '1843.reading',
    url: 'https://www.instagram.com/1843.reading/',
    kind: 'hamlet_hotel',
    is_duplicate: false,
    notes: null,
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'roseate-reading',
    name: 'The Roseate Reading',
    town: 'Reading',
    platform: 'instagram',
    handle: 'roseatereading',
    url: 'https://www.instagram.com/roseatereading/',
    kind: 'competitor',
    is_duplicate: false,
    notes: 'Real photos of rooms, food, weddings',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'market-house-reading',
    name: 'The Market House',
    town: 'Reading',
    platform: 'instagram',
    handle: 'themarkethousereading',
    url: 'https://www.instagram.com/themarkethousereading/',
    kind: 'competitor',
    is_duplicate: false,
    notes: '23 rooms plus bar, crowds and events, highlights',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'maidstone-primary',
    name: 'Hamlet Hotels Maidstone',
    town: 'Maidstone',
    platform: 'instagram',
    handle: 'hamlet_hotels_maidstone',
    url: 'https://www.instagram.com/hamlet_hotels_maidstone/',
    kind: 'hamlet_hotel',
    is_duplicate: false,
    notes: 'Mostly designed graphics',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'whodathoughtit-maidstone',
    name: "Who'd A Thought It",
    town: 'Maidstone',
    platform: 'instagram',
    handle: 'whodathoughtit',
    url: 'https://www.instagram.com/whodathoughtit/',
    kind: 'competitor',
    is_duplicate: false,
    notes: '4 to 9 comments per post, room reels',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'stone-court-maidstone',
    name: 'Stone Court House',
    town: 'Maidstone',
    platform: 'instagram',
    handle: 'stonecourthouse',
    url: 'https://www.instagram.com/stonecourthouse/',
    kind: 'competitor',
    is_duplicate: false,
    notes: 'Owners on camera, Channel 4 Four in a Bed',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
  {
    id: 'group-account',
    name: 'Hamlet Hotels (group)',
    town: 'Group',
    platform: 'instagram',
    handle: 'hamlet_hotels',
    url: 'https://www.instagram.com/hamlet_hotels/',
    kind: 'hamlet_group',
    is_duplicate: false,
    notes: 'Mixes Maidstone and 1843 content',
    is_active: true,
    created_at: '2026-11-03T00:00:00Z',
  },
];

export const INITIAL_SNAPSHOTS: SocialSnapshot[] = [
  {
    id: 'snap-carmichael-dup-1',
    account_id: 'carmichael-dup',
    checked_on: '2026-11-03',
    followers: 10,
    posts: 12,
    recent_likes: null,
    avg_recent_likes: null,
    notes: 'Older account',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-carmichael-primary-1',
    account_id: 'carmichael-primary',
    checked_on: '2026-11-03',
    followers: 6,
    posts: 7,
    recent_likes: '0 to 3',
    avg_recent_likes: 1.5,
    notes: 'Mostly designed graphics',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-hideout-hull-1',
    account_id: 'hideout-hull',
    checked_on: '2026-11-03',
    followers: 2831,
    posts: 821,
    recent_likes: '2, 4, 16',
    avg_recent_likes: 7.3,
    notes: 'Verified, 15 apartments, works with local creators, story highlights',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-kingston-hull-1',
    account_id: 'kingston-hull',
    checked_on: '2026-11-03',
    followers: 1115,
    posts: 455,
    recent_likes: '9, 14, 6',
    avg_recent_likes: 9.7,
    notes: 'Family-run boutique, food and events',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-1843-dup-1',
    account_id: '1843-dup',
    checked_on: '2026-11-03',
    followers: 292,
    posts: 3,
    recent_likes: null,
    avg_recent_likes: null,
    notes: 'Older account, 3 posts',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-1843-primary-1',
    account_id: '1843-primary',
    checked_on: '2026-11-03',
    followers: 61,
    posts: 30,
    recent_likes: '1 to 10 (from search results)',
    avg_recent_likes: null,
    notes: null,
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-roseate-reading-1',
    account_id: 'roseate-reading',
    checked_on: '2026-11-03',
    followers: 5067,
    posts: 1739,
    recent_likes: '12, 29, 8',
    avg_recent_likes: 16.3,
    notes: 'Real photos of rooms, food, weddings',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-market-house-reading-1',
    account_id: 'market-house-reading',
    checked_on: '2026-11-03',
    followers: 4210,
    posts: 859,
    recent_likes: 'about 5 to 10',
    avg_recent_likes: null,
    notes: '23 rooms plus bar, crowds and events, highlights',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-maidstone-primary-1',
    account_id: 'maidstone-primary',
    checked_on: '2026-11-03',
    followers: 220,
    posts: 124,
    recent_likes: '0 to 1',
    avg_recent_likes: 0.5,
    notes: 'Mostly designed graphics',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-whodathoughtit-maidstone-1',
    account_id: 'whodathoughtit-maidstone',
    checked_on: '2026-11-03',
    followers: 10900,
    posts: 796,
    recent_likes: '22, 48, 21',
    avg_recent_likes: 30.3,
    notes: '4 to 9 comments per post, room reels',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-stone-court-maidstone-1',
    account_id: 'stone-court-maidstone',
    checked_on: '2026-11-03',
    followers: 819,
    posts: 269,
    recent_likes: '30, 10',
    avg_recent_likes: 20.0,
    notes: 'Owners on camera, Channel 4 Four in a Bed',
    created_at: '2026-11-03T10:00:00Z',
  },
  {
    id: 'snap-group-account-1',
    account_id: 'group-account',
    checked_on: '2026-11-03',
    followers: 204,
    posts: 387,
    recent_likes: null,
    avg_recent_likes: null,
    notes: 'Mixes Maidstone and 1843 content',
    created_at: '2026-11-03T10:00:00Z',
  },
];

export function parseAverageLikes(recentLikes: string | null): number | null {
  if (!recentLikes) return null;
  const numbers = recentLikes
    .split(',')
    .map((s) => parseFloat(s.trim()))
    .filter((n) => !isNaN(n));
  if (numbers.length === 0) return null;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return Math.round((sum / numbers.length) * 10) / 10;
}

export function formatNumber(n: number | null | undefined): string {
  if (n === null || n === undefined) return 'Not checked';
  return n.toLocaleString('en-GB');
}

export function formatCompactNumber(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    return `${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}k`;
  }
  return n.toString();
}

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}
