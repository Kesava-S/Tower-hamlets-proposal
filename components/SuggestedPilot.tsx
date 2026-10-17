import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function SuggestedPilot() {
  return (
    <section id="pilot" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 mb-2">
            Recommended Starting Point
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            Suggested pilot: The Carmichael Hotel, Hull
          </h2>
        </div>

        {/* Single Highlighted Card with a Gold Border */}
        <div className="bg-white rounded-card p-6 sm:p-10 border-2 border-gold/70 shadow-card relative overflow-hidden">
          {/* Subtle top pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-xs font-bold text-navy mb-5">
            <Sparkles className="w-3.5 h-3.5 text-navy shrink-0" />
            <span>Start small, see results in 30 days.</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-charcoal leading-relaxed">
                <strong>Rebuild the Carmichael website:</strong> real room pages and photos, one direct offer, a corporate enquiry form, reviews, Hamlet branding and full tracking.
              </p>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-warm-divider">
              <ArrowRight className="w-5 h-5 text-navy shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-navy font-semibold leading-relaxed">
                Then use it as the template for every other Hamlet hotel site.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
