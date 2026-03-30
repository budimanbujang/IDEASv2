'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Server, ArrowLeft, ChevronRight, Globe2, Cpu, BarChart3,
  Settings, Network, ShoppingBag, CheckCircle2, Clock, TrendingUp,
  Building2, DollarSign, Layers, Play, Lock
} from 'lucide-react'
import { cn } from '@/lib/utils'

const platformComponents = [
  {
    id: 'discovery',
    name: 'Discovery Engine',
    description: 'AI-powered search and matchmaking engine connecting innovators, investors, and ecosystem participants across domains.',
    licenseFee: 'RM2M/year',
    status: 'available',
    icon: Cpu,
    color: '#007B7F',
  },
  {
    id: 'engagement',
    name: 'Engagement Architecture',
    description: 'Guild management, tiered membership, challenge marketplace, and community co-creation platform modules.',
    licenseFee: 'RM1.8M/year',
    status: 'available',
    icon: Network,
    color: '#3B82F6',
  },
  {
    id: 'intelligence',
    name: 'Intelligence Dashboard',
    description: 'Real-time analytics, market intelligence, ecosystem health monitoring, and predictive insights engine.',
    licenseFee: 'RM2.5M/year',
    status: 'available',
    icon: BarChart3,
    color: '#A855F7',
  },
  {
    id: 'operations',
    name: 'Operations Framework',
    description: 'Smart city command centre, IoT orchestration, digital twin integration, and autonomous systems management.',
    licenseFee: 'RM3M/year',
    status: 'available',
    icon: Settings,
    color: '#06B6D4',
  },
  {
    id: 'federation',
    name: 'Federation Protocol',
    description: 'Cross-district data federation, interoperability layer, and distributed governance framework.',
    licenseFee: 'RM1.5M/year',
    status: 'beta',
    icon: Globe2,
    color: '#22C55E',
  },
  {
    id: 'marketplace-engine',
    name: 'Data Marketplace Engine',
    description: 'White-label data marketplace with subscription management, differential privacy, and revenue sharing.',
    licenseFee: 'RM2.2M/year',
    status: 'available',
    icon: ShoppingBag,
    color: '#D4A847',
  },
]

const activeLicences = [
  {
    id: 'dubai',
    name: 'Dubai Smart City Initiative',
    partner: 'Dubai Future Foundation',
    revenue: 'RM12M/year',
    components: ['Discovery Engine', 'Intelligence Dashboard', 'Operations Framework', 'Federation Protocol'],
    startDate: 'Jan 2025',
    status: 'active',
    logo: '🇦🇪',
  },
  {
    id: 'bandung',
    name: 'Bandung Tech Hub',
    partner: 'Bandung Municipal Government',
    revenue: 'RM5M/year',
    components: ['Discovery Engine', 'Engagement Architecture', 'Data Marketplace Engine'],
    startDate: 'Mar 2025',
    status: 'active',
    logo: '🇮🇩',
  },
]

const revenueProjections = [
  { year: 'Y1', value: 17, label: 'RM17M' },
  { year: 'Y2', value: 35, label: 'RM35M' },
  { year: 'Y3', value: 62, label: 'RM62M' },
  { year: 'Y4', value: 95, label: 'RM95M' },
  { year: 'Y5', value: 140, label: 'RM140M' },
]

const maxProjection = 160

export default function IaaPPage() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link href="/monetisation" className="text-text-secondary hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-xs text-text-secondary">Monetisation Layer</span>
          </div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Server className="w-5 h-5 text-blue-400" />
            </div>
            IBTEC-as-a-Platform (IaaP)
          </h1>
          <p className="text-text-secondary text-sm mt-1">White-label platform licensing for global innovation districts</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface border border-border rounded-lg px-4 py-2 text-center">
            <div className="text-xs text-text-secondary">Annual Licensing Revenue</div>
            <div className="text-lg font-bold text-blue-400">RM17M</div>
          </div>
          <div className="bg-surface border border-border rounded-lg px-4 py-2 text-center">
            <div className="text-xs text-text-secondary">Active Licences</div>
            <div className="text-lg font-bold text-text-primary">2</div>
          </div>
        </div>
      </div>

      {/* Licensable Components Catalogue */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-400" />
          Licensable Platform Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {platformComponents.map((comp) => (
            <div
              key={comp.id}
              onClick={() => setSelectedComponent(selectedComponent === comp.id ? null : comp.id)}
              className={cn(
                'bg-surface border rounded-lg p-5 cursor-pointer transition-all relative overflow-hidden group',
                selectedComponent === comp.id ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border hover:border-primary/30'
              )}
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: comp.color }} />
              <div className="flex items-start gap-3 mb-3 mt-1">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${comp.color}15` }}>
                  <comp.icon className="w-5 h-5" style={{ color: comp.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">{comp.name}</h3>
                    <span className={cn(
                      'text-[10px] px-1.5 py-0.5 rounded-full font-medium',
                      comp.status === 'available' ? 'bg-green-500/15 text-green-400' : 'bg-amber-500/15 text-amber-400'
                    )}>
                      {comp.status === 'available' ? 'Available' : 'Beta'}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-secondary mb-3 line-clamp-2">{comp.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-accent-gold" />
                  <span className="text-sm font-bold text-text-primary">{comp.licenseFee}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Licences */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-400" />
          Active Licence Agreements
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {activeLicences.map((licence) => (
            <div key={licence.id} className="bg-surface border border-border rounded-lg p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
              <div className="flex items-start justify-between mb-4 mt-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{licence.logo}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{licence.name}</h3>
                    <p className="text-xs text-text-secondary">{licence.partner}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
                  <span className="text-xs text-green-400 font-medium">Active</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-background rounded-lg px-3 py-2 text-center">
                  <div className="text-lg font-bold text-accent-gold">{licence.revenue}</div>
                  <div className="text-[10px] text-text-secondary">Annual Revenue</div>
                </div>
                <div className="bg-background rounded-lg px-3 py-2 text-center">
                  <div className="text-lg font-bold text-text-primary">{licence.components.length}</div>
                  <div className="text-[10px] text-text-secondary">Components</div>
                </div>
                <div className="bg-background rounded-lg px-3 py-2 text-center">
                  <div className="text-sm font-bold text-text-primary">{licence.startDate}</div>
                  <div className="text-[10px] text-text-secondary">Start Date</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {licence.components.map((comp) => (
                  <span key={comp} className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Projections */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-400" />
          IaaP Revenue Projections (5-Year)
        </h2>
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="flex items-end gap-4" style={{ height: '220px' }}>
            {revenueProjections.map((item) => {
              const heightPct = (item.value / maxProjection) * 100
              return (
                <div key={item.year} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                  <span className="text-xs font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">{item.label}</span>
                  <div
                    className="w-full rounded-t-lg transition-all duration-300 group-hover:opacity-90 relative"
                    style={{
                      height: `${heightPct}%`,
                      background: 'linear-gradient(to top, #3B82F630, #3B82F6)',
                    }}
                  >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                  <span className="text-xs text-text-secondary mt-1 font-medium">{item.year}</span>
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
            <span className="text-xs text-text-secondary">Current ARR: <strong className="text-text-primary">RM17M</strong></span>
            <span className="text-xs text-text-secondary">CAGR: <strong className="text-green-400">52%</strong></span>
            <span className="text-xs text-text-secondary">Year 5 Target: <strong className="text-blue-400">RM140M</strong></span>
          </div>
        </div>
      </div>

      {/* White-Label Configurator */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <Settings className="w-4 h-4 text-blue-400" />
          White-Label Configurator
        </h2>
        <div className="bg-surface border border-border rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-primary" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 bg-blue-500" style={{ filter: 'blur(60px)' }} />
          <div className="flex items-center gap-2 mb-4 mt-1">
            <Lock className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Demo Mode</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Configure Your Platform Instance</h3>
              <p className="text-sm text-text-secondary mb-4">
                The White-Label Configurator allows licensees to customise their IBTEC platform instance with their own branding,
                select specific modules, configure data governance policies, and set up federation connections with other innovation districts.
              </p>
              <div className="space-y-2">
                {[
                  'Custom branding and domain configuration',
                  'Module selection and feature toggles',
                  'Data governance policy templates',
                  'Federation endpoint configuration',
                  'Localisation and language settings',
                  'SLA tier selection and monitoring setup',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border">
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Configuration Preview</div>
              <div className="space-y-3">
                {[
                  { label: 'Platform Name', value: 'Your Innovation Hub', muted: true },
                  { label: 'Selected Modules', value: '6 of 6 available', muted: false },
                  { label: 'Data Residency', value: 'Configure region...', muted: true },
                  { label: 'Federation', value: 'Enable cross-district...', muted: true },
                  { label: 'Estimated License', value: 'RM8M-15M/year', muted: false },
                ].map((field) => (
                  <div key={field.label} className="flex items-center justify-between p-2.5 rounded-lg bg-surface border border-border">
                    <span className="text-xs text-text-secondary">{field.label}</span>
                    <span className={cn('text-xs font-medium', field.muted ? 'text-text-secondary/60 italic' : 'text-text-primary')}>{field.value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 px-4 py-2.5 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Request Full Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
