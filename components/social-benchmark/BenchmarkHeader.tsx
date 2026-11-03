'use client';

import { RefreshCw, Shield, UserCheck, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatDate } from '@/lib/social-benchmark-data';

interface BenchmarkHeaderProps {
  latestCheckedOn: string;
  role: 'gm' | 'owner';
  onRoleChange: (newRole: 'gm' | 'owner') => void;
  onOpenUpdateModal: () => void;
  onOpenAddModal: () => void;
}

export function BenchmarkHeader({
  latestCheckedOn,
  role,
  onRoleChange,
  onOpenUpdateModal,
  onOpenAddModal,
}: BenchmarkHeaderProps) {
  const isGM = role === 'gm';

  return (
    <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
          <span>Marketing</span>
          <span>/</span>
          <span className="text-brand">Social Benchmark</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Social media benchmark
        </h1>
        <p className="mt-1.5 text-sm text-slate-600">
          Instagram. Hamlet hotels compared with similar hotels in the same towns. Last checked{' '}
          <span className="font-semibold text-slate-800">{formatDate(latestCheckedOn)}</span>.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Role Switcher Pill */}
        <div className="inline-flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
          <button
            type="button"
            onClick={() => onRoleChange('gm')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              isGM
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="h-3.5 w-3.5 text-brand" />
            GM (Editor)
          </button>
          <button
            type="button"
            onClick={() => onRoleChange('owner')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              !isGM
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Shield className="h-3.5 w-3.5 text-slate-500" />
            Owner (View)
          </button>
        </div>

        {/* GM Action Buttons */}
        {isGM && (
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              icon={<Plus className="h-4 w-4" />}
              onClick={onOpenAddModal}
            >
              Add account
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<RefreshCw className="h-3.5 w-3.5" />}
              onClick={onOpenUpdateModal}
            >
              Update numbers
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
