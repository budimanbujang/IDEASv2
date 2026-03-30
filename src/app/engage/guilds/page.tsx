'use client'

import React from 'react'
import Link from 'next/link'
import {
  Heart, Building2, Wheat, UtensilsCrossed, Dna, Cpu,
  Sparkles, Users, FolderKanban, TrendingUp, ChevronRight
} from 'lucide-react'

const guilds = [
  {
    id: 'healthcare',
    name: 'Healthcare Guild',
    company: 'KPJ Healthcare',
    icon: Heart,
    color: '#E11D48',
    description: 'AI-driven diagnostics, telemedicine, and patient journey transformation across KPJ\'s 30+ hospital network.',
    projects: 8,
    members: 42,
    throughput: 72,
    dataAssets: 14,
    phase: null,
  },
  {
    id: 'proptech',
    name: 'Proptech Guild',
    company: 'Johor Land Group',
    icon: Building2,
    color: '#3B82F6',
    description: 'Smart building analytics, digital twin townships, and property technology innovation for Johor\'s urban transformation.',
    projects: 6,
    members: 31,
    throughput: 65,
    dataAssets: 9,
    phase: null,
  },
  {
    id: 'agrifood',
    name: 'Agrifood Guild',
    company: 'JPG / Kulim',
    icon: Wheat,
    color: '#22C55E',
    description: 'Precision agriculture, plantation intelligence, and supply chain optimisation for Malaysia\'s agrifood sector.',
    projects: 5,
    members: 28,
    throughput: 78,
    dataAssets: 11,
    phase: null,
  },
  {
    id: 'food-services',
    name: 'Food Services Guild',
    company: 'QSR Brands',
    icon: UtensilsCrossed,
    color: '#F97316',
    description: 'Demand forecasting, operational efficiency, and consumer intelligence across 900+ QSR outlets in the region.',
    projects: 4,
    members: 22,
    throughput: 68,
    dataAssets: 7,
    phase: null,
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences Guild',
    company: 'KPJ + Biotech Corp',
    icon: Dna,
    color: '#EC4899',
    description: 'Biomarker discovery, clinical trial acceleration, and tropical disease research leveraging Malaysia\'s biodiversity.',
    projects: 3,
    members: 18,
    throughput: 45,
    dataAssets: 6,
    phase: 1,
  },
  {
    id: 'semiconductor',
    name: 'Semiconductor Guild',
    company: 'Global Semiconductor Corp',
    icon: Cpu,
    color: '#6366F1',
    description: 'Advanced packaging, workforce development, and supply chain resilience for Malaysia\'s semiconductor ecosystem.',
    projects: 3,
    members: 15,
    throughput: 38,
    dataAssets: 5,
    phase: 1,
  },
]

export default function GuildsPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Innovation Guilds</h1>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          Six vertical guilds anchored by major Johor corporates, each driving domain-specific innovation pipelines.
          Guilds provide structure, resources, and challenge framing for ecosystem participants.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-surface border border-border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[10px] text-text-secondary uppercase tracking-wide">Total Guilds</span>
          </div>
          <div className="text-xl font-bold text-text-primary">6</div>
        </div>
        <div className="bg-surface border border-border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <FolderKanban className="w-4 h-4 text-primary" />
            <span className="text-[10px] text-text-secondary uppercase tracking-wide">Total Projects</span>
          </div>
          <div className="text-xl font-bold text-text-primary">29</div>
        </div>
        <div className="bg-surface border border-border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-[10px] text-text-secondary uppercase tracking-wide">Guild Members</span>
          </div>
          <div className="text-xl font-bold text-text-primary">156</div>
        </div>
        <div className="bg-surface border border-border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-[10px] text-text-secondary uppercase tracking-wide">Avg Throughput</span>
          </div>
          <div className="text-xl font-bold text-text-primary">61%</div>
        </div>
      </div>

      {/* Guild Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {guilds.map((guild) => (
          <Link
            key={guild.id}
            href={`/engage/guilds/${guild.id}`}
            className="bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors group"
          >
            {/* Colored accent bar */}
            <div className="h-1.5 w-full" style={{ backgroundColor: guild.color }} />

            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${guild.color}15` }}>
                    <guild.icon className="w-5 h-5" style={{ color: guild.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {guild.name}
                    </h3>
                    <p className="text-[11px] text-text-secondary">{guild.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {guild.phase !== null && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Phase 1
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">{guild.description}</p>

              {/* Metrics Row */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="text-center">
                  <div className="text-sm font-bold text-text-primary">{guild.projects}</div>
                  <div className="text-[10px] text-text-secondary">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-text-primary">{guild.members}</div>
                  <div className="text-[10px] text-text-secondary">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-text-primary">{guild.dataAssets}</div>
                  <div className="text-[10px] text-text-secondary">Data Assets</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-text-primary">{guild.throughput}%</div>
                  <div className="text-[10px] text-text-secondary">Throughput</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${guild.throughput}%`, backgroundColor: guild.color }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
