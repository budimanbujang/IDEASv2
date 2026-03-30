'use client'

import React from 'react'
import Link from 'next/link'
import {
  Brain, BarChart3, LineChart, Database, Cpu, Award,
  ChevronRight, Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

const subPages = [
  {
    title: 'Ecosystem Dashboard',
    description: '8-dimension smart city performance dashboard — public-facing transparency layer showing IBTEC scores across Resources, Digital Infrastructure, Mobility, Governance, Social Cohesion, Experience Design, Industrial Innovation, and AI-Native Operations.',
    href: '/intelligence/ecosystem-dashboard',
    icon: BarChart3,
    color: '#06B6D4',
    badge: 'PUBLIC',
    badgeColor: '#22C55E',
    stats: [
      { label: 'Dimensions', value: '8' },
      { label: 'Health Score', value: '78/100' },
    ],
  },
  {
    title: 'Market Intelligence',
    description: 'Internal analytics on capability search trends, high-value guild collaboration patterns, and growth vectors tracking Explorer-to-Resident conversion by sector.',
    href: '/intelligence/market-intelligence',
    icon: LineChart,
    color: '#A855F7',
    badge: 'INTERNAL',
    badgeColor: '#F59E0B',
    stats: [
      { label: 'Trending Searches', value: '10' },
      { label: 'Collaborations', value: '24' },
    ],
  },
  {
    title: 'AI Models',
    description: 'Registry of deployed AI/ML models powering the IBTEC ecosystem — from predictive maintenance and traffic optimisation to drug discovery and crop analytics.',
    href: '/intelligence/models',
    icon: Cpu,
    color: '#EC4899',
    stats: [
      { label: 'Models', value: '34' },
      { label: 'Inference/day', value: '12.4K' },
    ],
  },
  {
    title: 'Data Fabric',
    description: 'Cross-vertical data mesh connecting guild datasets through federated learning, differential privacy, and AI Verify-compliant governance.',
    href: '/intelligence/data-fabric',
    icon: Database,
    color: '#3B82F6',
    stats: [
      { label: 'Sources', value: '47' },
      { label: 'APIs', value: '23' },
    ],
  },
  {
    title: 'Benchmarks',
    description: 'IBTEC performance benchmarks against global smart city indices — Songdo, Masdar, One North, and NEOM — across all 8 ecosystem dimensions.',
    href: '/benchmarks',
    icon: Award,
    color: '#D4A847',
    stats: [
      { label: 'Comparisons', value: '5' },
      { label: 'Ranking', value: '#3' },
    ],
  },
]

export default function IntelligencePage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Brain className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Intelligence Layer</h1>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          The analytical nervous system of IDEAS — real-time ecosystem dashboards, market intelligence,
          AI model registry, and cross-vertical data fabric powering evidence-based decision making across all guilds.
        </p>
      </div>

      {/* AI Insight Banner */}
      <div className="bg-surface border border-primary/30 rounded-lg p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-primary font-medium">Intelligence feeds are live</p>
          <p className="text-xs text-text-secondary mt-0.5">
            47 data sources connected | 23 active APIs | 12,400 AI decisions/day | Last sync: 3 seconds ago
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          <span className="text-xs text-green-400 font-medium">Real-time</span>
        </div>
      </div>

      {/* Sub-page Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {subPages.map((page) => {
          const Icon = page.icon
          return (
            <Link
              key={page.href}
              href={page.href}
              className="group bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="h-1" style={{ backgroundColor: page.color }} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${page.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: page.color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                        {page.title}
                      </h3>
                      {page.badge && (
                        <span
                          className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded mt-0.5 inline-block"
                          style={{
                            color: page.badgeColor,
                            backgroundColor: `${page.badgeColor}15`,
                            border: `1px solid ${page.badgeColor}30`,
                          }}
                        >
                          {page.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors mt-1" />
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {page.description}
                </p>

                <div className="flex items-center gap-4 pt-3 border-t border-border">
                  {page.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-bold" style={{ color: page.color }}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
