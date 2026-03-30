'use client'

import React from 'react'
import Link from 'next/link'
import {
  Globe, ArrowLeft, TrendingUp, Users, Building2,
  ShieldAlert, CheckCircle2, AlertTriangle, XCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Competitor = {
  country: string
  zone: string
  threat: 'high' | 'medium' | 'low'
  description: string
  advantage: string
  weakness: string
  fdiVolume: string
  labourCost: string
  infraScore: string
  innovationRank: string
  keyAnchors: string[]
  incentives: string[]
}

const competitors: Competitor[] = [
  {
    country: 'Vietnam',
    zone: 'Hai Phong & Da Nang Tech Zones',
    threat: 'high',
    description:
      'Vietnam has emerged as the fastest-rising FDI destination in ASEAN. Samsung alone has invested over US$20B. Government is aggressively courting semiconductor and electronics manufacturing with generous tax holidays.',
    advantage: 'Low labour costs (60% below Malaysia), aggressive FDI incentives, Samsung anchor, young demographics',
    weakness: 'Weak IP protection, limited R&D depth, underdeveloped tertiary education, energy grid constraints',
    fdiVolume: 'US$36.6B (2024)',
    labourCost: 'US$250-350/mo',
    infraScore: '6.2/10',
    innovationRank: '#44 GII',
    keyAnchors: ['Samsung', 'Intel', 'LG', 'Foxconn'],
    incentives: ['4-year tax holiday', 'Land-use fee exemptions', 'Import duty waivers on raw materials'],
  },
  {
    country: 'Indonesia',
    zone: 'Nusantara (IKN) & Batam FTZ',
    threat: 'medium',
    description:
      'Indonesia is building an entirely new capital city (Nusantara) with smart-city ambitions. Batam continues to serve as a manufacturing bridge to Singapore. Massive domestic market of 280M provides unmatched scale.',
    advantage: 'Massive domestic market, sovereign wealth backing (INA), natural resource abundance, Batam proximity to Singapore',
    weakness: 'Regulatory complexity, infrastructure gaps outside Java, corruption indices, IKN funding uncertainty',
    fdiVolume: 'US$47.3B (2024)',
    labourCost: 'US$300-450/mo',
    infraScore: '5.8/10',
    innovationRank: '#61 GII',
    keyAnchors: ['Hyundai', 'CATL', 'Microsoft', 'SoftBank'],
    incentives: ['Tax holidays up to 20 years', 'Golden visa for investors', 'Special economic zone benefits'],
  },
  {
    country: 'Thailand',
    zone: 'Eastern Economic Corridor (EEC)',
    threat: 'high',
    description:
      'The EEC is Thailand\'s flagship initiative spanning Chachoengsao, Chonburi, and Rayong. Deep existing automotive cluster (largest in ASEAN) now pivoting to EV manufacturing. Strong Japanese investor base provides stability.',
    advantage: 'BOI incentives, established automotive cluster, deep Japanese ties, EV hub ambitions, 5G testbeds',
    weakness: 'Political instability cycles, innovation culture gap, aging demographics, Thai-language business environment',
    fdiVolume: 'US$28.7B (2024)',
    labourCost: 'US$400-550/mo',
    infraScore: '7.1/10',
    innovationRank: '#36 GII',
    keyAnchors: ['Toyota', 'BYD', 'Foxconn', 'AWS'],
    incentives: ['8-year CIT exemption', 'Smart visa programme', '50% reduction on personal income tax'],
  },
  {
    country: 'Philippines',
    zone: 'Clark & New Clark City',
    threat: 'low',
    description:
      'New Clark City envisions a disaster-resilient smart city north of Manila. Clark Freeport leverages former US military base infrastructure. Strong English-speaking talent pool supports BPO and knowledge services.',
    advantage: 'English-speaking talent, BPO ecosystem, young demographics, cultural affinity with Western markets',
    weakness: 'Infrastructure deficit, natural disaster exposure, bureaucratic delays, limited deep-tech capacity',
    fdiVolume: 'US$11.2B (2024)',
    labourCost: 'US$280-400/mo',
    infraScore: '5.1/10',
    innovationRank: '#56 GII',
    keyAnchors: ['Accenture', 'JP Morgan', 'Google', 'Converge ICT'],
    incentives: ['CREATE Act tax incentives', 'PEZA zone benefits', 'Digital economy tax breaks'],
  },
]

const threatColors: Record<string, string> = {
  high: '#EF4444',
  medium: '#F59E0B',
  low: '#22C55E',
}

export default function CompetitivePage() {
  return (
    <div className="min-h-screen bg-surface text-text-primary p-6 lg:p-10 space-y-10">
      <Link href="/context" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-primary">
        <ArrowLeft size={14} /> Back to Johor Context
      </Link>

      <header>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight flex items-center gap-3">
          <Globe size={32} className="text-primary" />
          ASEAN Competitive Landscape
        </h1>
        <p className="mt-2 text-text-secondary max-w-3xl">
          Detailed comparison of ASEAN economic zones competing for the same FDI flows, talent pools and innovation mandates that IBTEC targets.
        </p>
      </header>

      {/* Summary Table */}
      <section className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-white/[.02]">
              <th className="p-4 text-left text-text-secondary font-medium">Country / Zone</th>
              <th className="p-4 text-left text-text-secondary font-medium">Threat</th>
              <th className="p-4 text-left text-text-secondary font-medium">FDI (2024)</th>
              <th className="p-4 text-left text-text-secondary font-medium">Labour Cost</th>
              <th className="p-4 text-left text-text-secondary font-medium">Infra Score</th>
              <th className="p-4 text-left text-text-secondary font-medium">Innovation Rank</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr key={c.country} className={cn('border-b border-border', i % 2 === 0 && 'bg-white/[.02]')}>
                <td className="p-4 font-semibold">{c.country} <span className="text-text-secondary font-normal text-xs block">{c.zone}</span></td>
                <td className="p-4">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ color: threatColors[c.threat], backgroundColor: `${threatColors[c.threat]}18` }}
                  >
                    {c.threat}
                  </span>
                </td>
                <td className="p-4">{c.fdiVolume}</td>
                <td className="p-4">{c.labourCost}</td>
                <td className="p-4">{c.infraScore}</td>
                <td className="p-4">{c.innovationRank}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-primary bg-primary/5">
              <td className="p-4 font-bold text-primary">IBTEC / JS-SEZ <span className="text-text-secondary font-normal text-xs block">Johor, Malaysia</span></td>
              <td className="p-4"><span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-primary bg-primary/10">Home</span></td>
              <td className="p-4 font-semibold">RM110B pipeline</td>
              <td className="p-4">US$450-600/mo</td>
              <td className="p-4">7.5/10</td>
              <td className="p-4">#33 GII</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Detailed Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Detailed Competitor Profiles</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {competitors.map((c) => (
            <div
              key={c.country}
              className="rounded-2xl border border-border bg-surface p-6 space-y-4"
              style={{ borderTopColor: threatColors[c.threat], borderTopWidth: 3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{c.country}</h3>
                  <p className="text-sm text-text-secondary">{c.zone}</p>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ color: threatColors[c.threat], backgroundColor: `${threatColors[c.threat]}18` }}
                >
                  {c.threat} threat
                </span>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">{c.description}</p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-border p-3">
                  <span className="text-text-secondary text-xs block">FDI Volume</span>
                  <span className="font-semibold">{c.fdiVolume}</span>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <span className="text-text-secondary text-xs block">Labour Cost</span>
                  <span className="font-semibold">{c.labourCost}</span>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <span className="text-text-secondary text-xs block">Infrastructure</span>
                  <span className="font-semibold">{c.infraScore}</span>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <span className="text-text-secondary text-xs block">Innovation Rank</span>
                  <span className="font-semibold">{c.innovationRank}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-xs font-semibold text-green-400">Key Anchors</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {c.keyAnchors.map((a) => (
                      <span key={a} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-border">{a}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-400">Incentives</span>
                  <ul className="mt-1 space-y-1">
                    {c.incentives.map((inc) => (
                      <li key={inc} className="text-xs text-text-secondary flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="mt-0.5 text-blue-400 shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-medium text-green-400 text-xs">Advantage</span>
                  <p className="text-xs text-text-secondary mt-0.5">{c.advantage}</p>
                </div>
                <div>
                  <span className="font-medium text-red-400 text-xs">Weakness</span>
                  <p className="text-xs text-text-secondary mt-0.5">{c.weakness}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IBTEC Differentiation */}
      <section className="rounded-2xl border-2 border-primary bg-primary/5 p-6 space-y-3 max-w-3xl">
        <h3 className="text-lg font-bold text-primary">IBTEC Differentiation via IDEAS</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          Unlike competitors who offer static incentive packages and physical infrastructure, IBTEC&apos;s IDEAS platform creates a <strong className="text-text-primary">compounding digital advantage</strong>: network effects, data moats, AI-powered matchmaking and federated innovation that no competitor can replicate with tax holidays alone.
        </p>
      </section>
    </div>
  )
}
