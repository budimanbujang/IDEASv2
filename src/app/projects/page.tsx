'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import {
  Rocket, ChevronRight, X, AlertTriangle, CheckCircle2,
  Clock, DollarSign, Building2, GitBranch, Shield,
  Calendar, Target, Zap, ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Project = {
  id: string
  name: string
  phase: number
  startMonth: number
  endMonth: number
  budget: string
  status: 'green' | 'amber' | 'red'
  lead: string
  description: string
  dependencies: string[]
  risk: 'Low' | 'Medium' | 'High'
}

const phases = [
  { id: 0, label: 'Phase 0', subtitle: 'Foundation', months: '1-6', budget: 'RM150-200M', color: '#007B7F', bgAlpha: '12' },
  { id: 1, label: 'Phase 1', subtitle: 'Activation', months: '7-18', budget: 'RM800M-1.2B', color: '#3B82F6', bgAlpha: '10' },
  { id: 2, label: 'Phase 2', subtitle: 'Expansion', months: '19-36', budget: 'RM900M-1.3B', color: '#A855F7', bgAlpha: '10' },
  { id: 3, label: 'Phase 3', subtitle: 'Maturity', months: '37-60', budget: 'RM600-800M', color: '#D4A847', bgAlpha: '10' },
]

const gates = [
  { month: 6, label: 'Gate 1', color: '#007B7F' },
  { month: 18, label: 'Gate 2', color: '#3B82F6' },
  { month: 36, label: 'Gate 3', color: '#A855F7' },
]

const projects: Project[] = [
  // Phase 0
  { id: 'p0-1', name: 'IDEAS Platform v1', phase: 0, startMonth: 1, endMonth: 6, budget: 'RM40M', status: 'green', lead: 'IBTEC Digital', description: 'Core digital platform with discovery, engagement, and intelligence layers. MVP delivery in 6 months.', dependencies: [], risk: 'Low' },
  { id: 'p0-2', name: '5G Campus Network', phase: 0, startMonth: 1, endMonth: 6, budget: 'RM35M', status: 'green', lead: 'TM / DNB', description: 'Private 5G network deployment covering Innovation District with URLLC, eMBB, and mMTC slices.', dependencies: [], risk: 'Medium' },
  { id: 'p0-3', name: 'IoT Sensor Layer v1', phase: 0, startMonth: 2, endMonth: 6, budget: 'RM25M', status: 'amber', lead: 'IBTEC Ops', description: 'Initial deployment of 15,000 IoT sensors across environmental, structural, and mobility domains.', dependencies: ['5G Campus Network'], risk: 'Medium' },
  { id: 'p0-4', name: 'Digital Twin Foundation', phase: 0, startMonth: 2, endMonth: 6, budget: 'RM30M', status: 'green', lead: 'NVIDIA / IBTEC', description: '3D digital twin of IBTEC precinct using Omniverse, achieving 90% accuracy on core infrastructure.', dependencies: ['IoT Sensor Layer v1'], risk: 'Medium' },
  { id: 'p0-5', name: 'Smart City Command Centre v1', phase: 0, startMonth: 3, endMonth: 6, budget: 'RM20M', status: 'green', lead: 'IBTEC Ops', description: 'Centralised operations command centre with real-time monitoring, alert management, and AI-assisted decision support.', dependencies: ['5G Campus Network', 'IoT Sensor Layer v1'], risk: 'Low' },
  // Phase 1
  { id: 'p1-1', name: 'Life Sciences Guild', phase: 1, startMonth: 7, endMonth: 15, budget: 'RM80M', status: 'green', lead: 'BioNexus / MOSTI', description: 'Vertical innovation guild for life sciences with wet labs, bio-incubator, and clinical trial coordination.', dependencies: ['IDEAS Platform v1'], risk: 'Medium' },
  { id: 'p1-2', name: 'Semiconductor Guild', phase: 1, startMonth: 7, endMonth: 16, budget: 'RM120M', status: 'amber', lead: 'SilTerra / MIDA', description: 'Semiconductor design and testing guild with clean rooms, EDA tools, and supply chain integration.', dependencies: ['IDEAS Platform v1'], risk: 'High' },
  { id: 'p1-3', name: 'Agentic AI Ops v1', phase: 1, startMonth: 8, endMonth: 18, budget: 'RM60M', status: 'green', lead: 'IBTEC AI Lab', description: 'First generation autonomous AI agents for building management, traffic optimisation, and energy trading.', dependencies: ['Digital Twin Foundation', 'Smart City Command Centre v1'], risk: 'Medium' },
  { id: 'p1-4', name: 'Autonomous Logistics Pilot', phase: 1, startMonth: 9, endMonth: 18, budget: 'RM45M', status: 'amber', lead: 'IBTEC Mobility', description: 'Pilot programme for autonomous last-mile delivery and shuttle services within IBTEC precinct.', dependencies: ['5G Campus Network', 'IoT Sensor Layer v1'], risk: 'High' },
  { id: 'p1-5', name: 'Data Marketplace v1', phase: 1, startMonth: 8, endMonth: 15, budget: 'RM35M', status: 'green', lead: 'IBTEC Digital', description: 'Launch of 6 initial data products with subscription management, privacy controls, and revenue sharing.', dependencies: ['IDEAS Platform v1', 'IoT Sensor Layer v1'], risk: 'Low' },
  { id: 'p1-6', name: 'Community Co-Creation', phase: 1, startMonth: 7, endMonth: 18, budget: 'RM25M', status: 'green', lead: 'IBTEC Engage', description: 'Citizen-driven innovation programme with challenge marketplace, hackathons, and living lab experiments.', dependencies: ['IDEAS Platform v1'], risk: 'Low' },
  // Phase 2
  { id: 'p2-1', name: 'IDEAS 2.0 Full Platform', phase: 2, startMonth: 19, endMonth: 30, budget: 'RM100M', status: 'green', lead: 'IBTEC Digital', description: 'Full platform upgrade with federation, advanced analytics, agentic AI integration, and marketplace expansion.', dependencies: ['IDEAS Platform v1', 'Data Marketplace v1'], risk: 'Medium' },
  { id: 'p2-2', name: 'Advanced Digital Twin', phase: 2, startMonth: 19, endMonth: 32, budget: 'RM80M', status: 'green', lead: 'NVIDIA / IBTEC', description: 'Next-generation digital twin with predictive simulation, what-if scenarios, and 99% accuracy target.', dependencies: ['Digital Twin Foundation'], risk: 'Medium' },
  { id: 'p2-3', name: 'Federation Expansion', phase: 2, startMonth: 20, endMonth: 36, budget: 'RM60M', status: 'green', lead: 'IBTEC Global', description: 'Connect 5 international innovation districts through federated data sharing and cross-border collaboration.', dependencies: ['IDEAS 2.0 Full Platform'], risk: 'High' },
  { id: 'p2-4', name: 'Autonomous Shuttle', phase: 2, startMonth: 22, endMonth: 36, budget: 'RM90M', status: 'amber', lead: 'IBTEC Mobility', description: 'Full autonomous shuttle network covering 12 routes within IBTEC and connecting to JB Sentral transit hub.', dependencies: ['Autonomous Logistics Pilot', '5G Campus Network'], risk: 'High' },
  { id: 'p2-5', name: 'Energy Trading Platform', phase: 2, startMonth: 20, endMonth: 34, budget: 'RM55M', status: 'green', lead: 'TNB / IBTEC', description: 'Peer-to-peer energy trading marketplace with smart grid integration and carbon credit tracking.', dependencies: ['Agentic AI Ops v1', 'IoT Sensor Layer v1'], risk: 'Medium' },
  { id: 'p2-6', name: 'Regulatory Sandbox Expansion', phase: 2, startMonth: 19, endMonth: 36, budget: 'RM40M', status: 'green', lead: 'SC / BNM / MCMC', description: 'Extended regulatory sandbox covering fintech, healthtech, autonomous vehicles, and data governance.', dependencies: [], risk: 'Medium' },
  // Phase 3
  { id: 'p3-1', name: 'IaaP Licensing', phase: 3, startMonth: 37, endMonth: 54, budget: 'RM80M', status: 'green', lead: 'IBTEC Global', description: 'Package and license IBTEC platform to 10+ global innovation districts. White-label deployment toolkit.', dependencies: ['IDEAS 2.0 Full Platform', 'Federation Expansion'], risk: 'Medium' },
  { id: 'p3-2', name: 'Full Agentic AI', phase: 3, startMonth: 37, endMonth: 55, budget: 'RM120M', status: 'green', lead: 'IBTEC AI Lab', description: 'Level 3 autonomous AI across all city systems with human-on-the-loop oversight and self-healing infrastructure.', dependencies: ['Agentic AI Ops v1', 'Advanced Digital Twin'], risk: 'High' },
  { id: 'p3-3', name: 'Carbon Offset Marketplace', phase: 3, startMonth: 38, endMonth: 52, budget: 'RM45M', status: 'green', lead: 'IBTEC Sustainability', description: 'Full carbon offset marketplace with verified credits, ESG reporting, and integration with global registries.', dependencies: ['Energy Trading Platform', 'Data Marketplace v1'], risk: 'Medium' },
  { id: 'p3-4', name: 'Workforce Skills Intel', phase: 3, startMonth: 39, endMonth: 56, budget: 'RM35M', status: 'green', lead: 'TalentCorp / IBTEC', description: 'AI-powered workforce intelligence platform for skills gap analysis, upskilling pathways, and talent matching.', dependencies: ['IDEAS 2.0 Full Platform'], risk: 'Low' },
  { id: 'p3-5', name: 'Global Innovation Index', phase: 3, startMonth: 40, endMonth: 58, budget: 'RM30M', status: 'green', lead: 'IBTEC Intelligence', description: 'Annual benchmarking index comparing innovation districts worldwide on 50+ metrics with real-time tracking.', dependencies: ['Federation Expansion', 'Intelligence Dashboard'], risk: 'Low' },
  { id: 'p3-6', name: 'Federation 2.0', phase: 3, startMonth: 42, endMonth: 60, budget: 'RM50M', status: 'green', lead: 'IBTEC Global', description: 'Next-generation federation with 20+ districts, decentralised governance, and cross-border innovation programmes.', dependencies: ['Federation Expansion', 'IaaP Licensing'], risk: 'High' },
]

const TOTAL_MONTHS = 60
const MONTH_WIDTH = 28
const ROW_HEIGHT = 36
const HEADER_HEIGHT = 80
const LABEL_WIDTH = 240

function getPhaseForMonth(month: number): number {
  if (month <= 6) return 0
  if (month <= 18) return 1
  if (month <= 36) return 2
  return 3
}

const statusColors = {
  green: '#22C55E',
  amber: '#F59E0B',
  red: '#EF4444',
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const totalChartWidth = TOTAL_MONTHS * MONTH_WIDTH
  const totalChartHeight = HEADER_HEIGHT + projects.length * ROW_HEIGHT + 20

  return (
    <div className="space-y-5 max-w-[1800px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            23 Catalytic Projects — 60-Month Roadmap
          </h1>
          <p className="text-text-secondary text-sm mt-1">Strategic investment programme driving IBTEC from foundation to global scale</p>
        </div>
        <div className="bg-surface border border-border rounded-lg px-5 py-2.5">
          <div className="text-xs text-text-secondary">Total Investment</div>
          <div className="text-xl font-bold text-accent-gold">RM2.5–3.5B</div>
        </div>
      </div>

      {/* Budget Breakdown Strip */}
      <div className="bg-surface border border-border rounded-lg p-4">
        <div className="flex items-center gap-1 h-10 rounded-lg overflow-hidden">
          {phases.map((phase) => {
            const widths = [10, 30, 35, 25]
            return (
              <div
                key={phase.id}
                className="h-full flex items-center justify-center gap-2 text-white text-xs font-semibold transition-all hover:brightness-110 cursor-default relative"
                style={{ width: `${widths[phase.id]}%`, backgroundColor: phase.color }}
              >
                <span className="hidden sm:inline">{phase.label}</span>
                <span className="text-[10px] font-normal opacity-80">{phase.budget}</span>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-between mt-2 px-1">
          {phases.map((phase) => (
            <div key={phase.id} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: phase.color }} />
              <span className="text-[10px] text-text-secondary">{phase.label}: {phase.subtitle} (Mo {phase.months})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content: Gantt + Detail Panel */}
      <div className="flex gap-4">
        {/* Gantt Chart */}
        <div className={cn('flex-1 bg-surface border border-border rounded-lg overflow-hidden', selectedProject ? 'max-w-[calc(100%-360px)]' : '')}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Project Timeline
            </h2>
            <div className="flex items-center gap-3">
              {gates.map((gate) => (
                <div key={gate.label} className="flex items-center gap-1 text-[10px] text-text-secondary">
                  <span style={{ color: gate.color }}>&#x2B25;</span>
                  <span>{gate.label} (Mo {gate.month})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto overflow-y-auto" ref={scrollRef} style={{ maxHeight: '70vh' }}>
            <div className="flex" style={{ minWidth: LABEL_WIDTH + totalChartWidth }}>
              {/* Labels Column */}
              <div className="flex-shrink-0 bg-surface z-10 sticky left-0" style={{ width: LABEL_WIDTH }}>
                {/* Header spacer */}
                <div className="border-b border-border" style={{ height: HEADER_HEIGHT }}>
                  <div className="px-3 pt-2">
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold">Projects</span>
                  </div>
                </div>
                {/* Project labels */}
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                    className={cn(
                      'flex items-center gap-2 px-3 border-b border-border/40 cursor-pointer transition-colors',
                      selectedProject?.id === project.id ? 'bg-primary/10' : 'hover:bg-surface-elevated/50'
                    )}
                    style={{ height: ROW_HEIGHT }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: statusColors[project.status] }} />
                    <span className="text-[11px] text-text-primary truncate font-medium flex-1">{project.name}</span>
                    <span className="text-[9px] text-text-secondary flex-shrink-0">{project.budget}</span>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="flex-1 relative" style={{ width: totalChartWidth }}>
                {/* Month headers */}
                <div className="flex border-b border-border sticky top-0 bg-surface z-[5]" style={{ height: HEADER_HEIGHT }}>
                  {/* Phase row */}
                  <div className="absolute top-0 left-0 right-0 flex" style={{ height: 28 }}>
                    {phases.map((phase) => {
                      const startM = phase.id === 0 ? 1 : phase.id === 1 ? 7 : phase.id === 2 ? 19 : 37
                      const endM = phase.id === 0 ? 6 : phase.id === 1 ? 18 : phase.id === 2 ? 36 : 60
                      const left = (startM - 1) * MONTH_WIDTH
                      const width = (endM - startM + 1) * MONTH_WIDTH
                      return (
                        <div
                          key={phase.id}
                          className="absolute top-0 flex items-center justify-center text-[10px] font-semibold text-white/90 border-r border-white/10"
                          style={{ left, width, height: 28, backgroundColor: `${phase.color}90` }}
                        >
                          {phase.label} — {phase.subtitle}
                        </div>
                      )
                    })}
                  </div>
                  {/* Month numbers */}
                  <div className="absolute left-0 right-0 flex" style={{ top: 28, height: HEADER_HEIGHT - 28 }}>
                    {Array.from({ length: TOTAL_MONTHS }, (_, i) => i + 1).map((month) => (
                      <div
                        key={month}
                        className={cn(
                          'flex items-center justify-center text-[9px] border-r border-border/30 flex-shrink-0',
                          month % 6 === 0 ? 'text-text-primary font-semibold' : 'text-text-secondary/60'
                        )}
                        style={{ width: MONTH_WIDTH, height: '100%' }}
                      >
                        {month % 3 === 0 ? month : ''}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid and Bars */}
                <div className="relative" style={{ height: projects.length * ROW_HEIGHT }}>
                  {/* Phase background bands */}
                  {phases.map((phase) => {
                    const startM = phase.id === 0 ? 1 : phase.id === 1 ? 7 : phase.id === 2 ? 19 : 37
                    const endM = phase.id === 0 ? 6 : phase.id === 1 ? 18 : phase.id === 2 ? 36 : 60
                    const left = (startM - 1) * MONTH_WIDTH
                    const width = (endM - startM + 1) * MONTH_WIDTH
                    return (
                      <div
                        key={phase.id}
                        className="absolute top-0 bottom-0"
                        style={{ left, width, backgroundColor: `${phase.color}06` }}
                      />
                    )
                  })}

                  {/* Gate markers */}
                  {gates.map((gate) => {
                    const left = (gate.month - 0.5) * MONTH_WIDTH
                    return (
                      <div
                        key={gate.label}
                        className="absolute top-0 bottom-0 z-[3]"
                        style={{ left, width: 1 }}
                      >
                        <div className="absolute inset-0 border-l-2 border-dashed" style={{ borderColor: `${gate.color}60` }} />
                        <div
                          className="absolute -top-0 -left-[10px] w-5 h-5 flex items-center justify-center"
                          style={{ color: gate.color }}
                        >
                          <span className="text-sm">&#x2B25;</span>
                        </div>
                        <div
                          className="absolute -bottom-0 -left-[10px] w-5 h-5 flex items-center justify-center"
                          style={{ color: gate.color }}
                        >
                          <span className="text-sm">&#x2B25;</span>
                        </div>
                      </div>
                    )
                  })}

                  {/* Horizontal row lines */}
                  {projects.map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-b border-border/20"
                      style={{ top: (i + 1) * ROW_HEIGHT }}
                    />
                  ))}

                  {/* Project bars */}
                  {projects.map((project, i) => {
                    const left = (project.startMonth - 1) * MONTH_WIDTH + 4
                    const width = (project.endMonth - project.startMonth + 1) * MONTH_WIDTH - 8
                    const top = i * ROW_HEIGHT + 6
                    const barHeight = ROW_HEIGHT - 12
                    const phaseColor = phases[project.phase].color
                    const isSelected = selectedProject?.id === project.id

                    return (
                      <div
                        key={project.id}
                        onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                        className={cn(
                          'absolute rounded-md cursor-pointer transition-all group',
                          isSelected ? 'ring-2 ring-white/40 z-[4]' : 'hover:brightness-125 z-[2]'
                        )}
                        style={{
                          left,
                          width,
                          top,
                          height: barHeight,
                          background: `linear-gradient(135deg, ${phaseColor}CC, ${phaseColor}90)`,
                          boxShadow: isSelected ? `0 0 12px ${phaseColor}40` : 'none',
                        }}
                      >
                        {/* Status dot */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 left-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: statusColors[project.status] }}
                        />
                        {/* Project name on bar */}
                        {width > 80 && (
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[9px] text-white font-medium truncate" style={{ maxWidth: width - 30 }}>
                            {project.name}
                          </span>
                        )}
                        {/* Hover tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-background border border-border rounded px-2 py-1 text-[10px] text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                          {project.name} — {project.budget} — Mo {project.startMonth}-{project.endMonth}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        {selectedProject && (
          <div className="w-[340px] flex-shrink-0 bg-surface border border-border rounded-lg overflow-hidden">
            <div className="p-4 border-b border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: phases[selectedProject.phase].color }} />
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: phases[selectedProject.phase].color }}>
                  {phases[selectedProject.phase].label} — {phases[selectedProject.phase].subtitle}
                </span>
                <button onClick={() => setSelectedProject(null)} className="text-text-secondary hover:text-text-primary transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-base font-bold text-text-primary mt-2">{selectedProject.name}</h3>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-xs text-text-secondary leading-relaxed">{selectedProject.description}</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-background rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <DollarSign className="w-3 h-3 text-accent-gold" />
                    <span className="text-[10px] text-text-secondary">Budget</span>
                  </div>
                  <span className="text-sm font-bold text-text-primary">{selectedProject.budget}</span>
                </div>
                <div className="bg-background rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Clock className="w-3 h-3 text-primary" />
                    <span className="text-[10px] text-text-secondary">Timeline</span>
                  </div>
                  <span className="text-sm font-bold text-text-primary">Mo {selectedProject.startMonth}–{selectedProject.endMonth}</span>
                </div>
              </div>

              <div className="bg-background rounded-lg p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <Building2 className="w-3 h-3 text-blue-400" />
                  <span className="text-[10px] text-text-secondary">Lead Organisation</span>
                </div>
                <span className="text-xs font-semibold text-text-primary">{selectedProject.lead}</span>
              </div>

              <div className="bg-background rounded-lg p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <GitBranch className="w-3 h-3 text-purple-400" />
                  <span className="text-[10px] text-text-secondary">Dependencies</span>
                </div>
                {selectedProject.dependencies.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.dependencies.map((dep) => (
                      <span key={dep} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">{dep}</span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-text-secondary italic">No dependencies</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-background rounded-lg p-3 flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Shield className="w-3 h-3 text-text-secondary" />
                    <span className="text-[10px] text-text-secondary">Risk Level</span>
                  </div>
                  <span className={cn(
                    'text-xs font-semibold',
                    selectedProject.risk === 'Low' ? 'text-green-400' : selectedProject.risk === 'Medium' ? 'text-amber-400' : 'text-red-400'
                  )}>
                    {selectedProject.risk}
                  </span>
                </div>
                <div className="bg-background rounded-lg p-3 flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Target className="w-3 h-3 text-text-secondary" />
                    <span className="text-[10px] text-text-secondary">Status</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColors[selectedProject.status] }} />
                    <span className="text-xs font-semibold text-text-primary capitalize">{selectedProject.status === 'green' ? 'On Track' : selectedProject.status === 'amber' ? 'At Risk' : 'Blocked'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 90-Day Sprint Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/projects/sprint"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
          >
            <Zap className="w-4 h-4" />
            90-Day Sprint Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects/gates"
            className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-text-primary text-sm font-semibold rounded-lg hover:border-primary/30 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Phase Gates
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex items-center gap-4 text-xs text-text-secondary">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500" /> On Track</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-500" /> At Risk</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500" /> Blocked</div>
        </div>
      </div>
    </div>
  )
}
