'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/theme'
import {
  Search,
  Bell,
  ChevronRight,
  Sun,
  Moon,
} from 'lucide-react'

const segmentLabels: Record<string, string> = {
  discover: 'Discover',
  engage: 'Engage',
  accelerate: 'Accelerate',
  intelligence: 'Intelligence',
  operations: 'Operations',
  federation: 'Federation',
  monetisation: 'Monetise',
  projects: 'Projects',
  trust: 'Trust Portal',
  admin: 'Admin',
  context: 'Johor Context',
  benchmarks: 'Benchmarks',
  capabilities: 'Capabilities',
  tenants: 'Tenants',
  matchmaking: 'Matchmaking',
  map: 'IBTEC Map',
  tiers: 'Tiers',
  guilds: 'Guilds',
  pipeline: 'Pipeline',
  challenges: 'Challenges',
  'grand-challenges': 'Grand Challenges',
  sprints: 'Sprints',
  ventures: 'Ventures',
  sandbox: 'Sandbox',
  'ecosystem-dashboard': 'Ecosystem Dashboard',
  'market-intelligence': 'Market Intel',
  models: 'AI Models',
  'data-fabric': 'Data Fabric',
  analytics: 'Analytics',
  'agentic-ai': 'Agentic AI',
  'digital-twin': 'Digital Twin',
  iot: 'IoT Sensors',
  energy: 'Energy',
  network: '5G Network',
  partners: 'Partners',
  exchanges: 'Exchanges',
  marketplace: 'Marketplace',
  iaap: 'IaaP',
  revenue: 'Revenue',
  sprint: '90-Day Sprint',
  gates: 'Phase Gates',
  competitive: 'Competitive',
  history: 'History',
}

function formatSegment(segment: string): string {
  return segmentLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function TopBar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const breadcrumbs = useMemo(() => {
    if (pathname === '/') return [{ label: 'Dashboard', path: '/' }]
    const segments = pathname.split('/').filter(Boolean)
    return [
      { label: 'Home', path: '/' },
      ...segments.map((seg, i) => ({
        label: formatSegment(seg),
        path: '/' + segments.slice(0, i + 1).join('/'),
      })),
    ]
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 h-16 flex items-center justify-between shrink-0',
        'bg-surface/80 backdrop-blur-md border-b border-border',
        'px-6 gap-4'
      )}
    >
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1 text-sm min-w-0">
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={crumb.path}>
            {i > 0 && <ChevronRight size={14} className="text-text-secondary/50 shrink-0" />}
            {i === breadcrumbs.length - 1 ? (
              <span className="text-text-primary font-medium truncate">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.path}
                className="text-text-secondary hover:text-text-primary transition-colors truncate"
              >
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Search */}
      <div className="flex-1 max-w-md mx-auto">
        <div
          className={cn(
            'flex items-center gap-2 px-3 py-2 rounded-lg',
            'bg-surface-elevated border border-border',
            'text-text-secondary text-sm cursor-pointer',
            'hover:border-primary/30 transition-colors'
          )}
        >
          <Search size={16} />
          <span className="flex-1">Search IDEAS...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-background rounded border border-border">
            <span className="text-xs">&#8984;</span>K
          </kbd>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-surface-elevated transition-colors text-text-secondary hover:text-text-primary"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications */}
        <button
          className="relative p-2 rounded-lg hover:bg-surface-elevated transition-colors text-text-secondary hover:text-text-primary"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-4 h-4 text-[10px] font-bold flex items-center justify-center bg-red-500 text-white rounded-full">
            3
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
            DS
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-text-primary leading-tight">Datuk Syed</p>
            <p className="text-[10px] text-text-secondary leading-tight">Board Chair</p>
          </div>
          <span className="hidden lg:inline-flex items-center px-2 py-0.5 text-[10px] font-semibold rounded-full bg-accent-gold/20 text-accent-gold">
            ANCHOR
          </span>
        </div>
      </div>
    </header>
  )
}
