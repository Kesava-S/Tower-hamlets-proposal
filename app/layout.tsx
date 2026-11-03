import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#E04F34",
};

export const metadata: Metadata = {
  title: "Social media: how we compare | Hamlet Hotels",
  description: "Competitor Instagram benchmark for Hamlet Hotels: Hull, Reading, Maidstone.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Social media: how we compare | Hamlet Hotels",
    description: "Competitor Instagram benchmark for Hamlet Hotels: Hull, Reading, Maidstone.",
    url: "/",
    siteName: "Hamlet Hotels Benchmark",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social media: how we compare | Hamlet Hotels",
    description: "Competitor Instagram benchmark for Hamlet Hotels: Hull, Reading, Maidstone.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#F8FAFC] text-slate-900 selection:bg-[#E04F34] selection:text-white">
        {children}
      </body>
    </html>
  );
}
