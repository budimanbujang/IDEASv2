'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, Cpu, Layers, Users, Zap, Radio, Car, Wifi, Play, Pause,
  RotateCcw, Eye, Building, Leaf, BarChart3
} from 'lucide-react'

const zones = [
  { name: 'Innovation District', x: 0, y: 0, w: 4, h: 3, color: '#06B6D4', sensors: 12480, projects: 8, tenants: 24 },
  { name: 'Sandbox Zone', x: 4, y: 0, w: 3, h: 2, color: '#22C55E', sensors: 8340, projects: 5, tenants: 12 },
  { name: 'Living Lab', x: 7, y: 0, w: 3, h: 3, color: '#A855F7', sensors: 6720, projects: 4, tenants: 8 },
  { name: 'Co-Working Hub', x: 4, y: 2, w: 3, h: 2, color: '#F59E0B', sensors: 5200, projects: 3, tenants: 15 },
  { name: 'Residential', x: 0, y: 3, w: 5, h: 2, color: '#3B82F6', sensors: 9800, projects: 2, tenants: 14 },
  { name: 'Commercial', x: 5, y: 3, w: 5, h: 2, color: '#EC4899', sensors: 5707, projects: 1, tenants: 9 },
]

const layers = [
  { id: 'projects', label: 'Projects', icon: Building, active: true },
  { id: 'tenants', label: 'Tenants', icon: Users, active: true },
  { id: 'iot', label: 'IoT Sensors', icon: Radio, active: true },
  { id: 'autonomous', label: 'Autonomous', icon: Car, active: false },
  { id: 'energy', label: 'Energy', icon: Zap, active: false },
  { id: '5g', label: '5G Coverage', icon: Wifi, active: false },
]

const sensorHeatDots = Array.from({ length: 200 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  intensity: Math.random(),
  type: ['env', 'traffic', 'structural', 'utility', 'security'][Math.floor(Math.random() * 5)],
}))

const typeColors: Record<string, string> = {
  env: '#22C55E',
  traffic: '#F59E0B',
  structural: '#3B82F6',
  utility: '#06B6D4',
  security: '#EC4899',
}

export default function DigitalTwinPage() {
  const [activeLayers, setActiveLayers] = useState<Record<string, boolean>>(
    Object.fromEntries(layers.map(l => [l.id, l.active]))
  )
  const [simMode, setSimMode] = useState(false)
  const [replayPos, setReplayPos] = useState(50)
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const toggleLayer = (id: string) => {
    setActiveLayers(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-4 max-w-[1800px] mx-auto -m-6 p-4 bg-[#070E1A] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0A1220] border border-cyan-900/40 rounded-lg px-5 py-3">
        <div className="flex items-center gap-4">
          <Link href="/operations" className="p-1.5 rounded hover:bg-cyan-500/10 transition-colors">
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-cyan-400 tracking-wide uppercase">IBTEC Digital Twin</h1>
              <p className="text-[10px] text-text-secondary">Real-time 3D Precinct Model — 7,290 acres</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Simulation toggle */}
          <button
            onClick={() => setSimMode(!simMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded border text-[10px] font-semibold transition-colors cursor-pointer ${
              simMode
                ? 'bg-purple-500/20 border-purple-500/40 text-purple-400'
                : 'bg-[#060D18] border-cyan-900/30 text-text-secondary hover:text-cyan-400'
            }`}
          >
            {simMode ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {simMode ? 'Simulation Active' : 'Run Simulation'}
          </button>
          <div className="bg-[#060D18] border border-cyan-900/30 rounded px-3 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-[10px] font-mono text-green-400">96% accuracy — synced 3s ago</span>
          </div>
        </div>
      </div>

      {/* Main Content: Map + Sidebar */}
      <div className="grid grid-cols-12 gap-4" style={{ minHeight: '520px' }}>
        {/* Left: Isometric Map View */}
        <div className="col-span-9 bg-[#0A1220] border border-cyan-900/40 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Precinct Isometric View</h2>
            </div>
            {simMode && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-glow" />
                <span className="text-[10px] font-mono text-purple-400">SIMULATION MODE — What-if scenario active</span>
              </div>
            )}
          </div>

          {/* Isometric Grid */}
          <div className="flex-1 relative bg-[#060D18] rounded border border-cyan-900/20 overflow-hidden" style={{ perspective: '800px' }}>
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: 'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />

            {/* Isometric zone blocks */}
            <div className="absolute inset-4 grid grid-cols-10 grid-rows-5 gap-1.5">
              {zones.map((zone) => (
                <div
                  key={zone.name}
                  className={`rounded-sm cursor-pointer transition-all duration-200 relative group ${
                    selectedZone === zone.name ? 'ring-1 ring-white/40 z-20' : 'hover:brightness-125 z-10'
                  }`}
                  style={{
                    gridColumn: `${zone.x + 1} / span ${zone.w}`,
                    gridRow: `${zone.y + 1} / span ${zone.h}`,
                    backgroundColor: `${zone.color}18`,
                    borderLeft: `3px solid ${zone.color}60`,
                    borderBottom: `3px solid ${zone.color}30`,
                    boxShadow: selectedZone === zone.name ? `0 0 20px ${zone.color}30` : 'none',
                  }}
                  onClick={() => setSelectedZone(selectedZone === zone.name ? null : zone.name)}
                >
                  {/* Zone label */}
                  <div className="absolute inset-0 p-2 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-semibold text-text-primary">{zone.name}</div>
                      <div className="text-[9px] font-mono" style={{ color: zone.color }}>{zone.sensors.toLocaleString()} sensors</div>
                    </div>
                    <div className="flex items-center gap-2 text-[8px] text-text-secondary">
                      {activeLayers.projects && <span>{zone.projects} projects</span>}
                      {activeLayers.tenants && <span>{zone.tenants} tenants</span>}
                    </div>
                  </div>

                  {/* IoT sensor overlay dots */}
                  {activeLayers.iot && (
                    <div className="absolute inset-0 overflow-hidden">
                      {sensorHeatDots
                        .filter((_, i) => i % 6 === zones.indexOf(zone) % 6)
                        .slice(0, 15)
                        .map((dot, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full opacity-60"
                            style={{
                              left: `${dot.x}%`,
                              top: `${dot.y}%`,
                              backgroundColor: typeColors[dot.type],
                            }}
                          />
                        ))}
                    </div>
                  )}

                  {/* Hover tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0A1220] border border-cyan-900/60 rounded px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                    <div className="text-[10px] font-semibold text-text-primary">{zone.name}</div>
                    <div className="text-[9px] text-text-secondary">{zone.sensors.toLocaleString()} sensors | {zone.tenants} tenants</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 5G coverage overlay */}
            {activeLayers['5g'] && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border border-cyan-400/20" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)' }} />
                <div className="absolute top-1/3 left-1/2 w-1/3 h-1/3 rounded-full border border-cyan-400/15" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />
              </div>
            )}

            {/* Energy overlay */}
            {activeLayers.energy && (
              <div className="absolute bottom-3 left-3 bg-[#0A1220]/90 border border-green-900/40 rounded px-2 py-1.5">
                <div className="text-[9px] font-mono text-green-400">Energy: 2.4MW gen / 1.8MW consumption</div>
              </div>
            )}
          </div>

          {/* Historical Replay Slider */}
          <div className="mt-3 bg-[#060D18] border border-cyan-900/20 rounded p-3">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-3.5 h-3.5 text-text-secondary" />
              <span className="text-[10px] text-text-secondary font-mono">00:00</span>
              <input
                type="range"
                min="0"
                max="100"
                value={replayPos}
                onChange={(e) => setReplayPos(Number(e.target.value))}
                className="flex-1 h-1 accent-cyan-500 cursor-pointer"
              />
              <span className="text-[10px] text-text-secondary font-mono">23:59</span>
              <span className="text-[10px] text-cyan-400 font-mono ml-2">Historical Replay</span>
            </div>
          </div>
        </div>

        {/* Right: Stats Sidebar */}
        <div className="col-span-3 space-y-3">
          {/* IBTEC Live Stats */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">IBTEC Live</h3>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            </div>
            <div className="space-y-2.5">
              {[
                { label: 'Total Area', value: '7,290 acres', icon: Layers },
                { label: 'Active Tenants', value: '82', icon: Users },
                { label: 'Innovation Projects', value: '23', icon: Building },
                { label: 'Energy Generation', value: '2.4 MW', icon: Zap },
                { label: 'IoT Sensors', value: '48,247', icon: Radio },
                { label: 'AI Decisions Today', value: '12,400', icon: Cpu },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-1.5 border-b border-cyan-900/20 last:border-0">
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-3.5 h-3.5 text-text-secondary" />
                    <span className="text-[10px] text-text-secondary">{stat.label}</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-text-primary">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Layer Toggles */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <h3 className="text-xs font-bold text-cyan-400 uppercase mb-2.5">Layer Controls</h3>
            <div className="space-y-1.5">
              {layers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  className={`w-full flex items-center gap-2 px-2.5 py-2 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                    activeLayers[layer.id]
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : 'bg-[#060D18] text-text-secondary border border-transparent hover:border-cyan-900/30'
                  }`}
                >
                  <layer.icon className="w-3.5 h-3.5" />
                  {layer.label}
                  <div className={`ml-auto w-2 h-2 rounded-full ${activeLayers[layer.id] ? 'bg-cyan-400' : 'bg-gray-600'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Selected Zone Detail */}
          {selectedZone && (
            <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
              <h3 className="text-xs font-bold text-cyan-400 uppercase mb-2">Zone Detail</h3>
              {(() => {
                const z = zones.find(z => z.name === selectedZone)!
                return (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: z.color }} />
                      <span className="text-xs font-semibold text-text-primary">{z.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-[#060D18] rounded p-2 text-center">
                        <div className="font-mono font-bold text-text-primary">{z.sensors.toLocaleString()}</div>
                        <div className="text-text-secondary">sensors</div>
                      </div>
                      <div className="bg-[#060D18] rounded p-2 text-center">
                        <div className="font-mono font-bold text-text-primary">{z.tenants}</div>
                        <div className="text-text-secondary">tenants</div>
                      </div>
                      <div className="bg-[#060D18] rounded p-2 text-center">
                        <div className="font-mono font-bold text-text-primary">{z.projects}</div>
                        <div className="text-text-secondary">projects</div>
                      </div>
                      <div className="bg-[#060D18] rounded p-2 text-center">
                        <div className="font-mono font-bold text-green-400">Online</div>
                        <div className="text-text-secondary">status</div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          )}

          {/* Benchmark */}
          <div className="bg-[#060D18] border border-cyan-900/20 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <Leaf className="w-3.5 h-3.5 text-green-400" />
              <span className="text-[10px] font-semibold text-text-secondary">Benchmarked Against</span>
            </div>
            <div className="text-[10px] text-text-secondary leading-relaxed">
              Helsinki 3D+ and Virtual Singapore digital twin platforms. IBTEC model covers full 7,290-acre precinct with real-time IoT integration.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
