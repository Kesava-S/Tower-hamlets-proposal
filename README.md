# Hamlet Hotels — Personal Growth Proposal

A tailored, high-converting single-page proposal website prepared exclusively for **Prasanna Kirubakaran**, CEO of **Hamlet Hotels** (Maidstone, Reading, Kidderminster, Hull, Thurrock, plus Telford, The Wrekin and Sheffield on the GDS list).

Sent by **Kesavaram Sundararaj**, a London-based marketing and automation professional proposing to lead direct bookings, guest data unification, and marketing automation across the Hamlet Hotels portfolio.

---

## Key Highlights

- **5-Second Test Passed**: Clean, above-the-fold hero on mobile viewports showing headline, one-line proof, 3 stat chips, and the primary gold CTA button.
- **PAS Framework (Problem, Agitate, Solve)**: Respectful, opportunity-framed audit cards highlighting exact findings across booking engines, website experience, guest data collection, and social channels.
- **Pure Hospitality Aesthetic**: Inspired by high-end boutique hotel brochures. Deep navy (`#14213D`), off-white linen background (`#FAF8F3`), serif headings (Playfair Display / Cormorant Garamond), clean sans body (Inter), soft green (`#2E7D5B`) for existing strengths, and warm gold (`#C9A227`) strictly reserved for CTA buttons and sticky bar.
- **Privacy First**: Pre-configured with `<meta name="robots" content="noindex, nofollow">` to prevent indexing by search engines.
- **Open Graph Ready**: High-resolution 1200x630 social card (`/public/og-image.png`) with title *"A growth plan for Hamlet Hotels"* and description *"Direct bookings, guest data and marketing automation across your hotels"*.
- **Accessible & Motion Conscious**: Subtle scroll fade-ins that respect `prefers-reduced-motion: reduce`.
- **Zero Third-Party UI Kits or AI Branding**: No external component libraries, no template watermarks, and no "made with" footers.

---

## Structure of the Page

1. **Hero (Above the fold)**: "Prepared October 2026" badge, eyebrow, headline, subline, 3 stat chips, gold CTA button, and secondary link.
2. **Section 01 · Foundations (What you've built well)**: 4 green-accented cards highlighting distribution, fast growth, owner model, and good foundations to copy.
3. **Hotel-by-hotel snapshot**: 6 property audit cards (Group site, Maidstone, Hotel 1843 Reading, Gainsborough House Kidderminster, The Carmichael Hull, Thurrock Essex) with mobile carousel and desktop 3-column grid.
4. **Section 02 · Findings: 5 clear opportunities (PAS cards)**:
   - Opportunity A: One Hamlet brand
   - Opportunity B: Booking journey and direct bookings (with 3NTS2 promo code)
   - Opportunity C: Website experience (dead links and stock photos in Hull gallery)
   - Opportunity D: Guest data and database (3 tools collecting emails without a shared database)
   - Opportunity E: Social media and reach (Meta Pixel only on Reading site)
5. **Section 03 · The plan: what I will build and run**: 4 numbered pillars in a 2x2 grid.
6. **Suggested pilot: The Carmichael Hotel, Hull**: Single highlighted card with gold border.
7. **Step-by-step roadmap**: 3 phases (Step 1: Fix and measure with Carmichael pilot & Meta Pixel, Step 2: Build the engine, Step 3: Grow) plus success metrics.
8. **Why me: proof of work**: Homestay origin story, 3 stat cards with real numbers, and MSc credential.
9. **Personal note**: Warm centered note in italic serif (*"Vanakkam Prasanna..."*).
10. **Final CTA**: "Let's talk for 20 minutes" with Carmichael pilot mention, gold button, and direct contact line.
11. **Footer**: Single respectful attribution line reviewed on 17 October 2026.

---

## 1. Contact & WhatsApp Routing

The primary CTA is **"Let's chat"**, which routes directly to Kesav's WhatsApp at **+44 7818657095** via:
[`https://wa.me/447818657095`](https://wa.me/447818657095).

Configured in [`lib/constants.ts`](file:///Users/kesav/Selfera/Proposals/Hamlet%20Hotels/lib/constants.ts):

```typescript
export const WHATSAPP_LINK = "https://wa.me/447818657095";
```

All CTA buttons across the page (Hero, Sticky Top Bar, and Final CTA) automatically consume this link. If you ever need to change the number or switch to a Calendly link, simply update `WHATSAPP_LINK` in `lib/constants.ts`.

---

## 2. How to Run Locally

### Prerequisites
- Node.js 18+ (tested on Node v20/v22/v25)
- npm, pnpm, or yarn

### Installation
```bash
npm install
```

### Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Export
```bash
npm run build
```
This runs Next.js static export (`output: 'export'`) and compiles static HTML/CSS/JS into the `out/` folder.

---

## 3. How to Deploy to Vercel

### Option A: Deploy via Vercel CLI (Fastest)

1. Ensure the Vercel CLI is installed:
   ```bash
   npm i -g vercel
   ```
2. Log in and deploy:
   ```bash
   vercel
   ```
3. To deploy directly to production:
   ```bash
   vercel --prod
   ```

### Option B: Deploy via GitHub / Git Repository

1. Initialize Git and commit the project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Hamlet Hotels proposal website"
   ```
2. Push to your GitHub / GitLab / Bitbucket repository.
3. In the [Vercel Dashboard](https://vercel.com/new), click **Add New Project**, import your repository, and click **Deploy**. Vercel will automatically detect Next.js and deploy with zero manual configuration.

---

## Re-generating the Open Graph Image

If you ever wish to modify the title or layout of the 1200x630 Open Graph preview image:
1. Edit [`scripts/generate-og-image.mjs`](file:///Users/kesav/Selfera/Proposals/Hamlet%20Hotels/scripts/generate-og-image.mjs).
2. Run:
   ```bash
   node scripts/generate-og-image.mjs
   ```
This updates `public/og-image.png`.
