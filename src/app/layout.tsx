import type { Metadata } from "next";
import { Inter } from "next/font/google"; // using Inter for that clean, premium look
import "./globals.css";

// Setup Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beaueli | Clinical Lash & Brow Care",
  description: "Stronger lashes, fuller brows. Clinically inspired formulas for visible results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
