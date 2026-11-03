'use client';

import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { SocialAccount, SocialSnapshot, formatNumber, formatDate } from '@/lib/social-benchmark-data';
import { ExternalLink, Calendar, Users, FileText, Heart } from 'lucide-react';

interface HistoryModalProps {
  account: SocialAccount | null;
  snapshots: SocialSnapshot[];
  open: boolean;
  onClose: () => void;
}

export function HistoryModal({ account, snapshots, open, onClose }: HistoryModalProps) {
  if (!account) return null;

  // Filter snapshots for this account, newest first
  const accountSnapshots = snapshots
    .filter((s) => s.account_id === account.id)
    .sort((a, b) => new Date(b.checked_on).getTime() - new Date(a.checked_on).getTime());

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center gap-2">
          <span>Snapshot history:</span>
          <span className="text-brand font-bold">{account.name}</span>
        </div>
      }
      description={
        <div className="flex items-center gap-2 mt-0.5">
          <span>@{account.handle}</span>
          <span>•</span>
          <span>{account.town}</span>
          <a
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand hover:underline font-normal text-xs"
          >
            Instagram <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      }
      footer={
        <Button variant="secondary" size="sm" onClick={onClose}>
          Close
        </Button>
      }
    >
      <div className="space-y-4">
        {accountSnapshots.length === 0 ? (
          <p className="text-sm text-slate-500 py-6 text-center">No recorded snapshots yet for this account.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
                <tr>
                  <th className="px-4 py-3">Checked date</th>
                  <th className="px-4 py-3">Followers</th>
                  <th className="px-4 py-3">Posts</th>
                  <th className="px-4 py-3">Recent likes</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {accountSnapshots.map((snap) => (
                  <tr key={snap.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {formatDate(snap.checked_on)}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-brand" />
                        {formatNumber(snap.followers)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-slate-400" />
                        {formatNumber(snap.posts)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {snap.recent_likes ? (
                        <div>
                          <span>{snap.recent_likes}</span>
                          {snap.avg_recent_likes !== null && (
                            <span className="text-[11px] text-slate-500 block">
                              avg: {snap.avg_recent_likes}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-slate-400 italic">Not checked</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-500 italic max-w-xs truncate">
                      {snap.notes || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Modal>
  );
}
