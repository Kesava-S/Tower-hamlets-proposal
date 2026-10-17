import React from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ArrowDown, MessageCircle, Building2, Layers, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-16 sm:pb-20 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[92vh] sm:min-h-0">
      {/* Hotel Group Monogram Emblem */}
      <div className="mb-4 sm:mb-5">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-warm-border bg-white shadow-soft flex items-center justify-center mx-auto relative group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-navy/15 flex items-center justify-center">
            <span className="font-serif font-bold text-navy text-lg sm:text-xl tracking-tight">H</span>
          </div>
        </div>
      </div>

      {/* Small Date Tag */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-muted/80 border border-warm-border text-[11px] sm:text-xs font-medium text-charcoal-muted mb-3 sm:mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-navy/60" aria-hidden="true" />
        <span className="tracking-wide">Prepared October 2026</span>
      </div>

      {/* Eyebrow flanked by hairline rules */}
      <div className="flex items-center justify-center gap-3 w-full max-w-lg mb-2 sm:mb-3">
        <span className="h-px bg-warm-border flex-1 max-w-[40px] sm:max-w-[60px]" aria-hidden="true" />
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-navy/80">
          Prepared for Prasanna Kirubakaran, CEO, Hamlet Hotels
        </p>
        <span className="h-px bg-warm-border flex-1 max-w-[40px] sm:max-w-[60px]" aria-hidden="true" />
      </div>

      {/* Main Headline */}
      <h1 className="font-serif text-2xl sm:text-4xl lg:text-[52px] font-bold text-navy leading-[1.15] tracking-tight max-w-4xl mb-4 sm:mb-6">
        More direct bookings and returning guests across Hamlet Hotels
        <span className="block text-base sm:text-2xl lg:text-[28px] font-serif font-normal italic text-navy/85 mt-2 sm:mt-3">
          through one brand, better guest data and smart automation
        </span>
      </h1>

      {/* Intro line */}
      <p className="text-sm sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal">
        I reviewed all 5 Hamlet hotel websites, your booking setup and social channels. Here are 5 clear opportunities, a pilot, and a step-by-step plan.
      </p>

      {/* 3 Small Stat Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-7 sm:mb-9 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-warm-border shadow-soft text-xs sm:text-sm text-navy font-medium">
          <div className="w-4 h-4 rounded-full bg-navy/5 flex items-center justify-center">
            <Building2 className="w-2.5 h-2.5 text-navy" />
          </div>
          <span>5 hotels, 5 website platforms</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-warm-border shadow-soft text-xs sm:text-sm text-navy font-medium">
          <div className="w-4 h-4 rounded-full bg-navy/5 flex items-center justify-center">
            <Layers className="w-2.5 h-2.5 text-navy" />
          </div>
          <span>4 booking systems</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-warm-border shadow-soft text-xs sm:text-sm text-navy font-medium">
          <div className="w-4 h-4 rounded-full bg-navy/5 flex items-center justify-center">
            <Mail className="w-2.5 h-2.5 text-navy" />
          </div>
          <span>4 of 5 sites don&apos;t mention Hamlet</span>
        </div>
      </div>

      {/* CTA Button and Secondary Link */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-card text-base font-bold active:scale-[0.99]"
        >
          <MessageCircle className="w-4 h-4 text-navy-dark" />
          <span>Let&apos;s chat</span>
        </a>

        <a
          href="#strengths"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-charcoal-muted hover:text-navy transition-colors py-2 px-3"
        >
          <span>See the findings</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
