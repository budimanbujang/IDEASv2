'use client'

import React, { useState } from 'react'
import {
  Lightbulb, Beaker, ShieldCheck, Rocket, BarChart3,
  Lock, Filter, Clock, Users, AlertCircle, ChevronDown,
  Kanban
} from 'lucide-react'

type GuildBadge = {
  name: string
  color: string
}

type ProjectCard = {
  id: string
  title: string
  guilds: GuildBadge[]
  stage: string
  duration: string
  team: string[]
  health: 'green' | 'amber' | 'red'
  priority: 'Critical' | 'High' | 'Medium'
}

const stages = [
  { name: 'Ideate', icon: Lightbulb, color: '#3B82F6' },
  { name: 'Prototype', icon: Beaker, color: '#8B5CF6' },
  { name: 'Validate', icon: ShieldCheck, color: '#F59E0B' },
  { name: 'Deploy', icon: Rocket, color: '#22C55E' },
  { name: 'Scale', icon: BarChart3, color: '#06B6D4' },
]

const guildColors: Record<string, string> = {
  Healthcare: '#E11D48',
  Proptech: '#3B82F6',
  Agrifood: '#22C55E',
  'Food Services': '#F97316',
  'Life Sciences': '#EC4899',
  Semiconductor: '#6366F1',
  'Cross-Vertical': '#A855F7',
}

const projects: ProjectCard[] = [
  // Ideate
  {
    id: 'p1', title: 'Plantation Intelligence Platform',
    guilds: [{ name: 'Agrifood', color: '#22C55E' }],
    stage: 'Ideate', duration: '2 weeks', team: ['🧑‍🌾', '🤖', '📊'],
    health: 'green', priority: 'High',
  },
  {
    id: 'p2', title: 'Halal Blockchain Traceability',
    guilds: [{ name: 'Cross-Vertical', color: '#A855F7' }],
    stage: 'Ideate', duration: '1 week', team: ['🔗', '🍽️', '📦'],
    health: 'green', priority: 'Medium',
  },
  {
    id: 'p3', title: 'Semiconductor Workforce Academy',
    guilds: [{ name: 'Semiconductor', color: '#6366F1' }],
    stage: 'Ideate', duration: '3 weeks', team: ['🎓', '💻', '🏭'],
    health: 'amber', priority: 'Critical',
  },
  // Prototype
  {
    id: 'p4', title: 'Wellness Township Data Model',
    guilds: [{ name: 'Healthcare', color: '#E11D48' }, { name: 'Proptech', color: '#3B82F6' }],
    stage: 'Prototype', duration: '6 weeks', team: ['🏥', '🏘️', '📈'],
    health: 'green', priority: 'High',
  },
  {
    id: 'p5', title: 'Tropical Disease Biomarker Panel',
    guilds: [{ name: 'Life Sciences', color: '#EC4899' }],
    stage: 'Prototype', duration: '8 weeks', team: ['🧬', '🔬', '💊'],
    health: 'amber', priority: 'Critical',
  },
  // Validate
  {
    id: 'p6', title: 'AI Radiology Screening — Chest X-ray',
    guilds: [{ name: 'Healthcare', color: '#E11D48' }],
    stage: 'Validate', duration: '12 weeks', team: ['🩺', '🤖', '📋'],
    health: 'green', priority: 'Critical',
  },
  {
    id: 'p7', title: 'Smart Building Energy Optimizer',
    guilds: [{ name: 'Proptech', color: '#3B82F6' }],
    stage: 'Validate', duration: '10 weeks', team: ['🏢', '⚡', '📊'],
    health: 'green', priority: 'High',
  },
  // Deploy
  {
    id: 'p8', title: 'QSR Demand Forecasting Engine',
    guilds: [{ name: 'Food Services', color: '#F97316' }],
    stage: 'Deploy', duration: '16 weeks', team: ['🍗', '📈', '🤖'],
    health: 'green', priority: 'Critical',
  },
  {
    id: 'p9', title: 'Farm-to-Fork Supply Chain',
    guilds: [{ name: 'Agrifood', color: '#22C55E' }, { name: 'Food Services', color: '#F97316' }],
    stage: 'Deploy', duration: '14 weeks', team: ['🌾', '🚛', '🍽️'],
    health: 'amber', priority: 'High',
  },
  // Scale
  {
    id: 'p10', title: 'KPJ Telemedicine Platform',
    guilds: [{ name: 'Healthcare', color: '#E11D48' }],
    stage: 'Scale', duration: '24 weeks', team: ['📱', '🩺', '☁️', '📊'],
    health: 'green', priority: 'Critical',
  },
]

const guildFilterOptions = ['All Guilds', 'Healthcare', 'Proptech', 'Agrifood', 'Food Services', 'Life Sciences', 'Semiconductor', 'Cross-Vertical']
const priorityFilterOptions = ['All Priorities', 'Critical', 'High', 'Medium']

export default function PipelinePage() {
  const [guildFilter, setGuildFilter] = useState('All Guilds')
  const [priorityFilter, setPriorityFilter] = useState('All Priorities')

  const filteredProjects = projects.filter((p) => {
    const guildMatch = guildFilter === 'All Guilds' || p.guilds.some(g => g.name === guildFilter)
    const priorityMatch = priorityFilter === 'All Priorities' || p.priority === priorityFilter
    return guildMatch && priorityMatch
  })

  return (
    <div className="space-y-4 max-w-[1800px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Kanban className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Innovation Pipeline</h1>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          Kanban view of all innovation projects across the five-stage pipeline. Track progress from ideation through to scale.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-3 bg-surface border border-border rounded-lg p-3">
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
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="bg-surface-elevated border border-border rounded-md px-3 py-1.5 text-xs text-text-primary appearance-none pr-7 cursor-pointer focus:outline-none focus:border-primary"
          >
            {priorityFilterOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <ChevronDown className="w-3 h-3 text-text-secondary absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <span className="text-[10px] text-text-secondary ml-auto">{filteredProjects.length} projects</span>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-3 overflow-x-auto pb-4">
        {stages.map((stage, stageIdx) => {
          const StageIcon = stage.icon
          const stageProjects = filteredProjects.filter(p => p.stage === stage.name)
          return (
            <div key={stage.name} className="min-w-[280px] flex-1 flex flex-col">
              {/* Column Header */}
              <div className="bg-surface border border-border rounded-t-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StageIcon className="w-4 h-4" style={{ color: stage.color }} />
                  <span className="text-sm font-semibold text-text-primary">{stage.name}</span>
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${stage.color}15`, color: stage.color }}
                >
                  {stageProjects.length}
                </span>
              </div>

              {/* Column Body */}
              <div className="bg-background border-x border-b border-border rounded-b-lg p-2 flex-1 space-y-2 min-h-[200px]">
                {stageProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-surface border border-border rounded-lg p-3 hover:border-primary/30 transition-colors cursor-pointer"
                  >
                    {/* Guild Badges */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.guilds.map((guild) => (
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
                    <h4 className="text-xs font-medium text-text-primary mb-2 leading-relaxed">{project.title}</h4>

                    {/* Meta Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-text-secondary" />
                          <span className="text-[10px] text-text-secondary">{project.duration}</span>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${
                          project.health === 'green' ? 'bg-green-400' :
                          project.health === 'amber' ? 'bg-amber-400' :
                          'bg-red-400'
                        }`} />
                      </div>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                        project.priority === 'Critical' ? 'bg-red-500/10 text-red-400' :
                        project.priority === 'High' ? 'bg-amber-500/10 text-amber-400' :
                        'bg-blue-500/10 text-blue-400'
                      }`}>
                        {project.priority}
                      </span>
                    </div>

                    {/* Team Avatars */}
                    <div className="flex items-center gap-1 mt-2">
                      {project.team.map((emoji, i) => (
                        <span key={i} className="text-sm" title="Team member">{emoji}</span>
                      ))}
                    </div>
                  </div>
                ))}

                {stageProjects.length === 0 && (
                  <div className="flex items-center justify-center h-24 text-text-secondary text-xs">
                    No projects
                  </div>
                )}
              </div>

              {/* Gate Indicator */}
              {stageIdx < stages.length - 1 && (
                <div className="flex items-center justify-center py-1">
                  <div className="flex items-center gap-1 text-text-secondary">
                    <Lock className="w-3 h-3" />
                    <span className="text-[9px]">Gate</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
