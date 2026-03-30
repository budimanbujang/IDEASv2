'use client'

import React from 'react'
import Link from 'next/link'
import {
  Search, Building2, Users, Trophy, Globe, Radio, ShoppingBag,
  Activity, TrendingUp, ArrowUpRight, ArrowDownRight, Minus,
  Heart, Wheat, UtensilsCrossed, Dna, Cpu, Sparkles,
  Bot, Car, Sun, Wifi, ChevronRight, Clock, Zap,
  BarChart3, Target, MapPin
} from 'lucide-react'

const statCards = [
  { label: 'Registered Capabilities', value: '147', icon: Search, trend: '+12', trendDir: 'up' as const },
  { label: 'Active Organisations', value: '82', icon: Building2, trend: '+5', trendDir: 'up' as const },
  { label: 'Engagement Funnel', value: '378', icon: Users, trend: 'E:340 R:28 P:8 A:2', trendDir: 'stable' as const },
  { label: 'Grand Challenges Live', value: '3', icon: Trophy, trend: '94 submissions', trendDir: 'up' as const },
  { label: 'Federation Partners', value: '7', icon: Globe, trend: '+2 negotiating', trendDir: 'up' as const },
  { label: 'IoT Sensors Online', value: '48,247', icon: Radio, trend: '/ 50,000', trendDir: 'stable' as const },
  { label: 'Marketplace Revenue', value: 'RM2.4M', icon: ShoppingBag, trend: 'MTD', trendDir: 'up' as const },
  { label: 'Ecosystem Health', value: '78/100', icon: Activity, trend: '+3', trendDir: 'up' as const },
]

const smartCityPulse = [
  { label: 'AI Decisions Today', value: '12,400', icon: Bot, color: '#22C55E' },
  { label: 'Autonomous Vehicles', value: '3 active', icon: Car, color: '#06B6D4' },
  { label: 'Solar Generation', value: '2.4 MW', icon: Sun, color: '#F59E0B' },
  { label: '5G Uptime', value: '99.97%', icon: Wifi, color: '#6366F1' },
]

const discoveryHighlights = [
  { name: 'GMP Manufacturing Bay', detail: '3 months spare capacity — SinoGreen Manufacturing', type: 'Manufacturing', availability: 'available' },
  { name: 'Tropical Crop Dataset', detail: '850K records — JPG/Kulim plantation analytics', type: 'Dataset', availability: 'available' },
  { name: 'Semiconductor Cleanroom', detail: '2,400m² — Available Q3 2026', type: 'Facility', availability: 'limited' },
]

const grandChallenges = [
  { id: 'gc-1', title: 'Tropical Disease Diagnostics', theme: 'Biotech + AI', prize: 'RM500K', submissions: 47, deadline: 'Aug 2026', status: 'open', color: '#EC4899' },
  { id: 'gc-3', title: 'Data Centre Cooling Innovation', theme: 'Circular Water Systems', prize: 'RM750K', submissions: 23, deadline: 'Sep 2026', status: 'open', color: '#06B6D4' },
  { id: 'gc-5', title: 'Next-Gen Semiconductor Packaging', theme: 'Advanced Packaging', prize: 'RM1M', submissions: 31, deadline: 'Oct 2026', status: 'open', color: '#6366F1' },
]

const guildSummary = [
  { id: 'healthcare', name: 'Healthcare', company: 'KPJ', icon: Heart, color: '#E11D48', projects: 8, throughput: 72 },
  { id: 'proptech', name: 'Proptech', company: 'JLG', icon: Building2, color: '#3B82F6', projects: 6, throughput: 65 },
  { id: 'agrifood', name: 'Agrifood', company: 'JPG/Kulim', icon: Wheat, color: '#22C55E', projects: 5, throughput: 78 },
  { id: 'food-services', name: 'Food Services', company: 'QSR', icon: UtensilsCrossed, color: '#F97316', projects: 4, throughput: 68 },
  { id: 'life-sciences', name: 'Life Sciences', company: 'KPJ+Biotech', icon: Dna, color: '#EC4899', projects: 3, throughput: 45 },
  { id: 'semiconductor', name: 'Semiconductor', company: 'GSC', icon: Cpu, color: '#6366F1', projects: 3, throughput: 38 },
]

const federationPartners = [
  { name: 'JTC one-north', country: 'Singapore', x: 72, y: 58 },
  { name: 'Biopolis', country: 'Singapore', x: 73, y: 57 },
  { name: 'Brainport Eindhoven', country: 'Netherlands', x: 42, y: 28 },
  { name: 'Pangyo Techno Valley', country: 'South Korea', x: 80, y: 32 },
  { name: 'Zhangjiang', country: 'China', x: 78, y: 38 },
  { name: 'Station F', country: 'France', x: 40, y: 30 },
  { name: 'Fraunhofer', country: 'Germany', x: 43, y: 27 },
]

const recentActivity = [
  { time: '2 min ago', event: 'GMP Manufacturing Bay registered as available capability', layer: 'Discovery', color: '#007B7F' },
  { time: '15 min ago', event: 'AgriMind AI (Singapore) signed up as Explorer', layer: 'Engagement', color: '#3B82F6' },
  { time: '1 hr ago', event: 'Grand Challenge submission: "AI Diagnostic Kit for Dengue"', layer: 'Acceleration', color: '#A855F7' },
  { time: '1 hr ago', event: 'TrafficFlow AI optimised 48 signal cycles (L1 autonomous)', layer: 'Operations', color: '#06B6D4' },
  { time: '3 hr ago', event: 'Semiconductor Supply Chain Dashboard — new Enterprise subscriber', layer: 'Monetisation', color: '#D4A847' },
  { time: '5 hr ago', event: 'Brainport Eindhoven: exchange residency application received', layer: 'Federation', color: '#22C55E' },
  { time: '1 day ago', event: 'Ecosystem Health Score updated: 78/100 (+3 from last month)', layer: 'Intelligence', color: '#F59E0B' },
]

const phaseData = [
  { phase: 0, label: 'Foundation', months: '1-6', projects: 5, status: 'in_progress' },
  { phase: 1, label: 'Launch', months: '7-18', projects: 6, status: 'planned' },
  { phase: 2, label: 'Scale', months: '19-36', projects: 6, status: 'planned' },
  { phase: 3, label: 'Maturity', months: '37-60', projects: 6, status: 'planned' },
]

const TrendIcon = ({ dir }: { dir: 'up' | 'down' | 'stable' }) => {
  if (dir === 'up') return <ArrowUpRight className="w-3 h-3 text-green-400" />
  if (dir === 'down') return <ArrowDownRight className="w-3 h-3 text-red-400" />
  return <Minus className="w-3 h-3 text-text-secondary" />
}

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">
            Welcome back, <span className="gradient-text">Datuk Syed</span>
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            IDEAS 2.0 Platform Overview — {new Date().toLocaleDateString('en-MY', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30">
          <span className="text-accent-gold text-xs font-semibold">ANCHOR</span>
          <span className="text-text-secondary text-xs">Board Chair</span>
        </div>
      </div>

      {/* Stat Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-surface border border-border rounded-lg p-3 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className="w-4 h-4 text-primary" />
              <span className="text-[10px] text-text-secondary uppercase tracking-wide">{stat.label}</span>
            </div>
            <div className="text-lg font-bold text-text-primary">{stat.value}</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendIcon dir={stat.trendDir} />
              <span className="text-[10px] text-text-secondary">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Johor Momentum Strip */}
      <div className="bg-surface-elevated border border-border rounded-lg p-3 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Johor Momentum</span>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <span><strong className="text-text-primary">RM110B</strong> <span className="text-text-secondary">approved investments (2025)</span></span>
          <span><strong className="text-text-primary">12.5%</strong> <span className="text-text-secondary">population growth</span></span>
          <span><strong className="text-text-primary">65%</strong> <span className="text-text-secondary">RTS Link complete</span></span>
          <span><strong className="text-text-primary">+5.3%</strong> <span className="text-text-secondary">property prices</span></span>
        </div>
        <span className="text-[10px] text-text-secondary italic">Johor&apos;s historic convergence window</span>
      </div>

      {/* Smart City Pulse */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          <h2 className="text-sm font-semibold text-text-primary">Smart City Pulse</h2>
          <span className="text-[10px] text-text-secondary">LIVE</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {smartCityPulse.map((item) => (
            <div key={item.label} className="bg-surface border border-border rounded-lg p-3 flex items-center gap-3 hover:border-ops-command/30 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <div>
                <div className="text-lg font-bold text-text-primary">{item.value}</div>
                <div className="text-[10px] text-text-secondary">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discovery Engine Highlights */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            Discovery Engine Highlights
          </h2>
          <Link href="/discover" className="text-xs text-primary hover:text-primary-light flex items-center gap-1">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {discoveryHighlights.map((item) => (
            <div key={item.name} className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{item.type}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.availability === 'available' ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'}`}>
                  {item.availability}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">{item.name}</h3>
              <p className="text-xs text-text-secondary">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Grand Challenges */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            <Trophy className="w-4 h-4 text-accent-gold" />
            Active Grand Challenges
          </h2>
          <Link href="/accelerate/grand-challenges" className="text-xs text-primary hover:text-primary-light flex items-center gap-1">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {grandChallenges.map((gc) => (
            <div key={gc.id} className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: gc.color }} />
              <div className="flex items-center gap-2 mb-2 mt-1">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${gc.color}20`, color: gc.color }}>{gc.theme}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">{gc.status}</span>
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-2">{gc.title}</h3>
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span className="font-semibold text-accent-gold">{gc.prize} prize</span>
                <span>{gc.submissions} submissions</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-text-secondary">
                <Clock className="w-3 h-3" />
                <span>Deadline: {gc.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Innovation Guilds */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Innovation Guilds
          </h2>
          <Link href="/engage/guilds" className="text-xs text-primary hover:text-primary-light flex items-center gap-1">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
          {guildSummary.map((guild) => (
            <Link key={guild.id} href={`/engage/guilds/${guild.id}`} className="bg-surface border border-border rounded-lg p-3 hover:border-primary/30 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ backgroundColor: guild.color }} />
              <div className="flex items-center gap-2 mb-2 mt-1">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${guild.color}15` }}>
                  <guild.icon className="w-4 h-4" style={{ color: guild.color }} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-primary group-hover:text-primary transition-colors">{guild.name}</div>
                  <div className="text-[10px] text-text-secondary">{guild.company}</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-text-secondary mb-1">
                <span>{guild.projects} projects</span>
                <span>{guild.throughput}%</span>
              </div>
              <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${guild.throughput}%`, backgroundColor: guild.color }} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Catalytic Projects Timeline */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            23 Catalytic Projects
          </h2>
          <Link href="/projects" className="text-xs text-primary hover:text-primary-light flex items-center gap-1">
            View roadmap <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-xs text-text-secondary">RM2.5–3.5B total investment</span>
            <span className="mx-2 text-border">|</span>
            <span className="text-xs text-text-secondary">60 months</span>
            <span className="mx-2 text-border">|</span>
            <span className="text-xs text-text-secondary">4 phases</span>
          </div>
          <div className="flex items-center gap-2">
            {phaseData.map((phase, i) => (
              <React.Fragment key={phase.phase}>
                <div className={`flex-1 rounded-lg p-3 border transition-colors ${phase.status === 'in_progress' ? 'border-primary bg-primary/5' : 'border-border bg-background'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${['#007B7F', '#3B82F6', '#A855F7', '#D4A847'][phase.phase]}20`, color: ['#007B7F', '#3B82F6', '#A855F7', '#D4A847'][phase.phase] }}>
                      P{phase.phase}
                    </span>
                    <span className="text-xs font-semibold text-text-primary">{phase.label}</span>
                  </div>
                  <div className="text-[10px] text-text-secondary">Months {phase.months}</div>
                  <div className="text-[10px] text-text-secondary">{phase.projects} projects</div>
                  {phase.status === 'in_progress' && (
                    <div className="mt-1 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                      <span className="text-[10px] text-primary font-medium">Active</span>
                    </div>
                  )}
                </div>
                {i < phaseData.length - 1 && (
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="text-[8px] text-text-secondary">Gate {i + 1}</div>
                    <div className="w-3 h-3 rotate-45 border border-accent-gold bg-accent-gold/10" />
                    <div className="text-[8px] text-text-secondary">M{[6, 18, 36][i]}</div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Federation Network Mini Map */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            Federation Network
          </h2>
          <Link href="/federation" className="text-xs text-primary hover:text-primary-light flex items-center gap-1">
            View map <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4 relative overflow-hidden" style={{ minHeight: '200px' }}>
          {/* Simplified world map using dots */}
          <svg viewBox="0 0 100 60" className="w-full h-48 opacity-20" preserveAspectRatio="xMidYMid meet">
            {/* Simplified continent outlines as paths */}
            <ellipse cx="25" cy="25" rx="12" ry="8" fill="none" stroke="#1E3A5F" strokeWidth="0.3" />
            <ellipse cx="42" cy="28" rx="8" ry="10" fill="none" stroke="#1E3A5F" strokeWidth="0.3" />
            <ellipse cx="55" cy="25" rx="15" ry="12" fill="none" stroke="#1E3A5F" strokeWidth="0.3" />
            <ellipse cx="75" cy="40" rx="8" ry="6" fill="none" stroke="#1E3A5F" strokeWidth="0.3" />
            <ellipse cx="80" cy="30" rx="10" ry="8" fill="none" stroke="#1E3A5F" strokeWidth="0.3" />
          </svg>
          {/* IBTEC centre marker */}
          <div className="absolute" style={{ left: '71%', top: '55%' }}>
            <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow border-2 border-primary-light" />
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-primary font-bold whitespace-nowrap">IBTEC</span>
          </div>
          {/* Federation partner dots */}
          {federationPartners.map((p) => (
            <div key={p.name} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60 border border-primary" />
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-text-secondary whitespace-nowrap">{p.name}</span>
            </div>
          ))}
          {/* Key stat */}
          <div className="absolute bottom-3 left-3 text-xs text-text-secondary">
            <span className="text-primary font-semibold">7 partners</span> across 5 countries — &quot;The single most powerful marketability lever&quot;
          </div>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            Recent Activity
          </h2>
        </div>
        <div className="bg-surface border border-border rounded-lg divide-y divide-border">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 hover:bg-surface-elevated/50 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-[10px] text-text-secondary w-16 flex-shrink-0">{item.time}</span>
              <span className="text-xs text-text-primary flex-1">{item.event}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-elevated text-text-secondary">{item.layer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
