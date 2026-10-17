import React from "react";
import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, AlertCircle, Building, Server } from "lucide-react";

export default function HotelSnapshot() {
  const hotels = [
    {
      name: "Group site",
      location: "Hamlet Hotels Portfolio",
      tech: "WordPress",
      workingWell: "Clear hotel list and booking widget.",
      opportunities: [
        "No meta description",
        "Press page empty and only 1 blog post",
        "\"Carlisle\" appears in booking dropdown with no hotel page",
      ],
    },
    {
      name: "Maidstone",
      location: "Kent",
      tech: "WordPress · SynXis · SevenRooms",
      workingWell: "Most complete site with wedding packages and clear prices.",
      opportunities: [
        "3 promo codes on one page",
        "What's On shows a past July event",
        "Blog has template placeholder posts",
        "No wedding enquiry form",
      ],
    },
    {
      name: "Hotel 1843",
      location: "Reading",
      tech: "Webflow · SynXis & eviivo",
      workingWell: "Newsletter, WhatsApp chat, and active Meta Pixel.",
      opportunities: [
        "Two competing booking engines",
        "39 of 41 images have no alt text",
        "Hidden template text in the code",
      ],
    },
    {
      name: "Gainsborough House",
      location: "Kidderminster",
      tech: "SynXis",
      workingWell: "WhatsApp chat, direct booking perks, and events interest form.",
      opportunities: [
        "Accommodation, Restaurant and Events menu links lead nowhere",
        "Blog page address is \"/new-page-1\"",
        "No mention of Hamlet Hotels",
      ],
    },
    {
      name: "The Carmichael",
      location: "Hull",
      tech: "Basic template · direct-book.com",
      workingWell: "Simple layout with clear check-in details.",
      opportunities: [
        "About 250 words in total across the entire site",
        "Stock photos in the gallery",
        "Facilities menu leads nowhere",
        "Two different direct offers",
        "Corporate page has no rates or enquiry form",
      ],
    },
    {
      name: "Thurrock",
      location: "Essex",
      tech: "Best Western site",
      workingWell: "Many event pages and email sign-up.",
      opportunities: [
        "Fully Best Western branded with no mention of Hamlet",
        "Page title is generic \"Homepage\"",
        "4 links point to a different hotel's website",
        "Old COVID-19 page still live",
      ],
    },
  ];

  return (
    <section id="snapshot" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 mb-2">
            Property Audit
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            Hotel-by-hotel snapshot
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            A review of what is working well and key opportunities across each property website.
          </p>
        </div>
      </ScrollReveal>

      {/* Carousel on mobile, 3-column grid on desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 scrollbar-none">
        {hotels.map((hotel, index) => (
          <div
            key={hotel.name}
            className="min-w-[85vw] sm:min-w-0 snap-center shrink-0 sm:shrink flex flex-col"
          >
            <ScrollReveal delayMs={index * 60} className="h-full">
              <div className="luxury-card h-full rounded-card p-6 flex flex-col justify-between group">
                <div>
                  {/* Card Header: Name + Town */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-charcoal-muted font-medium">
                        {hotel.location}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cream-muted border border-warm-border flex items-center justify-center text-navy shrink-0">
                      <Building className="w-4 h-4 text-navy" />
                    </div>
                  </div>

                  {/* Platform & Booking Engine */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cream-muted/90 border border-warm-border/70 text-[11px] font-medium text-navy/85 mb-4">
                    <Server className="w-3 h-3 text-navy/60" />
                    <span>{hotel.tech}</span>
                  </div>

                  {/* Working Well (Green, 1 line) */}
                  <div className="bg-forest/[0.06] border border-forest/25 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-forest mb-1">
                      <CheckCircle2 className="w-3 h-3 text-forest shrink-0" />
                      <span>Working well</span>
                    </div>
                    <p className="text-xs sm:text-sm text-charcoal/90 font-medium leading-relaxed">
                      {hotel.workingWell}
                    </p>
                  </div>

                  {/* Top Opportunities (Bullets) */}
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-charcoal-muted mb-2">
                      <AlertCircle className="w-3 h-3 text-charcoal-muted shrink-0" />
                      <span>Top opportunities</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-charcoal/85">
                      {hotel.opportunities.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-navy/50 shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
