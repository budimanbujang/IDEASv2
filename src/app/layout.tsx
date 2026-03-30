import type { Metadata } from 'next'
import './globals.css'
import { ClientLayout } from './client-layout'

export const metadata: Metadata = {
  title: 'IDEAS 2.0 — Integrated Discovery, Engagement & Acceleration System',
  description: 'The world\'s first AI-native technopolis platform. Making IBTEC\'s innovation ecosystem discoverable, accessible, and transactable — globally.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Inter',system-ui,sans-serif] antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
