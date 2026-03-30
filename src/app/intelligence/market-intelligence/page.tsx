'use client'

import React from 'react'
import {
  LineChart, Lock, TrendingUp, Search, GitBranch,
  ArrowUpRight, Sparkles, Users
} from 'lucide-react'
import { cn } from '@/lib/utils'

const trendingSearches = [
  { term: 'AI diagnostics', volume: 2840, change: '+32%' },
  { term: 'Semiconductor testing', volume: 2310, change: '+28%' },
  { term: 'Tropical crop data', volume: 1950, change: '+45%' },
  { term: 'GMP manufacturing', volume: 1720, change: '+18%' },
  { term: 'Halal certification', volume: 1580, change: '+22%' },
  { term: 'IoT sensor network', volume: 1340, change: '+15%' },
  { term: 'Clinical trial infra', volume: 1210, change: '+38%' },
  { term: 'Carbon credit registry', volume: 1080, change: '+52%' },
  { term: '5G URLLC slice', volume: 960, change: '+12%' },
  { term: 'Drug discovery pipeline', volume: 890, change: '+26%' },
]

const maxVolume = Math.max(...trendingSearches.map(s => s.volume))

const collaborationPatterns = [
  { from: 'Healthcare', to: 'Life Sciences', strength: 94, projects: 12, color: '#E11D48' },
  { from: 'Agrifood', to: 'Food Services', strength: 88, projects: 9, color: '#22C55E' },
  { from: 'Semiconductor', to: 'Proptech', strength: 82, projects: 7, color: '#6366F1' },
  { from: 'Healthcare', to: 'Semiconductor', strength: 76, projects: 5, color: '#E11D48' },
  { from: 'Proptech', to: 'Agrifood', strength: 71, projects: 4, color: '#3B82F6' },
  { from: 'Life Sciences', to: 'Food Services', strength: 68, projects: 3, color: '#EC4899' },
]

const growthVectors = [
  { sector: 'Healthcare & Biotech', conversions: 42, rate: 14.2, color: '#E11D48' },
  { sector: 'Agrifood & Plantation', conversions: 38, rate: 12.8, color: '#22C55E' },
  { sector: 'Semiconductor & Electronics', conversions: 31, rate: 10.5, color: '#6366F1' },
  { sector: 'Smart Building & Proptech', conversions: 27, rate: 9.1, color: '#3B82F6' },
  { sector: 'Food Services & Halal', conversions: 22, rate: 7.4, color: '#F97316' },
  { sector: 'Clean Energy & Carbon', conversions: 18, rate: 6.1, color: '#14B8A6' },
  { sector: 'AI & Data Analytics', conversions: 15, rate: 5.1, color: '#A855F7' },
]

const maxConversions = Math.max(...growthVectors.map(g => g.conversions))

// Simple connection diagram data
const guildNodes = [
  { id: 'healthcare', label: 'Healthcare', x: 80, y: 50, color: '#E11D48' },
  { id: 'lifesciences', label: 'Life Sciences', x: 280, y: 50, color: '#EC4899' },
  { id: 'agrifood', label: 'Agrifood', x: 80, y: 150, color: '#22C55E' },
  { id: 'foodservices', label: 'Food Services', x: 280, y: 150, color: '#F97316' },
  { id: 'semiconductor', label: 'Semiconductor', x: 80, y: 250, color: '#6366F1' },
  { id: 'proptech', label: 'Proptech', x: 280, y: 250, color: '#3B82F6' },
]

const connections = [
  { from: 0, to: 1, strength: 3 },
  { from: 2, to: 3, strength: 2.5 },
  { from: 4, to: 5, strength: 2 },
  { from: 0, to: 4, strength: 1.5 },
  { from: 5, to: 2, strength: 1.2 },
  { from: 1, to: 3, strength: 1 },
]

export default function MarketIntelligencePage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <LineChart className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Market Intelligence</h1>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
            INTERNAL
          </span>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          Internal analytics on capability search trends, high-value guild collaboration patterns,
          and growth vectors tracking Explorer-to-Resident conversion by sector.
        </p>
      </div>

      {/* AI Insight Banner */}
      <div className="bg-surface border border-primary/30 rounded-lg p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-primary font-medium">Intelligence Insight</p>
          <p className="text-xs text-text-secondary mt-0.5">
            &quot;Tropical crop data&quot; searches surged 45% this month driven by 3 Singapore-based agritech firms.
            Recommend prioritising JPG/Kulim dataset onboarding.
          </p>
        </div>
        <Lock className="w-4 h-4 text-amber-400 shrink-0" />
      </div>

      {/* Trending Capability Searches */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-5">
          <Search className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-text-primary">Trending Capability Searches</h3>
          <span className="text-[10px] text-text-secondary ml-auto">Last 30 days</span>
        </div>
        <div className="space-y-3">
          {trendingSearches.map((item, i) => (
            <div key={item.term} className="flex items-center gap-3">
              <span className="text-xs text-text-secondary w-5 text-right font-mono">{i + 1}</span>
              <span className="text-xs text-text-primary w-40 shrink-0 font-medium">{item.term}</span>
              <div className="flex-1 h-6 bg-surface-elevated rounded-full overflow-hidden relative">
                <div
                  className="h-full rounded-full transition-all duration-700 flex items-center justify-end pr-2"
                  style={{
                    width: `${(item.volume / maxVolume) * 100}%`,
                    backgroundColor: `hsl(${180 - i * 12}, 60%, 40%)`,
                  }}
                >
                  <span className="text-[10px] font-mono text-white/90 font-medium">
                    {item.volume.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 w-16 shrink-0 justify-end">
                <ArrowUpRight className="w-3 h-3 text-green-400" />
                <span className="text-[11px] font-mono text-green-400">{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* High-Value Collaboration Patterns */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-5">
            <GitBranch className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-text-primary">High-Value Collaboration Patterns</h3>
          </div>

          {/* Connection Diagram */}
          <svg viewBox="0 0 360 300" className="w-full mb-4">
            {/* Connection lines */}
            {connections.map((conn, i) => {
              const fromNode = guildNodes[conn.from]
              const toNode = guildNodes[conn.to]
              return (
                <line
                  key={i}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#007B7F"
                  strokeWidth={conn.strength}
                  opacity={0.4}
                  strokeDasharray="4 2"
                />
              )
            })}
            {/* Guild nodes */}
            {guildNodes.map((node) => (
              <g key={node.id}>
                <circle cx={node.x} cy={node.y} r="24" fill={`${node.color}20`} stroke={node.color} strokeWidth="1.5" />
                <text x={node.x} y={node.y + 1} textAnchor="middle" dominantBaseline="middle" fill={node.color} fontSize="9" fontWeight="600">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>

          {/* Collaboration list */}
          <div className="space-y-2">
            {collaborationPatterns.map((collab, i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
                <span className="text-xs font-medium w-28 shrink-0" style={{ color: collab.color }}>{collab.from}</span>
                <div className="flex items-center gap-1 text-text-secondary">
                  <span className="text-[10px]">&harr;</span>
                </div>
                <span className="text-xs font-medium w-28 shrink-0 text-text-primary">{collab.to}</span>
                <div className="flex-1 h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${collab.strength}%`, backgroundColor: collab.color }}
                  />
                </div>
                <span className="text-[10px] font-mono text-text-secondary w-8 text-right">{collab.strength}%</span>
                <span className="text-[10px] text-text-secondary w-14 text-right">{collab.projects} proj</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Vectors */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-text-primary">Growth Vectors</h3>
            <span className="text-[10px] text-text-secondary ml-auto">Explorer → Resident conversions</span>
          </div>

          <div className="space-y-4">
            {growthVectors.map((sector, i) => (
              <div key={sector.sector}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-secondary font-mono w-4">{i + 1}</span>
                    <span className="text-xs font-medium text-text-primary">{sector.sector}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-text-secondary" />
                      <span className="text-xs font-mono text-text-primary">{sector.conversions}</span>
                    </div>
                    <span className="text-[10px] font-mono text-green-400">{sector.rate}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-surface-elevated rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(sector.conversions / maxConversions) * 100}%`,
                      backgroundColor: sector.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <p className="text-[11px] text-text-secondary">
                <span className="text-primary font-medium">AI Insight:</span> Healthcare & Biotech leads conversions
                with 14.2% rate. Carbon & Clean Energy shows fastest growth trajectory (+52% MoM).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
