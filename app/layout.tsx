import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Analytics from "./components/Analytics";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ananya Shah - Portfolio",
  description: "Full-stack developer passionate about creating innovative web solutions",
  keywords: "full-stack developer, web development, react, nextjs, portfolio, software engineer",
  authors: [{ name: "Ananya Shah" }],
  creator: "Ananya Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ananyashah.dev",
    title: "Ananya Shah - Full-Stack Developer",
    description: "Full-stack developer passionate about creating innovative web solutions",
    siteName: "Ananya Shah Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananya Shah - Full-Stack Developer",
    description: "Full-stack developer passionate about creating innovative web solutions"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
