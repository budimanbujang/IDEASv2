'use client'

import React from 'react'
import { BarChart3, TrendingUp, ArrowUpRight, GitBranch } from 'lucide-react'

const crossVerticalProjects = [
  { name: 'Wellness Township Challenge', guilds: ['Healthcare', 'Proptech'], guildColors: ['#E11D48', '#3B82F6'], stage: 'Prototype', outcome: 'Evidence-based wellness design for JLG township', impact: 'RM15M projected savings' },
  { name: 'Farm-to-Fork Intelligence', guilds: ['Agrifood', 'Food Services'], guildColors: ['#22C55E', '#F97316'], stage: 'Ideate', outcome: 'Supply-demand model linking JPG to QSR', impact: '20-30% waste reduction target' },
  { name: 'Sustainable Operations Dashboard', guilds: ['All Guilds'], guildColors: ['#A855F7'], stage: 'Ideate', outcome: 'Group-wide ESG automated reporting', impact: 'TCFD/ISSB compliance' },
  { name: 'Halal Ecosystem Intelligence', guilds: ['Agrifood', 'Food Services', 'Healthcare'], guildColors: ['#22C55E', '#F97316', '#E11D48'], stage: 'Ideate', outcome: 'AI-powered Halal traceability', impact: 'JAKIM standards alignment' },
]

const guildInteractions = [
  { from: 'Healthcare', to: 'Life Sciences', strength: 85, projects: 4 },
  { from: 'Agrifood', to: 'Food Services', strength: 78, projects: 3 },
  { from: 'Healthcare', to: 'Proptech', strength: 65, projects: 2 },
  { from: 'Semiconductor', to: 'Proptech', strength: 45, projects: 1 },
  { from: 'Life Sciences', to: 'Agrifood', strength: 40, projects: 1 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" />
          Cross-Vertical Analytics
        </h1>
        <p className="text-text-secondary text-sm mt-1">
          Measuring the innovation premium from cross-guild collaboration
        </p>
      </div>

      {/* Key insight */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-primary">
          <TrendingUp className="w-4 h-4 inline mr-1" />
          Cross-vertical projects generate <strong>2.3x higher commercial outcomes</strong> than single-guild projects — validating the antidisciplinary thesis.
        </p>
      </div>

      {/* Guild Interaction Strengths */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-primary" />
          Guild Collaboration Heatmap
        </h2>
        <div className="bg-surface border border-border rounded-lg p-4 space-y-2">
          {guildInteractions.map((interaction, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs text-text-primary w-28 text-right">{interaction.from}</span>
              <span className="text-text-secondary">↔</span>
              <span className="text-xs text-text-primary w-28">{interaction.to}</span>
              <div className="flex-1 h-3 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                  style={{ width: `${interaction.strength}%` }}
                />
              </div>
              <span className="text-xs text-text-secondary w-20">{interaction.projects} projects</span>
              <span className="text-xs font-mono text-primary">{interaction.strength}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Vertical Projects */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3">Active Cross-Vertical Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {crossVerticalProjects.map((project) => (
            <div key={project.name} className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                {project.guilds.map((guild, gi) => (
                  <span key={guild} className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: `${project.guildColors[gi]}15`, color: project.guildColors[gi] }}>
                    {guild}
                  </span>
                ))}
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-elevated text-text-secondary">{project.stage}</span>
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">{project.name}</h3>
              <p className="text-xs text-text-secondary mb-2">{project.outcome}</p>
              <div className="flex items-center gap-1 text-xs text-primary">
                <ArrowUpRight className="w-3 h-3" />
                {project.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
