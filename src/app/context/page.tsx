'use client'

import React from 'react'
import Link from 'next/link'
import {
  TrendingUp, Users, Train, Building2, ChevronRight,
  AlertTriangle, CheckCircle2, XCircle, Clock,
  Globe, ShieldAlert, Zap, Quote
} from 'lucide-react'
import { cn } from '@/lib/utils'

const heroStats = [
  { label: 'Foreign & Domestic Investments', value: 'RM110B', icon: TrendingUp, color: '#007B7F' },
  { label: 'Population Growth (2020-2030)', value: '12.5%', icon: Users, color: '#3B82F6' },
  { label: 'RTS Link Completion', value: '65%', icon: Train, color: '#A855F7' },
  { label: 'Property Price Growth YoY', value: '+5.3%', icon: Building2, color: '#D4A847' },
]

type Cycle = {
  era: string
  years: string
  status: 'partial' | 'failed' | 'active'
  description: string
  failureMode: string
  color: string
}

const historicalCycles: Cycle[] = [
  {
    era: 'Sijori Growth Triangle',
    years: '1989 – 2000s',
    status: 'partial',
    description: 'Tri-national economic zone linking Singapore, Johor & Riau. Initial momentum in manufacturing FDI.',
    failureMode: 'Coordination failures across three sovereign jurisdictions; benefits concentrated in Singapore.',
    color: '#F59E0B',
  },
  {
    era: 'Iskandar Malaysia',
    years: '2006 – 2015',
    status: 'partial',
    description: 'RM383B committed investment across 5 flagship zones. Major infrastructure build-out.',
    failureMode: 'Over-reliance on property development; limited tech ecosystem; brain drain to Singapore persisted.',
    color: '#F59E0B',
  },
  {
    era: 'Forest City',
    years: '2013 – 2020',
    status: 'failed',
    description: 'RM450B mega-project targeting 700K residents. Marketed as smart-city of the future.',
    failureMode: 'Speculative property play with no innovation ecosystem. Became a cautionary tale — 85% vacancy rate.',
    color: '#EF4444',
  },
  {
    era: 'Johor-Singapore SEZ + IBTEC',
    years: '2024 – present',
    status: 'active',
    description: 'JS-SEZ framework plus IBTEC as the innovation anchor. IDEAS as the digital backbone.',
    failureMode: 'Risk: repeating infrastructure-without-ecosystem pattern unless IDEAS delivers platform stickiness.',
    color: '#22C55E',
  },
]

const comparisonRows = [
  { dimension: 'Discoverability', without: 'PDF brochures, trade expos', with: 'AI-powered matchmaking, living catalogue' },
  { dimension: 'Accessibility', without: 'Months of paperwork', with: '72-hour digital onboarding' },
  { dimension: 'Network Effects', without: 'Isolated tenants', with: 'Guild-based collaboration, cross-pollination' },
  { dimension: 'Stickiness', without: 'Lease-dependent (easy exit)', with: 'Data, reputation & API lock-in' },
  { dimension: 'Global Reach', without: 'Regional marketing budget', with: 'Federation network across 50+ cities' },
  { dimension: 'Data Advantage', without: 'No shared intelligence', with: 'Real-time digital twin + marketplace' },
  { dimension: 'Investor Confidence', without: 'Opaque progress metrics', with: 'Live KPI dashboards, transparent governance' },
]

type Competitor = {
  country: string
  zone: string
  threat: 'high' | 'medium' | 'low'
  advantage: string
  weakness: string
}

const aseanCompetitors: Competitor[] = [
  { country: 'Vietnam', zone: 'Hai Phong & Da Nang Tech Zones', threat: 'high', advantage: 'Low labour costs, aggressive FDI incentives, Samsung anchor', weakness: 'Weak IP protection, limited R&D depth' },
  { country: 'Indonesia', zone: 'Nusantara (New Capital) & Batam', threat: 'medium', advantage: 'Massive domestic market, sovereign wealth backing', weakness: 'Regulatory complexity, infrastructure gaps' },
  { country: 'Thailand', zone: 'Eastern Economic Corridor (EEC)', threat: 'high', advantage: 'BOI incentives, established automotive cluster, deep Japanese ties', weakness: 'Political instability cycles, innovation culture gap' },
  { country: 'Philippines', zone: 'Clark & New Clark City', threat: 'low', advantage: 'English-speaking talent, BPO ecosystem', weakness: 'Infrastructure deficit, natural disaster exposure' },
]

const threatColors: Record<string, string> = {
  high: '#EF4444',
  medium: '#F59E0B',
  low: '#22C55E',
}

const statusIcons: Record<string, React.ElementType> = {
  partial: Clock,
  failed: XCircle,
  active: CheckCircle2,
}

const statusColors: Record<string, string> = {
  partial: '#F59E0B',
  failed: '#EF4444',
  active: '#22C55E',
}

export default function ContextPage() {
  return (
    <div className="min-h-screen bg-surface text-text-primary p-6 lg:p-10 space-y-12">
      <header>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
          Johor: The View From A Place That Cannot Afford To Stand Still
        </h1>
        <p className="mt-2 text-text-secondary max-w-3xl">
          Understanding the macro context — capital flows, demographics, infrastructure momentum and competitive threats — is essential before any technology investment.
        </p>
      </header>

      {/* Hero Stat Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {heroStats.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              className={cn('rounded-2xl border border-border bg-surface p-6 flex flex-col gap-3')}
              style={{ borderTopColor: s.color, borderTopWidth: 3 }}
            >
              <Icon size={28} style={{ color: s.color }} />
              <span className="text-3xl font-extrabold" style={{ color: s.color }}>{s.value}</span>
              <span className="text-sm text-text-secondary leading-tight">{s.label}</span>
            </div>
          )
        })}
      </section>

      {/* Historical Cycles */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Historical Development Cycles</h2>
          <Link href="/context/history" className="text-sm text-primary hover:underline flex items-center gap-1">
            Full analysis <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {historicalCycles.map((c) => {
            const StatusIcon = statusIcons[c.status]
            return (
              <div
                key={c.era}
                className="rounded-2xl border border-border bg-surface p-5 space-y-3"
                style={{ borderLeftColor: c.color, borderLeftWidth: 4 }}
              >
                <div className="flex items-center gap-2">
                  <StatusIcon size={18} style={{ color: statusColors[c.status] }} />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: statusColors[c.status] }}>
                    {c.status}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">{c.era}</h3>
                <span className="text-xs text-text-secondary">{c.years}</span>
                <p className="text-sm text-text-secondary leading-relaxed">{c.description}</p>
                <div className="border-t border-border pt-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={14} className="mt-0.5 text-amber-400 shrink-0" />
                    <p className="text-xs text-text-secondary leading-relaxed">{c.failureMode}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Without vs With IDEAS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Without IDEAS vs With IDEAS</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-text-secondary font-medium">Dimension</th>
                <th className="text-left p-4 font-medium" style={{ color: '#6B7280' }}>Without IDEAS</th>
                <th className="text-left p-4 font-medium" style={{ color: '#007B7F' }}>With IDEAS</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r, i) => (
                <tr key={r.dimension} className={cn('border-b border-border', i % 2 === 0 && 'bg-white/[.02]')}>
                  <td className="p-4 font-semibold">{r.dimension}</td>
                  <td className="p-4 text-text-secondary">{r.without}</td>
                  <td className="p-4" style={{ color: '#5EEAD4' }}>{r.with}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ASEAN Competitive Landscape */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">ASEAN Competitive Landscape</h2>
          <Link href="/context/competitive" className="text-sm text-primary hover:underline flex items-center gap-1">
            Full comparison <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {aseanCompetitors.map((c) => (
            <div
              key={c.country}
              className="rounded-2xl border border-border bg-surface p-5 space-y-3"
              style={{ borderTopColor: threatColors[c.threat], borderTopWidth: 3 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{c.country}</h3>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ color: threatColors[c.threat], backgroundColor: `${threatColors[c.threat]}18` }}
                >
                  {c.threat} threat
                </span>
              </div>
              <p className="text-xs text-text-secondary">{c.zone}</p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-green-400">Advantage: </span>
                  <span className="text-text-secondary">{c.advantage}</span>
                </div>
                <div>
                  <span className="font-medium text-red-400">Weakness: </span>
                  <span className="text-text-secondary">{c.weakness}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Quote */}
      <section className="rounded-2xl border border-border bg-surface p-8 flex gap-4 items-start max-w-3xl mx-auto">
        <Quote size={32} className="text-primary shrink-0 mt-1" />
        <div>
          <p className="text-lg italic leading-relaxed text-text-primary">
            IDEAS transforms IBTEC from a place into a platform. Places compete locally. Platforms compete globally.
          </p>
        </div>
      </section>
    </div>
  )
}
