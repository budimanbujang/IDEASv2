'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  AlertTriangle, Shield, Info, Wifi, Radio, Car, Sun, Cpu,
  Activity, Zap, ChevronRight, Bell, Server, Eye
} from 'lucide-react'

const alerts = [
  { id: 1, severity: 'critical', message: 'HVAC Zone 4 efficiency drop — 23% below threshold', time: '2 min ago', icon: AlertTriangle },
  { id: 2, severity: 'warning', message: 'Traffic signal #247 maintenance scheduled 14:00', time: '8 min ago', icon: AlertTriangle },
  { id: 3, severity: 'info', message: 'Solar panel cluster 3 output 12% below forecast', time: '15 min ago', icon: Info },
  { id: 4, severity: 'warning', message: 'Autonomous shuttle AV-02 rerouted — pedestrian zone', time: '22 min ago', icon: AlertTriangle },
  { id: 5, severity: 'info', message: 'Digital Twin sync latency spike — resolved', time: '34 min ago', icon: Info },
  { id: 6, severity: 'critical', message: 'Water pressure anomaly — Zone 6 residential block', time: '41 min ago', icon: AlertTriangle },
]

const severityColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  critical: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', dot: 'bg-red-500' },
  warning: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-500' },
  info: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', dot: 'bg-cyan-500' },
}

const zones = [
  { name: 'Innovation District', sensors: 12480, status: 'operational', color: '#06B6D4', w: 'w-48', h: 'h-32' },
  { name: 'Sandbox Zone', sensors: 8340, status: 'operational', color: '#22C55E', w: 'w-36', h: 'h-28' },
  { name: 'Living Lab', sensors: 6720, status: 'operational', color: '#A855F7', w: 'w-40', h: 'h-24' },
  { name: 'Co-Working Hub', sensors: 5200, status: 'warning', color: '#F59E0B', w: 'w-32', h: 'h-20' },
  { name: 'Residential', sensors: 9800, status: 'operational', color: '#3B82F6', w: 'w-44', h: 'h-28' },
  { name: 'Commercial', sensors: 5707, status: 'operational', color: '#EC4899', w: 'w-36', h: 'h-24' },
]

const tickerEvents = [
  'TrafficFlow AI optimised 48 signal cycles in Zone 2 — avg travel time reduced 18%',
  'ClimateControl AI adjusted HVAC in 12 buildings — energy saving 340 kWh',
  'PredictMaint AI flagged bearing wear on cooling tower #7 — maintenance scheduled',
  'EnergyTrade AI executed 3 peer-to-peer solar trades totalling RM 4,200',
  'LightingGrid AI dimmed 820 streetlights — low pedestrian density detected',
  'WasteRoute AI optimised 4 collection routes — fuel saving 12%',
  'EmergencyCoord AI pre-positioned 2 response units based on weather forecast',
  'PrivacyGuard AI anonymised 14,000 data points from traffic cameras',
]

export default function OperationsCommandCentre() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-4 max-w-[1800px] mx-auto -m-6 p-4 bg-[#070E1A] min-h-screen">
      {/* Top Banner */}
      <div className="flex items-center justify-between bg-[#0A1220] border border-cyan-900/40 rounded-lg px-5 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-cyan-400 tracking-wide uppercase">IBTEC Smart City Command Centre</h1>
              <p className="text-[10px] text-text-secondary">Operations Layer — IDEAS 2.0</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="font-mono text-lg font-bold text-cyan-400">
              {time.toLocaleTimeString('en-MY', { hour12: false })}
            </div>
            <div className="text-[10px] text-text-secondary">
              {time.toLocaleDateString('en-MY', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
            </div>
          </div>
          <div className="h-8 w-px bg-cyan-900/40" />
          <div className="text-right">
            <div className="text-sm font-semibold text-text-primary">32°C</div>
            <div className="text-[10px] text-text-secondary">Partly Cloudy</div>
          </div>
          <div className="h-8 w-px bg-cyan-900/40" />
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-glow" />
            <div className="text-right">
              <div className="text-xs font-semibold text-green-400">All Systems Operational</div>
              <div className="text-[10px] text-text-secondary">Uptime 99.97%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Alerts | Zone Map | System Status */}
      <div className="grid grid-cols-12 gap-4" style={{ minHeight: '520px' }}>
        {/* Left: Alerts */}
        <div className="col-span-3 bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-cyan-400" />
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Active Alerts</h2>
            </div>
            <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">{alerts.filter(a => a.severity === 'critical').length} CRITICAL</span>
          </div>
          <div className="space-y-2 flex-1 overflow-y-auto">
            {alerts.map((alert) => {
              const colors = severityColors[alert.severity]
              return (
                <div key={alert.id} className={`${colors.bg} ${colors.border} border rounded p-2.5 cursor-pointer hover:brightness-110 transition-all`}>
                  <div className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.dot} ${alert.severity === 'critical' ? 'animate-pulse-glow' : ''}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-text-primary leading-snug">{alert.message}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className={`text-[10px] font-mono uppercase ${colors.text}`}>{alert.severity}</span>
                        <span className="text-[10px] text-text-secondary">{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Centre: Zone Map */}
        <div className="col-span-5 bg-[#0A1220] border border-cyan-900/40 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wide">IBTEC Precinct Overview</h2>
            </div>
            <span className="text-[10px] text-text-secondary font-mono">7,290 acres | 48,247 sensors</span>
          </div>
          {/* Stylized zone grid */}
          <div className="flex-1 relative bg-[#060D18] rounded border border-cyan-900/20 p-3 overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
            {/* Zones as blocks */}
            <div className="relative z-10 grid grid-cols-3 gap-2 h-full">
              {zones.map((zone) => (
                <div
                  key={zone.name}
                  className="rounded border p-3 flex flex-col justify-between cursor-pointer hover:brightness-125 transition-all"
                  style={{
                    backgroundColor: `${zone.color}08`,
                    borderColor: `${zone.color}40`,
                  }}
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <div
                        className={`w-2 h-2 rounded-full ${zone.status === 'operational' ? 'animate-pulse-glow' : ''}`}
                        style={{ backgroundColor: zone.status === 'operational' ? '#22C55E' : '#F59E0B' }}
                      />
                      <span className="text-[10px] font-semibold text-text-primary truncate">{zone.name}</span>
                    </div>
                    <span className="text-[9px] uppercase font-mono" style={{ color: zone.status === 'operational' ? '#22C55E' : '#F59E0B' }}>
                      {zone.status}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-1">
                      <Radio className="w-3 h-3 text-text-secondary" />
                      <span className="text-[10px] font-mono text-text-secondary">{zone.sensors.toLocaleString()} sensors</span>
                    </div>
                    {/* Mini sensor dots */}
                    <div className="flex gap-0.5 mt-1 flex-wrap">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: `${zone.color}80` }} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: System Status */}
        <div className="col-span-4 space-y-3 overflow-y-auto" style={{ maxHeight: '520px' }}>
          {/* 5G Network */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2.5">
              <Wifi className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">5G Network</h3>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            </div>
            <div className="space-y-2">
              {[
                { label: 'URLLC', value: '1ms latency', pct: 98 },
                { label: 'eMBB', value: '1 Gbps', pct: 87 },
                { label: 'mMTC', value: '50K devices', pct: 96 },
              ].map((slice) => (
                <div key={slice.label} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-text-secondary w-12">{slice.label}</span>
                  <div className="flex-1 h-2 bg-[#0D1A2A] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" style={{ width: `${slice.pct}%` }} />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 w-20 text-right">{slice.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IoT Network */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2.5">
              <Radio className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">IoT Network</h3>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            </div>
            <div className="flex items-center gap-4">
              {/* Progress ring */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#0D1A2A" strokeWidth="4" />
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#06B6D4" strokeWidth="4"
                    strokeDasharray={`${0.965 * 2 * Math.PI * 28} ${2 * Math.PI * 28}`}
                    strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-cyan-400">96.5%</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-mono font-bold text-text-primary">48,247 <span className="text-text-secondary font-normal text-[10px]">/ 50,000</span></div>
                <div className="text-[10px] text-text-secondary">sensors online</div>
                <div className="text-[10px] text-green-400 mt-1">99.2% uptime</div>
              </div>
            </div>
          </div>

          {/* Autonomous Fleet */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2.5">
              <Car className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">Autonomous Fleet</h3>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-lg font-mono font-bold text-text-primary">3</div>
                <div className="text-[10px] text-text-secondary">vehicles active</div>
              </div>
              <div>
                <div className="text-lg font-mono font-bold text-green-400">0</div>
                <div className="text-[10px] text-text-secondary">incidents</div>
              </div>
              <div className="flex gap-2 ml-auto">
                {['AV-01', 'AV-02', 'AV-03'].map((av, i) => (
                  <div key={av} className="text-center">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-glow mx-auto" style={{ animationDelay: `${i * 0.5}s` }} />
                    <span className="text-[8px] font-mono text-text-secondary mt-0.5 block">{av}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Energy Grid */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">Energy Grid</h3>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Solar Gen', value: '2.4 MW', icon: Sun, color: '#F59E0B' },
                { label: 'Consumption', value: '1.8 MW', icon: Zap, color: '#06B6D4' },
                { label: 'Storage', value: '600 kW', icon: Server, color: '#22C55E' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-4 h-4 mx-auto mb-1" style={{ color: item.color }} />
                  <div className="text-xs font-mono font-bold text-text-primary">{item.value}</div>
                  <div className="text-[9px] text-text-secondary">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Twin */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">Digital Twin</h3>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-mono font-bold text-text-primary">96% <span className="text-[10px] text-text-secondary font-normal">accuracy</span></div>
                <div className="text-[10px] text-text-secondary">Real-time 3D model sync</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-mono text-green-400">3s ago</div>
                <div className="text-[10px] text-text-secondary">Last sync</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg overflow-hidden">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wide">AI Activity</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-12 animate-scroll whitespace-nowrap">
              {[...tickerEvents, ...tickerEvents].map((event, i) => (
                <span key={i} className="text-[11px] text-text-secondary">
                  <span className="text-cyan-400 mr-2">&#9656;</span>{event}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick nav */}
      <div className="grid grid-cols-5 gap-3">
        {[
          { label: 'Agentic AI', href: '/operations/agentic-ai', icon: Cpu },
          { label: 'Digital Twin', href: '/operations/digital-twin', icon: Eye },
          { label: 'IoT Sensors', href: '/operations/iot', icon: Radio },
          { label: 'Energy', href: '/operations/energy', icon: Zap },
          { label: '5G Network', href: '/operations/network', icon: Wifi },
        ].map((nav) => (
          <Link key={nav.href} href={nav.href} className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3 flex items-center gap-3 hover:border-cyan-500/40 transition-colors group">
            <nav.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
            <span className="text-xs font-semibold text-text-primary group-hover:text-cyan-300 transition-colors">{nav.label}</span>
            <ChevronRight className="w-4 h-4 text-text-secondary ml-auto" />
          </Link>
        ))}
      </div>

      {/* Ticker scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  )
}
