'use client'

import React from 'react'
import Link from 'next/link'
import {
  Zap, ArrowLeft, CheckCircle2, Clock, AlertCircle, Users,
  Shield, Building2, Crown, ChevronRight, Target, TrendingDown
} from 'lucide-react'
import { cn } from '@/lib/utils'

type SprintBlock = {
  id: string
  weeks: string
  phase: string
  color: string
  status: 'completed' | 'in-progress' | 'pending'
  milestone: string
  tasks: number
  tasksCompleted: number
  details: string[]
}

const sprintBlocks: SprintBlock[] = [
  {
    id: 'w1-2',
    weeks: 'Weeks 1-2',
    phase: 'Mobilise',
    color: '#007B7F',
    status: 'completed',
    milestone: 'Team assembly and governance setup',
    tasks: 18,
    tasksCompleted: 18,
    details: [
      'Core team of 45 assembled across 5 workstreams',
      'Five-tier governance structure activated',
      'Steering Committee inaugural meeting held',
      'Risk register and RAID log established',
    ],
  },
  {
    id: 'w3-4',
    weeks: 'Weeks 3-4',
    phase: 'Design',
    color: '#3B82F6',
    status: 'completed',
    milestone: 'Architecture finalisation and stakeholder workshops',
    tasks: 24,
    tasksCompleted: 24,
    details: [
      'Platform architecture v1 signed off',
      '5G network topology finalised with TM/DNB',
      '3 stakeholder workshops completed (120+ attendees)',
      'IoT sensor placement strategy approved',
    ],
  },
  {
    id: 'w5-6',
    weeks: 'Weeks 5-6',
    phase: 'Build Foundations',
    color: '#A855F7',
    status: 'in-progress',
    milestone: 'Infrastructure deployment and sensor installation',
    tasks: 30,
    tasksCompleted: 17,
    details: [
      '5G base stations installation (8 of 12 complete)',
      '3,200 IoT sensors deployed (target: 5,000)',
      'Cloud infrastructure provisioned on MyCloud / AWS',
      'Digital twin base model rendering started',
    ],
  },
  {
    id: 'w7-8',
    weeks: 'Weeks 7-8',
    phase: 'Accelerate',
    color: '#F59E0B',
    status: 'pending',
    milestone: 'Parallel workstream execution',
    tasks: 36,
    tasksCompleted: 0,
    details: [
      'All 5 Phase 0 projects in parallel execution',
      'First data feeds flowing from IoT to platform',
      'Guild engagement framework beta testing',
      'Smart City Command Centre alpha deployment',
    ],
  },
  {
    id: 'w9-10',
    weeks: 'Weeks 9-10',
    phase: 'Demonstrate',
    color: '#EC4899',
    status: 'pending',
    milestone: 'Working prototypes and stakeholder demos',
    tasks: 28,
    tasksCompleted: 0,
    details: [
      'IDEAS Platform v1 demo to Steering Committee',
      'Digital Twin walkthrough with NVIDIA team',
      'First autonomous shuttle test run (closed track)',
      'Investor showcase event preparation',
    ],
  },
  {
    id: 'w11-12',
    weeks: 'Weeks 11-12',
    phase: 'First Milestone',
    color: '#D4A847',
    status: 'pending',
    milestone: 'Gate 0 deliverables',
    tasks: 22,
    tasksCompleted: 0,
    details: [
      'Gate 0 review with full governance chain',
      'Platform v1 soft launch (internal users)',
      '5G network operational across Innovation District',
      'Phase 1 project charters approved',
    ],
  },
]

const statusConfig = {
  completed: { label: 'Completed', color: '#22C55E', icon: CheckCircle2, bg: 'bg-green-500/10', border: 'border-green-500/30' },
  'in-progress': { label: 'In Progress', color: '#3B82F6', icon: Clock, bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  pending: { label: 'Pending', color: '#94A3B8', icon: AlertCircle, bg: 'bg-slate-500/10', border: 'border-slate-500/30' },
}

// Burndown data: planned vs actual over 12 weeks
const burndownPlanned = [158, 144, 130, 116, 102, 88, 74, 60, 46, 32, 18, 0]
const burndownActual = [158, 140, 122, 100, 83, 66, null, null, null, null, null, null]
const maxBurndown = 170
const burndownWidth = 600
const burndownHeight = 200

function buildPolyline(data: (number | null)[], maxVal: number, width: number, height: number): string {
  const points: string[] = []
  const step = width / 11
  data.forEach((val, i) => {
    if (val !== null) {
      const x = i * step
      const y = height - (val / maxVal) * height
      points.push(`${x},${y}`)
    }
  })
  return points.join(' ')
}

const governanceTiers = [
  { level: 1, name: 'Ministerial Council', icon: Crown, color: '#D4A847', oversees: 'Gate reviews and strategic pivots', weeks: '12' },
  { level: 2, name: 'Steering Committee', icon: Shield, color: '#A855F7', oversees: 'Bi-weekly progress and risk escalation', weeks: '1-12' },
  { level: 3, name: 'Programme Board', icon: Building2, color: '#3B82F6', oversees: 'Sprint planning and resource allocation', weeks: '1-12' },
  { level: 4, name: 'Workstream Leads', icon: Users, color: '#22C55E', oversees: 'Daily standups and task execution', weeks: '1-12' },
  { level: 5, name: 'Community Advisory', icon: Users, color: '#007B7F', oversees: 'Stakeholder feedback and co-design', weeks: '3-4, 9-10' },
]

export default function SprintPage() {
  const totalTasks = sprintBlocks.reduce((sum, b) => sum + b.tasks, 0)
  const completedTasks = sprintBlocks.reduce((sum, b) => sum + b.tasksCompleted, 0)
  const completionPct = Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link href="/projects" className="text-text-secondary hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-xs text-text-secondary">Catalytic Projects</span>
          </div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            90-Day Sprint Dashboard
          </h1>
          <p className="text-text-secondary text-sm mt-1">First 12 weeks execution tracker — Foundation Phase launch</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface border border-border rounded-lg px-4 py-2 text-center">
            <div className="text-xs text-text-secondary">Overall Progress</div>
            <div className="text-lg font-bold text-primary">{completionPct}%</div>
          </div>
          <div className="bg-surface border border-border rounded-lg px-4 py-2 text-center">
            <div className="text-xs text-text-secondary">Tasks</div>
            <div className="text-lg font-bold text-text-primary">{completedTasks}/{totalTasks}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Main Timeline */}
        <div className="col-span-9 space-y-4">
          {/* Week-by-Week Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {sprintBlocks.map((block) => {
              const config = statusConfig[block.status]
              const progressPct = block.tasks > 0 ? Math.round((block.tasksCompleted / block.tasks) * 100) : 0
              return (
                <div key={block.id} className="bg-surface border border-border rounded-lg overflow-hidden">
                  {/* Colored header */}
                  <div
                    className="px-4 py-2.5 flex items-center justify-between"
                    style={{
                      backgroundColor: block.status === 'completed' ? `${block.color}30` : block.status === 'in-progress' ? `${block.color}20` : `${block.color}08`,
                      borderBottom: `2px solid ${block.color}`,
                    }}
                  >
                    <div>
                      <div className="text-[10px] text-text-secondary uppercase tracking-wider">{block.weeks}</div>
                      <div className="text-sm font-bold" style={{ color: block.color }}>{block.phase}</div>
                    </div>
                    <div className={cn('flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium', config.bg, config.border, 'border')}>
                      <config.icon className="w-3 h-3" style={{ color: config.color }} />
                      <span style={{ color: config.color }}>{config.label}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs text-text-primary font-medium mb-3">{block.milestone}</p>
                    <div className="space-y-1.5 mb-3">
                      {block.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-text-secondary">
                          <span className="text-text-secondary/40 mt-0.5">&#8226;</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                    {/* Task progress bar */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-background rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${progressPct}%`, backgroundColor: config.color }}
                        />
                      </div>
                      <span className="text-[10px] text-text-secondary font-mono">{block.tasksCompleted}/{block.tasks}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Burndown Chart */}
          <div>
            <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-primary" />
              Sprint Burndown
            </h2>
            <div className="bg-surface border border-border rounded-lg p-5">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1.5 text-xs">
                  <div className="w-3 h-0.5 bg-text-secondary rounded" />
                  <span className="text-text-secondary">Planned</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <div className="w-3 h-0.5 bg-primary rounded" />
                  <span className="text-text-secondary">Actual</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <svg viewBox={`-30 -10 ${burndownWidth + 50} ${burndownHeight + 40}`} className="w-full" style={{ maxHeight: '240px' }}>
                  {/* Grid lines */}
                  {[0, 40, 80, 120, 158].map((val) => {
                    const y = burndownHeight - (val / maxBurndown) * burndownHeight
                    return (
                      <g key={val}>
                        <line x1="0" y1={y} x2={burndownWidth} y2={y} stroke="#1E3A5F" strokeWidth="0.5" strokeDasharray="4,4" />
                        <text x="-8" y={y + 3} fill="#94A3B8" fontSize="8" textAnchor="end">{val}</text>
                      </g>
                    )
                  })}
                  {/* Week labels */}
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((week) => {
                    const x = ((week - 1) * burndownWidth) / 11
                    return (
                      <text key={week} x={x} y={burndownHeight + 16} fill="#94A3B8" fontSize="8" textAnchor="middle">
                        W{week}
                      </text>
                    )
                  })}
                  {/* Planned line */}
                  <polyline
                    points={buildPolyline(burndownPlanned, maxBurndown, burndownWidth, burndownHeight)}
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeDasharray="6,3"
                  />
                  {/* Actual line */}
                  <polyline
                    points={buildPolyline(burndownActual, maxBurndown, burndownWidth, burndownHeight)}
                    fill="none"
                    stroke="#007B7F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Actual dots */}
                  {burndownActual.map((val, i) => {
                    if (val === null) return null
                    const x = (i * burndownWidth) / 11
                    const y = burndownHeight - (val / maxBurndown) * burndownHeight
                    return <circle key={i} cx={x} cy={y} r="3" fill="#007B7F" stroke="#0A1628" strokeWidth="1.5" />
                  })}
                  {/* Current week indicator */}
                  <line
                    x1={(5 * burndownWidth) / 11}
                    y1={0}
                    x2={(5 * burndownWidth) / 11}
                    y2={burndownHeight}
                    stroke="#A855F7"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    opacity={0.6}
                  />
                  <text x={(5 * burndownWidth) / 11} y={-3} fill="#A855F7" fontSize="7" textAnchor="middle">NOW</text>
                </svg>
              </div>
              <div className="flex items-center justify-between mt-2 pt-3 border-t border-border">
                <span className="text-xs text-text-secondary">Velocity: <strong className="text-green-400">Slightly ahead of plan</strong></span>
                <span className="text-xs text-text-secondary">Remaining tasks: <strong className="text-text-primary">{totalTasks - completedTasks}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Sidebar */}
        <div className="col-span-3">
          <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Five-Tier Governance
          </h2>
          <div className="space-y-2">
            {governanceTiers.map((tier) => (
              <div key={tier.level} className="bg-surface border border-border rounded-lg p-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: tier.color }} />
                <div className="flex items-center gap-2 mb-1.5 ml-1">
                  <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: `${tier.color}15` }}>
                    <tier.icon className="w-3.5 h-3.5" style={{ color: tier.color }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-text-primary">{tier.name}</div>
                    <div className="text-[9px] text-text-secondary">Level {tier.level}</div>
                  </div>
                </div>
                <p className="text-[10px] text-text-secondary ml-1 mb-1">{tier.oversees}</p>
                <div className="text-[9px] text-text-secondary/60 ml-1">Active: Weeks {tier.weeks}</div>
              </div>
            ))}
          </div>

          {/* Phase Gates link */}
          <Link
            href="/projects/gates"
            className="mt-4 block bg-surface border border-border rounded-lg p-3 hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-text-primary group-hover:text-primary transition-colors flex-1">Phase Gates</span>
              <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
            </div>
            <p className="text-[10px] text-text-secondary mt-1">View Gate 1-3 criteria and readiness</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
