'use client';

import { ExternalLink, History, Trash2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SocialAccount, SocialSnapshot, formatNumber } from '@/lib/social-benchmark-data';

interface TownCardProps {
  town: string;
  hamletHotelName: string;
  accounts: SocialAccount[];
  snapshotsByAccount: Record<string, SocialSnapshot>;
  isGM: boolean;
  onOpenHistory: (account: SocialAccount) => void;
  onDeactivateAccount?: (accountId: string) => void;
}

export function TownCard({
  town,
  hamletHotelName,
  accounts,
  snapshotsByAccount,
  isGM,
  onOpenHistory,
  onDeactivateAccount,
}: TownCardProps) {
  // Find maximum followers in this town to calculate comparison bar
  const townAccounts = accounts.filter((a) => a.is_active && a.town.toLowerCase().includes(town.toLowerCase()));

  let maxFollowers = 1;
  townAccounts.forEach((acc) => {
    const snap = snapshotsByAccount[acc.id];
    if (snap && snap.followers > maxFollowers) {
      maxFollowers = snap.followers;
    }
  });

  // Identify who has the most followers in this town
  let bestAccountInTownId = '';
  let highestFollowers = -1;
  townAccounts.forEach((acc) => {
    const snap = snapshotsByAccount[acc.id];
    if (snap && snap.followers > highestFollowers) {
      highestFollowers = snap.followers;
      bestAccountInTownId = acc.id;
    }
  });

  // Sort order: Hamlet rows first (duplicates & primary), then competitors sorted by followers descending
  const sortedAccounts = [...townAccounts].sort((a, b) => {
    const aIsHamlet = a.kind === 'hamlet_hotel' || a.kind === 'hamlet_group';
    const bIsHamlet = b.kind === 'hamlet_hotel' || b.kind === 'hamlet_group';

    if (aIsHamlet && !bIsHamlet) return -1;
    if (!aIsHamlet && bIsHamlet) return 1;

    // Both are Hamlet or both are competitors: sort by followers descending
    const snapA = snapshotsByAccount[a.id]?.followers || 0;
    const snapB = snapshotsByAccount[b.id]?.followers || 0;
    return snapB - snapA;
  });

  return (
    <Card className="overflow-hidden">
      {/* Town Header */}
      <div className="border-b border-slate-100 bg-white px-6 py-4">
        <h2 className="text-lg font-bold text-slate-900">{town}</h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          Hamlet: <span className="font-semibold text-slate-800">{hamletHotelName}</span>
        </p>
      </div>

      {/* Desktop-first, sideways scroll on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <th className="px-6 py-3 min-w-[220px]">Hotel</th>
              <th className="px-4 py-3 min-w-[130px]">Followers</th>
              <th className="px-4 py-3 min-w-[90px]">Posts</th>
              <th className="px-4 py-3 min-w-[170px]">Likes on recent posts</th>
              <th className="px-4 py-3 min-w-[120px]">Badge</th>
              <th className="px-4 py-3 text-right min-w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sortedAccounts.map((account) => {
              const snap = snapshotsByAccount[account.id];
              const followers = snap ? snap.followers : 0;
              const posts = snap ? snap.posts : 0;
              const recentLikes = snap?.recent_likes;
              const pct = maxFollowers > 0 ? Math.min(100, Math.max(3, Math.round((followers / maxFollowers) * 100))) : 0;

              // Determine Badge
              let badgeElement = null;
              if (account.is_duplicate) {
                badgeElement = <Badge tone="amber">Duplicate</Badge>;
              } else if (account.kind === 'hamlet_hotel' || account.kind === 'hamlet_group') {
                badgeElement = <Badge tone="blue">Hamlet</Badge>;
              } else if (account.id === bestAccountInTownId) {
                badgeElement = <Badge tone="green">Best in town</Badge>;
              } else {
                badgeElement = <Badge tone="neutral">Competitor</Badge>;
              }

              const isHamletRow = account.kind === 'hamlet_hotel' || account.kind === 'hamlet_group';

              return (
                <tr
                  key={account.id}
                  className={`group transition-colors hover:bg-slate-50/70 ${
                    isHamletRow ? 'bg-brand-soft/20' : ''
                  }`}
                >
                  {/* Hotel Column */}
                  <td className="px-6 py-3.5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                        {account.name}
                        {account.notes && (
                          <span
                            className="inline-block max-w-[150px] truncate text-[11px] font-normal text-slate-400"
                            title={account.notes}
                          >
                            ({account.notes})
                          </span>
                        )}
                      </span>
                      <a
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-brand hover:underline mt-0.5"
                      >
                        @{account.handle}
                        <ExternalLink className="h-3 w-3 opacity-70" />
                      </a>
                    </div>
                  </td>

                  {/* Followers Column with comparison bar */}
                  <td className="px-4 py-3.5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900">{formatNumber(followers)}</span>
                      {/* Thin comparison bar */}
                      <div className="mt-1.5 h-1.5 w-24 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full transition-all ${
                            isHamletRow ? 'bg-brand' : 'bg-slate-400'
                          }`}
                          style={{ width: `${pct}%` }}
                          title={`${pct}% of top account in ${town}`}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Posts Column */}
                  <td className="px-4 py-3.5 text-slate-700 font-medium">
                    {formatNumber(posts)}
                  </td>

                  {/* Likes on recent posts Column */}
                  <td className="px-4 py-3.5">
                    {recentLikes ? (
                      <span className="text-xs text-slate-700 font-medium">{recentLikes}</span>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Not checked</span>
                    )}
                    {snap?.avg_recent_likes !== null && snap?.avg_recent_likes !== undefined && (
                      <span className="ml-1.5 text-[11px] text-slate-500 font-normal">
                        (avg {snap.avg_recent_likes})
                      </span>
                    )}
                  </td>

                  {/* Badge Column */}
                  <td className="px-4 py-3.5">
                    {badgeElement}
                  </td>

                  {/* Actions Column */}
                  <td className="px-4 py-3.5 text-right">
                    <div className="inline-flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenHistory(account)}
                        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-brand transition-colors"
                        title="View past snapshots"
                      >
                        <History className="h-3.5 w-3.5" />
                        History
                      </button>
                      {isGM && onDeactivateAccount && (
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Remove ${account.name} (@${account.handle}) from benchmark?`)) {
                              onDeactivateAccount(account.id);
                            }
                          }}
                          className="rounded-md p-1 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                          title="Remove account"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
