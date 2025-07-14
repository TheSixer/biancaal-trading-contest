import type { Metadata } from 'next/types'
import Script from 'next/script'
import './globals.css'
import { GA_TRACKING_ID, isGAEnabled } from '../lib/gtag'
import Navigation from './components/Navigation'
import PWAInstallPrompt from './components/PWAInstallPrompt'
import PWAStatus from './components/PWAStatus'

export const metadata: Metadata = {
  title: 'Autu Trading Contest - Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ',
  description: 'Cuộc thi giao dịch Demo sàn AUTU với giải thưởng mỗi tuần giá trị lên đến 46.000.000 VNĐ. Đang chờ bạn đến tham gia!',
  keywords: 'trading contest, autu, demo trading, vietnam, prize, competition',
  authors: [{ name: 'Autu Financial' }],
  creator: 'Autu Financial',
  publisher: 'Autu Financial',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://competition.autu.global'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Autu Trading Contest - Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ',
    description: 'Cuộc thi giao dịch Demo sàn AUTU với giải thưởng mỗi tuần giá trị lên đến 46.000.000 VNĐ. Đang chờ bạn đến tham gia!',
    url: 'https://competition.autu.global',
    siteName: 'Autu Trading Contest',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Autu Trading Contest',
      },
      {
        url: '/og-image-square.png',
        width: 600,
        height: 600,
        alt: 'Autu Trading Contest',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autu Trading Contest - Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ',
    description: 'Cuộc thi giao dịch Demo sàn AUTU với giải thưởng mỗi tuần giá trị lên đến 46.000.000 VNĐ. Đang chờ bạn đến tham gia!',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        {/* Additional meta tags for social platforms */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Autu Competitiontest" />
        
        {/* Favicon and App Icons */}
        <link rel="icocom="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Autu Trading Contest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Autu Competition" />
        <meta name="description" content="Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1e3c72" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icon-152x152.png" />
        
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Autu Trading Contest - Vietnam Market',
              description: 'Weekly trading contest with prizes up to 46 million VND',
              startDate: '2024-01-01',
              endDate: '2024-12-31',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
              location: {
                '@type': 'VirtualLocation',
                url: 'https://competition.autu.global'
              },
              organizer: {
                '@type': 'Organization',
                name: 'Autu Financial',
                url: 'https://competition.autu.global'
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'VND',
                availability: 'https://schema.org/InStock'
              }
            })
          }}
        />
        
        {/* Google Analytics - Only load in production */}
        {isGAEnabled && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Navigation />
        {children}
        <PWAInstallPrompt />
        <PWAStatus />
      </body>
    </html>
  )
}