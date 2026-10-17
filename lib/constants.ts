/**
 * Central constants and configuration for the Hamlet Hotels personal proposal.
 */

export const WHATSAPP_LINK = "https://wa.me/447818657095";
export const CALENDLY_LINK = WHATSAPP_LINK; // Aliased for compatibility

export const PROPOSAL_DETAILS = {
  recipient: {
    name: "Prasanna Kirubakaran",
    title: "CEO",
    company: "Hamlet Hotels",
    hotels: [
      "Maidstone",
      "Reading",
      "Kidderminster",
      "Hull",
      "Thurrock",
      "Telford",
      "The Wrekin",
      "Sheffield",
    ],
  },
  sender: {
    name: "Kesavaram Sundararaj",
    role: "Marketing and automation professional",
    location: "London, UK",
    phone: "+44 7818 657095",
    phoneHref: "tel:+447818657095",
    whatsappHref: WHATSAPP_LINK,
    email: "kesavperso@gmail.com",
    emailHref: "mailto:kesavperso@gmail.com",
    linkedIn: "https://www.linkedin.com/in/kesavaram-s/",
    degree: "MSc Marketing Analytics, Birkbeck, University of London",
  },
  auditDate: "17 October 2026",
  preparedDate: "October 2026",
};
