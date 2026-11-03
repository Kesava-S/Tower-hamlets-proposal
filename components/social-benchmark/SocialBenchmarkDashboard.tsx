'use client';

import { useState, useMemo } from 'react';
import {
  INITIAL_ACCOUNTS,
  INITIAL_SNAPSHOTS,
  SocialAccount,
  SocialSnapshot,
} from '@/lib/social-benchmark-data';
import { BenchmarkHeader } from './BenchmarkHeader';
import { SummaryCards } from './SummaryCards';
import { TownCard } from './TownCard';
import { GroupCard } from './GroupCard';
import { BetterPagesCard } from './BetterPagesCard';
import { NextStepsCard } from './NextStepsCard';
import { UpdateNumbersModal } from './UpdateNumbersModal';
import { HistoryModal } from './HistoryModal';
import { AddAccountModal } from './AddAccountModal';

export function SocialBenchmarkDashboard() {
  const [role, setRole] = useState<'gm' | 'owner'>('gm');
  const [accounts, setAccounts] = useState<SocialAccount[]>(INITIAL_ACCOUNTS);
  const [snapshots, setSnapshots] = useState<SocialSnapshot[]>(INITIAL_SNAPSHOTS);

  // Modals state
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [historyModalAccount, setHistoryModalAccount] = useState<SocialAccount | null>(null);

  // Calculate the latest snapshot per account
  const latestSnapshotsByAccount = useMemo(() => {
    const map: Record<string, SocialSnapshot> = {};
    for (const snap of snapshots) {
      if (!map[snap.account_id] || new Date(snap.checked_on) > new Date(map[snap.account_id].checked_on)) {
        map[snap.account_id] = snap;
      }
    }
    return map;
  }, [snapshots]);

  // Calculate the latest checked_on overall
  const latestCheckedOn = useMemo(() => {
    let latest = '2026-11-03';
    for (const snap of snapshots) {
      if (snap.checked_on > latest) {
        latest = snap.checked_on;
      }
    }
    return latest;
  }, [snapshots]);

  // Handler to add a batch of new snapshots (Update Numbers)
  const handleSaveSnapshots = (newSnapshots: SocialSnapshot[]) => {
    setSnapshots((prev) => [...prev, ...newSnapshots]);
  };

  // Handler to add a new account
  const handleAddAccount = (newAccount: SocialAccount, initialSnapshot?: SocialSnapshot) => {
    setAccounts((prev) => [...prev, newAccount]);
    if (initialSnapshot) {
      setSnapshots((prev) => [...prev, initialSnapshot]);
    }
  };

  // Handler to deactivate / remove an account
  const handleDeactivateAccount = (accountId: string) => {
    setAccounts((prev) =>
      prev.map((acc) => (acc.id === accountId ? { ...acc, is_active: false } : acc))
    );
  };

  // Extract Group account
  const groupAccount = accounts.find((a) => a.kind === 'hamlet_group' && a.is_active);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* a) Header */}
      <BenchmarkHeader
        latestCheckedOn={latestCheckedOn}
        role={role}
        onRoleChange={setRole}
        onOpenUpdateModal={() => setIsUpdateModalOpen(true)}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      {/* b) Three summary cards */}
      <SummaryCards
        accounts={accounts}
        snapshotsByAccount={latestSnapshotsByAccount}
      />

      {/* c) One card per town: Hull, Reading, Maidstone */}
      <div className="space-y-6">
        <TownCard
          town="Hull"
          hamletHotelName="The Carmichael"
          accounts={accounts}
          snapshotsByAccount={latestSnapshotsByAccount}
          isGM={role === 'gm'}
          onOpenHistory={(acc) => setHistoryModalAccount(acc)}
          onDeactivateAccount={handleDeactivateAccount}
        />

        <TownCard
          town="Reading"
          hamletHotelName="Hotel 1843"
          accounts={accounts}
          snapshotsByAccount={latestSnapshotsByAccount}
          isGM={role === 'gm'}
          onOpenHistory={(acc) => setHistoryModalAccount(acc)}
          onDeactivateAccount={handleDeactivateAccount}
        />

        <TownCard
          town="Maidstone"
          hamletHotelName="Hamlet Hotels Maidstone"
          accounts={accounts}
          snapshotsByAccount={latestSnapshotsByAccount}
          isGM={role === 'gm'}
          onOpenHistory={(acc) => setHistoryModalAccount(acc)}
          onDeactivateAccount={handleDeactivateAccount}
        />

        {/* Group account separate card */}
        {groupAccount && (
          <GroupCard
            account={groupAccount}
            snapshot={latestSnapshotsByAccount[groupAccount.id]}
            onOpenHistory={(acc) => setHistoryModalAccount(acc)}
          />
        )}
      </div>

      {/* d) Card: What the better pages do */}
      <BetterPagesCard />

      {/* e) Card: Suggested next steps */}
      <NextStepsCard />

      {/* f) Footer note (small grey text) */}
      <div className="pt-2 pb-6 text-center text-xs text-slate-400">
        Likes come from 3 recent posts per account, read by hand. This is a quick check, not a full audit.
      </div>

      {/* Modals */}
      <UpdateNumbersModal
        open={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        accounts={accounts}
        latestSnapshotsByAccount={latestSnapshotsByAccount}
        onSaveSnapshots={handleSaveSnapshots}
      />

      <AddAccountModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddAccount={handleAddAccount}
      />

      <HistoryModal
        open={Boolean(historyModalAccount)}
        account={historyModalAccount}
        snapshots={snapshots}
        onClose={() => setHistoryModalAccount(null)}
      />
    </div>
  );
}
