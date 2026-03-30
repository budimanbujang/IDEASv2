'use client'

import React, { useState, useEffect } from 'react'
import {
  Globe2, Users, ArrowRightLeft, GraduationCap, Handshake,
  Radio, ChevronRight, Quote, ExternalLink
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Partner = {
  id: string
  name: string
  country: string
  flag: string
  lat: number
  lng: number
  status: 'active' | 'negotiating' | 'planned'
  rationale: string
  reciprocalAccess: boolean
  exchangeResidencies: boolean
  jointProgrammes: string[]
}

const partners: Partner[] = [
  {
    id: 'jtc-one-north',
    name: 'JTC one-north',
    country: 'Singapore',
    flag: '\u{1F1F8}\u{1F1EC}',
    lat: 1.3,
    lng: 103.8,
    status: 'active',
    rationale: 'Southeast Asia\'s premier science and tech hub offering direct access to deep-tech talent, MNCs, and regional capital networks.',
    reciprocalAccess: true,
    exchangeResidencies: true,
    jointProgrammes: ['Joint AI Accelerator', 'Cross-border Sandbox', 'Talent Exchange'],
  },
  {
    id: 'biopolis',
    name: 'Biopolis / Fusionopolis',
    country: 'Singapore',
    flag: '\u{1F1F8}\u{1F1EC}',
    lat: 1.3,
    lng: 103.8,
    status: 'active',
    rationale: 'World-class biomedical and infocomm research campus enabling life-sciences collaboration with A*STAR institutes.',
    reciprocalAccess: true,
    exchangeResidencies: true,
    jointProgrammes: ['Biomedical Research Exchange', 'Clinical AI Validation'],
  },
  {
    id: 'brainport',
    name: 'Brainport Eindhoven',
    country: 'Netherlands',
    flag: '\u{1F1F3}\u{1F1F1}',
    lat: 51.4,
    lng: 5.5,
    status: 'active',
    rationale: 'Europe\'s leading high-tech ecosystem anchored by ASML, Philips, and NXP — a model for triple-helix innovation governance.',
    reciprocalAccess: true,
    exchangeResidencies: true,
    jointProgrammes: ['Semiconductor R&D Exchange', 'Smart Mobility Pilot'],
  },
  {
    id: 'pangyo',
    name: 'Pangyo Techno Valley',
    country: 'South Korea',
    flag: '\u{1F1F0}\u{1F1F7}',
    lat: 37.4,
    lng: 127.0,
    status: 'active',
    rationale: 'Korea\'s Silicon Valley with 1,600+ tech firms, deep in gaming, AI, and robotics — gateway to North Asian markets.',
    reciprocalAccess: true,
    exchangeResidencies: true,
    jointProgrammes: ['K-Startup Exchange', 'Robotics Sprint'],
  },
  {
    id: 'zhangjiang',
    name: 'Zhangjiang Hi-Tech Park',
    country: 'China',
    flag: '\u{1F1E8}\u{1F1F3}',
    lat: 31.2,
    lng: 121.6,
    status: 'negotiating',
    rationale: 'Shanghai\'s integrated circuit and biopharma epicentre with 300,000+ R&D professionals and massive scale-up infrastructure.',
    reciprocalAccess: false,
    exchangeResidencies: true,
    jointProgrammes: ['Semiconductor Supply Chain Forum'],
  },
  {
    id: 'station-f',
    name: 'Station F / Paris-Saclay',
    country: 'France',
    flag: '\u{1F1EB}\u{1F1F7}',
    lat: 48.9,
    lng: 2.3,
    status: 'negotiating',
    rationale: 'Europe\'s largest startup campus and France\'s leading research cluster — access to EU Horizon programmes and deep-tech capital.',
    reciprocalAccess: false,
    exchangeResidencies: true,
    jointProgrammes: ['EU-ASEAN Climate Tech Bridge'],
  },
  {
    id: 'fraunhofer',
    name: 'Fraunhofer Network',
    country: 'Germany',
    flag: '\u{1F1E9}\u{1F1EA}',
    lat: 48.1,
    lng: 11.6,
    status: 'planned',
    rationale: 'World\'s leading applied research organisation with 76 institutes — unmatched in translating science to industrial application.',
    reciprocalAccess: false,
    exchangeResidencies: false,
    jointProgrammes: ['Industry 4.0 Knowledge Transfer'],
  },
]

const statusConfig = {
  active: { label: 'Active', color: '#22C55E', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  negotiating: { label: 'Negotiating', color: '#F59E0B', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  planned: { label: 'Planned', color: '#94A3B8', bg: 'bg-gray-500/10', border: 'border-gray-500/30' },
}

const benefits = [
  { icon: ArrowRightLeft, title: 'Reciprocal Discovery Access', description: 'Explore partner capability catalogues and datasets as if they were local IBTEC assets.', color: '#007B7F' },
  { icon: GraduationCap, title: 'Exchange Residencies', description: '3-6 month residency swaps for startups, researchers, and corporate innovators across the network.', color: '#A855F7' },
  { icon: Handshake, title: 'Joint Programming', description: 'Co-designed accelerator cohorts, grand challenges, and innovation sprints with federation partners.', color: '#3B82F6' },
  { icon: Users, title: 'Talent Circulation', description: 'Fast-track visa support and talent exchange pathways between federation nodes.', color: '#F59E0B' },
]

// Map projection: Mercator-like for SVG
function projectLng(lng: number, width: number): number {
  return ((lng + 180) / 360) * width
}

function projectLat(lat: number, height: number): number {
  const latRad = (lat * Math.PI) / 180
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2))
  const yNorm = (1 - mercN / Math.PI) / 2
  return yNorm * height
}

// Simplified continent outlines (SVG paths as rough shapes)
const continentPaths = [
  // Europe
  'M 490,115 L 520,105 545,108 560,115 555,130 545,145 535,150 520,155 505,148 495,140 488,130 Z',
  // Africa
  'M 495,165 L 520,155 540,160 550,180 548,210 540,240 525,255 510,250 495,230 490,200 488,180 Z',
  // Asia
  'M 560,100 L 590,95 630,90 670,95 700,100 720,110 740,120 750,140 745,160 730,170 710,175 690,180 670,185 650,178 630,165 610,155 590,145 575,135 565,125 Z',
  // Southeast Asia / Indonesia
  'M 680,185 L 700,182 720,185 740,190 750,195 745,200 730,205 710,210 695,208 680,200 Z',
  // Australia
  'M 720,230 L 750,225 775,230 785,245 780,260 765,268 745,265 730,255 722,242 Z',
  // North America
  'M 100,80 L 140,70 180,75 220,80 250,95 260,115 255,140 240,155 220,165 200,170 170,175 145,168 120,155 105,140 95,120 98,100 Z',
  // Central America
  'M 195,175 L 210,178 220,185 215,195 205,198 195,192 Z',
  // South America
  'M 210,200 L 230,195 250,200 265,215 270,240 265,270 255,290 240,300 225,295 210,280 205,255 200,230 Z',
  // Japan/Korea
  'M 745,120 L 752,115 758,118 760,128 755,135 748,132 Z',
]

const IBTEC = { lat: 1.5, lng: 101.7 }

function FederationMap() {
  const [animOffset, setAnimOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimOffset((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const W = 900
  const H = 380

  const ibtecX = projectLng(IBTEC.lng, W)
  const ibtecY = projectLat(IBTEC.lat, H)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" style={{ minHeight: 320 }}>
      <defs>
        <radialGradient id="ibtec-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#007B7F" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#007B7F" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="partner-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00A3A8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00A3A8" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-strong">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width={W} height={H} fill="#0A1628" rx="8" />

      {/* Grid lines */}
      {Array.from({ length: 19 }, (_, i) => (
        <line key={`vg-${i}`} x1={(i * W) / 18} y1={0} x2={(i * W) / 18} y2={H} stroke="#1E3A5F" strokeOpacity="0.15" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`hg-${i}`} x1={0} y1={(i * H) / 9} x2={W} y2={(i * H) / 9} stroke="#1E3A5F" strokeOpacity="0.15" strokeWidth="0.5" />
      ))}

      {/* Continent outlines */}
      {continentPaths.map((d, i) => (
        <path key={i} d={d} fill="#1E3A5F" fillOpacity="0.25" stroke="#1E3A5F" strokeOpacity="0.4" strokeWidth="0.8" />
      ))}

      {/* Connection lines from IBTEC to partners */}
      {partners.map((p) => {
        const px = projectLng(p.lng, W)
        const py = projectLat(p.lat, H)
        const lineColor = p.status === 'active' ? '#007B7F' : p.status === 'negotiating' ? '#F59E0B' : '#94A3B8'
        const dashArray = p.status === 'active' ? '6,3' : '3,6'
        return (
          <line
            key={`line-${p.id}`}
            x1={ibtecX}
            y1={ibtecY}
            x2={px}
            y2={py}
            stroke={lineColor}
            strokeWidth="1.2"
            strokeOpacity="0.6"
            strokeDasharray={dashArray}
            strokeDashoffset={-animOffset}
            filter="url(#glow)"
          />
        )
      })}

      {/* Partner dots and labels */}
      {partners.map((p) => {
        const px = projectLng(p.lng, W)
        const py = projectLat(p.lat, H)
        const dotColor = p.status === 'active' ? '#00A3A8' : p.status === 'negotiating' ? '#F59E0B' : '#94A3B8'
        // Offset labels to avoid overlap for Singapore partners
        const labelOffset = p.id === 'biopolis' ? 14 : 0
        return (
          <g key={`dot-${p.id}`}>
            <circle cx={px} cy={py} r="16" fill={dotColor} fillOpacity="0.1" />
            <circle cx={px} cy={py} r="4" fill={dotColor} filter="url(#glow)" />
            <circle cx={px} cy={py} r="2" fill="#fff" fillOpacity="0.8" />
            <text
              x={px}
              y={py - 10 - labelOffset}
              textAnchor="middle"
              fill="#F1F5F9"
              fontSize="7"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              {p.name}
            </text>
          </g>
        )
      })}

      {/* IBTEC centre dot */}
      <circle cx={ibtecX} cy={ibtecY} r="30" fill="url(#ibtec-glow)" />
      <circle cx={ibtecX} cy={ibtecY} r="7" fill="#007B7F" filter="url(#glow-strong)" />
      <circle cx={ibtecX} cy={ibtecY} r="3.5" fill="#fff" />
      <text
        x={ibtecX}
        y={ibtecY + 18}
        textAnchor="middle"
        fill="#007B7F"
        fontSize="9"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
      >
        IBTEC
      </text>
      <text
        x={ibtecX}
        y={ibtecY + 27}
        textAnchor="middle"
        fill="#94A3B8"
        fontSize="6"
        fontFamily="Inter, sans-serif"
      >
        Johor, Malaysia
      </text>
    </svg>
  )
}

export default function FederationPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Globe2 className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Federation Network</h1>
        </div>
        <p className="text-text-secondary text-sm">
          7 partners across 5 countries &mdash; building the world&apos;s first federated technopolis network.
        </p>
      </div>

      {/* World Map */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-medium text-text-primary">Live Federation Map</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] text-text-secondary">Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-[10px] text-text-secondary">Negotiating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gray-500" />
              <span className="text-[10px] text-text-secondary">Planned</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <FederationMap />
        </div>
      </div>

      {/* Partner Cards - Horizontal Scroll */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Federation Partners</h2>
        <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {partners.map((partner) => {
            const status = statusConfig[partner.status]
            return (
              <div
                key={partner.id}
                className="min-w-[340px] max-w-[380px] bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all shrink-0 group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="h-1" style={{ backgroundColor: status.color }} />
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{partner.flag}</span>
                        <h3 className="text-sm font-semibold text-text-primary">{partner.name}</h3>
                      </div>
                      <span className="text-[10px] text-text-secondary">{partner.country}</span>
                    </div>
                    <span
                      className={cn('text-[10px] font-medium px-2 py-0.5 rounded-full border', status.bg, status.border)}
                      style={{ color: status.color }}
                    >
                      {status.label}
                    </span>
                  </div>

                  {/* Rationale */}
                  <p className="text-[11px] text-text-secondary leading-relaxed mb-4">
                    {partner.rationale}
                  </p>

                  {/* Agreement Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className={partner.reciprocalAccess ? 'text-green-500' : 'text-gray-500'}>
                        {partner.reciprocalAccess ? '\u2713' : '\u2717'}
                      </span>
                      <span className="text-text-secondary">Reciprocal Access</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className={partner.exchangeResidencies ? 'text-green-500' : 'text-gray-500'}>
                        {partner.exchangeResidencies ? '\u2713' : '\u2717'}
                      </span>
                      <span className="text-text-secondary">Exchange Residencies</span>
                    </div>
                  </div>

                  {/* Joint Programmes */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {partner.jointProgrammes.map((prog) => (
                      <span key={prog} className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {prog}
                      </span>
                    ))}
                  </div>

                  {/* View Details */}
                  <button className="flex items-center gap-1 text-[11px] text-primary font-medium hover:underline group-hover:gap-2 transition-all">
                    View Details <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Federation Benefits */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">Federation Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="bg-surface border border-border rounded-lg p-5 hover:border-primary/40 transition-all">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: benefit.color }} />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">{benefit.title}</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Key Quote */}
      <div className="bg-surface border border-primary/20 rounded-lg p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light" />
        <Quote className="w-8 h-8 text-primary/30 mb-3" />
        <blockquote className="text-lg font-medium text-text-primary leading-relaxed mb-2">
          &ldquo;Federation is the single most powerful marketability lever IDEAS provides.&rdquo;
        </blockquote>
        <p className="text-xs text-text-secondary">
          IDEAS Strategic Framework &mdash; transforming IBTEC from a local technopolis into a globally networked innovation platform.
        </p>
      </div>
    </div>
  )
}
