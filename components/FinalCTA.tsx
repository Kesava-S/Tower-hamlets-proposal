import React from "react";
import ScrollReveal from "./ScrollReveal";
import { WHATSAPP_LINK, PROPOSAL_DETAILS } from "@/lib/constants";
import { MessageCircle, Mail, Phone, ExternalLink } from "lucide-react";

export default function FinalCTA() {
  const { sender } = PROPOSAL_DETAILS;

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <div className="bg-gradient-to-b from-navy via-[#101B33] to-[#0A1120] text-cream rounded-card p-8 sm:p-14 shadow-elevated relative overflow-hidden">
          {/* Subtle inner hairline border */}
          <div
            className="absolute inset-3 border border-white/10 rounded-lg pointer-events-none"
            aria-hidden="true"
          />

          {/* Eyebrow tag */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/60 mb-3">
            Next Step
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Let&apos;s talk for 20 minutes
          </h2>

          <p className="text-sm sm:text-lg text-cream/80 max-w-xl mx-auto leading-relaxed mb-9">
            I&apos;ll walk you through these findings and how we could start with the Carmichael pilot in week one.
          </p>

          {/* Big Gold Button */}
          <div className="mb-11">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-cta-btn inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-card text-base sm:text-lg font-bold tracking-wide active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 text-navy-dark" />
              <span>Let&apos;s chat</span>
            </a>
          </div>

          {/* Contact Line */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-cream/70">
            <span className="font-medium text-cream">{sender.name}</span>
            <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={sender.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cream/80" />
              <span>{sender.phone}</span>
            </a>
            <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={sender.emailHref}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cream/80" />
              <span>{sender.email}</span>
            </a>
            <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={sender.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-cream/80" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
