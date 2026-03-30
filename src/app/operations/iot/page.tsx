'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, Radio, Thermometer, Building, Car, Zap, Shield,
  AlertTriangle, Wifi, Server, Activity, Eye, Clock, TrendingUp
} from 'lucide-react'

const sensorCategories = [
  {
    name: 'Environmental',
    icon: Thermometer,
    color: '#22C55E',
    total: 14200,
    online: 13890,
    maintenance: 210,
    offline: 100,
    lastData: '0.3s ago',
    types: ['Temperature', 'Humidity', 'Air Quality', 'Noise', 'UV Index'],
  },
  {
    name: 'Structural',
    icon: Building,
    color: '#3B82F6',
    total: 8400,
    online: 8120,
    maintenance: 180,
    offline: 100,
    lastData: '1.2s ago',
    types: ['Vibration', 'Strain', 'Tilt', 'Crack Detection'],
  },
  {
    name: 'Traffic',
    icon: Car,
    color: '#F59E0B',
    total: 12000,
    online: 11680,
    maintenance: 220,
    offline: 100,
    lastData: '0.1s ago',
    types: ['Vehicle Count', 'Speed', 'Pedestrian Flow', 'Signal Status'],
  },
  {
    name: 'Utility',
    icon: Zap,
    color: '#06B6D4',
    total: 9400,
    online: 9057,
    maintenance: 243,
    offline: 100,
    lastData: '0.8s ago',
    types: ['Power Meter', 'Water Flow', 'Gas Detection', 'Solar Output'],
  },
  {
    name: 'Security',
    icon: Shield,
    color: '#EC4899',
    total: 6000,
    online: 5500,
    maintenance: 350,
    offline: 150,
    lastData: '0.2s ago',
    types: ['Motion', 'Access Control', 'Perimeter', 'Camera Analytics'],
  },
]

const anomalies = [
  { time: '09:47', severity: 'warning', sensor: 'ENV-4821', message: 'Temperature spike +8°C in Zone 4 server room', zone: 'Innovation District' },
  { time: '09:32', severity: 'critical', sensor: 'STR-1204', message: 'Vibration anomaly detected — Building C foundation', zone: 'Commercial' },
  { time: '09:18', severity: 'info', sensor: 'TRF-7102', message: 'Unusual pedestrian density pattern — Junction 14', zone: 'Living Lab' },
  { time: '09:05', severity: 'warning', sensor: 'UTL-3340', message: 'Water pressure drop 15% — Zone 6 main line', zone: 'Residential' },
]

const severityColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  critical: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', dot: 'bg-red-500' },
  warning: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-500' },
  info: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', dot: 'bg-cyan-500' },
}

// Generate sensor status matrix dots
const matrixDots = Array.from({ length: 120 }, (_, i) => {
  const rand = Math.random()
  if (rand > 0.97) return 'offline'
  if (rand > 0.93) return 'maintenance'
  return 'online'
})

const dotColors: Record<string, string> = {
  online: '#22C55E',
  maintenance: '#F59E0B',
  offline: '#6B7280',
}

export default function IoTSensorNetwork() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const totalOnline = sensorCategories.reduce((s, c) => s + c.online, 0)
  const totalMaint = sensorCategories.reduce((s, c) => s + c.maintenance, 0)
  const totalOffline = sensorCategories.reduce((s, c) => s + c.offline, 0)
  const total = sensorCategories.reduce((s, c) => s + c.total, 0)

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
              <Radio className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-cyan-400 tracking-wide uppercase">IoT Sensor Network</h1>
              <p className="text-[10px] text-text-secondary">50,000+ Distributed Sensors — Real-time Telemetry</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 bg-[#060D18] border border-cyan-900/30 rounded px-4 py-2">
            <div className="text-center">
              <div className="text-sm font-mono font-bold text-green-400">{totalOnline.toLocaleString()}</div>
              <div className="text-[9px] text-text-secondary">online</div>
            </div>
            <div className="w-px h-6 bg-cyan-900/40" />
            <div className="text-center">
              <div className="text-sm font-mono font-bold text-amber-400">{totalMaint.toLocaleString()}</div>
              <div className="text-[9px] text-text-secondary">maintenance</div>
            </div>
            <div className="w-px h-6 bg-cyan-900/40" />
            <div className="text-center">
              <div className="text-sm font-mono font-bold text-gray-400">{totalOffline.toLocaleString()}</div>
              <div className="text-[9px] text-text-secondary">offline</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sensor Category Grid */}
      <div className="grid grid-cols-5 gap-3">
        {sensorCategories.map((cat) => {
          const pct = ((cat.online / cat.total) * 100).toFixed(1)
          return (
            <div
              key={cat.name}
              className={`bg-[#0A1220] border rounded-lg p-3 cursor-pointer transition-all ${
                selectedCategory === cat.name
                  ? 'border-cyan-500/50 ring-1 ring-cyan-500/20'
                  : 'border-cyan-900/40 hover:border-cyan-900/60'
              }`}
              onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
            >
              <div className="flex items-center gap-2 mb-2">
                <cat.icon className="w-4 h-4" style={{ color: cat.color }} />
                <span className="text-xs font-semibold text-text-primary">{cat.name}</span>
              </div>
              <div className="text-xl font-mono font-bold text-text-primary mb-1">{cat.total.toLocaleString()}</div>
              <div className="flex items-center justify-between text-[10px] mb-2">
                <span className="text-green-400 font-mono">{pct}% online</span>
                <span className="text-text-secondary">last: {cat.lastData}</span>
              </div>
              {/* Online bar */}
              <div className="h-1.5 bg-[#0D1A2A] rounded-full overflow-hidden flex">
                <div className="h-full rounded-l-full" style={{ width: `${(cat.online / cat.total) * 100}%`, backgroundColor: '#22C55E80' }} />
                <div className="h-full" style={{ width: `${(cat.maintenance / cat.total) * 100}%`, backgroundColor: '#F59E0B80' }} />
                <div className="h-full rounded-r-full" style={{ width: `${(cat.offline / cat.total) * 100}%`, backgroundColor: '#6B728080' }} />
              </div>
              {selectedCategory === cat.name && (
                <div className="mt-2 pt-2 border-t border-cyan-900/20">
                  <div className="text-[9px] text-text-secondary mb-1">Sensor types:</div>
                  <div className="flex flex-wrap gap-1">
                    {cat.types.map(t => (
                      <span key={t} className="text-[8px] bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Main Grid: Status Matrix + Throughput + Anomalies */}
      <div className="grid grid-cols-12 gap-4">
        {/* Sensor Status Matrix */}
        <div className="col-span-5 bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Sensor Status Matrix</h2>
            </div>
            <div className="flex items-center gap-3 text-[9px]">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-green-500" /><span className="text-text-secondary">Online</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-amber-500" /><span className="text-text-secondary">Maint</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-gray-500" /><span className="text-text-secondary">Offline</span></div>
            </div>
          </div>
          <div className="bg-[#060D18] rounded border border-cyan-900/20 p-3">
            <div className="grid grid-cols-20 gap-1">
              {matrixDots.map((status, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-sm transition-colors ${status === 'online' ? 'animate-pulse-glow' : ''}`}
                  style={{
                    backgroundColor: dotColors[status],
                    opacity: status === 'online' ? 0.8 : status === 'maintenance' ? 0.9 : 0.4,
                    animationDelay: status === 'online' ? `${(i * 0.3) % 4}s` : undefined,
                    animationDuration: status === 'online' ? '3s' : undefined,
                  }}
                  title={`Sensor ${i + 1}: ${status}`}
                />
              ))}
            </div>
            <div className="mt-3 text-[10px] text-text-secondary text-center">
              Representative sample — {total.toLocaleString()} total sensors across 6 zones
            </div>
          </div>
        </div>

        {/* Data Throughput & Edge Computing */}
        <div className="col-span-3 space-y-3">
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">Data Throughput</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Ingest Rate', value: '2.4M', unit: 'msgs/min', pct: 82 },
                { label: 'Processing', value: '98.7%', unit: 'real-time', pct: 98 },
                { label: 'Storage', value: '14.2', unit: 'TB/day', pct: 71 },
                { label: 'Bandwidth', value: '840', unit: 'Mbps', pct: 56 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="text-text-secondary">{m.label}</span>
                    <span className="font-mono text-text-primary">{m.value} <span className="text-text-secondary">{m.unit}</span></span>
                  </div>
                  <div className="h-1.5 bg-[#0D1A2A] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" style={{ width: `${m.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <Server className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">Edge Computing</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Edge Nodes', value: '24', status: 'online' },
                { label: 'Local Processing', value: '67%', status: 'online' },
                { label: 'Latency', value: '3.2ms', status: 'online' },
                { label: 'Cache Hit', value: '94%', status: 'online' },
              ].map((node) => (
                <div key={node.label} className="bg-[#060D18] border border-cyan-900/20 rounded p-2 text-center">
                  <div className="text-sm font-mono font-bold text-text-primary">{node.value}</div>
                  <div className="text-[9px] text-text-secondary">{node.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Anomaly Detection */}
        <div className="col-span-4 bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wide">Anomaly Detection</h2>
            </div>
            <span className="text-[10px] font-mono text-text-secondary">ML-powered — 99.4% precision</span>
          </div>
          <div className="space-y-2 flex-1">
            {anomalies.map((anomaly, i) => {
              const colors = severityColors[anomaly.severity]
              return (
                <div key={i} className={`${colors.bg} ${colors.border} border rounded p-2.5`}>
                  <div className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.dot} ${anomaly.severity === 'critical' ? 'animate-pulse-glow' : ''}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] font-mono text-text-secondary">{anomaly.sensor}</span>
                        <span className="text-[10px] font-mono text-text-secondary">{anomaly.time}</span>
                      </div>
                      <p className="text-[11px] text-text-primary leading-snug">{anomaly.message}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[9px] text-text-secondary">{anomaly.zone}</span>
                        <span className={`text-[9px] font-mono uppercase ${colors.text}`}>{anomaly.severity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-3 pt-2 border-t border-cyan-900/20 flex items-center justify-between">
            <div className="flex items-center gap-4 text-[10px]">
              <div><span className="text-text-secondary">Today: </span><span className="font-mono text-amber-400">47 anomalies</span></div>
              <div><span className="text-text-secondary">Auto-resolved: </span><span className="font-mono text-green-400">39</span></div>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-[10px] text-green-400">Detection +12% vs baseline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
