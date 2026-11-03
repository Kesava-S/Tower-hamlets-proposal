'use client';

import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  SocialAccount,
  SocialSnapshot,
  parseAverageLikes,
} from '@/lib/social-benchmark-data';
import { Calendar, Save } from 'lucide-react';

interface UpdateNumbersModalProps {
  open: boolean;
  onClose: () => void;
  accounts: SocialAccount[];
  latestSnapshotsByAccount: Record<string, SocialSnapshot>;
  onSaveSnapshots: (newSnapshots: SocialSnapshot[]) => void;
}

export function UpdateNumbersModal({
  open,
  onClose,
  accounts,
  latestSnapshotsByAccount,
  onSaveSnapshots,
}: UpdateNumbersModalProps) {
  // Date defaults to today
  const [checkedOn, setCheckedOn] = useState<string>('2026-11-03');

  // Form rows for each active account
  const activeAccounts = accounts.filter((a) => a.is_active);

  // Initialize input state with latest values
  const [formData, setFormData] = useState<
    Record<
      string,
      {
        followers: number;
        posts: number;
        recent_likes: string;
      }
    >
  >(() => {
    const initial: Record<string, { followers: number; posts: number; recent_likes: string }> = {};
    activeAccounts.forEach((acc) => {
      const snap = latestSnapshotsByAccount[acc.id];
      initial[acc.id] = {
        followers: snap ? snap.followers : 0,
        posts: snap ? snap.posts : 0,
        recent_likes: snap?.recent_likes || '',
      };
    });
    return initial;
  });

  const handleInputChange = (
    accountId: string,
    field: 'followers' | 'posts' | 'recent_likes',
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [accountId]: {
        ...prev[accountId],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    const newSnapshots: SocialSnapshot[] = activeAccounts.map((acc) => {
      const row = formData[acc.id] || {
        followers: 0,
        posts: 0,
        recent_likes: '',
      };
      const recentLikesText = row.recent_likes.trim() || null;
      const avgLikes = parseAverageLikes(recentLikesText);

      return {
        id: `snap-${acc.id}-${checkedOn}-${Date.now().toString().slice(-4)}`,
        account_id: acc.id,
        checked_on: checkedOn,
        followers: Number(row.followers) || 0,
        posts: Number(row.posts) || 0,
        recent_likes: recentLikesText,
        avg_recent_likes: avgLikes,
        notes: acc.notes || null,
        created_at: new Date().toISOString(),
      };
    });

    onSaveSnapshots(newSnapshots);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="xl"
      title="Update social benchmark numbers"
      description="Record a new benchmark snapshot for all active accounts. Past snapshots are preserved."
      footer={
        <div className="flex items-center justify-end gap-3">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<Save className="h-4 w-4" />}
            onClick={handleSave}
          >
            Save all snapshots
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Date Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200">
          <div>
            <label htmlFor="checked_on" className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Snapshot Date
            </label>
            <p className="text-xs text-slate-500">Date these numbers were recorded on Instagram</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-slate-400" />
            <input
              id="checked_on"
              type="date"
              value={checkedOn}
              onChange={(e) => setCheckedOn(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
        </div>

        {/* Accounts Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-3 min-w-[200px]">Hotel & Town</th>
                <th className="px-4 py-3 min-w-[120px]">Followers</th>
                <th className="px-4 py-3 min-w-[100px]">Posts</th>
                <th className="px-4 py-3 min-w-[180px]">Likes on recent posts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {activeAccounts.map((acc) => {
                const values = formData[acc.id] || {
                  followers: 0,
                  posts: 0,
                  recent_likes: '',
                };

                return (
                  <tr key={acc.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-slate-900">{acc.name}</span>
                          {acc.is_duplicate && <Badge tone="amber">Duplicate</Badge>}
                          {!acc.is_duplicate &&
                            (acc.kind === 'hamlet_hotel' || acc.kind === 'hamlet_group') && (
                              <Badge tone="blue">Hamlet</Badge>
                            )}
                        </div>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {acc.town} • @{acc.handle}
                        </span>
                      </div>
                    </td>

                    {/* Followers Input */}
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        min="0"
                        value={values.followers}
                        onChange={(e) =>
                          handleInputChange(acc.id, 'followers', parseInt(e.target.value) || 0)
                        }
                        className="w-full rounded-md border border-slate-300 px-2.5 py-1 text-xs text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand font-medium"
                      />
                    </td>

                    {/* Posts Input */}
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        min="0"
                        value={values.posts}
                        onChange={(e) =>
                          handleInputChange(acc.id, 'posts', parseInt(e.target.value) || 0)
                        }
                        className="w-full rounded-md border border-slate-300 px-2.5 py-1 text-xs text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand font-medium"
                      />
                    </td>

                    {/* Recent Likes Input */}
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        placeholder="e.g. 22, 48, 21"
                        value={values.recent_likes}
                        onChange={(e) => handleInputChange(acc.id, 'recent_likes', e.target.value)}
                        className="w-full rounded-md border border-slate-300 px-2.5 py-1 text-xs text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}
