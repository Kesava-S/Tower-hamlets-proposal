import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Compass,
  MonitorCheck,
  Database,
  Share2,
  AlertCircle,
  Sparkles,
  Search,
  Building2,
} from "lucide-react";

export default function Opportunities() {
  const opportunities = [
    {
      id: "hamlet-brand",
      letter: "A",
      icon: Building2,
      title: "One Hamlet brand",
      found: (
        <>
          4 of 5 hotel sites don&apos;t mention or link to Hamlet Hotels, and each
          uses its own design and platform.
        </>
      ),
      matters:
        "Every booking builds a separate small brand instead of one growing group brand.",
      quickWin:
        "A shared 'Part of Hamlet Hotels' strip and group links on every site.",
    },
    {
      id: "booking-journey",
      letter: "B",
      icon: Compass,
      title: "Booking journey and direct bookings",
      found: (
        <>
          Each hotel books differently. <strong>Maidstone</strong> uses SynXis,{" "}
          <strong>Reading</strong> links to both SynXis and eviivo,{" "}
          <strong>Hull</strong> uses direct-book.com with dates fixed to January 2026, and{" "}
          <strong>Thurrock</strong> uses Best Western. Promo codes differ by hotel (
          <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-warm-border font-mono text-navy font-semibold">
            HMLT15
          </code>
          ,{" "}
          <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-warm-border font-mono text-navy font-semibold">
            DIS1524
          </code>
          ,{" "}
          <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-warm-border font-mono text-navy font-semibold">
            BOOKDIRECT
          </code>
          ,{" "}
          <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-warm-border font-mono text-navy font-semibold">
            3NTS2
          </code>
          ).
        </>
      ),
      matters:
        "Guests get mixed experiences and direct bookings cannot be tracked as one group.",
      quickWin:
        "One group 'Book Direct' offer, one code, and conversion tracking in the existing Google Tag Manager.",
    },
    {
      id: "website-experience",
      letter: "C",
      icon: MonitorCheck,
      title: "Website experience",
      found: (
        <>
          The group site shows <strong>no reviews</strong> and an{" "}
          <strong>expired offer from May 2025</strong>. The Reading site still has
          template placeholder text. Thurrock links to a different hotel&apos;s website.
          Hull has dead menu links and stock photos in its gallery.
        </>
      ),
      matters:
        "These are small fixes, but they reduce trust right before a guest decides to book.",
      quickWin: "A one-week clean-up checklist for all hotel sites.",
    },
    {
      id: "guest-data",
      letter: "D",
      icon: Database,
      title: "Guest data and database",
      found: (
        <>
          3 hotels collect guest emails in 3 different tools (Reading newsletter,
          Kidderminster events form, Thurrock Stampede). No shared guest database.
        </>
      ),
      matters:
        "Past guests, wedding enquiries and event leads are not being followed up, which is the cheapest source of repeat bookings.",
      quickWin:
        "Combine SynXis, eviivo and email sign-up data into one segmented database (leisure, business, weddings, events, local diners).",
    },
    {
      id: "social-media",
      letter: "E",
      icon: Share2,
      title: "Social media and reach",
      found: (
        <>
          The group Instagram has about <strong>202 followers</strong> and Maidstone
          about <strong>206</strong>. The Meta Pixel is only on the Reading site, so
          social ads can&apos;t be measured elsewhere.
        </>
      ),
      matters: "Low reach means relying more on commission-paying OTAs.",
      quickWin:
        "Local influencer and affiliate partnerships per hotel (Kent, Reading, Hull, Essex) with tracked promo codes, Meta Pixel on every site, plus a monthly content calendar.",
    },
  ];

  return (
    <section id="findings" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 mb-2">
            Section 02 · Digital Audit Findings
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            Findings: 5 clear opportunities
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            A systematic audit of the Hamlet Hotels digital footprint, framed around quick commercial returns.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {opportunities.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal
              key={item.id}
              delayMs={index * 80}
              className={index === 4 ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : ""}
            >
              <div className="luxury-card h-full rounded-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
                <div>
                  {/* Card Header with Letter Plaque */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cream-muted border border-warm-border flex items-center justify-center text-navy shrink-0 group-hover:border-navy/25 transition-colors">
                        <Icon className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-charcoal-muted block">
                          Opportunity {item.letter}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-navy leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* PAS Structured Content */}
                  <div className="space-y-3.5 text-sm">
                    {/* Problem / What I found */}
                    <div className="bg-cream/70 rounded-lg p-3.5 border border-warm-border/70">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy/80 mb-1.5">
                        <Search className="w-3.5 h-3.5 text-navy/70" />
                        <span>What I found</span>
                      </div>
                      <p className="text-charcoal leading-relaxed text-xs sm:text-sm">
                        {item.found}
                      </p>
                    </div>

                    {/* Agitate / Why it matters */}
                    <div className="border-l-2 border-navy/30 pl-3 py-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted mb-0.5">
                        <AlertCircle className="w-3.5 h-3.5 text-charcoal-muted" />
                        <span>Why it matters</span>
                      </div>
                      <p className="text-charcoal/95 text-xs sm:text-sm font-medium leading-relaxed">
                        {item.matters}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solve / Quick win */}
                <div className="mt-5 pt-3.5 border-t border-warm-divider">
                  <div className="bg-forest/[0.05] border border-forest/20 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-forest mb-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-forest" />
                      <span>Quick win</span>
                    </div>
                    <p className="text-charcoal text-xs sm:text-sm font-semibold leading-relaxed">
                      {item.quickWin}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
