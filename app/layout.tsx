import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { GA_TRACKING_ID, isGAEnabled } from '../lib/gtag'

export const metadata: Metadata = {
  title: 'Autu - Cuộc thi giao dịch trực tiếp tại thị trường Việt Nam',
  description: 'Đăng ký tham gia cuộc thi giao dịch trực tiếp tại thị trường Việt Nam, nhận giải thưởng hấp dẫn lên đến 46.000.000 VNĐ mỗi tuần!',
  keywords: 'autu, trading, vietnam, contest, giao dịch, cuộc thi, forex, đầu tư, trading contest',
  authors: [{ name: 'Autu Financial' }],
  creator: 'Autu Financial',
  publisher: 'Autu Financial',
  
  // Open Graph (Facebook, LinkedIn, WhatsApp, Telegram, Discord)
  openGraph: {
    title: 'Autu - Cuộc thi giao dịch trực tiếp tại thị trường Việt Nam',
    description: 'Đăng ký tham gia cuộc thi giao dịch trực tiếp tại thị trường Việt Nam, nhận giải thưởng hấp dẫn lên đến 46.000.000 VNĐ mỗi tuần!',
    url: 'https://competition.autu.global',
    siteName: 'Autu Trading Contest',
    images: [
      {
        url: 'https://competition.autu.global/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Autu Trading Contest - Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ',
        type: 'image/png',
      },
      {
        url: 'https://competition.autu.global/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'Autu Trading Contest - Square Image',
        type: 'image/png',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
    alternateLocale: ['en_US'],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: '@autu_trading',
    creator: '@autu_trading',
    title: 'Autu - Cuộc thi giao dịch trực tiếp tại thị trường Việt Nam',
    description: 'Đăng ký tham gia cuộc thi giao dịch trực tiếp tại thị trường Việt Nam, nhận giải thưởng hấp dẫn lên đến 46.000.000 VNĐ mỗi tuần!',
    images: {
      url: 'https://competition.autu.global/og-image.png',
      alt: 'Autu Trading Contest - Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ',
    },
  },
  
  // Additional metadata for other platforms
  other: {
    // Pinterest
    'pinterest-rich-pin': 'true',
    'article:author': 'Autu Financial',
    'article:publisher': 'https://competition.autu.global',
    
    // WhatsApp specific
    'whatsapp:title': 'Autu Trading Contest',
    'whatsapp:description': 'Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần!',
    'whatsapp:image': 'https://competition.autu.global/og-image.png',
    
    // Telegram specific
    'telegram:channel': '@autu_vietnam',
    'telegram:title': 'Autu Trading Contest',
    'telegram:description': 'Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần!',
    'telegram:image': 'https://competition.autu.global/og-image.png',
    
    // LinkedIn specific
    'linkedin:owner': 'autu-financial',
    'linkedin:title': 'Autu - Cuộc thi giao dịch trực tiếp tại thị trường Việt Nam',
    'linkedin:description': 'Đăng ký tham gia cuộc thi giao dịch trực tiếp tại thị trường Việt Nam, nhận giải thưởng hấp dẫn lên đến 46.000.000 VNĐ mỗi tuần!',
    'linkedin:image': 'https://competition.autu.global/og-image.png',
    
    // Discord specific
    'discord:title': 'Autu Trading Contest',
    'discord:description': 'Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần!',
    'discord:image': 'https://competition.autu.global/og-image.png',
    
    // WeChat (微信)
    'wechat:title': 'Autu Trading Contest',
    'wechat:description': 'Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần!',
    'wechat:image': 'https://competition.autu.global/og-image.png',
    'wechat:timeline_title': 'Autu Trading Contest',
    'wechat:timeline_desc': 'Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần!',
    
    // Weibo (微博)
    'weibo:title': 'Autu Trading Contest',
    'weibo:description': 'Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần!',
    'weibo:image': 'https://competition.autu.global/og-image.png',
    
    // QQ
    'qq:title': 'Autu Trading Contest',
    'qq:description': 'Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần!',
    'qq:image': 'https://competition.autu.global/og-image.png',
    
    // Reddit
    'reddit:title': 'Autu Trading Contest - Vietnam Market',
    'reddit:description': 'Join our trading contest with weekly prizes up to 46 million VND!',
    'reddit:image': 'https://competition.autu.global/og-image.png',
    
    // TikTok
    'tiktok:title': 'Autu Trading Contest',
    'tiktok:description': 'Cuộc thi giao dịch với giải thưởng 46 triệu VNĐ mỗi tuần!',
    'tiktok:image': 'https://competition.autu.global/og-image.png',
    
    // Snapchat
    'snapchat:title': 'Autu Trading Contest',
    'snapchat:description': 'Trading contest with 46M VND weekly prizes!',
    'snapchat:image': 'https://competition.autu.global/og-image.png',
    
    // General App Links
    'al:web:url': 'https://competition.autu.global',
    'al:ios:app_name': 'Autu Trading',
    'al:android:app_name': 'Autu Trading',
    
    // Schema.org structured data
    'application-name': 'Autu Trading Contest',
    'msapplication-TileColor': '#1e3c72',
    'msapplication-TileImage': 'https://competition.autu.global/ms-icon-144x144.png',
    'theme-color': '#1e3c72',
  },
  
  // Additional metadata
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
  
  // Canonical URL
  alternates: {
    canonical: 'https://competition.autu.global',
    languages: {
      'vi-VN': 'https://competition.autu.global',
      'en-US': 'https://competition.autu.global/en',
    },
  },
  
  // App metadata
  applicationName: 'Autu Trading Contest',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
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
        <meta name="apple-mobile-web-app-title" content="Autu Contest" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
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
      <body>{children}</body>
    </html>
  )
}