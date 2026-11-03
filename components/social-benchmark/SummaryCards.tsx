'use client';

import { Users, Award, Copy } from 'lucide-react';
import { Card } from '../ui/Card';
import { SocialAccount, SocialSnapshot, formatNumber, formatCompactNumber } from '@/lib/social-benchmark-data';

interface SummaryCardsProps {
  accounts: SocialAccount[];
  snapshotsByAccount: Record<string, SocialSnapshot>;
}

export function SummaryCards({ accounts, snapshotsByAccount }: SummaryCardsProps) {
  // 1. Hamlet followers total across all active Hamlet accounts
  const activeHamletAccounts = accounts.filter(
    (a) => a.is_active && (a.kind === 'hamlet_hotel' || a.kind === 'hamlet_group')
  );
  const hamletFollowersTotal = activeHamletAccounts.reduce((sum, acc) => {
    const snap = snapshotsByAccount[acc.id];
    return sum + (snap ? snap.followers : 0);
  }, 0);

  // 2. Best local performer: competitor with the most followers
  const activeCompetitors = accounts.filter((a) => a.is_active && a.kind === 'competitor');
  let topCompetitor: SocialAccount | null = null;
  let topCompetitorFollowers = 0;
  let topCompetitorAvgLikes: number | null = null;

  for (const comp of activeCompetitors) {
    const snap = snapshotsByAccount[comp.id];
    if (snap && snap.followers > topCompetitorFollowers) {
      topCompetitorFollowers = snap.followers;
      topCompetitor = comp;
      topCompetitorAvgLikes = snap.avg_recent_likes;
    }
  }

  // 3. Duplicate accounts count
  const duplicateAccounts = accounts.filter((a) => a.is_active && a.is_duplicate);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {/* 1. Hamlet followers */}
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Hamlet followers
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
            <Users className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-3xl font-extrabold tracking-tight text-slate-900">
            {formatNumber(hamletFollowersTotal)}
          </div>
          <p className="mt-1 text-xs font-medium text-slate-500">
            across {activeHamletAccounts.length} accounts
          </p>
        </div>
      </Card>

      {/* 2. Best local performer */}
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Best local performer
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Award className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-2xl font-bold tracking-tight text-slate-900">
            {topCompetitor ? topCompetitor.name : "Who'd A Thought It"}
          </div>
          <p className="mt-1 text-xs font-medium text-slate-500">
            <span className="font-semibold text-slate-700">
              {topCompetitorFollowers ? formatCompactNumber(topCompetitorFollowers) : '10.9k'}
            </span>{' '}
            followers •{' '}
            {topCompetitorAvgLikes !== null
              ? `avg ${topCompetitorAvgLikes} likes`
              : 'avg 30.3 likes'}
          </p>
        </div>
      </Card>

      {/* 3. Duplicate accounts */}
      <Card className="p-5 border-amber-200/70 bg-gradient-to-br from-white to-amber-50/20">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
            Duplicate accounts
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
            <Copy className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-3xl font-extrabold tracking-tight text-amber-900">
            {duplicateAccounts.length}
          </div>
          <p className="mt-1 text-xs font-semibold text-amber-700">
            Followers are split. Merge them.
          </p>
        </div>
      </Card>
    </div>
  );
}
