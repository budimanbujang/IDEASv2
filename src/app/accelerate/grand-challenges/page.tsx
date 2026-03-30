'use client'

import React from 'react'
import Link from 'next/link'
import {
  Trophy, Clock, Users, Award, ArrowLeft, Target,
  Calendar, ChevronRight, Flame
} from 'lucide-react'
import { cn } from '@/lib/utils'

const guildColors: Record<string, string> = {
  Healthcare: '#E11D48',
  Proptech: '#3B82F6',
  Agrifood: '#22C55E',
  'Food Services': '#F97316',
  'Life Sciences': '#EC4899',
  Semiconductor: '#6366F1',
  'Cross-Vertical': '#A855F7',
}

const statusConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  active: { label: 'Active', color: '#22C55E', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  upcoming: { label: 'Upcoming', color: '#3B82F6', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  completed: { label: 'Completed', color: '#94A3B8', bg: 'bg-gray-500/10', border: 'border-gray-500/30' },
}

const challenges = [
  {
    id: 'gc-1',
    title: 'Tropical Data Centre Cooling',
    theme: 'Sustainability x Semiconductor',
    prize: 'RM500K',
    status: 'active',
    submissions: 34,
    deadline: '2026-08-15',
    guilds: ['Semiconductor', 'Proptech'],
    description: 'Achieve PUE < 1.2 in equatorial climate using novel cooling approaches. Solutions may leverage immersion cooling, tropical biomass heat exchange, or AI-driven thermal management.',
    criteria: [
      'Demonstrate PUE improvement of at least 30% over baseline',
      'Scalable to 10MW+ facility within IBTEC campus',
      'Viable for tropical climate (30-35\u00B0C ambient, >80% humidity)',
      'Total cost of ownership competitive within 3-year payback',
    ],
    judges: ['Prof. Tan Wei Lin (UTM)', 'Dr. Sarah Chen (A*STAR)', 'YTL Data Centre CTO'],
  },
  {
    id: 'gc-2',
    title: 'Halal Supply Chain Traceability',
    theme: 'AgriFood x Digital',
    prize: 'RM300K',
    status: 'active',
    submissions: 28,
    deadline: '2026-09-30',
    guilds: ['Agrifood', 'Food Services'],
    description: 'End-to-end blockchain/IoT solution for halal certification verification from farm to fork. Must integrate with JAKIM standards and support multi-country supply chains.',
    criteria: [
      'Real-time traceability across minimum 5 supply chain nodes',
      'JAKIM-compliant halal certification data model',
      'Tamper-proof record with < 2 second query response',
      'Interoperable with existing Malaysian halal certification systems',
    ],
    judges: ['JAKIM Representative', 'KPJ Agrifood Director', 'Blockchain Council Malaysia'],
  },
  {
    id: 'gc-3',
    title: 'Predictive Health for Ageing Communities',
    theme: 'Healthcare x AI',
    prize: 'RM400K',
    status: 'active',
    submissions: 32,
    deadline: '2026-10-15',
    guilds: ['Healthcare', 'Life Sciences'],
    description: 'AI-driven early detection system for chronic disease in senior populations using wearable and ambient data. Must respect privacy-by-design principles and work within Malaysia\'s healthcare regulatory framework.',
    criteria: [
      'Early detection sensitivity > 85% for target conditions',
      'Privacy-preserving data architecture (federated learning preferred)',
      'Integration with Malaysian public health systems (MySejahtera API)',
      'Validated on Southeast Asian population demographics',
    ],
    judges: ['KPJ Healthcare CMO', 'MOH Digital Health Director', 'Prof. Ahmad (UM Medical)'],
  },
  {
    id: 'gc-4',
    title: 'Autonomous Last-Mile Logistics',
    theme: 'Mobility x Commerce',
    prize: 'RM250K',
    status: 'upcoming',
    submissions: 0,
    deadline: '2027-02-28',
    guilds: ['Cross-Vertical'],
    description: 'Design and pilot autonomous delivery systems for IBTEC\'s mixed-use zones. Solutions must handle tropical weather, shared pedestrian spaces, and multi-modal handoff.',
    criteria: [
      'Operate safely in mixed pedestrian/vehicle zones',
      'Handle tropical rain conditions (>100mm/hr events)',
      'Last-mile delivery within 15 minutes for 2km radius',
      'Fleet management for 20+ vehicles with central dispatch',
    ],
    judges: ['JPJ Safety Division', 'MOSTI Innovation Director', 'Grab Engineering Lead'],
  },
  {
    id: 'gc-5',
    title: 'Zero-Waste Smart Building',
    theme: 'Proptech x Sustainability',
    prize: 'RM200K',
    status: 'completed',
    submissions: 41,
    deadline: '2026-03-01',
    guilds: ['Proptech'],
    description: 'Retrofit existing buildings with AI-managed waste, water, and energy systems achieving >90% waste diversion rate. Winner: GreenLoop Systems (KL) — deployed in IBTEC Building A.',
    criteria: [
      'Achieve >90% waste diversion from landfill',
      'AI-optimised resource consumption reducing utility costs 25%+',
      'Retrofit-compatible with existing IBTEC building stock',
      'Occupant-facing dashboard with behavioural nudges',
    ],
    judges: ['CIDB Green Building Council', 'JLG Sustainability Director', 'MGTC Representative'],
  },
]

export default function GrandChallengesPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-secondary">
        <Link href="/accelerate" className="hover:text-primary transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3 h-3" />
          Acceleration Engine
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-primary">Grand Challenges</span>
      </div>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Trophy className="w-5 h-5 text-accent-gold" />
          <h1 className="text-2xl font-bold text-text-primary">IBTEC Grand Challenges</h1>
        </div>
        <p className="text-text-secondary text-sm">
          Open innovation competitions tackling IBTEC&apos;s hardest problems. Multi-guild, cross-disciplinary, high-impact.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Challenges', value: '5', icon: Target, color: '#007B7F' },
          { label: 'Active Now', value: '3', icon: Flame, color: '#22C55E' },
          { label: 'Total Submissions', value: '135', icon: Users, color: '#3B82F6' },
          { label: 'Prize Pool', value: 'RM1.65M', icon: Award, color: '#D4A847' },
        ].map((s) => (
          <div key={s.label} className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <s.icon className="w-4 h-4" style={{ color: s.color }} />
              <span className="text-[10px] text-text-secondary uppercase tracking-wider">{s.label}</span>
            </div>
            <p className="text-xl font-bold text-text-primary">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Challenge Cards */}
      <div className="space-y-4">
        {challenges.map((gc) => {
          const st = statusConfig[gc.status]
          const daysLeft = Math.max(0, Math.ceil((new Date(gc.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
          return (
            <div
              key={gc.id}
              className="bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="h-1" style={{ backgroundColor: st.color }} />
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-base font-semibold text-text-primary mb-1">{gc.title}</h3>
                        <p className="text-xs text-text-secondary">{gc.theme}</p>
                      </div>
                      <span
                        className={cn('text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0', st.bg, st.border)}
                        style={{ color: st.color }}
                      >
                        {st.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed mb-4">{gc.description}</p>

                    {/* Criteria */}
                    <div className="mb-4">
                      <h4 className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider mb-2">Evaluation Criteria</h4>
                      <ul className="space-y-1">
                        {gc.criteria.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-[11px] text-text-secondary">
                            <span className="text-primary mt-0.5 shrink-0">{i + 1}.</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Guild Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {gc.guilds.map((g) => (
                        <span
                          key={g}
                          className="text-[9px] font-medium px-2 py-0.5 rounded-full border"
                          style={{
                            color: guildColors[g] || '#007B7F',
                            backgroundColor: `${guildColors[g] || '#007B7F'}10`,
                            borderColor: `${guildColors[g] || '#007B7F'}30`,
                          }}
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Side Panel */}
                  <div className="lg:w-64 shrink-0 bg-background rounded-lg border border-border p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent-gold" />
                      <div>
                        <p className="text-[9px] text-text-secondary">Prize Pool</p>
                        <p className="text-lg font-bold text-accent-gold">{gc.prize}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-text-secondary" />
                      <div>
                        <p className="text-[9px] text-text-secondary">Submissions</p>
                        <p className="text-sm font-semibold text-text-primary">{gc.submissions}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-text-secondary" />
                      <div>
                        <p className="text-[9px] text-text-secondary">Deadline</p>
                        <p className="text-sm font-semibold text-text-primary">{gc.deadline}</p>
                      </div>
                    </div>
                    {gc.status === 'active' && (
                      <div className="flex items-center gap-2 pt-2 border-t border-border">
                        <Clock className="w-4 h-4 text-amber-400" />
                        <p className="text-sm font-semibold text-amber-400">{daysLeft} days remaining</p>
                      </div>
                    )}

                    {/* Judges */}
                    <div className="pt-3 border-t border-border">
                      <p className="text-[9px] text-text-secondary uppercase tracking-wider mb-1.5">Panel</p>
                      {gc.judges.map((j) => (
                        <p key={j} className="text-[10px] text-text-secondary leading-relaxed">{j}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
