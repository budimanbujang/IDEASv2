'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Search,
  Building2,
  Sparkles,
  Map,
  Users,
  Shield,
  Kanban,
  Target,
  Trophy,
  Zap,
  Rocket,
  FlaskConical,
  BarChart3,
  TrendingUp,
  Brain,
  Database,
  Radar,
  Monitor,
  Bot,
  Globe,
  Radio,
  Car,
  Wifi,
  Globe2,
  ArrowLeftRight,
  ShoppingBag,
  Package,
  DollarSign,
  FolderKanban,
  Timer,
  Milestone,
  ShieldCheck,
  Settings,
  MapPin,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'

interface NavItem {
  label: string
  icon: LucideIcon
  path: string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    title: 'OVERVIEW',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    ],
  },
  {
    title: 'LAYER 1 - DISCOVER',
    items: [
      { label: 'Capabilities', icon: Search, path: '/discover/capabilities' },
      { label: 'Tenants', icon: Building2, path: '/discover/tenants' },
      { label: 'Matchmaking', icon: Sparkles, path: '/discover/matchmaking' },
      { label: 'IBTEC Map', icon: Map, path: '/discover/map' },
    ],
  },
  {
    title: 'LAYER 2 - ENGAGE',
    items: [
      { label: 'Tiers', icon: Users, path: '/engage/tiers' },
      { label: 'Guilds', icon: Shield, path: '/engage/guilds' },
      { label: 'Pipeline', icon: Kanban, path: '/engage/pipeline' },
      { label: 'Challenges', icon: Target, path: '/engage/challenges' },
    ],
  },
  {
    title: 'LAYER 3 - ACCELERATE',
    items: [
      { label: 'Grand Challenges', icon: Trophy, path: '/accelerate/grand-challenges' },
      { label: 'Sprints', icon: Zap, path: '/accelerate/sprints' },
      { label: 'Ventures', icon: Rocket, path: '/accelerate/ventures' },
      { label: 'Sandbox', icon: FlaskConical, path: '/accelerate/sandbox' },
    ],
  },
  {
    title: 'LAYER 4 - INTELLIGENCE',
    items: [
      { label: 'Ecosystem Dashboard', icon: BarChart3, path: '/intelligence/ecosystem' },
      { label: 'Market Intel', icon: TrendingUp, path: '/intelligence/market' },
      { label: 'AI Models', icon: Brain, path: '/intelligence/ai-models' },
      { label: 'Data Fabric', icon: Database, path: '/intelligence/data-fabric' },
      { label: 'Benchmarks', icon: Radar, path: '/intelligence/benchmarks' },
    ],
  },
  {
    title: 'LAYER 5 - OPERATIONS',
    items: [
      { label: 'Command Centre', icon: Monitor, path: '/operations/command-centre' },
      { label: 'Agentic AI', icon: Bot, path: '/operations/agentic-ai' },
      { label: 'Digital Twin', icon: Globe, path: '/operations/digital-twin' },
      { label: 'IoT Sensors', icon: Radio, path: '/operations/iot-sensors' },
      { label: 'Autonomous', icon: Car, path: '/operations/autonomous' },
      { label: 'Energy', icon: Zap, path: '/operations/energy' },
      { label: '5G Network', icon: Wifi, path: '/operations/5g-network' },
    ],
  },
  {
    title: 'LAYER 6 - FEDERATION',
    items: [
      { label: 'Partners', icon: Globe2, path: '/federation/partners' },
      { label: 'Exchanges', icon: ArrowLeftRight, path: '/federation/exchanges' },
    ],
  },
  {
    title: 'LAYER 7 - MONETISE',
    items: [
      { label: 'Marketplace', icon: ShoppingBag, path: '/monetisation/marketplace' },
      { label: 'IaaP', icon: Package, path: '/monetisation/iaap' },
      { label: 'Revenue', icon: DollarSign, path: '/monetisation/revenue' },
    ],
  },
  {
    title: 'PROJECTS',
    items: [
      { label: 'Catalytic Projects', icon: FolderKanban, path: '/projects/catalytic' },
      { label: '90-Day Sprint', icon: Timer, path: '/projects/sprint' },
      { label: 'Phase Gates', icon: Milestone, path: '/projects/phase-gates' },
    ],
  },
  {
    title: 'GOVERNANCE',
    items: [
      { label: 'Trust Portal', icon: ShieldCheck, path: '/trust' },
      { label: 'Admin', icon: Settings, path: '/admin' },
    ],
  },
  {
    title: 'CONTEXT',
    items: [
      { label: 'Johor Context', icon: MapPin, path: '/context' },
    ],
  },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-surface border-r border-border',
        'flex flex-col transition-all duration-300 ease-in-out z-50',
        collapsed ? 'w-16' : 'w-[260px]'
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-border shrink-0">
        <div className={cn('flex items-center gap-2 overflow-hidden', collapsed && 'justify-center')}>
          <span className="text-xl font-bold text-primary whitespace-nowrap">
            IDEAS
          </span>
          {!collapsed && (
            <span className="text-[10px] font-semibold bg-accent-gold/20 text-accent-gold px-1.5 py-0.5 rounded-full">
              2.0
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-surface-elevated text-text-secondary transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Tagline */}
      {!collapsed && (
        <div className="px-4 py-2 border-b border-border">
          <p className="text-[10px] text-text-secondary leading-tight">
            Innovation District Ecosystem<br />Acceleration System
          </p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">
        {navGroups.map((group) => (
          <div key={group.title} className="mb-1">
            {!collapsed && (
              <div className="px-4 pt-3 pb-1">
                <span className="text-[10px] font-medium uppercase tracking-wider text-text-secondary/60">
                  {group.title}
                </span>
              </div>
            )}
            {collapsed && <div className="my-1 mx-2 border-t border-border/50" />}
            {group.items.map((item) => {
              const active = isActive(item.path)
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    'relative flex items-center gap-3 mx-2 rounded-md transition-all duration-150',
                    collapsed ? 'justify-center px-2 py-2' : 'px-3 py-1.5',
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                  )}
                >
                  {active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-primary rounded-r-full" />
                  )}
                  <Icon size={18} className="shrink-0" />
                  {!collapsed && (
                    <span className="text-sm truncate">{item.label}</span>
                  )}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>
    </aside>
  )
}
