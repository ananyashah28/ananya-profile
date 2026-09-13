import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";
import Analytics from "./components/Analytics";
import GoogleAnalytics from "./components/GoogleAnalytics";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import GlobalSearch from "./components/GlobalSearch";

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
  metadataBase: new URL('https://ananyas-portfolio.vercel.app'),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '192x192' }
    ],
    apple: [
      { url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ananyas-portfolio.vercel.app",
    title: "Ananya Shah - Full-Stack Developer",
    description: "Full-stack developer passionate about creating innovative web solutions",
    siteName: "Ananya Shah Portfolio",
    images: [{
      url: '/images/ProfilePic/profile pic.jpg',
      width: 1200,
      height: 630,
      alt: 'Ananya Shah - Full-Stack Developer'
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananya Shah - Full-Stack Developer",
    description: "Full-stack developer passionate about creating innovative web solutions",
    images: ['/images/ProfilePic/profile pic.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

import { ThemeProvider } from "./components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-[#090d16] text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Script id="theme-script" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`}
        </Script>
        <Script id="register-sw" strategy="afterInteractive">
          {`if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js')})}`}
        </Script>
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ananya Shah",
              "url": "https://ananyashah.dev",
              "image": "https://ananyashah.dev/images/ProfilePic/profile pic.jpg",
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Operisoft Technologies Pvt Ltd"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Ahmedabad Institute Of Technology"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Masai School x IIT Roorkee"
                }
              ],
              "knowsAbout": ["Web Development", "AI/ML", "React", "Next.js", "Node.js", "Python"],
              "sameAs": [
                "https://github.com/ananyashah28",
                "https://www.linkedin.com/in/ananyashah2811/"
              ]
            }
          `}
        </Script>
        <ThemeProvider>
          <Analytics />
          <GoogleAnalytics />
          <GlobalSearch />
          <ErrorBoundary>
            <Navigation />
            <PageTransition>
              {children}
            </PageTransition>
            <Footer />
            <BackToTop />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
