'use client'

import React, { useState } from 'react'
import {
  Shield, ShieldCheck, CheckCircle2, Clock, AlertCircle,
  Users, Calendar, ChevronRight, Award, Building2,
  Lock, Eye, Scale, Heart, Leaf, UtensilsCrossed
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ---- Donut Chart Data ----
const complianceData = [
  { label: 'Certified', count: 12, color: '#22C55E' },
  { label: 'In Review', count: 5, color: '#F59E0B' },
  { label: 'Not Assessed', count: 3, color: '#6B7280' },
]
const total = complianceData.reduce((s, d) => s + d.count, 0)

function DonutChart() {
  const radius = 70
  const strokeWidth = 18
  const circumference = 2 * Math.PI * radius
  let cumulativeOffset = 0

  return (
    <svg viewBox="0 0 200 200" className="w-full h-auto" style={{ maxWidth: 220 }}>
      {complianceData.map((segment) => {
        const pct = segment.count / total
        const dashLength = pct * circumference
        const dashGap = circumference - dashLength
        const rotation = (cumulativeOffset / total) * 360 - 90
        cumulativeOffset += segment.count
        return (
          <circle
            key={segment.label}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dashLength} ${dashGap}`}
            strokeDashoffset={0}
            strokeLinecap="butt"
            transform={`rotate(${rotation} 100 100)`}
          />
        )
      })}
      <text x="100" y="92" textAnchor="middle" fill="#F1F5F9" fontSize="28" fontWeight="700" fontFamily="Inter, sans-serif">
        {total}
      </text>
      <text x="100" y="112" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">
        AI Models
      </text>
    </svg>
  )
}

// ---- Trust Mark Cards ----
const trustModels = [
  { name: 'PredictMaint AI', sector: 'Proptech', status: 'certified', riskLevel: 'Medium', lastAudit: 'Feb 2026', trustScore: 92 },
  { name: 'TrafficFlow AI', sector: 'Cross-Vertical', status: 'certified', riskLevel: 'High', lastAudit: 'Jan 2026', trustScore: 88 },
  { name: 'ClinicalDiag AI', sector: 'Healthcare', status: 'certified', riskLevel: 'High', lastAudit: 'Mar 2026', trustScore: 95 },
  { name: 'CropYield AI', sector: 'Agrifood', status: 'in-review', riskLevel: 'Low', lastAudit: 'Pending', trustScore: null },
  { name: 'EnergyTrade AI', sector: 'Proptech', status: 'certified', riskLevel: 'Medium', lastAudit: 'Dec 2025', trustScore: 85 },
]

const modelStatusConfig: Record<string, { label: string; color: string; Icon: typeof CheckCircle2 }> = {
  certified: { label: 'Certified', color: '#22C55E', Icon: ShieldCheck },
  'in-review': { label: 'In Review', color: '#F59E0B', Icon: Clock },
  'not-assessed': { label: 'Not Assessed', color: '#6B7280', Icon: AlertCircle },
}

// ---- Sector Governance ----
const sectorGovernance = [
  {
    title: 'Clinical AI Safety',
    sector: 'Healthcare',
    icon: Heart,
    color: '#E11D48',
    framework: 'WHO AI Ethics / MOH Guidelines',
    requirements: ['Clinical validation on local population data', 'Explainability reports for clinicians', 'Adverse event monitoring pipeline', 'Patient consent management'],
  },
  {
    title: 'ESG AI Governance',
    sector: 'Proptech',
    icon: Leaf,
    color: '#22C55E',
    framework: 'TCFD / GRI / Bursa Sustainability',
    requirements: ['Carbon accounting model auditability', 'ESG data provenance verification', 'Greenwashing detection safeguards', 'Stakeholder impact assessment'],
  },
  {
    title: 'Halal Compliance AI',
    sector: 'Agrifood',
    icon: UtensilsCrossed,
    color: '#F97316',
    framework: 'JAKIM / MS 1500:2019',
    requirements: ['Halal supply chain data integrity', 'Cross-contamination risk modelling', 'JAKIM certification data integration', 'Sharia advisory board review'],
  },
]

// ---- Five-Tier Governance ----
const governanceTiers = [
  {
    tier: 1,
    name: 'Board of Governors',
    chair: 'YBhg Tan Sri Dato\u2019 Razali',
    members: 12,
    nextMeeting: '15 Apr 2026',
    pendingDecisions: 3,
    color: '#D4A847',
    role: 'Strategic oversight, policy approval, and stakeholder accountability.',
  },
  {
    tier: 2,
    name: 'Project Steering Committee (PSC)',
    chair: 'Dato\u2019 Dr. Hj. Aminuddin',
    members: 8,
    nextMeeting: '22 Apr 2026',
    pendingDecisions: 5,
    color: '#3B82F6',
    role: 'Cross-workstream coordination, milestone approval, risk escalation.',
  },
  {
    tier: 3,
    name: 'Project Management Office (PMO)',
    chair: 'Sarah Lim (Programme Director)',
    members: 6,
    nextMeeting: '8 Apr 2026',
    pendingDecisions: 8,
    color: '#22C55E',
    role: 'Day-to-day execution, timeline management, resource allocation.',
  },
  {
    tier: 4,
    name: 'Workstream Leads',
    chair: 'Rotating (Guild Heads)',
    members: 14,
    nextMeeting: 'Weekly Standups',
    pendingDecisions: 12,
    color: '#A855F7',
    role: 'Guild-level delivery, technical decisions, team coordination.',
  },
  {
    tier: 5,
    name: 'Technical Advisory Committee (TAC)',
    chair: 'Prof. Dr. Lim Chee Peng',
    members: 9,
    nextMeeting: '1 May 2026',
    pendingDecisions: 4,
    color: '#EC4899',
    role: 'Technology assessment, architecture review, standards compliance.',
  },
]

const sectorColors: Record<string, string> = {
  Healthcare: '#E11D48',
  Proptech: '#3B82F6',
  Agrifood: '#22C55E',
  'Cross-Vertical': '#A855F7',
}

// ---- Page ----

export default function TrustPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-primary" />
            <h1 className="text-2xl font-bold text-text-primary">IDEAS Trust Framework</h1>
          </div>
          <p className="text-text-secondary text-sm">
            AI governance, certification, and accountability architecture for the IBTEC ecosystem.
          </p>
        </div>
        <div className="bg-surface border border-primary/30 rounded-lg px-4 py-2 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <div>
            <p className="text-[10px] text-text-secondary">Aligned with</p>
            <p className="text-xs font-semibold text-text-primary">AI Verify Foundation</p>
          </div>
        </div>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Donut Chart */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <h2 className="text-sm font-semibold text-text-primary mb-4">Compliance Status</h2>
          <div className="flex justify-center mb-4">
            <DonutChart />
          </div>
          <div className="flex justify-center gap-6">
            {complianceData.map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-[10px] text-text-secondary">{d.label}: <span className="text-text-primary font-semibold">{d.count}</span></span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Mark Cards */}
        <div className="lg:col-span-2 bg-surface border border-border rounded-lg p-5">
          <h2 className="text-sm font-semibold text-text-primary mb-4">Trust Mark Certifications</h2>
          <div className="space-y-3">
            {trustModels.map((model) => {
              const st = modelStatusConfig[model.status]
              const Icon = st.Icon
              return (
                <div key={model.name} className="flex items-center gap-4 p-3 rounded-lg border border-border hover:border-primary/20 transition-all">
                  {/* Trust Shield */}
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${st.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: st.color }} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold text-text-primary">{model.name}</h3>
                      <span
                        className="text-[9px] font-medium px-2 py-0.5 rounded-full border"
                        style={{
                          color: sectorColors[model.sector] || '#007B7F',
                          backgroundColor: `${sectorColors[model.sector] || '#007B7F'}10`,
                          borderColor: `${sectorColors[model.sector] || '#007B7F'}30`,
                        }}
                      >
                        {model.sector}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-[10px] text-text-secondary">
                      <span>Risk: <span className="text-text-primary font-medium">{model.riskLevel}</span></span>
                      <span>Last Audit: <span className="text-text-primary font-medium">{model.lastAudit}</span></span>
                    </div>
                  </div>

                  {/* Trust Score */}
                  <div className="text-right shrink-0">
                    {model.trustScore ? (
                      <>
                        <p className="text-lg font-bold" style={{ color: model.trustScore >= 90 ? '#22C55E' : model.trustScore >= 80 ? '#F59E0B' : '#EF4444' }}>
                          {model.trustScore}
                        </p>
                        <p className="text-[9px] text-text-secondary">Trust Score</p>
                      </>
                    ) : (
                      <span className="text-[10px] text-text-secondary italic">Pending</span>
                    )}
                  </div>

                  {/* Gold Shield Badge for certified */}
                  {model.status === 'certified' && (
                    <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-accent-gold" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sector-Specific Governance */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Sector-Specific AI Governance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sectorGovernance.map((sg) => {
            const Icon = sg.icon
            return (
              <div key={sg.title} className="bg-surface border border-border rounded-lg p-5 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${sg.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: sg.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{sg.title}</h3>
                    <p className="text-[10px] text-text-secondary">{sg.sector}</p>
                  </div>
                </div>
                <p className="text-[10px] text-primary font-medium mb-3">Framework: {sg.framework}</p>
                <ul className="space-y-1.5">
                  {sg.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-text-secondary">
                      <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Five-Tier Governance */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" />
          Five-Tier Governance Structure
        </h2>
        <div className="space-y-3">
          {governanceTiers.map((tier) => (
            <div key={tier.tier} className="bg-surface border border-border rounded-lg p-5 hover:border-primary/30 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Tier Badge */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-lg font-bold"
                  style={{ backgroundColor: `${tier.color}15`, color: tier.color }}
                >
                  T{tier.tier}
                </div>

                {/* Main Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary">{tier.name}</h3>
                  <p className="text-[11px] text-text-secondary mt-0.5">{tier.role}</p>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-4 shrink-0 text-[10px]">
                  <div>
                    <p className="text-text-secondary">Chair</p>
                    <p className="text-text-primary font-medium">{tier.chair}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Members</p>
                    <p className="text-text-primary font-semibold">{tier.members}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Next Meeting</p>
                    <p className="text-text-primary font-medium">{tier.nextMeeting}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Pending</p>
                    <p className="font-semibold" style={{ color: tier.pendingDecisions > 6 ? '#F59E0B' : '#22C55E' }}>
                      {tier.pendingDecisions} decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
