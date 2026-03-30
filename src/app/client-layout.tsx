'use client'

import React from 'react'
import { ThemeProvider } from '@/lib/theme'
import Sidebar from '@/components/layout/Sidebar'
import TopBar from '@/components/layout/TopBar'
import JohorContextPanel from '@/components/layout/JohorContextPanel'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden bg-background text-text-primary">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <TopBar />
          <main className="flex-1 overflow-y-auto p-6 pb-16">
            {children}
          </main>
        </div>
      </div>
      <JohorContextPanel />
    </ThemeProvider>
  )
}
