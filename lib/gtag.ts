export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-D7Z4BC9HTM'

// Check if we're in production and GA ID is available
export const isProduction = process.env.NODE_ENV === 'production'
export const isGAEnabled = isProduction && GA_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && isGAEnabled) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && isGAEnabled) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track page views automatically
export const trackPageView = (url: string) => {
  if (isGAEnabled) {
    pageview(url)
  }
}

// TypeScript declarations for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
} 