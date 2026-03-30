'use client'

import React, { useState } from 'react'
import {
  Map, Building2, Radio, Car, Zap, Wifi, Layers,
  ChevronRight, Activity, Users, Cpu, FlaskConical,
  TreePine, Home, Factory, Lightbulb
} from 'lucide-react'

const zones = [
  { id: 'innovation', name: 'Innovation District', icon: Lightbulb, color: '#007B7F', x: 20, y: 15, w: 35, h: 30, tenants: 24, sensors: 12400, projects: 8, type: 'Core R&D and advanced manufacturing' },
  { id: 'sandbox', name: 'Sandbox Zone', icon: FlaskConical, color: '#A855F7', x: 60, y: 10, w: 30, h: 25, tenants: 12, sensors: 8200, projects: 5, type: 'Regulatory sandbox and testing grounds' },
  { id: 'living-lab', name: 'Living Lab', icon: Home, color: '#22C55E', x: 15, y: 50, w: 30, h: 25, tenants: 18, sensors: 9600, projects: 6, type: 'Residential integration and citizen co-creation' },
  { id: 'coworking', name: 'Co-Working Hub', icon: Users, color: '#3B82F6', x: 50, y: 40, w: 25, h: 20, tenants: 15, sensors: 4800, projects: 3, type: 'Shared workspace and collaboration' },
  { id: 'manufacturing', name: 'Advanced Manufacturing', icon: Factory, color: '#F97316', x: 55, y: 65, w: 35, h: 25, tenants: 8, sensors: 7200, projects: 4, type: 'Clean rooms, GMP bays, testing facilities' },
  { id: 'green', name: 'Green Corridor', icon: TreePine, color: '#22C55E', x: 10, y: 80, w: 40, h: 12, tenants: 0, sensors: 6047, projects: 0, type: 'Solar farms, parks, autonomous vehicle corridor' },
]

const layers = [
  { id: 'tenants', label: 'Tenants', icon: Building2, active: true },
  { id: 'iot', label: 'IoT Sensors', icon: Radio, active: true },
  { id: 'autonomous', label: 'Autonomous', icon: Car, active: false },
  { id: 'energy', label: 'Energy', icon: Zap, active: false },
  { id: '5g', label: '5G Coverage', icon: Wifi, active: false },
  { id: 'projects', label: 'Projects', icon: Lightbulb, active: false },
]

const liveStats = [
  { label: 'Total Area', value: '7,290 acres' },
  { label: 'Active Tenants', value: '82' },
  { label: 'Innovation Projects', value: '23' },
  { label: 'Energy Generation', value: '2.4 MW' },
  { label: 'IoT Sensors', value: '48,247' },
  { label: 'AI Decisions Today', value: '12,400' },
]

export default function IBTECMapPage() {
  const [activeLayers, setActiveLayers] = useState<Set<string>>(new Set(['tenants', 'iot']))
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
  const [simulationMode, setSimulationMode] = useState(false)

  const toggleLayer = (id: string) => {
    const next = new Set(activeLayers)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setActiveLayers(next)
  }

  const selected = zones.find(z => z.id === selectedZone)

  return (
    <div className="space-y-4 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <Map className="w-6 h-6 text-primary" />
            IBTEC Digital Twin
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            7,290-acre precinct — Sedenak, Johor | Benchmarked against Helsinki 3D+ and Virtual Singapore
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSimulationMode(!simulationMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              simulationMode ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-surface border border-border text-text-secondary'
            }`}
          >
            {simulationMode ? '🔮 Simulation Mode' : 'Enter Simulation'}
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Main Map Area */}
        <div className="flex-1 bg-surface border border-border rounded-lg overflow-hidden relative" style={{ minHeight: '600px' }}>
          {simulationMode && (
            <div className="absolute top-3 left-3 right-3 z-10 bg-amber-500/10 border border-amber-500/30 rounded-lg p-2 text-xs text-amber-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Simulation Mode Active — changes are virtual and do not affect live systems
            </div>
          )}

          {/* Stylized IBTEC Map */}
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ minHeight: '600px' }}>
            {/* Background grid */}
            <defs>
              <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#1E3A5F" strokeWidth="0.1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="#0A1628" />
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Zone blocks */}
            {zones.map((zone) => (
              <g key={zone.id} onClick={() => setSelectedZone(zone.id)} className="cursor-pointer">
                <rect
                  x={zone.x} y={zone.y} width={zone.w} height={zone.h}
                  fill={`${zone.color}10`}
                  stroke={selectedZone === zone.id ? zone.color : `${zone.color}40`}
                  strokeWidth={selectedZone === zone.id ? 0.5 : 0.2}
                  rx={1}
                  className="transition-all"
                />
                <text
                  x={zone.x + zone.w / 2} y={zone.y + zone.h / 2 - 2}
                  textAnchor="middle" fill={zone.color} fontSize="2.5" fontWeight="600"
                >
                  {zone.name}
                </text>
                <text
                  x={zone.x + zone.w / 2} y={zone.y + zone.h / 2 + 2}
                  textAnchor="middle" fill="#94A3B8" fontSize="1.5"
                >
                  {zone.tenants} tenants · {(zone.sensors / 1000).toFixed(1)}K sensors
                </text>

                {/* IoT sensor dots */}
                {activeLayers.has('iot') && Array.from({ length: Math.min(zone.sensors / 2000, 8) }).map((_, i) => (
                  <circle
                    key={i}
                    cx={zone.x + 3 + (i * (zone.w - 6) / Math.max(zone.sensors / 2000 - 1, 1))}
                    cy={zone.y + zone.h - 3}
                    r={0.5}
                    fill="#22C55E"
                    opacity={0.6}
                  >
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                  </circle>
                ))}
              </g>
            ))}

            {/* Autonomous vehicle route */}
            {activeLayers.has('autonomous') && (
              <>
                <line x1="25" y1="78" x2="85" y2="78" stroke="#06B6D4" strokeWidth="0.3" strokeDasharray="1,1">
                  <animate attributeName="stroke-dashoffset" from="0" to="-2" dur="1s" repeatCount="indefinite" />
                </line>
                <circle r="1" fill="#06B6D4">
                  <animateMotion dur="8s" repeatCount="indefinite" path="M25,78 L85,78 L85,78 L25,78" />
                </circle>
              </>
            )}

            {/* IBTEC label */}
            <text x="50" y="97" textAnchor="middle" fill="#007B7F" fontSize="3" fontWeight="700">
              IBTEC — Ibrahim Technopolis
            </text>
          </svg>

          {/* Historical replay slider */}
          <div className="absolute bottom-3 left-3 right-60 bg-surface/80 backdrop-blur rounded-lg p-2 flex items-center gap-2">
            <span className="text-[10px] text-text-secondary">Historical:</span>
            <input type="range" min="0" max="100" defaultValue="100" className="flex-1 h-1 accent-primary" />
            <span className="text-[10px] text-text-secondary">Live</span>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 space-y-3">
          {/* IBTEC Live Stats */}
          <div className="bg-surface border border-border rounded-lg p-3">
            <h3 className="text-xs font-semibold text-primary flex items-center gap-1 mb-2">
              <Activity className="w-3 h-3" /> IBTEC Live
            </h3>
            <div className="space-y-2">
              {liveStats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-[10px] text-text-secondary">{stat.label}</span>
                  <span className="text-xs font-semibold text-text-primary font-mono">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Layer Toggles */}
          <div className="bg-surface border border-border rounded-lg p-3">
            <h3 className="text-xs font-semibold text-text-primary flex items-center gap-1 mb-2">
              <Layers className="w-3 h-3" /> Map Layers
            </h3>
            <div className="space-y-1">
              {layers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors ${
                    activeLayers.has(layer.id) ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-surface-elevated'
                  }`}
                >
                  <layer.icon className="w-3 h-3" />
                  {layer.label}
                  <div className={`ml-auto w-2 h-2 rounded-full ${activeLayers.has(layer.id) ? 'bg-primary' : 'bg-border'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Selected Zone Detail */}
          {selected && (
            <div className="bg-surface border border-border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <selected.icon className="w-4 h-4" style={{ color: selected.color }} />
                <h3 className="text-xs font-semibold text-text-primary">{selected.name}</h3>
              </div>
              <p className="text-[10px] text-text-secondary mb-2">{selected.type}</p>
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between"><span className="text-text-secondary">Tenants</span><span className="text-text-primary font-mono">{selected.tenants}</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">IoT Sensors</span><span className="text-text-primary font-mono">{selected.sensors.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Projects</span><span className="text-text-primary font-mono">{selected.projects}</span></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
