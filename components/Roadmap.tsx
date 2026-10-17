import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Gauge,
  Star,
  Users,
  Repeat,
  Share2,
} from "lucide-react";

export default function Roadmap() {
  const steps = [
    {
      step: "Step 01",
      theme: "Fix and measure",
      phaseIndex: "Phase I",
      items: [
        "Carmichael Hotel pilot rebuild",
        "Website clean-up checklist across all hotel sites",
        "Unified group direct booking offer and promo code",
        "Conversion and e-commerce tracking in Google Tag Manager, Meta Pixel on every site",
        "Comprehensive guest data and platform audit",
      ],
    },
    {
      step: "Step 02",
      theme: "Build the engine",
      phaseIndex: "Phase II",
      items: [
        "Central guest database live and segmented",
        "First automations: post-stay review request sequence",
        "Come back offer automation for past guests",
        "Local hospitality influencer shortlist for each property",
      ],
    },
    {
      step: "Step 03",
      theme: "Grow",
      phaseIndex: "Phase III",
      items: [
        "Local creator campaigns live with tracked codes",
        "Wedding and private event lead nurture journeys (WhatsApp + email)",
        "First comprehensive monthly performance and revenue report",
        "Channel optimisation based on verified direct revenue data",
      ],
    },
  ];

  const metrics = [
    { label: "Direct booking share", icon: Gauge, desc: "Lowering OTA commissions" },
    { label: "Review volume", icon: Star, desc: "Building organic trust" },
    { label: "Email list growth", icon: Users, desc: "Direct guest database" },
    { label: "Repeat guest rate", icon: Repeat, desc: "Cheapest booking source" },
    { label: "Social reach", icon: Share2, desc: "Local county awareness" },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 mb-2">
            Section 04 · Implementation
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            Step-by-step roadmap
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            A phased progression ensuring foundational fixes deliver immediate clarity before scaling campaigns.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-14">
        {steps.map((item, index) => (
          <ScrollReveal key={item.step} delayMs={index * 100}>
            <div className="luxury-card h-full rounded-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-warm-divider">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy bg-cream-muted px-2.5 py-1 rounded border border-warm-border">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-charcoal-muted font-serif">
                    {item.phaseIndex}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy mb-4">
                  {item.theme}
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-charcoal/85">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy/60 shrink-0 mt-2" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* How we will measure success */}
      <ScrollReveal delayMs={200}>
        <div className="bg-white rounded-card p-6 sm:p-8 border border-warm-border shadow-card relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-navy/70 block mb-1">
              Accountability Framework
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-2">
              How we will measure success
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/80">
              Clear performance indicators tracked monthly to verify direct revenue and audience growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="bg-cream/60 rounded-lg p-3.5 border border-warm-border/80 text-center flex flex-col items-center justify-center gap-2 transition-all hover:bg-cream hover:border-navy/20"
                >
                  <div className="w-9 h-9 rounded-full bg-white border border-warm-border shadow-soft flex items-center justify-center text-navy">
                    <Icon className="w-4 h-4 text-navy" />
                  </div>
                  <span className="text-xs font-bold text-navy leading-tight">
                    {metric.label}
                  </span>
                  <span className="text-[10px] text-charcoal-muted leading-tight">
                    {metric.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
