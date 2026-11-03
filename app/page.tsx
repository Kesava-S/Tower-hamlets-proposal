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
} from 'lucide-react';

export default function ComparePage() {
  const [showDetails, setShowDetails] = useState(false);

  // Worked out numbers from data.ts
  const { minX, maxX } = getHeadlineMultipliers(benchmarkData);
  const sortedGroups = getSortedGroups(benchmarkData);
  const maxGroupFollowers = Math.max(...sortedGroups.map((g) => g.followers));
  const townComparisons = getTownComparisons(benchmarkData);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased selection:bg-[#E04F34] selection:text-white">
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-14 space-y-10 sm:space-y-14">
        {/* A. HEADLINE (top, full width) */}
        <header className="space-y-3.5">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
            <span>Hamlet Hotels</span>
            <span>•</span>
            <span>Social media compare</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
            Our competitors have <span className="text-[#16A34A]">{minX}x</span> to{' '}
            <span className="text-[#16A34A]">{maxX}x</span> more followers.
          </h1>

          <p className="text-lg font-semibold text-slate-700 sm:text-xl leading-snug">
            Here is how they do it,
            <br className="sm:hidden" /> and what we fix first.
          </p>

          <p className="text-xs font-medium text-slate-400">
            Instagram, checked {formatCheckedDate(benchmarkData.checkedOn)}.
          </p>
        </header>

        {/* B. THE RACE (horizontal bar chart, biggest first) */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm space-y-7">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
              Who&apos;s winning on Instagram
            </h2>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Group accounts
            </span>
          </div>

          <div className="space-y-6">
            {sortedGroups.map((group) => {
              const initial = group.name.charAt(0);
              const isUs = group.isUs;
              const pct = Math.max(5, Math.round((group.followers / maxGroupFollowers) * 100));

              return (
                <div key={group.handle} className="space-y-2">
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Initial in circle */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white shadow-xs ${
                          isUs ? 'bg-[#E04F34]' : 'bg-[#16A34A]'
                        }`}
                      >
                        {initial}
                      </span>

                      {/* Name linking to Instagram */}
                      <a
                        href={instagramUrl(group.handle)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-slate-600 truncate transition-colors text-base sm:text-lg"
                      >
                        <span className="truncate">{group.name}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-slate-300 group-hover:text-slate-600 shrink-0" />
                      </a>

                      {/* Us badge */}
                      {isUs && (
                        <span className="rounded-full bg-[#E04F34] px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-white">
                          Us
                        </span>
                      )}
                    </div>

                    {/* Number at the end (48px+ on desktop) */}
                    <div
                      className={`text-3xl sm:text-5xl font-black tracking-tight leading-none shrink-0 ${
                        isUs ? 'text-[#E04F34]' : 'text-[#16A34A]'
                      }`}
                    >
                      {formatFollowers(group.followers)}
                    </div>
                  </div>

                  {/* Horizontal Bar */}
                  <div className="h-4 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        isUs ? 'bg-[#E04F34]' : 'bg-[#16A34A]'
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
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
            {/* Tile 1: Book */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-800">
                <BookOpen className="h-6 w-6 text-[#16A34A]" />
              </div>
              <div className="mt-5">
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                  One clear story
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Bespoke: Distinctive hotels.
                  <br />Individual stories.
                </p>
              </div>
            </div>

            {/* Tile 2: Camera */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-800">
                <Camera className="h-6 w-6 text-[#16A34A]" />
              </div>
              <div className="mt-5">
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                  Real photos and videos
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Food, rooms, guests, drone shots.
                  <br />No text graphics.
                </p>
              </div>
            </div>

            {/* Tile 3: Rocket */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-800">
                <Rocket className="h-6 w-6 text-[#16A34A]" />
              </div>
              <div className="mt-5">
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                  Big campaigns
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Coaching Inn:
                  <br />giant duck toured 26 inns.
                </p>
              </div>
            </div>

            {/* Tile 4: Grid */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-800">
                <LayoutGrid className="h-6 w-6 text-[#16A34A]" />
              </div>
              <div className="mt-5">
                <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                  One page per hotel
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Hotels post,
                  <br />the group reposts the best.
                </p>
              </div>
            </div>
          </div>

          {/* Red strip under the tiles */}
          <div className="rounded-2xl bg-[#E04F34] px-5 py-3.5 text-center text-xs sm:text-sm font-bold text-white shadow-sm">
            Us today: 2 hotels have 2 pages each, mostly text graphics.
          </div>
        </section>

        {/* D. OUR HOTELS VS THE BEST IN TOWN (3 cards side by side) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
              Our hotels vs the best in town
            </h2>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Local matchup
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {townComparisons.map((item) => (
              <div
                key={item.town}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm"
              >
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    {item.town}
                  </h3>

                  {/* Two big numbers facing each other */}
                  <div className="mt-4 grid grid-cols-2 items-end gap-3 border-b border-slate-100 pb-5">
                    {/* Hamlet side */}
                    <div>
                      <p className="text-xs font-bold text-slate-700 truncate">
                        {item.hamlet.name}
                      </p>
                      <div className="text-4xl sm:text-5xl font-black text-[#E04F34] tracking-tight leading-none mt-2">
                        {formatFollowers(item.hamlet.followers)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E04F34]">
                        Hamlet
                      </span>
                    </div>

                    {/* Competitor side */}
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-700 truncate">
                        {item.competitor.name}
                      </p>
                      <div className="text-4xl sm:text-5xl font-black text-[#16A34A] tracking-tight leading-none mt-2">
                        {formatFollowers(item.competitor.followers)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Best in town
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gap line underneath */}
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-orange-50/80 border border-orange-200/60 px-4 py-2.5">
                  <span className="text-xs font-bold text-slate-600">Gap:</span>
                  <span className="text-base font-black text-[#E04F34]">
                    {item.gapMultiplier}x behind
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* E. FIX FIRST (3 big numbered steps, display only) */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
              Fix first
            </h2>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              Three clear steps to close the gap.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E04F34] text-lg font-black text-white shadow-xs">
                1
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  &ldquo;One page per hotel&rdquo;
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed">
                  merge the duplicate Carmichael
                  <br />and 1843 pages.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E04F34] text-lg font-black text-white shadow-xs">
                2
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  &ldquo;3 posts a week, real photos&rdquo;
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed">
                  one short video each week.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E04F34] text-lg font-black text-white shadow-xs">
                3
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  &ldquo;One campaign a quarter&rdquo;
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed">
                  start with a Hull, Reading
                  <br />and Kent city-break series.
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
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer"
            >
              <span>{showDetails ? 'Hide details' : 'Show details'}</span>
              {showDetails ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>

          {showDetails && (
            <div className="space-y-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900">
                  Complete social data audit
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Checked on {formatCheckedDate(benchmarkData.checkedOn)} on Instagram.
                </p>
              </div>

              {/* Table per town: Hull, Reading, Maidstone */}
              {(['Hull', 'Reading', 'Maidstone'] as const).map((town) => {
                const townHotels = benchmarkData.hotels.filter((h) => h.town === town);
                const bestFollowers = Math.max(...townHotels.map((h) => h.followers));

                return (
                  <div key={town} className="space-y-3">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
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
                              <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
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
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
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
                        <tr key={group.handle} className="hover:bg-slate-50/70 transition-colors">
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
