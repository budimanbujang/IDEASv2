'use client'

import React from 'react'
import Link from 'next/link'
import {
  Shield, Users, Briefcase, Wrench, Brain, Settings,
  ChevronRight, Calendar, AlertTriangle, CheckCircle2,
  BarChart3, DollarSign, Target
} from 'lucide-react'

const governanceTiers = [
  {
    id: 'board',
    name: 'Board of Governors',
    tier: 'Strategic Direction',
    icon: Shield,
    color: '#D4A847',
    chair: 'Datuk Syed Mohamed Ibrahim',
    members: 7,
    nextMeeting: '15 Apr 2026',
    pendingDecisions: 3,
    description: 'Sets strategic direction, approves major investments (>RM100M), oversees phase gate decisions.',
    kpis: ['Total investment deployed', 'Phase gate pass rate', 'Revenue trajectory vs plan']
  },
  {
    id: 'psc',
    name: 'Programme Steering Committee',
    tier: 'Cross-Workstream Coordination',
    icon: Users,
    color: '#A855F7',
    chair: 'Ahmad Razif (JCorp CEO)',
    members: 12,
    nextMeeting: '8 Apr 2026',
    pendingDecisions: 5,
    description: 'Coordinates across workstreams, resolves cross-cutting issues, escalates to Board.',
    kpis: ['Workstream alignment score', 'Issue resolution time', 'Resource utilisation']
  },
  {
    id: 'pmo',
    name: 'Programme Management Office',
    tier: 'Day-to-Day Execution',
    icon: Briefcase,
    color: '#3B82F6',
    chair: 'Sarah Chen (PMO Director)',
    members: 8,
    nextMeeting: '2 Apr 2026',
    pendingDecisions: 12,
    description: 'Manages day-to-day execution, tracks milestones, coordinates resources, manages risk register.',
    kpis: ['Milestone completion rate', 'Budget burn vs plan', '90-day sprint progress']
  },
  {
    id: 'workstream',
    name: 'Workstream Leads',
    tier: 'Domain-Specific Delivery',
    icon: Wrench,
    color: '#22C55E',
    chair: '6 Guild Leads',
    members: 18,
    nextMeeting: 'Weekly standups',
    pendingDecisions: 8,
    description: 'Domain-specific delivery leads for each guild and cross-cutting workstream.',
    kpis: ['Sprint velocity', 'Challenge throughput', 'Guild-specific KPIs']
  },
  {
    id: 'tac',
    name: 'Technical Advisory Council',
    tier: 'Independent Technical Guidance',
    icon: Brain,
    color: '#06B6D4',
    chair: 'Prof. Tan Wei Lin (NUS)',
    members: 5,
    nextMeeting: '20 Apr 2026',
    pendingDecisions: 2,
    description: 'Provides independent technical guidance, reviews architecture decisions, benchmarks against global best practice.',
    kpis: ['Technical debt score', 'Architecture compliance', 'Innovation readiness']
  },
]

const platformStats = [
  { label: 'Total Users', value: '1,247', icon: Users, trend: '+12%' },
  { label: 'Active Sessions', value: '89', icon: BarChart3, trend: 'now' },
  { label: 'Budget Utilised', value: 'RM48M', icon: DollarSign, trend: '24% of Phase 0' },
  { label: 'Open Risks', value: '4', icon: AlertTriangle, trend: '2 high' },
  { label: 'Milestones Met', value: '12/18', icon: Target, trend: '67%' },
  { label: 'System Uptime', value: '99.94%', icon: CheckCircle2, trend: '30d' },
]

export default function AdminPage() {
  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Administration & Governance</h1>
        <p className="text-text-secondary text-sm mt-1">IDEAS 2.0 Five-Tier Governance Model — Strategic oversight to technical execution</p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        {platformStats.map((stat) => (
          <div key={stat.label} className="bg-surface border border-border rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <stat.icon className="w-4 h-4 text-primary" />
              <span className="text-[10px] text-text-secondary uppercase">{stat.label}</span>
            </div>
            <div className="text-lg font-bold text-text-primary">{stat.value}</div>
            <div className="text-[10px] text-text-secondary">{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Five-Tier Governance */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-accent-gold" />
          Five-Tier Governance Model
        </h2>
        <div className="space-y-3">
          {governanceTiers.map((body, i) => (
            <div key={body.id} className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${body.color}15` }}>
                    <body.icon className="w-5 h-5" style={{ color: body.color }} />
                  </div>
                  <span className="text-[9px] font-mono text-text-secondary">Tier {i + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-text-primary">{body.name}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: `${body.color}15`, color: body.color }}>{body.tier}</span>
                  </div>
                  <p className="text-xs text-text-secondary mb-2">{body.description}</p>
                  <div className="flex items-center gap-4 text-xs text-text-secondary">
                    <span>Chair: <strong className="text-text-primary">{body.chair}</strong></span>
                    <span>{body.members} members</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Next: {body.nextMeeting}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400">
                      {body.pendingDecisions} pending decisions
                    </span>
                  </div>
                </div>
                <Link href={`/admin/${body.id}`} className="text-primary hover:text-primary-light">
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Master Platform Architecture', href: '/admin/infrastructure', icon: Settings },
          { label: 'JCG Five-Stack Model', href: '/admin/infrastructure', icon: BarChart3 },
          { label: 'Resource Allocation', href: '/admin/pmo', icon: DollarSign },
          { label: 'Risk Register', href: '/admin/pmo', icon: AlertTriangle },
        ].map((link) => (
          <Link key={link.label} href={link.href} className="bg-surface border border-border rounded-lg p-3 hover:border-primary/30 transition-colors flex items-center gap-2">
            <link.icon className="w-4 h-4 text-primary" />
            <span className="text-xs text-text-primary">{link.label}</span>
            <ChevronRight className="w-3 h-3 text-text-secondary ml-auto" />
          </Link>
        ))}
      </div>
    </div>
  )
}
