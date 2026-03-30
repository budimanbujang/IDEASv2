'use client'

import React, { useState } from 'react'
import {
  Search, Filter, FlaskConical, Database, Factory, TestTube,
  Box, Wifi, Radio, Microscope, Leaf, Building2, Cpu, Cloud,
  Beaker, Stethoscope, Zap, BarChart3, Sparkles, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Capability = {
  id: string
  name: string
  type: string
  typeIcon: string
  tenant: string
  availability: 'available' | 'limited' | 'reserved'
  trl: number
  domains: string[]
  description: string
}

const typeIcons: Record<string, React.ElementType> = {
  Lab: FlaskConical,
  Dataset: Database,
  Manufacturing: Factory,
  Testing: TestTube,
  Sandbox: Box,
  '5G Slice': Wifi,
  'IoT Access': Radio,
  Infrastructure: Building2,
  Platform: Cpu,
  Registry: Cloud,
  Pipeline: Beaker,
  Equipment: Microscope,
}

const typeColors: Record<string, string> = {
  Lab: '#E11D48',
  Dataset: '#22C55E',
  Manufacturing: '#F59E0B',
  Testing: '#6366F1',
  Sandbox: '#A855F7',
  '5G Slice': '#06B6D4',
  'IoT Access': '#14B8A6',
  Infrastructure: '#3B82F6',
  Platform: '#EC4899',
  Registry: '#D4A847',
  Pipeline: '#F97316',
  Equipment: '#8B5CF6',
}

const availabilityConfig = {
  available: { label: 'Available', color: '#22C55E', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  limited: { label: 'Limited', color: '#F59E0B', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  reserved: { label: 'Reserved', color: '#6B7280', bg: 'bg-gray-500/10', border: 'border-gray-500/30' },
}

const capabilities: Capability[] = [
  {
    id: 'gmp-manufacturing',
    name: 'GMP Manufacturing Bay',
    type: 'Manufacturing',
    typeIcon: 'Manufacturing',
    tenant: 'KPJ Healthcare',
    availability: 'limited',
    trl: 8,
    domains: ['Healthcare', 'Life Sciences'],
    description: 'ISO 14644-1 Class 7 cleanroom manufacturing facility for pharmaceutical and medical device production with full GMP compliance.',
  },
  {
    id: 'tropical-crop-dataset',
    name: 'Tropical Crop Dataset',
    type: 'Dataset',
    typeIcon: 'Dataset',
    tenant: 'JPG / Kulim',
    availability: 'available',
    trl: 7,
    domains: ['Agrifood', 'AI'],
    description: '890K records spanning oil palm, rubber, and tropical fruits with satellite imagery, soil composition, and yield prediction labels.',
  },
  {
    id: 'semiconductor-cleanroom',
    name: 'Semiconductor Cleanroom',
    type: 'Lab',
    typeIcon: 'Lab',
    tenant: 'IBTEC Core',
    availability: 'limited',
    trl: 9,
    domains: ['Semiconductor', 'Manufacturing'],
    description: 'ISO Class 5 cleanroom with lithography, etching, and deposition equipment for wafer-level prototyping and small-batch production.',
  },
  {
    id: 'clinical-trial-infra',
    name: 'Clinical Trial Infrastructure',
    type: 'Infrastructure',
    typeIcon: 'Infrastructure',
    tenant: 'KPJ Healthcare',
    availability: 'available',
    trl: 8,
    domains: ['Healthcare', 'Life Sciences'],
    description: 'End-to-end clinical trial management with diverse patient cohorts, tropical disease prevalence data, and regulatory fast-track support.',
  },
  {
    id: 'biobank',
    name: 'Biobank (120K Samples)',
    type: 'Lab',
    typeIcon: 'Lab',
    tenant: 'KPJ Healthcare',
    availability: 'limited',
    trl: 7,
    domains: ['Life Sciences', 'Healthcare'],
    description: 'Southeast Asian biobank with 120,000+ tissue, blood, and DNA samples representing diverse tropical populations for genomic research.',
  },
  {
    id: 'smart-building-iot',
    name: 'Smart Building IoT Testbed',
    type: 'IoT Access',
    typeIcon: 'IoT Access',
    tenant: 'JLand Group',
    availability: 'available',
    trl: 6,
    domains: ['Proptech', 'IoT'],
    description: '2,400 sensors across 3 smart buildings monitoring energy, occupancy, air quality, and structural health in real tropical conditions.',
  },
  {
    id: '5g-urllc-slice',
    name: '5G URLLC Slice',
    type: '5G Slice',
    typeIcon: '5G Slice',
    tenant: 'IBTEC Core',
    availability: 'available',
    trl: 8,
    domains: ['Digital Infrastructure', 'IoT'],
    description: 'Ultra-Reliable Low-Latency Communications 5G network slice with <1ms latency for autonomous vehicle and industrial automation testing.',
  },
  {
    id: 'halal-cert-lab',
    name: 'Halal Certification Lab',
    type: 'Lab',
    typeIcon: 'Lab',
    tenant: 'Food Services Guild',
    availability: 'available',
    trl: 9,
    domains: ['Food Services', 'Manufacturing'],
    description: 'JAKIM-accredited halal testing and certification laboratory with DNA analysis, chemical testing, and full supply chain audit capability.',
  },
  {
    id: 'drug-discovery-pipeline',
    name: 'Drug Discovery Pipeline',
    type: 'Pipeline',
    typeIcon: 'Pipeline',
    tenant: 'Life Sciences Guild',
    availability: 'reserved',
    trl: 5,
    domains: ['Life Sciences', 'AI'],
    description: 'AI-augmented drug discovery platform with molecular simulation, ADMET prediction, and tropical disease compound library of 50K+ molecules.',
  },
  {
    id: 'plantation-analytics',
    name: 'Plantation Analytics Platform',
    type: 'Platform',
    typeIcon: 'Platform',
    tenant: 'JPG / Kulim',
    availability: 'available',
    trl: 7,
    domains: ['Agrifood', 'AI'],
    description: 'Real-time analytics platform processing satellite, drone, and ground sensor data across 200,000+ hectares of plantation land.',
  },
  {
    id: 'ai-radiology',
    name: 'AI Radiology Models',
    type: 'Platform',
    typeIcon: 'Platform',
    tenant: 'KPJ Healthcare',
    availability: 'limited',
    trl: 6,
    domains: ['Healthcare', 'AI'],
    description: '14 pre-trained radiology AI models validated on Southeast Asian patient data for chest X-ray, mammography, and CT scan interpretation.',
  },
  {
    id: 'wafer-testing',
    name: 'Wafer Testing Equipment',
    type: 'Equipment',
    typeIcon: 'Equipment',
    tenant: 'Semiconductor Guild',
    availability: 'available',
    trl: 9,
    domains: ['Semiconductor', 'Testing'],
    description: 'Automated wafer probing and parametric testing with capability for 300mm wafers, including thermal and reliability stress testing.',
  },
  {
    id: 'environmental-sensors',
    name: 'Environmental Sensor Network',
    type: 'IoT Access',
    typeIcon: 'IoT Access',
    tenant: 'IBTEC Core',
    availability: 'available',
    trl: 8,
    domains: ['Sustainability', 'IoT'],
    description: '850 environmental sensors monitoring air quality, water quality, noise levels, and microclimate data across the IBTEC campus.',
  },
  {
    id: 'carbon-credits',
    name: 'Carbon Credits Registry',
    type: 'Registry',
    typeIcon: 'Registry',
    tenant: 'Cross-Vertical',
    availability: 'available',
    trl: 6,
    domains: ['Sustainability', 'Finance'],
    description: 'Blockchain-anchored carbon credit registry with MRV (Measurement, Reporting, Verification) integration for voluntary carbon markets.',
  },
  {
    id: 'workforce-skills',
    name: 'Workforce Skills Database',
    type: 'Dataset',
    typeIcon: 'Dataset',
    tenant: 'IBTEC Core',
    availability: 'available',
    trl: 7,
    domains: ['Talent', 'AI'],
    description: 'Anonymised skills taxonomy and workforce capability dataset covering 15,000+ professionals across IBTEC ecosystem organisations.',
  },
]

const typeFilters = ['All', 'Lab', 'Dataset', 'Manufacturing', 'Testing', 'Sandbox', '5G Slice', 'IoT Access', 'Infrastructure', 'Platform', 'Pipeline', 'Registry', 'Equipment']
const domainFilters = ['All Domains', 'Healthcare', 'Life Sciences', 'Agrifood', 'Semiconductor', 'Proptech', 'Food Services', 'AI', 'IoT', 'Sustainability']
const availabilityFilters = ['Any', 'Available', 'Limited', 'Reserved']

function TRLBadge({ level }: { level: number }) {
  const color = level >= 7 ? '#22C55E' : level >= 4 ? '#F59E0B' : '#3B82F6'
  return (
    <span
      className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded"
      style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
    >
      TRL {level}
    </span>
  )
}

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedDomain, setSelectedDomain] = useState('All Domains')
  const [selectedAvailability, setSelectedAvailability] = useState('Any')

  const filtered = capabilities.filter((cap) => {
    if (searchQuery && !cap.name.toLowerCase().includes(searchQuery.toLowerCase()) && !cap.description.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedType !== 'All' && cap.type !== selectedType) return false
    if (selectedDomain !== 'All Domains' && !cap.domains.includes(selectedDomain)) return false
    if (selectedAvailability !== 'Any' && cap.availability !== selectedAvailability.toLowerCase()) return false
    return true
  })

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Search className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Discovery Engine &mdash; Capability Catalogue</h1>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          Search, filter, and explore the full catalogue of capabilities available across the IBTEC ecosystem.
          From labs and datasets to manufacturing bays and 5G slices.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
        <input
          type="text"
          placeholder="Search IBTEC capabilities globally..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-4 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] text-primary font-medium">AI-powered</span>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="space-y-3">
        {/* Type Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-3.5 h-3.5 text-text-secondary shrink-0" />
          <span className="text-[10px] text-text-secondary uppercase tracking-wider shrink-0">Type:</span>
          {typeFilters.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={cn(
                'text-[11px] px-2.5 py-1 rounded-full border transition-all',
                selectedType === type
                  ? 'bg-primary/15 text-primary border-primary/30'
                  : 'bg-surface text-text-secondary border-border hover:border-primary/30 hover:text-text-primary'
              )}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Domain Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] text-text-secondary uppercase tracking-wider shrink-0 ml-5">Domain:</span>
          {domainFilters.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={cn(
                'text-[11px] px-2.5 py-1 rounded-full border transition-all',
                selectedDomain === domain
                  ? 'bg-primary/15 text-primary border-primary/30'
                  : 'bg-surface text-text-secondary border-border hover:border-primary/30 hover:text-text-primary'
              )}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Availability Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] text-text-secondary uppercase tracking-wider shrink-0 ml-5">Availability:</span>
          {availabilityFilters.map((avail) => (
            <button
              key={avail}
              onClick={() => setSelectedAvailability(avail)}
              className={cn(
                'text-[11px] px-2.5 py-1 rounded-full border transition-all',
                selectedAvailability === avail
                  ? 'bg-primary/15 text-primary border-primary/30'
                  : 'bg-surface text-text-secondary border-border hover:border-primary/30 hover:text-text-primary'
              )}
            >
              {avail}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-secondary">{filtered.length} capabilities found</span>
      </div>

      {/* Capability Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((cap) => {
          const TypeIcon = typeIcons[cap.typeIcon] || Database
          const typeColor = typeColors[cap.type] || '#007B7F'
          const avail = availabilityConfig[cap.availability]

          return (
            <div
              key={cap.id}
              className="group bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className="h-1" style={{ backgroundColor: typeColor }} />
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${typeColor}15` }}
                    >
                      <TypeIcon className="w-4.5 h-4.5" style={{ color: typeColor }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors leading-tight">
                        {cap.name}
                      </h3>
                      <span className="text-[10px] text-text-secondary">{cap.tenant}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors mt-1 shrink-0" />
                </div>

                {/* Badges row */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {/* Type badge */}
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                    style={{ color: typeColor, borderColor: `${typeColor}30`, backgroundColor: `${typeColor}10` }}
                  >
                    {cap.type}
                  </span>

                  {/* Availability */}
                  <span className={cn('text-[10px] font-medium px-2 py-0.5 rounded-full border', avail.bg, avail.border)} style={{ color: avail.color }}>
                    {avail.label}
                  </span>

                  {/* TRL */}
                  <TRLBadge level={cap.trl} />
                </div>

                {/* Description */}
                <p className="text-[11px] text-text-secondary leading-relaxed mb-3 line-clamp-2">
                  {cap.description}
                </p>

                {/* Domain Tags */}
                <div className="flex items-center gap-1.5 pt-3 border-t border-border flex-wrap">
                  {cap.domains.map((domain) => (
                    <span key={domain} className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-surface-elevated text-text-secondary border border-border">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
