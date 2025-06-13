import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}