import { SocialBenchmarkDashboard } from '@/components/social-benchmark/SocialBenchmarkDashboard';
import Link from 'next/link';
import { LayoutGrid, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Social Media Benchmark | Hamlet Hotels',
  description: 'Instagram benchmark comparing Hamlet hotels with local competitors across Hull, Reading, and Maidstone.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/marketing"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-brand" />
              Marketing Hub
            </Link>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm">Hamlet Hotels</span>
              <span className="rounded-md bg-brand-soft px-1.5 py-0.5 text-[10px] font-bold text-brand uppercase tracking-wider">
                Operations
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              Instagram Performance Benchmark
            </span>
          </div>
        </div>
      </header>

      {/* Main Benchmark View */}
      <main>
        <SocialBenchmarkDashboard />
      </main>
    </div>
  );
}
