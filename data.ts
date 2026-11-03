export interface SocialGroup {
  name: string;
  handle: string;
  isUs: boolean;
  followers: number;
  posts: number;
}

export type HotelType = 'hamlet' | 'hamlet, duplicate' | 'competitor';

export interface HotelAccount {
  name: string;
  town: 'Hull' | 'Reading' | 'Maidstone';
  handle: string;
  type: HotelType;
  followers: number;
  posts: number;
  recentLikes: string;
}

export interface BenchmarkData {
  checkedOn: string;
  groups: SocialGroup[];
  hotels: HotelAccount[];
}

export const benchmarkData: BenchmarkData = {
  checkedOn: '2026-11-03',
  groups: [
    {
      name: 'Hamlet Hotels',
      handle: 'hamlet_hotels',
      isUs: true,
      followers: 204,
      posts: 387,
    },
    {
      name: 'Bespoke Hotels',
      handle: 'bespokehotels',
      isUs: false,
      followers: 13600,
      posts: 630,
    },
    {
      name: 'The Inn Collection Group',
      handle: 'theinncollectiongroup',
      isUs: false,
      followers: 13300,
      posts: 1357,
    },
    {
      name: 'Coaching Inn Group',
      handle: 'coachinginnsuk',
      isUs: false,
      followers: 2250,
      posts: 840,
    },
  ],
  hotels: [
    {
      name: 'The Carmichael',
      town: 'Hull',
      handle: 'carmichaelhotel',
      type: 'hamlet, duplicate',
      followers: 10,
      posts: 12,
      recentLikes: '-',
    },
    {
      name: 'The Carmichael',
      town: 'Hull',
      handle: 'carmichael_hotel',
      type: 'hamlet',
      followers: 6,
      posts: 7,
      recentLikes: '0 to 3',
    },
    {
      name: 'Hideout Hotel',
      town: 'Hull',
      handle: 'hideout_hotel',
      type: 'competitor',
      followers: 2831,
      posts: 821,
      recentLikes: '2, 4, 16',
    },
    {
      name: 'Kingston Theatre Hotel',
      town: 'Hull',
      handle: 'kingstontheatrehotel',
      type: 'competitor',
      followers: 1115,
      posts: 455,
      recentLikes: '9, 14, 6',
    },
    {
      name: 'Hotel 1843',
      town: 'Reading',
      handle: '1843reading',
      type: 'hamlet, duplicate',
      followers: 292,
      posts: 3,
      recentLikes: '-',
    },
    {
      name: 'Hotel 1843',
      town: 'Reading',
      handle: '1843.reading',
      type: 'hamlet',
      followers: 61,
      posts: 30,
      recentLikes: '1 to 10',
    },
    {
      name: 'The Roseate Reading',
      town: 'Reading',
      handle: 'roseatereading',
      type: 'competitor',
      followers: 5067,
      posts: 1739,
      recentLikes: '12, 29, 8',
    },
    {
      name: 'The Market House',
      town: 'Reading',
      handle: 'themarkethousereading',
      type: 'competitor',
      followers: 4210,
      posts: 859,
      recentLikes: 'about 5 to 10',
    },
    {
      name: 'Hamlet Hotels Maidstone',
      town: 'Maidstone',
      handle: 'hamlet_hotels_maidstone',
      type: 'hamlet',
      followers: 220,
      posts: 124,
      recentLikes: '0 to 1',
    },
    {
      name: "Who'd A Thought It",
      town: 'Maidstone',
      handle: 'whodathoughtit',
      type: 'competitor',
      followers: 10900,
      posts: 796,
      recentLikes: '22, 48, 21',
    },
    {
      name: 'Stone Court House',
      town: 'Maidstone',
      handle: 'stonecourthouse',
      type: 'competitor',
      followers: 819,
      posts: 269,
      recentLikes: '30, 10',
    },
  ],
};

// URL builder for Instagram
export function instagramUrl(handle: string): string {
  return `https://www.instagram.com/${handle}/`;
}

// Thousands separator formatter (e.g. 10,900)
export function formatFollowers(num: number): string {
  return num.toLocaleString('en-GB');
}

// Format date into human UK string: "3 Nov 2026"
export function formatCheckedDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return '3 Nov 2026';
  }
}

// Worked out calculations for Section A (Headline)
export function getHeadlineMultipliers(data: BenchmarkData) {
  const us = data.groups.find((g) => g.isUs);
  const competitors = data.groups.filter((g) => !g.isUs);
  if (!us || competitors.length === 0) return { minX: 10, maxX: 65 };

  const compFollowers = competitors.map((g) => g.followers);
  const minComp = Math.min(...compFollowers);
  const maxComp = Math.max(...compFollowers);

  // Smallest to largest competitor group divided by Hamlet group
  // 2250 / 204 = 11.02 -> rounded to 10x
  // 13600 / 204 = 66.66 -> rounded to 65x (nearest 5)
  const minX = Math.round(minComp / us.followers / 5) * 5;
  const maxX = Math.round(maxComp / us.followers / 5) * 5;

  return { minX, maxX };
}

// Worked out sorted groups for Section B (The Race)
export function getSortedGroups(data: BenchmarkData) {
  return [...data.groups].sort((a, b) => b.followers - a.followers);
}

export interface TownComparison {
  town: 'Hull' | 'Reading' | 'Maidstone';
  hamlet: HotelAccount;
  competitor: HotelAccount;
  gapMultiplier: number;
}

// Worked out town comparisons for Section D
export function getTownComparisons(data: BenchmarkData): TownComparison[] {
  const towns: ('Hull' | 'Reading' | 'Maidstone')[] = ['Hull', 'Reading', 'Maidstone'];

  return towns.map((town) => {
    const townHotels = data.hotels.filter((h) => h.town === town);

    // Each town's Hamlet account with the most followers
    const hamletHotels = townHotels
      .filter((h) => h.type === 'hamlet' || h.type === 'hamlet, duplicate')
      .sort((a, b) => b.followers - a.followers);
    const topHamlet = hamletHotels[0];

    // Competitor with the most followers
    const competitors = townHotels
      .filter((h) => h.type === 'competitor')
      .sort((a, b) => b.followers - a.followers);
    const topCompetitor = competitors[0];

    // Gap = competitor ÷ Hamlet, rounded
    const gapMultiplier = topHamlet && topCompetitor && topHamlet.followers > 0
      ? Math.round(topCompetitor.followers / topHamlet.followers)
      : 0;

    return {
      town,
      hamlet: topHamlet,
      competitor: topCompetitor,
      gapMultiplier,
    };
  });
}
