import React from "react";
import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, Sliders, Database, Bot, Users } from "lucide-react";

export default function PlanPillars() {
  const pillars = [
    {
      number: "01",
      icon: Sliders,
      title: "Direct booking engine",
      description: "One unified group offer, one consistent promo code, and full conversion tracking from initial click to completed booking.",
      highlights: [
        "Single 'Book Direct' promotion across all hotel websites",
        "Unified promo code replacing fragmented property codes",
        "End-to-end conversion tracking in Google Tag Manager",
      ],
    },
    {
      number: "02",
      icon: Database,
      title: "Marketing database",
      description: "One clean guest database combining booking engine and email sign-up data, plus Wi-Fi data where available, segmented and analysed on a monthly cycle.",
      highlights: [
        "Consolidate SynXis, eviivo and Stampede guest records",
        "Segment by leisure, business, weddings, events and dining",
        "Monthly audit of list growth, unsubscriptions and repeat rates",
      ],
    },
    {
      number: "03",
      icon: Bot,
      title: "Marketing automation",
      description: "Timely pre-arrival emails, automated post-stay review requests, automated come back offers, and rapid wedding or event lead follow-ups.",
      highlights: [
        "Pre-arrival stay briefings and automated upsells",
        "Post-stay review requests to protect direct reputation",
        "WhatsApp and email nurture for wedding and private event leads",
      ],
    },
    {
      number: "04",
      icon: Users,
      title: "Influencer and affiliate growth",
      description: "Targeted local creators selected specifically for each hotel location, equipped with unique tracked codes and monthly ROI reporting.",
      highlights: [
        "One Hamlet identity across all hotel sites",
        "Dedicated local creators for Kent, Reading, Hull and Essex",
        "Unique voucher codes with direct margin attribution",
        "Structured monthly creator calendar and performance reports",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 mb-2">
            Section 03 · Operational Strategy
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            The plan: what I will build and run
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            Four operational pillars designed to eliminate booking friction, retain guests, and lower commission fees.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <ScrollReveal key={pillar.number} delayMs={index * 90}>
              <div className="luxury-card h-full rounded-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
                {/* Large Watermark Numeral */}
                <span
                  className="absolute top-4 right-6 font-serif text-5xl sm:text-6xl font-bold text-navy/[0.07] select-none pointer-events-none group-hover:text-navy/[0.12] transition-colors"
                  aria-hidden="true"
                >
                  {pillar.number}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-navy text-cream flex items-center justify-center shadow-soft">
                      <Icon className="w-5 h-5 text-cream" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                      Pillar {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-charcoal/85 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-warm-divider space-y-2.5">
                  {pillar.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/90">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
