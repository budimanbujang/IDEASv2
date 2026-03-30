'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowLeft, CheckCircle2, Circle, Clock, AlertTriangle,
  Shield, Target, Rocket, ChevronRight, Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

type GateCriterion = {
  text: string
  status: 'met' | 'in-progress' | 'not-started'
}

type Gate = {
  id: string
  name: string
  month: number
  phase: string
  color: string
  status: 'approaching' | 'future'
  description: string
  criteria: GateCriterion[]
  keyDecision: string
}

const gatesData: Gate[] = [
  {
    id: 'gate-1',
    name: 'Gate 1 — Foundation Complete',
    month: 6,
    phase: 'Phase 0 Exit',
    color: '#007B7F',
    status: 'approaching',
    description: 'Validates that core infrastructure is operational and the IBTEC platform MVP is ready for Phase 1 activation. All 5 Phase 0 projects must demonstrate minimum viable capability.',
    keyDecision: 'Proceed to Phase 1 activation with full budget release or conditional approval with remediation plan.',
    criteria: [
      { text: '5G campus network operational with URLLC, eMBB, and mMTC slices active', status: 'in-progress' },
      { text: '15,000 IoT sensors deployed and transmitting data with 99%+ uptime', status: 'in-progress' },
      { text: 'Digital twin achieving 90% accuracy on core infrastructure mapping', status: 'not-started' },
      { text: 'Smart City Command Centre live with real-time monitoring across all zones', status: 'in-progress' },
      { text: 'IDEAS Platform v1 launched with 50+ registered ecosystem participants', status: 'met' },
      { text: 'Two guild launches confirmed with anchor tenant commitments signed', status: 'met' },
    ],
  },
  {
    id: 'gate-2',
    name: 'Gate 2 — Ecosystem Activated',
    month: 18,
    phase: 'Phase 1 Exit',
    color: '#3B82F6',
    status: 'future',
    description: 'Confirms that the innovation ecosystem is actively generating value. Guilds operational, data marketplace launched, and first revenue streams established.',
    keyDecision: 'Authorise Phase 2 expansion budget and international federation partnerships.',
    criteria: [
      { text: 'Minimum 3 vertical guilds operational with 100+ active members each', status: 'not-started' },
      { text: 'Data Marketplace generating RM1M+ monthly recurring revenue', status: 'not-started' },
      { text: 'Agentic AI Level 1 managing building systems with human-on-the-loop', status: 'not-started' },
      { text: 'Autonomous logistics pilot completing 100+ daily deliveries safely', status: 'not-started' },
      { text: 'Community co-creation programme with 500+ active participants', status: 'not-started' },
      { text: 'First international federation MOU signed (Dubai or Bandung)', status: 'not-started' },
    ],
  },
  {
    id: 'gate-3',
    name: 'Gate 3 — Scale Ready',
    month: 36,
    phase: 'Phase 2 Exit',
    color: '#A855F7',
    status: 'future',
    description: 'Demonstrates that the IBTEC model is scalable, sustainable, and ready for global replication. Platform maturity, revenue sustainability, and federation network validated.',
    keyDecision: 'Approve IaaP licensing programme and Phase 3 global expansion budget.',
    criteria: [
      { text: 'IDEAS 2.0 platform fully operational with 1,000+ ecosystem participants', status: 'not-started' },
      { text: 'Annual platform revenue exceeding RM50M with 3 revenue streams active', status: 'not-started' },
      { text: 'Federation network live with 5+ international innovation districts', status: 'not-started' },
      { text: 'Advanced Digital Twin at 99% accuracy with predictive simulation capability', status: 'not-started' },
      { text: 'Autonomous shuttle network covering 12 routes with safety certification', status: 'not-started' },
      { text: 'Regulatory sandbox frameworks adopted by 2+ national regulators', status: 'not-started' },
    ],
  },
]

const statusIcons = {
  met: { icon: CheckCircle2, color: '#22C55E', label: 'Met' },
  'in-progress': { icon: Clock, color: '#3B82F6', label: 'In Progress' },
  'not-started': { icon: Circle, color: '#6B7280', label: 'Not Started' },
}

export default function GatesPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Link href="/projects" className="text-text-secondary hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-xs text-text-secondary">Catalytic Projects</span>
        </div>
        <h1 className="text-2xl font-bold text-text-primary flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </div>
          Phase Gates
        </h1>
        <p className="text-text-secondary text-sm mt-1">Decision checkpoints at Month 6, 18, and 36 governing phase transitions and budget release</p>
      </div>

      {/* Timeline connector */}
      <div className="relative">
        <div className="flex items-center gap-0 px-8">
          {gatesData.map((gate, i) => (
            <React.Fragment key={gate.id}>
              {i > 0 && (
                <div className="flex-1 h-0.5 bg-border relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r"
                    style={{
                      width: i === 1 ? '0%' : '0%',
                      backgroundImage: `linear-gradient(to right, ${gatesData[i - 1].color}, ${gate.color})`,
                    }}
                  />
                </div>
              )}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center border-2',
                    gate.status === 'approaching' ? 'animate-pulse-glow' : ''
                  )}
                  style={{
                    borderColor: gate.color,
                    backgroundColor: gate.status === 'approaching' ? `${gate.color}20` : 'transparent',
                  }}
                >
                  <span className="text-lg" style={{ color: gate.color }}>&#x2B25;</span>
                </div>
                <span className="text-[10px] font-semibold" style={{ color: gate.color }}>Month {gate.month}</span>
                <span className="text-[9px] text-text-secondary">{gate.phase}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Gate Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {gatesData.map((gate) => {
          const metCount = gate.criteria.filter((c) => c.status === 'met').length
          const inProgressCount = gate.criteria.filter((c) => c.status === 'in-progress').length
          const totalCriteria = gate.criteria.length
          const readiness = Math.round(((metCount + inProgressCount * 0.5) / totalCriteria) * 100)

          return (
            <div key={gate.id} className="bg-surface border border-border rounded-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: gate.color }} />
              {gate.status === 'approaching' && (
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: gate.color, filter: 'blur(40px)' }} />
              )}

              {/* Header */}
              <div className="p-5 pb-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${gate.color}15` }}>
                      <span style={{ color: gate.color }}>&#x2B25;</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-primary">{gate.name}</h3>
                      <span className="text-[10px] text-text-secondary">Month {gate.month} — {gate.phase}</span>
                    </div>
                  </div>
                  {gate.status === 'approaching' ? (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                      <AlertTriangle className="w-3 h-3 text-amber-400" />
                      <span className="text-[10px] font-medium text-amber-400">Approaching</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-500/10 border border-slate-500/30">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] font-medium text-slate-400">Future</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">{gate.description}</p>
              </div>

              {/* Readiness Gauge */}
              <div className="px-5 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold">Gate Readiness</span>
                  <span className="text-xs font-bold" style={{ color: gate.color }}>{readiness}%</span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${readiness}%`, backgroundColor: gate.color }}
                  />
                </div>
              </div>

              {/* Criteria Checklist */}
              <div className="px-5 pb-5">
                <h4 className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold mb-2">Criteria Checklist</h4>
                <div className="space-y-2">
                  {gate.criteria.map((criterion, i) => {
                    const config = statusIcons[criterion.status]
                    const Icon = config.icon
                    return (
                      <div key={i} className="flex items-start gap-2">
                        <Icon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: config.color }} />
                        <div className="flex-1">
                          <span className="text-[11px] text-text-primary leading-snug">{criterion.text}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Key Decision */}
              <div className="px-5 pb-5 pt-3 border-t border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <Shield className="w-3 h-3 text-accent-gold" />
                  <span className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold">Key Decision</span>
                </div>
                <p className="text-[11px] text-text-secondary">{gate.keyDecision}</p>
              </div>

              {/* Footer Stats */}
              <div className="px-5 py-3 bg-background/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[10px]">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-medium">{metCount} met</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px]">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span className="text-blue-400 font-medium">{inProgressCount} in progress</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px]">
                    <Circle className="w-3 h-3 text-slate-500" />
                    <span className="text-slate-400 font-medium">{totalCriteria - metCount - inProgressCount} pending</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Back to Roadmap */}
      <div className="flex items-center gap-3">
        <Link
          href="/projects"
          className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-primary text-sm font-medium hover:border-primary/30 transition-colors"
        >
          <Rocket className="w-4 h-4 text-primary" />
          Full Roadmap
          <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          href="/projects/sprint"
          className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-primary text-sm font-medium hover:border-primary/30 transition-colors"
        >
          <Zap className="w-4 h-4 text-primary" />
          90-Day Sprint
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
