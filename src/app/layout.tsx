import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Together, Not For | Custom Software for Communities",
  description:
    "Socially conscious software solutions for local governments, small businesses, and non-profits. We build custom maps, websites, and applications designed to empower and uplift communities.",
  keywords: [
    "civic tech",
    "civic technology",
    "local government software",
    "non-profit software",
    "small business web solutions",
    "community technology",
    "custom web development",
    "social impact technology",
    "transparent government tools",
    "mission-driven software",
  ],
  authors: [{ name: "Together, Not For" }],
  creator: "Together, Not For",
  publisher: "Together, Not For",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://togethernotfor.com",
    siteName: "Together, Not For",
    title: "Together, Not For | Custom Software for Communities",
    description:
      "Socially conscious software solutions for local governments, small businesses, and non-profits.",
    images: [
      {
        url: "/seo-cropped.png",
        width: 1200,
        height: 630,
        alt: "Together, Not For - Custom Software for Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Together, Not For | Custom Software for Communities",
    description:
      "Socially conscious software solutions for local governments, small businesses, and non-profits.",
    images: ["/seo-cropped.png"],
    // TODO: Add Twitter handle once account is created
    // creator: "@togethernotfor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
