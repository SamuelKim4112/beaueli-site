import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google"; // Changed Libre to Montserrat for modern luxury
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beaueli.com"),
  title: {
    default: "Beaueli | Premium Hair Care & Recovery",
    template: "%s | Beaueli",
  },
  alternates: {
    canonical: "/",
  },
  description: "Experience premium hair care with Beaueli's advanced Minoxidil & Biotin formulas. Dermatologist-reviewed ingredients for visible progress.",
  keywords: ["hair care", "hair routine", "minoxidil", "biotin", "thickening", "premium hair care", "dermatologist reviewed"],
  authors: [{ name: "Beaueli" }],
  creator: "Beaueli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.beaueli.com",
    title: "Beaueli | Premium Hair Care & Recovery",
    description: "Experience premium hair care with Beaueli's advanced Minoxidil & Biotin formulas. Consistency over trends.",
    siteName: "Beaueli",
    images: [
      {
        url: "/hero-hyper-real.png",
        width: 1200,
        height: 630,
        alt: "Beaueli Premium Hair Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beaueli | Premium Hair Care & Recovery",
    description: "Premium hair care solutions. Start your routine with Beaueli.",
    images: ["/hero-hyper-real.png"],
  },
  verification: {
    google: "GOOGLE-SITE-VERIFICATION-TOKEN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import Script from "next/script";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} min-h-screen bg-background font-sans antialiased bg-noise`}>
        {children}
      </body>
    </html>
  );
}
