'use client'

import React from 'react'
import {
  Leaf, Wifi, Car, Users, Heart, Palette, Lightbulb, Bot,
  TrendingUp, TrendingDown, Quote, Shield
} from 'lucide-react'
import { cn } from '@/lib/utils'

const overallScore = 78

const dimensions = [
  {
    id: 'resources',
    name: 'Resources & Sustainability',
    icon: Leaf,
    color: '#22C55E',
    score: 68,
    trend: 'up',
    ibtecSpecific: false,
    metrics: [
      { label: 'Renewable Energy', value: '38%' },
      { label: 'Water Recycling', value: '52%' },
      { label: 'Waste Diversion', value: '71%' },
    ],
    sparkline: [40, 45, 42, 50, 55, 58, 62, 65, 68],
  },
  {
    id: 'digital',
    name: 'Digital Infrastructure',
    icon: Wifi,
    color: '#06B6D4',
    score: 91,
    trend: 'up',
    ibtecSpecific: false,
    metrics: [
      { label: '5G Coverage', value: '94%' },
      { label: 'Fibre Connectivity', value: '99%' },
      { label: 'Edge Nodes', value: '12' },
    ],
    sparkline: [70, 75, 78, 82, 85, 87, 89, 90, 91],
  },
  {
    id: 'mobility',
    name: 'Urban Planning & Mobility',
    icon: Car,
    color: '#3B82F6',
    score: 74,
    trend: 'up',
    ibtecSpecific: false,
    metrics: [
      { label: 'Autonomous Corridor', value: '67%' },
      { label: 'Walkability Score', value: '82' },
    ],
    sparkline: [50, 52, 55, 60, 63, 66, 69, 72, 74],
  },
  {
    id: 'governance',
    name: 'Governance & Participation',
    icon: Users,
    color: '#A855F7',
    score: 72,
    trend: 'up',
    ibtecSpecific: false,
    metrics: [
      { label: 'Sandbox Apps', value: '8' },
      { label: 'Citizen Engagement', value: '74%' },
    ],
    sparkline: [55, 58, 60, 62, 64, 66, 68, 70, 72],
  },
  {
    id: 'social',
    name: 'Social Cohesion',
    icon: Heart,
    color: '#EC4899',
    score: 70,
    trend: 'up',
    ibtecSpecific: false,
    metrics: [
      { label: 'Mixed-Income Housing', value: '35%' },
      { label: 'Cultural Events', value: '12/mo' },
      { label: 'Wellness Index', value: '78' },
    ],
    sparkline: [50, 52, 55, 58, 60, 63, 65, 68, 70],
  },
  {
    id: 'experience',
    name: 'Experience Design',
    icon: Palette,
    color: '#F97316',
    score: 81,
    trend: 'up',
    ibtecSpecific: false,
    metrics: [
      { label: 'Placemaking Score', value: '81' },
      { label: 'Biophilic Coverage', value: '44%' },
      { label: 'UX Satisfaction', value: '88' },
    ],
    sparkline: [60, 63, 66, 70, 73, 75, 77, 79, 81],
  },
  {
    id: 'industrial',
    name: 'Industrial Innovation',
    icon: Lightbulb,
    color: '#14B8A6',
    score: 82,
    trend: 'up',
    ibtecSpecific: true,
    metrics: [
      { label: 'R&D Investment', value: 'RM 180M' },
      { label: 'Patents Filed', value: '23' },
      { label: 'Cross-Guild Projects', value: '34' },
    ],
    sparkline: [55, 60, 64, 68, 72, 75, 78, 80, 82],
  },
  {
    id: 'ai-native',
    name: 'AI-Native Operations',
    icon: Bot,
    color: '#06B6D4',
    score: 88,
    trend: 'up',
    ibtecSpecific: true,
    metrics: [
      { label: 'System Uptime', value: '99.7%' },
      { label: 'AI Decisions/Day', value: '12,400' },
      { label: 'Digital Twin Accuracy', value: '96%' },
    ],
    sparkline: [65, 70, 74, 78, 80, 83, 85, 87, 88],
  },
]

function SparklineSVG({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const w = 80
  const h = 24
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(' ')

  return (
    <svg width={w} height={h} className="block">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={(data.length - 1) / (data.length - 1) * w}
        cy={h - ((data[data.length - 1] - min) / range) * h}
        r="2"
        fill={color}
      />
    </svg>
  )
}

function RadarChart({ dimensions: dims }: { dimensions: typeof dimensions }) {
  const size = 300
  const center = size / 2
  const radius = 110
  const n = dims.length
  const angleStep = (2 * Math.PI) / n

  const getPoint = (index: number, value: number) => {
    const angle = angleStep * index - Math.PI / 2
    const r = (value / 100) * radius
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) }
  }

  const rings = [25, 50, 75, 100]
  const dataPoints = dims.map((d, i) => getPoint(i, d.score))
  const polygonPoints = dataPoints.map((p) => `${p.x},${p.y}`).join(' ')

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[360px] mx-auto">
      {/* Grid rings */}
      {rings.map((ring) => {
        const pts = Array.from({ length: n }, (_, i) => {
          const p = getPoint(i, ring)
          return `${p.x},${p.y}`
        }).join(' ')
        return (
          <polygon
            key={ring}
            points={pts}
            fill="none"
            stroke="#1E3A5F"
            strokeWidth="0.5"
            opacity={0.5}
          />
        )
      })}

      {/* Axis lines */}
      {dims.map((_, i) => {
        const p = getPoint(i, 100)
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke="#1E3A5F"
            strokeWidth="0.5"
            opacity={0.5}
          />
        )
      })}

      {/* Data polygon */}
      <polygon
        points={polygonPoints}
        fill="rgba(0, 123, 127, 0.15)"
        stroke="#007B7F"
        strokeWidth="2"
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill={dims[i].color} stroke="#0A1628" strokeWidth="2" />
      ))}

      {/* Labels */}
      {dims.map((d, i) => {
        const labelPoint = getPoint(i, 120)
        const textAnchor =
          labelPoint.x < center - 10 ? 'end' : labelPoint.x > center + 10 ? 'start' : 'middle'
        return (
          <text
            key={d.id}
            x={labelPoint.x}
            y={labelPoint.y}
            textAnchor={textAnchor}
            dominantBaseline="middle"
            fill={d.color}
            fontSize="9"
            fontWeight="600"
          >
            {d.name.length > 18 ? d.name.slice(0, 16) + '...' : d.name}
          </text>
        )
      })}
    </svg>
  )
}

export default function EcosystemDashboardPage() {
  const circumference = 2 * Math.PI * 70
  const offset = circumference - (overallScore / 100) * circumference

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Shield className="w-5 h-5 text-primary" />
            <h1 className="text-2xl font-bold text-text-primary">IBTEC Ecosystem Dashboard</h1>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-green-500/15 text-green-400 border border-green-500/30">
              PUBLIC
            </span>
          </div>
          <p className="text-text-secondary text-sm max-w-2xl">
            Real-time transparency dashboard measuring IBTEC performance across 8 smart city dimensions.
            Two dimensions are IBTEC-specific innovations not found in standard frameworks.
          </p>
        </div>
      </div>

      {/* Overall Health Score */}
      <div className="bg-surface border border-border rounded-lg p-6 flex items-center gap-8">
        <div className="relative w-40 h-40 shrink-0">
          <svg className="w-40 h-40 -rotate-90" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="#1E3A5F" strokeWidth="8" />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#007B7F"
              strokeWidth="8"
              strokeDasharray={`${circumference}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-primary">{overallScore}</span>
            <span className="text-[10px] text-text-secondary">/ 100</span>
            <span className="text-xs text-text-secondary mt-1">Ecosystem Health</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-text-primary mb-2">Overall Ecosystem Health Score</h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-3">
            Composite score across all 8 dimensions, weighted by strategic priority. IBTEC currently scores
            above the global smart-city median (72) and trails Songdo (84) and One North (81).
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-green-400" />
              <span className="text-xs text-green-400 font-medium">+4.2 pts</span>
              <span className="text-[10px] text-text-secondary">vs last quarter</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-text-secondary">Target:</span>
              <span className="text-xs text-primary font-medium">85 by Q4 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Dimension Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {dimensions.map((dim) => {
          const Icon = dim.icon
          return (
            <div key={dim.id} className="bg-surface border border-border rounded-lg overflow-hidden">
              <div className="h-1" style={{ backgroundColor: dim.color }} />
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${dim.color}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: dim.color }} />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-text-primary leading-tight">{dim.name}</h3>
                      {dim.ibtecSpecific && (
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/30 mt-0.5 inline-block">
                          IBTEC-specific
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold" style={{ color: dim.color }}>
                      {dim.score}
                    </span>
                    <span className="text-[10px] text-text-secondary">/100</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-surface-elevated rounded-full mb-3">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${dim.score}%`,
                      backgroundColor: dim.color,
                    }}
                  />
                </div>

                {/* Metrics */}
                <div className="space-y-1.5 mb-3">
                  {dim.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between">
                      <span className="text-[10px] text-text-secondary">{m.label}</span>
                      <span className="text-[11px] font-mono font-medium text-text-primary">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Sparkline + Trend */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <SparklineSVG data={dim.sparkline} color={dim.color} />
                  <div className="flex items-center gap-1">
                    {dim.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-400" />
                    )}
                    <span className={cn('text-[10px] font-medium', dim.trend === 'up' ? 'text-green-400' : 'text-red-400')}>
                      {dim.trend === 'up' ? 'Improving' : 'Declining'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Radar Chart Section */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h3 className="text-sm font-semibold text-text-primary mb-4">
          8-Dimension Radar — IBTEC Ecosystem Profile
        </h3>
        <RadarChart dimensions={dimensions} />
      </div>

      {/* Banner Quote */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Quote className="w-8 h-8 text-primary shrink-0 mt-1" />
          <div>
            <p className="text-sm text-text-primary italic leading-relaxed">
              &ldquo;Radical transparency is a competitive weapon. What gets measured gets managed.
              What gets published gets trusted.&rdquo;
            </p>
            <p className="text-xs text-text-secondary mt-3">— IDEAS Ecosystem Transparency Manifesto</p>
          </div>
        </div>
      </div>
    </div>
  )
}
