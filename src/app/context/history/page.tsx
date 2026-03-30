'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowLeft, Clock, CheckCircle2, XCircle, AlertTriangle,
  TrendingUp, Building2, Landmark, Zap, Users
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Cycle = {
  id: number
  era: string
  years: string
  status: 'partial' | 'failed' | 'active'
  tagline: string
  investment: string
  keyPlayers: string[]
  description: string
  achievements: string[]
  failures: string[]
  lessons: string[]
  color: string
}

const cycles: Cycle[] = [
  {
    id: 1,
    era: 'Sijori Growth Triangle',
    years: '1989 – 2000s',
    status: 'partial',
    tagline: 'Tri-national ambition, single-nation capture',
    investment: 'US$5B+ cumulative FDI',
    keyPlayers: ['Singapore EDB', 'Johor State', 'Riau Province', 'Multinational MNCs'],
    description:
      'Conceived as ASEAN\'s first cross-border economic triangle linking Singapore, Johor, and Indonesia\'s Riau Islands. The model aimed to combine Singapore\'s capital and connectivity, Johor\'s land and labour, and Riau\'s natural resources.',
    achievements: [
      'Established manufacturing corridors in Pasir Gudang and Tanjung Pelepas',
      'Created employment for 300K+ workers across the triangle',
      'Port of Tanjung Pelepas grew to handle 11M+ TEUs',
    ],
    failures: [
      'Benefits disproportionately captured by Singapore — Johor remained a production floor',
      'No technology transfer mechanism; MNCs retained all IP',
      'Cross-border coordination collapsed under sovereignty concerns',
      'Brain drain accelerated — Johor talent commuted to Singapore rather than building local ecosystem',
    ],
    lessons: [
      'Cross-border zones need neutral digital infrastructure, not just physical proximity',
      'Without innovation ecosystem, regions become cost-arbitrage plays with no stickiness',
    ],
    color: '#F59E0B',
  },
  {
    id: 2,
    era: 'Iskandar Malaysia',
    years: '2006 – 2015',
    status: 'partial',
    tagline: 'Grand vision, property-led execution',
    investment: 'RM383B committed investments',
    keyPlayers: ['IRDA', 'Khazanah Nasional', 'UEM Group', 'Themed Attractions'],
    description:
      'Launched as Malaysia\'s most ambitious economic corridor. Five flagship zones: Iskandar Puteri (admin), Nusajaya (education/medical), Senai-Kulai (logistics), Eastern Gate (oil & gas), and Western Gate (port).',
    achievements: [
      'Attracted RM338B in cumulative committed investments by 2023',
      'EduCity campus brought international universities (Newcastle, Southampton, Reading)',
      'Pinewood Studios (now Iskandar Studios) created creative industry anchor',
      'Senai Airport upgraded to handle cargo logistics',
    ],
    failures: [
      'Over-reliance on property development — 70% of investment was real estate',
      'Limited tech ecosystem development; no startup culture emerged',
      'Brain drain persisted — 300K+ Malaysians commuted daily to Singapore',
      'Themed attractions (Legoland, Puteri Harbour) underperformed projections',
      'Glut of commercial space — 60% vacancy rates in some developments',
    ],
    lessons: [
      'Infrastructure without ecosystem creates empty corridors',
      'Property-led development is not innovation-led development',
      'Talent retention requires compelling local opportunities, not just buildings',
    ],
    color: '#F59E0B',
  },
  {
    id: 3,
    era: 'Forest City',
    years: '2013 – 2020',
    status: 'failed',
    tagline: 'Smart-city rhetoric, speculative reality',
    investment: 'RM450B projected (US$100B)',
    keyPlayers: ['Country Garden (China)', 'Johor SDIB', 'Malaysian Government'],
    description:
      'A RM450B mega-development on four artificial islands in the Strait of Johor. Marketed as a futuristic smart city for 700,000 residents with autonomous vehicles, vertical gardens, and AI-managed infrastructure.',
    achievements: [
      'Completed approximately 30,000 residential units',
      'Created short-term construction employment',
      'Demonstrated potential scale of Johor development (4 islands, 30 sq km)',
    ],
    failures: [
      '85%+ vacancy rate — units purchased as speculative investments, not for habitation',
      'No innovation ecosystem, R&D facilities, or startup community ever materialised',
      'Chinese capital controls (2017) and Malaysia foreign buyer restrictions devastated sales',
      '"Smart city" features were marketing — no actual technology infrastructure deployed',
      'Environmental destruction of mangrove habitats drew international criticism',
      'Became a global cautionary tale cited in urban planning literature',
    ],
    lessons: [
      'A smart city without genuine technology and community is just expensive real estate',
      'Reliance on single-country capital flows creates existential vulnerability',
      'Place-making requires residents, businesses and culture — not just units',
      'IDEAS must ensure IBTEC never becomes "Forest City with an app"',
    ],
    color: '#EF4444',
  },
  {
    id: 4,
    era: 'Johor-Singapore SEZ + IBTEC',
    years: '2024 – present',
    status: 'active',
    tagline: 'Platform-first, ecosystem-driven',
    investment: 'RM110B pipeline + RM2.5-3.5B IDEAS',
    keyPlayers: ['JS-SEZ Authority', 'IBTEC', 'IDEAS Platform', 'Guild Anchors', 'Global Federation'],
    description:
      'The current cycle combines the Johor-Singapore Special Economic Zone (JS-SEZ) bilateral framework with IBTEC as the physical innovation hub and IDEAS as the digital backbone. Unlike predecessors, this cycle leads with technology ecosystem and platform network effects.',
    achievements: [
      'JS-SEZ MOU signed between Malaysia and Singapore (2024)',
      'RTS Link 65% complete — physical connectivity approaching',
      'IDEAS platform design incorporating lessons from all three previous failures',
      'Guild-based innovation model attracting life sciences, semiconductor, agrifood anchors',
    ],
    failures: [
      'Risk: repeating infrastructure-without-ecosystem if IDEAS delivery falters',
      'Risk: property speculation in surrounding areas could overshadow innovation narrative',
      'Risk: political cycle changes could redirect funding priorities',
    ],
    lessons: [
      'This is Johor\'s fourth attempt — failure is not an option but a real possibility',
      'IDEAS must deliver measurable platform stickiness within 18 months',
      'Federation model must prove global network effects before local enthusiasm fades',
    ],
    color: '#22C55E',
  },
]

const statusConfig: Record<string, { icon: React.ElementType; label: string; color: string }> = {
  partial: { icon: Clock, label: 'Partial Success', color: '#F59E0B' },
  failed: { icon: XCircle, label: 'Failed', color: '#EF4444' },
  active: { icon: Zap, label: 'Active', color: '#22C55E' },
}

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-surface text-text-primary p-6 lg:p-10 space-y-10">
      <Link href="/context" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-primary">
        <ArrowLeft size={14} /> Back to Johor Context
      </Link>

      <header>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight flex items-center gap-3">
          <Landmark size={32} className="text-primary" />
          Historical Development Cycles
        </h1>
        <p className="mt-2 text-text-secondary max-w-3xl">
          Johor has attempted large-scale economic transformation three times before. Each cycle invested billions yet failed to create a self-sustaining innovation ecosystem. Understanding <em>why</em> is essential to ensuring IBTEC + IDEAS succeeds where predecessors did not.
        </p>
      </header>

      {/* Timeline */}
      <section className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

        <div className="space-y-8">
          {cycles.map((c) => {
            const sc = statusConfig[c.status]
            const StatusIcon = sc.icon
            return (
              <div key={c.id} className="lg:pl-16 relative">
                <div
                  className="hidden lg:flex absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 items-center justify-center"
                  style={{ borderColor: c.color, backgroundColor: `${c.color}20` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                </div>

                <div
                  className="rounded-2xl border border-border bg-surface p-6 lg:p-8 space-y-5"
                  style={{ borderLeftColor: c.color, borderLeftWidth: 4 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <StatusIcon size={18} style={{ color: sc.color }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: sc.color }}>
                          {sc.label}
                        </span>
                        <span className="text-xs text-text-secondary">|</span>
                        <span className="text-xs text-text-secondary">{c.years}</span>
                      </div>
                      <h2 className="text-xl font-bold">{c.era}</h2>
                      <p className="text-sm italic text-text-secondary">{c.tagline}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-text-secondary block">Investment</span>
                      <span className="font-bold text-lg" style={{ color: c.color }}>{c.investment}</span>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">{c.description}</p>

                  <div>
                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Key Players</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {c.keyPlayers.map((p) => (
                        <span key={p} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-border">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-green-400 flex items-center gap-1.5">
                        <CheckCircle2 size={14} /> Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {c.achievements.map((a) => (
                          <li key={a} className="text-xs text-text-secondary flex items-start gap-1.5">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-green-400 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-red-400 flex items-center gap-1.5">
                        <AlertTriangle size={14} /> {c.status === 'active' ? 'Risks' : 'Failures'}
                      </h4>
                      <ul className="space-y-1.5">
                        {c.failures.map((f) => (
                          <li key={f} className="text-xs text-text-secondary flex items-start gap-1.5">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-1.5 mb-2">
                      <AlertTriangle size={14} /> Key Lessons
                    </h4>
                    <ul className="space-y-1.5">
                      {c.lessons.map((l) => (
                        <li key={l} className="text-xs text-text-secondary flex items-start gap-1.5">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-amber-400 shrink-0" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Pattern Recognition */}
      <section className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-6 space-y-3 max-w-3xl">
        <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
          <AlertTriangle size={20} /> The Recurring Pattern
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          Every previous cycle followed the same trajectory: <strong className="text-text-primary">massive capital injection, physical infrastructure build, failure to create ecosystem stickiness, talent and value leak to Singapore</strong>. IDEAS breaks this pattern by inverting the model: ecosystem-first, platform-first, community-first — with physical infrastructure as a <em>consequence</em> of demand, not a <em>hope</em> for it.
        </p>
      </section>
    </div>
  )
}
