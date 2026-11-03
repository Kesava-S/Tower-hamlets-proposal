'use client';

import { Card } from '../ui/Card';
import { ArrowRight } from 'lucide-react';

export function NextStepsCard() {
  const steps = [
    {
      num: 1,
      title: 'Merge the duplicate accounts',
      detail: 'Keep one official account each for The Carmichael and Hotel 1843. Archive or redirect legacy handles.',
    },
    {
      num: 2,
      title: 'Maintain a 3x weekly posting rhythm',
      detail: 'Each hotel posts 3 times a week: at least one short video (reel), mostly real high-resolution guest photos.',
    },
    {
      num: 3,
      title: 'Publish essential story highlights',
      detail: 'Set up clear highlight icons for Reviews, Rooms, Food, Location and parking info on each profile.',
    },
    {
      num: 4,
      title: 'Partner with local creators',
      detail: 'Invite 1 or 2 vetted local food or travel creators per month for a stay in exchange for authentic reels.',
    },
    {
      num: 5,
      title: 'Review benchmark monthly',
      detail: 'Check follower counts, post cadence and engagement on the 1st of each month to measure progress.',
    },
  ];

  return (
    <Card className="p-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-base font-bold text-slate-900">Suggested next steps</h3>
        <p className="mt-0.5 text-xs text-slate-500">
          Actionable priorities to systematically elevate Hamlet Hotels' social presence and direct booking pull.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-3.5 transition-colors hover:border-slate-200 hover:bg-slate-50/50"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white shadow-xs">
              {step.num}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
              <p className="mt-0.5 text-xs text-slate-600">{step.detail}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 mt-1 hidden sm:block" />
          </div>
        ))}
      </div>
    </Card>
  );
}
