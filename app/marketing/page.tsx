import Link from 'next/link';
import { Card, HubCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Instagram,
  TrendingUp,
  Mail,
  Search,
  Globe,
  Users,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Marketing Hub | Hamlet Hotels',
  description: 'Central marketing, direct booking strategies, and digital benchmarks for Hamlet Hotels.',
};

export default function MarketingHubPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-slate-900 text-sm tracking-tight">Hamlet Hotels</span>
            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
              Operations & Strategy
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/marketing/social-benchmark"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-hover transition-colors shadow-sm"
            >
              <Instagram className="h-3.5 w-3.5" />
              Social Benchmark
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        {/* Hub Title Banner */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand mb-1">
                <span>Central Management</span>
                <span>•</span>
                <span>Marketing & Revenue</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Marketing Hub
              </h1>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
                Live performance data, direct booking growth engines, competitor intelligence, and guest automation across all Hamlet properties.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/marketing/social-benchmark"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover transition-all shadow-sm"
              >
                <span>Open Social Benchmark</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Primary Section: Intelligence & Benchmarks */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Intelligence & Benchmarking</h2>
            <span className="text-xs text-slate-500 font-medium">Updated November 2026</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured: Social Media Benchmark */}
            <HubCard
              href="/marketing/social-benchmark"
              icon={<Instagram className="h-5 w-5" />}
              title="Social Media Benchmark"
              description="Instagram followers, post counts, and engagement across Hull, Reading, and Maidstone compared with local hotel competitors."
              count={6}
              countLabel="Hamlet accounts tracked"
              tone="blue"
              badge={<Badge tone="blue">New Benchmark</Badge>}
            />

            {/* Direct Booking Parity */}
            <HubCard
              href="/marketing/social-benchmark"
              icon={<TrendingUp className="h-5 w-5" />}
              title="Central Reservation Engine"
              description="Direct booking conversion metrics, promo code tracking (3NTS2, DIRECT10), and SynXis rate parity across all 5 hotel sites."
              count={4}
              countLabel="booking engines active"
              tone="neutral"
              badge={<Badge tone="neutral">Audited</Badge>}
            />

            {/* Guest Database & CRM */}
            <HubCard
              href="/marketing/social-benchmark"
              icon={<Users className="h-5 w-5" />}
              title="Guest Profiles & Database"
              description="Centralised guest contact records, repeat stay incentives, and cross-property marketing automation across group hotels."
              count={5}
              countLabel="properties"
              tone="amber"
              badge={<Badge tone="amber">Action Required</Badge>}
            />
          </div>
        </div>

        {/* Secondary Section: Campaigns & Automation */}
        <div>
          <div className="mb-4">
            <h2 className="text-base font-bold text-slate-900">Active Campaigns & Channels</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <Card className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Email & Newsletters</h3>
                  <p className="text-xs text-slate-500">Reading active • Maidstone pending</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Automated pre-arrival welcome emails and post-checkout review invitations with direct booking repeat vouchers.
              </p>
            </Card>

            <Card className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Local SEO & Google Maps</h3>
                  <p className="text-xs text-slate-500">5 GBP listings synced</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Verified local listings, wedding packages, restaurant menus, and parking information across Google Hotel Search.
              </p>
            </Card>

            <Card className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Group Brand Consolidation</h3>
                  <p className="text-xs text-slate-500">One Hamlet Group identity</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Connecting independent property websites with shared group headers, unified corporate rates, and wedding brochures.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
