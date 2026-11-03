import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from './cn';

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('rounded-card border border-slate-200/90 bg-white shadow-card', className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  description,
  icon,
  actions,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex items-start justify-between gap-3 border-b border-slate-100 px-5 py-4', className)}>
      <div className="flex min-w-0 items-start gap-3">
        {icon && <div className="mt-0.5 text-slate-500">{icon}</div>}
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-slate-900">{title}</h3>
          {description && <p className="mt-0.5 text-xs text-slate-500">{description}</p>}
        </div>
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

export function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('p-5', className)}>{children}</div>;
}

/** A card that opens a section: icon, title, short description, optional count. */
export function HubCard({
  href,
  icon,
  title,
  description,
  count,
  countLabel,
  tone = 'neutral',
  badge,
}: {
  href: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  count?: number;
  countLabel?: string;
  tone?: 'neutral' | 'blue' | 'amber' | 'green';
  badge?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-card border border-slate-200/90 bg-white p-5 shadow-card transition-all hover:border-slate-300 hover:shadow-lift"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-colors group-hover:bg-brand-soft group-hover:text-brand">
            {icon}
          </div>
          {badge}
        </div>
        <h4 className="mt-4 text-base font-bold text-slate-900 group-hover:text-brand transition-colors">{title}</h4>
        {description && <p className="mt-1 text-xs text-slate-500 leading-relaxed">{description}</p>}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
        <span>{count !== undefined ? `${count} ${countLabel || ''}` : 'View details'}</span>
        <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
      </div>
    </Link>
  );
}
