'use client';

import { GitMerge, Camera, BookmarkCheck, Megaphone } from 'lucide-react';
import { Card } from '../ui/Card';

export function BetterPagesCard() {
  const points = [
    {
      icon: <GitMerge className="h-5 w-5 text-brand" />,
      title: 'One account per hotel',
      description: 'Followers are consolidated in one profile, so audience growth and engagement are not split.',
    },
    {
      icon: <Camera className="h-5 w-5 text-emerald-600" />,
      title: 'Real photos and short videos',
      description: 'Focus on authentic rooms, food, staff and live events, avoiding flat text graphics with discount codes.',
    },
    {
      icon: <BookmarkCheck className="h-5 w-5 text-amber-600" />,
      title: 'Curated story highlights',
      description: 'Permanent, prominent highlights for Reviews, Rooms, Car park, Menus and Location.',
    },
    {
      icon: <Megaphone className="h-5 w-5 text-violet-600" />,
      title: 'Outside reach and partnerships',
      description: 'Collaborate with local creators (like Hideout in Hull) and media/TV features (like Stone Court House).',
    },
  ];

  return (
    <Card className="p-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-base font-bold text-slate-900">What the better pages do</h3>
        <p className="mt-0.5 text-xs text-slate-500">
          Key practices observed from the highest performing boutique hotels across Hull, Reading and Maidstone.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((pt, i) => (
          <div key={i} className="flex flex-col gap-2.5 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50 hover:border-slate-200">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-xs border border-slate-200/60">
              {pt.icon}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{pt.title}</h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">{pt.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
