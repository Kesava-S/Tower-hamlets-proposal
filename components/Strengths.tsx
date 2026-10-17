import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Globe, TrendingUp, ShieldCheck, CopyCheck } from "lucide-react";

export default function Strengths() {
  const strengths = [
    {
      numeral: "I",
      icon: Globe,
      title: "Strong distribution",
      desc: "SynXis CRS with listings on Amadeus, Sabre, Galileo and Worldspan for 6 properties.",
    },
    {
      numeral: "II",
      icon: TrendingUp,
      title: "Fast growth",
      desc: "From Maidstone in 2022 to the Best Western Thurrock acquisition in 2026.",
    },
    {
      numeral: "III",
      icon: ShieldCheck,
      title: "Clear owner model",
      desc: "Guaranteed income for owners, with Hamlet running operations.",
    },
    {
      numeral: "IV",
      icon: CopyCheck,
      title: "Good foundations to copy",
      desc: "Reading already has a newsletter, WhatsApp chat and Meta Pixel. Maidstone has clear wedding packages with prices. Kidderminster shows direct booking perks.",
    },
  ];

  return (
    <section id="strengths" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest mb-2">
            Section 01 · Foundations
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            What you have built well
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            Hamlet Hotels has built strong commercial foundations in just four years across prime UK locations.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {strengths.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.title} delayMs={index * 100}>
              <div className="h-full bg-white rounded-card p-6 sm:p-7 border border-forest-border/80 shadow-soft relative overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 group">
                {/* Top Subtle Green Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-forest/40 group-hover:bg-forest transition-colors" />

                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-forest-light border border-forest-border/60 flex items-center justify-center text-forest">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-forest/25 select-none" aria-hidden="true">
                    {item.numeral}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
