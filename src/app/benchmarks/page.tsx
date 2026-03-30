'use client'

import React, { useState } from 'react'
import {
  BarChart3, ChevronRight, AlertTriangle, XCircle,
  CheckCircle2, Clock, Info, TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ---- Data ----

const dimensions = [
  'Resources & Environment',
  'Digital Infrastructure',
  'Mobility & Transport',
  'Governance & Policy',
  'Social Cohesion',
  'Experience & Liveability',
  'Innovation Ecosystem',
  'AI-Ops Readiness',
]

// City keys
type CityKey = 'ibtec' | 'singapore' | 'helsinki' | 'neom' | 'barcelona' | 'masdar'

interface CityDef {
  key: CityKey
  name: string
  color: string
  scores: number[]
  default: boolean
}

const cities: CityDef[] = [
  { key: 'ibtec', name: 'IBTEC (Target)', color: '#007B7F', scores: [72, 85, 65, 70, 68, 75, 80, 78], default: true },
  { key: 'singapore', name: 'Singapore (Punggol)', color: '#3B82F6', scores: [90, 95, 85, 88, 82, 80, 92, 75], default: true },
  { key: 'helsinki', name: 'Helsinki', color: '#22C55E', scores: [85, 88, 80, 92, 90, 85, 70, 65], default: true },
  { key: 'neom', name: 'NEOM', color: '#F59E0B', scores: [60, 70, 50, 55, 30, 40, 65, 60], default: false },
  { key: 'barcelona', name: 'Barcelona', color: '#EC4899', scores: [80, 82, 78, 85, 88, 90, 72, 55], default: false },
  { key: 'masdar', name: 'Masdar City', color: '#A855F7', scores: [92, 75, 60, 70, 45, 55, 60, 50], default: false },
]

interface BenchmarkCity {
  name: string
  flag: string
  status: 'success' | 'in-progress' | 'partial' | 'failed' | 'underperformed'
  tagline: string
  detail: string
}

const benchmarkCities: BenchmarkCity[] = [
  { name: 'Singapore (Punggol)', flag: '\u{1F1F8}\u{1F1EC}', status: 'success', tagline: 'Digital infrastructure gold standard', detail: '100% fibre, digital twin deployment, integrated smart grid. Benchmark for digital-first district planning.' },
  { name: 'NEOM', flag: '\u{1F1F8}\u{1F1E6}', status: 'in-progress', tagline: 'Ambition and scale; cautionary on execution', detail: '$500B megaproject. Pioneering vision but schedule slippage, workforce challenges, and governance opacity raise execution risk.' },
  { name: 'Woven City', flag: '\u{1F1EF}\u{1F1F5}', status: 'in-progress', tagline: 'Corporate-led innovation lab', detail: 'Toyota-backed 175-acre living laboratory at the base of Mt. Fuji. Hydrogen-powered, autonomous-first but limited public access.' },
  { name: 'Helsinki', flag: '\u{1F1EB}\u{1F1EE}', status: 'success', tagline: 'Digital twin + citizen engagement', detail: 'Kalasatama district: 3D city model, participatory budgeting, open data API with 1,200+ datasets. Gold standard for governance.' },
  { name: 'Masdar City', flag: '\u{1F1E6}\u{1F1EA}', status: 'partial', tagline: 'Sustainability-first; struggled with occupancy', detail: 'Zero-carbon ambition, 50% renewable. But only 2,000 residents vs 40,000 target after 15 years. Economic model never materialised.' },
  { name: 'TAMM 4.0', flag: '\u{1F1E6}\u{1F1EA}', status: 'success', tagline: 'AutoGov model for autonomous services', detail: 'Abu Dhabi\'s proactive government platform: 700+ services, 95% digital adoption, predictive service delivery without citizen requests.' },
  { name: 'Barcelona', flag: '\u{1F1EA}\u{1F1F8}', status: 'success', tagline: 'Sensor-driven urban management', detail: '19,500 IoT sensors, Sentilo platform, open-source city OS. European leader in data-driven urban management.' },
  { name: 'Songdo', flag: '\u{1F1F0}\u{1F1F7}', status: 'partial', tagline: 'Connectivity pioneer; weak community', detail: 'Ubiquitous connectivity from 2003. Technically advanced but sterile urban environment — 70% occupancy after 20 years.' },
  { name: 'Sidewalk Labs', flag: '\u{1F1E8}\u{1F1E6}', status: 'failed', tagline: 'Governance & privacy failures', detail: 'Google/Alphabet Toronto project cancelled 2020. $50M invested. Failed on data governance, indigenous consultation, and public trust.' },
  { name: 'Putrajaya', flag: '\u{1F1F2}\u{1F1FE}', status: 'underperformed', tagline: 'Admin capital without innovation density', detail: 'Malaysia\'s administrative capital since 1999. Smart infrastructure but government-centric, no startup ecosystem, limited private investment.' },
]

const statusConfig: Record<string, { label: string; color: string; bg: string; border: string; Icon: React.ElementType }> = {
  success: { label: 'Success', color: '#22C55E', bg: 'bg-green-500/10', border: 'border-green-500/30', Icon: CheckCircle2 },
  'in-progress': { label: 'In Progress', color: '#3B82F6', bg: 'bg-blue-500/10', border: 'border-blue-500/30', Icon: Clock },
  partial: { label: 'Partial', color: '#F59E0B', bg: 'bg-amber-500/10', border: 'border-amber-500/30', Icon: Info },
  failed: { label: 'Failed', color: '#EF4444', bg: 'bg-red-500/10', border: 'border-red-500/40', Icon: XCircle },
  underperformed: { label: 'Underperformed', color: '#F97316', bg: 'bg-orange-500/10', border: 'border-orange-500/40', Icon: AlertTriangle },
}

// ---- Radar Chart SVG ----

function RadarChart({ activeCities }: { activeCities: CityKey[] }) {
  const cx = 250
  const cy = 250
  const maxR = 200
  const n = dimensions.length
  const angleStep = (2 * Math.PI) / n

  function pointOnAxis(axis: number, value: number) {
    const angle = axis * angleStep - Math.PI / 2
    const r = (value / 100) * maxR
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  }

  function polygon(scores: number[]) {
    return scores.map((s, i) => {
      const p = pointOnAxis(i, s)
      return `${p.x},${p.y}`
    }).join(' ')
  }

  const rings = [25, 50, 75, 100]

  return (
    <svg viewBox="0 0 500 500" className="w-full h-auto" style={{ maxWidth: 560 }}>
      {/* Background */}
      <rect width={500} height={500} fill="#0A1628" rx="8" />

      {/* Concentric rings */}
      {rings.map((pct) => {
        const r = (pct / 100) * maxR
        const pts = Array.from({ length: n }, (_, i) => {
          const angle = i * angleStep - Math.PI / 2
          return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
        }).join(' ')
        return (
          <polygon
            key={pct}
            points={pts}
            fill="none"
            stroke="#1E3A5F"
            strokeWidth={pct === 100 ? '1' : '0.5'}
            strokeOpacity="0.5"
          />
        )
      })}

      {/* Ring labels */}
      {rings.map((pct) => {
        const r = (pct / 100) * maxR
        return (
          <text
            key={`rl-${pct}`}
            x={cx + 4}
            y={cy - r + 12}
            fill="#94A3B8"
            fontSize="9"
            fontFamily="Inter, sans-serif"
          >
            {pct}
          </text>
        )
      })}

      {/* Axis lines */}
      {dimensions.map((_, i) => {
        const end = pointOnAxis(i, 100)
        return (
          <line
            key={`axis-${i}`}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="#1E3A5F"
            strokeWidth="0.8"
            strokeOpacity="0.6"
          />
        )
      })}

      {/* City polygons */}
      {cities
        .filter((c) => activeCities.includes(c.key))
        .map((c) => (
          <polygon
            key={c.key}
            points={polygon(c.scores)}
            fill={c.color}
            fillOpacity={0.12}
            stroke={c.color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        ))}

      {/* City dots on axes */}
      {cities
        .filter((c) => activeCities.includes(c.key))
        .map((c) =>
          c.scores.map((s, i) => {
            const p = pointOnAxis(i, s)
            return (
              <circle
                key={`${c.key}-${i}`}
                cx={p.x}
                cy={p.y}
                r="3"
                fill={c.color}
                stroke="#0A1628"
                strokeWidth="1"
              />
            )
          })
        )}

      {/* Axis labels */}
      {dimensions.map((label, i) => {
        const p = pointOnAxis(i, 115)
        const anchor = p.x < cx - 20 ? 'end' : p.x > cx + 20 ? 'start' : 'middle'
        return (
          <text
            key={`label-${i}`}
            x={p.x}
            y={p.y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fill="#F1F5F9"
            fontSize="9.5"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
          >
            {label}
          </text>
        )
      })}
    </svg>
  )
}

// ---- Page Component ----

export default function BenchmarksPage() {
  const [activeCities, setActiveCities] = useState<CityKey[]>(
    cities.filter((c) => c.default).map((c) => c.key)
  )

  function toggleCity(key: CityKey) {
    setActiveCities((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Global Benchmarks &mdash; IBTEC vs World&apos;s Best</h1>
        </div>
        <p className="text-text-secondary text-sm">
          Comparing IBTEC targets against leading smart city districts across 8 dimensions.
        </p>
      </div>

      {/* Radar Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-surface border border-border rounded-lg p-5">
          <h2 className="text-sm font-semibold text-text-primary mb-4">Smart City Dimension Comparison</h2>
          <RadarChart activeCities={activeCities} />
        </div>

        {/* City Toggles + Legend */}
        <div className="bg-surface border border-border rounded-lg p-5 space-y-4">
          <h2 className="text-sm font-semibold text-text-primary mb-2">Select Cities</h2>
          {cities.map((c) => {
            const active = activeCities.includes(c.key)
            return (
              <button
                key={c.key}
                onClick={() => toggleCity(c.key)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all text-left',
                  active
                    ? 'border-opacity-50 bg-opacity-10'
                    : 'border-border bg-transparent opacity-50 hover:opacity-80'
                )}
                style={{
                  borderColor: active ? c.color : undefined,
                  backgroundColor: active ? `${c.color}10` : undefined,
                }}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: active ? c.color : '#4B5563' }}
                />
                <div>
                  <span className="text-xs font-medium text-text-primary">{c.name}</span>
                  <div className="flex gap-1 mt-0.5 flex-wrap">
                    {c.scores.map((s, i) => (
                      <span key={i} className="text-[9px] text-text-secondary">
                        {dimensions[i].split(' ')[0].slice(0, 3)}:{s}
                        {i < c.scores.length - 1 ? '' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            )
          })}

          {/* Dimension Legend */}
          <div className="pt-3 border-t border-border">
            <h3 className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider mb-2">Dimensions</h3>
            <div className="space-y-1">
              {dimensions.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] text-text-secondary">
                  <span className="text-text-primary font-mono w-4">{i + 1}.</span>
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benchmark City Cards - Horizontal Scroll */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">10 Global Benchmark Districts</h2>
        <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {benchmarkCities.map((city) => {
            const st = statusConfig[city.status]
            const isFailure = city.status === 'failed' || city.status === 'underperformed'
            return (
              <div
                key={city.name}
                className={cn(
                  'min-w-[300px] max-w-[340px] bg-surface rounded-lg overflow-hidden shrink-0 border transition-all hover:border-primary/30',
                  isFailure ? st.border : 'border-border'
                )}
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="h-1" style={{ backgroundColor: st.color }} />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{city.flag}</span>
                      <h3 className="text-sm font-semibold text-text-primary">{city.name}</h3>
                    </div>
                    <span
                      className={cn('text-[10px] font-medium px-2 py-0.5 rounded-full border', st.bg, st.border)}
                      style={{ color: st.color }}
                    >
                      {st.label}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-text-primary mb-2">&ldquo;{city.tagline}&rdquo;</p>
                  <p className="text-[11px] text-text-secondary leading-relaxed">{city.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Failure Callout Cards */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Lessons from Failures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sidewalk Labs */}
          <div className="bg-surface border border-red-500/40 rounded-lg p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-400" />
              <h3 className="text-sm font-semibold text-text-primary">{'\u{1F1E8}\u{1F1E6}'} Sidewalk Labs (Toronto)</h3>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400">Failed</span>
            </div>
            <p className="text-[11px] text-text-secondary leading-relaxed mb-3">
              Google/Alphabet&apos;s $50M waterfront project cancelled in 2020. Despite pioneering modular construction and urban data concepts, it collapsed under sustained criticism over data governance, lack of indigenous consultation, and eroding public trust.
            </p>
            <div className="space-y-2">
              <h4 className="text-[10px] font-semibold text-red-400 uppercase tracking-wider">IBTEC Lessons</h4>
              <ul className="space-y-1 text-[11px] text-text-secondary">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">1.</span> Establish data governance framework before operations begin</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">2.</span> Build public trust through transparency, not corporate reputation</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">3.</span> Community consent must be ongoing, not a one-time exercise</li>
              </ul>
            </div>
          </div>

          {/* Putrajaya */}
          <div className="bg-surface border border-orange-500/40 rounded-lg p-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <h3 className="text-sm font-semibold text-text-primary">{'\u{1F1F2}\u{1F1FE}'} Putrajaya (Malaysia)</h3>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400">Underperformed</span>
            </div>
            <p className="text-[11px] text-text-secondary leading-relaxed mb-3">
              Malaysia&apos;s purpose-built administrative capital since 1999. Impressive infrastructure but government-centric development created no innovation density, no startup ecosystem, and limited private sector investment.
            </p>
            <div className="space-y-2">
              <h4 className="text-[10px] font-semibold text-orange-400 uppercase tracking-wider">IBTEC Lessons</h4>
              <ul className="space-y-1 text-[11px] text-text-secondary">
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">1.</span> Government presence alone does not create innovation ecosystems</li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">2.</span> Must attract private sector and startup talent from day one</li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">3.</span> Liveability and social vibrancy are non-negotiable for talent retention</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* IBTEC Positioning Statement */}
      <div className="bg-surface border border-primary/20 rounded-lg p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light" />
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-semibold text-text-primary">IBTEC Positioning</h3>
        </div>
        <p className="text-[11px] text-text-secondary leading-relaxed">
          IBTEC is not trying to be NEOM (top-down megaproject) or Songdo (tech without soul). Our model draws from Singapore&apos;s digital infrastructure, Helsinki&apos;s governance transparency, Barcelona&apos;s sensor-driven management, and Brainport Eindhoven&apos;s triple-helix collaboration &mdash; while innovating on federated discovery, guild-based vertical integration, and AI-Ops automation. The benchmark gap analysis targets closing the 15-25 point deficit to Singapore within Phase 2 (2028-2030).
        </p>
      </div>
    </div>
  )
}
