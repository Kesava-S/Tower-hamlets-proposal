'use client';

import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import {
  SocialAccount,
  SocialSnapshot,
  AccountKind,
  parseAverageLikes,
} from '@/lib/social-benchmark-data';
import { Plus } from 'lucide-react';

interface AddAccountModalProps {
  open: boolean;
  onClose: () => void;
  onAddAccount: (account: SocialAccount, initialSnapshot?: SocialSnapshot) => void;
}

export function AddAccountModal({ open, onClose, onAddAccount }: AddAccountModalProps) {
  const [name, setName] = useState('');
  const [town, setTown] = useState('Hull');
  const [handle, setHandle] = useState('');
  const [kind, setKind] = useState<AccountKind>('competitor');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [notes, setNotes] = useState('');
  const [followers, setFollowers] = useState<number>(0);
  const [posts, setPosts] = useState<number>(0);
  const [recentLikes, setRecentLikes] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !handle.trim()) return;

    const cleanHandle = handle.replace(/^@/, '').trim();
    const newId = `acc-${Date.now()}`;
    const newAccount: SocialAccount = {
      id: newId,
      name: name.trim(),
      town: town.trim(),
      platform: 'instagram',
      handle: cleanHandle,
      url: `https://www.instagram.com/${cleanHandle}/`,
      kind,
      is_duplicate: isDuplicate,
      notes: notes.trim() || null,
      is_active: true,
      created_at: new Date().toISOString(),
    };

    const initialSnapshot: SocialSnapshot = {
      id: `snap-${newId}-initial`,
      account_id: newId,
      checked_on: '2026-11-03',
      followers: Number(followers) || 0,
      posts: Number(posts) || 0,
      recent_likes: recentLikes.trim() || null,
      avg_recent_likes: parseAverageLikes(recentLikes.trim() || null),
      notes: notes.trim() || null,
      created_at: new Date().toISOString(),
    };

    onAddAccount(newAccount, initialSnapshot);
    onClose();

    // Reset form
    setName('');
    setHandle('');
    setNotes('');
    setFollowers(0);
    setPosts(0);
    setRecentLikes('');
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="md"
      title="Add new social account"
      description="Track a new Hamlet property or competitor Instagram profile."
      footer={
        <div className="flex items-center justify-end gap-3">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<Plus className="h-4 w-4" />}
            onClick={handleSubmit}
            disabled={!name.trim() || !handle.trim()}
          >
            Add account
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Hotel Name
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Hideout Hotel"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Town
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Hull"
              value={town}
              onChange={(e) => setTown(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Instagram Handle
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-slate-400">
                @
              </span>
              <input
                type="text"
                required
                placeholder="handle"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="w-full rounded-lg border border-slate-300 pl-7 pr-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Account Kind
            </label>
            <select
              value={kind}
              onChange={(e) => setKind(e.target.value as AccountKind)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand bg-white"
            >
              <option value="competitor">Competitor</option>
              <option value="hamlet_hotel">Hamlet Hotel</option>
              <option value="hamlet_group">Hamlet Group</option>
            </select>
          </div>

          <div className="flex items-center pt-6">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={isDuplicate}
                onChange={(e) => setIsDuplicate(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand"
              />
              Duplicate / Secondary account
            </label>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-3">
          <div>
            <label className="block text-xs font-bold text-slate-700">Followers</label>
            <input
              type="number"
              min="0"
              value={followers}
              onChange={(e) => setFollowers(parseInt(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700">Posts</label>
            <input
              type="number"
              min="0"
              value={posts}
              onChange={(e) => setPosts(parseInt(e.target.value) || 0)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700">Recent Likes</label>
            <input
              type="text"
              placeholder="e.g. 10, 15, 8"
              value={recentLikes}
              onChange={(e) => setRecentLikes(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Notes (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Boutique hotel with rooftop bar"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
      </form>
    </Modal>
  );
}
