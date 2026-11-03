'use client';

import { useState } from 'react';
import {
  benchmarkData,
  instagramUrl,
  formatFollowers,
  formatCheckedDate,
  getHeadlineMultipliers,
  getSortedGroups,
  getTownComparisons,
  HotelAccount,
} from '@/data';
import {
  BookOpen,
  Camera,
  Rocket,
  LayoutGrid,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MapPin,
  AlertTriangle,
  Award,
  TrendingDown,
  ArrowUpRight,
} from 'lucide-react';

export default function ComparePage() {
  const [showDetails, setShowDetails] = useState(false);

  // Worked out numbers from data.ts
  const { minX, maxX } = getHeadlineMultipliers(benchmarkData);
  const sortedGroups = getSortedGroups(benchmarkData);
  const maxGroupFollowers = Math.max(...sortedGroups.map((g) => g.followers));
  const townComparisons = getTownComparisons(benchmarkData);

  return (
    <div className="min-h-screen bg-mesh text-slate-900 pb-20 selection:bg-[#E04F34] selection:text-white">
      {/* Executive Frame Top Bar */}
      <nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E04F34] text-xs font-black text-white shadow-xs">
              H
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold tracking-tight text-slate-900">
                  Hamlet Hotels
                </span>
                <span className="hidden sm:inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Owner briefing
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200/80 px-2.5 py-1 text-[11px] font-bold text-[#E04F34]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E04F34] animate-pulse" />
              Social media compare
            </span>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12 space-y-12 sm:space-y-16">
        {/* A. HEADLINE (top, full width) */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 shadow-xs text-[11px] font-bold uppercase tracking-wider text-slate-600">
            <span className="h-2 w-2 rounded-full bg-[#E04F34]" />
            <span>Executive benchmark</span>
            <span className="text-slate-300">•</span>
            <span>Instagram</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.08] max-w-4xl">
            Our competitors have{' '}
            <span className="inline-block text-[#16A34A] bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-2xl">
              {minX}x
            </span>{' '}
            to{' '}
            <span className="inline-block text-[#16A34A] bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-2xl">
              {maxX}x
            </span>{' '}
            more followers.
          </h1>

          <p className="text-lg font-bold text-slate-700 sm:text-2xl leading-snug">
            Here is how they do it,
            <br />
            and what we fix first.
          </p>

          <p className="text-xs font-semibold text-slate-400">
            Instagram, checked {formatCheckedDate(benchmarkData.checkedOn)}.
          </p>
        </header>

        {/* B. THE RACE (horizontal bar chart, biggest first) */}
        <section className="executive-card rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-500" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Who&apos;s winning on Instagram
                </h2>
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                Hotel group accounts ranked by total followers
              </p>
            </div>
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 self-start sm:self-auto">
              Leaderboard
            </span>
          </div>

          <div className="space-y-6">
            {sortedGroups.map((group, index) => {
              const initial = group.name.charAt(0);
              const isUs = group.isUs;
              const pct = Math.max(6, Math.round((group.followers / maxGroupFollowers) * 100));
              const rank = index + 1;

              return (
                <div
                  key={group.handle}
                  className={`rounded-2xl p-4 sm:p-5 transition-all ${
                    isUs
                      ? 'bg-red-50/60 border-2 border-[#E04F34]/40 shadow-xs'
                      : 'bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Rank tag */}
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                          isUs
                            ? 'bg-[#E04F34] text-white'
                            : rank === 1
                            ? 'bg-amber-400 text-amber-950 shadow-xs'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        #{rank}
                      </span>

                      {/* Initial in circle */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black text-white shadow-xs ${
                          isUs ? 'bg-[#E04F34]' : 'bg-[#16A34A]'
                        }`}
                      >
                        {initial}
                      </span>

                      {/* Name linking to Instagram */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <a
                            href={instagramUrl(group.handle)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 font-extrabold text-slate-900 hover:text-slate-600 text-base sm:text-lg truncate transition-colors"
                          >
                            <span className="truncate">{group.name}</span>
                            <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 shrink-0" />
                          </a>

                          {/* Us badge */}
                          {isUs && (
                            <span className="rounded-full bg-[#E04F34] px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-white shadow-xs">
                              Us
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-500 font-medium">
                          @{group.handle}
                        </span>
                      </div>
                    </div>

                    {/* Number at the end (48px+ on desktop) */}
                    <div className="text-right shrink-0">
                      <div
                        className={`text-3xl sm:text-5xl font-black tracking-tight leading-none ${
                          isUs ? 'text-[#E04F34]' : 'text-[#16A34A]'
                        }`}
                      >
                        {formatFollowers(group.followers)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Followers
                      </span>
                    </div>
                  </div>

                  {/* Horizontal Bar */}
                  <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200/80 p-0.5 shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        isUs
                          ? 'bg-gradient-to-r from-[#E04F34] to-[#F06A52] shadow-sm'
                          : 'bg-gradient-to-r from-[#16A34A] to-[#22C55E] shadow-sm'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* C. HOW THEY WIN (4 tiles, 2x2 on mobile) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              How they win
            </h2>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              4 Playbooks
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-4">
            {/* Tile 1: Book */}
            <div className="executive-card flex flex-col justify-between rounded-3xl p-5 sm:p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#16A34A] border border-emerald-200/60 shadow-xs">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-black text-slate-900 leading-snug">
                  One clear story
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Bespoke: Distinctive hotels.
                  <br />
                  Individual stories.
                </p>
              </div>
            </div>

            {/* Tile 2: Camera */}
            <div className="executive-card flex flex-col justify-between rounded-3xl p-5 sm:p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#16A34A] border border-emerald-200/60 shadow-xs">
                  <Camera className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-black text-slate-900 leading-snug">
                  Real photos and videos
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Food, rooms, guests, drone shots.
                  <br />
                  No text graphics.
                </p>
              </div>
            </div>

            {/* Tile 3: Rocket */}
            <div className="executive-card flex flex-col justify-between rounded-3xl p-5 sm:p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#16A34A] border border-emerald-200/60 shadow-xs">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-black text-slate-900 leading-snug">
                  Big campaigns
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Coaching Inn:
                  <br />
                  giant duck toured 26 inns.
                </p>
              </div>
            </div>

            {/* Tile 4: Grid */}
            <div className="executive-card flex flex-col justify-between rounded-3xl p-5 sm:p-6">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#16A34A] border border-emerald-200/60 shadow-xs">
                  <LayoutGrid className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-black text-slate-900 leading-snug">
                  One page per hotel
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Hotels post,
                  <br />
                  the group reposts the best.
                </p>
              </div>
            </div>
          </div>

          {/* Red strip under the tiles */}
          <div className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#E04F34] px-5 py-3.5 text-center text-xs sm:text-sm font-black text-white shadow-md">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-200" />
            <span>
              Us today: 5 hotels, 7 pages,
              <br className="sm:hidden" /> mostly text graphics.
              <br className="hidden sm:inline" /> Thurrock still shows
              <br className="sm:hidden" /> the Best Western logo.
            </span>
          </div>
        </section>

        {/* D. OUR HOTELS VS THE BEST IN TOWN (5 cards in a 3 + 2 grid, stacked on mobile) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Our hotels vs the best in town
              </h2>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Head-to-head local follower comparison across 5 towns
              </p>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              5 Towns
            </span>
          </div>

          {/* 3 + 2 Grid: 6-column layout on desktop (first 3 span 2, next 2 span 3) */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
            {townComparisons.map((item, index) => {
              // 3 in first row (span 2 each = 6), 2 in second row (span 3 each = 6)
              const colSpanClass =
                index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

              return (
                <div
                  key={item.town}
                  className={`executive-card flex flex-col justify-between rounded-3xl p-6 sm:p-7 ${colSpanClass}`}
                >
                  <div>
                    {/* Town header badge */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                          {item.town}
                        </h3>
                      </div>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                        Local matchup
                      </span>
                    </div>

                    {/* Two big numbers facing each other */}
                    <div className="mt-5 grid grid-cols-2 items-start gap-2 relative">
                      {/* VS Badge in center */}
                      <div className="absolute left-1/2 top-8 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white border border-slate-200 text-[10px] font-black text-slate-400 shadow-xs z-10">
                        VS
                      </div>

                      {/* Hamlet side */}
                      <div className="rounded-2xl bg-red-50/50 border border-red-100 p-3.5 text-left">
                        <span className="inline-block rounded-md bg-[#E04F34] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                          Hamlet
                        </span>
                        <p
                          className="text-xs font-bold text-slate-900 truncate mt-1.5"
                          title={item.hamlet.name}
                        >
                          {item.hamlet.name}
                        </p>
                        <div className="text-4xl sm:text-5xl font-black text-[#E04F34] tracking-tight leading-none mt-2">
                          {formatFollowers(item.hamlet.followers)}
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold mt-1 block">
                          followers
                        </span>
                      </div>

                      {/* Competitor side */}
                      <div className="rounded-2xl bg-emerald-50/50 border border-emerald-100 p-3.5 text-right">
                        <span className="inline-block rounded-md bg-[#16A34A] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                          Best in town
                        </span>
                        <p
                          className="text-xs font-bold text-slate-900 truncate mt-1.5"
                          title={item.competitor.name}
                        >
                          {item.competitor.name}
                        </p>
                        <div className="text-4xl sm:text-5xl font-black text-[#16A34A] tracking-tight leading-none mt-2">
                          {formatFollowers(item.competitor.followers)}
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold mt-1 block">
                          followers
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Gap banner underneath */}
                  <div className="mt-5 rounded-2xl bg-[#E04F34]/10 border border-[#E04F34]/30 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <TrendingDown className="h-4 w-4 text-[#E04F34]" />
                      <span className="text-xs font-extrabold text-slate-700">
                        Follower gap:
                      </span>
                    </div>
                    <span className="text-base font-black text-[#E04F34] tracking-tight">
                      {item.gapMultiplier}x behind
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* E. FIX FIRST (3 big numbered steps, display only) */}
        <section className="executive-card rounded-3xl p-6 sm:p-10 space-y-7">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Fix first
              </h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                Three clear steps to close the gap.
              </p>
            </div>
            <span className="rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-black text-[#E04F34]">
              Priority plan
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-4 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E04F34] text-xl font-black text-white shadow-sm">
                  1
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Step 1
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  &ldquo;One page per hotel&rdquo;
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-semibold leading-relaxed">
                  merge the duplicate Carmichael
                  <br />
                  and 1843 pages.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-4 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E04F34] text-xl font-black text-white shadow-sm">
                  2
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Step 2
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  &ldquo;3 posts a week, real photos&rdquo;
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-semibold leading-relaxed">
                  one short video each week.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-4 hover:border-slate-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E04F34] text-xl font-black text-white shadow-sm">
                  3
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Step 3
                </span>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  &ldquo;One campaign a quarter&rdquo;
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-semibold leading-relaxed">
                  start with a Hull, Reading
                  <br />
                  and Kent city-break series.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* F. DETAILS (collapsed, "Show details" button) */}
        <section className="space-y-6 pt-2 pb-14">
          <div className="text-center">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-xs font-black uppercase tracking-wider text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-400 hover:shadow transition-all cursor-pointer"
            >
              <span>{showDetails ? 'Hide details' : 'Show details'}</span>
              {showDetails ? (
                <ChevronUp className="h-4 w-4 text-slate-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-500" />
              )}
            </button>
          </div>

          {showDetails && (
            <div className="executive-card space-y-8 rounded-3xl p-6 sm:p-10">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900">
                  Complete social data audit
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Checked on {formatCheckedDate(benchmarkData.checkedOn)} on Instagram.
                </p>
              </div>

              {/* Table per town: Hull, Reading, Maidstone, Kidderminster, Thurrock */}
              {(
                ['Hull', 'Reading', 'Maidstone', 'Kidderminster', 'Thurrock'] as const
              ).map((town) => {
                const townHotels = benchmarkData.hotels.filter(
                  (h) => h.town === town
                );
                const bestFollowers = Math.max(
                  ...townHotels.map((h) => h.followers)
                );

                return (
                  <div key={town} className="space-y-3">
                    <h4 className="text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      {town} hotels
                    </h4>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200">
                      <table className="w-full text-left text-xs">
                        <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
                          <tr>
                            <th className="px-4 py-3 min-w-[170px]">Hotel</th>
                            <th className="px-3 py-3 min-w-[130px]">@handle</th>
                            <th className="px-3 py-3 min-w-[90px]">Followers</th>
                            <th className="px-3 py-3 min-w-[70px]">Posts</th>
                            <th className="px-3 py-3 min-w-[120px]">Recent likes</th>
                            <th className="px-3 py-3 min-w-[100px]">Badge</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {townHotels.map((hotel, idx) => {
                            return (
                              <tr
                                key={idx}
                                className="hover:bg-slate-50/70 transition-colors"
                              >
                                <td className="px-4 py-3 font-bold text-slate-900">
                                  {hotel.name}
                                </td>
                                <td className="px-3 py-3">
                                  <a
                                    href={instagramUrl(hotel.handle)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-900 underline"
                                  >
                                    @{hotel.handle}
                                    <ExternalLink className="h-3 w-3 opacity-60" />
                                  </a>
                                </td>
                                <td className="px-3 py-3 font-bold text-slate-900">
                                  {formatFollowers(hotel.followers)}
                                </td>
                                <td className="px-3 py-3 text-slate-600 font-medium">
                                  {formatFollowers(hotel.posts)}
                                </td>
                                <td className="px-3 py-3 text-slate-600">
                                  {hotel.recentLikes}
                                </td>
                                <td className="px-3 py-3">
                                  {renderBadge(hotel, bestFollowers)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}

              {/* Group table */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">
                  Group accounts
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
                      <tr>
                        <th className="px-4 py-3 min-w-[170px]">Group</th>
                        <th className="px-3 py-3 min-w-[130px]">@handle</th>
                        <th className="px-3 py-3 min-w-[90px]">Followers</th>
                        <th className="px-3 py-3 min-w-[70px]">Posts</th>
                        <th className="px-3 py-3 min-w-[100px]">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {benchmarkData.groups.map((group) => (
                        <tr
                          key={group.handle}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {group.name}
                          </td>
                          <td className="px-3 py-3">
                            <a
                              href={instagramUrl(group.handle)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-900 underline"
                            >
                              @{group.handle}
                              <ExternalLink className="h-3 w-3 opacity-60" />
                            </a>
                          </td>
                          <td className="px-3 py-3 font-bold text-slate-900">
                            {formatFollowers(group.followers)}
                          </td>
                          <td className="px-3 py-3 text-slate-600 font-medium">
                            {formatFollowers(group.posts)}
                          </td>
                          <td className="px-3 py-3">
                            {group.isUs ? (
                              <span className="inline-flex items-center rounded-full bg-[#E04F34]/10 border border-[#E04F34]/30 px-2.5 py-0.5 text-[11px] font-bold text-[#E04F34]">
                                Hamlet
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                                Competitor
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5 pt-4 text-xs text-slate-500 border-t border-slate-100">
                <p>• Likes from 3 recent posts, read by hand.</p>
                <p>
                  • Bespoke Hotels announced it is closing the Chester Grosvenor (BBC, Mar 2026). Use as a social media example only.
                </p>
                <p>
                  • Orsett Hall is closed for refurbishment (per its Instagram).
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function renderBadge(hotel: HotelAccount, bestFollowers: number) {
  if (hotel.type === 'hamlet, duplicate') {
    return (
      <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[10px] font-bold text-amber-800">
        Duplicate
      </span>
    );
  }
  if (hotel.type === 'hamlet') {
    return (
      <span className="inline-flex items-center rounded-full bg-[#E04F34]/10 border border-[#E04F34]/30 px-2.5 py-0.5 text-[10px] font-bold text-[#E04F34]">
        Hamlet
      </span>
    );
  }
  if (hotel.followers === bestFollowers) {
    return (
      <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
        Best in town
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-medium text-slate-600">
      Competitor
    </span>
  );
}
