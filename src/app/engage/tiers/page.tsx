'use client'

import React from 'react'
import {
  Compass, Home, Handshake, Anchor, ArrowRight, Users,
  Clock, Shield, TrendingUp, ChevronRight, Star, Zap,
  Building2, CheckCircle2, Quote
} from 'lucide-react'

const tiers = [
  {
    id: 'explorer',
    name: 'Explorer',
    icon: Compass,
    color: '#3B82F6',
    count: 340,
    commitment: 'Low — no fee',
    duration: 'Open-ended',
    access: 'Discovery catalogue, public datasets, community events, newsletter',
    idealFor: 'Startups, researchers, and corporates exploring what the ecosystem offers before committing resources.',
    features: [
      'Browse public discovery catalogue',
      'Access open datasets and APIs',
      'Attend community events and webinars',
      'Receive weekly ecosystem newsletter',
      'Submit expressions of interest for challenges',
    ],
  },
  {
    id: 'resident',
    name: 'Resident',
    icon: Home,
    color: '#22C55E',
    count: 28,
    commitment: 'Medium — RM 25K/yr',
    duration: '12-month renewable',
    access: 'Co-working space, guild participation, mentorship, sandbox environments, curated matchmaking',
    idealFor: 'Growth-stage startups and SMEs ready to embed in the ecosystem, access guild challenges, and build partnerships.',
    features: [
      'Hot desk or dedicated workspace',
      'Join up to 2 guild verticals',
      'Access sandbox / test environments',
      'Curated partner matchmaking',
      'Mentorship from guild advisors',
      'Submit to grand challenges',
    ],
  },
  {
    id: 'partner',
    name: 'Partner',
    icon: Handshake,
    color: '#F59E0B',
    count: 8,
    commitment: 'High — RM 150K/yr',
    duration: '24-month strategic',
    access: 'Dedicated lab space, priority data access, co-innovation programmes, revenue sharing, board advisory',
    idealFor: 'Established tech companies and MNCs seeking co-innovation with anchors and deep ecosystem integration.',
    features: [
      'Dedicated lab / office space',
      'Priority access to proprietary datasets',
      'Co-innovation programme with anchors',
      'Revenue sharing on commercialised IP',
      'Advisory board participation',
      'Custom data pipeline setup',
      'Joint GTM support',
    ],
  },
  {
    id: 'anchor',
    name: 'Anchor',
    icon: Anchor,
    color: '#D4A847',
    count: 2,
    commitment: 'Strategic — equity/in-kind',
    duration: 'Founding commitment',
    access: 'Guild ownership, governance seats, data sovereignty, first-mover rights, full platform access',
    idealFor: 'Major Johor corporates (KPJ, JLG) who anchor a vertical guild and commit long-term resources and data.',
    features: [
      'Own and govern a vertical guild',
      'Board governance seat',
      'Full data sovereignty and control',
      'First-mover rights on all innovations',
      'Complete platform access',
      'Co-design ecosystem strategy',
      'Revenue share from guild IP',
      'Federation partner nomination rights',
    ],
  },
]

const funnelSteps = [
  { label: 'Explorer', count: 340, color: '#3B82F6' },
  { label: 'Resident', count: 28, color: '#22C55E' },
  { label: 'Partner', count: 8, color: '#F59E0B' },
  { label: 'Anchor', count: 2, color: '#D4A847' },
]

const conversionRates = ['8.2%', '28.6%', '25.0%']

const recentConversions = [
  { org: 'AgriMind AI', from: 'Explorer', to: 'Resident', date: '3 days ago', guild: 'Agrifood', guildColor: '#22C55E' },
  { org: 'MedTech Solutions', from: 'Resident', to: 'Partner', date: '1 week ago', guild: 'Healthcare', guildColor: '#E11D48' },
  { org: 'SenseIoT Pte Ltd', from: 'Explorer', to: 'Resident', date: '2 weeks ago', guild: 'Proptech', guildColor: '#3B82F6' },
  { org: 'DataForge Analytics', from: 'Resident', to: 'Partner', date: '3 weeks ago', guild: 'Food Services', guildColor: '#F97316' },
]

export default function TiersPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Users className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Engagement Tiers</h1>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          Detailed view of the four-tier engagement model. Each tier is designed to match organisations
          at their current stage of innovation readiness with the right level of support and access.
        </p>
      </div>

      {/* Funnel Visualization */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h3 className="text-sm font-semibold text-text-primary mb-5">Engagement Funnel</h3>
        <div className="flex items-center justify-between">
          {funnelSteps.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex-1 flex flex-col items-center">
                <div
                  className="rounded-xl flex flex-col items-center justify-center transition-all"
                  style={{
                    backgroundColor: `${step.color}15`,
                    border: `1px solid ${step.color}30`,
                    width: `${Math.max(100 - i * 18, 40)}%`,
                    padding: '16px 8px',
                  }}
                >
                  <span className="text-2xl font-bold" style={{ color: step.color }}>{step.count}</span>
                  <span className="text-xs text-text-secondary mt-1">{step.label}</span>
                </div>
              </div>
              {i < funnelSteps.length - 1 && (
                <div className="flex flex-col items-center px-2 shrink-0">
                  <ArrowRight className="w-5 h-5 text-text-secondary" />
                  <span className="text-[10px] text-text-secondary mt-1">{conversionRates[i]}</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Detailed Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tiers.map((tier) => {
          const TierIcon = tier.icon
          return (
            <div key={tier.id} className="bg-surface border border-border rounded-lg overflow-hidden">
              <div className="h-1.5 w-full" style={{ backgroundColor: tier.color }} />
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${tier.color}15` }}>
                    <TierIcon className="w-6 h-6" style={{ color: tier.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">{tier.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold" style={{ color: tier.color }}>{tier.count}</span>
                      <span className="text-[10px] text-text-secondary">organisations</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs mb-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-3.5 h-3.5 text-text-secondary mt-0.5 shrink-0" />
                    <div>
                      <span className="text-text-secondary">Commitment: </span>
                      <span className="text-text-primary">{tier.commitment}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-text-secondary mt-0.5 shrink-0" />
                    <div>
                      <span className="text-text-secondary">Duration: </span>
                      <span className="text-text-primary">{tier.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <p className="text-text-secondary leading-relaxed">
                      <span className="text-primary font-medium">Ideal for: </span>
                      {tier.idealFor}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-3">
                  <h4 className="text-[10px] text-text-secondary uppercase tracking-wide mb-2">Included Access</h4>
                  <div className="space-y-1.5">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: tier.color }} />
                        <span className="text-xs text-text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Tier Conversions */}
      <div className="bg-surface border border-border rounded-lg p-5">
        <h3 className="text-sm font-semibold text-text-primary mb-4">Recent Tier Conversions</h3>
        <div className="space-y-3">
          {recentConversions.map((conv, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
              <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-text-primary">{conv.org}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border" style={{ color: conv.guildColor, borderColor: `${conv.guildColor}30`, backgroundColor: `${conv.guildColor}10` }}>
                    {conv.guild}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-xs text-text-secondary">{conv.from}</span>
                  <ChevronRight className="w-3 h-3 text-text-secondary" />
                  <span className="text-xs text-green-400 font-medium">{conv.to}</span>
                </div>
              </div>
              <span className="text-[10px] text-text-secondary shrink-0">{conv.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Messaging Quote */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Quote className="w-8 h-8 text-primary shrink-0 mt-1" />
          <div>
            <p className="text-sm text-text-primary italic leading-relaxed">
              &ldquo;IDEAS is not a co-working space or an accelerator. It is an innovation operating system
              where every organisation — from a two-person startup to a listed conglomerate — finds the
              right level of engagement, the right data, and the right partners to build solutions that matter.&rdquo;
            </p>
            <p className="text-xs text-text-secondary mt-3">— IDEAS Engagement Architecture Manifesto</p>
          </div>
        </div>
      </div>
    </div>
  )
}
