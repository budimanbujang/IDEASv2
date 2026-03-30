'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Target, Filter, ChevronDown, ChevronRight, Clock,
  Users, FileText, AlertCircle, CheckCircle2, Pause,
  Lightbulb, Beaker, ShieldCheck, Rocket, BarChart3
} from 'lucide-react'

type Challenge = {
  id: string
  title: string
  guilds: { name: string; color: string }[]
  status: 'Open' | 'In Progress' | 'Closed' | 'Review'
  priority: 'Critical' | 'High' | 'Medium' | 'Low'
  stage: string
  submissions: number
  deadline: string
  description: string
}

const challenges: Challenge[] = [
  {
    id: 'ch-001', title: 'Wellness Township Challenge',
    guilds: [{ name: 'Healthcare', color: '#E11D48' }, { name: 'Proptech', color: '#3B82F6' }],
    status: 'Open', priority: 'Critical', stage: 'Prototype',
    submissions: 12, deadline: 'Jul 2026',
    description: 'Design an integrated wellness data model for a smart township combining health, mobility, and environmental data.',
  },
  {
    id: 'ch-002', title: 'AI Radiology Accuracy Challenge',
    guilds: [{ name: 'Healthcare', color: '#E11D48' }],
    status: 'In Progress', priority: 'Critical', stage: 'Validate',
    submissions: 24, deadline: 'Jun 2026',
    description: 'Achieve 95%+ sensitivity on chest X-ray screening using anonymised KPJ radiology datasets.',
  },
  {
    id: 'ch-003', title: 'Tropical Disease Diagnostics',
    guilds: [{ name: 'Life Sciences', color: '#EC4899' }],
    status: 'Open', priority: 'Critical', stage: 'Ideate',
    submissions: 47, deadline: 'Aug 2026',
    description: 'Develop AI-powered rapid diagnostic tools for dengue, malaria, and leptospirosis.',
  },
  {
    id: 'ch-004', title: 'Smart Building Energy Reduction',
    guilds: [{ name: 'Proptech', color: '#3B82F6' }],
    status: 'In Progress', priority: 'High', stage: 'Validate',
    submissions: 8, deadline: 'May 2026',
    description: 'Reduce HVAC energy consumption by 30%+ using AI-driven optimisation in JLG properties.',
  },
  {
    id: 'ch-005', title: 'Plantation Yield Prediction',
    guilds: [{ name: 'Agrifood', color: '#22C55E' }],
    status: 'Open', priority: 'High', stage: 'Ideate',
    submissions: 15, deadline: 'Sep 2026',
    description: 'Predict palm oil yield per hectare within 5% accuracy using satellite and IoT sensor data.',
  },
  {
    id: 'ch-006', title: 'QSR Food Waste Reduction',
    guilds: [{ name: 'Food Services', color: '#F97316' }],
    status: 'In Progress', priority: 'High', stage: 'Deploy',
    submissions: 6, deadline: 'Apr 2026',
    description: 'Reduce food waste by 25% across QSR outlets using demand forecasting and inventory optimisation.',
  },
  {
    id: 'ch-007', title: 'Halal Supply Chain Transparency',
    guilds: [{ name: 'Agrifood', color: '#22C55E' }, { name: 'Food Services', color: '#F97316' }],
    status: 'Open', priority: 'Medium', stage: 'Ideate',
    submissions: 9, deadline: 'Oct 2026',
    description: 'Build a blockchain-based halal certification and traceability system from farm to consumer.',
  },
  {
    id: 'ch-008', title: 'Semiconductor Defect Detection',
    guilds: [{ name: 'Semiconductor', color: '#6366F1' }],
    status: 'Open', priority: 'Critical', stage: 'Prototype',
    submissions: 11, deadline: 'Aug 2026',
    description: 'Develop AI visual inspection for advanced semiconductor packaging with 99.5% accuracy.',
  },
  {
    id: 'ch-009', title: 'Telemedicine UX Challenge',
    guilds: [{ name: 'Healthcare', color: '#E11D48' }],
    status: 'Closed', priority: 'High', stage: 'Scale',
    submissions: 34, deadline: 'Mar 2026',
    description: 'Redesign the KPJ telemedicine patient experience for elderly and rural users.',
  },
  {
    id: 'ch-010', title: 'Precision Fertiliser Application',
    guilds: [{ name: 'Agrifood', color: '#22C55E' }],
    status: 'In Progress', priority: 'Medium', stage: 'Prototype',
    submissions: 7, deadline: 'Jul 2026',
    description: 'IoT-driven variable-rate fertiliser application reducing input costs by 20% on palm oil estates.',
  },
  {
    id: 'ch-011', title: 'Data Centre Cooling Innovation',
    guilds: [{ name: 'Proptech', color: '#3B82F6' }],
    status: 'Open', priority: 'High', stage: 'Ideate',
    submissions: 23, deadline: 'Sep 2026',
    description: 'Circular water cooling systems for tropical data centres reducing PUE below 1.2.',
  },
  {
    id: 'ch-012', title: 'Next-Gen Semiconductor Packaging',
    guilds: [{ name: 'Semiconductor', color: '#6366F1' }],
    status: 'Open', priority: 'Critical', stage: 'Ideate',
    submissions: 31, deadline: 'Oct 2026',
    description: 'Advanced 3D packaging solutions for heterogeneous chiplet integration.',
  },
  {
    id: 'ch-013', title: 'Clinical Trial Synthetic Data',
    guilds: [{ name: 'Life Sciences', color: '#EC4899' }],
    status: 'Review', priority: 'High', stage: 'Prototype',
    submissions: 5, deadline: 'Jun 2026',
    description: 'Generate privacy-preserving synthetic clinical trial data for tropical disease research.',
  },
  {
    id: 'ch-014', title: 'Farm-to-Fork Traceability',
    guilds: [{ name: 'Agrifood', color: '#22C55E' }, { name: 'Food Services', color: '#F97316' }],
    status: 'In Progress', priority: 'High', stage: 'Deploy',
    submissions: 10, deadline: 'May 2026',
    description: 'End-to-end supply chain visibility from plantation to QSR outlet using IoT and blockchain.',
  },
  {
    id: 'ch-015', title: 'Semiconductor Workforce Upskilling',
    guilds: [{ name: 'Semiconductor', color: '#6366F1' }],
    status: 'Open', priority: 'High', stage: 'Ideate',
    submissions: 14, deadline: 'Nov 2026',
    description: 'AI-curated learning pathways for semiconductor technicians transitioning to advanced packaging roles.',
  },
]

const guildFilterOptions = ['All Guilds', 'Healthcare', 'Proptech', 'Agrifood', 'Food Services', 'Life Sciences', 'Semiconductor']
const statusFilterOptions = ['All Statuses', 'Open', 'In Progress', 'Review', 'Closed']
const priorityFilterOptions = ['All Priorities', 'Critical', 'High', 'Medium', 'Low']

const statusConfig: Record<string, { color: string; icon: any }> = {
  'Open': { color: '#22C55E', icon: CheckCircle2 },
  'In Progress': { color: '#3B82F6', icon: Clock },
  'Review': { color: '#F59E0B', icon: AlertCircle },
  'Closed': { color: '#6B7280', icon: Pause },
}

const stageIcons: Record<string, any> = {
  Ideate: Lightbulb,
  Prototype: Beaker,
  Validate: ShieldCheck,
  Deploy: Rocket,
  Scale: BarChart3,
}

export default function ChallengesPage() {
  const [guildFilter, setGuildFilter] = useState('All Guilds')
  const [statusFilter, setStatusFilter] = useState('All Statuses')
  const [priorityFilter, setPriorityFilter] = useState('All Priorities')

  const filtered = challenges.filter((ch) => {
    const guildMatch = guildFilter === 'All Guilds' || ch.guilds.some(g => g.name === guildFilter)
    const statusMatch = statusFilter === 'All Statuses' || ch.status === statusFilter
    const priorityMatch = priorityFilter === 'All Priorities' || ch.priority === priorityFilter
    return guildMatch && statusMatch && priorityMatch
  })

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Innovation Challenges</h1>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          Grand challenges and guild-specific problem statements driving ecosystem innovation.
          Submit solutions, collaborate with peers, and earn recognition.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-3 bg-surface border border-border rounded-lg p-3 flex-wrap">
        <Filter className="w-4 h-4 text-text-secondary" />
        <div className="relative">
          <select
            value={guildFilter}
            onChange={(e) => setGuildFilter(e.target.value)}
            className="bg-surface-elevated border border-border rounded-md px-3 py-1.5 text-xs text-text-primary appearance-none pr-7 cursor-pointer focus:outline-none focus:border-primary"
          >
            {guildFilterOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <ChevronDown className="w-3 h-3 text-text-secondary absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-surface-elevated border border-border rounded-md px-3 py-1.5 text-xs text-text-primary appearance-none pr-7 cursor-pointer focus:outline-none focus:border-primary"
          >
            {statusFilterOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <ChevronDown className="w-3 h-3 text-text-secondary absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative">
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="bg-surface-elevated border border-border rounded-md px-3 py-1.5 text-xs text-text-primary appearance-none pr-7 cursor-pointer focus:outline-none focus:border-primary"
          >
            {priorityFilterOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <ChevronDown className="w-3 h-3 text-text-secondary absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <span className="text-[10px] text-text-secondary ml-auto">{filtered.length} challenges</span>
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((ch) => {
          const statusCfg = statusConfig[ch.status]
          const StatusIcon = statusCfg.icon
          const StageIcon = stageIcons[ch.stage]
          return (
            <Link
              key={ch.id}
              href={`/engage/challenges/${ch.id}`}
              className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group"
            >
              {/* Guild Badges */}
              <div className="flex flex-wrap gap-1 mb-2">
                {ch.guilds.map((guild) => (
                  <span
                    key={guild.name}
                    className="text-[9px] px-1.5 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: `${guild.color}15`, color: guild.color, border: `1px solid ${guild.color}25` }}
                  >
                    {guild.name}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {ch.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-text-secondary mb-3 leading-relaxed line-clamp-2">{ch.description}</p>

              {/* Meta Row */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <StatusIcon className="w-3 h-3" style={{ color: statusCfg.color }} />
                  <span className="text-[10px]" style={{ color: statusCfg.color }}>{ch.status}</span>
                </div>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                  ch.priority === 'Critical' ? 'bg-red-500/10 text-red-400' :
                  ch.priority === 'High' ? 'bg-amber-500/10 text-amber-400' :
                  ch.priority === 'Medium' ? 'bg-blue-500/10 text-blue-400' :
                  'bg-gray-500/10 text-gray-400'
                }`}>
                  {ch.priority}
                </span>
                <div className="flex items-center gap-1">
                  <StageIcon className="w-3 h-3 text-text-secondary" />
                  <span className="text-[10px] text-text-secondary">{ch.stage}</span>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <FileText className="w-3 h-3 text-text-secondary" />
                  <span className="text-[10px] text-text-secondary">{ch.submissions}</span>
                </div>
              </div>

              {/* Deadline */}
              <div className="flex items-center gap-1 mt-2">
                <Clock className="w-3 h-3 text-text-secondary" />
                <span className="text-[10px] text-text-secondary">Deadline: {ch.deadline}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
