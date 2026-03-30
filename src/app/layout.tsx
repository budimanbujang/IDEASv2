import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import TopBar from '@/components/layout/TopBar'
import JohorContextPanel from '@/components/layout/JohorContextPanel'

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
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary font-['Inter',system-ui,sans-serif] antialiased">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopBar />
            <main className="flex-1 overflow-y-auto p-6 pb-16">
              {children}
            </main>
          </div>
        </div>
        <JohorContextPanel />
      </body>
    </html>
  )
}
