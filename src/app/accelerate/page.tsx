'use client'

import React from 'react'
import Link from 'next/link'
import {
  Trophy, Zap, Rocket, FlaskConical, ChevronRight,
  Calendar, Users, DollarSign, Target, Clock, ArrowRight,
  TrendingUp, Lightbulb, Award
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ---- Data ----

const programmes = [
  {
    id: 'grand-challenges',
    title: 'IBTEC Grand Challenges',
    icon: Trophy,
    color: '#D4A847',
    accent: 'border-amber-500/30',
    stats: [
      { label: 'Active', value: '3' },
      { label: 'Total Submissions', value: '94' },
      { label: 'Next Deadline', value: 'Aug 2026' },
    ],
    description: 'Open innovation competitions addressing IBTEC\'s hardest problems. Multi-guild, cross-disciplinary challenges with RM100K-500K prize pools.',
    href: '/accelerate/grand-challenges',
  },
  {
    id: 'cross-pollination',
    title: 'Cross-Pollination Sprints',
    icon: Zap,
    color: '#A855F7',
    accent: 'border-purple-500/30',
    stats: [
      { label: 'Q2 2026 Sprint', value: 'Data Centre Cooling' },
      { label: 'Teams', value: '6' },
      { label: 'Duration', value: '8 weeks' },
    ],
    description: 'Time-boxed, cross-guild sprints that force unexpected combinations. Semiconductor meets AgriFood, Healthcare meets PropTech.',
    href: '/accelerate/sprints',
  },
  {
    id: 'ventures',
    title: 'IBTEC Ventures',
    icon: Rocket,
    color: '#22C55E',
    accent: 'border-green-500/30',
    stats: [
      { label: 'Deployed', value: 'RM2M' },
      { label: 'Portfolio', value: '3 companies' },
      { label: 'First Cheque', value: 'RM500K-2M' },
    ],
    description: 'Early-stage investment vehicle for the most promising ecosystem startups. Pre-seed to Series A co-investment with strategic value-add.',
    href: '/accelerate/ventures',
  },
  {
    id: 'sandbox',
    title: 'Regulatory Sandbox Express',
    icon: FlaskConical,
    color: '#3B82F6',
    accent: 'border-blue-500/30',
    stats: [
      { label: 'Active Sandboxes', value: '4' },
      { label: 'Sectors', value: 'Gene Therapy, AV, Novel Food, DeFi' },
      { label: 'Avg. Approval', value: '12 weeks' },
    ],
    description: 'Fast-track regulatory experimentation. Partnered with Malaysian regulators to enable controlled testing of frontier technologies.',
    href: '/accelerate/sandbox',
  },
]

const grandChallenges = [
  {
    id: 'gc-1',
    title: 'Tropical Data Centre Cooling',
    theme: 'Sustainability x Semiconductor',
    prize: 'RM500K',
    status: 'active',
    submissions: 34,
    deadline: '2026-08-15',
    guilds: ['Semiconductor', 'Proptech'],
    description: 'Achieve PUE < 1.2 in equatorial climate using novel cooling approaches.',
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
    description: 'End-to-end blockchain/IoT solution for halal certification verification from farm to fork.',
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
    description: 'AI-driven early detection system for chronic disease in senior populations using wearable and ambient data.',
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
    description: 'Design and pilot autonomous delivery systems for IBTEC\'s mixed-use zones.',
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
    description: 'Retrofit existing buildings with AI-managed waste, water, and energy systems achieving >90% diversion.',
  },
]

const portfolio = [
  {
    name: 'TropicAI Labs',
    amount: 'RM1.5M',
    stage: 'Pre-Seed',
    guild: 'Healthcare',
    guildColor: '#E11D48',
    description: 'AI diagnostic platform for tropical diseases using smartphone-based imaging. 3 hospital pilots underway.',
    metrics: { arr: 'RM120K', users: '2,400', growth: '+180% QoQ' },
  },
  {
    name: 'UrbanFarm Tech',
    amount: 'RM800K',
    stage: 'Pre-Seed',
    guild: 'Agrifood',
    guildColor: '#22C55E',
    description: 'Vertical farming IoT platform optimised for tropical crops. 40% water reduction vs conventional methods.',
    metrics: { arr: 'RM80K', users: '12 farms', growth: '+120% QoQ' },
  },
  {
    name: 'SmartMobility ASEAN',
    amount: 'RM2M',
    stage: 'Seed',
    guild: 'Cross-Vertical',
    guildColor: '#A855F7',
    description: 'Autonomous shuttle fleet management for mixed-use districts. Operating 4 routes within IBTEC pilot zone.',
    metrics: { arr: 'RM350K', users: '8,200 rides/mo', growth: '+95% QoQ' },
  },
]

const sandboxes = [
  { name: 'Gene Therapy Trials', regulator: 'MOH / NPRA', status: 'active', startDate: 'Jan 2026', guild: 'Life Sciences' },
  { name: 'Autonomous Vehicle Testing', regulator: 'JPJ / MOSTI', status: 'active', startDate: 'Mar 2026', guild: 'Cross-Vertical' },
  { name: 'Novel Food Approval', regulator: 'FSQD / JAKIM', status: 'active', startDate: 'Feb 2026', guild: 'Agrifood' },
  { name: 'Digital Finance Products', regulator: 'BNM / SC', status: 'active', startDate: 'Dec 2025', guild: 'Cross-Vertical' },
]

const challengeStatusConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  active: { label: 'Active', color: '#22C55E', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  upcoming: { label: 'Upcoming', color: '#3B82F6', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  completed: { label: 'Completed', color: '#94A3B8', bg: 'bg-gray-500/10', border: 'border-gray-500/30' },
}

const guildColors: Record<string, string> = {
  Healthcare: '#E11D48',
  Proptech: '#3B82F6',
  Agrifood: '#22C55E',
  'Food Services': '#F97316',
  'Life Sciences': '#EC4899',
  Semiconductor: '#6366F1',
  'Cross-Vertical': '#A855F7',
}

// ---- Page ----

export default function AcceleratePage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Lightbulb className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Acceleration Engine</h1>
        </div>
        <p className="text-text-secondary text-sm">
          Four programmes designed to compress the time from idea to impact.
        </p>
      </div>

      {/* Programme Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programmes.map((prog) => {
          const Icon = prog.icon
          return (
            <Link
              key={prog.id}
              href={prog.href}
              className={cn(
                'bg-surface border border-border rounded-lg p-5 hover:border-primary/40 transition-all group block'
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${prog.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: prog.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-text-primary">{prog.title}</h3>
                    <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed mb-3">{prog.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {prog.stats.map((s) => (
                      <div key={s.label} className="text-[10px]">
                        <span className="text-text-secondary">{s.label}: </span>
                        <span className="text-text-primary font-semibold">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Grand Challenges */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent-gold" />
            Grand Challenges
          </h2>
          <Link href="/accelerate/grand-challenges" className="text-xs text-primary font-medium hover:underline flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {grandChallenges.map((gc) => {
            const st = challengeStatusConfig[gc.status]
            const daysLeft = Math.max(0, Math.ceil((new Date(gc.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
            return (
              <div
                key={gc.id}
                className="min-w-[300px] max-w-[340px] bg-surface border border-border rounded-lg overflow-hidden shrink-0 hover:border-primary/30 transition-all"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="h-1" style={{ backgroundColor: st.color }} />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-semibold text-text-primary pr-2">{gc.title}</h3>
                    <span
                      className={cn('text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0', st.bg, st.border)}
                      style={{ color: st.color }}
                    >
                      {st.label}
                    </span>
                  </div>
                  <p className="text-[10px] text-text-secondary mb-2">{gc.theme}</p>
                  <p className="text-[11px] text-text-secondary leading-relaxed mb-3">{gc.description}</p>

                  <div className="flex items-center gap-3 mb-3 text-[10px]">
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-accent-gold" />
                      <span className="text-text-primary font-semibold">{gc.prize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-text-secondary" />
                      <span className="text-text-secondary">{gc.submissions} submissions</span>
                    </div>
                    {gc.status === 'active' && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-text-secondary" />
                        <span className="text-text-secondary">{daysLeft}d left</span>
                      </div>
                    )}
                  </div>

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
              </div>
            )
          })}
        </div>
      </div>

      {/* Ventures Portfolio */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-green-400" />
          IBTEC Ventures Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolio.map((co) => (
            <div key={co.name} className="bg-surface border border-border rounded-lg p-5 hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{co.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span
                      className="text-[9px] font-medium px-2 py-0.5 rounded-full border"
                      style={{
                        color: co.guildColor,
                        backgroundColor: `${co.guildColor}10`,
                        borderColor: `${co.guildColor}30`,
                      }}
                    >
                      {co.guild}
                    </span>
                    <span className="text-[10px] text-text-secondary">{co.stage}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-green-400">{co.amount}</span>
                  <p className="text-[9px] text-text-secondary">invested</p>
                </div>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed mb-3">{co.description}</p>
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                <div>
                  <p className="text-[9px] text-text-secondary">ARR</p>
                  <p className="text-xs font-semibold text-text-primary">{co.metrics.arr}</p>
                </div>
                <div>
                  <p className="text-[9px] text-text-secondary">Users</p>
                  <p className="text-xs font-semibold text-text-primary">{co.metrics.users}</p>
                </div>
                <div>
                  <p className="text-[9px] text-text-secondary">Growth</p>
                  <p className="text-xs font-semibold text-green-400">{co.metrics.growth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regulatory Sandboxes */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
          <FlaskConical className="w-5 h-5 text-blue-400" />
          Active Regulatory Sandboxes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sandboxes.map((sb) => (
            <div key={sb.name} className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-medium text-green-400 uppercase tracking-wider">Active</span>
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">{sb.name}</h3>
              <p className="text-[10px] text-text-secondary mb-2">Regulator: {sb.regulator}</p>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-text-secondary">Since {sb.startDate}</span>
                <span
                  className="font-medium px-2 py-0.5 rounded-full border"
                  style={{
                    color: guildColors[sb.guild] || '#007B7F',
                    backgroundColor: `${guildColors[sb.guild] || '#007B7F'}10`,
                    borderColor: `${guildColors[sb.guild] || '#007B7F'}30`,
                  }}
                >
                  {sb.guild}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
