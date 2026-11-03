'use client';

import { ExternalLink, History, Building2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SocialAccount, SocialSnapshot, formatNumber } from '@/lib/social-benchmark-data';

interface GroupCardProps {
  account: SocialAccount;
  snapshot?: SocialSnapshot;
  onOpenHistory: (account: SocialAccount) => void;
}

export function GroupCard({ account, snapshot, onOpenHistory }: GroupCardProps) {
  const followers = snapshot ? snapshot.followers : 0;
  const posts = snapshot ? snapshot.posts : 0;

  return (
    <Card className="p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Group account
              </span>
              <Badge tone="blue">Hamlet</Badge>
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">{account.name}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand hover:underline font-medium"
              >
                @{account.handle}
                <ExternalLink className="h-3 w-3" />
              </a>
              {account.notes && (
                <span className="text-slate-500 italic">• {account.notes}</span>
              )}
            </div>
          </div>
        </div>

        {/* Stats on the right */}
        <div className="flex items-center gap-6 border-t border-slate-100 pt-3 sm:border-t-0 sm:pt-0">
          <div>
            <div className="text-xs font-medium text-slate-500">Followers</div>
            <div className="text-lg font-bold text-slate-900">{formatNumber(followers)}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-500">Posts</div>
            <div className="text-lg font-bold text-slate-900">{formatNumber(posts)}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-500">Likes (recent)</div>
            <div className="text-xs font-medium text-slate-400 italic">Not checked</div>
          </div>
          <div>
            <button
              type="button"
              onClick={() => onOpenHistory(account)}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand transition-colors"
            >
              <History className="h-3.5 w-3.5" />
              History
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
