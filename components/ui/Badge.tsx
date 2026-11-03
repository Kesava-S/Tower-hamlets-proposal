import { cn } from './cn';

export type Tone = 'neutral' | 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'dark';

const tones: Record<Tone, string> = {
  neutral: 'bg-slate-100 text-slate-600 border-slate-200',
  blue: 'bg-brand-soft text-brand border-brand-ring/60',
  green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  amber: 'bg-amber-50 text-amber-800 border-amber-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  purple: 'bg-violet-50 text-violet-700 border-violet-200',
  dark: 'bg-slate-900 text-white border-slate-900',
};

export function Badge({
  tone = 'neutral',
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
