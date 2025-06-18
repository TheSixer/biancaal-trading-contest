import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { GA_TRACKING_ID, isGAEnabled } from '../lib/gtag'

export const metadata: Metadata = {
  title: 'Biancaal Trading Contest - 越南市场模拟交易大赛',
  description: 'Autu举办的越南市场模拟交易大赛，赢取丰厚奖励！',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
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